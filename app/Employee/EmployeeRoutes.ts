/// <reference path="../../typings/tsd.d.ts" />

import restify = require('restify');
import employeeModel = require('./EmployeeModel');
import departmentModel = require('../Department/DepartmentModel');
import mongodb = require('mongodb');
let request = require('request');

export class EmployeeRoutes {
    
    private employee = new employeeModel();
    private config = require('../../private/config.json');

    constructor(private app: restify.Server) {
        app.get('/api/v1/Employees', (req: restify.Request, res: restify.Response) => {
            this.employee.All((err: Error, data: mongodb.Collection[]) => {
                if (err) { res.send({ err: err }); }
                res.send(data);
            });
        });
        app.get('/api/v1/Employee/:username', (req: restify.Request, res: restify.Response) => {
            this.employee.Get(req.params.username, (err: Error, data: mongodb.Collection) => {
                if (err) { res.send({ err: err }); }
                res.send(data);
            });
        });
        app.post('/api/v1/Employee/:username/Update', (req: restify.Request, res: restify.Response) => {
            
            this.employee.Update(req.body, (err: Error, success: boolean) => {
                if (err) res.send({ err: err });
                res.send({ success: success }); //might want to send back the document
            });

        });

        app.post('/api/v1/Employee', (req: restify.Request, res: restify.Response) => {
            this.employee.Create(req.body, (err: Error, data: any) => {
                if (err) res.send({ err: err });
                res.send({ success: true, data: data });
            })
        });

        app.post('/api/v1/Employee/Delete', (req: restify.Request, res: restify.Response) => {
            this.employee.Delete(req.body._id, (err: Error, data: any) => {
                if (err) res.send({ err: err });
                res.send({ success: true, data: data });
            })
        });

        app.post('/api/v1/Employee/Exists', (req: restify.Request, res: restify.Response) => {
            this.employee.CheckExists(req.body.username, (err: Error, data: boolean) => {
                if (err) res.send({ exists: true });
                res.send({ exists: data });
            });
        });

        app.get('/api/v1/States', (req: restify.Request, res: restify.Response) => {
            let url = this.config.openStates.baseUrl + '/metadata/?apikey=' + this.config.openStates.apiKey
            request(url, (err: Error, response: any, html: any) => {
                res.send(response);
            })
        });
    }
}