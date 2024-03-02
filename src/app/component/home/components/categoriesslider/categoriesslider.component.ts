import { Component, OnInit } from '@angular/core';
import { error } from '@rxweb/reactive-form-validators';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categoriesslider',
  templateUrl: './categoriesslider.component.html',
  styleUrls: ['./categoriesslider.component.scss']
})
export class CategoriessliderComponent implements OnInit {
allCategory:Category[]=[]
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  margin:10,
  autoplay:true,
  autoplayTimeout:5000,
  autoplaySpeed:2000,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    980:{
      items: 8
    }
    
  },
  nav: true
}
  constructor(private _CategoriesService:CategoriesService)
{

}
ngOnInit(): void {
  this.getCategories()
}
getCategories()
{
  this._CategoriesService.getCategories().subscribe(
{
  next:(data)=>{
this.allCategory=data.data
  },

error:(err)=>{

}
}
  )
}
}
