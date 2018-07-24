import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  items: MenuItem[];



  ngOnInit() {

    this.items = [{
      label: 'Customer Details',
      routerLink: ['/CustomerDetailsComponent']
  },
  {
      label: 'Order Details',
      routerLink: ['/OrderDetailsComponent']
  }];
    

  }

  
}
