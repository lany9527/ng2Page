import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class EmitterService {

  constructor() { }
  //当调用get方法的时候，就在 _emitters 对象上面注册一个事件
  private static _emitters: {[ID: string]: EventEmitter<any>} = {};
  static get(ID: string): EventEmitter<any>{
    if (!this._emitters[ID]){
      this._emitters[ID] = new EventEmitter();
    }
    return this._emitters[ID];
  }
}
