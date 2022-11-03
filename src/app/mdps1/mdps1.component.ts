import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdps1',
  templateUrl: './mdps1.component.html',
  styleUrls: ['./mdps1.component.css']
})
export class Mdps1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  password:any = '';
  shows = false;
  l = ['0','1'];
  seconds: any;

  posibilities:any  = [];


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
        this.shows = true
        return true;
      }
      // console.log(p);
      return false;

    }

    attaque() {

      let p;

      var start:any = new Date();
      // console.log(start.getMilliseconds());

      var startTime = performance.now()




      for (let a = 0; a < this.l.length; a++) {
        for (let b = 0; b < this.l.length; b++) {
          for (let c = 0; c < this.l.length; c++) {

            p = this.l[a]+this.l[b]+this.l[c]


            if(this.check(p,this.password)) {

              var end:any = new Date();
      // console.log(end.getMilliseconds());

      var endTime  = performance.now()


      console.log(endTime - startTime);


              var time =   endTime - startTime



              this.seconds = time;


              // console.log('cracked in' +(time )  + 'seccond');

              this.posibilities.push(p)


              return;

            }

            this.posibilities.push(p)




          }
        }

      }

      console.log('end');

    }


}
