import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() message: any = '';
  @Input() from: any = '';
  user:any;


  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUser(this.from).subscribe((data:any) => {
      console.log(data);

      this.user = this.dcesar(data.name,3)
    })
  }



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

mod(n:any, m:any) {
  return ((n % m) + m) % m;
}


}
