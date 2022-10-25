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
  showaffineerror = false;

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.allUsers = users
    });
  }


  send() {

    // console.log(this.originalMsg);


    if(this.originalMsg.length < 1) {

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

    if(this.originalMsg.length < 1) {

      this.notValid = true;

      return;
    }

    this.notValid = false


    // console.log(this.decalaged("bonjour"));
    // console.log(this.shift(['b', 'o', 'n', 'j', 'o' , 'u' , 'r'], 1,1));

    // return;




    // console.log(this.affine("ryan" , 5,3));


    // console.log(this.cryptAffine(3,4,"b"));
    // console.log(this.cryptAffine(3,4,"y"));
    // console.log(this.cryptAffine(3,4,"a"));
    // console.log(this.cryptAffine(3,4,"n"));
    console.log('------');

    // console.log(this.affine("ryan" , 3,4));
//







    // return

    // console.log(this.gcd_two_numbers(4,26));


    if(this.methode == "0") {
      this.cryptedText = this.misroir(this.originalMsg)
    }else if (this.methode == "1") {
      this.cryptedText = this.affine(this.originalMsg,this.valueOfa,this.valueOfb)
      // console.log(this.originalMsg,this.cryptedText);




      // this.cryptedText = "function on progress...";

    }else if (this.methode == "2") {

      let oarry = this.originalMsg.split("");

      // console.log(oarry);

      // return



      this.cryptedText = this.shift(oarry,1,1);


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
    let numbers= ["0","1","2","3","4","5","6","7","8","9"];

    for(let i=0; i< alphabet.length; i++) {
        dict[alphabet[i]] = i

    }

    for(let n=0; n< message.length; n++) {
        if(message[n] == " ") {
            c = c + " "
        }else if (numbers.includes( message[n])) {


          c = c + numbers[this.mod( parseInt(k) + numbers.indexOf((message[n])),10)]
        }else {
          console.log(message[n],dict[message[n]]);

            c1 = ( parseInt(dict[message[n]]) + parseInt(k))
            console.log(c1,c2,alphabet[c2]);


            c2 = this.mod(c1,26)
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



  // decalge g and D

  shift(arr:any, direction:any, n:any) {
    var times = n > arr.length ? n % arr.length : n;
    let rarray = arr.concat(arr.splice(0, (direction > 0 ? arr.length - times : times)));

    return rarray.join("");
    // return arr.concat(arr.splice(0, (direction > 0 ? arr.length - times : times)));
 }



 decalaged(m:any) {



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
  y = this.mod(parseInt((a * x) + (b)),  26);


  return alphabet[y];
}


affine(w:any,a:any,b:any): any {
  // console.log(w,a,b);

  // return;


  // console.log(this.cryptAffine(3,4,w[0]));
  // console.log(this.cryptAffine(3,4,w[1]));
  // console.log(this.cryptAffine(3,4,w[2]));




  // return

  // console.log('tesr1' +this.cryptAffine(a,b,"r") );
  // console.log('tesr2' +this.cryptAffine(3,4,"r") );


  var word = ' ';

  if ( this.gcd_two_numbers(a,26)  == 1) {


    for (let  i = 0; i< w.length; i++) {
      // console.log('tesr2' +this.cryptAffine(a,b,"r") );

      // console.log(a,b,i,w[i],this.cryptAffine(a,b,w[i]));
//


      word += this.cryptAffine(parseInt(a), parseInt(b),w[i])

    }

    this.showaffineerror = false;
    return word

  }else {
    this.showaffineerror = true;
    return 'it is impossible to encrypt this message. choose a prime number with 26.';
  }

}


swithTOtext() {
  this.showFile = false;
  this.originalMsg = '';
}

// file reader

showFile = false;

file:any;
fileChanged(e:any) {
    this.file = e.target.files[0];
    // this.showFile = true
}


uploadDocument() {
  this.showFile = true;

  let fileReader = new FileReader();
  fileReader.onload = (e) => {
    console.log(fileReader.result);

    this.originalMsg   = fileReader.result
  }
  fileReader.readAsText(this.file);
}













  ngOnInit(): void {
    this.getUsers();
    this.notValid = false;
  }


}
