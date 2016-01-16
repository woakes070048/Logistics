import {Component, OnInit, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams, Location} from 'angular2/router';

import {STATIC} from '../../classes/Static';
import {IEmployee} from '../../interfaces/IEmployee';
import {Employee} from '../../classes/Employee';
import {Departments} from '../../classes/departments';

@Component({
    selector: 'update-employee',
    directives: [ROUTER_DIRECTIVES],
    inputs: [],
    templateUrl: './app/employee/_employee.html'
})


export class EmployeeUpdateComponent implements OnInit {

    private employee: IEmployee = {firstname: '', lastname: '', username: ''};
    private stateList: any[] = [];
    private username: string;
    private employeeService: Employee;
    private departmentService: Departments;
    private departments;
    public firstnameValid = true;
    public lastnameValid = true;

    constructor(@Inject(Http) private http: Http, 
                @Inject(RouteParams) private params: RouteParams, 
                @Inject(Location) private location: Location, 
                @Inject(Router) private router: Router) {}
    
    save = (e: IEmployee) => {
        if(this.checkFormValid()) {
            this.employeeService.update(e)
                .subscribe(
                (data) => this.updateEmployeeCallback(data.json()),
                (err) => this.errorCallback(err)
            );
        }
    }

    updateEmployeeCallback = (data) => {
        if (data.success) {
            //show success
            //route back to employees list
            //this.location.go('/Employees');
            this.router.navigate(['Employees']);
        }
    }

    checkInputValid = (input, value) => {
        if(value.length > 0) {
            this[input + 'Valid'] = true;
        } else {
            this[input + 'Valid'] = false;
        }
    }

    checkFormValid = () => {
        
        this.firstnameValid = this.employee.firstname.length > 0;
        this.lastnameValid = this.employee.lastname.length > 0;
        
        return this.firstnameValid && this.lastnameValid;
    }

    statelistCallback = (data) => {
        this.stateList = JSON.parse(data.body);
    }

    getEmployeeCallback = (data) => {
        this.employee = data;
    }

    getDepartmentsCallback = (data) => {
        this.departments = data;
    }

    errorCallback = (err) => {
        console.log(err);
    }

    ngOnInit() {
        this.username = this.params.get('username');
        this.employeeService = new Employee(this.http, this.username)
        this.employeeService.get().subscribe(
            (data) => this.getEmployeeCallback(data.json()),
            (err) => this.errorCallback(err)
        );
        
        this.http.get('/api/v1/States').subscribe(
            (data) => this.statelistCallback(data.json()),
            (err) => this.errorCallback(err)
        );
        
        this.departmentService = new Departments(this.http);
        this.departmentService.list().subscribe(
            (data) => this.getDepartmentsCallback(data.json()),
            (err) => this.errorCallback(err)
        );

    }
}
