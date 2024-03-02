import { error } from '@rxweb/reactive-form-validators';
import { Component, OnInit } from '@angular/core';
import{ActivatedRoute}from '@angular/router'
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  productDetails:any
constructor(private _activatedRoute:ActivatedRoute,private toastr: ToastrService,private _product:ProductsService,private _cart:CartService){

}
ngOnInit(): void {
  let productId=this._activatedRoute.snapshot.params['Id']
  this._product.productDetails(productId).subscribe(
{
  next:(response)=>{
this.productDetails=response.data;


  },
  error:(err)=>{}
}

  )
}
addToMyCart(Id:string)
{
  
  this._cart.addToChart(Id).subscribe(
    {
      next:(response)=>{ 
        this._cart.cartNumber.next(response.numOfCartItems
          )
        console.log(response)
        this.toastr.success(response.message, '',
      
      {
        closeButton:true,
        progressBar:true,
        progressAnimation:'decreasing'
      }
      );},
      error:(err)=>{
        console.log("error")
      }
    }
  )
}
}
