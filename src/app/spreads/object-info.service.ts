import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ObjectInfoService {

  constructor(private http: Http) { }

  getObjectList(): [{ name: string, label: string }] {
    return [
      { name: 'Obj1__c', label: 'Obj1Label' },
      { name: 'Obj2__c', label: 'Obj2Label' },
    ];
  }

  getData() {
    console.log('get data in service');

    return this.http
              .get(`/api`)
              .map((r: Response) => {
                return r.json();
              });
  }
}
