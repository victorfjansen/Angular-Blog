import { Component, OnInit } from '@angular/core';

import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageName:string = 'Descrição da Página'

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.emitirDescricao.subscribe((name) => {
      this.pageName = name
    })
  }

}
