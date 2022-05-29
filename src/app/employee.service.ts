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

}
