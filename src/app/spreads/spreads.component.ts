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
  tabs: [{title: string, content: string}];
  dialogRef: MdDialogRef<ObjectDialogComponent>;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
    this.selected = 0;
    this.tabs = [
      {title: 'tab1', content: 'content1'},
      {title: 'tabs', content: 'contents'},
    ];
  }

  // tabChanged() {
  //   console.log('abc');
  // }

  addTab() {
    this.dialogRef = this.dialog.open(ObjectDialogComponent, {
      disableClose: true
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.tabs.push({
          title: result.selectedObject,
          content: result.content
        });
        this.selected = this.tabs.length - 1;
      }
      this.dialogRef = null;
    });
  }
}
