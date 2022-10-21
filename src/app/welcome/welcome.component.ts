import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private messageService: MessageService, private userService: UserService) { }

  error = false;

  password="";
  username="";
  email=""

  passwordup="";
  usernameup="";
  emailup="";

  singup = false;

  tryingNumber = 0;

  showWarning = false;
  showError= false;
  showBigError = false;

  timeTotryAgain = 10;


  // reste password

  resetPassword(){


    this.userService.setNewpass(this.email).subscribe();
  }



  in() {

    this.messageService.login(this.email, this.password).subscribe((data: any) => {

      console.log(data);

      if(localStorage.getItem("userid")){
        localStorage.removeItem("userid");
        localStorage.removeItem("username");

      }




      localStorage.setItem("userid", data.id);
      localStorage.setItem("username", this.dcesar(data.name,3));

      this.error = false;
      this.showError = false;
      this.showWarning = false;


    },(error: any ) => {

      // this.showWarning = true
      this.tryingNumber += 1;
      this.error = true;

      console.log(this.tryingNumber);

      if(this.tryingNumber == 3) {
        this.showWarning = true
      }else if (this.tryingNumber > 4 ) {

        this.showError = true;
        this.showWarning = false;
        this.timer();

      }


    });


  }

  up() {
    // console.log(this.emailup);

    this.messageService.signup(this.usernameup, this.passwordup,this.emailup).subscribe(() => {
      this.singup = false;
      this.emailup = '';
      this.usernameup='';
      this.passwordup='';
    })
  }

  timer() {
    if(this.timeTotryAgain == 0) {
      return;
    }
    setInterval( () =>
        {this.timeTotryAgain -= 1}, 1000);


    setTimeout(() => {

      this.showError = false;
      this.timeTotryAgain= 10;
      this.tryingNumber=0;
      this.error = false

    }, 10000);

    this.showBigError = true
    this.resetPassword();

        //
        // this.showError = false;
  }

  ngOnInit(): void {

    // this.resetPassword();




    if(this.showError) {
      this.timer();
    }

  }



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


}
