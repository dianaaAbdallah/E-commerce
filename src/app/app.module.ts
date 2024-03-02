import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedcomponent/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { CategoryComponent } from './component/category/category.component';
import { MycartComponent } from './component/mycart/mycart.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SigninComponent } from './authcomponent/signin/signin.component';
import { SignupComponent } from './authcomponent/signup/signup.component';
import { BrandsComponent } from './component/brands/brands.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ProductComponent } from './component/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule}from '@angular/common/http';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { OrdersComponent } from './component/orders/orders.component';
import { MainsliderComponent } from './component/home/components/mainslider/mainslider.component';
import { CategoriessliderComponent } from './component/home/components/categoriesslider/categoriesslider.component';
import { FeatherproductsComponent } from './component/home/components/featureproducts/featherproducts.component'
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { Router, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { PaymentComponent } from './component/payment/payment.component';
import { AllordersComponent } from './component/allorders/allorders.component';
import { SalePipe } from './sale.pipe';
import { SearchPipe } from './search.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { MyhttpInterceptor } from './interceptor/myhttp.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './interceptor/loading.interceptor';
import { CategoryDetailsComponent } from './component/category-details/category-details.component';
import { BrandDetailsComponent } from './component/brand-details/brand-details.component';



@NgModule({
  declarations: [
    
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    MycartComponent,
    ProfileComponent,
    SigninComponent,
    SignupComponent,
    BrandsComponent,
    WishlistComponent,
    NotfoundComponent,
    ProductComponent,
    ProductDetailsComponent,
    OrdersComponent,
    MainsliderComponent,
    CategoriessliderComponent,
    FeatherproductsComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    PaymentComponent,
    AllordersComponent,
    SalePipe,
    SearchPipe,
    CategoryDetailsComponent,
    BrandDetailsComponent,
    
  
  ],
  imports: [
    BrowserModule,NgxPaginationModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RxReactiveFormsModule,BrowserAnimationsModule,CarouselModule ,
    ToastrModule.forRoot(),FormsModule,NgxSpinnerModule
 
    
 

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:MyhttpInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
