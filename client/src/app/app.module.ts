import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpersModule } from './components/helpers/helpers.module';
import { TemplateModule } from './components/template/template.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent   
  ],
  exports:[],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HelpersModule,
    TemplateModule,
    LoginModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
