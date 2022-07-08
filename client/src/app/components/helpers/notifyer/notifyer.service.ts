import { EventEmitter, Injectable } from '@angular/core';
import { Notifier } from './notifyer.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  
  data!:Notifier | null
  emitirNotifier = new EventEmitter()
  types = [
    {
      type: "success",
      color: "bg-green-100"
    },
    {
      type: "danger",
      color: "bg-red-100"
    },
    {
      type: "info",
      color: "bg-blue-100"
    }
  ]
  constructor() { }

  clearData() {
    this.data = null
    this.emitirNotifier.emit(this.data)
  }

  callNotifier(type:string, message: string) {
    let color = this.types.filter(item => item.type == type)[0].color
      this.data = {type, color, message}
      this.emitirNotifier.emit(this.data)
      setTimeout(() => {
        this.clearData()
      }, 10000)
  }
}
