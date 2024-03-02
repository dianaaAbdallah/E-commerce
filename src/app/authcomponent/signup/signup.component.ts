import { Component, OnDestroy } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators, error } from '@rxweb/reactive-form-validators';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnDestroy {
  apiError:string='';
  isLoading:boolean=false;
  subObj:any;
registerForm:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),
  rePassword:new FormControl(null,[Validators.required,RxwebValidators.compare({fieldName:'password' })]),
  phone:new FormControl(null,[Validators.required,Validators.pattern(/^(002)?(01)[0125][0-9]{8}$/)]),
  
})
constructor(private _authService:AuthService,private _router:Router)
{}
registersubmit(form:FormGroup){

  // this.MarkAllControlsTouch(form)
  if(form.valid && !this.isLoading)
  {
    this.isLoading=true
  this._authService.signUp(form.value).subscribe(
{
  next:(data)=>{
 if(data.message=="success"){
  console.log(data)
this._router.navigate(['/singin'])
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
