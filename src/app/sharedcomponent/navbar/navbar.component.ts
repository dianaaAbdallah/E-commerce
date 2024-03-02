import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isloggedin:Boolean=false
  cartNumber!:number
  wishListNumber!:number
constructor(private _auth:AuthService,private _cart:CartService,private _renderer2:Renderer2,private _WishListService:WishListService){

_auth.userToken.subscribe({
  next:(data)=>{
   if(_auth.userToken.getValue()) 
   {
    this.isloggedin=true
   }
   else{
    this.isloggedin=false
   }
  }
})
}
@ViewChild('navBar') navElement!:ElementRef
@HostListener('window:scroll')
onScroll():void{
if (scrollY>300)
{
  this._renderer2.addClass(this.navElement.nativeElement,'px-5')
}
else{
  this._renderer2.removeClass(this.navElement.nativeElement,'px-5')
}
}
signOut()
{
  this._auth.signOut()
}
ngOnInit(): void {
  this._cart.cartNumber.subscribe(
    {
      next:(response)=>{
        this.cartNumber=response
      }
    }
  );
  this._WishListService.WishListNumber.subscribe(
    {
      next:(res)=>{
        console.log(res)
        this.wishListNumber=res
      }
      
    }
  )
}
}
