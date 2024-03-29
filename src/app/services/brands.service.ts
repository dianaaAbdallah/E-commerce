import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private _http:HttpClient) { }
  getbrands():Observable<any>
  {
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }
  brandsDetails(id:any):Observable<any>{
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
  }
}
