import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }
  createUser(user: any){
    return this._http.post("http://localhost:3000/users", user);
  }
  getAllUser()
  {
    return this._http.get("http://localhost:3000/users");
  }
  updateUser(user:any)
  {
 return this._http.put("http://localhost:3000/users/"+user.id, user)
  }
  deleteUser(user: any)
  {
    return this._http.delete("http://localhost:3000/users/" + user.id);
  }
}
