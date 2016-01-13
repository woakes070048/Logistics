import {OnInit} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

import {IItem} from '../interfaces/IItem';

export class Item implements OnInit {

	constructor(private http: Http) { }

	all = () => {
		return this.http.get('/api/v1/Items');
	}

	one = (id: string) => {
		return this.http.get('/api/v1/Item/' + id);
	}

	create = (item: IItem) => {
		let body = 'name=' + item.name +
			'&description=' + item.description +
			'&cost=' + item.cost;
		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.post('/api/v1/Item/New', body, { headers: headers});	
	}

	update = (item: IItem) => {
		let body = '_id=' + item._id +
			'&name=' + item.name +
			'&description=' + item.description +
			'&cost=' + item.cost;
		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.post('/api/v1/Item/Update', body, { headers: headers});
	}

	deleteItem = (itemID: string) => {
		let body = '_id=' + itemID;
		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');
		return this.http.post('/api/v1/Item/Delete', body, { headers: headers});
	}

	ngOnInit() { }

}