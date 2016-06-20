"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ramal_service_1 = require('../data/ramal.service');
require('rxjs/add/operator/toPromise');
var search_pipe_1 = require('../pipes/search.pipe');
var RamaisMasterComponent = (function () {
    function RamaisMasterComponent(_ramalService) {
        this._ramalService = _ramalService;
    }
    RamaisMasterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ramalService.getRamais()
            .subscribe(function (ramais) { return _this.ramais = ramais; });
    };
    RamaisMasterComponent.prototype.consoleRamais = function (ramal) {
        alert(JSON.stringify(ramal));
    };
    RamaisMasterComponent = __decorate([
        core_1.Component({
            selector: 'ramais-master',
            pipes: [search_pipe_1.SearchPipe],
            templateUrl: 'app/ramais-master/ramais-master.html',
            providers: [ramal_service_1.RamalService]
        }), 
        __metadata('design:paramtypes', [ramal_service_1.RamalService])
    ], RamaisMasterComponent);
    return RamaisMasterComponent;
}());
exports.RamaisMasterComponent = RamaisMasterComponent;
//# sourceMappingURL=ramais-master.component.js.map