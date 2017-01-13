/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { SpreadsComponent } from './spreads.component';
import { ObjectDialogComponent } from './object-dialog/object-dialog.component';

describe('SpreadsComponent', () => {
  let component: SpreadsComponent;
  let fixture: ComponentFixture<SpreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpreadsComponent,
        ObjectDialogComponent
      ],
      imports: [
        MaterialModule.forRoot(),
        FormsModule
      ]
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          ObjectDialogComponent
        ]
      }
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.selected).toBe(0);
    expect(component.tabs.length).toBe(2);
  });

  it('disp dialog', () => {
    component.addTab();
    expect(component.dialogRef).not.toBeNull();
  });

  it('add tab when dialog close', () => {
    component.addTab();
    component.dialogRef.close({selectedObject: 'a', content: 'b'});
    expect(component.tabs.length).toBe(3);
    expect(component.tabs[2].title).toBe('a');
    expect(component.tabs[2].content).toBe('b');
  });
});
