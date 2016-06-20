import {Component} from '@angular/core'

@Component({
	selector:'my-login',
	templateUrl:'app/login/login.html'
})

export class LoginComponent{
	return(){
		window.history.back();
	}
}