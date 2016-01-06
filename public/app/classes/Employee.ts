import {Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {STATIC} from '../classes/STATIC';
import {IEmployee} from '../interfaces/IEmployee';

export class Employee {
    
    constructor(@Inject(Http) private http: Http) {}
    
    list = (): any => {
        this.http.get(STATIC.getEmployeesPath)
            .subscribe(
                data => { this.DataCallback },
                err => {return err }
            );
    }
    
    DataCallback = (data: any) => {
        
    }
    
    ErrCallback = (err: any) => {
        
    }
    
}