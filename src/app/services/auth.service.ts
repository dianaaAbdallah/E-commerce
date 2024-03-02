import { User } from './../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userToken:BehaviorSubject<string>=new BehaviorSubject('')
  constructor(private _http:HttpClient,private _router:Router) { 

if(localStorage.getItem("userToken")){
 this.setUserToken();
}

  }
  setUserToken()
  {
    let token=JSON.stringify(localStorage.getItem("userToken"))
    let decodedInfo:any=jwtDecode(token)
    this.userToken.next(decodedInfo);
  }
  signUp(info:User):Observable<any>
  {
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,info);
  }
  signin(info:User):Observable<any>
  {
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,info);
  }
  signOut()
  {
localStorage.removeItem("userToken")
this.userToken.next("")
this._router.navigate(["/singin"])

  }
  forgetPassword(info:any):Observable<any>
  {
     return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,info);

  }
  verifyCode(info:any):Observable<any>
  {
     return this._http.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,info);

  }
  resetPassword(info:any):Observable<any>
  {
     return this._http.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,info);

  }
}

