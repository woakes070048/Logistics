/// <reference path="./../ModelBase.ts" />
/// <reference path="../../typings/tsd.d.ts" />


import mongoose = require('mongoose');
import mongodb = require('mongodb');

class EmployeeModel {
    
    private Employee: mongoose.Model<mongoose.Document>;
    private employeeSchema = new mongoose.Schema({
        username: 'string',
        department: 'string',
        firstname: 'string',
        lastname: 'string',
        address1: 'string',
        address2: 'string',
        city: 'string',
        state: 'string',
        zip: 'string'
    });

    constructor() {
        this.Employee = mongoose.model('employees', this.employeeSchema);
    }

    public CheckExists = (username: string, callback: (err?: Error, exists?: boolean) => void) => {
        this.Employee.find({username: username}, (err: Error, docs: any) => {
            if(err) callback(err, true);
            callback(null, docs.length > 0);
        });
    }

    public All = (callback: (err?: Error, docs?: mongodb.Collection[]) => void) => {
        this.Employee.find((err: Error, docs: any) => {
            if(err) callback(err);
            callback(null, docs);
        });
    }

    public Get = (username: string, callback: (err?: Error, doc?: mongodb.Collection) => void) => {
        this.Employee.findOne({username: username}, (err: Error, docs: any) => {
            if(err) callback(err);
            callback(null, docs);
        });
    }

    public Update = (employee: any, callback: (err?: Error, success?: boolean) => void) => {
        this.Employee.update(employee, (err: Error, result: any) => {
            if(err) callback(err);
            callback(null, true);
        });
    }

    public Create = (employee: any, callback: (err? :Error, doc?: any) => void) => {
        let newEmployee = new this.Employee(employee);
        newEmployee.save((err: Error, res: any) => {
            if(err) callback(err);
            callback(null, res);
        });
    }

    public Delete = (id, callback: (err?: Error, success?: boolean) => void) => {
        this.Employee.remove({_id: new mongodb.ObjectID(id)}, (err: Error) => {
            if(err) callback(err);
            callback(null, true);
        });
    }

    private LogError = (err: Error) => {
        console.log(err);
    }
}

export = EmployeeModel;
