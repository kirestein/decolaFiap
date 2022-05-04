const inputBox = document.querySelector('#entrada')
const addBtn = document.querySelector('.inputField button')
const todoList = document.querySelector('.todoList')
const deleteAllBtn = document.querySelector('.footer button')

//arrow function

inputBox.onkeyup = _ => {
  let userData = inputBox.value //Esta variável pega o valor de entrada do usuário
  if (userData.trim() != 0) { //Se os valores do usuário não forem apenas espaços
    addBtn.classList.add('active')
  }else{
    addBtn.classList.remove('active')
  }
}