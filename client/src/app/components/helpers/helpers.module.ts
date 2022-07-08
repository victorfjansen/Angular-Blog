import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DirectiveModule } from 'src/app/shared/directives/directives.module';
import { NotifyerComponent } from './notifyer/notifyer.component';
import { LoadingComponent } from './loading/loading.component';
import { HeaderService } from '../template/header/header.service';

@NgModule({
  declarations: [CardComponent, NotifyerComponent, LoadingComponent],
  exports: [CardComponent, NotifyerComponent, LoadingComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    DirectiveModule,
  ]
})
export class HelpersModule { }
