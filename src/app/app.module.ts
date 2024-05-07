import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { KeycloakServiceService } from './keycloak-service.service';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ForgetPasswordComponent,
    VerificationCodeComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

   ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
