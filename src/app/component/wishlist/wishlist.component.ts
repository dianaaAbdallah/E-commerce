import { Component, Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { products } from 'src/app/interfaces/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {
  wishList:products[]=[];
    wishListData:string[]=[]
  constructor(private _product:ProductsService,private _wishListServices:WishListService,private _cart:CartService,private toastr: ToastrService,private _Renderer2:Renderer2){

}
ngOnInit(): void {
  this.getMywishList()
  }
  getMywishList():void{
  this._wishListServices.getItemOfwishList().subscribe(

{
  next:(response)=>{
    this.wishList=response.data
  },
  error:(error)=>{}
}


  )
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
removeFav(id:string|undefined):void{
  this._wishListServices.removeitemWishList(id).subscribe(
    {
      next:(res)=>{
        this.wishListData=res.data
       
        this._wishListServices.WishListNumber.next(res.data.length)
        this.getMywishList()
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
}
