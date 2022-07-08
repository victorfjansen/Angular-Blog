import { Component, OnInit } from '@angular/core';
import { User } from 'src/utils/interfaces/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

}
