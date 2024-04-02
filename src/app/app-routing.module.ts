import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/components/checkout.component';

const routes: Routes = [
  {
    path: ':cartId',
    component: CheckoutComponent,
  },
  { path: '**', redirectTo: '123' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
