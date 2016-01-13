import {bootstrap} from 'angular2/platform/browser';
import {Component, provide, Inject} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS,LocationStrategy, HashLocationStrategy} from 'angular2/router';
        
import {aboutComponent} from './about/about.component';
import {defaultComponent} from './default/default.component';
import {EmployeeListComponent} from './employee/list/employee.list.component';
import {EmployeeUpdateComponent} from './employee/update/employee.update.component';
import {EmployeeNewComponent} from './employee/new/employee.new.component';
import {DepartmentsComponent} from './admin/departments/departments.component';
import {ItemListComponent} from './item/list/item.list.component';
import {ItemNewComponent} from './item/new/item.new.component';
import {ItemUpdateComponent} from './item/update/item.update.component';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './app/app.html'
})

@RouteConfig([
    { path: '/', component: defaultComponent, as: 'Home'},
    { path: '/About', component: aboutComponent, as: 'About' },
    { path: '/Employees', component: EmployeeListComponent, as: 'Employees'},
    { path: '/Employee', component: EmployeeNewComponent, as: 'NewEmployee'},
    { path: '/Employee/:username/Update', component: EmployeeUpdateComponent , as: 'Update Employee'},
    { path: '/Admin/Departments', component: DepartmentsComponent, as: 'Admin_Departments' },
    { path: '/Items', component: ItemListComponent, as: 'Item_List'},
    { path: '/Item', component: ItemNewComponent, as: 'Item_New' },
    { path: '/Item/:itemID', component: ItemUpdateComponent, as: 'Item_Update'}
])

export class app {
    private isActive: string;
    constructor(@Inject(Router) private router: Router) {
        this.isActive = this.router.lastNavigationAttempt;
        
    }
}

bootstrap(app, [ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);