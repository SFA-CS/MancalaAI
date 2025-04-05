
export class Mancala{
    constructor(){
        this.board = [[4,4],[4,4],[4,4],[4,4],[4,4],[4,4]];
        this.player1Bank = 0, this.player2Bank = 0;
    }

    playerMove(slot, side){
        let initialSide = side;
        let temp = this.board[slot][side];
        this.board[slot][side] = 0;
        if(!side){
            slot++;
        }
        else{
            slot--;
        }
        while (temp > 0) {
            if(slot > 5){
                this.player1Bank++;
                slot = 5;
                temp--;
                side = 1;
                continue;
            }

            if(slot < 0) {
                this.player2Bank++;
                slot = 0;
                temp--;
                side = 0;
                continue;
            }
            
            if(!side){
                if(temp === 1 && this.board[slot][side] === 0){
                    temp--;
                    if(initialSide === side){
                        this.player1Bank += 1 + this.board[slot][1];
                        this.board[slot][1] = 0;    
                    }
                    else if(!initialSide){
                        this.player1Bank++;
                    }
                    else{
                        this.player2Bank++;
                    }
                }
                else{
                    this.board[slot][side]++;
                    temp--;
                    slot++;
                }
            }
            else{
                if(temp === 1 && this.board[slot][side] === 0){
                    temp--;
                    if(initialSide === side){
                        this.player2Bank += 1 + this.board[slot][0];
                        this.board[slot][0] = 0;    
                    }
                    else if(!initialSide){
                        this.player1Bank++;
                    }
                    else{
                        this.player2Bank++;
                    }
                }
                else{
                    this.board[slot][side]++;
                    temp--;
                    slot--;
                }
            }
        }
    }

    printBoard(){
        console.log("Player 1 Bank: " + this.player1Bank);
        for (let i = 0; i < this.board.length; i++) {
            process.stdout.write(" | " + this.board[i][0] + " | ");
        }
        console.log();
        console.log("------------------------------------------");
        for (let i = 0; i < this.board.length; i++) {
            process.stdout.write(" | " + this.board[i][1] + " | ");
        }
        console.log();
        console.log("Player 2 Bank: " + this.player2Bank);
    }
}