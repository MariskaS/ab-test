import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage = window.localStorage;

  constructor() {
  }

  get(key: string) {
    return this.storage.getItem(key);
  }

  set(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  getObject(key: string) {
    const json = this.get(key);
    try {
      const obj = JSON.parse(json);
      return obj;
    } catch (e) {
      console.error(e.message);
      return;
    }
  }

}
