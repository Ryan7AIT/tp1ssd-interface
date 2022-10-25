import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  allUSers:any;
  user: any = {};
  showInfo = false;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.user = localStorage.getItem('username');
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.allUSers = users
    });
  }

  onShowInfo() {
    this.showInfo = ! this.showInfo
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


logout() {
  localStorage.removeItem('userid');
  localStorage.removeItem('username');


}


}
