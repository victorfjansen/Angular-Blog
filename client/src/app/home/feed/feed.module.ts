import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelpersModule } from 'src/app/components/helpers/helpers.module';
import { DirectiveModule } from 'src/app/shared/directives/directives.module';

import { FeedComponent } from './feed.component';

@NgModule({
  declarations: [FeedComponent],
  exports: [FeedComponent],
  imports: [
    CommonModule,
    DirectiveModule,
    HelpersModule
  ]
})
export class FeedModule { }
