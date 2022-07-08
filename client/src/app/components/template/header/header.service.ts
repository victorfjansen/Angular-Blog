import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  description:string = 'Descrição da página'
  emitirDescricao = new EventEmitter<string>()

  constructor() { }

  getPageName() {
    return this.description
  }

  updatePageName(name:string) {
    this.description = name
    this.emitirDescricao.emit(name)
  }
}
