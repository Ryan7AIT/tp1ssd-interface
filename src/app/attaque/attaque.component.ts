import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attaque',
  templateUrl: './attaque.component.html',
  styleUrls: ['./attaque.component.css']
})
export class AttaqueComponent implements OnInit {

  constructor() { }

  password:any = ''
  l = ['0','1'];

  show1 = true;
  show2 = false;
  show3 = false;


  ngOnInit(): void {
  }


  // brute force 1

  valide(password:any):any {
    if(password.length != 3) {
      console.log('must be of lenth 3');
      return false;
    }
    return true;
  }

  check(p:any,password:any){
    if(password == p) {
      console.log('the following password has been cracked:' + p)
      return true;
    }
    console.log(p);
    return false;

  }

  attaque() {
    console.log('start');

    let p;

    const d = new Date();
    let seconds = d.getSeconds();


    var start = new Date().getTime();


    for (let a = 0; a < this.l.length; a++) {
      for (let b = 0; b < this.l.length; b++) {
        for (let c = 0; c < this.l.length; c++) {

          p = this.l[a]+this.l[b]+this.l[c]

          if(this.check(p,this.password)) {

            var end = new Date().getTime();
            var time = end - start


          // const endt = new Date();
          // let endseconds = end.getSeconds();


            console.log('cracked in' +(time )  + 'seccond');

            console.log('end');
            return;

          }



        }
      }

    }

    console.log('end');

  }


}
