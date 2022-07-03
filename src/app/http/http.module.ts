import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CommunicationComponent } from './pages/communication/communication.component';

@NgModule({
  declarations: [
      CommunicationComponent
  ],
  imports: [
    CommonModule,
    HttpRoutingModule,

    HttpClientModule 
  ]
})
export class HttpModule { }
