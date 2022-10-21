import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent implements OnInit {

  constructor(private messageService: MessageService, private userService: UserService) { }

  originalMsg:any="";
  methode: any = 0;
  valueOfn:any;
  valueOfa:any;
  valueOfb:any;
  shown:any = false;
  showAandB = false;
  cryptedText: any;
  toUser:any ;
  allUsers: any;
  success = false;
  notValid = false;

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.allUsers = users
    });
  }


  send() {

    // console.log(this.originalMsg);


    if(this.originalMsg.length < 1) {
      console.log(876543);

      this.notValid = true;

      return;
    }

    this.notValid = false

    this.success = true;
    setTimeout(() => {
      this.success = false;
    }, 3000);

    // console.log(this.cryptedText,this.methode);

    this.messageService.setMessages(this.cryptedText, this.methode, this.valueOfa,this.valueOfb,this.valueOfn,this.toUser).subscribe();
  }


  yesnoCheck(value:any) {

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


  onCrypte() {



    // console.log(this.affine("ryan" , 5,3));



    // return

    // console.log(this.gcd_two_numbers(4,26));


    if(this.methode == "0") {
      this.cryptedText = this.misroir(this.originalMsg)
    }else if (this.methode == "1") {
      this.cryptedText = this.affine(this.originalMsg,this.valueOfa,this.valueOfb)
      // console.log(this.originalMsg,this.cryptedText);




      // this.cryptedText = "function on progress...";

    }else if (this.methode == "2") {
      this.cryptedText = this.decalageD(this.originalMsg);


    }else {
      this.cryptedText = this.cesar(this.originalMsg, this.valueOfn);
    }


  }



  // cryption methods

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


  misroir(message:any) {
    let str = "";
    for (let index = 0; index < message.length; index++) {
       str = message[index] + str

    }

    return str;
  }

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


// start affine cryage functiton


mod(n:any, m:any) {
  return ((n % m) + m) % m;
}

gcd_two_numbers(x:any, y:any): any {
  if (y === 0) return x;
  /* else */ return this.gcd_two_numbers(y, x % y);
}

cryptAffine(a:any, b:any, I:any):any {
  var alphabet, x, y;
  alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  if(I == ' ') {
    return ' '
  }

  x = alphabet.indexOf(I);
  y = parseInt((a * x) + (b)) % 26;

  // console.log('affine' , a,b,x,y, alphabet[y]);

  return alphabet[y];
}


affine(w:any,a:any,b:any): any {

  // console.log(w,a,b);
  // console.log('pgcd is' +  this.gcd_two_numbers(a,26));


  var word = ' ';

  if ( this.gcd_two_numbers(a,26)  == 1) {



    for (let  i = 0; i< w.length; i++) {
      // console.log(this.cryptAffine(5,3,"r"));
      // console.log(123);

      // console.log(this.cryptAffine(a,b,i));

      word += this.cryptAffine(a,b,w[i])


    }



    return word

  }else {
    // console.log('hhhhhhhh wrong');

    return 'it is impossible to encrypt this message. choose a prime number with 26.';
  }

}




// file reader

showFile = false;

file:any;
fileChanged(e:any) {
    this.file = e.target.files[0];
    this.showFile = true
}


uploadDocument() {

  let fileReader = new FileReader();
  fileReader.onload = (e) => {
    console.log(fileReader.result);

    this.originalMsg   = fileReader.result
  }
  fileReader.readAsText(this.file);
}













  ngOnInit(): void {
    this.getUsers();
  }


}
