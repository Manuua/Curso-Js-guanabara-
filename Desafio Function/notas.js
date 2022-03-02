// sistema de dados escolares 
//Esse exercício vai trabalhar a transformação de notas escolares, onde devemos criar um algoritmo para transformar notas númericas em notas de caracteres.

let nota1 = 68


// convertendo para carcteres 

if (nota1 >= 90 ){
    nota1=  "A"
    console.log(`sua nota foi ${nota1} ` )
}else if (nota1 >=80 ){
    nota1= "B"
    console.log(`sua nota foi ${nota1} ` )
}else if (nota1 >= 70 ){
    nota1 = "c"
    console.log(`sua nota foi ${nota1} ` )
}else if (nota1 >=60 ){
    nota1="D"
    console.log(`sua nota foi ${nota1} ` )
} else if (nota1 <= 60)  {
    nota1="E"
    console.log(`sua nota foi ${nota1} ` )
}