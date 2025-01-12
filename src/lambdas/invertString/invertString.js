exports.handler = async (event) => {
    try {
        const str = event?.queryStringParameters?.str;

        if (!str) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Missing "str" query parameter' }),
            };
        }
        let invertedString = '';

        for (let i = str.length - 1; i >= 0; i--) {
            invertedString += str[i];
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ invertedString }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: `Internal Server Error: ${JSON.stringify(error.message)}` }),
        };
    }
};
