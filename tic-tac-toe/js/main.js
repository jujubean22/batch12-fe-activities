//Variables
const ticCells = document.querySelectorAll('.tic-cell')
const board = document.querySelector('.tic-container')
const x_class = "x"
const o_class = "o"
let oTurn

startGame()

function startGame() {
    oTurn = false
    ticCells.forEach(cell => {
        cell.addEventListener('click', cellClick, {once: true})
    })
    setHover()
}
function cellClick (e){ 
    const cell = e.target
    const currentClass = oTurn ? o_class : x_class
    putMark(cell, currentClass)
    changeTurn()
    setHover()
}

function putMark(cell,currentClass){
    cell.classList.add(currentClass)
}

function changeTurn(){
    oTurn = !oTurn
}

function setHover(){
    board.classList.remove(x_class)
    board.classList.remove(o_class)
    if (oTurn){
        board.classList.add(o_class)
    } else{
        board.classList.add(x_class)
    }

}