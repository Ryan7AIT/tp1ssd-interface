import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageComponent } from './message/message.component';
import { UsersComponent } from './users/users.component';
import { MsgDetailsComponent } from './msg-details/msg-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { environment } from '../environments/environment';
import { CaptchaComponent } from './captcha/captcha.component';
import {RecaptchaModule, RecaptchaFormsModule} from 'ng-recaptcha'


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    MessagesComponent,
    MessageComponent,
    UsersComponent,
    MsgDetailsComponent,
    DashboardComponent,
    SendmessageComponent,
    CaptchaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RecaptchaV3Module,
    RecaptchaFormsModule,
    RecaptchaModule
  ],
  providers: [
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: environment.recaptcha.siteKey,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
