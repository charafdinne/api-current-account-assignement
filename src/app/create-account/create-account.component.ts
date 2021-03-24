import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  customerid = new FormControl('1');
  balance = new FormControl('1');
  
  constructor(private dataService : DataService) {
  }

  ngOnInit(): void {
  }

  onClickSubmit(){
    console.log(this.customerid.value,this.balance.value);
    this.dataService.postAccount(this.customerid.value,this.balance.value).subscribe(customer => console.log(customer));
  }
  
}
