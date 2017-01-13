import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { ObjectInfoService } from '../object-info.service';

@Component({
  selector: 'app-object-dialog',
  templateUrl: './object-dialog.component.html',
  styleUrls: ['./object-dialog.component.scss']
})
export class ObjectDialogComponent implements OnInit {
  objectList: [{ name: string, label: string }];
  selectedObject: string;

  constructor(public dialogRef: MdDialogRef<ObjectDialogComponent>,
              private objInfoService: ObjectInfoService) { }

  ngOnInit() {
    this.objectList = this.objInfoService.getObjectList();
  }

  selectObject() {
    this.dialogRef.close({
      selectedObject: this.selectedObject,
      content: 'content of ' + this.selectedObject,
    });
  }
}
