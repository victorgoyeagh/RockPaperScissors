import { TestBed, inject } from '@angular/core/testing';

import { PlayerService } from './player.service';
import { PlayOptions } from '../model/player.model';

describe('PlayerService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PlayerService]
        });
    });

    it('should be created', inject([PlayerService], (service: PlayerService) => {
        expect(service).toBeTruthy();
    }));

    it('should generate a random number no more than options length', inject([PlayerService], (service: PlayerService) => {
        let randNo = service.getRandomPlay();
        let optionsLength = Object.keys(PlayOptions).length / 2;

        expect(randNo).toBeLessThan(optionsLength+1);
        expect(randNo).toBeGreaterThan(-1);
    }));

    it('play correct hand', inject([PlayerService], (service: PlayerService) => {

        spyOn(service, 'getRandomPlay').and.returnValue(0);

        let result_1 = service.playHand();
        expect(service.getRandomPlay).toHaveBeenCalled;

        let result_2 = service.playHand(0);
        expect(PlayOptions[0].toLowerCase()).toEqual(result_2);
    }));
});
