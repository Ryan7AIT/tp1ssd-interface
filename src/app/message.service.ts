import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class  MessageService {

  constructor(private http: HttpClient) { }


  getMessages(id:any)  {
    let url=`http://tp1ssad.test/api/messages/${id}`;
    return this.http.get(url);
  }

  getMessage(msgid:any)  {
    let url=`http://tp1ssad.test/api/message/${msgid}`;
    return this.http.get(url);
  }






  setMessages(message: any, method:any,valueofa:any, valueofb:any,valueofn: any, valueOfk:any,user:any=2):any


  {





    let url="http://tp1ssad.test/api/messages";

    let data = {
      "usera" : localStorage.getItem('userid'),
      "userb" : user,
      "message" : message,
      "methode" : method,
      "valueofa" : valueofa,
      "valueofb" : valueofb,
      "valueofn" : valueofn,
      "valueofk" : valueOfk,


    }
    return this.http.post(url,data);
  }


  getUser() {
    let url = "";
  }

  login(email:any,password:any) {


    let url = "http://tp1ssad.test/api/login";

    let data = {
      'email' : email,
      'password' : password,
    };

    return this.http.post(url, data);


  }

  signup(name:any,password:any,email:any) {

    // console.log(email);


    let url = "http://tp1ssad.test/api/signup";


    let data = {
      'name' : name,
      'password' : password,
      'email' : email
    };


    return this.http.post(url, data);





  }

}
