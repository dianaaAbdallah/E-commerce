import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  cartItem:any
constructor(private _cart:CartService)
{}
ngOnInit(): void {
  this.getMyCartr()

}
getMyCartr()
{
  this._cart.getItemOfCart().subscribe(

{
  next:(response)=>{
this.cartItem=response.data
  },
  error:(err)=>{

  }
}


  )
}

updateMycart(count:number,id:string)
{
  if(count==0)
  {
    this.deleteMycart(id)
  }
  this._cart.updateChart(count,id).subscribe(

{
  next:(response)=>{
this.cartItem=response.data
  },
  error:(err)=>{

  }
}


  )
}
deleteMycart(id:string)
{
  this._cart.deleteChart(id).subscribe(

{
  next:(response)=>{
this.cartItem=response.data
this._cart.cartNumber.next(response.numOfCartItems)
  },
  error:(err)=>{

  }
}


  )
}
clear():void
{
  this._cart.clearChart().subscribe(
    {
      next:(res)=>{
        if(res.message=="success")
        {
          this.cartItem=null
          this._cart.cartNumber.next(res.numOfCartItems)
        }
      }
    }
  )
}
}
