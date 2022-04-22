import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-no-leak',
  templateUrl: './no-leak.component.html',
  styleUrls: ['./no-leak.component.less']
})
export class NoLeakComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('initing NoLeakComponent!');
  }

  ngOnDestroy(): void {
    console.log('destroing NoLeakComponent!');
  }

}
