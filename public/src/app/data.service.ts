import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

private messageSource = new BehaviorSubject<Object>([{filename: "", fill_area_name: "", svg_name: ""}]);
currentMessage = this.messageSource.asObservable();  //allows you to subscribe to/access message source

  constructor() { }

  //consider removing this getter as getter should be covered via currentMessage
  getMessage(): Observable<any> {
    return this.messageSource.asObservable();
  }

  //the setter function:
  changeMessage(message: Object) {
    this.messageSource.next(message)
  }
  
}
