import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  exports: [FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class TemplateModule { }
