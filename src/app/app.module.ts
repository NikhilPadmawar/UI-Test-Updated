import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import {MenuItem} from 'primeng/api';
import { RouterModule, Routes } from '@angular/router';
import{ HttpModule } from '@angular/http';
import {Observable} from "rxjs";
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { appRoutes } from './app.route';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import {AccordionModule} from 'primeng/accordion';
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    TabMenuModule,
    TableModule,
    BrowserAnimationsModule,
    AccordionModule,
    FieldsetModule,
    MenuModule,
    PaginatorModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
