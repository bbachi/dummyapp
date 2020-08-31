import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get("http://dummy.restapiexample.com/api/v1/employees").subscribe(data => {
      console.log(data)
    });
  }

}