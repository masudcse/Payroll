import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../User/UserService/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
 
    if(this.userService.isLogedIn())
    {
      this.router.navigate(['Home']);
    }
    else{
      this.router.navigate(['']);
    }
  }

  logout()
  {
    console.log('Log Out');
    this.userService.logout();
    this.router.navigate(['']);
  }

}
