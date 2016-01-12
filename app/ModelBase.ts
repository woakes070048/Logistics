
/// <reference path="../typings/tsd.d.ts" />

import mongoose = require('mongoose');
import mongodb = require('mongodb');

class ModelBase {
    private db: mongoose.Connection;
    private _mongoose: mongoose.Mongoose;

    constructor() {
        this._mongoose = mongoose.connect('mongodb://localhost/logistics');
        this.db = this._mongoose.connection;
        this.db.on('error', console.error.bind(console, 'employee connection error:'));
    }
}

export = ModelBase;
