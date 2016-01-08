import {Component, OnInit, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';

import {STATIC} from '../../classes/Static';
import {Employee} from '../../classes/Employee';
import {IEmployee} from '../../interfaces/IEmployee';

@Component({
    selector: 'employees-component',
    directives: [],
    inputs: ['employee'],
    templateUrl: './app/employee/list/employee.list.component.html'
})


export class EmployeeListComponent implements OnInit {
    
    private employeeList: Array<IEmployee>;
    private employeeService: Employee;
    
    constructor(@Inject(Http) private http: Http){
        
    }
    
    delete = (evt, e) => {
        evt.preventDefault();
        this.employeeService.delete(e._id).subscribe(
            (data) => this.deleteSuccessCallback(data.json()),
            (err) => this.errorCallback(err)
        );
    }
    
    deleteSuccessCallback = (data) => {
        if(data.success) {
            this.getEmployeeList();
        }
    }
    
    errorCallback = (err) => {
        console.log(err);
    }
    
    getEmployeeListCallback = (data) => {
        this.employeeList = data.json();
    }
    
    getEmployeeList = () => {
        //this.employeeList = new Array<IEmployee>();
        this.employeeService.list().subscribe(
            (data) => this.getEmployeeListCallback(data),
            (err) => this.errorCallback(err)
        );
    }
    
    ngOnInit() {
        this.employeeService = new Employee(this.http);
        this.getEmployeeList();
    }
}