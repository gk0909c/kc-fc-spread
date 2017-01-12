import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spreads',
  templateUrl: './spreads.component.html',
  styleUrls: ['./spreads.component.scss']
})
export class SpreadsComponent implements OnInit {
  selected: number;
  tabs: [{}];

  constructor() { }

  ngOnInit() {
    this.selected = 0;
    this.tabs = [
      {title: 'tab1', content: 'content1'},
      {title: 'tabs', content: 'contents'},
    ];
  }

  tabChanged() {
    console.log('abc');
  }

  addTab() {
    this.tabs.push({title: 'tab2', content: 'additional content'});
  }
}
