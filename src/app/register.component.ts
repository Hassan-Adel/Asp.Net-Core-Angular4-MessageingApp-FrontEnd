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
        //the first parameter we pass in is our model. The second parameter we can pass in is a validator for that model
        this.form = fromBuilder.group({
            firstName: ['', Validators.required],   //Initial value
            lastName: ['', Validators.required],
            email: ['', [Validators.required, emailValid()]],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
        }, { validator: matchingFields('password', 'confirmPassword')});
    }

    onSubmit(){
        console.log(this.form.errors);
        console.log(this.form.controls);
    }

    isValid(control:any){
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }

}
//make the function outside of the class since there are good odds we will need to extract it into its own file in the future. 
/**
 *  Validators need to return a function that will either return no errors if it passes or if it's invalid, it will return an errors object. 
 */
function matchingFields(field1: any, field2: any){
    return (form: any) => {
        if (form.controls[field1].value !== form.controls[field2].value){
            return { mismatchedFields: true }
        }
    }
}
// Search for email regex (regular expression)
function emailValid() {
    return (control: any) => {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return regex.test(control.value) ? null : { invalidEmail: true }
    }
}