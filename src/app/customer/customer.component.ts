import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Customer } from '../customer';
import { DataService } from '../data.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerid = new FormControl('1');
  
  customer = {} as Customer;
  errorMessage : string;
  constructor(private dataService : DataService) {
  }

  ngOnInit(): void {
  }

  onClickSubmit(){
    this.dataService.getCustomer(this.customerid.value).subscribe(
      customer => this.customer=JSON.parse(JSON.stringify(customer))
    );
    console.log(this.customer);
  }

}
