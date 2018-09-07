import { Component, OnInit } from '@angular/core';
import { AbstractPlayer, PlayOptions, PlayerType } from '../../model/player.model';
import { PlayerService } from '../../service/player.service';


@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.scss']
})
export class PlayerComponent extends AbstractPlayer implements OnInit {
    public PlayerType = PlayerType;
    public PlayOptions = PlayOptions;

    constructor(protected playerService: PlayerService) {
        super(playerService);
    }

    ngOnInit() {
        this.playerService.weaponChosen.subscribe((value: PlayOptions) => {
            if (this.playerType === this.PlayerType.Computer) {
                this.playerHand = this.playerService.playHand();
                this.playerService.showResults.next(true);
            }
        })
    }

    selectedWeapon(value: number) {
        this.playerHand = PlayOptions[value].toLowerCase();
        this.playerService.handPlayed(value);
    }

}
