// show todo on click
const todo = document.querySelector('.center-below-right')
const todoShow = document.querySelector('#todo')
function hideShowTodo() {
if (todo.style.display !== "none") {
    todo.style.display = "none";
  } else {
    todo.style.display = "block";
  }
}
todoShow.addEventListener('click', hideShowTodo)

//functional todolist

let toDoList = document.getElementById('toDoList');
let addButton = document.getElementById('addToDo');
let inputField = document.getElementById('ToDoinput');
let close = document.querySelectorAll(".close")


addButton.addEventListener('click', funcToDo)

//creating  x as closing and the new value
function funcToDo () {
  if (inputField.value != "") {
    let list = document.createElement('li');
    let span = document.createElement("span");

    list.innerText = inputField.value;
    inputField.value = "";
    span.innerHTML = "\u00D7"
    span.className = "close";

//adding the input value and close to the list
    list.appendChild(span);
    toDoList.appendChild(list)


    let close = document.querySelectorAll(".close")
    let listItem = document.querySelectorAll("li")

    elemEventListeners(
      close,
      listItem, 
      close.length - 1
    )
  } else { 
    alert("Input Field is Empty")
  }
}
// event listeners for closing and line-through
function elemEventListeners (close, list, index){
  close[index].addEventListener("click", function(){
    this.parentNode.remove() 
  })
  list[index].addEventListener("click", function(){
    this.classList.toggle("strike") 
  })
}
