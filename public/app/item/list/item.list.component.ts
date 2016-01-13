import {Inject, Component, OnInit} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';

import {IItem} from '../../interfaces/IItem';
import {Item} from '../../classes/Item';

@Component({
	selector: 'items',
	directives: [],
	inputs: [],
	templateUrl: './app/item/list/item.list.component.html'
})

export class ItemListComponent implements OnInit {

	private itemService: Item;
	private items: Array<IItem>;
	
	constructor(@Inject(Http) private http: Http) {}

	

	delete = (evt, itemID) => {
		evt.preventDefault();
		this.itemService.deleteItem(itemID).subscribe(
			data => this.deleteCallback(data.json()),
			err => this.logError(err)
		);
	}

	deleteCallback = (data) => {
		if(data.success) {
			this.getItems();
		}
	}

	getItems = () => {
		this.itemService.all().subscribe(
			data => this.getItemsCallback(data.json()),
			err => this.logError(err)
		);
	}

	getItemsCallback = (data) => {
		this.items = data;
	}

	logError = (err) => {
		console.log(err);
	}

	ngOnInit() {
		this.itemService = new Item(this.http);
		this.getItems();
	}
}