import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers()  {
    let url=`http://tp1ssad.test/api/users`;
    return this.http.get(url);
  }

  getUser(id:number)  {
    let url=`http://tp1ssad.test/api/user/${id}`;
    return this.http.get(url);
  }

  setNewpass(email:any) {
    let url= `http://tp1ssad.test/api/newpassword`;

    let data = {
      email: email
    };

    return this.http.post(url,data);
  }

}
