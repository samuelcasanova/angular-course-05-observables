import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeSubject: Subject<boolean>

  constructor() {}
  
  ngOnInit() {
    this.activeSubject = new Subject<boolean>()
    this.activeSubject.subscribe(isActive => {
      console.log(`Activated=${isActive}`)
    })
  }

  onClickActivate() {
    this.activeSubject.next(true)
  }
}
