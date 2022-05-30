import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees: Employee[];

  constructor(private employeeService: EmployeeService, private router:Router) { }

  ngOnInit(): void {
   this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

  editEmployee(id: number){
    this.router.navigate(["/edit_employee", id]);
  }

}
