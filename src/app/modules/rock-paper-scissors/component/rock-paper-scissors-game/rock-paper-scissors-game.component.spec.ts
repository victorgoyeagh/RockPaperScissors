import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RockPaperScissorsGameComponent } from './rock-paper-scissors-game.component';
import { PlayerComponent } from '../player/player.component';
import { PlayOptions } from '../../model/player.model';
import { By } from '@angular/platform-browser';
import { PlayerService } from '../../service/player.service';
import { of } from 'rxjs';

describe('RockPaperScissorsGameComponent', () => {
    let component: RockPaperScissorsGameComponent;
    let fixture: ComponentFixture<RockPaperScissorsGameComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers:[PlayerService],
            declarations: [RockPaperScissorsGameComponent, PlayerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RockPaperScissorsGameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('getWinner', () => {
        
        let playerService = TestBed.get(PlayerService);
        spyOn(playerService, 'showResults').and.returnValue(of(true));

        component.ngAfterContentChecked();
    
        //loss
        component.playerOne.playerHand = "rock";
        component.playerTwo.playerHand = "scissors";
        playerService.showResults.next(true);
        
        fixture.detectChanges();
        component.getWinner();
        fixture.detectChanges();

        let feedbackTextEl = (<HTMLDivElement>fixture.debugElement.query(By.css('p')).nativeElement);
        expect(feedbackTextEl.innerText).toContain("LOSE");

        //win
        component.playerTwo.playerHand = "rock";
        component.playerOne.playerHand = "scissors";
        playerService.showResults.next(true);
        
        fixture.detectChanges();
        component.getWinner();
        fixture.detectChanges();

        expect(feedbackTextEl.innerText).toContain("WIN");

        //draw
        component.playerTwo.playerHand = "rock";
        component.playerOne.playerHand = "rock";
        playerService.showResults.next(true);
        
        fixture.detectChanges();
        component.getWinner();
        fixture.detectChanges();

        expect(feedbackTextEl.innerText).toContain("DRAW");
    });

});
