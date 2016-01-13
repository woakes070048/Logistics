// <reference path="../../typings/tsd.d.ts" />

import express = require('express');
import itemModel = require('./ItemModel');
import mongodb = require('mongodb');

export class ItemRoutes {

	private item = new itemModel();

	constructor(app: express.Application) {
		app.get('/api/v1/Items', (req: express.Request, res: express.Response) => { 
			this.item.All((err: Error, results: any[]) => { 
				if(err) res.send({ success: false });
				res.send(results);
			});
		});

		app.get('/api/v1/Item/:itemID', (req: express.Request, res: express.Response) => { 
			this.item.One(req.params.itemID, (err: Error, results: any) => { 
				if (err) res.send({ success: false});
				res.send(results);
			});
		});

		app.post('/api/v1/Item/New', (req: express.Request, res: express.Response) => { 
			console.log(req.body);
			this.item.CreateItem(req.body, (err: Error, results: boolean) => { 
				res.send({ success: results});
			});
		});

		app.post('/api/v1/Item/Update', (req: express.Request, res: express.Response) => { 
			this.item.Update(req.body, (err: Error, results: boolean) => { 
				res.send({ success: results});
			});
		});

		app.post('/api/v1/Item/Delete', (req: express.Request, res: express.Response) => { 
			console.log(req.body);
			this.item.Delete(req.body._id, (err: Error, results: boolean) => { 
				res.send({ success: results});
			});
		});
	}

}