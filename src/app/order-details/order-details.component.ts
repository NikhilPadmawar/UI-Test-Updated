import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order-details/order-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  orders: any;
  Order: any;
  response: any = [];
  orderDetails: any;
  data: any = [];
  OrderObj = [];
  OrderDetailsObj=[];
  cnt: number = 0;
  cntD: number = 0;
  orderPagination: number = 0;
  orderDetailsPagination: number = 0;
  showOrder:any;
  showOrderDetails:any;
  rowsSelect: any;
  constructor(public orderService: OrderService) { }

  ngOnInit() {
    this.getDetails();
    this.rowsSelect=5;
    this.Order = [
      { field: 'Id', header: 'ID' },
      { field: 'CustomerId', header: 'Customer Id ' },
      { field: 'EmployeeId', header: 'Employee Id' },
      { field: 'OrderDate', header: 'OrderDate' },
      { field: 'RequiredDate', header: 'Required Date' },
      { field: 'ShipAddress', header: 'Ship Address' },
      { field: 'ShipCity', header: 'Ship City' },
      { field: 'ShipCountry', header: 'Ship Country' },
      { field: 'ShipName', header: 'Ship Name' },
      { field: 'ShipPostalCode', header: 'Ship Postal Code' },
      { field: 'ShipVia', header: 'Ship Via' }
    ];

    this.orderDetails=[
      { field: 'OrderId', header: 'Order Id' },
      { field: 'ProductId', header: 'Product Id ' },
      { field: 'UnitPrice', header: 'Unit Price' },
      { field: 'Quantity', header: 'Quantity' },
      { field: 'Discount', header: 'Discount' }
    ];
  }

  public getDetails() {
    this.orderService.getCustomerDetails().then(res => {
      this.orders = res;
      // console.log(JSON.stringify(this.orders));
      this.response = this.orders ? (this.orders as any).Results : [];
      console.log(JSON.stringify(this.response));
     

      this.orderPagination = 0;
      this.orderDetailsPagination=0;

      this.cnt = 0;
      this.cntD = 0;
      for (let obj of this.response) {
        this.OrderObj[this.cnt] = {
          Id: null,
          CustomerId: null,
          EmployeeId: null,
          OrderDate: null,
          RequiredDate: null,
          ShipAddress: null,
          ShipCity: null,
          ShipCountry: null,
          ShipName: null,
          ShipPostalCode: null,
          ShipVia: null
        }
        this.OrderObj[this.cnt].Id = obj.Order.Id;
        this.OrderObj[this.cnt].CustomerId = obj.Order.CustomerId;
        this.OrderObj[this.cnt].EmployeeId = obj.Order.EmployeeId;
        this.OrderObj[this.cnt].OrderDate = obj.Order.OrderDate;
        this.OrderObj[this.cnt].RequiredDate = obj.Order.RequiredDate;
        this.OrderObj[this.cnt].ShipAddress = obj.Order.ShipAddress;
        this.OrderObj[this.cnt].ShipCity = obj.Order.ShipCity;
        this.OrderObj[this.cnt].ShipCountry = obj.Order.ShipCountry;
        this.OrderObj[this.cnt].ShipName = obj.Order.ShipName;
        this.OrderObj[this.cnt].ShipPostalCode = obj.Order.ShipPostalCode;
        this.OrderObj[this.cnt].ShipVia = obj.Order.ShipVia;
        this.cnt++;


      }
      
      this.showOrder=this.OrderObj.length;

      for (let obj of this.response) {
        this.cntD=0;
        for(let subObj of obj.OrderDetails)
        {
          this.OrderDetailsObj[this.cntD] = {
            OrderId: null,
            ProductId: null,
            UnitPrice: null,
            Quantity: null,
            Discount: null
          }
          this.OrderDetailsObj[this.cntD].OrderId = subObj.OrderId;
          this.OrderDetailsObj[this.cntD].ProductId = subObj.ProductId;
          this.OrderDetailsObj[this.cntD].UnitPrice = subObj.UnitPrice;
          this.OrderDetailsObj[this.cntD].Quantity = subObj.Quantity;
          this.OrderDetailsObj[this.cntD].Discount = subObj.Discount;

          this.cntD++;
        }
        
      }
      this.showOrderDetails = this.OrderDetailsObj.length;

    });

  }
  orderPaginate(event) {
    this.orderPagination = event.first;
  }

  orderDetailsPaginate(event) {
    this.orderDetailsPagination = event.first;
  }


}
