/// <reference path="./../ModelBase.ts" />
/// <reference path="../../typings/tsd.d.ts" />


import mongoose = require('mongoose');
import mongodb = require('mongodb');

class ItemModel {

	private Item: mongoose.Model<mongoose.Document>;
    private itemSchema = new mongoose.Schema({
        name: 'string',
        description: 'string',
        cost: 'string'
    });

    constructor() {
		this.Item = mongoose.model('item', this.itemSchema);
    }

    All = (callback: (err?: Error, results?: mongodb.Collection[]) => void) => {
		this.Item.find((err: Error, results: any) => {
			if (err) {
				console.log(err);
				callback(err);
			}
			callback(null, results);
		});
    }

    One = (id: string, callback: (err?: Error, results?: mongodb.Collection) => void) => {
		this.Item.findOne({ _id: new mongodb.ObjectID(id) }, (err: Error, results: any) => { 
			if(err) {
				console.log(err);
				callback(err);
			}
			callback(null, results);
		});
    }

    CreateItem = (item: any, callback: (err?: Error, results?: boolean) => void) => {
		let newItem = new this.Item(item);
		newItem.save((err: Error, results) => { 
			if(err) {
				console.log(err);
				callback(err, false);
			}
			callback(null, true);
		});
    }

    Update = (item: any, callback: (err?: Error, results?: boolean) => void) => {
		this.Item.update(item, (err: Error, results: any) => { 
			if(err) {
				console.log(err);
				callback(err, false);
			}
			callback(null, true);
		});
    }

    Delete = (id: string, callback: (err?: Error, results?: boolean) => void) => {
    	this.Item.remove({_id: new mongodb.ObjectID(id)}, (err: Error) => {
    		if(err) {
				console.log(err);
				callback(err, false);
    		}
			callback(null, true);
    	});
    }
}

export = ItemModel;