import {Component, OnInit} from '@angular/core';
import {CustomersService} from "../../services/customers.service";
import {Customer} from "../../models/Customer";
import {Country} from "../../models/Country";

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  constructor(private CustomersService: CustomersService) {
  }


  customers: Customer[] = [];
  countries: Country[] = [];
  state:string = 'any'
  countryCode:string = 'any'
  ngOnInit(): void {
    this.getCustomers();
    this.getCountries();
  }

  getCustomers(): void {
    this.CustomersService.getCustomers(this.countryCode, this.state).subscribe(
      value => {
        this.customers = value;
        console.log(this.customers);
      },
      error => {
        console.log(error);
      }
    );
  }

  getCountries(): void {
    this.CustomersService.getAllCountries().subscribe(
      value => {
        this.countries = value;
        console.log(this.countries);
      },
      error => {
        console.log(error);
      }
    );
  }

}
