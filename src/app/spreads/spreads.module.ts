import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { SpreadsComponent } from './spreads.component';
import { ObjectDialogComponent } from './object-dialog/object-dialog.component';

import { ObjectInfoService } from './object-info.service';

@NgModule({
  declarations: [
    SpreadsComponent,
    ObjectDialogComponent
  ],
  entryComponents: [
    ObjectDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
  ],
  providers: [
    ObjectInfoService,
  ],
  exports: [
    SpreadsComponent,
  ]
})
export class SpreadsModule { }
