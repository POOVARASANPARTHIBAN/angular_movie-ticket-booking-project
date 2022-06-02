import { Injectable } from '@angular/core';

function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {

  constructor() { /* TODO document why this constructor is empty */  }

  get nativeWindow(): any {
      return _window();
  }
}