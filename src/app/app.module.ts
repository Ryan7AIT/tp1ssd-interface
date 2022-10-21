import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    SendmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
