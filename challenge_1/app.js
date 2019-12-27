let board = ['','','','','','','','',''];
var player= '';
var turn = 0;
var rows;
var row1;
var row2;
var row3;
var col1;
var col2;
var col3;
var cols;
document.getElementById('Player').addEventListener('click',pickPlayer)
document.getElementById('board').addEventListener('click',name); 




function pickPlayer(pram) {
    player = pram.toElement.innerText
    console.log(player)
}



function name(pram) {
    let emptyIndex = [];
    let theOtherPlayer = ''
    var searchEles = document.getElementById("board").children
    console.log(searchEles)
    if (player.length === 0) {
        console.log('fuck u choose player')
    }
    if (player === 'X') {
        theOtherPlayer = 'O'
    }else{
        theOtherPlayer = 'X'
    }

    board[pram.toElement.id]=player
    turn = 1;
    // console.log(board)
    pram.toElement.innerText = board[pram.toElement.id]
    
    if (turn === 1) {
        for (let index = 0; index < board.length; index++) {
            if (board[index].length === 0) {
                emptyIndex.push(index)
            }
            
        }
        var randomIndex = emptyIndex[Math.floor(Math.random() * Math.floor(emptyIndex.length))]
        board[randomIndex] = theOtherPlayer
        // console.log(board)
        searchEles[randomIndex].innerText = theOtherPlayer
        turn = 0;
    }
row1=[board[0],board[1],board[2]]
row2=[board[3],board[4],board[5]]
row3=[board[6],board[7],board[8]]
rows = [row1,row2,row3]

col1=[board[0],board[3],board[6]]
col2=[board[1],board[4],board[7]]
col3=[board[2],board[5],board[8]]
cols=[col1,col2,col3]

if(checkRows(rows) || check(cols)){
    alert("You won Bitch")
}
console.log( checkRows(rows))
console.log(check(cols))
}


function checkRows(rows) {
    
    for (let index = 0; index < rows.length; index++) {
      if (checkRow(rows[index])){
          return true
      }
           
    }
    return false
}

function checkRow(row) {
    var count = 0;
    for (let index = 0; index < row.length; index++) {
        if (row[index] === player) {
            count++
        }
    }
    console.log(count,row)
    if (count === 3) {
        return true
    }
    return false
}


function check(cols) {


    for (let index = 0; index < cols.length; index++) {
        if (checkCol(cols[index])) {
            return true
        }
        
    }
    return false
}

function checkCol(col) {
    var count = 0;
    for (let index = 0; index < col.length; index++) {
        if (col[index] === player) {
            count++
        }
        
    }
    return count === 3
}