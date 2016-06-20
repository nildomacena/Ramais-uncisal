import { Component, OnInit } from '@angular/core';
import {RamaisMasterComponent} from './ramais-master/ramais-master.component'
import {LoginComponent} from './login/login.component'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html',
  directives: [RamaisMasterComponent, ROUTER_DIRECTIVES],
  providers:[ROUTER_PROVIDERS]
})

@RouteConfig([
{path:'/ramais', name:'Ramais', component:RamaisMasterComponent, useAsDefault: true},
{path:'/login', name:'Login', component:LoginComponent}
])

export class AppComponent{
	
}