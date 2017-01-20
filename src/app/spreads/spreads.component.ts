import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ObjectDialogComponent } from './object-dialog/object-dialog.component';
import { ObjectInfoService } from './object-info.service';

@Component({
  selector: 'spreads',
  templateUrl: './spreads.component.html',
  styleUrls: ['./spreads.component.scss']
})
export class SpreadsComponent implements OnInit {
  selected: number;
  tabs: [{title: string, content: string}];
  dialogRef: MdDialogRef<ObjectDialogComponent>;

  constructor(public dialog: MdDialog,
              private objInfoService: ObjectInfoService) { }

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

  getData() {
    this.objInfoService.getData()
      .subscribe(res => {
        console.log('in component');
        console.log(res);
      });
  }

  closeTab(idx) {
    this.tabs.splice(idx, 1);
  }
}
