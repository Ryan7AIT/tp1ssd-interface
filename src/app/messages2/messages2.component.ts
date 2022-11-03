import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-messages2',
  templateUrl: './messages2.component.html',
  styleUrls: ['./messages2.component.css']
})
export class Messages2Component implements OnInit {

  constructor(private messageService: MessageService, private userService: UserService) { }

  f(id:number) {

    let name:any = ""
    this.userService.getUser(id).subscribe(data => {
      console.log(data);

      name = data
    }


    )

    return 'name is ' + name;

  }




  getMessages() {

    this.messageService.getMessages(localStorage.getItem('userid')).subscribe((data: any) =>  {
      // console.log(data);

      this.messages = data
    });
  }

  ngOnInit(): void {
    this.getMessages();

  }

  yesnoCheck(value:any) {

    console.log(value.value);


    if(value.value == "1") {
      this.showAandB = true
      this.shown = false
    }else if(value.value =="3") {
      this.shown = true
      this.showAandB = false
    }else if(value.value =="2" || value.value =="4") {
      this.showAandB = false
      this.shown = false




    }else {

      this.shown = false
      this.showAandB = false

    }


  }



  shown:any = false;
  showAandB = false;
  messages: any;
  cryptedText:any;
  dcryptedText:any;
  isSend= false;
  methode= 0;
  valueOfb:any;
  valueOfa:any;
  valueOfn:any;
  valueOfk:any;


  onSend(m: any,va:any,vb:any,vn:any,vk:any) {

    // console.log(m,va,vb);


    // this.valueOfa = va;
    // this.valueOfb = vb;
    // this.valueOfn = vn;
    // this.valueOfk = vk;

    this.isSend = true;
    this.cryptedText = m;
    this.dcryptedText = '';


  }



  onDeCrypte() {

    // wcueass

    if(this.methode == 0) {
    this.dcryptedText = this.misroir(this.cryptedText)

    }else if (this.methode == 1) {
      console.log('affine wirh: ' + this.valueOfa );


    this.dcryptedText = this.daffine(this.cryptedText, this.valueOfa,this.valueOfb);
    }else if (this.methode == 2) {

      // let oarry = this.cryptedText.split("");

      // this.dcryptedText = this.shift(oarry,1,this.valueOfk);


      this.dcryptedText = this.decalaged(this.cryptedText);


    }else if (this.methode == 4) {

      // let oarry = this.cryptedText.split("");

      // this.dcryptedText = this.shift(oarry,-1,this.valueOfk);

      this.dcryptedText = this.decalageg(this.cryptedText);


    }

    else{
      this.dcryptedText = this.dcesar(this.cryptedText,this.valueOfn);
    }

  }


  // decrytion methode

  // misroir(message:any) {
  //   let str = "";
  //   for (let index = 0; index < message.length; index++) {
  //      str = message[index] + str

  //   }

  //   return str;
  // }

  reverse(s:any) {
    return s.split("").reverse().join("");
  }


  misroir(message:any) {




    if(message.slice(-1) == '*' ){
      console.log(12345678);

      let strArr = message.split('');


      for (let x = 0; x < message.length; x = x+2) {

        let temp = strArr[x];
        strArr[x] = strArr[x+1];
        strArr[x+1] = temp

      }

      message = strArr.join("")

      return message.substring(0, message.length - 1);



    }else {
      return this.reverse(message);
    }



    // for (let i = 0; i < message.length; i++) {

    //   crypted = message[i]  + crypted

    // }


    // if(crypted == message) {


    //   let strArr = message.split('');


    //   for (let x = 0; x < message.length; x = x+2) {

    //     // message = this.reverse(message.substr(x,x+2))

    //     let temp = strArr[x];
    //     strArr[x] = strArr[x+1];
    //     strArr[x+1] = temp


    //   }


    //   message = strArr.join("")

    //   message = message + "*";




    //   return message;
    // }else {
    //   return this.reverse(message);


    // }




    // let str = "";
    // for (let index = 0; index < message.length; index++) {
    //    str = message[index] + str

    // }

    // return str;
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
      console.log('hereeees');

      x = x+1;
    }
    return x;
  }


  newaffine(w:any,a:any,b:any)
{
  var word = ' ';


  let i = 0;

  while (i < w.length) {

    if(w[i] == '*') {
      word += w[i+1]
      i = i +1
    }else{
      // console.log(w[i]);/

      word += this.decryptaffine(parseInt(a), parseInt(b),w[i])

    }
    i = i +1




  }

  return word;


  // for (let  i = 0; i< w.length; i++) {



  //   if(w[i] == '*') {
  //     word += '*'
  //     word += w[i]

  //   }else {
  //     word += this.decryptaffine(parseInt(a), parseInt(b),w[i])
  //   }




  // }

  // return word
}


  decryptaffine(a:any,b:any,i:any) :any {












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

    let neww = '';

    if(w.slice(-1) == '*') {

      for (let j = 1; j < w.length; j= j+2) {
        neww += w[j];
      }

    return neww
    }

    if(a == 0 ) {

      return this.dcesar(w,b)
    }


    // return


    var word = ' ';

    if ( this.gcd_two_numbers(a,26)  == 1) {

      for (let  i = 0; i< w.length; i++) {


        word += this.decryptaffine(a,b,w[i])
        console.log(word);
      }

      return word

    }else {

      // word = this.newaffine(w,a,b);

      // return word;

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


}
