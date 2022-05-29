import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    //dummy data for test purpose
    this.employees = [
      {
      "id":1,
      "firstName":"osman",
      "lastName":"forhad",
      "emailId":"osman@gmail.com"},
      {
        "id":2,
        "firstName":"sayeed",
        "lastName":"jony",
        "emailId":"sayeed@gmail.com"}
    ];
  }

}
