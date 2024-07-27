import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import ValidatorForm from 'src/app/helpers/validateForm';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

 type: string ="password";
 isText: boolean = false;
 eyeIcon: string = "fa-eye-slash";
 loginForm!: FormGroup;
 constructor(private fb: FormBuilder) {}
 ngOnInit(): void {
  
  this.loginForm = this.fb.group({
    username: ['',Validators.required],
    password: ['',Validators.required]
  })
 }

  hideshowpass(){
    debugger
 this.isText = !this.isText;
 this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
 this.isText ? this.type = "text" : this.type = "password";
  }

  onSubmit(){
    if(this.loginForm.valid){
      //  sumit the form
      console.log(this.loginForm.valid)
    }
    else{
      //console.log(this.loginForm.valid)
      ValidatorForm.validateAllFormField(this.loginForm);
    }
  }
}
