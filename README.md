# Scripts JavaScript - Testes

Este repositório contém cinco scripts JavaScript que demonstram diferentes funcionalidades: 
##### 1 - Soma de números
##### 2 - Verificação de Fibonacci
##### 3 - Cálculo de faturamento
##### 4 - Percentual de faturamento por estado 
##### 5 - Inversão de string. 
Cada script é independente e pode ser executado separadamente.

## Requisitos

- Node.js (qualquer versão recente)
- Terminal ou prompt de comando

### Como instalar o Node.js

Dowloand para o Node.js, site oficial: [https://nodejs.org/](https://nodejs.org/).

---

## Scripts

### Todos os scripts podem ser executados `node test{numero do testes pretendido}.js`, alguns scripts possuem interação com solicitação de valores de entrada.

Este script calcula a soma dos números de 1 até 13.

#### Como executar:
1. Abra o terminal.
2. Navegue até o diretório onde o arquivo está localizado.
3. Execute o comando:
```
    bash
      npm run test{numero do testes pretendido}
```
   
#### API de Reversão de String via Lambda na Aws
Este script faz uma requisição a uma API para inverter uma string. 
O endpoint da API espera uma string como parâmetro de consulta e retorna a string invertida.
```bash
   curl --location 'https://n03eizts4c.execute-api.us-east-1.amazonaws.com/prod/invert?str=Reverso' \
        --header 'x-api-key: WIbtoiQ09u3oZFXBn6asyUtiXZNc1s314dJVXmn9'
```
### *Limitação de Requisições*

**O token de acesso à API está limitado a 10 requisições por dia. Caso atinja esse limite,
você precisará esperar até o próximo ciclo diário para realizar novas requisições. Ou solicitar um novo token via email: antonniogt@gmail.com**