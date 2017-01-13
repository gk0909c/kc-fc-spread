import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-object-dialog',
  templateUrl: './object-dialog.component.html',
  styleUrls: ['./object-dialog.component.scss']
})
export class ObjectDialogComponent {
  selectedObject: String;
  content: String;

  constructor(public dialogRef: MdDialogRef<ObjectDialogComponent>) { }

  selectObject() {
    this.dialogRef.close({
      selectedObject: this.selectedObject,
      content: this.content,
    });
  }
}
