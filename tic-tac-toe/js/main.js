//Variables
const choosePlayerPrompt = document.querySelector('.choosePlayerPrompt')
const choose = document.querySelectorAll('.choose')
const xp = document.getElementById('xp')
const op = document.getElementById('op')
let ticCells = document.querySelectorAll('.tic-cell')
const cells = Array.from(ticCells)
const board = document.querySelector('.tic-container')
const winningMessage = document.querySelector('.winning-message-text')
const winningMessageContainer = document.querySelector('.winning-message')
const X_class = document.querySelector('.x')
const O_class = document.querySelector('.o')
const Xclass = "x"
const Oclass = "o"
const undoBtn = document.getElementById('previous')
const redoBtn = document.getElementById('next')
const mainButtons = document.querySelector('.mainButtons')
const closeBtn = document.querySelector('.close')
const restart = document.querySelector('.restart')
const x_score = document.getElementById('Xscore')
const o_score = document.getElementById('Oscore')
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
let Oscore = 0
let Xscore = 0
let oTurn = null
let placement = null
let moves = []

//choosing player prompt
choose.forEach(chooseNow => {
    chooseNow.addEventListener('click', () => {
        if (chooseNow.id === 'xp'){
            oTurn = false;
        } else {
            oTurn = true
            board.classList.add(Oclass)
        }
        choosePlayerPrompt.style.display  = 'none'
        mainButtons.classList.add('hidden')
    })
})

startGame()

restart.addEventListener('click', startGame)
undoBtn.addEventListener('click', undoMove)
redoBtn.addEventListener('click', redoMove)

//restart the game
function startGame() {
    oTurn = false
    ticCells.forEach(cell => {
        cell.classList.remove(Xclass)
        cell.classList.remove(Oclass)
        cell.addEventListener('click', cellClick, {once: true})
    })
    setHover()
    let moves = []
    mainButtons.classList.add('hidden')
    winningMessageContainer.classList.remove('show') //remove prompt when restart is clicked
}

// func for event listener for all cell
function cellClick (e){
    const cell = e.target
    const currentClass = oTurn ? Oclass : Xclass
    putMark(cell, currentClass)
    if (checkWin(currentClass)){
        endGame(false)
    } else if (isDraw()){
        endGame(true)
    } else {
    changeTurn()
    setHover()
    }
}

//save all movement in an array so we can use undo and redo button
function storeMove(ticCells){
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let move = null

    ticCells.forEach((value, index) =>  {
        if (value.classList.contains(Xclass)) {
            move = 'x'
        } else if ( value.classList.contains(Oclass)){
            move = 'o'
        } else {
            move = ''
        } 
        if (index <= 2) {
            arr1.push(move)
        } else if (index >= 3 && index < 6){
            arr2.push(move)
        } else{
            arr3.push(move)
        }
    })
    moves.push([arr1, arr2, arr3])
    placement = moves.length - 1
}
function undoMove() {
    redoBtn.disabled = false
    if (placement > 0){
        placement -= 1
        loadTiles (placement)
    }
    if (placement === 0) {
        undoBtn.disabled = true
    }
}
function redoMove (){
    undoBtn.disabled = false
    if (placement >= 0 && placement < moves.length - 1){
        placement +=1 
        loadTiles (placement)
    }if (placement === moves.length - 1){
        redoBtn.disabled = true
    }
}
//iterate thru the 2d array from moves variable to get the specific value and add it as classlist to divs
function loadTiles(index) {
    board.innerHTML = ''
    for (let i = 0; i < moves[index].length; i++) {
        for (let j = 0; j < moves[index][i].length; j++){
            let div = document.createElement('div')
                if (moves[index][i][j] == 'x'){
                    div.classList.add('x')
                } else  if (moves[index][i][j] == 'o'){
                    div.classList.add('o')
                } else {
                }
            div.classList.add('tic-cell')       
            board.appendChild(div)
        }   
    }   
}

//this will update the score, call the winning msg to show up, and remove the listeners on each cell when the game is done
function endGame (draw){
    if (draw){
        winningMessage.innerText = `It's a Draw`
        console.log(draw)
    }else {
        if (oTurn){
            Oscore += 1
            o_score.innerHTML = Oscore
        } else {
            Xscore += 1
            x_score.innerHTML = Xscore
        }
        winningMessage.innerText = `${oTurn ? "O's" : "X's"} Win!`
    }
    winningMessageContainer.classList.add('show')
    mainButtons.classList.add('hidden')
    cells.forEach((cell) =>{
        board.classList.remove('x')
        board.classList.remove('o')
        cell.removeEventListener('click', cellClick)
    })
}
function putMark(cell,currentClass){
    cell.classList.add(currentClass)
}

function changeTurn(){
    oTurn = !oTurn
}
function setHover(){
    board.classList.remove(Xclass)
    board.classList.remove(Oclass)
    if (oTurn){
        board.classList.add(Oclass)
    } else {
        board.classList.add(Xclass)
    }
}
function checkWin (currentClass){
    storeMove(cells)
    return winningCombo.some(combo => {
        return combo.every(index => {
            return ticCells[index].classList.contains(currentClass)
        })
    }) 
} 
//draw function
function isDraw(){
    return [...ticCells].every(cell => {
        return cell.classList.contains(Xclass) || cell.classList.contains(Oclass)
    })
}
closeBtn.addEventListener('click', closing = () => {
    winningMessageContainer.style.display  = 'none'
    mainButtons.classList.remove('hidden')
})

