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
import {RecaptchaModule, RecaptchaFormsModule} from 'ng-recaptcha';
import { AttaqueComponent } from './attaque/attaque.component';
import { Mdps1Component } from './mdps1/mdps1.component';
import { Mdps2Component } from './mdps2/mdps2.component';
import { Mdps3Component } from './mdps3/mdps3.component';
import { StegComponent } from './steg/steg.component';
import { Messages2Component } from './messages2/messages2.component'


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
    CaptchaComponent,
    AttaqueComponent,
    Mdps1Component,
    Mdps2Component,
    Mdps3Component,
    StegComponent,
    Messages2Component
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
