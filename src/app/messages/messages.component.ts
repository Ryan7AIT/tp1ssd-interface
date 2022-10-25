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
  valueOfb:any;
  valueOfa:any;
  valueOfn:any;


  ngOnInit(): void {
    this.getMessages();
  }


  getMessages() {

    this.messageService.getMessages(localStorage.getItem('userid')).subscribe((data: any) =>  {
      // console.log(data);

      this.messages = data
    });
  }

  onSend(m: any,va:any,vb:any,vn:any) {

    // console.log(m,va,vb);


    this.valueOfa = va;
    this.valueOfb = vb;
    this.valueOfn = vn;

    this.isSend = true;
    this.cryptedText = m;
    this.dcryptedText = '';


  }



  onDeCrypte() {

    // console.lo/g(this.decryptaffine(3,4,"a"));

    // return;







    if(this.methode == 0) {
    this.dcryptedText = this.misroir(this.cryptedText)

    }else if (this.methode == 1) {

    this.dcryptedText = this.daffine(this.cryptedText, this.valueOfa,this.valueOfb);
    }else if (this.methode == 2) {

      let oarry = this.cryptedText.split("");

      this.dcryptedText = this.shift(oarry,-1,1);



    }else{
      this.dcryptedText = this.dcesar(this.cryptedText,this.valueOfn);
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


  // decytion for the affine methode

  mod(n:any, m:any) {
    return ((n % m) + m) % m;
  }

  inverse(a:any) {
    // console.log(a);

    // return;

    let x=0;

    while (this.mod(a*x,26) != 1) {
      x = x+1;
    }
    return x;
  }

  decryptaffine(a:any,b:any,i:any) :any {

    // return;

    var alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if(i == " ") {
      return " "
    }

    // console.log(i,alphabet.indexOf(i));

    // return

    let x = alphabet.indexOf(i);


    // console.log('a and inver of a ' + a,this.inverse(a));

    // console.log('-----------');





    // return

    let y = this.mod((this.inverse(parseInt(a)) * (x-b)),26)


    // let y = parseInt((a * x) + (b)) % 26;

    console.log(y,alphabet[y]);



    return alphabet[y];
  }

  gcd_two_numbers(x:any, y:any): any {
    if (y === 0) return x;
    /* else */ return this.gcd_two_numbers(y, x % y);
  }

  daffine(w:any,a:any,b:any): any {


    // return


    var word = ' ';

    if ( this.gcd_two_numbers(a,26)  == 1) {

      for (let  i = 0; i< w.length; i++) {


        word += this.decryptaffine(a,b,w[i])
        console.log(word);
      }

      return word

    }else {
      return 'it is impossible to encrypt this message. choose a prime number with 26.';
    }

  }


  // decryption for cesar

  dcesar(message:any,k:any) {


    let dict: any = {}
    let c1: any = 0;
    let c2: any = 0;
    let c: any=[];
    let alphabet = ["a","b","c","d","e","f","g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];
    let numbers= ["9","8","7","6","5","4","3","2","1","0"];


    let alphabet2 = alphabet.reverse();

    for(let i=0; i< alphabet.length; i++) {
        dict[alphabet2[i]] = i

    }

    for(let n=0; n< message.length; n++) {

        if(message[n] == " ") {
            c = c + " "
        }else if (numbers.includes( message[n])) {


          c = c + numbers[this.mod( parseInt(k) + numbers.indexOf((message[n])),10)]



        } else {
            c1 = parseInt(dict[message[n]]) + parseInt(k);
            c2 = this.mod(c1,26)

            c =  c + alphabet2[c2]

        }

    }

    return c

}

  // decalge g and D

  shift(arr:any, direction:any, n:any) {
    var times = n > arr.length ? n % arr.length : n;
    let rarray = arr.concat(arr.splice(0, (direction > 0 ? arr.length - times : times)));

    return rarray.join("");
    // return arr.concat(arr.splice(0, (direction > 0 ? arr.length - times : times)));
 }



}
