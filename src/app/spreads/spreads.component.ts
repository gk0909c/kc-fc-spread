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
      {title: 'first__c', content: 'content1'},
      {title: 'second__c', content: 'content2'},
    ];
  }

  tabChanged() {
    console.log('changing');
  }

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

  closeTab(idx) {
    this.tabs.splice(idx, 1);
  }
}
