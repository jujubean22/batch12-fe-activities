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

addButton.addEventListener('click', funcToDo)

// var listToDo = document.querySelectorAll("li");
//     var i;
//     for (i = 0; i < listToDo.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     listToDo[i].appendChild(span);}

function funcToDo(){
    if (inputField.value != ""){
    var list = document.createElement('li');
    list.innerText = inputField.value;
    toDoList.appendChild(list);
    inputField.value = "";
    list.addEventListener('click', function(){
    list.style.textDecoration = "line-through";})
    list.addEventListener('dblclick', function(){
    toDoList.removeChild(list);})
} else { 
    alert("Input Fied is Empty")

}}

