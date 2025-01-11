import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeePersonal } from './employeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  URL:string = environment.apiBaseUrl + 'EmployeePersonal';
  employeeList: EmployeePersonal[]=[];
  employeeData:EmployeePersonal = new EmployeePersonal();

  getToken()
  {
    //console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }
  getAllemployee() {
    const token = this.getToken(); // Get the token from local storage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Include token in Authorization header
    });
    this.http.get<EmployeePersonal[]>(this.URL, { headers })
    .subscribe({
      next: res => {
        console.log(res);
        this.employeeList = res; // Assign response to employeeList
      },
      error: err => {
        console.log(err); // Log any errors
      }
    });
}
  /*getAllemployee(){
    this.http.get(this.URL)
    .subscribe({
      next: res=>{
      console.log(res);
      this.employeeList = res as EmployeePersonal[];
    }  
    ,error:err=>{
      console.log(err)
    }
  })   
}*/

  saveEmployee() {
    const token = this.getToken(); // Get the token from local storage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Include token in Authorization header
    });
    return this.http.post(this.URL, this.employeeData, { headers })

  }
  deleteEmployee(employeeId:number){
    const token = this.getToken(); // Get the token from local storage
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` // Include token in Authorization header
    });
    return this.http.delete(`${this.URL}/${employeeId}`, { headers });
  }

}
