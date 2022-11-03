import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttaqueComponent } from './attaque/attaque.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { Messages2Component } from './messages2/messages2.component';
import { MsgDetailsComponent } from './msg-details/msg-details.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { StegComponent } from './steg/steg.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", component: WelcomeComponent},
  {path: "attaque", component: AttaqueComponent},
  {path: "messages/:id", component: MsgDetailsComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "messages2", component: Messages2Component},
  {path: "messages", component: MessagesComponent},

  {path: "send", component: SendmessageComponent},
  {path: "steg", component: StegComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
