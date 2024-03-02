import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brands } from 'src/app/interfaces/brands';
import { Brand } from 'src/app/interfaces/products';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brand-details',
  templateUrl: './brand-details.component.html',
  styleUrls: ['./brand-details.component.scss']
})
export class BrandDetailsComponent {
  brandDetails:Brands={}
  constructor(private _ActivatedRoute:ActivatedRoute,private _BrandsService:BrandsService)
  {

  }
  ngOnInit(): void {
    let brandId=this._ActivatedRoute.snapshot.params['Id']
    this._BrandsService.brandsDetails(brandId).subscribe(
      {
        next:(response)=>{
this.brandDetails=response.data
        }
      }
    )
  }
}
