import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-syncfusion-diagram',
  templateUrl: './syncfusion-diagram.component.html',
  styleUrls: ['./syncfusion-diagram.component.less'],
})
export class SyncfusionDiagramComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit(): void {
    console.log('initing SyncfusionDiagramComponent!');
  }

  ngOnDestroy(): void {
    console.log('destroing SyncfusionDiagramComponent!');
  }
}
