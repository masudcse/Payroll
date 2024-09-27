import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './EmployeeInformation/employee/employee.component';
import { CanActive } from './Guards/login.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';
import { UserComponent } from './User/user/user.component';


const routes: Routes = [
  {path:'',component:UserComponent},
  {path:'Registration',component:UserRegistrationComponent},
  {path:'Home', component:HomePageComponent, children:[
    {path:'Employee',component:EmployeeComponent}
  ],canActivate:[CanActive]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
