import {Injectable} from '@angular/core'
import {RAMAIS} from './ramais-mock'
import {Ramal} from './ramal'
import {Http, HTTP_PROVIDERS} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch';

@Injectable()
export class RamalService{
	ramais: Ramal[] = RAMAIS;
	serverUrl:string = 'https://api.mlab.com/api/1/databases/ramais/collections/ramal/?apiKey=';
	apiKey = "kWa5UGWVKvu4IbrhDwAHAphhEknxFETu"

	constructor(private _http:Http){ }

	getRamais(){
		return this._http.get(this.serverUrl+this.apiKey)
			.map(data => data.json());
			
	}
	private handleError(error:any){
		console.log('An error occurred ',error);
		return Promise.reject(error.message || error);
	}
}