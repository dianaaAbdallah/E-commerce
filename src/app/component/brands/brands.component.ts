import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/interfaces/products';
import { BrandsService } from 'src/app/services/brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brandsList:Brand[]=[];

  constructor(private _BrandsService:BrandsService)
  {
  
  }
    ngOnInit(): void {
      this._BrandsService.getbrands().subscribe(
    
    {
      next:(response)=>{
        this.brandsList=response.data
     
      },
      error:(error)=>{}
    })}
   
}
