import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appTimer]'
})
export class TimerDirective {
  public now: any;
  @Input('appTimer') selectedDate : Date = new Date();



  constructor() { }

  ngOnInit(): void { 

    setInterval(() => {         
      this.getTimer();
    }, 1000);

  }

  getTimer() {
    let timerExpiredMessage = <HTMLElement> document.querySelector("#timer");
    this.now = new Date();
    var currentTime = this.now.getTime();
    var selectedTime = this.selectedDate.getTime();
    var timeDiff = selectedTime! - currentTime;
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    timerExpiredMessage.innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";

    if (days <0 && hours <0 && minutes <0 && seconds <0) { 
      timerExpiredMessage.innerHTML = 'Time Over!';
    }
  }

  method(count: number) {
    count++;
    let timerExpiredMessage = <HTMLElement> document.querySelector("#abc");
    timerExpiredMessage.innerHTML = `${count}`;
  }

}
