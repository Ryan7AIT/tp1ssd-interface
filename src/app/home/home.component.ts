import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messages: any = [];

  user: any = {};



  constructor(private messageService: MessageService) { }


  send() {
    this.messageService.setMessages(this.cryptedText, this.methode, this.valueOfa,this.valueOfb,this.valueOfn).subscribe();
  }

  getMessages() {
    this.messageService.getMessages(localStorage.getItem('userid')).subscribe((data: any) =>  {

      console.log(data);
      this.messages = data




    });
  }


  showMessages = false;
  methode = "1" ;
  originalMsg: any="";
  cryptedText: any="";
  dcryptedText: any="";

  test = "0";
  showAandB=false;
  shown=false;
  valueOfn="";
  valueOfa="";
  valueOfb="";
  allUsers : any = ["ryan", "bob", "alice"];




  a=0;
  b=0;
  n=0;

  ngOnInit(): void {
    if(this.methode == "1") {
      this.showAandB = true;
    }

    if(this.methode == "3") {
      this.shown = true;
    }

    this.getMessages();



    this.user = localStorage.getItem('username');

  }

  yesnoCheck(value: any): void {

    console.log(value.value);


    if(value.value == "1") {
      this.showAandB = true
      this.shown = false
    }else if(value.value =="3") {
      this.shown = true
      this.showAandB = false
    }else {

      this.shown = false
      this.showAandB = false

    }

  }




  onShowMessages() {
    this.showMessages = ! this.showMessages
  }


  // miroir(message:any) {
  //   return "this is the resulat of crypting " +  message + " using MIROIR method"
  // }

  // affine(message:any,a:any,b:any) {
  //   return "this is the resulat of crypting " +  message + " using affine| a and b:  " + a + "," + b
  // }



  // the cryption button

  onCrypte() {

    if(this.methode == "0") {
      this.cryptedText = this.misroir(this.originalMsg)
    }else if (this.methode == "1") {
      // this.cryptedText = this.affine(this.originalMsg,this.valueOfa,this.valueOfb)

      this.cryptedText = "function on progress...";

    }else if (this.methode == "2") {
      this.cryptedText = this.decalageD(this.originalMsg);
      this.dcryptedText = ""


    }else {
      this.cryptedText = this.cesar(this.originalMsg, this.valueOfn);
      this.dcryptedText = ""
    }


  }


  // the decrypotion button

  onDeCrypte() {


    if(this.methode == "0") {
      // this.cryptedText = this.demiroir(this.originalMsg)
    }else if (this.methode == "1") {
      // this.cryptedText = this.deaffine(this.originalMsg,this.valueOfa,this.valueOfb)

    }else if (this.methode == "2") {
      this.dcryptedText = this.decalageG(this.cryptedText);


    }else {
      this.dcryptedText = this.dcesar(this.cryptedText, this.valueOfn);
    }


  }


  // create affine function for crypting

  mod(n:any, m:any) {
    return ((n % m) + m) % m;
  }

  gcd_two_numbers(x:any, y:any) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

  cryptAffine(a:any, b:any, I:any):any {
    var alphabet, x, y;
    alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    x = alphabet.indexOf(I);
    y = parseInt((a * x) + (b)) % 26;
    return alphabet[y];
  }


  // affine(W:any, a:any, b:any) {
  //   var word;

  //   return "affine"

  //   if ( this.gcd_two_numbers(a,26)  == 1) {



  //     word =  () => {
  //       var _pj_a :any = [],
  //           _pj_b:any = W;

  //       for (var _pj_c = 0, _pj_d = _pj_b.length; _pj_c < _pj_d; _pj_c += 1) {
  //         var i = _pj_b[_pj_c];

  //         _pj_a.push(this.cryptAffine(a, b, i));

  //       }

  //       return _pj_a;


  //     }



  //     return word;
  //   } else {
  //     return "it is impossible to encrypt this message. choose a prime number with 26.";
  //   }
  // }



  // cesar crytpion

  cesar(message:any,k:any) {

    let  dict: any = {}
    let c1 = 0;
    let c2 = 0;
    let c:any=[];
    let alphabet = ["a","b","c","d","e","f","g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];

    for(let i=0; i< alphabet.length; i++) {
        dict[alphabet[i]] = i

    }

    for(let n=0; n< message.length; n++) {
        if(message[n] == " ") {
            c = c + " "
        }else {
            c1 = Math.abs( parseInt(dict[message[n]]) + parseInt(k))
            c2 = c1 % 26
            c =  c + alphabet[c2]
        }


    }

    return c

  }


  // the decryption for the cesar function

  dcesar(message:any,k:any) {


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


// the cryption function for decalage G and D

decalageD(message:any) {
  let dict: any = {}
  let c1 = 0;
  let c2 = 0;
  let c: any=[];
  let alphabet = ["a","b","c","d","e","f","g","h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];

  for(let i=0; i< alphabet.length; i++) {
      dict[alphabet[i]] = i

  }

  for(let n=0; n< message.length; n++) {
      if(message[n] == " ") {
          c = c + " "
      }else {
          c1 = Math.abs( parseInt(dict[message[n]]) + (1))
          c2 = c1 % 26
          c =  c + alphabet[c2]
      }


  }

  return c
}

decalageG(message:any) {
  let dict: any = {}
  let c1 = 0;
  let c2 = 0;
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

          c1 = Math.abs( parseInt(dict[message[n]]) + (1))
          c2 = c1 % 26
          c =  c + alphabet2[c2]

      }

  }

  return c
}

// meroir


//helpers

isPal(s:any) {
  const rev= s.reverse();
  if (s==rev) {
    return true;
  }
  return false;
}

convert(s:any) {
  return  s.split('');
}

misroir(message:any) {
  let str = "";
  for (let index = 0; index < message.length; index++) {
     str = message[index] + str

  }

  return str;
}


}


