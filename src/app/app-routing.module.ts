import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'product', component: ProductsComponent },
  { path: 'admin/order', component: AdminOrderComponent },
  { path: 'admin/product', component: AdminProductsComponent },
  { path: 'orders', component: MyOrdersComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
