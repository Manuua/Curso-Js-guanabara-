// //Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
// * receitas: [] 
// * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.

let family = {
    incomes :[2500, 359 ,500, 380 ,589 ],
    expenses: [100, 150 ,1000, 500, 600]
}


function sum(array){
    let total = 0 ;

for(let value of array )
    total += value

    return total 
}


function calculatebalance(){
     const calculateicomes = sum(family.incomes)
     const calculateexpenses = sum(family.expenses)

     const total = calculateicomes - calculateexpenses

     const itsok = total >=0

     let balancetext = "negativo"

     if(itsok){
       balancetext="positivo"
     }
     console.log(`seu saldo é ${balancetext}: ${total}`)
}

calculatebalance()