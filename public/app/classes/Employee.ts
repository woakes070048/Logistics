
import {Inject} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';

import {STATIC} from '../classes/STATIC';
import {IEmployee} from '../interfaces/IEmployee';

export class Employee {

    constructor(private http: Http, private username?: string) { }

    list = (): any => {
        return this.http.get(STATIC.getEmployeesPath);
    }

    get = () => {
        return this.http.get('/api/v1/Employee/' + this.username);
    }

    create = (e: IEmployee) => {
        let body = JSON.stringify(e);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/v1/Employee',  body, { headers: headers });
    }

    update = (e: IEmployee) => {

        let body =  JSON.stringify(e);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/v1/Employee/' + this.username + '/Update', body, { headers: headers });
    }

    delete = (id: string) => {
        let body = JSON.stringify({ _id: id});
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/v1/Employee/Delete', body, {headers: headers});
    }

    checkUsernameExists = (username) => {
        let body = JSON.stringify({username: username});
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/v1/Employee/Exists', body, {headers: headers});
    }
}
