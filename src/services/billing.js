export default class Billing {
    constructor(invoicing) {
        this.validValues = invoicing.filter(item => item.invoicing > 0)
    }
    validValues = []
    lowerRevenue = 0
    higherRevenue = 0
    monthlyAverage = 0
    daysAboveAverage = 0

    handler() {
        if (this.validValues.length > 0) {
            this.calculateBilling()
        }

        return {
            lowerRevenue: this.lowerRevenue,
            higherRevenue: this.higherRevenue,
            daysAboveAverage: this.daysAboveAverage,
            monthlyAverage: this.monthlyAverage.toFixed(2),
        }
    }

    calculateBilling() {
        this.lowerRevenue = Math.min(...this.validValues.map(item => item.invoicing)) || 0
        this.higherRevenue = Math.max(...this.validValues.map(item => item.invoicing)) || 0
        this.monthlyAverage = this.validValues.reduce((sum, item) => sum + item.invoicing, 0) / this.validValues.length
        this.daysAboveAverage = this.validValues.filter(item => item.invoicing > this.monthlyAverage).length
    }
}
