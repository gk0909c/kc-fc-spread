/* tslint:disable:no-unused-variable */
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { SpreadsComponent } from './spreads.component';
import { ObjectDialogComponent } from './object-dialog/object-dialog.component';
import { ObjectInfoService } from './object-info.service';

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
      ],
      providers: [
        ObjectInfoService
      ]
    });
    TestBed.overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [
          ObjectDialogComponent
        ]
      }
    });
    TestBed.overrideComponent(ObjectDialogComponent, {
      set: {
        template: `<span>mock<span>`
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
    expect(component.selected).toBe(2);
    expect(component.tabs[2].title).toBe('a');
    expect(component.tabs[2].content).toBe('b');
    expect(component.dialogRef).toBeNull();
  });
});
