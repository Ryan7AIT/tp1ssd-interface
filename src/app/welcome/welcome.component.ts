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
  canGo = true;

  password="";
  username="";
  email="";
  notValidForm = true;
  hacker = false;

  captchavalide = false;
  errorUp = false;


  // test recapatcha


  resolved(token:any) {

    console.log(token);

    if(token) {
      this.captchavalide = true;
    }else {
      this.captchavalide = false;
    }




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

  timeTotryAgain = 30;


  emailclick = 0;

  // reste password

  resetPassword(){

    if(this.emailclick == 2) {
      this.showReset = false;
      this.hacker = true;
      this.showBigError = false;
      return;
    }

    this.emailclick +=1;




    this.userService.setNewpass(this.email).subscribe();

    this.showBigError = true
  }




  in() {



    if(this.email == '') {
      // console.log('eamil not valid');

      this.error = true;

      return;
    }

    if(this.password == '') {
      // console.log('eamil not valid');

      this.error = true;


      return;
    }

    this.messageService.login(this.email, this.password).subscribe((data: any) => {


      if(localStorage.getItem("userid")){
        localStorage.removeItem("userid");
        localStorage.removeItem("username");

      }

      this.canGo = true;




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

      this.tryingNumber += 1;
      this.error = true;

      if(this.tryingNumber == 3) {
        this.showWarning = true
        return;
      }

      else if (this.tryingNumber == 7) {
        this.hacker = true;
        this.showError = false;
        this.showWarning = false;
        this.showReset = false;

      }else if (this.tryingNumber == 5 ) {

        this.showError = true;
        this.showWarning = false;
        this.timer();

      }else {
        this.showError = false;
        this.hacker = false;

      }


    });


  }

  up() {
    this.error = false

    if(this.emailup == '') {
      // console.log('eamil not valid');

      this.errorUp = true;

      return;
    }

    if(this.passwordup == '') {
      // console.log('eamil not valid');

      this.errorUp = true;


      return;
    }

    this.messageService.signup(this.usernameup, this.passwordup,this.emailup).subscribe(() => {
      this.email = this.emailup;
      this.singup = false;
      this.emailup = '';
      this.usernameup='';
      this.passwordup='';
    },(error:any)=> {
      console.log(error);

    })
  }

  showReset = false;

  timer() {
    if(this.timeTotryAgain == 0) {
      return;
    }
    setInterval( () => {this.timeTotryAgain -= 1} , 1000);

    setTimeout(() => {

      this.showError = false;
      this.timeTotryAgain= 30;
      this.error = false
    }, 30000);

    // this.showBigError = true

    this.showReset = true;

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
