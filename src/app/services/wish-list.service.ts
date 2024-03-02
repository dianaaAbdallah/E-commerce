import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  WishListNumber=new BehaviorSubject(0)
  BaseUrl:string=`https://ecommerce.routemisr.com`;
  constructor(private _http:HttpClient) { 

    this.getItemOfwishList().subscribe(
      {
        next:(res)=>{
this.WishListNumber.next(res.count)
        }
      }
    )

  }
  getItemOfwishList():Observable<any>
  {
return this._http.get(`${this.BaseUrl}/api/v1/wishlist`
// ,
// {
 
//     headers:this.headers
//   }
  )
}
  addToWishList(id:string|undefined):Observable<any>
  {

return this._http.post(`${this.BaseUrl}/api/v1/wishlist`,
{
  productId:id
  }

  )
}
removeitemWishList(id:string|undefined):Observable<any>
{

return this._http.delete(`${this.BaseUrl}/api/v1/wishlist/${id}`)
}
}
