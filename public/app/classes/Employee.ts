import {Inject} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';

import {STATIC} from '../classes/STATIC';
import {IEmployee} from '../interfaces/IEmployee';

export class Employee {
    
    constructor(private http: Http, private employeeID?: number) { }
    
    list = (): any => {
        return this.http.get(STATIC.getEmployeesPath);
    }
    
    get = () => {
        return this.http.get('/api/v1/Employee/' + this.employeeID);
    }
    
    update = (e: IEmployee) => {
        
        let body = '_id=' + e._id + '&firstname=' + e.firstname + '&lastname=' + e.lastname + '&employeeID=' + e.employeeID;
        let headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post('/api/v1/Employee/' + this.employeeID + '/Update', body, { headers: headers });
    }
    
}