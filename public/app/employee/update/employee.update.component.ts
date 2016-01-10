import {Component, OnInit, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams, Location} from 'angular2/router';

import {STATIC} from '../../classes/Static';
import {IEmployee} from '../../interfaces/IEmployee';
import {Employee} from '../../classes/Employee';

@Component({
    selector: 'update-employee',
    directives: [ROUTER_DIRECTIVES],
    inputs: ['employeeID'],
    templateUrl: './app/employee/_employee.html'
})


export class EmployeeUpdateComponent implements OnInit {

    private employee: IEmployee = {firstname: '', lastname: '', username: ''};
    private username: string;
    private employeeService: Employee;

    constructor(@Inject(Http) private http: Http, @Inject(RouteParams) private params: RouteParams, @Inject(Location) private location: Location, @Inject(Router) private router: Router) {}
    
    save = (e: IEmployee) => {
        this.employeeService.update(e)
            .subscribe(
            (data) => this.updateEmployeeCallback(data.json()),
            (err) => this.errorCallback(err)
            );
    }

    updateEmployeeCallback = (data) => {
        if (data.success) {
            //show success
            //route back to employees list
            //this.location.go('/Employees');
            this.router.parent.navigate(['/Employees']);
        }
    }

    errorCallback = (err) => {
        console.log(err);
    }

    ngOnInit() {
        this.username = this.params.get('username');
        this.employeeService = new Employee(this.http, this.username)
        this.employeeService.get().subscribe((data) => { this.employee = data.json() });

    }
}
