import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() id!:number
  @Input() title!:string
  @Input() shortDescription!:string
  @Input() image!:string
  @Input() author!:string

  constructor() { }

  ngOnInit(): void {
  }

}
