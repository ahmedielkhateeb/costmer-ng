export class Country {

  constructor(code: string, name: string) {
    this.countryCode = code;
    this.countryName = name;
  }

  countryCode: string;
  countryName: string;
}
