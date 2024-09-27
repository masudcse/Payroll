import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../User/UserService/user.service';


export const CanActive = () =>{
  const userService = inject(UserService);
  const router = inject(Router);
 
  if(userService.isLogedIn()){
  return true;
  }else{
   router.navigate([''])
   return false;
  }
 }
