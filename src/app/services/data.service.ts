import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  shipping:any;

  constructor() { }

  setShipping(value:any){
    this.shipping=value;
  }

  getShipping():any{
    return this.shipping;
  }
}