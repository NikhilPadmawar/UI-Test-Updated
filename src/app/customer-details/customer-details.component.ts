import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer-details/customer-service.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css'],
  providers: [CustomerService]
})
export class CustomerDetailsComponent implements OnInit {

  customers: any;
  cols: any;
  response: any = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {

    this.getDetails();

    this.cols = [
      { field: 'Id', header: 'ID' },
      { field: 'CompanyName', header: 'Company Name' },
      { field: 'ContactName', header: 'Contact Name' },
      { field: 'ContactTitle', header: 'Contact Title' },
      { field: 'Address', header: 'Address' },
      { field: 'City', header: 'City' },
      { field: 'PostalCode', header: 'Postal Code' },
      { field: 'Country', header: 'Country' },
      { field: 'Phone', header: 'Phone' },
      { field: 'Fax', header: 'Fax' }
    ];
  }

  public getDetails() {
    this.customerService.getCustomerDetails().then(res => {
      this.customers = res;
      console.log(JSON.stringify(this.customers));
      this.response = this.customers ? (this.customers as any).Customers : [];
      console.log(JSON.stringify(this.response));
    });

  }

}
