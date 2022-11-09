import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdps3',
  templateUrl: './mdps3.component.html',
  styleUrls: ['./mdps3.component.css']
})
export class Mdps3Component implements OnInit {

  constructor() { }

  // :any;

  @Input() password:any;
  passwords:any;
  seconds:any;
  shows=false;
  posibilities:any=[];




  ngOnInit(): void {


    // this.readTextFile("C:/Users/micro/Desktop/m1/ssad/tp1ssd-interface/src/app/mdps3/dict.txt")

  }

  readTextFile(file:any)
  {
    console.log(2345);

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
  }

  // readTextFile("file:///C:/your/path/to/file.txt");



  // read file

  file:any;
fileChanged(e:any) {
    this.file = e.target.files[0];
    // this.showFile = true
}


uploadDocument() {

  let fileReader = new FileReader();
  fileReader.onload = (e) => {
    // console.log(fileReader.result);


    const file:any = e.target?.result;
    const lines:any = file.split(/\r\n|\n/);

    this.passwords = lines;

    // console.log(lines);




      //  = fileReader.result
  }




  fileReader.readAsText(this.file);
}


  attaque() {

    var startTime = performance.now()

    const start = Date.now();


    for (let i = 0; i < this.passwords.length; i++) {
      console.log(this.passwords[i]);



      if(this.password == this.passwords[i]) {

        console.log('the following password has been cracked:' + this.passwords[i])



        const millis = Date.now() - start;

        this.posibilities.push(this.passwords[i])



        var endTime  = performance.now()
        // this.seconds = endTime - startTime

        this.seconds = millis

        console.log("time: " + this.seconds + "ms");




              this.shows = true;

              return;


      }
      this.posibilities.push(this.passwords[i])



    }


  }

}
