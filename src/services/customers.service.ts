import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/Customer";
import {environment} from "../environments/environment";
import {Country} from "../models/Country";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) {
  }

  getCustomers(countryCode: string, state: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.url}/customer/countryCode/${countryCode}/state/${state}`);
  }

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.url}/customer/countries`);
  }
}
