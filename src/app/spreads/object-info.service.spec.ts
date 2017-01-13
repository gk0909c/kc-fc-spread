/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ObjectInfoService } from './object-info.service';

describe('ObjectInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObjectInfoService]
    });
  });

  it('should return object list', inject([ObjectInfoService], (service: ObjectInfoService) => {
    let objectList = service.getObjectList();
    expect(objectList.length).toBe(2);
    assertObject(objectList[0], 'Obj1__c', 'Obj1Label');
    assertObject(objectList[1], 'Obj2__c', 'Obj2Label');
  }));

  function assertObject(obj, name, label) {
    expect(obj.name).toBe(name);
    expect(obj.label).toBe(label);
  }

});
