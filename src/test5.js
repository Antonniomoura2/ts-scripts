import readline from 'readline';
import Invert from "./services/invert.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite uma string para inverter (valor padrão: Retorno): ', (input) => {
    const stringToReverse = input || 'Retorno'
    const result = new Invert().invertString(stringToReverse);

    console.log("Valor de entrada:", stringToReverse);
    console.log("Valor de entrada invertido:", result);

    rl.close();
});
