import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { MsgDetailsComponent } from './msg-details/msg-details.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", component: WelcomeComponent},
  {path: "messages/:id", component: MsgDetailsComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "messages", component: MessagesComponent},
  {path: "send", component: SendmessageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
