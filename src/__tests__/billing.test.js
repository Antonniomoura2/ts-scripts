import Billing from "../services/billing.js"

describe('Billing', () => {
    it('should calculate billing correctly', () => {
        const invoicing = [
            { invoicing: 100 },
            { invoicing: 200 },
            { invoicing: 300 },
            { invoicing: 400 },
        ]

        const result = new Billing(invoicing).handler()

        expect(result.lowerRevenue).toBe(100)
        expect(result.higherRevenue).toBe(400)
        expect(result.daysAboveAverage).toBe(2)
        expect(result.monthlyAverage).toBe('250.00')
    })

    it('should handle when invoicing has only one item', () => {
        const invoicing = [
            { invoicing: 100 },
        ]

        const result = new Billing(invoicing).handler()

        expect(result.lowerRevenue).toBe(100)
        expect(result.higherRevenue).toBe(100)
        expect(result.daysAboveAverage).toBe(0)
        expect(result.monthlyAverage).toBe('100.00')
    })

    it('should return 0 for daysAboveAverage when all invoicing values are equal', () => {
        const invoicing = [
            { invoicing: 200 },
            { invoicing: 200 },
            { invoicing: 200 },
        ]

        const result = new Billing(invoicing).handler()

        expect(result.daysAboveAverage).toBe(0)
    })

    it('should return empty result for no valid invoicing', () => {
        const invoicing = [
            { invoicing: -10 },
            { invoicing: -20 },
            { invoicing: -30 },
        ]

        const result = new Billing(invoicing).handler()

        expect(result.lowerRevenue).toBe(0)
        expect(result.higherRevenue).toBe(0)
        expect(result.daysAboveAverage).toBe(0)
        expect(result.monthlyAverage).toBe('0.00')
    })

    it('should return correct values for mixed valid and invalid invoicing', () => {
        const invoicing = [
            { invoicing: 100 },
            { invoicing: 100 },
            { invoicing: -50 },
            { invoicing: 200 },
            { invoicing: 300 },
        ]

        const result = new Billing(invoicing).handler()

        expect(result.lowerRevenue).toBe(100)
        expect(result.higherRevenue).toBe(300)
        expect(result.daysAboveAverage).toBe(2)
        expect(result.monthlyAverage).toBe('175.00')
    })
})