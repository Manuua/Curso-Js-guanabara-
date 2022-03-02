// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32

function conversionCelciustoFahrenheit(fahrenheit,celsius){
    const c =(fahrenheit - 32) * 5/9 
    const f =celsius* 9/5 + 32
    const result = `the Fahrenehit in celsius is ${c.toFixed(2)} and Celsius in Fahrenehit is ${f.toFixed(2)}`
    return result 
}

// calling function - parameter order (fahrenheit,celsius)
const conversion =conversionCelciustoFahrenheit (78,20)
console.log(conversion)

const celsius = conversionCelciustoFahrenheit(NaN,20)
console.log(celsius)

const fahrenheit =conversionCelciustoFahrenheit(89, NaN)
console.log(fahrenheit)