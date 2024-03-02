import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {
 
  categoryDetails:Category={}
  constructor(private _ActivatedRoute:ActivatedRoute,private _categoryService:CategoriesService)
  {

  }
  ngOnInit(): void {
    let categryId=this._ActivatedRoute.snapshot.params['Id']
    this._categoryService.categoryDetails( categryId).subscribe(
      {
        next:(response)=>{
this.categoryDetails=response.data
        }
      }
    )
  }

}
