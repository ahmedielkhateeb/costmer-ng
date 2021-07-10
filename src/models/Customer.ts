export class Customer {
  constructor(country: string, state: string, countryCode: string, phone: string, name: string) {
    this.country = country;
    this.state = state;
    this.countryCode = countryCode;
    this.phone = phone;
    this.name = name;
  }

  country: string;
  state: string;
  countryCode: string;
  phone: string;
  name: string;
}
