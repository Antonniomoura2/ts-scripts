export default class Calculate {
    calculateSumFromNumber(limit) {
        let sum = 0
        for (let k = 1; k <= limit; k++) {
            sum += k
        }
        return sum
    }

    calculateStatePercentages(billingByState) {
        const totalBilling = Object.values(billingByState).reduce((total, valor) => total + valor, 0)

        const percentForState = {}
        for (const state in billingByState) {
            if (billingByState.hasOwnProperty(state)) {
                const percent = (billingByState[state] / totalBilling) * 100
                percentForState[state] = percent.toFixed(2)
            }
        }

        return percentForState
    }
}
