import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.subscription = interval(1000).subscribe(count => { console.log(count)})
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
