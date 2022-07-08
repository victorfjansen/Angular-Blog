import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../components/template/header/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.updatePageName("Faça login para continuar!")
  }

}
