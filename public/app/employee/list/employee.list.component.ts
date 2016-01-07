import {Component, OnInit, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {STATIC} from '../../classes/Static';
import {Employee} from '../../classes/Employee';
import {IEmployee} from '../../interfaces/IEmployee';

@Component({
    selector: 'employees-component',
    directives: [],
    templateUrl: './app/employee/list/employee.list.component.html'
})


export class EmployeeListComponent implements OnInit {
    
    private employeeList: Array<IEmployee>;
    constructor(@Inject(Http) private http: Http){
        
    }
    
    ngOnInit() {
        new Employee(this.http).list().subscribe((data) => this.employeeList = data.json());
    }
}