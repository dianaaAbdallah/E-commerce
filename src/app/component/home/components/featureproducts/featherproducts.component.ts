import { Component, OnInit, Renderer2 } from '@angular/core';
import { products } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from 'src/app/services/wish-list.service';
import { error } from '@rxweb/reactive-form-validators';
@Component({
  selector: 'app-featherproducts',
  templateUrl: './featherproducts.component.html',
  styleUrls: ['./featherproducts.component.scss']
})
export class FeatherproductsComponent implements OnInit {
  searchValue:string='';
  productList:products[]=[];
  wishListData:string[]=[]
    constructor(private _product:ProductsService,private _wishListServices:WishListService,private _cart:CartService,private toastr: ToastrService,private _Renderer2:Renderer2){
  
  }
  ngOnInit(): void {
    this._product.getproducts().subscribe(
  
  {
    next:(response)=>{
      this.productList=response.data
    },
    error:(error)=>{}
  });
  this._wishListServices.getItemOfwishList().subscribe(
  
    {
      next:(res)=>{
        this.wishListData=res.data.map((item:any)=>item._id)
      },
      error:(error)=>{}
    }
  
    );
  }
  addToMyCart(Id:string,element:HTMLButtonElement):void
  {
this._Renderer2.setAttribute(element,'disabled','true');
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

          this._Renderer2.removeAttribute(element,'disabled');

        },
        error:(err)=>{
      
          this._Renderer2.removeAttribute(element,'disabled');
        }
      }
    )
  }

  addToMyWishList(Id:string|undefined):void
  {

    this._wishListServices.addToWishList(Id).subscribe(
      {
        next:(response)=>{
this.wishListData=response.data
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
  removeFav(id:string|undefined):void{
    this._wishListServices.removeitemWishList(id).subscribe(
      {
        next:(res)=>{
          this.wishListData=res.data
          this._wishListServices.WishListNumber.next(res.data.length)
          this.toastr.warning(res.message, '',
      
          {
            closeButton:true,
            progressBar:true,
            progressAnimation:'decreasing',
            positionClass:'toast-top-left'
          })
        }
      }
    )
  }
  }
  
