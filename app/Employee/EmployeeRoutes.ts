/// <reference path="../../typings/tsd.d.ts" />

import express = require('express');
import employeeModel = require('./EmployeeModel');
import departmentModel = require('../Department/DepartmentModel');
import mongodb = require('mongodb');
let request = require('request');

export class EmployeeRoutes {
    
    private employee = new employeeModel();
    private config = require('../../private/config.json');

    constructor(private app: express.Application) {

        app.get('/api/v1/Employees', (req: express.Request, res: express.Response) => {
            this.employee.All((err: Error, data: mongodb.Collection[]) => {
                if (err) { res.send({ err: err }); }
                res.send(data);
            });
        });
        app.get('/api/v1/Employee/:username', (req: express.Request, res: express.Response) => {
            this.employee.Get(req.params.username, (err: Error, data: mongodb.Collection) => {
                if (err) { res.send({ err: err }); }
                res.send(data);
            });
        });
        app.post('/api/v1/Employee/:username/Update', (req: express.Request, res: express.Response) => {
            let username = req.params.username;
            this.employee.Update(username, req.body, (err: Error, success: boolean) => {
                if (err) res.send({ err: err });
                res.send({ success: success }); //might want to send back the document
            });

        });

        app.post('/api/v1/Employee', (req: express.Request, res: express.Response) => {
            this.employee.Create(req.body, (err: Error, data: any) => {
                if (err) res.send({ err: err });
                res.send({ success: true, data: data });
            })
        });

        app.post('/api/v1/Employee/Delete', (req: express.Request, res: express.Response) => {
            this.employee.Delete(req.body._id, (err: Error, data: any) => {
                if (err) res.send({ err: err });
                res.send({ success: true, data: data });
            })
        });

        app.post('/api/v1/Employee/Exists', (req: express.Request, res: express.Response) => {
            this.employee.CheckExists(req.body.username, (err: Error, data: boolean) => {
                if (err) res.send({ exists: true });
                res.send({ exists: data });
            });
        });

        app.get('/api/v1/States', (req: express.Request, res: express.Response) => {
            let url = this.config.openStates.baseUrl + '/metadata/?apikey=' + this.config.openStates.apiKey
            request(url, (err: Error, response: any, html: any) => {
                res.send(html);
            })
        });
    }
}