import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

const routes: Routes = [
  {path: "employees", component: EmployeelistComponent},
  {path: "add_employee", component: CreateEmployeeComponent},
  {path: "", redirectTo: "employees", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
