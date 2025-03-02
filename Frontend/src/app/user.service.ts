import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000';

 account:any;
  constructor(public http:HttpClient) {


}

getUserData(): any {
  return this.account;
}

createUser(username:any){
    return this.http.post<any>(`${this.baseUrl}/user/create`,{username}).pipe(map((account:any) => {
      this.account = account;
      return account;
    }));
}
 fetchUser(userId:any){
  return this.http.get<any>(`${this.baseUrl}/user/fetch?userId=${userId}`);
 }
}
