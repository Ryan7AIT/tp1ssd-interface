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
  valueOfb:any ;

  shown:any = false;
  showAandB = false;
  showk  = false;
  valueOfk:any =1;
  cryptedText: any;
  toUser:any ;
  allUsers: any;
  success = false;
  notValid = false;
  showaffineerror = false;
  shownotValid = false;

  // error

  showAffineAERROR= false;

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.allUsers = users
    });
  }


  send() {


    console.log(this.cryptAffine(3,1,"y"));
    // console.log(this.cryptAffine(3,4,"a"));
    // console.log(this.cryptAffine(3,4,"n"));
    console.log('------');

    // return;



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

    this.messageService.setMessages(this.cryptedText, this.methode, this.valueOfa,this.valueOfb,this.valueOfn,this.valueOfk,this.toUser).subscribe();
  }


  yesnoCheck(value:any) {

    console.log(value.value);


    if(value.value == "1") {
      this.showAandB = true
      this.shown = false
    }else if(value.value =="3") {
      this.shown = true
      this.showAandB = false
      this.showk = false;
    }else if(value.value =="2" || value.value =="4") {
      this.showAandB = false
      this.shown = false
      this.showk = true;




    }else {

      this.showk = false
      this.shown = false
      this.showAandB = false

    }


  }


  onCrypte() {


    // console.log(this.decalageg('salute bonjour'));









    this.cryptedText = ""








    if(this.originalMsg.length < 1  ) {

      this.notValid = true;
      this.shownotValid = true;
      setTimeout(() => {
        this.shownotValid = false;
      }, 3000);

      return;
    }



    this.notValid = false

    if(this.methode == "0") {
      this.cryptedText = this.misroir(this.originalMsg)
    }else if (this.methode == "1") {


      if( isNaN(this.valueOfa) || isNaN(this.valueOfb) ) {

        this.notValid = true;
        this.shownotValid = true;
        setTimeout(() => {
          this.shownotValid = false;
        }, 3000);

        return;
      }

      this.cryptedText = this.affine(this.originalMsg,this.valueOfa,this.valueOfb)

    }else if (this.methode == "2") {

      // let oarry = this.originalMsg.split("");


      // this.cryptedText = this.shift(oarry,-1,this.valueOfk);

      this.cryptedText = this.decalageg(this.originalMsg);


    }else if (this.methode == "4") {

      // let oarry = this.originalMsg.split("");

      this.cryptedText = this.decalaged(this.originalMsg);

      // this.cryptedText = this.shift(oarry,1,this.valueOfk);


    }else {
      if( isNaN(this.valueOfn) ) {
        this.shownotValid = true;

        this.notValid = true;

        setTimeout(() => {
          this.shownotValid = false;
        }, 3000);

        return;
      }
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

            c1 = ( parseInt(dict[message[n]]) + parseInt(k))


            c2 = this.mod(c1,26)
            c =  c + alphabet[c2]
        }


    }

    return c

  }

  reverse(s:any) {
    return s.split("").reverse().join("");
  }


  misroir(message:any) {

    let crypted = "";

    for (let i = 0; i < message.length; i++) {

      crypted = message[i]  + crypted

    }


    if(crypted == message) {


      let strArr = message.split('');


      for (let x = 0; x < message.length; x = x+2) {

        // message = this.reverse(message.substr(x,x+2))

        let temp = strArr[x];
        strArr[x] = strArr[x+1];
        strArr[x+1] = temp


      }


      message = strArr.join("")

      message = message + "*";




      return message;
    }else {
      return this.reverse(message);


    }




    // let str = "";
    // for (let index = 0; index < message.length; index++) {
    //    str = message[index] + str

    // }

    // return str;
  }



  // decalge g and D

  shift(arr:any, direction:any, n:any) {
    var times = n > arr.length ? n % arr.length : n;
    let rarray = arr.concat(arr.splice(0, (direction > 0 ? arr.length - times : times)));

    return rarray.join("");
    // return arr.concat(arr.splice(0, (direction > 0 ? arr.length - times : times)));
 }



 // decalage

 decalaged(m:any) {

  let myarr = m.split(" ");
  let result =""


  console.log(myarr);

  for (let j = 0; j < myarr.length; j++) {

    for (let i = 1; i < myarr[j].length; i++) {

      result += myarr[j][i]

    }

    result += myarr[j][0]
    result += " "

  }



  return result;





 }

 decalageg(m:any) {

  let myarr = m.split(" ");
  let result =""


  // bonjour => onjourb  ///droit
  // bonjour =>rbonjou    ///gauche


  // console.log(myarr);

  // for (let j = 0; j < myarr.length; j++) {

    // for (let i = 1; i < myarr[j].length; i++) {


    for (let j = 0; j < myarr.length; j++) {

      result +=  myarr[j][myarr[j].length - 1]

      // m[m.length -1];


      for (let i = 0; i < myarr[j].length -1 ; i++) {

        result += myarr[j][i]

      }

      result += " "

    }

    // result += myarr[j][0]
    // result += " "

    // result += m[m.length -1 ];

  // }



  return result;





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
  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  if(I == ' ') {
    return ' '
  }

  x = alphabet.indexOf(I) ;


  y = this.mod(parseInt((a * x) + (b)),  26);




  return alphabet[y];
}


newaffine(w:any,a:any,b:any)
{
  var word = ' ';

  let all:any= []



  for (let  i = 0; i< w.length; i++) {
    const randomElement = w[Math.floor(Math.random() * w.length)];



      word += randomElement
      word += w[i]

  }

  this.showaffineerror = false;
  return word + '*'
}

affine(w:any,a:any,b:any): any {


  if(a == 1 ) {


    return this.cesar(w,b)
  }

  if(a == 0 ) {

    this.showAffineAERROR = true;

    setTimeout(() => {
      this.showAffineAERROR = false;

    }, 3000);


    this.showaffineerror = true;

    return ;
  }

  var word = ' ';

  if ( this.gcd_two_numbers(a,26)  == 1) {


    for (let  i = 0; i< w.length; i++) {
      word += this.cryptAffine(parseInt(a), parseInt(b),w[i])

    }

    this.showaffineerror = false;
    return word

  }else if(a == 0) {
    this.showaffineerror = true;
    return ""

  }else {
    // word = this.newaffine(w,a,b)
    // return word


    if(a==15) {

      let ow = "";
      let nw = "";



      let newa = [12,3]


      // console.log(this.cryptAffine(3, 2,'a'));

      for (let  i = 0; i< w.length; i++) {

          ow  += this.cryptAffine(newa[0], parseInt(b),w[i])
        }

        for (let  i = 0; i< w.length; i++) {
          nw += this.cryptAffine(newa[1], parseInt(b),ow[i])
        }



      return nw;



    }

    let ow = "";
    let nw = "";



    let newa = this.decomposeaffine(parseInt(a));


    // console.log(this.cryptAffine(3, 2,'a'));

    for (let  i = 0; i< w.length; i++) {

        ow  += this.cryptAffine(newa[0], parseInt(b),w[i])
      }

      for (let  i = 0; i< w.length; i++) {
        nw += this.cryptAffine(newa[1], parseInt(b),ow[i])
      }



    return nw;













    this.showaffineerror = true;
    return '';
  }

}






decomposeaffine(a:number) {

  let result = [];

  result.push(a-1,1)

  return result;


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
