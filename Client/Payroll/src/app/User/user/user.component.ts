import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from '../UserService/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public router:Router,public userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
    console.log('Open Employee')
    this.userService.userlogin().subscribe({
      next:res=>{
        console.log(res.token.toString());
        this.userService.storeToken(res.token.toString());
        
      },
      error:err=>{
        console.log(err);
      }
    })
    this.router.navigate(['Home']);
  }

}
