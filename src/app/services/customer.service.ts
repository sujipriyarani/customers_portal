// customer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'https://api.first.org/data/v1/countries';

  constructor(private http: HttpClient) {}

  // Get region list
  getRegions(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // Get Country List
  // getCountries(region: string): Observable<any> {
  //   return this.http.get(`${this.baseUrl}?region=${region}`);
  // }
}
