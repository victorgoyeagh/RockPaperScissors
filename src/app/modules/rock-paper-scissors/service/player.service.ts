import { Injectable } from '@angular/core';
import { IPlayerService, PlayOptions } from './../model/player.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlayerService implements IPlayerService {
    private PlayOptions = PlayOptions;
    public weaponChosen: Subject<PlayOptions> = new Subject<PlayOptions>();
    public showResults: Subject<boolean> = new Subject<boolean>();

    constructor() { }

    handPlayed(value: PlayOptions){
        this.weaponChosen.next(value);
    }

    getRandomPlay() {
        let rand: number = Math.floor((Math.random() * Object.keys(PlayOptions).length / 2));
        return rand;
    }

    playHand(value?: number) {
        let playerHand = (value) ? PlayOptions[value].toLowerCase() : PlayOptions[this.getRandomPlay()].toLowerCase();
        return playerHand;
    }
}
