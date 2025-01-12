import Invert from "../services/invert.js"

describe('Invert', () => {
    let invert

    beforeEach(() => {
        invert = new Invert()
    })

    it('should invert a string correctly', () => {
        const input = 'hello'
        const result = invert.invertString(input)
        expect(result).toBe('olleh')
    })

    it('should return an empty string when input is empty', () => {
        const input = ''
        const result = invert.invertString(input)
        expect(result).toBe('')
    })

    it('should invert a string with spaces correctly', () => {
        const input = 'hello world'
        const result = invert.invertString(input)
        expect(result).toBe('dlrow olleh')
    })

    it('should handle strings with special characters', () => {
        const input = 'hello@123!'
        const result = invert.invertString(input)
        expect(result).toBe('!321@olleh')
    })

    it('should handle a string with a single character', () => {
        const input = 'a'
        const result = invert.invertString(input)
        expect(result).toBe('a')
    })

    it('should handle a string with numbers', () => {
        const input = '12345'
        const result = invert.invertString(input)
        expect(result).toBe('54321')
    })
})
