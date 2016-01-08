import {Component, OnInit, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams, Location} from 'angular2/router';

import {STATIC} from '../../classes/Static';
import {Employee} from '../../classes/Employee';
import {IEmployee} from '../../interfaces/IEmployee';

@Component({
    selector: 'new-employee',
    directives: [],
    inputs: ['employee'],
    templateUrl: './app/employee/new/employee.new.component.html'
})

export class EmployeeNewComponent implements OnInit {
    
    private employee: IEmployee;
    private employeeService: Employee;
    
    constructor(@Inject(Http) private http: Http, @Inject(Router) private router: Router) {
        this.employee = {
            firstname: '',
            lastname: '',
            employeeID: 0
        }
    }
    
    save = (e: IEmployee) => {
        this.employeeService.create(e).subscribe(
            (data) => this.newEmployeeDataCallback(data.json()),
             (err) => this.errorCallback(err)
        );
    }
    
    errorCallback = (e) => {
        console.log(e);
    }
    
    newEmployeeDataCallback = (data) => {
        if(data.success) {
            this.router.parent.navigate(['/Employees']);
        }
    }
    
    ngOnInit() {
        this.employeeService = new Employee(this.http);
    }
}