import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

  CreateUser(user) {
     return this._http.post("http://localhost:3000/users",user);  
  }
  UpdateUser() {

  }
  GetAllUser() {
    return this._http.get("http://localhost:3000/users");  
  }
  deleteUser(user) {
    return this._http.delete("http://localhost:3000/users/" +user.id);
  }

}

