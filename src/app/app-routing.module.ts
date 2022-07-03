import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'binding', loadChildren: () => import('./binding/binding.module').then(m => m.BindingModule) },
  { path: 'http', loadChildren: () => import('./http/http.module').then(m => m.HttpModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
