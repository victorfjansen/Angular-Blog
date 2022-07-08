import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HelpersModule } from 'src/app/components/helpers/helpers.module';
import { DirectiveModule } from 'src/app/shared/directives/directives.module';

import { NewsdetailComponent } from './newsdetail.component';



@NgModule({
  declarations: [NewsdetailComponent],
  exports: [NewsdetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    DirectiveModule,
    HelpersModule
  ]
})
export class NewsdetailModule { }
