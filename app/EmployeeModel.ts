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
            if(err) {
                console.log(err);
            }
        });
    }
    
    All = (callback: (err?: Error, docs?: mongodb.Collection[]) => void) => {
        this.client.collection('employees', (error: Error, docs: mongodb.Collection) => {
         if (error) { console.error(error); callback(error); }
             
         docs.find({}, { limit: 100 }).toArray((err: Error, docs: any) => {
             if (error) { console.error(error); callback(err); }
             callback(null, docs);
         });
     });
    }
    
}