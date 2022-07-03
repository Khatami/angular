import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnewaybindingComponent } from './pages/onewaybinding/onewaybinding.component';
import { PropertybindingComponent } from './pages/propertybinding/propertybinding.component';
import { SharingdataComponent } from './pages/sharingdata/sharingdata.component';
import { TwowaybindingComponent } from './pages/twowaybinding/twowaybinding.component';

const routes: Routes = [
  {
    path: 'onewaybidning',
    component: OnewaybindingComponent
  },
  {
    path: 'twowaybidning',
    component: TwowaybindingComponent
  },
  {
    path: 'propertybinding',
    component: PropertybindingComponent
  },
  {
    path: 'sharingdatacomponent',
    component: SharingdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BindingRoutingModule { }
