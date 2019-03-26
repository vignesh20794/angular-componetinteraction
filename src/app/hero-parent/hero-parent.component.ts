import { Component, OnInit,ViewChild } from '@angular/core';
import { HeroChildComponent }  from '../hero-child/hero-child.component';

import { HEROES } from '../hero';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  heroes = HEROES;
  master = 'Master';
  seconds() { return 0; }


  @ViewChild(HeroChildComponent)
  private timerComponent: HeroChildComponent;

   ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }

}