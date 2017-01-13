/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MdDialogRef } from '@angular/material';

import { ObjectDialogComponent } from './object-dialog.component';

class MdDialogRefStub {
  close = jasmine.createSpy('close');
}

describe('ObjectDialogComponent', () => {
  let component: ObjectDialogComponent;
  let fixture: ComponentFixture<ObjectDialogComponent>;
  let dialogStub: MdDialogRefStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ObjectDialogComponent
      ],
      imports: [
        MaterialModule.forRoot(),
        FormsModule
      ],
      providers: [
        { provide: MdDialogRef, useClass: MdDialogRefStub }
      ]
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dialogStub = fixture.debugElement.injector.get(MdDialogRef);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('select object close dialog', () => {
    component.selectObject();
    expect(dialogStub.close).toHaveBeenCalledTimes(1);
  });
});
