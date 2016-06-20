import { Component, OnInit } from '@angular/core';
import {RamalService} from '../data/ramal.service';
import {Ramal} from '../data/ramal';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {SearchPipe} from '../pipes/search.pipe';

@Component({
  selector: 'ramais-master',
  pipes: [SearchPipe],
  templateUrl: 'app/ramais-master/ramais-master.html',
  providers:[RamalService]
})


export class RamaisMasterComponent implements OnInit{
	ramais: Ramal[];
	constructor(private _ramalService:RamalService){}

	ngOnInit(){
		this._ramalService.getRamais()
			.subscribe(ramais => this.ramais = ramais);
	}

	consoleRamais(ramal){
		alert(JSON.stringify(ramal));
	}
}