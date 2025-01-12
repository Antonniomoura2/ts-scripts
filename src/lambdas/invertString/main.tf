terraform {
  required_version = ">= 1.0"
}

provider "aws" {
  region = var.aws_region
}

terraform {
  backend "s3" {
    bucket         = "invert-string-cloud"
    key            = "infra/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "invert-string-cloud-table"
  }
}

resource "archive_file" "lambda_zip" {
  type        = "zip"
  source_file = "./invertString.js"
  output_path = "./invertString.zip"
}

resource "aws_lambda_function" "invert_string_lambda" {
  function_name = "invertStringLambda"
  role          = aws_iam_role.lambda_exec_role.arn
  handler       = "invertString.handler"
  runtime       = "nodejs20.x"

  filename      = archive_file.lambda_zip.output_path
  source_code_hash = filebase64sha256(archive_file.lambda_zip.output_path)

  environment {
    variables = {
      KEY = "value"
    }
  }

  depends_on = [archive_file.lambda_zip]
}

resource "aws_iam_role" "lambda_exec_role" {
  name = "lambda_exec_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action    = "sts:AssumeRole"
        Effect    = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_policy" {
  role       = aws_iam_role.lambda_exec_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# Start - Criação da API Gateway
resource "aws_lambda_permission" "allow_api_gateway" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.invert_string_lambda.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.api.execution_arn}/*/*"
}

resource "aws_api_gateway_rest_api" "api" {
  name        = "invertStringAPI"
  description = "API to invert strings using Lambda"
}

resource "aws_api_gateway_resource" "string_resource" {
  rest_api_id = aws_api_gateway_rest_api.api.id
  parent_id   = aws_api_gateway_rest_api.api.root_resource_id
  path_part   = "invert"
}

resource "aws_api_gateway_method" "get_method" {
  rest_api_id   = aws_api_gateway_rest_api.api.id
  resource_id   = aws_api_gateway_resource.string_resource.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "lambda_integration" {
  rest_api_id             = aws_api_gateway_rest_api.api.id
  resource_id             = aws_api_gateway_resource.string_resource.id
  http_method             = aws_api_gateway_method.get_method.http_method
  integration_http_method = "POST"  # Alterado para GET
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.invert_string_lambda.invoke_arn
}

resource "aws_api_gateway_deployment" "api_deployment" {
  depends_on = [aws_api_gateway_integration.lambda_integration]
  rest_api_id = aws_api_gateway_rest_api.api.id
}

# END - Criação da API Gateway

# Output da URL da API
output "api_url" {
  value = "https://${aws_api_gateway_rest_api.api.id}.execute-api.${var.aws_region}.amazonaws.com/prod/invert"
}
