import {Component, OnInit, Inject} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

import {UserCreds} from '../classes/UserCreds';
import {Auth} from '../classes/Auth';

@Component({
    selector: 'login-component',
    templateUrl: './app/login/login.html',
    inputs: ['username', 'password']
})

export class LoginComponent implements OnInit {
    
    user: UserCreds = new UserCreds();
    auth: Auth;
    
    constructor(@Inject(Http) private http: Http) {
        this.auth = new Auth(this.http);
    }
    
    ngOnInit(){
        this.auth.logout();
    }
    
    login(user): void {
        if(this.auth.login(user)) {
            //success
        } else {
            //err
        }
    }
}