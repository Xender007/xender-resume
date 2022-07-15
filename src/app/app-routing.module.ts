import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeMainComponent } from './resume-main/resume-main.component';

const routes: Routes = [
  {path: '', component: ResumeMainComponent},
  //{path: '', pathMatch: 'full', redirectTo: '/portfolio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
