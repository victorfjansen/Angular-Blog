import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { FormModule } from './form/form.module';


@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthService],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FormModule
  ]
})
export class LoginModule {}
