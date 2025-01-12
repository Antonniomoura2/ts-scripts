function calculateStatePercentages(billingByState) {
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

const invoicing = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Others": 19849.53
}

const percentages = calculateStatePercentages(invoicing)

console.log('Percentuais de representação por estado:')
for (const state in percentages) {
    console.log(`${state}: ${percentages[state]}%`)
}
