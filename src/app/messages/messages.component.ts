import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  messages: any;
  cryptedText:any;
  dcryptedText:any;
  isSend= false;
  methode= 0;

  ngOnInit(): void {
    this.getMessages();
  }


  getMessages() {
    this.messageService.getMessages(localStorage.getItem('userid')).subscribe((data: any) =>  {

      this.messages = data
    });
  }

  onSend(m: any) {
    console.log(m);


    this.isSend = true;
    this.cryptedText = m;
    this.dcryptedText = '';


  }



  onDeCrypte() {

    console.log(this.methode);

    if(this.methode == 0) {
    this.dcryptedText = this.misroir(this.cryptedText)

    }else if (this.methode ==1) {
    this.dcryptedText = "m2"
    }else if (this.methode == 2) {
    this.dcryptedText = "m3"

    }else{
      this.dcryptedText = "test"
    }

  }


  // decrytion methode

  misroir(message:any) {
    let str = "";
    for (let index = 0; index < message.length; index++) {
       str = message[index] + str

    }

    return str;
  }

}
