/// <reference path="../typings/tsd.d.ts" />

import mongodb = require('mongodb');

export class EmployeeModel {
    private server: mongodb.Server;
    private client: mongodb.Db;

    constructor() {
        let dbname: string = 'logistics';
        let host: string = 'localhost';
        let port: number = 27017;

        this.server = new mongodb.Server(host, port, { auto_reconnect: true });
        this.client = new mongodb.Db(dbname, this.server);
        this.client.open((err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    public CheckExists = (username: string, callback: (err?: Error, exists?: boolean) => void) => {
        this.client.collection('employees', (error: Error, docs: mongodb.Collection) => {
            if (error) { console.error(error); callback(error); }

            docs.find({username: username}, { limit: 1 }).toArray((err: Error, docs: any) => {
                if (error) { console.error(error); callback(err); }
                callback(null, docs.length > 0);
            });
        });
    }

    public All = (callback: (err?: Error, docs?: mongodb.Collection[]) => void) => {
        this.client.collection('employees', (error: Error, docs: mongodb.Collection) => {
            if (error) { console.error(error); callback(error); }

            docs.find({}, { limit: 100 }).toArray((err: Error, docs: any) => {
                if (error) { console.error(error); callback(err); }
                callback(null, docs);
            });
        });
    }
    
    public Get = (username: string, callback: (err?: Error, doc?: mongodb.Collection) => void) => {
        this.client.collection('employees', (error: Error, docs: mongodb.Collection) => {
            if (error) { console.error(error); callback(error); }

            docs.find({username: username }, {}).toArray((err: Error, results: any) => {
                if (error) { console.error(error); callback(err); }
                if(results.length === 1) {
                    callback(null, results[0]);
                } else {
                    let e = new Error("Too many employees");
                    this.LogError(e);
                    callback(e);
                }
            });
        });
    }
    
    public Update = (username: string, employee: any, callback: (err?: Error, success?: boolean) => void) => {
        this.client.collection('employees', (error: Error, doc: mongodb.Collection) => {
           if(error) {
               this.LogError(error);
               callback(error);
            } 
            
            let updateEmployee = employee;
            updateEmployee._id = new mongodb.ObjectID(employee._id);
            
            doc.save(updateEmployee, (err: Error, result: any) => {
                if(err) {
                    this.LogError(err);
                    callback(err);
                }
                callback(null, true);
            });
            
        });
    }
    
    public Create = (employee: any, callback: (err? :Error, doc?: any) => void) => {
        this.client.collection('employees', (error: Error, doc: mongodb.Collection) => {
            if(error) {
                this.LogError(error);
                callback(error);
            }
            
            doc.insert(employee, (err, result: any) => {
                if(err) {
                    this.LogError(err);
                    callback(err);
                }
                callback(null, result);
            }); 
        });
    }
    
    public Delete = (id, callback: (err?: Error, success?: boolean) => void) => {
        this.client.collection('employees', (error: Error, doc: mongodb.Collection) => {
            if(error) {
                this.LogError(error);
                callback(error);
            }
            
            doc.remove({_id: new mongodb.ObjectID(id)}, (err: Error, results: any) => {
                if(err) {
                    this.LogError(err);
                    callback(err);
                }
                callback(null, results);
            });
        });
    }
    
    private LogError = (err: Error) => {
        console.log(err);
    }

}