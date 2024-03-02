import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent {
  apiError:string='';
  isLoading:boolean=false;
  subObj:any;
loginForm:FormGroup=new FormGroup({
  
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),
 
  
})
constructor(private _authService:AuthService,private _router:Router)
{}
loginsubmit(form:FormGroup){

  // this.MarkAllControlsTouch(form)
  if(form.valid && !this.isLoading)
  {
    this.isLoading=true
   this._authService.signin(form.value).subscribe(
{
  next:(data)=>{
    localStorage.setItem("userToken",data.token)
    this._authService.setUserToken()
 if(data.message=="success"){
  console.log(data)
this._router.navigate(['/home'])
 }
},
error:(err)=>{
  this.apiError=err.error.message
this.isLoading=false
}


 } )
  }
}
ngOnDestroy(): void {
  
}
// MarkAllControlsTouch(form:FormGroup)
// {
//   Object.values(form.controls).forEach((control:any)=>{
//     control.MarkAllControlsTouch();
//     if(control.controls){
//      this. MarkAllControlsTouch(control)
//     }
//   })
// }
}

 

