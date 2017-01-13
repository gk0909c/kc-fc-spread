import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ObjectDialogComponent } from './object-dialog/object-dialog.component';

@Component({
  selector: 'spreads',
  templateUrl: './spreads.component.html',
  styleUrls: ['./spreads.component.scss']
})
export class SpreadsComponent implements OnInit {
  selected: number;
  tabs: [{}];
  dialogRef: MdDialogRef<ObjectDialogComponent>;

  constructor(public dialog: MdDialog) { }

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
    this.dialogRef = this.dialog.open(ObjectDialogComponent, {
      disableClose: false
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('result: ' + result);
      this.dialogRef = null;
    });
  }
}
