import { Component, OnInit, ViewChild, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { PlayerComponent } from '../player/player.component';
import { PlayerType } from '../../model/player.model';
import { PlayerService } from '../../service/player.service';


@Component({
    selector: 'app-rock-paper-scissors-game',
    templateUrl: './rock-paper-scissors-game.component.html',
    styleUrls: ['./rock-paper-scissors-game.component.scss']
})
export class RockPaperScissorsGameComponent implements OnInit, AfterViewChecked, AfterContentChecked {
    private maxNoOfPlayers: number = 2;
    public players: Array<PlayerComponent> = new Array<PlayerComponent>();
    public PlayerType = PlayerType;
    public showResult: boolean =false;
    public txtResult: string = undefined;
    public txtWinner: string = undefined;

    @ViewChild('playerOne') playerOne: PlayerComponent;
    @ViewChild('playerTwo') playerTwo: PlayerComponent;

    constructor(private playerService: PlayerService) {
    }

    ngOnInit() {
    }

    ngAfterViewChecked() {
        this.players.push(this.playerOne);
        this.players.push(this.playerTwo);
    }

    ngAfterContentChecked() {

        this.playerService.showResults.subscribe((value) => {
            this.txtWinner = undefined;
            this.txtResult = undefined;

            this.txtResult = this.players[0].playerName + " threw " + this.players[0].playerHand;
            this.txtResult += " and " + this.players[1].playerName + " threw " + this.players[1].playerHand;

            this.getWinner();
            this.showResult = true;
        });
    }

    getWinner() {

        let strLost = "You LOSE! Try again.";
        let strWin = "You WIN!";
        let strDraw = "DRAW";

        let p1Val = this.players[0].playerHand;
        let p2Val = this.players[1].playerHand;

        if (p1Val === p2Val) {
            this.txtWinner = strDraw;
            return;
        }
        if (p2Val === "rock") {
            if (p1Val === "scissors") {
                this.txtWinner = strWin;
            } else {
                this.txtWinner = strLost;
            }
        }
        if (p2Val === "paper") {
            if (p1Val === "rock") {
                this.txtWinner = strWin;
            } else {
                this.txtWinner = strLost;
            }
        }
        if (p2Val === "scissors") {
            if (p1Val === "rock") {
                this.txtWinner = strLost;
            } else {
                this.txtWinner = strWin;
            }
        }
    }
}
