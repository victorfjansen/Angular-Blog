import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ColorUpDirective } from './color-up.directive';
import { NgElseDirective } from './ng-else.directive';


@NgModule({
  declarations: [
    ColorUpDirective,
    NgElseDirective
   ],
  exports:[
    ColorUpDirective,
    NgElseDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class DirectiveModule { }
