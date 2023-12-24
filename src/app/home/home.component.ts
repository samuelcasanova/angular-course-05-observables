import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { Observable } from 'rxjs-compat';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription
  customSubscription: Subscription

  constructor() { }

  ngOnInit() {
    this.subscription = interval(1000).subscribe(count => { console.log(`interval observable count=${count}`)})
    const customObservable = new Observable(observer => {
      let count = 0
      setInterval(() => {
        if (count === 30) {
          observer.complete()
        }
        if (count > 50) {
          observer.error(new Error('Count is greater than 5, its horrible'))
        } else {
          observer.next(count++)
        }
      }, 1000)
    })
    this.customSubscription = customObservable.pipe(
      filter((data: number) => data%2 === 0),
      map((data: number) => `(${data})`))
      .subscribe(data => {
        console.log(`custom observable data=${data}`)
      }, error => {
        console.error(error)
      }, () => {
        console.log('COMPLETED!')
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
    this.customSubscription?.unsubscribe()
  }
}
