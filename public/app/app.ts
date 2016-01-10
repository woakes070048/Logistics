import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
        LocationStrategy, HashLocationStrategy} from 'angular2/router';
        
import {LoginComponent} from './login/login.component';
import {aboutComponent} from './about/about.component';
import {defaultComponent} from './default/default.component';
import {EmployeeListComponent} from './employee/list/employee.list.component';
import {EmployeeUpdateComponent} from './employee/update/employee.update.component';
import {EmployeeNewComponent} from './employee/new/employee.new.component';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <a [routerLink]="['/Home']">Home</a>
        <a [routerLink]="['/About']">About</a>
        <a [routerLink]="['/Employees']">Employee List</a>
        <a [routerLink]="['/NewEmployee']">New Employee</a>
        <router-outlet></router-outlet>
    ` 
})

@RouteConfig([
    { path: '/Login', component: LoginComponent, as: 'Login'},
    { path: '/', component: defaultComponent, as: 'Home'},
    { path: '/About', component: aboutComponent, as: 'About' },
    { path: '/Employees', component: EmployeeListComponent, as: 'Employees'},
    { path: '/Employee', component: EmployeeNewComponent, as: 'NewEmployee'},
    { path: '/Employee/:username/Update', component: EmployeeUpdateComponent , as: 'Update Employee'}
])

export class boot {}

bootstrap(boot, [ROUTER_PROVIDERS, HTTP_PROVIDERS,
       provide(LocationStrategy, {useClass: HashLocationStrategy})]);