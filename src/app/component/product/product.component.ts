import { WishListService } from 'src/app/services/wish-list.service';
import { Metadata } from './../../interfaces/products';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { products } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productList:products[]=[];
  pageSize:number=0;
  currentPage:number=1;
  searchValue:string='';
  total:number=0
  constructor(private _wishListServices:WishListService,private _product:ProductsService,private _cart:CartService,private toastr: ToastrService){
  
  }
  ngOnInit(): void {
    this._product.getproducts().subscribe(
  
  {
    next:(response)=>{
      this.productList=response.data
      this.pageSize=response.metadata.limit
      this.currentPage=response.metadata.currentPage
      this.total=response.results
    },
    error:(error)=>{}
  })}
  addToMyCart(Id:string)
  {
    this._cart.addToChart(Id).subscribe(
      {
        next:(response)=>{

          this._cart.cartNumber.next(response.numOfCartItems)
          this.toastr.success(response.message, '',
      
          {
            closeButton:true,
            progressBar:true,
            progressAnimation:'decreasing',
            positionClass:'toast-top-left'
          })



        },
        error:(err)=>{
          console.log(err)
        }
      }
    )
  }
  addToMyWishList(Id:string|undefined):void
  {

    this._wishListServices.addToWishList(Id).subscribe(
      {
        next:(response)=>{

          this._wishListServices.WishListNumber.next(response.data.length)

          this.toastr.success(response.message, '',
      
          {
            closeButton:true,
            progressBar:true,
            progressAnimation:'decreasing',
            positionClass:'toast-top-left'
          })

        

        },
        error:(err)=>{
      
      
        }
      }
    )
  }
  pageChanged(event:any):void{


    this._product.getproducts(event).subscribe(
  
      {
        next:(response)=>{
          this.productList=response.data
          this.pageSize=response.metadata.limit
          this.currentPage=response.metadata.currentPage
          this.total=response.results
        },
        error:(error)=>{}
      })
  }
}
