import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService:EmployeeService) { }

  ngOnInit(): void {
   /*console.log(this.employeeService.getAllemployee());*/
   resuly:this.employeeService.getAllemployee()
  }

  onSubmit(form:NgForm)
  {
    console.log(form.value);
    this.employeeService.saveEmployee().subscribe({
      next:res=>{
        /*console.log(res.toString());*/
        result: this.employeeService.getAllemployee();
      },
      error:err=>{
        console.log(err);
      }
    })
  }


}
