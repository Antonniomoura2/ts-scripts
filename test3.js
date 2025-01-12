const fs = require('fs')

function calculateBilling(invoicing) {
    const validValues = invoicing.filter(item => item.invoicing > 0)

    const lowerRevenue = Math.min(...validValues.map(item => item.invoicing))

    const higherRevenue = Math.max(...validValues.map(item => item.invoicing))

    const monthlyAverage = validValues.reduce((sum, item) => sum + item.invoicing, 0) / validValues.length

    const daysAboveAverage = validValues.filter(item => item.invoicing > monthlyAverage).length

    return {
        lowerRevenue,
        higherRevenue,
        daysAboveAverage,
        monthlyAverage: monthlyAverage.toFixed(2),
    }
}
fs.readFile('./data/invoicing.json', 'utf8', (err, data) => {
    if (err) {
        console.log('Erro ao ler o arquivo:', err)
        return
    }

    const invoicing = JSON.parse(data) || []

    const result = calculateBilling(invoicing)

    console.log('Menor valor de faturamento:', result.lowerRevenue)
    console.log('Maior valor de faturamento:', result.higherRevenue)
    console.log('Número de dias acima da média:', result.daysAboveAverage)
    console.log('Média mensal:', result.monthlyAverage)
})