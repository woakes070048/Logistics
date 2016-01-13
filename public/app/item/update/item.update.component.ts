import {Component, OnInit, Inject} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams, Location} from 'angular2/router';

import {IItem} from '../../interfaces/IItem';
import {Item} from '../../classes/Item';

@Component({
	selector: 'update-item',
	directives: [ROUTER_DIRECTIVES],
	templateUrl: './app/item/_item.html'
})

export class ItemUpdateComponent implements OnInit {

	private itemService: Item;
	private itemID: string;
	private item: IItem = { name: '', description: '', cost: 0 };

	constructor( @Inject(Http) private http: Http,
		@Inject(RouteParams) private params: RouteParams,
		@Inject(Location) private location: Location,
		@Inject(Router) private router: Router) { }

	getItem = () => {
		this.itemService.one(this.itemID).subscribe(
			data => this.getItemCallback(data.json()),
			err => this.logError(err)
		);
	}

	save = (item: IItem) => {
		this.itemService.update(item).subscribe(
			data => this.saveCallback(data.json()),
			err => this.logError(err)
		);
	}

	saveCallback = (data) => {
		if(data.success) {
			this.router.parent.navigate(['Item_List']);
		}
	}

	getItemCallback = (data) => {
		this.item = data;
	}

	logError = (err) => {
		console.log(err);
	}

	ngOnInit() {
		this.itemID = this.params.get('itemID');
		this.itemService = new Item(this.http);
		this.getItem();
	}
}