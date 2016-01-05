import {Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {STATIC} from '../classes/STATIC';
import {IEmployee} from '../interfaces/IEmployee';

export class Employee {
    constructor(@Inject(Http) private http: Http) {}
    
    list = (): Array<IEmployee> => {
        // this.http.get(STATIC.getEmployeesPath)
        //     .subscribe(
        //         data => {return data },
        //         err => {return err }
        //     );
    }
    
    DataCallback = (data) => {
        
    }
    
    ErrCallback = (err) => {
        
    }
    
}