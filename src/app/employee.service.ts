import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private base_URL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClinet: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClinet.get<Employee[]>(`${this.base_URL}`);
  }

}
