import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioHomePageComponent } from './portfolio-home-page/portfolio-home-page.component';
import { ResumeMainComponent } from './resume-main/resume-main.component';

const routes: Routes = [
  {path: '', component: ResumeMainComponent},
  {path: 'home', component: PortfolioHomePageComponent}
  //{path: '', pathMatch: 'full', redirectTo: '/portfolio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
