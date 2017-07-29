import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
  selector: 'register',
  templateUrl:'register.component.html',
  styles : [`.error{background-color: #fff0f0}`]
})
export class RegisterComponent  { 
    form:any;

    // inside the constructor let's create a formbuilder.group that will take in our model object and we'll set that to our form property
    constructor(private fromBuilder: FormBuilder){
        //now we need to define our model. 
        this.form = fromBuilder.group({
            firstName: ['', Validators.required],   //Initial value
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        });
    }

    onSubmit(){
        console.log(this.form.valid);
        console.log(this.form.controls);
    }

    isValid(control:any){
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }

}
