const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverterString(str) {
    let result = ''

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }

    return result
}

rl.question('Digite uma string para inverter (valor padrão: Retorno): ', (input) => {
    const stringToReverse = input || 'Retorno'
    const result = inverterString(stringToReverse);

    console.log("Valor de entrada:", stringToReverse);
    console.log("Valor de entrada invertido:", result);

    rl.close();
});
