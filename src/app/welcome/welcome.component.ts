import { Component, OnInit, Renderer2 } from '@angular/core';
import { MessageService } from '../message.service';
import { UserService } from '../user.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private messageService: MessageService, private userService: UserService, private recaptchaV3Service: ReCaptchaV3Service, private _renderer: Renderer2) { }

  error = false;

  password="";
  username="";
  email="";
  notValidForm = true;
  hacker = false;

  captchavalide = true;


  // test recapatcha


  resolved(token:any) {

    this.captchavalide = true;


  }










  /// end recaptcha

  passwordup="";
  usernameup="";
  emailup="";



  singup = false;

  tryingNumber = 0;

  showWarning = false;
  showError= false;
  showBigError = false;
  succeslogin = false;

  timeTotryAgain = 10;


  // reste password

  resetPassword(){


    this.userService.setNewpass(this.email).subscribe();

    this.showBigError = true
  }




  in() {

    if(this.email == '') {
      console.log('eamil not valid');

      return;
    }

    if(this.password == '') {
      console.log('eamil not valid');

      return;
    }

    this.messageService.login(this.email, this.password).subscribe((data: any) => {


      if(localStorage.getItem("userid")){
        localStorage.removeItem("userid");
        localStorage.removeItem("username");

      }




      localStorage.setItem("userid", data.id);
      localStorage.setItem("username", this.dcesar(data.name,3));
      this.succeslogin = true;

      setTimeout(() => {
      this.succeslogin = false;

      }, 4000);

      this.error = false;
      this.showError = false;
      this.showWarning = false;
      this.showReset = false;


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

  showReset = false;

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

    // this.showBigError = true

    this.showReset = true;

    // this.resetPassword();

        //
        // this.showError = false;
  }

  ngOnInit(): void {

    // this.resetPassword();



    // recapatcha


    let script = this._renderer.createElement('script');
    script.defer = true;
    script.asycn = true;
    script.src = "https://www.google.com/recaptcha/api.js";
    this._renderer.appendChild(document.body,script);




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



// form;

submitted = false;

onSumit() {
  this.submitted = true;
}


}
