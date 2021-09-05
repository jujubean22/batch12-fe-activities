//Variables
const ticCells = document.querySelectorAll('.tic-cell')
const board = document.querySelector('.tic-container')
const winningMessage = document.querySelector('.winning-message-text')
const winningMessageContainer = document.querySelector('.winning-message')
const x_class = "x"
const o_class = "o"
const restart = document.querySelector('.restart')
const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let oTurn
let moves = []

startGame()

restart.addEventListener('click', startGame) // restart game when restart button is clicked

//
function startGame() {
    oTurn = false
    ticCells.forEach(cell => {
        cell.classList.remove(x_class)//remove class when restart is clicked
        cell.classList.remove(o_class)//remove class when restart is clicked
        cell.removeEventListener('click', cellClick)
        cell.addEventListener('click', cellClick, {once: true})
    })
    setHover()
    winningMessageContainer.classList.remove('show') //remove class when restart is clicked
}


function cellClick (e){ 
    const cell = e.target
    const currentClass = oTurn ? o_class : x_class
    putMark(cell, currentClass)
    if (checkWin(currentClass)){
        endGame(false)
    } else if (isDraw()){
        endGame(true)
    } else {
    changeTurn()
    setHover()
    storeMove()
    }
}

function storeMove(){
    let arr1 = []
    let arr2 = []
    let arr3 = []
    ticCells.forEach( cell =>{
        console.log(cell.classList)
    })
}

function endGame (draw){
    if (draw){
        winningMessage.innerText = `It's a Draw`
    }else {
        winningMessage.innerText = `${oTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageContainer.classList.add('show')
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

function checkWin (currentClass){
    return winningCombo.some(combo => {
        return combo.every(index => {
            return ticCells[index].classList.contains(currentClass)
        })
    })
}

function isDraw(){
    return [...ticCells].every(cell => {
        return cell.classList.contains(x_class) || cell.classList.contains(o_class)
    })
}