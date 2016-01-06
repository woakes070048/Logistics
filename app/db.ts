/// <reference path="../typings/tsd.d.ts" />

import _MongoClient = require('mongodb');

export class db {

    private MongoClient = _MongoClient.MongoClient;
    private _db: _MongoClient.Db;

    constructor() {
        this.MongoClient.connect("mongodb://localhost:27017/logistics", function(err: any, db: any) {
          if(err) {
            this.logError(err);
          }

          this._db = db;
        });
    }

    getAllEmployees = (): _MongoClient.Collection[] => {
        var ret: _MongoClient.Collection[];
        
        this._db.collection('employees').find({}).toArray(function(err: any, docs: _MongoClient.Collection[]){
            ret = docs;
            db.close();
        });
        
        return ret;
    }

    logError = (err, db) => {
      console.log(err);
    }
}
