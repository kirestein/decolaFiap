//! Laços de Repetição são: For, While e Do ... While

//* vamos construir um loop for para fazer as tabuadas de 0 a 10

// let a = 0
// console.log(a = 0 + 1)// a = 1
// console.log(a = a + 1)//a = 1 + 1 => a = 2
// console.log(a += 1)// a = 2 + 1 => a = 3
// console.log(++a)//a = 3 + 1 => a = 4

// for (let i = 0; i <= 10; i++) {
//   console.log(`\nA tabuada do ${i} é:`)
//   for(let j = 0; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`)
//   }
// }

//* construindo um loop while

let a = 0

while (a > 0) {
  console.log('Bom dia do laço while!')
  a++
}

do {
  console.log('Bom dia do laço do ... while!')
} while(a > 0)
