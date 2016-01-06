import {Component, OnInit, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {STATIC} from '../classes/Static';
import {IEmployee} from '../interfaces/IEmployee';

@Component({
    selector: 'employees-component',
    directives: [],
    templateUrl: './app/employee/employees.component.html'
})

export class EmployeesComponent implements OnInit {
    
    private employeeList: Array<IEmployee>;
    constructor(@Inject(Http) private http: Http){
        
    }
    
    getEmployees()  { 
        this.http.get(STATIC.getEmployeesPath)
            .subscribe(  
                data => { this.GetEmployeesCallback(data) },
                err => {return err }
            );
    }
    
    ngOnInit() {
        this.getEmployees();
    }
    
    GetEmployeesCallback(res: any) {
        this.employeeList = JSON.parse(res._body);
        console.log(this.employeeList);
    }
}