import Calculate from "./services/calculate.js";

const invoicing = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Others": 19849.53
}

const percentages = new Calculate().calculateStatePercentages(invoicing)

console.log('Percentuais de representação por estado:')
for (const state in percentages) {
    console.log(`${state}: ${percentages[state]}%`)
}
