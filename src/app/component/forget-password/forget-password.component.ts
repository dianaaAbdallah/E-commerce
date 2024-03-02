import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  msgSuccess:any
  msgSuc:any
 constructor(private _auth:AuthService,private _router:Router)
{

}
forgertPassword=new FormGroup({

  email: new FormControl()
});
sendCode(form:FormGroup):void
{
this._auth.forgetPassword(form.value).subscribe({
  next:(response)=>{
this.msgSuccess=response.message;
document.querySelector('.forgetPassword')?.classList.add('d-none')
document.querySelector('.verifyCode')?.classList.remove('d-none')
  },
  error:(err)=>{
    this.msgSuccess= err.error.message
  }
})

}
verifyCode=new FormGroup({

  resetCode: new FormControl()
});
verifyRestCode(form:FormGroup):void{
  this._auth.verifyCode(form.value).subscribe({
    next:(response)=>{
  this.msgSuc=response.message;
  console.log("sucess")
  if(response.status=="Success"){
    this._router.navigate(['/resetPassword'])

  }
    },
    error:(err)=>{
      console.log("error")
      this.msgSuc=err.error.message
    }
});
}
}
