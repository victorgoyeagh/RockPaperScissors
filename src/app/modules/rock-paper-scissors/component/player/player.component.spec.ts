import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerComponent } from './player.component';
import { PlayerService } from '../../service/player.service';
import { AbstractPlayer, PlayOptions, PlayerType } from '../../model/player.model';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

describe('PlayerComponent', () => {
    let component: PlayerComponent;
    let fixture: ComponentFixture<PlayerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [PlayerService],
            declarations: [PlayerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should select correct weapon', () => {

        component.setPlayerName = "player one";
        component.setPlayerType = PlayerType.Human;

        fixture.detectChanges();

        let playButtons = (<HTMLDivElement>fixture.debugElement.nativeElement).querySelectorAll("button");

        playButtons[0].click();
        playButtons[0].dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(component.playerHand).toEqual("rock");

        playButtons[2].click();
        playButtons[2].dispatchEvent(new Event('click'));
        fixture.detectChanges();
        expect(component.playerHand).toEqual("scissors");
        
    });

    it('should fire subscrition when other has played hand', () => {

        expect(component.playerHand).toBeUndefined;
        const response = PlayOptions.Rock;
        const playerService = TestBed.get(PlayerService);

        spyOn(playerService, 'weaponChosen').and.returnValue(of(response));

        component.setPlayerName = "player one";
        component.setPlayerType = PlayerType.Computer;

        fixture.detectChanges();

        component.ngOnInit();
        playerService.handPlayed(PlayOptions.Rock);
        expect(component.playerHand).toBeDefined;
    });
});
