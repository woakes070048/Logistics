import {OnInit} from 'angular2/core';
import {Http, Headers} from 'angular2/http';

import {IItem} from '../interfaces/IItem';

export class Item implements OnInit {

	private headers: Headers = new Headers();

	constructor(private http: Http) { }

	all = () => {
		return this.http.get('/api/v1/Items');
	}

	one = (id: string) => {
		return this.http.get('/api/v1/Item/' + id);
	}

	create = (item: IItem) => {
		let body = '&name=' + item.name +
			'&description=' + item.description +
			'$cost=' + item.cost
		return this.http.post('/api/v1/Item/New', body, { headers: this.headers});	
	}

	update = (item: IItem) => {
		let body = '_id=' + item._id +
			'&name=' + item.name +
			'&description=' + item.description +
			'$cost=' + item.cost
		return this.http.post('/api/v1/UpdateItem', body, { headers: this.headers});
	}

	delete = (id: string) => {
		let body = '_id=' + id;
		return this.http.post('/api/v1/Item/Delete', body, { headers: this.headers});
	}

	ngOnInit() {
		this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
	}

}