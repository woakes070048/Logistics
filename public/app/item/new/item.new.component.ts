
import {Inject, Component, OnInit} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams, Location} from 'angular2/router';

import {IItem} from '../../interfaces/IItem';
import {Item} from '../../classes/Item';

@Component({
    selector: 'new-item',
    directives: [],
    inputs: [],
    templateUrl: './app/public/item/_item.html'
})

export class ItemNewComponent implements OnInit {
    
	private item: IItem = { name: '', description: ''};
	private itemService: Item;

    constructor(@Inject(Http) private http: Http, @Inject(Router) private router: Router) {}

    save(item: IItem) {
		this.itemService.create(item).subscribe(
			data => this.createCallback(data.json()),
			err => this.logError(err)
		);
    }

    createCallback = (data) => {
    	if(data.success) {
			this.router.parent.navigate(['/Items']);
    	}
    }

    logError = (err) => {
		console.log(err);
    }

    ngOnInit() {
		this.itemService = new Item(this.http);
    }

}