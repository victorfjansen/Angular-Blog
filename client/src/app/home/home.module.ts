import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FeedModule } from './feed/feed.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NewsdetailModule } from './newsdetail/newsdetail.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NewsdetailModule,
    FeedModule,
    ReactiveFormsModule
 ]
})
export class HomeModule { }
