import { BrandDetailsComponent } from './component/brand-details/brand-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { SigninComponent } from './authcomponent/signin/signin.component';
import { SignupComponent } from './authcomponent/signup/signup.component';
import { BrandsComponent } from './component/brands/brands.component';
import { ProductComponent } from './component/product/product.component';
import { CategoryComponent } from './component/category/category.component';
import { MycartComponent } from './component/mycart/mycart.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { authGuard } from './auth.guard';
import { MainsliderComponent } from './component/home/components/mainslider/mainslider.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { PaymentComponent } from './component/payment/payment.component';
import { AllordersComponent } from './component/allorders/allorders.component';
import { CategoryDetailsComponent } from './component/category-details/category-details.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  {path:'',redirectTo:'singin',pathMatch:'full'},
  {path:'singin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'resetPassword',component:ResetPasswordComponent},

  {path:'home',canActivate:[authGuard],component:HomeComponent},
  {path:'checkOut',canActivate:[authGuard],component:PaymentComponent},
  {path:'brands',canActivate:[authGuard],component:BrandsComponent},
  {path:'product',canActivate:[authGuard],component:ProductComponent},
  {path:'productDetails/:Id',canActivate:[authGuard],component:ProductDetailsComponent},
  {path:'category',canActivate:[authGuard],component:CategoryComponent},
  {path:'mycart',canActivate:[authGuard],component:MycartComponent},
  {path:'wishList',canActivate:[authGuard],component:WishlistComponent},
  {path:'allorders',canActivate:[authGuard],component:AllordersComponent},
  {path:'categoryDetails/:Id',canActivate:[authGuard],component:CategoryDetailsComponent},
  {path:'mainslider',canActivate:[authGuard],component:MainsliderComponent},
  {path:'brandDetails/:Id',canActivate:[authGuard],component:BrandDetailsComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
