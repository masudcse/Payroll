import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EmployeePersonal } from './employeeModel';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  URL:string = environment.apiBaseUrl + '/EmployeePersonal';
  employeeList: EmployeePersonal[]=[];

     
  getAllemployee(){
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
}

}
