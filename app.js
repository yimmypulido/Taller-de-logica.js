let list = [2, 5, 1, 8, 3, 7, 12, 44, 67, 5, 9, 15, 60];


// Ejercicio 1

// let nuMin = 1
// let nuMayor = 0

// for (const l of list) {

//     if( l > nuMayor){

//      nuMayor = l

//     }else if( l < nuMin){

//      nuMin = l

//     }
    
// }

// console.log (nuMayor)
// console.log (nuMin)

// Ejercicio 2

// let tabla = [ 1, 2 ,3 ,4 ,5 ,6 ,7 ,9 ,10];
// let resultado = 0;

// for (const t of tabla) {
    
//     const operation = t * 7
    
//     resultado = operation

//     console.log(`7 x ${t} = ${resultado} `)

// }

// Ejercicio 3

// function suma(...num){
// let total = 0;

// for (const number of num) {
    
//    total = total + number;

// }

//     return total;

// }


// console.log(suma(10, 10, 50))

// Ejercicio 4


// let frutas = ['pera', 'kiwi', 'mango', 'fresa'];

// let tasfru = []

// for (let i = frutas.length -1 ; i >= 0 ; i--) {

//     tasfru.push(frutas[i])
    
// }
// console.log(tasfru)

// Ejercicio 5

let horasRedesMundo = 2.7;
let horasRedesColombia = 3.6;

let yearSum = horasRedesColombia * 365
let daySum = yearSum / 24
let semanaSum = daySum / 7
let meSum = daySum/30

console.log(`las personas al año usan las redes sociales unas ${yearSum} h`)
console.log (`estos serian los dias que usan las redes sociales en colombia ${daySum} Dias`)
console.log ( `estas serian las semanas que usan las redes sociales en colombia ${semanaSum} semanas`)
console.log ( ` estos serian los meses que se usan las redes sociales en colombia ${meSum} meses`)