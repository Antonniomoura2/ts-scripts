const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function isFibonacci(num) {
    if (num < 0) return false

    let a = 0, b = 1

    while (a <= num) {
        if (a === num) return true;
        [a, b] = [b, a + b]
    }

    return false
}

rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: (Valor padrão 21)', (input) => {
    let num = parseInt(input, 10)
    if (isNaN(num) || !num) {
        num = 21
    }

    if (isNaN(num)) {
        console.log('Por favor, insira um número válido.');
    } else {
        console.log(`O número ${isFibonacci(num) ? '' : 'NÂO '}pertence à sequência de Fibonacci. Número: ${num}`)
    }

    rl.close();
});
