import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BindingRoutingModule } from './binding-routing.module';
import { OnewaybindingComponent } from './pages/onewaybinding/onewaybinding.component';
import { TwowaybindingComponent } from './pages/twowaybinding/twowaybinding.component';
import { PropertybindingComponent } from './pages/propertybinding/propertybinding.component';
import { ChildItemComponent, SharingdataComponent } from './pages/sharingdata/sharingdata.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    OnewaybindingComponent,
    TwowaybindingComponent,
    PropertybindingComponent,
    SharingdataComponent,
    ChildItemComponent
  ],
  imports: [
    CommonModule,
    BindingRoutingModule,
    
    FormsModule,
    
    SharedModule
  ]
})
export class BindingModule { }
