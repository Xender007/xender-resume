import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeMainComponent } from './resume-main/resume-main.component';
import { PortfolioHomePageComponent } from './portfolio-home-page/portfolio-home-page.component';
import { TimerDirective } from './timer.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResumeMainComponent,
    PortfolioHomePageComponent,
    TimerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
