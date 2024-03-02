import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  apiError:string='';
  isLoading:boolean=false;
  subObj:any;
resetForm:FormGroup=new FormGroup({
  
  email:new FormControl(null,[Validators.required,Validators.email]),
  newPassword:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{4,8}$/)]),
 
  
})
constructor(private _authService:AuthService,private _router:Router)
{}
resetsubmit(form:FormGroup){

  // this.MarkAllControlsTouch(form)
  if(form.valid && !this.isLoading)
  {
    this.isLoading=true
   this._authService.resetPassword(form.value).subscribe(
{
  next:(data)=>{
 

console.log("sucess reset")
this._router.navigate(['/singin'])

},
error:(err)=>{
  this.apiError=err.error.message
  console.log("falied reset")
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

 

