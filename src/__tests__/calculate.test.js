import Calculate from "../services/calculate.js";

describe('Calculate', () => {
    let calculate

    beforeEach(() => {
        calculate = new Calculate()
    })

    describe('calculateSumFromNumber', () => {
        it('should return the correct sum for a given limit', () => {
            const limit = 5
            const result = calculate.calculateSumFromNumber(limit)
            expect(result).toBe(15)
        })

        it('should return 0 for a limit of 0', () => {
            const limit = 0
            const result = calculate.calculateSumFromNumber(limit)
            expect(result).toBe(0)
        })

        it('should return the correct sum for a larger limit', () => {
            const limit = 10
            const result = calculate.calculateSumFromNumber(limit)
            expect(result).toBe(55)
        })
    })

    describe('calculateStatePercentages', () => {
        it('should return correct percentages for state billing', () => {
            const billingByState = {
                "California": 1000,
                "Texas": 500,
                "Florida": 500,
            }

            const result = calculate.calculateStatePercentages(billingByState)

            expect(result.California).toBe('50.00')
            expect(result.Texas).toBe('25.00')
            expect(result.Florida).toBe('25.00')
        })

        it('should handle an empty object and return empty percentages', () => {
            const billingByState = {}
            const result = calculate.calculateStatePercentages(billingByState)
            expect(result).toEqual({})
        })

        it('should handle a case where one state has all the billing', () => {
            const billingByState = {
                "California": 1000,
                "Texas": 0,
                "Florida": 0,
            }

            const result = calculate.calculateStatePercentages(billingByState)

            expect(result.California).toBe('100.00')
            expect(result.Texas).toBe('0.00')
            expect(result.Florida).toBe('0.00')
        })

        it('should return 0% for a state with zero billing', () => {
            const billingByState = {
                "California": 1000,
                "Texas": 0,
            }

            const result = calculate.calculateStatePercentages(billingByState)

            expect(result.Texas).toBe('0.00')
        })
    })
})
