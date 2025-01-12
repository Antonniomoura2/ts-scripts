import readline from 'readline';
import Fibonacci from "./services/fibonacci.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: (Valor padrão 21)', (input) => {
    let num = parseInt(input, 10)
    if (isNaN(num) || !num) {
        num = 21
    }

    const fibonacci = new Fibonacci()

    if (isNaN(num)) {
        console.log('Por favor, insira um número válido.');
    } else {
        console.log(`O número ${fibonacci.isFibonacci(num) ? '' : 'NÂO '}pertence à sequência de Fibonacci. Número: ${num}`)
    }

    rl.close();
});
