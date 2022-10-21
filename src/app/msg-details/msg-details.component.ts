import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-msg-details',
  templateUrl: './msg-details.component.html',
  styleUrls: ['./msg-details.component.css']
})
export class MsgDetailsComponent implements OnInit {

  cryptedText: any ="";
  dcryptedText: any ="";
  message:any;
  valueOfn:any;
  valueOfa:any;
  valueOfb:any;
  methode:any = 0;



  // yesnoCheck(value: any): void {

  //   console.log(value.value);


  //   if(value.value == "1") {
  //     this.shown = false
  //   }else if(value.value =="3") {
  //     this.shown = true
  //     this.showAandB = false
  //   }else {

  //     this.shown = false
  //     this.showAandB = false

  //   }

  // }


  constructor(
    private route: ActivatedRoute,
    private msgService: MessageService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.msgService.getMessage(id).subscribe((message: any) => {
      this.cryptedText = message.message;
      this.valueOfn = message.valueofn;


    })

  }

  onDeCrypte() {


    if(this.methode == 0) {

      this.dcryptedText = this.miroir(this.cryptedText);

    } else if (this.methode == 1) {

      this.dcryptedText = "affine"

    }else if (this.methode == 2) {

    this.dcryptedText = "decalage"


      // = this.dcesar(this.cryptedText, this.valueOfn)
    }else {
      this.dcryptedText= this.dcesar(this.cryptedText, this.valueOfn);
    }

  }


  // meroir

  miroir(message:any) {
    let str = "";
    for (let index = 0; index < message.length; index++) {
       str = message[index] + str

    }

    return str;
  }

    // the decryption for the cesar function

    dcesar(message:any,k:any) {

      console.log(message,k);



      let dict: any = {}
      let c1: any = 0;
      let c2: any = 0;
      let c: any=[];
      let alphabet = ["a","b","c","d","e","f","g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];

      let alphabet2 = alphabet.reverse();

      for(let i=0; i< alphabet.length; i++) {
          dict[alphabet2[i]] = i

      }

      for(let n=0; n< message.length; n++) {

          if(message[n] == " ") {
              c = c + " "
          } else {
              c1 = Math.abs( parseInt(dict[message[n]]) + parseInt(k))
              c2 = c1 % 26
              c =  c + alphabet2[c2]

          }

      }

      return c

  }

}
