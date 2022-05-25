'use strict'


var gMinesArondCounter = 0 

const MINE = '💣'
const FLAG = '🚩'
const EMPTY = gMinesArondCounter

var gMines = []
var gMinesLocations

var cell
var gBoard = []


var gLevel = {
    SIZE: 4,
    MINES: 2
}

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}


function init() {
    gBoard = createBoard()
    // setMinesNegsCount()
    renderBoard(gBoard, '.board-container')
    gGame.isOn = true
    gGame.score = 0
    console.table(gBoard);
    console.log(gBoard);
}

function createBoard() {
    var gMinesLocations = []
    console.log(gMinesLocations);
    var board = [];
    for (var i = 0; i < gLevel.SIZE; i++) {
        board.push([])
        for (var j = 0; j < gLevel.SIZE; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown: true,
                isMine: false,
                isMarked: true,
                location: { i, j },
                value: 0
            }
            if (i === 0 && j === 1 || i === 2 && j === 2) {
                board[i][j].isMine = true
                board[i][j].value = MINE
                gMinesLocations.push(board[i][j].location)
            }
        }
    }
    // function setMinesNegsCount() {
        for (var i = 0; i < gMinesLocations.length; i++) {
        }
    // }
    return board;
}



function renderBoard(board, selector) {
    var strHTML = '<table border="0"><tbody>';
    for (var i = 0; i < gLevel.SIZE; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < gLevel.SIZE; j++) {
            var cell = board[i][j].value;
            var className = `cell cell-'${i}-${j} ${cell.isMine}`
            var tdId = `cell-${i}-${j}`;
            strHTML += `<td id="${tdId}" class="${className}" 
                        onclick="cellClicked(this)"> ${cell}</td>`
        }

    }
    strHTML += '</tbody></table>';
    var elContainer = document.querySelector(selector);
    elContainer.innerHTML = strHTML;
}

// function renderCell(location, value) {
//     var elCell = document.querySelector(`.cell-${location.i}-${location.j}`);
//     elCell.innerHTML = value;
// }


