import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) {
  }
  
getproducts(pageNumber:number=1):Observable<any>{
return this._http.get(`https://ecommerce.routemisr.com/api/v1/products?page=${pageNumber}`)
}
// getCategories():Observable<any>{
//   return this._http.get(`https://ecommerce.routemisr.com/api/v1/categories`)
//   }
productDetails(id:any):Observable<any>{
  return this._http.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
}



   
}
