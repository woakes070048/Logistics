import {Inject, Component, OnInit} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';

import {Departments} from '../../classes/Departments';
import {IDepartment} from '../../interfaces/IDepartment';

@Component({
	selector: 'departments',
	inputs: [],
	directives: [],
	templateUrl: './app/admin/departments/departments.component.html'

})

export class DepartmentsComponent implements OnInit {
	
    private department: IDepartment = { title: ''};
    private departments: any = [];
    private departmentService: Departments;
    
	constructor(@Inject(Http) private http: Http) { }

    getDepartments = () => {
        this.departmentService.list().subscribe(
            (data) => this.getDepartmentsCallback(data.json()),
            (err) => this.errorCallback(err)
        );
    }
    
    new = (department: IDepartment) => {
        this.departmentService.new(department).subscribe(
            (data) => this.departmentCallback(data.json()),
            (err) => this.errorCallback(err)
        );
    }
    
    update = (department: IDepartment) => {
        this.departmentService.update(department).subscribe(
            (data) => this.departmentCallback(data.json()),
            (err) => this.errorCallback(err)
        )
    }
    
    delete = (id: string) => {
        this.departmentService.delete(id).subscribe(
            (data) => this.departmentCallback(data.json()),
            (err) => this.errorCallback(err)
        );
    }
    
    departmentCallback = (data) => {
        if(data.success) {
            this.department = {title: ''};
            this.getDepartments();
        }
    }
    
    getDepartmentsCallback = (data) => {
        this.departments = data;    
    } 
    
    errorCallback = (err) => {
        console.log(err);
    }

	ngOnInit() {
        this.departmentService = new Departments(this.http);
		this.getDepartments();
	}

}