import fs from 'fs'
import Billing from "./services/billing.js";

fs.readFile('./src/services/data/invoicing.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Erro ao ler o arquivo:', err)
        return
    }

    const invoicing = JSON.parse(data) || []
    const result = new Billing(invoicing).handler()

    console.log('Menor valor de faturamento:', result.lowerRevenue)
    console.log('Maior valor de faturamento:', result.higherRevenue)
    console.log('Número de dias acima da média:', result.daysAboveAverage)
    console.log('Média mensal:', result.monthlyAverage)
})