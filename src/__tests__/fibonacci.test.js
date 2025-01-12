import Fibonacci from "../services/fibonacci.js"

const fibonacci = new Fibonacci()

describe('fibonacci', () => {
    it('should return true for Fibonacci numbers', () => {
        expect(fibonacci.isFibonacci(0)).toBe(true)
        expect(fibonacci.isFibonacci(1)).toBe(true)
        expect(fibonacci.isFibonacci(2)).toBe(true)
        expect(fibonacci.isFibonacci(3)).toBe(true)
        expect(fibonacci.isFibonacci(5)).toBe(true)
        expect(fibonacci.isFibonacci(8)).toBe(true)
        expect(fibonacci.isFibonacci(13)).toBe(true)
        expect(fibonacci.isFibonacci(21)).toBe(true)
    })

    it('should return false for non-Fibonacci numbers', () => {
        expect(fibonacci.isFibonacci(4)).toBe(false)
        expect(fibonacci.isFibonacci(6)).toBe(false)
        expect(fibonacci.isFibonacci(7)).toBe(false)
        expect(fibonacci.isFibonacci(9)).toBe(false)
        expect(fibonacci.isFibonacci(10)).toBe(false)
        expect(fibonacci.isFibonacci(11)).toBe(false)
        expect(fibonacci.isFibonacci(12)).toBe(false)
    })

    it('should return false for negative numbers', () => {
        expect(fibonacci.isFibonacci(-1)).toBe(false)
        expect(fibonacci.isFibonacci(-5)).toBe(false)
    })
})
