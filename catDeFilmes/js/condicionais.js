// let a = Math.floor(Math.random() * 100)
// console.log(a)

// if (a > 50) {
//   console.log('O valor de a está na metade maior da sequência')
// } else if (a === 50) {
//   console.log('O valor de a é igual a 50')
// } else {
//   console.log('O valor de a está na metade menor da sequência')
// }

//! Diferença entre a comparação com dois iguais(==) e com três iguais(===)

let a = 50
let b = 50
let c = '50'

// console.log(`Esta comparação é: ${a == b}, ou seja ${a} = ${b}!`)//? estamos fazendo comparação com dois iguais, ou seja, comparação de valores
// console.log(`Esta comparação é: ${a == c}, ou seja ${a} = ${c}!`)//? estamos fazendo comparação com dois iguais, ou seja, comparação de valores

console.log(`Esta comparação é: ${a === b}, ou seja ${a} = ${b}!`)//? estamos fazendo comparação com três iguais, ou seja, comparação de valores e tipos
console.log(`Esta comparação é: ${a === c}, ou seja ${a} != ${c}!`)//? estamos fazendo comparação com três iguais, ou seja, comparação de valores e tipos