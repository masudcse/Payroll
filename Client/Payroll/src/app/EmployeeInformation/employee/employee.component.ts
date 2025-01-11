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
   console.log(this.employeeService.getAllemployee());
   resuly:this.employeeService.getAllemployee()
  }
  onEdit(employee: any) {
    // You can implement your edit logic here
    // For example, open a modal or navigate to an edit page
    console.log('Edit employee:', employee);
  }
  onDelete(employeeId: number | undefined) {
    if (employeeId !== undefined) {
      if (confirm('Are you sure you want to delete this employee?')) {
        this.employeeService.deleteEmployee(employeeId).subscribe({
          next: () => {
            this.employeeService.getAllemployee();
          },
          error: (err) => {
            console.log(err);
          }
        });
      }
    }
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
