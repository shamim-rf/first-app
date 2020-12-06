import { Observable } from 'rxjs';
import { Customer } from './../model/customer';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponsePosts } from '../model/response.interface';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = "/api";
  BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) { }
  // get calls
  get_customers() {
    return this.httpClient.get(this.baseUrl + '/customer/all');
  }

  get_adminUsers() {
    return this.httpClient.get(this.baseUrl + '/customer/admins');
  }

  // post calls

  add_customer(customer: Customer) {
    return this.httpClient.post(this.baseUrl + '/customer/create/', customer);
  }

  update_customer(customer: Customer) {
    return this.httpClient.post(this.baseUrl + '/customer/update/', customer);
  }

  delete_customer(id:any) {
    return this.httpClient.post(this.baseUrl + '/customer/delete/'+id, httpOptions);
  }


  getPosts(): Observable<IResponsePosts>{
    return this.httpClient.get<IResponsePosts>(this.BASE_URL + '/posts');
  }

}
