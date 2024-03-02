import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit{
  checkout=new FormGroup(
  {
details:new FormControl(),
phone:new FormControl(),
city:new FormControl(),
  }
)
constructor(private _cart:CartService)
{

}
ngOnInit(): void {
  this.getMyCartr()
}
cartId:string=''
getMyCartr()
{

  this._cart.getItemOfCart().subscribe(

{
  next:(response)=>{

  this.cartId=response.data._id;
  },
  error:(err)=>{

  }
}


  )
}
payment(form:FormGroup)
{
  console.log(form.value)
this._cart.checkOut(this.cartId,form.value).subscribe(
  {
    next:(response)=>{
      console.log(response)
     window.location=response.session.url;
    
    },
    error:(err)=>{console.log(err)}
  }
)
}

}
