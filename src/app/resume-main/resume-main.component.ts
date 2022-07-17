import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-main',
  templateUrl: './resume-main.component.html',
  styleUrls: ['./resume-main.component.css']
})
export class ResumeMainComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onPortfolioClick() {
    this.router.navigate(['/home']);
  }

}
