import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';


@NgModule({
  declarations: [FormComponent],
  exports: [FormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class FormModule {}
