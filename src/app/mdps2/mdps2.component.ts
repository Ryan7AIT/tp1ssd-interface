import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdps2',
  templateUrl: './mdps2.component.html',
  styleUrls: ['./mdps2.component.css']
})
export class Mdps2Component implements OnInit {

  constructor() { }

  @Input() password: any
  posibilities:any = [];
  shows = false;
  seconds:any;
  l = ['0','1','2','3','4','5','6','7','8','9']


  ngOnInit(): void {
  }



  valid(password:any) {
    if(password.length != 5) {
      return false;
    }

    return true;
  }

  check(p:any, password:any) {
    console.log(p);

    if(p == password) {


      console.log('the following password has been cracked:' + p)


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




    for (let a = 0; a < this.l.length; a++) {

      for (let b = 0; b < this.l.length; b++) {

        for (let c = 0; c < this.l.length; c++) {

          for (let d = 0; d < this.l.length; d++) {

            for (let e = 0; e < this.l.length; e++) {

              p = this.l[a] + this.l[b] + this.l[c] + this.l[d] + this.l[e];
              this.posibilities.push(p)



              if(this.check(p,this.password)) {
        const millis = Date.now() - start;

        console.log(millis + "mss");



          var endTime  = performance.now()
      // console.log( Date.now());


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
