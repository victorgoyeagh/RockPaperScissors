import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './component/player/player.component';
import { RockPaperScissorsGameComponent } from './component/rock-paper-scissors-game/rock-paper-scissors-game.component';
import { PlayerService } from './service/player.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlayerComponent, RockPaperScissorsGameComponent],
  providers:[PlayerService],
  exports: [RockPaperScissorsGameComponent,PlayerComponent]
})
export class RockPaperScissorsModule { }
