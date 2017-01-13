/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MdDialogRef } from '@angular/material';

import { ObjectDialogComponent } from './object-dialog.component';
import { ObjectInfoService } from '../object-info.service';

class MdDialogRefStub {
  close = jasmine.createSpy('close');
}
class ObjectInfoServiceStub {
  getObjectList = jasmine.createSpy('getObjectList').and.returnValue([
    {name: 'Obj1__c', label: 'Obj1Label'},
    {name: 'Obj2__c', label: 'Obj2Label'},
  ]);
}

describe('ObjectDialogComponent', () => {
  let component: ObjectDialogComponent;
  let fixture: ComponentFixture<ObjectDialogComponent>;
  let dialogStub: MdDialogRefStub;
  let serviceStub: ObjectInfoServiceStub;

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
        { provide: MdDialogRef, useClass: MdDialogRefStub },
        { provide: ObjectInfoService, useClass: ObjectInfoServiceStub },
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

  it('init with object list ', () => {
    expect(component.objectList.length).toBe(2);
    assertObject(component.objectList[0], 'Obj1__c', 'Obj1Label');
    assertObject(component.objectList[1], 'Obj2__c', 'Obj2Label');
  });
  it('select object close dialog', () => {
    component.selectedObject = 'Selected__c';
    component.selectObject();
    expect(dialogStub.close).toHaveBeenCalledWith({
      selectedObject: 'Selected__c',
      content: 'content of Selected__c',
    });
  });

  function assertObject(obj, name, label) {
    expect(obj.name).toBe(name);
    expect(obj.label).toBe(label);
  }
});
