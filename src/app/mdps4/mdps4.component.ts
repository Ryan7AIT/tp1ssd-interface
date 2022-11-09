import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdps4',
  templateUrl: './mdps4.component.html',
  styleUrls: ['./mdps4.component.css']
})
export class Mdps4Component implements OnInit {

  constructor() { }

  password:any;
  posibilities:any = [];
  shows = false;
  seconds:any;
  l = ['0','1','2','3','4','5','6','7','8','9']

  AllChars:any = [];


  getAll() {
    for (var i=32; i<127; i++)
    this.AllChars += String.fromCharCode(i)
  }




  ngOnInit(): void {
    this.getAll()
    console.log(this.AllChars);

  }



  valid(password:any) {
    if(password.length != 5) {
      return false;
    }

    return true;
  }

  check(p:any, password:any) {
    if(p == password) {

      // console.log('you passors is cracked');
      return true;
    }

    return false;
  }

  attaque() {

    let p;

    console.log(Date.now());

    var startTime = performance.now()

    const start = Date.now();




    for (let a = 0; a < this.AllChars.length; a++) {

      for (let b = 0; b < this.AllChars.length; b++) {

        for (let c = 0; c < this.AllChars.length; c++) {

          for (let d = 0; d < this.AllChars.length; d++) {

            for (let e = 0; e < this.AllChars.length; e++) {

              p = this.l[a] + this.l[b] + this.l[c] + this.l[d] + this.l[e];
              this.posibilities.push(p)




              if(this.check(p,this.password)) {
        const millis = Date.now() - start;


          var endTime  = performance.now()
      console.log( Date.now());


          // this.seconds = endTime - startTime

          this.seconds = endTime - startTime;



                this.shows = true;

                return

              }




            }

          }


        }

      }

    }

  }


}
