import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TimerDirective } from '../timer.directive';

@Component({
  selector: 'app-portfolio-home-page',
  templateUrl: './portfolio-home-page.component.html',
  styleUrls: ['./portfolio-home-page.component.css']
})
export class PortfolioHomePageComponent implements AfterViewInit {
  
  public selectedDate: Date = new Date('Aug 15, 2022 22:00:00');
  public  count : number = 0;
  @ViewChild(TimerDirective) directive : any;
  constructor() { }


  ngOnInit(): void {
    console.log(this.selectedDate)

  }

  ngAfterViewInit(): void {
      
    this.directive.getTime();
  }










}
