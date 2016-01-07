import {Component, OnInit, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from 'angular2/router';

import {STATIC} from '../../classes/Static';
import {IEmployee} from '../../interfaces/IEmployee';
import {Employee} from '../../classes/Employee';

@Component({
    selector: 'update-employee',
    directives: [],
    inputs: ['employeeID'],
    templateUrl: './app/employee/update/employee.update.component.html'
})


export class EmployeeUpdateComponent implements OnInit {

    private employee: IEmployee;
    private employeeID: number;
    private employeeService: Employee;

    constructor( @Inject(Http) private http: Http, @Inject(RouteParams) private params: RouteParams) { }

    updateEmployee = (e: IEmployee) => {
        this.employeeService.update(e).subscribe((data) => this.employeeUpdateCallback(data));
    }

    employeeUpdateCallback = (data) => {
        if (data.success) {
            //show success msg
        }
    }

    ngOnInit() {
        let _employeeID = parseInt(this.params.get('employeeID'));
        if (!isNaN(_employeeID)) {
            this.employeeID = _employeeID;
        }

        this.employeeService = new Employee(this.http, this.employeeID)
        this.employeeService.get().subscribe((data) => { this.employee = data.json() });

    }
}
