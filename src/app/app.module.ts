import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// routing
import { Routing } from './routes/routes';

// pages
import { HomePageComponent } from './views/home/home.component';
import { PageNotFoundPageComponent } from './views/page-not-found/page-not-found.component';

// modules
import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';
import { RockPaperScissorsModule } from './modules/rock-paper-scissors/rock-paper-scissors.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundPageComponent
  ],
  imports: [
    RockPaperScissorsModule,
    Routing,
    BrowserModule,
    HeaderModule,
    FooterModule
  ],
  providers: [

  ],
  bootstrap: [
      AppComponent
    ]
})

export class AppModule { 
    constructor() {
    }
}
