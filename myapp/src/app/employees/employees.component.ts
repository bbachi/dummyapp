import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private appService: AppService, private http: HttpClient) { }

  users: any

  ngOnInit(): void {
    this.http.get("http://dummy.restapiexample.com/api/v1/employees").subscribe(data => {
      console.log(data)
    });
  }

}
