import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { NotifierService } from './notifyer.service';

@Component({
  selector: 'app-notifyer',
  templateUrl: './notifyer.component.html',
  styleUrls: ['./notifyer.component.css']
})

export class NotifyerComponent implements OnInit, OnDestroy {
  data!:Notifier | null
  inscricao!: Subscription
  constructor(private notifierService: NotifierService) { }

  ngOnInit(): void {
    this.inscricao = this.notifierService.emitirNotifier.subscribe((data) => {
      this.data = data
    })
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe()
  }
}

export interface Notifier {
  type: string,
  color?: string,
  message?: string
}
