import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    moduleId: module.id,
  selector: 'register',
  templateUrl:'register.component.html'
})
export class RegisterComponent  { 
    form:any;

    // inside the constructor let's create a formbuilder.group that will take in our model object and we'll set that to our form property
    constructor(private fromBuilder: FormBuilder){
        //now we need to define our model. 
        this.form = fromBuilder.group({
            firstName: '',   //Initial value
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    }

    onSubmit(){
        console.log(this.form.value);
    }

}
