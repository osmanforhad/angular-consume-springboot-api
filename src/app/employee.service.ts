import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private base_URL = "http://localhost:8080";
  private api_URL = this.base_URL + "/api/v1";

  constructor(private httpClinet: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClinet.get<Employee[]>(`${this.api_URL + "/employees"}`);
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClinet.post(`${this.api_URL + "/create_employee"}`, employee);
  }

  getEmployeeById(id: number):Observable<Employee>{
    return this.httpClinet.get<Employee>(`${this.api_URL + "/employee"}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClinet.put(`${this.api_URL + "/update_employee"}/${id}`, employee);
  }

  deleteEmployee(id: number):Observable<Object>{
    return this.httpClinet.delete(`${this.api_URL + "/delete_employee"}/${id}`);
  }

}
