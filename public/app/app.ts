import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
        LocationStrategy, HashLocationStrategy} from 'angular2/router';
        
import {LoginComponent} from './login/login.component';
import {aboutComponent} from './about/about.component';
import {defaultComponent} from './default/default.component';
import {EmployeesComponent} from './employee/employees.component';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <a [routerLink]="['/Home']">Home</a>
        <a [routerLink]="['/About']">About</a>
        <router-outlet></router-outlet>
    ` 
})

@RouteConfig([
    { path: '/Login', component: LoginComponent, as: 'Login'},
    { path: '/', component: defaultComponent, as: 'Home'},
    { path: '/About', component: aboutComponent, as: 'About' },
    { path: '/Employees', component: EmployeesComponent, as: 'Employees'}
])

export class boot {}

bootstrap(boot, [ROUTER_PROVIDERS, HTTP_PROVIDERS,
       provide(LocationStrategy, {useClass: HashLocationStrategy})]);