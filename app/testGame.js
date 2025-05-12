import {Mancala} from "./mancala.js"

let mancala = new Mancala();
let sum = 0;
for(let i = 0; i < mancala.board.length; i++){
    sum += mancala.board[i][0];
    sum += mancala.board[i][1];
}
let turn = 0;
while(sum != 0){
    mancala.printBoard();
    mancala.playerMove(Math.floor(Math.random()*6), turn);
    if(turn){
        turn = 0;
    }
    else{
        turn = 1;
    }
    sum = 0;
    for(let i = 0; i < mancala.board.length; i++){
        sum += mancala.board[i][0];
        sum += mancala.board[i][1];
    }
}

mancala.printBoard();

