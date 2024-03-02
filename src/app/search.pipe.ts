import { Pipe, PipeTransform } from '@angular/core';
import { products } from './interfaces/products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products: products[],searchWord:string):products[] {
    return products.filter((product)=>{return product.category.name.includes(searchWord) ||product.title.includes(searchWord)} );
  }

}
