import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryList:Category[]=[];

constructor(private _CategoriesService:CategoriesService)
{

}
  ngOnInit(): void {
    this._CategoriesService.getCategories().subscribe(
  
  {
    next:(response)=>{
      this.categoryList=response.data
   
    },
    error:(error)=>{}
  })}
 
 
}
