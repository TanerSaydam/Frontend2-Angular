import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  games: string[] = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]
  gameMoves: any[] = [];

  winnerBox: number[]= []

  mark: string = "X";
  isGameOver: boolean = false;
  winner: string = "";

  setMark(i: number){
    if(this.isGameOver) return;

    if(this.games[i] === ""){
      this.games[i] = this.mark
      this.gameMoves.push([...this.games]);

      this.CheckIsGameOver();
      if(this.isGameOver){
        return;
      }

      if(this.mark === "X") this.mark = "O"
      else this.mark = "X"

      
    }    
  }

  newGame(){
    document.location.reload();
  }

  CheckIsGameOver(){
    this.winnerBox = [];

    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    
    for (const [a, b, c] of winningCombinations) {
      if (this.games[a] !== "" && this.games[a] === this.games[b] && this.games[b] === this.games[c]) {
        this.isGameOver = true;
        this.winnerBox.push(a, b, c);
        break;
      }
    }


    if(this.isGameOver){
      this.winner = "Kazanan " + this.mark;
    }
  }

  changeWinnerBoxClass(i: number){
    const result = this.winnerBox.filter(p=> p === i);
    if(result.length > 0){
      return "btn btn-success"
    }else return ""
  }

  setMove(value: any){    
    this.games = [...value];
  }
}
