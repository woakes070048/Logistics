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
    templateUrl: './app/employee/_employee.html'
})

export class EmployeeNewComponent implements OnInit {

    private employee: IEmployee = { firstname: '', lastname: '', username: '' };
    private employeeService: Employee;
    public usernameTaken = false;
    public firstnameValid = true;
    public lastnameValid = true;
    public usernameValid = true;

    constructor( @Inject(Http) private http: Http, @Inject(Router) private router: Router) { }

    save = (e: IEmployee) => {
        if (this.checkFormValid()) {
            this.employeeService.create(e).subscribe(
                (data) => this.newEmployeeDataCallback(data.json()),
                (err) => this.errorCallback(err)
            );
        }
    }

    checkInputValid = (input, value) => {
        if (value.length > 0) {
            this[input + 'Valid'] = true;
        } else {
            this[input + 'Valid'] = false;
        }
    }

    checkFormValid = () => {

        this.firstnameValid = this.employee.firstname.length > 0;
        this.lastnameValid = this.employee.lastname.length > 0;
        this.usernameValid = this.employee.username.length > 0;

        return this.firstnameValid && this.lastnameValid && this.usernameValid;
    }

    checkUsernameExists = (username) => {
        if (username.length > 0) {
            this.employeeService.checkUsernameExists(username).subscribe(
                (data) => this.checkUsernameCallback(data.json()),
                (err) => this.errorCallback(err)
            );
        }
        
        this.checkInputValid('username', this.employee.username);
    }

    checkUsernameCallback = (data) => {
        console.log(data);
        if (data.exists) {
            this.usernameTaken = true;
        } else {
            this.usernameTaken = false;
        }
    }

    newEmployeeDataCallback = (data) => {
        if (data.success) {
            this.router.parent.navigate(['/Employees']);
        }
    }

    errorCallback = (e) => {
        console.log(e);
    }

    ngOnInit() {
        this.employeeService = new Employee(this.http);
    }
}