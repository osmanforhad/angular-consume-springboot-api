import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path: "employees", component: EmployeelistComponent},
  {path: "add_employee", component: CreateEmployeeComponent},
  {path: "edit_employee/:id", component: UpdateEmployeeComponent},
  {path: "employee_details/:id", component: EmployeeDetailsComponent},
  {path: "", redirectTo: "employees", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
