import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../UserModel/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  URL:string = environment.apiBaseUrl +'Auth';

  userData: User = new User();

  userlogin()
  {
    return this.http.post<any>(this.URL+'/login',this.userData);
  }

  storeToken(tokenvalue:string)
  {
    return localStorage.setItem('token',tokenvalue);
  }

  getToken()
  {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  logout()
  {
    localStorage.clear();
  }

  isLogedIn()
  {
   if( this.getToken())
   {
    return true;
   }
   else
   {
    return false;
   }
  }
}
