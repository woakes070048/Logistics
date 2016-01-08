
import {Injectable, Inject} from 'angular2/core'
import {Http, Headers} from 'angular2/http';
import {UserCreds} from '../classes/UserCreds';
import {STATIC} from '../classes/Static';

@Injectable()

export class Auth {

    constructor(@Inject(Http) private http: Http) {
        
    }

    login = (userCreds: UserCreds): boolean => {
        try {
            let username = userCreds.username,
                password = userCreds.password;
            let creds = 'username=' + username + '&password=' + password;
            let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

            this.http.post(STATIC.loginPath, creds, { headers: headers })
                //.map(res => console.log(res))
                .subscribe(
                    data => { return this.saveToken(data) },
                    err => { return this.logError(err) },
                    () => console.log('auth complete')
                );
        } catch (err) {
            this.logError(err);
            return false;
        }
    }
    
    logout = () => {
        try {
            localStorage.removeItem('authToken');
        } catch(err) {
            this.logError(err);
        }
    }

    private saveToken = (token): boolean => {
        if (token) {
            localStorage.setItem('authToken', JSON.parse(token._body).token);
            return true;
        } else {
            this.logError(new Error('Token is empty'));
            return false;
        }
    }

    private logError = (err) => {
        console.log('could not authenicate', err);
    }
}