
import {Inject} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';

import {IDepartment} from '../interfaces/IDepartment';

export class Departments {
	constructor(private http: Http) {}

	list = () => {
		return this.http.get('/api/v1/Departments');
	}
    
    new = (department: IDepartment) => {
        let body = 'title=' + department.title;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return this.http.post('/api/v1/Department/New', body, {headers: headers});
    } 
    
    update = (department: IDepartment) => {
        let body = '_id=' + department._id + '&title=' + department.title;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return this.http.post('/api/v1/Department/Update', body, {headers: headers});
    }
    
    delete = (id: string) => {
        let body = '_id=' + id
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return this.http.post('/api/v1/Department/Delete', body, {headers: headers});
    }
}