export default class Fibonacci {
    isFibonacci(num) {
        if (num < 0) return false

        let a = 0, b = 1

        while (a <= num) {
            if (a === num) return true;
            [a, b] = [b, a + b]
        }

        return false
    }
}