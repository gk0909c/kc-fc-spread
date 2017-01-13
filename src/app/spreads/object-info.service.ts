import { Injectable } from '@angular/core';

@Injectable()
export class ObjectInfoService {

  constructor() { }

  getObjectList(): [{ name: string, label: string }] {
    return [
      { name: 'Obj1__c', label: 'Obj1Label' },
      { name: 'Obj2__c', label: 'Obj2Label' },
    ];
  }
}
