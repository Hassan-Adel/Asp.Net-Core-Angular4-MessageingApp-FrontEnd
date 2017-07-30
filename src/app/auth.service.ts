import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { MdSnackBar } from "@angular/material";
import { Subject } from 'rxjs/Rx';

@Injectable()

export class AuthService {

    BASE_URL = 'http://localhost:22570/auth';

    private messageStore: any[];


    constructor(private http: Http, private snackBarError: MdSnackBar) {
       
    }

    register(user: any){
        delete user.confirmPassword;
        this.http.post(this.BASE_URL + '/register', user).subscribe();
    }
    
}