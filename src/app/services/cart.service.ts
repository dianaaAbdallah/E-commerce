import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartNumber=new BehaviorSubject(0)
  BaseUrl:string=`https://ecommerce.routemisr.com`;
  // headers:any={
  // token: localStorage.getItem("userToken")
  // }
  constructor(private _http:HttpClient) { 
    this.getItemOfCart().subscribe(
      {
        next:(res)=>{
this.cartNumber.next(res.numOfCartItems)
        }
      }
    )
  }

  addToChart(id:string):Observable<any>
  {

return this._http.post(`${this.BaseUrl}/api/v1/cart`,
{
  productId:id
  }
  // ,
  // {
  //   headers:this.headers
  // }
  )
}
  getItemOfCart():Observable<any>
  {
return this._http.get(`${this.BaseUrl}/api/v1/cart`
// ,
// {
 
//     headers:this.headers
//   }
  )
}

updateChart(count:number,id:string):Observable<any>
{
return this._http.put(`${this.BaseUrl}/api/v1/cart/${id}`,
{
count:count
}
// ,
// {
//   headers:this.headers
// }
)
}
deleteChart(id:string):Observable<any>
{
return this._http.delete(`${this.BaseUrl}/api/v1/cart/${id}`
// ,

// {
//   headers:this.headers
// }
)
}
checkOut(id:string,formData:any):Observable<any>
{
return this._http.post(`${this.BaseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
{
  shippingAddress:formData
}
// ,
// {
//   headers:this.headers
// }
)
}

clearChart():Observable<any>
{
return this._http.delete(`${this.BaseUrl}/api/v1/cart`
// ,

// {
//   headers:this.headers
// }
)
}
}

