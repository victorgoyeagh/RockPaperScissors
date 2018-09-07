
export enum PlayOptions {
    Rock,
    Paper,
    Scissors
}

export enum PlayerType {
    Computer = <any>"Computer",
    Human = <any>"Human"
}

import { Input } from "@angular/core";

export abstract class AbstractPlayer {
    public playerType: PlayerType = PlayerType.Computer;
    @Input() set setPlayerType(value: PlayerType) {
        this.playerType = value
    }
    public playerName: string = '';
    @Input() set setPlayerName(value: string) {
        this.playerName = value
    }

    public playerHand: string = undefined;
    public playerScore: number = 0;

    constructor(
    ) {
    }
}

export interface IPlayerService {
    playHand(value: PlayOptions);
    getRandomPlay(): PlayOptions;
}