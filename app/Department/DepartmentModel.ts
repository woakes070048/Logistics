/// <reference path="../ModelBase.ts" />
/// <reference path="../../typings/tsd.d.ts" />

import mongoose = require('mongoose');
import mongodb = require('mongodb');

class DepartmentModel {
    
    private Department: mongoose.Model<mongoose.Document>;
    private departmentSchema = new mongoose.Schema({
        title: 'string'
    });
    constructor() {
        this.Department = mongoose.model('departments', this.departmentSchema);
    }
    
    getDepartments = (callback: (err?: Error, results?: mongodb.Collection[]) => void) => {
        this.Department.find((err: Error, results: any)=>{
            if(err) {
                this.logError(err);
                callback(err);
            }
            callback(null, results);
            
        });
    }
    
    getDepartment = (department, callback: (err?: Error, result?: mongodb.Collection) => void) => {
        this.Department.findOne({_id: new mongodb.ObjectID(department._id)}, (err: Error, result: any) => {
            if(err) {
                this.logError(err);
                callback(err);
            }
            callback(null, result);
        });
    }
    
    createDepartment = (department: any, callback: (err?: Error, result?: boolean) => void) => {
        let newDepartment = new this.Department(department);
        newDepartment.save((err: Error, result: any) => {
           if(err) {
               this.logError(err);
               callback(err, false);
           } 
           callback(null, true);
        });
    }
    
    updateDepartment = (department, callback: (err?: Error, result?: boolean) => void) => {
        this.Department.update(department, (err: Error, result: any) => {
            if(err) {
                this.logError(err);
                callback(err, false);
            }
            callback(null, true);
        });
    }
    
    deleteDepartment = (id, callback: (err?: Error, result?: boolean) => void) => {
        this.Department.remove({_id: new mongodb.ObjectID(id)}, (err: Error) => {
            if(err) {
                this.logError
                callback(err, false);
            }
            callback(null, true);
        });
    } 
    
    logError = (err: Error) => {
        console.log(err);
    }
}

export = DepartmentModel