/// <reference path="../typings/tsd.d.ts" />

import express = require('express');
import employeeModel = require('./EmployeeModel');
import departmentModel = require('./DepartmentModel');
import mongodb = require('mongodb');
import base = require('./ModelBase');
let request = require('request');

export class DepartmentRoutes {
    
    private department = new departmentModel();
    
    constructor(app: express.Application) {
        app.get('/api/v1/Departments', (req: express.Request, res: express.Response) => {
            this.department.getDepartments((err: Error, results: any) => {
                if(err) res.send([]);
                res.send(results);
            });
        });
        app.post('/api/v1/Department/New', (req: express.Request, res: express.Response) => {
            this.department.createDepartment(req.body, (err?: Error, result?: boolean) => {
                if(err) res.send({success: false});
                res.send({success: result});
            });
        });
        
        app.post('/api/v1/Department/Update', (req: express.Request, res: express.Response) => {
            this.department.updateDepartment(req.body, (err?: Error, result?: boolean) => {
                if(err) res.send({success: false});
                res.send({success: result});
            });
        });
        
        app.post('/api/v1/Department/Delete', (req: express.Request, res: express.Response) => {
            this.department.deleteDepartment(req.body._id, (err?: Error, result?: boolean) => {
                if(err) res.send({success: false});
                res.send({success: result});
            });
        });
    }
}