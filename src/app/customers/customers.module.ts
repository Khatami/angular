import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerComponent } from './pages/customer/customer.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,

    SharedModule
  ]
})
export class CustomersModule { }