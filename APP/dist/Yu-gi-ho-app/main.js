(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/adminpage/adminpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/adminpage/adminpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".group{\r\n  background-color: #616D7E;\r\n}\r\n\r\n#cardintoenvelope{\r\n  margin-top: 10%;\r\n}\r\n\r\n#formchoice{\r\n  margin-top: 20px;\r\n}\r\n\r\n.pagetitle{\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5wYWdlL2FkbWlucGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJzcmMvYXBwL2FkbWlucGFnZS9hZG1pbnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncm91cHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2RDdFO1xyXG59XHJcblxyXG4jY2FyZGludG9lbnZlbG9wZXtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbiNmb3JtY2hvaWNle1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5wYWdldGl0bGV7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/adminpage/adminpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/adminpage/adminpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"group\">\n<div class=\"container\">\n  <div class=\"pagetitle\">\n    <h1 style=\"font-family: yu-gi-ho;\"> <font color=\"blue\">Pagina di amministrazione</font></h1>\n  </div>\n  <div class=\"form-row\">\n    <h2 id=\"formchoice\">Quale carta vuoi aggiungere?</h2>\n    <div id=\"formchoice\" class=\"form-group col-md-3\">\n      <select type=\"text\" class=\"form-control\" (click)=\"setcardtype($event.target.value)\">\n        <option selected>Seleziona un tipo</option>\n        <option value=\"MOSTRO\">MOSTRO</option>\n        <option value=\"MAGIA\">MAGIA</option>\n        <option value=\"TRAPPOLA\">TRAPPOLA</option>\n      </select>\n  </div>\n</div>\n\n<form *ngIf=\"tipocarta == 'MOSTRO' || tipocarta == 'MAGIA' || tipocarta == 'TRAPPOLA'\" [formGroup]=\"form_carte\" novalidate>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-3\">\n      <b><font color=\"white\">Codice</font></b>\n      <input formControlName=\"codice\" type=\"text\" class=\"form-control\" placeholder=\"codice\">\n      <app-field-error [field]=\"form_carte.controls.codice\" fieldName=\"codice\"></app-field-error>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <b><font color=\"white\">Nome</font></b>\n      <input formControlName=\"nome\" type=\"text\" class=\"form-control\" placeholder=\"nome\">\n      <app-field-error [field]=\"form_carte.controls.nome\" fieldName=\"nome\"></app-field-error>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <b><font color=\"white\">Attributo</font></b>\n      <select formControlName=\"attributo\" type=\"text\" class=\"form-control\" placeholder=\"attributo\">\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"DARK\">DARK</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"DIVINE\">DIVINE</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"EARTH\">EARTH</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"FIRE\">FIRE</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"LIGHT\">LIGHT</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"WATER\">WATER</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"WIND\">WIND</option>\n        <option *ngIf=\"tipocarta == 'MAGIA'\" value=\"SPELL\" selected>SPELL</option>\n        <option *ngIf=\"tipocarta == 'TRAPPOLA'\" value=\"TRAP\" selected>TRAP</option>\n      </select>\n      <app-field-error [field]=\"form_carte.controls.attributo\" fieldName=\"attributo\"></app-field-error>\n    </div>\n    <div *ngIf=\"tipocarta == 'MOSTRO'\" class=\"form-group col-md-3\">\n      <b><font color=\"white\">Livello</font></b>\n      <select formControlName=\"livello\" type=\"number\" class=\"form-control\" placeholder=\"livello\">\n        <option type=\"number\" value=\"1\" >1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option value=\"5\">5</option>\n        <option value=\"6\">6</option>\n        <option value=\"7\">7</option>\n        <option value=\"8\">8</option>\n        <option value=\"9\">9</option>\n        <option value=\"10\">10</option>\n        <option value=\"11\">11</option>\n        <option value=\"12\">12</option>\n      </select>\n      <app-field-error [field]=\"form_carte.controls.livello\" fieldName=\"livello\"></app-field-error>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <b><font color=\"white\">Numero</font></b>\n      <input formControlName=\"numero\" type=\"text\" class=\"form-control\" placeholder=\"numero\">\n      <app-field-error [field]=\"form_carte.controls.numero\" fieldName=\"numero\"></app-field-error>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <b><font color=\"white\">Descrizione</font></b>\n      <input formControlName=\"descrizione\" type=\"text\" class=\"form-control\" placeholder=\"descrizione\">\n      <app-field-error [field]=\"form_carte.controls.descrizione\" fieldName=\"descrizione\"></app-field-error>\n    </div>\n    <div *ngIf=\"tipocarta == 'MOSTRO'\" class=\"form-group col-md-3\">\n      <b><font color=\"white\">ATK</font></b>\n      <input formControlName=\"ATK\" type=\"number\" class=\"form-control\" placeholder=\"ATK\">\n      <app-field-error [field]=\"form_carte.controls.ATK\" fieldName=\"ATK\"></app-field-error>\n    </div>\n    <div *ngIf=\"tipocarta == 'MOSTRO'\" class=\"form-group col-md-3\">\n      <b><font color=\"white\">DEF</font></b>\n      <input formControlName=\"DEF\" type=\"number\" class=\"form-control\" placeholder=\"DEF\">\n      <app-field-error [field]=\"form_carte.controls.DEF\" fieldName=\"DEF\"></app-field-error>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <b><font color=\"white\">Tipo</font></b>\n      <select formControlName=\"tipo\" type=\"text\" class=\"form-control\" placeholder=\"tipo\" (click)=\"this.dati.inputtipo = $event.target.value\">\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Acqua/\" >Acqua</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Bestia/\">Bestia</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Guerriero-Bestia/\">Guerriero-Bestia</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Fata/\">Fata</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Macchina/\">Macchina</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Incantatore/\">Incantatore</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Serpente-Marino/\">Serpente-Marino</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Tuono/\">Tuono</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Insetto/\">Insetto</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Psichico/\">Psichico</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Zombie/\">Zombie</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Dinosauro/\">Dinosauro</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Bestia Alata/\">Bestia Alata</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Divinità-Bestia/\">Divinità-Bestia</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Pianta/\">Pianta</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Roccia/\">Roccia</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Guerriero/\">Guerriero</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Pesce/\">Pesce</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Rettile/\">Rettile</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Pyro/\">Pyro</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Drago/\">Drago</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Demone/\">Demone</option>\n        <option *ngIf=\"tipocarta == 'MOSTRO'\" value=\"Cyberverso/\">Cyberverso</option>\n        <option *ngIf=\"tipocarta == 'TRAPPOLA'\" value=\"Trappola_Normale\">Trappola Normale</option>\n        <option *ngIf=\"tipocarta == 'TRAPPOLA'\" value=\"Trappola_Continua\">Trappola Continua</option>\n        <option *ngIf=\"tipocarta == 'TRAPPOLA'\" value=\"Contro_Trappola\">Contro Trappola</option>\n        <option *ngIf=\"tipocarta == 'MAGIA'\" value=\"Magia_Normale\">Magia Normale</option>\n        <option *ngIf=\"tipocarta == 'MAGIA'\" value=\"Magia_Continua\">Magia Continua</option>\n        <option *ngIf=\"tipocarta == 'MAGIA'\" value=\"Magia_Rapida\">Magia Rapida</option>\n        <option *ngIf=\"tipocarta == 'MAGIA'\" value=\"Magia_Terreno\">Magia Terreno</option>\n        <option *ngIf=\"tipocarta == 'MAGIA'\" value=\"Magia_Rituale\">Magia Rituale</option>\n        <option *ngIf=\"tipocarta == 'MAGIA'\" value=\"Magia_Equipaggiamento\">Magia Equipaggiamento</option>\n      </select>\n      <app-field-error [field]=\"form_carte.controls.tipo\" fieldName=\"tipo\"></app-field-error>\n    </div>\n\n    <div *ngIf=\"tipocarta == 'MOSTRO'\" class=\"form-group col-md-3\">\n        <b><font color=\"white\">Tipo carta Mostro:</font></b> <br>\n        <b><font color=\"red\">Link</font></b> <input formControlName=\"extra\" class=\"form-control\" value=\"Link/\" name=\"extra\" type=\"radio\" (click)=\"this.tipomostro = $event.target.value\">\n        <b><font color=\"red\">Xyz</font></b> <input formControlName=\"extra\" class=\"form-control\" value=\"Xyz/\" name=\"extra\" type=\"radio\" (click)=\"this.tipomostro = $event.target.value\">\n        <b><font color=\"red\">Fusione</font></b> <input formControlName=\"extra\" class=\"form-control\" value=\"Fusione/\" name=\"extra\" type=\"radio\" (click)=\"this.tipomostro = $event.target.value\">\n        <b><font color=\"red\">Synchro</font></b> <input formControlName=\"extra\" class=\"form-control\" value=\"Synchro/\" name=\"extra\" type=\"radio\" (click)=\"this.tipomostro = $event.target.value\">\n        <b><font color=\"red\">Rituale</font></b> <input formControlName=\"extra\" class=\"form-control\" value=\"Ritual/\" name=\"extra\" type=\"radio\" (click)=\"this.tipomostro = $event.target.value\">\n    </div>\n\n    <div *ngIf=\"tipocarta == 'MOSTRO'\" class=\"form-group col-md-3\">\n      <b><font color=\"white\">Tipo effetto mostro:</font></b><br>\n      <b><font color=\"red\">Effetto</font></b> <input class=\"form-control\" type=\"checkbox\" #checkbox1 (change)=\"effetto = checkbox1.checked;\">\n      <b><font color=\"red\">Normale</font></b> <input class=\"form-control\" type=\"checkbox\" #checkbox9 (change)=\"normale = checkbox9.checked;\">\n      <b><font color=\"red\">Gemelli</font></b> <input class=\"form-control\" type=\"checkbox\" #checkbox2 (change)=\"gemelli = checkbox2.checked;\">\n      <b><font color=\"red\">Tuner</font></b> <input class=\"form-control\" type=\"checkbox\" #checkbox3 (change)=\"tuner = checkbox3.checked;\">\n      <b><font color=\"red\">Union</font></b> <input class=\"form-control\" type=\"checkbox\" #checkbox4 (change)=\"union = checkbox4.checked;\">\n      <b><font color=\"red\">Spirit</font></b> <input class=\"form-control\" type=\"checkbox\" #checkbox5 (change)=\"spirit = checkbox5.checked;\">\n      <b><font color=\"red\">Toon</font></b> <input class=\"form-control\" type=\"checkbox\" #checkbox6 (change)=\"toon = checkbox6.checked;\">\n      <b><font color=\"red\">Pendulum</font></b> <input class=\"form-control\" type=\"checkbox\" #checkbox7 (change)=\"pendulum = checkbox7.checked;\">\n      <b><font color=\"red\">Cyberse</font></b> <input class=\"form-control\" type=\"checkbox\" #checkbox8 (change)=\"cyberse = checkbox8.checked;\">\n    </div>\n\n    <div *ngIf=\"tipocarta == 'MOSTRO'\" class=\"form-group col-md-3\">\n      <b><font color=\"white\">Gemme blu (pendulum cards)</font></b>\n      <input formControlName=\"gemmeblu\" type=\"number\" class=\"form-control\" placeholder=\"Gemme blu\">\n      <app-field-error [field]=\"form_carte.controls.gemmeblu\" fieldName=\"gemmeblu\"></app-field-error>\n    </div>\n\n    <div *ngIf=\"tipocarta == 'MOSTRO'\" class=\"form-group col-md-3\">\n      <b><font color=\"white\">Gemme rosse (pendulum cards)</font></b>\n      <input formControlName=\"gemmerosse\" type=\"number\" class=\"form-control\" placeholder=\"Gemme rosse\">\n      <app-field-error [field]=\"form_carte.controls.gemmerosse\" fieldName=\"gemmerosse\"></app-field-error>\n    </div>\n    <div *ngIf=\"tipocarta == 'MOSTRO'\" class=\"form-group col-md-3\">\n      <b><font color=\"white\">Effetto pendulum (pendulum cards)</font></b>\n      <input formControlName=\"pendulumeffect\" type=\"text\" class=\"form-control\" placeholder=\"Effetto pendulum\">\n      <app-field-error [field]=\"form_carte.controls.pendulumeffect\" fieldName=\"pendulumeffect\"></app-field-error>\n    </div>\n    <div class=\"form-group col-md-3\">\n      <b><font color=\"white\">Immagine carta</font></b>\n      <input formControlName=\"linkimmagine\" class=\"form-control\" type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n      <app-field-error [field]=\"form_carte.controls.linkimmagine\" fieldName=\"linkimmagine\"></app-field-error>\n    </div>\n  </div>\n  <div class=\"form-group col-md-3\">\n    <button type=\"button\" class=\"btn btn-success btn-s\"\n      (click)=\"uploader.uploadAll(); dati.AddCardToList(); reset()\" *ngIf=\"form_carte.valid\">\n      Upload data\n    </button>\n  </div>\n</form>\n\n<div id=\"cardintoenvelope\" class=\"form-row\">\n<form [formGroup]=\"form_carte_buste\" novalidate>\n  <h2>Aggiunta carta in busta</h2>\n  <div class=\"form-group col-md\">\n    <b>Codice carta</b>\n    <input formControlName=\"codcard\" type=\"text\" class=\"form-control\" [(ngModel)]=\"this.form_carte.value.codice\">\n  </div>\n  <div class=\"form-group col-md\">\n    <b>Espansione</b>\n    <select formControlName=\"codespansione\" type=\"number\" class=\"form-control\" placeholder=\"cod_espansione\">\n      <option *ngFor=\"let envelopes of dati.buste_espansione.envelopes\" value=\"{{ envelopes.envid }}\">{{ envelopes.nome }}</option>\n    </select>\n  </div>\n  <div class=\"form-group col-md\">\n    <button (click)=\"dati.AddCardToEnvelope()\"  type=\"submit\" class=\"btn btn-primary\" *ngIf=\"form_carte_buste.valid\">Aggiungi</button>\n  </div>\n</form>\n\n<form [formGroup]=\"form_buste\">\n  <h2>Aggiunta di una nuova busta</h2>\n  <div class=\"form-group col-md\">\n    <b>Nome busta</b>\n    <input formControlName=\"nomebusta\" type=\"text\" class=\"form-control\" placeholder=\"nome\">\n  </div>\n  <div class=\"form-group col-md\">\n    <b>Anno di uscita</b>\n    <input formControlName=\"anno\" type=\"number\" class=\"form-control\" placeholder=\"anno\">\n  </div>\n  <div class=\"form-group col-md\">\n    <button (click)=dati.AddEnvelope() type=\"submit\" class=\"btn btn-primary\">Aggiungi busta</button>\n  </div>\n</form>\n</div>\n</div>\n</div>\n<!--<input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n<button type=\"button\" class=\"btn btn-success btn-s\"\n  (click)=\"uploader.uploadAll()\"\n  [disabled]=\"!uploader.getNotUploadedItems().length\" >\n      Upload an Image\n</button>-->\n"

/***/ }),

/***/ "./src/app/adminpage/adminpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adminpage/adminpage.component.ts ***!
  \**************************************************/
/*! exports provided: AdminpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpageComponent", function() { return AdminpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dati_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dati.service */ "./src/app/dati.service.ts");





var UploadURL = 'http://localhost:8000/api/upload';
var AdminpageComponent = /** @class */ (function () {
    function AdminpageComponent(dati) {
        this.dati = dati;
        this.title = 'Upload a File';
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({ url: UploadURL, itemAlias: 'photo' });
    }
    AdminpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('FileUpload:uploaded:', item, status, response);
        };
        // form aggiunta carta
        this.form_carte = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            codice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputcod, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputnome, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            attributo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputattributo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            livello: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputlivello),
            numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputnumero, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputdescrizione, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            ATK: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputattacco),
            DEF: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputdifesa),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputtipo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            extra: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.tipomostro),
            gemmeblu: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputblugem),
            gemmerosse: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputredgem),
            pendulumeffect: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputpendeffect),
            linkimmagine: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputimg, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.form_carte.valueChanges.subscribe(function () {
            _this.dati.inputcod = _this.form_carte.value.codice;
            _this.dati.inputnome = _this.form_carte.value.nome;
            _this.dati.inputattributo = _this.form_carte.value.attributo;
            _this.dati.inputlivello = _this.form_carte.value.livello;
            _this.dati.inputnumero = _this.form_carte.value.numero;
            _this.dati.inputdescrizione = _this.form_carte.value.descrizione;
            _this.dati.inputattacco = _this.form_carte.value.ATK;
            _this.dati.inputdifesa = _this.form_carte.value.DEF;
            if (!(_this.form_carte.value.extra)) {
                _this.form_carte.value.extra = "";
            }
            _this.dati.inputtipo = _this.form_carte.value.tipo + _this.form_carte.value.extra;
            if (_this.effetto) {
                _this.dati.inputtipo += "Effetto/";
            }
            if (_this.gemelli) {
                _this.dati.inputtipo += "Gemelli/";
            }
            if (_this.tuner) {
                _this.dati.inputtipo += "Tuner/";
            }
            if (_this.union) {
                _this.dati.inputtipo += "Union/";
            }
            if (_this.spirit) {
                _this.dati.inputtipo += "Spirit/";
            }
            if (_this.toon) {
                _this.dati.inputtipo += "Toon/";
            }
            if (_this.pendulum) {
                _this.dati.inputtipo += "Pendulum/";
            }
            if (_this.cyberse) {
                _this.dati.inputtipo += "Cyberse/";
            }
            if (_this.normale) {
                _this.dati.inputtipo += "Normale/";
            }
            _this.dati.inputblugem = _this.form_carte.value.gemmeblu;
            _this.dati.inputredgem = _this.form_carte.value.gemmerosse;
            _this.dati.inputpendeffect = _this.form_carte.value.pendulumeffect;
            if (_this.form_carte.value.linkimmagine != null) {
                _this.filename = "http://localhost:8000/" + _this.form_carte.value.linkimmagine.substring(12);
                _this.dati.inputimg = _this.filename;
            }
        });
        // form aggiunta carte in busta
        this.dati.ListofEnvelopes();
        this.form_carte_buste = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            codcard: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputcodcard, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            codespansione: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputcodenvelope, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.form_carte_buste.valueChanges.subscribe(function () {
            _this.dati.inputcodcard = _this.form_carte_buste.value.codcard;
            _this.dati.inputcodenvelope = _this.form_carte_buste.value.codespansione;
        });
        // form aggiunta nuova cod_espansione
        this.form_buste = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nomebusta: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputenvelopename, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            anno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.dati.inputenvelopeyear, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.form_buste.valueChanges.subscribe(function () {
            _this.dati.inputenvelopename = _this.form_buste.value.nomebusta;
            _this.dati.inputenvelopeyear = _this.form_buste.value.anno;
        });
    };
    AdminpageComponent.prototype.reset = function () {
        this.filename = null;
        this.dati.inputimg = null;
        this.dati.inputtipo = null;
        this.dati.inputnome = null;
        this.dati.inputattributo = null;
        this.dati.inputlivello = null;
        this.dati.inputnumero = null;
        this.dati.inputdescrizione = null;
        this.dati.inputattacco = null;
        this.dati.inputdifesa = null;
        this.tipomostro = null;
        this.dati.inputblugem = null;
        this.dati.inputredgem = null;
        this.dati.inputpendeffect = null;
    };
    AdminpageComponent.prototype.setcardtype = function (e) {
        this.tipocarta = e;
        console.log(e);
    };
    AdminpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-adminpage',
            template: __webpack_require__(/*! ./adminpage.component.html */ "./src/app/adminpage/adminpage.component.html"),
            styles: [__webpack_require__(/*! ./adminpage.component.css */ "./src/app/adminpage/adminpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dati_service__WEBPACK_IMPORTED_MODULE_4__["DatiService"]])
    ], AdminpageComponent);
    return AdminpageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cardlist_cardlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cardlist/cardlist.component */ "./src/app/cardlist/cardlist.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loginpage/loginpage.component */ "./src/app/loginpage/loginpage.component.ts");
/* harmony import */ var _carddetail_carddetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./carddetail/carddetail.component */ "./src/app/carddetail/carddetail.component.ts");
/* harmony import */ var _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adminpage/adminpage.component */ "./src/app/adminpage/adminpage.component.ts");
/* harmony import */ var _recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipes-list/recipes-list.component */ "./src/app/recipes-list/recipes-list.component.ts");
/* harmony import */ var _duelistutility_duelistutility_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./duelistutility/duelistutility.component */ "./src/app/duelistutility/duelistutility.component.ts");
/* harmony import */ var _deck_detail_deck_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./deck-detail/deck-detail.component */ "./src/app/deck-detail/deck-detail.component.ts");
/* harmony import */ var _rulespage_rulespage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rulespage/rulespage.component */ "./src/app/rulespage/rulespage.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'cardlist', component: _cardlist_cardlist_component__WEBPACK_IMPORTED_MODULE_4__["CardlistComponent"], },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'loginpage', component: _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_7__["LoginpageComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'cards/:id', component: _carddetail_carddetail_component__WEBPACK_IMPORTED_MODULE_8__["CarddetailComponent"], },
    { path: 'recipess/:id', component: _deck_detail_deck_detail_component__WEBPACK_IMPORTED_MODULE_12__["DeckDetailComponent"], },
    { path: 'adminpage', component: _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_9__["AdminpageComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'recipes', component: _recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_10__["RecipesListComponent"], },
    { path: 'rulespage', component: _rulespage_rulespage_component__WEBPACK_IMPORTED_MODULE_13__["RulespageComponent"], },
    { path: 'utility', component: _duelistutility_duelistutility_component__WEBPACK_IMPORTED_MODULE_11__["DuelistutilityComponent"], },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Yu-gi-ho-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cardlist_cardlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cardlist/cardlist.component */ "./src/app/cardlist/cardlist.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loginpage/loginpage.component */ "./src/app/loginpage/loginpage.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/it */ "./node_modules/@angular/common/locales/it.js");
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _errors_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./errors.service */ "./src/app/errors.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./adminpage/adminpage.component */ "./src/app/adminpage/adminpage.component.ts");
/* harmony import */ var _envelopesfilter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./envelopesfilter.pipe */ "./src/app/envelopesfilter.pipe.ts");
/* harmony import */ var _carddetail_carddetail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./carddetail/carddetail.component */ "./src/app/carddetail/carddetail.component.ts");
/* harmony import */ var _rulespage_rulespage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rulespage/rulespage.component */ "./src/app/rulespage/rulespage.component.ts");
/* harmony import */ var _duelistutility_duelistutility_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./duelistutility/duelistutility.component */ "./src/app/duelistutility/duelistutility.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _otherfilter_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./otherfilter.pipe */ "./src/app/otherfilter.pipe.ts");
/* harmony import */ var _field_error_field_error_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./field-error/field-error.component */ "./src/app/field-error/field-error.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./recipes-list/recipes-list.component */ "./src/app/recipes-list/recipes-list.component.ts");
/* harmony import */ var _deck_detail_deck_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./deck-detail/deck-detail.component */ "./src/app/deck-detail/deck-detail.component.ts");
/* harmony import */ var _leggendary_cards_leggendary_cards_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./leggendary-cards/leggendary-cards.component */ "./src/app/leggendary-cards/leggendary-cards.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm5/ng2-pdf-viewer.js");
































// ...
function tokenGetter() {
    return localStorage.getItem('access_token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _cardlist_cardlist_component__WEBPACK_IMPORTED_MODULE_7__["CardlistComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_10__["LoginpageComponent"],
                _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_19__["AdminpageComponent"],
                _envelopesfilter_pipe__WEBPACK_IMPORTED_MODULE_20__["EnvelopesFilterPipe"],
                _carddetail_carddetail_component__WEBPACK_IMPORTED_MODULE_21__["CarddetailComponent"],
                _rulespage_rulespage_component__WEBPACK_IMPORTED_MODULE_22__["RulespageComponent"],
                _duelistutility_duelistutility_component__WEBPACK_IMPORTED_MODULE_23__["DuelistutilityComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_24__["FooterComponent"],
                _otherfilter_pipe__WEBPACK_IMPORTED_MODULE_25__["OtherfilterPipe"],
                _field_error_field_error_component__WEBPACK_IMPORTED_MODULE_26__["FieldErrorComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__["FileSelectDirective"],
                _recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_28__["RecipesListComponent"],
                _deck_detail_deck_detail_component__WEBPACK_IMPORTED_MODULE_29__["DeckDetailComponent"],
                _leggendary_cards_leggendary_cards_component__WEBPACK_IMPORTED_MODULE_30__["LeggendaryCardsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_31__["PdfViewerModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_16__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:8000'],
                        blacklistedRoutes: ['localhost:8000/login']
                    }
                })
            ],
            providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: _errors_service__WEBPACK_IMPORTED_MODULE_15__["ErrorsService"] },
                _auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"],
                _auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

Object(_angular_common__WEBPACK_IMPORTED_MODULE_12__["registerLocaleData"])(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_13___default.a, 'it');


/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('access_token')) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        // input per la registrazione
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        this.users = null;
        this.datasend = null;
    }
    AuthService.prototype.registeruser = function () {
        var _this = this;
        var url = "http://localhost:8000/register";
        var users = {};
        users["nome"] = this.inputnome;
        users["cognome"] = this.inputcognome;
        users["pass"] = this.inputpass;
        users["email"] = this.inputemail;
        users["privilegi"] = "utente";
        this.http.post(url, users).subscribe(function (data) {
            console.info(data);
            _this.usersData = data;
            _this.usersError = null;
        }, function (error) {
            _this.usersError = error.error;
            _this.usersData = null;
            console.error(_this.usersError);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post('http://localhost:8000/login', { pass: password, email: email })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            localStorage.setItem('access_token', result.token);
            localStorage.setItem('token_decoded_userid', _this.helper.decodeToken(localStorage.getItem('access_token')).userID);
            return true;
        }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('access_token');
        localStorage.removeItem('token_decoded_userid');
    };
    Object.defineProperty(AuthService.prototype, "loggedIn", {
        get: function () {
            return (localStorage.getItem('access_token') !== null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "adminControl", {
        get: function () {
            if (this.helper.decodeToken(localStorage.getItem('access_token')).privileges == 'admin') {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "UserLoggedName", {
        get: function () {
            return this.helper.decodeToken(localStorage.getItem('access_token')).Nome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "UserLoggedCognome", {
        get: function () {
            return this.helper.decodeToken(localStorage.getItem('access_token')).Cognome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "UserLoggedEmail", {
        get: function () {
            return this.helper.decodeToken(localStorage.getItem('access_token')).Email;
        },
        enumerable: true,
        configurable: true
    });
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/carddetail/carddetail.component.css":
/*!*****************************************************!*\
  !*** ./src/app/carddetail/carddetail.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n  width: 288px;\r\n  height: 420px;\r\n}\r\n\r\nb{\r\n  margin-left: 15px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.sfondo{\r\n  background-image: url(\"/assets/1059004_yu-gi-oh-online-backgrounds-and-sleeves-projects-ygopro-forum_1024x642_h.jpg\");\r\n  background-size: 100%\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n  grid-template-areas: \"img nome attributo tipo livello\" \"img descrizione descrizione descrizione descrizione\" \"img atk def codice numero\" \"img pendeffect pendeffect bluegem redgem\" \"espansioni espansioni espansioni espansioni espansioni\";\r\n  margin: 30px;\r\n}\r\n\r\n.img {\r\n  grid-area: img;\r\n  border-bottom: 4px solid #212121;\r\n  border-left: 4px solid #212121;\r\n  border-top: 4px solid #212121;\r\n}\r\n\r\n.nome {\r\n  grid-area: nome;\r\n  border-left: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n  border-top: 4px solid #212121;\r\n}\r\n\r\n.attributo {\r\n  grid-area: attributo;\r\n  border-bottom: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n  border-top: 4px solid #212121;\r\n}\r\n\r\n.tipo {\r\n  grid-area: tipo;\r\n  border-bottom: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n  border-top: 4px solid #212121;\r\n}\r\n\r\n.livello {\r\n  grid-area: livello;\r\n  border-bottom: 4px solid #212121;\r\n  border-top: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n}\r\n\r\n.descrizione {\r\n  grid-area: descrizione;\r\n  border-left: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n}\r\n\r\n.atk {\r\n  grid-area: atk;\r\n  border-left: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.def {\r\n  grid-area: def;\r\n  border-right: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.codice {\r\n  grid-area: codice;\r\n  border-right: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.numero {\r\n  grid-area: numero;\r\n  border-bottom: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n}\r\n\r\n.pendeffect {\r\n  grid-area: pendeffect;\r\n  border-left: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.bluegem {\r\n  grid-area: bluegem;\r\n  border-right: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.redgem {\r\n  grid-area: redgem;\r\n  border-bottom: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n}\r\n\r\n.espansioni {\r\n  grid-area: espansioni;\r\n  border-bottom: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n  border-left: 4px solid #212121;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZGRldGFpbC9jYXJkZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFIQUFxSDtFQUNySDtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDBDQUEwQztFQUMxQyx1Q0FBdUM7RUFDdkMsNE9BQTRPO0VBQzVPLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGdDQUFnQztFQUNoQyw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGdDQUFnQztFQUNoQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvY2FyZGRldGFpbC9jYXJkZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgd2lkdGg6IDI4OHB4O1xyXG4gIGhlaWdodDogNDIwcHg7XHJcbn1cclxuXHJcbmJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnNmb25kb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzLzEwNTkwMDRfeXUtZ2ktb2gtb25saW5lLWJhY2tncm91bmRzLWFuZC1zbGVldmVzLXByb2plY3RzLXlnb3Byby1mb3J1bV8xMDI0eDY0Ml9oLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCVcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbWcgbm9tZSBhdHRyaWJ1dG8gdGlwbyBsaXZlbGxvXCIgXCJpbWcgZGVzY3JpemlvbmUgZGVzY3JpemlvbmUgZGVzY3JpemlvbmUgZGVzY3JpemlvbmVcIiBcImltZyBhdGsgZGVmIGNvZGljZSBudW1lcm9cIiBcImltZyBwZW5kZWZmZWN0IHBlbmRlZmZlY3QgYmx1ZWdlbSByZWRnZW1cIiBcImVzcGFuc2lvbmkgZXNwYW5zaW9uaSBlc3BhbnNpb25pIGVzcGFuc2lvbmkgZXNwYW5zaW9uaVwiO1xyXG4gIG1hcmdpbjogMzBweDtcclxufVxyXG5cclxuLmltZyB7XHJcbiAgZ3JpZC1hcmVhOiBpbWc7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG4ubm9tZSB7XHJcbiAgZ3JpZC1hcmVhOiBub21lO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG4uYXR0cmlidXRvIHtcclxuICBncmlkLWFyZWE6IGF0dHJpYnV0bztcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG4udGlwbyB7XHJcbiAgZ3JpZC1hcmVhOiB0aXBvO1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuXHJcbi5saXZlbGxvIHtcclxuICBncmlkLWFyZWE6IGxpdmVsbG87XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxuLmRlc2NyaXppb25lIHtcclxuICBncmlkLWFyZWE6IGRlc2NyaXppb25lO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG4uYXRrIHtcclxuICBncmlkLWFyZWE6IGF0aztcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxuLmRlZiB7XHJcbiAgZ3JpZC1hcmVhOiBkZWY7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxuLmNvZGljZSB7XHJcbiAgZ3JpZC1hcmVhOiBjb2RpY2U7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxuLm51bWVybyB7XHJcbiAgZ3JpZC1hcmVhOiBudW1lcm87XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxuLnBlbmRlZmZlY3Qge1xyXG4gIGdyaWQtYXJlYTogcGVuZGVmZmVjdDtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxuLmJsdWVnZW0ge1xyXG4gIGdyaWQtYXJlYTogYmx1ZWdlbTtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG4ucmVkZ2VtIHtcclxuICBncmlkLWFyZWE6IHJlZGdlbTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG4uZXNwYW5zaW9uaSB7XHJcbiAgZ3JpZC1hcmVhOiBlc3BhbnNpb25pO1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/carddetail/carddetail.component.html":
/*!******************************************************!*\
  !*** ./src/app/carddetail/carddetail.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<td> <img src=\"{{ cardview.img }}\"></td> <br>\n<td> {{ cardview.cod }}</td> <br>\n<td> {{ cardview.nome }}</td> <br>\n<td> {{ cardview.attributo }}</td> <br>\n<td> {{ cardview.livello }}</td> <br>\n<td> {{ cardview.numero }}</td> <br>\n<td> {{ cardview.descrizione }}</td> <br>\n<td *ngIf=\"cardview.attacco != 22222 && cardview.attacco != 10000\"> {{ cardview.attacco }}</td> <br>\n<td *ngIf=\"cardview.attacco == 22222\"> ???? </td> <br>\n<td *ngIf=\"cardview.attacco == 10000\"> X000 </td> <br>\n<td *ngIf=\"cardview.difesa != 22222 && cardview.difesa != 10000\"> {{ cardview.difesa }}</td> <br>\n<td *ngIf=\"cardview.difesa == 22222\"> ???? </td> <br>\n<td *ngIf=\"cardview.difesa == 10000\"> X000 </td> <br>\n<td> {{ cardview.tipo }}</td> <br>\n<td> {{ cardview.blugem }}</td> <br>\n<td> {{ cardview.redgem }}</td> <br>\n<div id=\"espansioni\" *ngFor=\"let espansione of cardview.espansioni\">\n  <td> {{ espansione.nome }}</td> <td> {{ espansione.anno }}</td> <br>\n<div>-->\n<div class=\"sfondo\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"grid-container\">\n        <div class=\"img\"><img src=\"{{ cardview.img }}\"></div>\n        <div class=\"nome\"><font color=\"white\"><b>NOME: {{ cardview.nome }}</b></font></div>\n        <div class=\"attributo\"><font color=\"white\"><b>ATTRIBUTO: {{ cardview.attributo }}</b></font></div>\n        <div class=\"tipo\"><font color=\"white\"><b>TIPO: {{ cardview.tipo }}</b></font></div>\n        <div class=\"livello\"><font color=\"white\"><b *ngIf=\"cardview.livello != null\">LV: {{ cardview.livello }}</b></font></div>\n        <div class=\"descrizione\"><font color=\"white\"><b>{{ cardview.descrizione }}</b></font></div>\n        <div class=\"atk\" *ngIf=\"cardview.attacco != 22222 && cardview.attacco != 10000\"><font color=\"white\"><b *ngIf=\"cardview.attacco != null\">ATK: {{ cardview.attacco }}</b></font></div>\n        <div class=\"atk\" *ngIf=\"cardview.attacco == 22222\"><font color=\"white\"><b>ATK: ????</b></font></div>\n        <div class=\"atk\" *ngIf=\"cardview.attacco == 10000\"><font color=\"white\"><b>ATK: X000</b></font></div>\n        <div class=\"def\" *ngIf=\"cardview.difesa != 22222 && cardview.difesa != 10000\"><font color=\"white\"><b *ngIf=\"cardview.difesa != null\">DEF: {{ cardview.difesa }}</b></font></div>\n        <div class=\"def\" *ngIf=\"cardview.difesa == 22222\"><font color=\"white\"><b>DEF: ????</b></font></div>\n        <div class=\"def\" *ngIf=\"cardview.difesa == 10000\"><font color=\"white\"><b>DEF: X000</b></font></div>\n        <div class=\"codice\"><font color=\"white\"><b>SET: {{ cardview.cod }}</b></font></div>\n        <div class=\"numero\"><font color=\"white\"><b>COD: {{ cardview.numero }}</b></font></div>\n        <div class=\"pendeffect\"><font color=\"white\"><b *ngIf=\"cardview.pendeffect != null\">EFFETTO PEND: {{ cardview.pendeffect }}</b></font></div>\n        <div class=\"bluegem\"><font color=\"white\"><b *ngIf=\"cardview.blugem != null\">GEMME BLU: {{ cardview.blugem }}</b></font></div>\n        <div class=\"redgem\"><font color=\"white\"><b *ngIf=\"cardview.redgem != null\">GEMME ROSSE: {{ cardview.redgem }}</b></font></div>\n        <div id=\"espansioni\" class=\"espansioni\">\n          <font color=\"white\"><b *ngFor=\"let espansione of cardview.espansioni\">\n            {{ espansione.nome }}{{ espansione.anno }}\n          </b></font>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/carddetail/carddetail.component.ts":
/*!****************************************************!*\
  !*** ./src/app/carddetail/carddetail.component.ts ***!
  \****************************************************/
/*! exports provided: CarddetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarddetailComponent", function() { return CarddetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dati_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dati.service */ "./src/app/dati.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CarddetailComponent = /** @class */ (function () {
    function CarddetailComponent(dati, route, router) {
        this.dati = dati;
        this.route = route;
        this.router = router;
    }
    CarddetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.cardview = this.dati.getCard(id);
    };
    CarddetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carddetail',
            template: __webpack_require__(/*! ./carddetail.component.html */ "./src/app/carddetail/carddetail.component.html"),
            styles: [__webpack_require__(/*! ./carddetail.component.css */ "./src/app/carddetail/carddetail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dati_service__WEBPACK_IMPORTED_MODULE_2__["DatiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CarddetailComponent);
    return CarddetailComponent;
}());



/***/ }),

/***/ "./src/app/cardlist/cardlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/cardlist/cardlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n  width: 96px;\r\n  height: 140px;\r\n}\r\n\r\n.container-fluid{\r\n  background-image: url(\"/assets/Wiki-background.jpg\");\r\n  /*border-left: 4px solid #212121;\r\n  border-right: 4px solid #212121;*/\r\n}\r\n\r\n#pagedescription{\r\n  box-sizing: border-box;\r\n  border: 4px solid #212121;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  min-height:100px;\r\n\tpadding:30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZGxpc3QvY2FyZGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQ7bUNBQ2lDO0FBQ25DOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtDQUNqQixZQUFZO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jYXJkbGlzdC9jYXJkbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gIHdpZHRoOiA5NnB4O1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9XaWtpLWJhY2tncm91bmQuanBnXCIpO1xyXG4gIC8qYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMyMTIxMjE7Ki9cclxufVxyXG5cclxuI3BhZ2VkZXNjcmlwdGlvbntcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1pbi1oZWlnaHQ6MTAwcHg7XHJcblx0cGFkZGluZzozMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/cardlist/cardlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/cardlist/cardlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container\">\n    <div class=\"pagetitle\">\n      <h1 style=\"font-family: yu-gi-ho;\">Lista di tutte le carte</h1>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <select name=\"profile\" [value]=\"pack\" (input)=\"setPack( $event.target.value )\" class=\"browser-default custom-select\">\n          <option selected>Seleziona un espansione</option>\n          <option *ngFor=\"let envelopes of pacchetti.buste_espansione.envelopes\" value=\"{{ envelopes.nome }}\">{{ envelopes.nome }} year: {{ envelopes.anno }}</option>\n        </select>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col\">\n          <table *ngIf=\"pack\" class=\"table table-sm table-dark\">\n            <tr id=\"tabletitle\">\n              <td><b>IMMAGINE</b></td>\n              <td><b>SET</b></td>\n              <td><b>NOME</b></td>\n              <td><b>QUANTITA'</b></td>\n              <td><b>TIPO DECK'</b></td>\n            </tr>\n            <tr *ngFor=\"let card of carte.dati_carte.cards | envelopesFilter: pack ; let i = index\">\n              <td><img src=\"{{ card.img }}\"></td>\n              <td>{{ card.cod }}</td>\n              <td>{{ card.nome }} </td>\n\n              <td *ngIf=\"auth.loggedIn\"><select name=\"profile\" [value]=\"carte.quantity[i]\" (input)=\"carte.quantity[i] = $event.target.value\">\n                <option value=\"1\">1_carta</option>\n                <option value=\"2\">2_carte</option>\n                <option value=\"3\">3_carte</option>\n              </select></td>\n\n              <td *ngIf=\"auth.loggedIn\"><select name=\"profile\" [value]=\"carte.typedeck[i]\" (input)=\"carte.typedeck[i] = $event.target.value\">\n                <option *ngIf=\"!(card.tipo.split('/')[1] == 'Fusione' || card.tipo.split('/')[1] == 'Synchro')\" value=\"main\">Main Deck</option>\n                <option *ngIf=\"(card.tipo.split('/')[1] == 'Fusione' || card.tipo.split('/')[1] == 'Synchro')\" value=\"extra\">Extra Deck</option>\n                <option value=\"side\">Side Deck</option>\n              </select></td>\n\n              <td *ngIf=\"auth.loggedIn\"> <button type=\"button\" name=\"card\" (click)=\"carte.AddToDeck(card,i);\">ADD</button> </td>\n              <td> <button type=\"button\" name=\"detailbutton\" (click)=\"showCardDetail(card)\">Card details</button> </td>\n            </tr>\n          </table>\n          <br><br>\n        </div>\n        <div id=\"pagedescription\">\n          <b><font color=\"white\">In questa pagina sono presenti tutti i vari set di tutte le espansioni esistenti a partire dal \"La Leggenda del drago bianco occhi blu\" fino ad oggi.\n            Se sei registrato puoi utilizzare queste carte per gestire il tuo deck virtualmente selezionando una quantità per ogni carta e infine il tipo di deck da aggiungere</font></b>\n            <li><b><font color=\"white\">\"Main deck\": il mazzo iniziale MIN 40 carte MAX 60 carte </font></b></li>\n            <li><b><font color=\"white\">\"Side deck\": (mazzo di supporto) MAX 15 carte,</font></b></li>\n            <li><b><font color=\"white\">\"Extra deck:\" mazzo contenente le carte mostro 'fusione', 'sinchro', 'xyz', 'link' MAX 15 carte</font></b></li>\n          <b><font color=\"white\">ricordati che secondo le regole ufficiali ogni deck può avere massimo tre copie per di ogni carta ad eccezione delle carte proibite, limitate e semi limitate.</font></b>\n        </div>\n      </div>\n    </div>\n</div>\n\n  <!-- {{ carte.dati_carte.cards[1].espansioni[0] | json}} -->\n"

/***/ }),

/***/ "./src/app/cardlist/cardlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/cardlist/cardlist.component.ts ***!
  \************************************************/
/*! exports provided: CardlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardlistComponent", function() { return CardlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _dati_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dati.service */ "./src/app/dati.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var CardlistComponent = /** @class */ (function () {
    function CardlistComponent(carte, pacchetti, route, router, auth) {
        this.carte = carte;
        this.pacchetti = pacchetti;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.pack = "";
    }
    CardlistComponent.prototype.ngOnInit = function () {
        this.carte.Load_All_Cards();
        this.pacchetti.ListofEnvelopes();
    };
    CardlistComponent.prototype.setPack = function (e) {
        this.pack = e;
        console.log(e);
    };
    CardlistComponent.prototype.showCardDetail = function (card) {
        this.carte.single_card = card;
        this.route.navigate(['cards', this.carte.single_card.cod]);
    };
    CardlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cardlist',
            template: __webpack_require__(/*! ./cardlist.component.html */ "./src/app/cardlist/cardlist.component.html"),
            styles: [__webpack_require__(/*! ./cardlist.component.css */ "./src/app/cardlist/cardlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dati_service__WEBPACK_IMPORTED_MODULE_3__["DatiService"],
            _dati_service__WEBPACK_IMPORTED_MODULE_3__["DatiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], CardlistComponent);
    return CardlistComponent;
}());



/***/ }),

/***/ "./src/app/dati.service.ts":
/*!*********************************!*\
  !*** ./src/app/dati.service.ts ***!
  \*********************************/
/*! exports provided: DatiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatiService", function() { return DatiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");





var DatiService = /** @class */ (function () {
    function DatiService(http, authservice) {
        this.http = http;
        this.authservice = authservice;
        this.card = null;
        this.dati_carte = [];
        this.dati_carte_utente = [];
        this.carta_selezionata = null;
        this.buste_espansione = [];
        this.quantity = [this.dati_carte.length];
        this.typedeck = [];
    }
    DatiService.prototype.Load_All_Cards = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Allcards;
        this.http.get(url).subscribe(function (data) {
            _this.dati_carte = data;
        });
    };
    DatiService.prototype.AddToDeck = function (card, index) {
        var _this = this;
        this.card = card;
        this.carta_selezionata = {
            userid_fk: localStorage.getItem("token_decoded_userid"),
            cod_fk: this.card.cod,
            qnt: this.quantity[index],
            type: this.typedeck[index],
        };
        var url = "http://localhost:8000/users/" + localStorage.getItem("token_decoded_userid") + "/cards/" + this.card.cod + "/type/" + this.carta_selezionata.type;
        var url2 = "http://localhost:8000/users/" + localStorage.getItem("token_decoded_userid") + "/cards/" + this.card.cod;
        var url3 = "http://localhost:8000/users/" + localStorage.getItem("token_decoded_userid") + "/cards/" + this.card.cod + "/type/" + this.carta_selezionata.type;
        if (this.carta_selezionata.qnt != null && this.carta_selezionata.type != null) {
            this.http.get(url).subscribe(function (data) {
                console.log(data.card.cod_fk);
                if (data.card.cod_fk == _this.carta_selezionata.cod_fk && data.card.type == _this.carta_selezionata.type) {
                    _this.http.put(url3, _this.carta_selezionata).subscribe(function (data) {
                        console.log(data);
                    });
                    _this.dati_carte_utente["cards"].splice(index, 1);
                    _this.dati_carte_utente["cards"].push(card);
                }
                else if (data.card == "false") {
                    _this.http.post(url2, _this.carta_selezionata).subscribe(function (data) {
                        alert("carta aggiunta con successo!");
                    });
                }
            });
        }
        else {
            alert("ERRORE: devi aggiungere una quantità di carte da agiungere al deck e il tipo di deck");
        }
    };
    DatiService.prototype.getCard = function (codice) {
        var _this = this;
        var url = "http://localhost:8000/singlecard/" + codice;
        this.http.get(url).subscribe(function (data) {
            _this.single_card = data;
        });
        return this.single_card;
    };
    DatiService.prototype.deleteCardfromdeck = function (card, index) {
        this.dati_carte_utente["cards"].splice(index, 1);
        this.card = card;
        var url = "http://localhost:8000/users/" + localStorage.getItem("token_decoded_userid") + "/cards/" + this.card.cod + "/type/" + this.card.type;
        this.http.delete(url).subscribe(function (data) {
            console.info("Rimozione effetuata con successo");
        });
    };
    DatiService.prototype.CardsLoggedUser = function () {
        var _this = this;
        var url = "http://localhost:8000/users/" + localStorage.getItem("token_decoded_userid") + "/cards";
        return this.http.get(url).subscribe(function (data) {
            _this.dati_carte_utente = data;
            //let a = data.cards[0].type;
        });
    };
    ;
    DatiService.prototype.ListofEnvelopes = function () {
        var _this = this;
        var url = "http://localhost:8000/envelope/all";
        this.http.get(url).subscribe(function (data) {
            _this.buste_espansione = data;
        });
    };
    ;
    DatiService.prototype.AddCardToList = function () {
        var url = "http://localhost:8000/cards";
        var card = {};
        card["cod"] = this.inputcod;
        card["nome"] = this.inputnome;
        card["attributo"] = this.inputattributo;
        card["livello"] = this.inputlivello;
        card["numero"] = this.inputnumero;
        card["descrizione"] = this.inputdescrizione;
        card["attacco"] = this.inputattacco;
        card["difesa"] = this.inputdifesa;
        card["tipo"] = this.inputtipo;
        card["blugem"] = this.inputblugem;
        card["redgem"] = this.inputredgem;
        card["pendeffect"] = this.inputpendeffect;
        card["img"] = this.inputimg;
        this.http.post(url, card).subscribe(function (data) {
            console.info(data);
        });
        alert("nuova carta aggiunta con successo!");
    };
    DatiService.prototype.AddEnvelope = function () {
        var url = "http://localhost:8000/envelope";
        var envelope = {};
        envelope["nome"] = this.inputenvelopename;
        envelope["anno"] = this.inputenvelopeyear;
        this.http.post(url, envelope).subscribe(function (data) {
            console.info(data);
        });
        alert("nuova busta aggiunta con successo!");
    };
    DatiService.prototype.AddCardToEnvelope = function () {
        var url = "http://localhost:8000/cards/" + this.inputcodcard + "/envelope/" + this.inputcodenvelope;
        this.http.post(url, url).subscribe(function (data) { });
        alert("Relazione aggiunta con successo!");
    };
    DatiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], DatiService);
    return DatiService;
}());



/***/ }),

/***/ "./src/app/deck-detail/deck-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/deck-detail/deck-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sfondo{\r\n  background-image: url(\"/assets/Wiki-background.jpg\");;\r\n}\r\n\r\nimg{\r\n  width: 96px;\r\n  height: 140px;\r\n  margin: 5px;\r\n}\r\n\r\nh6{\r\n  text-align: center;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr;\r\n  grid-template-areas: \"img nome nome nome nome nome nome\" \"img attributo attributo livello tipo atk def\" \"img descrizione descrizione descrizione descrizione descrizione descrizione\" \"img pendeffect pendeffect blugem redgem qnt button\";\r\n}\r\n\r\n.img { grid-area: img; }\r\n\r\n.nome { grid-area: nome; }\r\n\r\n.attributo { grid-area: attributo; }\r\n\r\n.livello { grid-area: livello; }\r\n\r\n.tipo { grid-area: tipo; }\r\n\r\n.atk { grid-area: atk; }\r\n\r\n.def { grid-area: def; }\r\n\r\n.descrizione { grid-area: descrizione; }\r\n\r\n.pendeffect { grid-area: pendeffect; }\r\n\r\n.blugem { grid-area: blugem; }\r\n\r\n.redgem { grid-area: redgem; }\r\n\r\n.qnt { grid-area: qnt; }\r\n\r\n.button { grid-area: button; }\r\n\r\n#pagedescription{\r\n  margin-bottom: 30px;\r\n  box-sizing: border-box;\r\n  border: 6px solid #212121;\r\n  min-height:100px;\r\n\tpadding:30px;\r\n}\r\n\r\n.pagetitle{\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.row{\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVjay1kZXRhaWwvZGVjay1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGtEQUFrRDtFQUNsRCxtQ0FBbUM7RUFDbkMsME9BQTBPO0FBQzVPOztBQUVBLE9BQU8sY0FBYyxFQUFFOztBQUV2QixRQUFRLGVBQWUsRUFBRTs7QUFFekIsYUFBYSxvQkFBb0IsRUFBRTs7QUFFbkMsV0FBVyxrQkFBa0IsRUFBRTs7QUFFL0IsUUFBUSxlQUFlLEVBQUU7O0FBRXpCLE9BQU8sY0FBYyxFQUFFOztBQUV2QixPQUFPLGNBQWMsRUFBRTs7QUFFdkIsZUFBZSxzQkFBc0IsRUFBRTs7QUFFdkMsY0FBYyxxQkFBcUIsRUFBRTs7QUFFckMsVUFBVSxpQkFBaUIsRUFBRTs7QUFFN0IsVUFBVSxpQkFBaUIsRUFBRTs7QUFFN0IsT0FBTyxjQUFjLEVBQUU7O0FBRXZCLFVBQVUsaUJBQWlCLEVBQUU7O0FBRTdCO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0NBQ2pCLFlBQVk7QUFDYjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9kZWNrLWRldGFpbC9kZWNrLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNmb25kb3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL1dpa2ktYmFja2dyb3VuZC5qcGdcIik7O1xyXG59XHJcblxyXG5pbWd7XHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuaDZ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImltZyBub21lIG5vbWUgbm9tZSBub21lIG5vbWUgbm9tZVwiIFwiaW1nIGF0dHJpYnV0byBhdHRyaWJ1dG8gbGl2ZWxsbyB0aXBvIGF0ayBkZWZcIiBcImltZyBkZXNjcml6aW9uZSBkZXNjcml6aW9uZSBkZXNjcml6aW9uZSBkZXNjcml6aW9uZSBkZXNjcml6aW9uZSBkZXNjcml6aW9uZVwiIFwiaW1nIHBlbmRlZmZlY3QgcGVuZGVmZmVjdCBibHVnZW0gcmVkZ2VtIHFudCBidXR0b25cIjtcclxufVxyXG5cclxuLmltZyB7IGdyaWQtYXJlYTogaW1nOyB9XHJcblxyXG4ubm9tZSB7IGdyaWQtYXJlYTogbm9tZTsgfVxyXG5cclxuLmF0dHJpYnV0byB7IGdyaWQtYXJlYTogYXR0cmlidXRvOyB9XHJcblxyXG4ubGl2ZWxsbyB7IGdyaWQtYXJlYTogbGl2ZWxsbzsgfVxyXG5cclxuLnRpcG8geyBncmlkLWFyZWE6IHRpcG87IH1cclxuXHJcbi5hdGsgeyBncmlkLWFyZWE6IGF0azsgfVxyXG5cclxuLmRlZiB7IGdyaWQtYXJlYTogZGVmOyB9XHJcblxyXG4uZGVzY3JpemlvbmUgeyBncmlkLWFyZWE6IGRlc2NyaXppb25lOyB9XHJcblxyXG4ucGVuZGVmZmVjdCB7IGdyaWQtYXJlYTogcGVuZGVmZmVjdDsgfVxyXG5cclxuLmJsdWdlbSB7IGdyaWQtYXJlYTogYmx1Z2VtOyB9XHJcblxyXG4ucmVkZ2VtIHsgZ3JpZC1hcmVhOiByZWRnZW07IH1cclxuXHJcbi5xbnQgeyBncmlkLWFyZWE6IHFudDsgfVxyXG5cclxuLmJ1dHRvbiB7IGdyaWQtYXJlYTogYnV0dG9uOyB9XHJcblxyXG4jcGFnZWRlc2NyaXB0aW9ue1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDZweCBzb2xpZCAjMjEyMTIxO1xyXG4gIG1pbi1oZWlnaHQ6MTAwcHg7XHJcblx0cGFkZGluZzozMHB4O1xyXG59XHJcblxyXG4ucGFnZXRpdGxle1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG4ucm93e1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/deck-detail/deck-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/deck-detail/deck-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sfondo\">\n<div class=\"container\">\n  <div class=\"pagetitle\">\n    <h1 style=\"font-family: yu-gi-ho;\">{{ recipesdata.single_recipe.nomeric }}</h1>\n  </div>\n    <div class=\"row\">\n      <div class=\"col\">\n          <div *ngFor=\"let card of recipesdata.singleric.cards; let i = index\" class=\"grid-container\">\n            <h6 *ngIf=\"card.type == 'main'\"><font color=\"yellow\"> MAIN DECK </font></h6>\n            <h6 *ngIf=\"card.type == 'extra'\"><font color=\"blue\"> EXTRA DECK </font></h6>\n            <h6 *ngIf=\"card.type == 'side'\"><font color=\"darkgreen\"> SIDE DECK </font></h6>\n            <div class=\"nome\"><font color=\"white\">NOME: {{ card.nome }}</font></div>\n            <div class=\"attributo\"><font color=\"white\">ATTRIBUTO: {{ card.attributo }}</font></div>\n            <div class=\"livello\"><font color=\"white\">LV:{{ card.livello }}</font></div>\n            <div class=\"tipo\"><font color=\"white\">{{ card.tipo }}</font></div>\n            <div class=\"atk\" *ngIf=\"card.attacco != 22222 && card.attacco != 10000\"><font color=\"white\">ATK: {{ card.attacco }}</font></div>\n            <div class=\"atk\" *ngIf=\"card.attacco == 22222\"><font color=\"white\">ATK: ????</font></div>\n            <div class=\"atk\" *ngIf=\"card.attacco == 10000\"><font color=\"white\">ATK: X000</font></div>\n            <div class=\"def\" *ngIf=\"card.difesa != 22222 && card.attacco != 10000\"><font color=\"white\">DEF: {{ card.difesa }}</font></div>\n            <div class=\"def\" *ngIf=\"card.difesa == 22222\"><font color=\"white\">DEF: ????</font></div>\n            <div class=\"def\" *ngIf=\"card.difesa == 10000\"><font color=\"white\">DEF: X000</font></div>\n            <div class=\"descrizione\"><font color=\"white\">{{ card.descrizione }}</font></div>\n            <div class=\"blugem\"><font color=\"white\">{{ card.blugem }}</font></div>\n            <div class=\"redgem\"><font color=\"white\">{{ card.redgem }}</font></div>\n            <div class=\"img\" align=\"center\"><img src=\"{{ card.img }}\"></div>\n            <div class=\"pendeffect\"><font color=\"white\">{{ card.pendeffect }}</font></div>\n            <div class=\"qnt\"><font color=\"white\">QNT: {{ card.qnt }}</font></div>\n            <div class=\"button\"><button type=\"button\" name=\"card\" (click)=\"showCardDetail(card);\">Card Dettail</button></div>\n          </div>\n          <table class=\"table table-sm table-dark\">\n          <tr *ngFor=\"let comment of recipesdata.all_comment.comments; let i = index\">\n            <td>{{ comment.id_com }}</td>\n            <td>{{ comment.nome }}</td>\n            <td>{{ comment.cognome }}</td>\n            <td>{{ comment.desc }}</td>\n            <td>\n              <div *ngFor=\"let item of recipesdata.all_comment_ids.comments\">\n                <button *ngIf=\"item.id_com == comment.id_com\" type=\"button\" name=\"commentsdelete\" (click)=\"deletecom(comment.id_com,i)\" >DELETE</button>\n              </div>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n\n  <form>\n    <div [formGroup]=\"form_comment\">\n      <label for=\"comment\"><font color=\"white\">Lascia una recensione:</font></label>\n      <textarea formControlName=\"descrizione\" type=\"text\" class=\"form-control\" rows=\"5\" id=\"comment\"></textarea>\n      <button type=\"submit\" class=\"btn btn-primary\" name=\"postcommentbutton\" (click)=\"Addcom(id,commentbody)\">Commenta</button>\n    </div>\n  </form>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/deck-detail/deck-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/deck-detail/deck-detail.component.ts ***!
  \******************************************************/
/*! exports provided: DeckDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckDetailComponent", function() { return DeckDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipes.service */ "./src/app/recipes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dati_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dati.service */ "./src/app/dati.service.ts");






var DeckDetailComponent = /** @class */ (function () {
    function DeckDetailComponent(dati, recipesdata, route, router) {
        this.dati = dati;
        this.recipesdata = recipesdata;
        this.route = route;
        this.router = router;
    }
    DeckDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.recipesdata.Getrecipe(this.id);
        this.recipesdata.Getrecipescomments(this.id);
        this.recipesdata.Getrecipescommentsids(this.id, Number(localStorage.getItem("token_decoded_userid")));
        this.form_comment = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.commentbody, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.form_comment.valueChanges.subscribe(function () {
            _this.commentbody = _this.form_comment.value.descrizione;
        });
    };
    DeckDetailComponent.prototype.deletecom = function (id, ind) {
        this.recipesdata.DeleteComment(id, ind);
        //this.recipesdata.Getrecipescomments(this.id);
    };
    DeckDetailComponent.prototype.Addcom = function (id, desc) {
        this.recipesdata.Addcomment(id, desc);
        this.recipesdata.Getrecipescommentsids(this.id, Number(localStorage.getItem("token_decoded_userid")));
        //this.recipesdata.Getrecipescomments(this.id);
    };
    DeckDetailComponent.prototype.showCardDetail = function (card) {
        this.dati.single_card = card;
        this.router.navigate(['cards', this.dati.single_card.cod]);
    };
    DeckDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deck-detail',
            template: __webpack_require__(/*! ./deck-detail.component.html */ "./src/app/deck-detail/deck-detail.component.html"),
            styles: [__webpack_require__(/*! ./deck-detail.component.css */ "./src/app/deck-detail/deck-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dati_service__WEBPACK_IMPORTED_MODULE_5__["DatiService"],
            _recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DeckDetailComponent);
    return DeckDetailComponent;
}());



/***/ }),

/***/ "./src/app/duelistutility/duelistutility.component.css":
/*!*************************************************************!*\
  !*** ./src/app/duelistutility/duelistutility.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R1ZWxpc3R1dGlsaXR5L2R1ZWxpc3R1dGlsaXR5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/duelistutility/duelistutility.component.html":
/*!**************************************************************!*\
  !*** ./src/app/duelistutility/duelistutility.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  duelistutility works!\n</p>\n"

/***/ }),

/***/ "./src/app/duelistutility/duelistutility.component.ts":
/*!************************************************************!*\
  !*** ./src/app/duelistutility/duelistutility.component.ts ***!
  \************************************************************/
/*! exports provided: DuelistutilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DuelistutilityComponent", function() { return DuelistutilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DuelistutilityComponent = /** @class */ (function () {
    function DuelistutilityComponent() {
    }
    DuelistutilityComponent.prototype.ngOnInit = function () {
    };
    DuelistutilityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-duelistutility',
            template: __webpack_require__(/*! ./duelistutility.component.html */ "./src/app/duelistutility/duelistutility.component.html"),
            styles: [__webpack_require__(/*! ./duelistutility.component.css */ "./src/app/duelistutility/duelistutility.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DuelistutilityComponent);
    return DuelistutilityComponent;
}());



/***/ }),

/***/ "./src/app/envelopesfilter.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/envelopesfilter.pipe.ts ***!
  \*****************************************/
/*! exports provided: EnvelopesFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvelopesFilterPipe", function() { return EnvelopesFilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnvelopesFilterPipe = /** @class */ (function () {
    function EnvelopesFilterPipe() {
    }
    EnvelopesFilterPipe.prototype.transform = function (cardlist, packname) {
        if (!packname)
            return cardlist;
        return cardlist.filter(function (card) {
            for (var y = 0; y < card.espansioni.length; y++) { // errore
                if (card.espansioni[y].nome == packname) {
                    return card.nome;
                }
            }
        });
    };
    EnvelopesFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'envelopesFilter'
        })
    ], EnvelopesFilterPipe);
    return EnvelopesFilterPipe;
}());



/***/ }),

/***/ "./src/app/errors.service.ts":
/*!***********************************!*\
  !*** ./src/app/errors.service.ts ***!
  \***********************************/
/*! exports provided: ErrorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorsService", function() { return ErrorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorsService = /** @class */ (function () {
    function ErrorsService() {
    }
    ErrorsService.prototype.handleError = function (error) {
        console.error(error);
        // if(error instanceof HttpErrorResponse){
        //   alert(`server error: ${error.message}`)
        // }else{
        //   alert(`errore sconosciuto: ${error.message}`)
        // }
    };
    ErrorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorsService);
    return ErrorsService;
}());



/***/ }),

/***/ "./src/app/field-error/field-error.component.css":
/*!*******************************************************!*\
  !*** ./src/app/field-error/field-error.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpZWxkLWVycm9yL2ZpZWxkLWVycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/field-error/field-error.component.html":
/*!********************************************************!*\
  !*** ./src/app/field-error/field-error.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"field.invalid && (field.touched || field.dirty) && field.errors\" class=\"text-danger\">\n  <div *ngIf=\"field.errors.required\">Campo obbligatorio</div>\n  <div *ngIf=\"field.errors.email\">E-mail errata</div>\n  <div *ngIf=\"field.errors.pattern\">Valore non conforme</div>\n</div>\n\n<div *ngFor=\"let msg of orderErrorMessages\" class=\"text-danger\">\n  {{ msg }}\n</div>\n"

/***/ }),

/***/ "./src/app/field-error/field-error.component.ts":
/*!******************************************************!*\
  !*** ./src/app/field-error/field-error.component.ts ***!
  \******************************************************/
/*! exports provided: FieldErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldErrorComponent", function() { return FieldErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var FieldErrorComponent = /** @class */ (function () {
    function FieldErrorComponent(auth) {
        this.auth = auth;
    }
    FieldErrorComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(FieldErrorComponent.prototype, "orderErrorMessages", {
        get: function () {
            if (this.auth.usersError && this.auth.usersError[this.fieldName] !== undefined) {
                return this.auth.usersError[this.fieldName];
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], FieldErrorComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], FieldErrorComponent.prototype, "fieldName", void 0);
    FieldErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-field-error',
            template: __webpack_require__(/*! ./field-error.component.html */ "./src/app/field-error/field-error.component.html"),
            styles: [__webpack_require__(/*! ./field-error.component.css */ "./src/app/field-error/field-error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], FieldErrorComponent);
    return FieldErrorComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bg-dark{\r\n  background-image: url('/assets/Wiki-background.jpg');\r\n  background-repeat: repeat;\r\n}\r\n\r\n#id-footer-row1{\r\n  text-align: center;\r\n}\r\n\r\n#id-footer-row2{\r\n  text-align: center;\r\n}\r\n\r\n#informazioni{\r\n  border-top: 4px solid #212121;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0RBQW9EO0VBQ3BELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiZy1kYXJre1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9XaWtpLWJhY2tncm91bmQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxufVxyXG5cclxuI2lkLWZvb3Rlci1yb3cxe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jaWQtZm9vdGVyLXJvdzJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jaW5mb3JtYXppb25pe1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"informazioni\">\n  <div id=\"bg-dark\" class=\"bg-dark text-white\">\n    <div class=\"row\" style=\"padding:2%\">\n      <div class=\"col-md-4\" style=\"text-align: left\">\n        <h6>Contatti: </h6>\n        Sede Legale: Lungo Po Antonelli 189 <br>\n        10153 - Torino (TO) <br><br>\n\n        Email: andrea.franco96@virgilio.it <br>\n        Telefono: +39 347 258 4574\n        <br><br>\n      </div>\n\n      <div class=\"col-md-4\" style=\"text-align: left\">\n        <h6>SiteMap: </h6>\n        <a routerLink=\"/home\">Home</a><br>\n        <a routerLink=\"/about\">About Nasa</a><br>\n        <a routerLink=\"/galleries\">Galleries</a><br>\n        <a routerLink=\"/missions\">Missions</a><br>\n        <a routerLink=\"/articleoftheday\">Article of the Day</a><br><br>\n      </div>\n\n      <div class=\"col-md-4\" style=\"text-align: left\">\n        <h6>YU-GI-HO deck management system<br>\n          Page Last Updated: May 16, 2019<br>\n          Page Editor: Andrea Franco <br>\n          </h6>\n        <br>\n        <h2 class=\"nasa-apply-font\"> Yu-Gi-Oh Traiding card game</h2>\n      </div>\n\n      <div class=\"col-md-12\" style=\"text-align: left\">\n        <hr style=\"border-color: white\">\n      </div>\n\n    </div>\n\n    <div class=\"row\" style=\"padding-left: 2%\">\n      <div class=\"col-md-4\" style=\"text-align: left\">\n        <a href=\"https://www.facebook.com\" target=\"_blank\"><i class=\"fa fa-facebook-square\" style=\"font-size:36px\"></i></a>\n        <a href=\"https://linkedin.com\" target=\"_blank\"><i class=\"fa fa-linkedin-square\" style=\"font-size:36px; margin-left: 15px\"></i></a>\n        <a href=\"https://twitter.com\" target=\"_blank\"><i class=\"fa fa-twitter-square\" style=\"font-size:36px; margin-left: 15px\"></i></a>\n      </div>\n\n      <div class=\"col-md-4\" style=\"text-align: left\">\n      </div>\n\n      <div class=\"col-md-4\" style=\"text-align: left\">\n      </div>\n    </div>\n\n    <div class=\"col-md-12\" style=\"text-align: left; padding-left: 2%; padding-bottom: 1%; font-size: 1em\">\n      Copyright © 2019 Krauser_Corporation srl. All rights reserved.\n    </div>\n  </div>\n</div> -->\n<div id=\"informazioni\">\n  <div id=\"bg-dark\" class=\"bg-dark text-white\">\n    <div id=\"id-footer-row1\" class=\"row-md\" style=\"padding: 10px\">\n      ©1996 KAZUKI TAKAHASHI <br>\n      ©2017 NAS・TV TOKYO\n    </div>\n    <div id=\"id-footer-row2\" class=\"row-md\" style=\"padding: 10px\">\n      ©2019 Konami Digital Entertainment &nbsp; | &nbsp; Powered by Krauser_Corporation &nbsp; | &nbsp; Contatti: andrea.franco@virgilio.it\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-description{\r\n  border-style: inset;\r\n  border-width: 5px;\r\n  border-top-color: darkred;\r\n  border-left-color: darkred;\r\n  border-right-color: darkred;\r\n  border-bottom-color: darkred;\r\n}\r\n\r\n#home-wallpaper{\r\n  border-bottom: 4px solid #212121;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n/*.container-fluid{\r\n  border-left: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n}*/\r\n\r\n.row{\r\n  background-image: url(\"/assets/Wiki-background.jpg\");\r\n  background-size: auto\r\n}\r\n\r\n.col-md{\r\n  text-align: center;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n  margin-right: 25px;\r\n  margin-left: 25px;\r\n  border-color: #ff9e00;\r\n  border-style: solid;\r\n  border-width: 10px;\r\n  background: rgba(0,0,0,1);\r\n  background: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 36%, rgba(105,63,0,1) 50%, rgba(105,63,0,1) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#693f00', GradientType=1 );\r\n}\r\n\r\n#par{\r\n  color: white;\r\n  margin-top: 70%;\r\n  margin-bottom: 70%;\r\n  text-align: center;\r\n}\r\n\r\n.menu-main{\r\n  min-height:400px;\r\n\tpadding:10px 10px 5px;\r\n\t/*border: 2px solid #212121;*/\r\n\tdisplay: block;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG9EQUFvRDtFQUNwRDtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFPekIsZ0lBQWdJO0VBQ2hJLG9IQUFvSDtBQUN0SDs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtDQUNqQixxQkFBcUI7Q0FDckIsNkJBQTZCO0NBQzdCLGNBQWM7Q0FDZCxzQkFBc0I7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lLWRlc2NyaXB0aW9ue1xyXG4gIGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogZGFya3JlZDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogZGFya3JlZDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6IGRhcmtyZWQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogZGFya3JlZDtcclxufVxyXG5cclxuI2hvbWUtd2FsbHBhcGVye1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyouY29udGFpbmVyLWZsdWlke1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59Ki9cclxuXHJcbi5yb3d7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9XaWtpLWJhY2tncm91bmQuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0b1xyXG59XHJcblxyXG4uY29sLW1ke1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmOWUwMDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDEpO1xyXG5cclxuICBiYWNrZ3JvdW5kOiAtbW96LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMCwwLDAsMSkgMCUsIHJnYmEoMCwwLDAsMSkgMzYlLCByZ2JhKDEwNSw2MywwLDEpIDUwJSwgcmdiYSgxMDUsNjMsMCwxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KHJhZGlhbCwgY2VudGVyIGNlbnRlciwgMHB4LCBjZW50ZXIgY2VudGVyLCAxMDAlLCBjb2xvci1zdG9wKDAlLCByZ2JhKDAsMCwwLDEpKSwgY29sb3Itc3RvcCgzNiUsIHJnYmEoMCwwLDAsMSkpLCBjb2xvci1zdG9wKDUwJSwgcmdiYSgxMDUsNjMsMCwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSgxMDUsNjMsMCwxKSkpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgwLDAsMCwxKSAwJSwgcmdiYSgwLDAsMCwxKSAzNiUsIHJnYmEoMTA1LDYzLDAsMSkgNTAlLCByZ2JhKDEwNSw2MywwLDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1vLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMCwwLDAsMSkgMCUsIHJnYmEoMCwwLDAsMSkgMzYlLCByZ2JhKDEwNSw2MywwLDEpIDUwJSwgcmdiYSgxMDUsNjMsMCwxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtbXMtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSBjb3ZlciwgcmdiYSgwLDAsMCwxKSAwJSwgcmdiYSgwLDAsMCwxKSAzNiUsIHJnYmEoMTA1LDYzLDAsMSkgNTAlLCByZ2JhKDEwNSw2MywwLDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgwLDAsMCwxKSAwJSwgcmdiYSgwLDAsMCwxKSAzNiUsIHJnYmEoMTA1LDYzLDAsMSkgNTAlLCByZ2JhKDEwNSw2MywwLDEpIDEwMCUpO1xyXG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjMDAwMDAwJywgZW5kQ29sb3JzdHI9JyM2OTNmMDAnLCBHcmFkaWVudFR5cGU9MSApO1xyXG59XHJcblxyXG4jcGFye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiA3MCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnUtbWFpbntcclxuICBtaW4taGVpZ2h0OjQwMHB4O1xyXG5cdHBhZGRpbmc6MTBweCAxMHB4IDVweDtcclxuXHQvKmJvcmRlcjogMnB4IHNvbGlkICMyMTIxMjE7Ki9cclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img id=\"home-wallpaper\" class=\"img-fluid\" [src]=\"'/assets/Yu Gi Oh Duel Monsters 224224 Latino MEGA   Identi.jpg'\" alt=\"yu-gi-ho_wallpaper\">\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md\" routerLinkActive=\"active\">\n      <a class=\"menu-main\" routerLink=\"/cardlist\">\n        <h4 class=\"nasa-apply-font\" id=\"par\">Card list</h4>\n      </a>\n    </div>\n    <div class=\"col-md\" routerLinkActive=\"active\">\n      <a class=\"menu-main\" routerLink=\"/recipes\">\n        <h4 class=\"nasa-apply-font\" id=\"par\">Ricette</h4>\n      </a>\n    </div>\n    <div class=\"col-md\" routerLinkActive=\"active\">\n      <a class=\"menu-main\" routerLink=\"/utility\">\n        <h4 class=\"nasa-apply-font\" id=\"par\">Utilità del duellante</h4>\n      </a>\n    </div>\n    <div class=\"col-md\" routerLinkActive=\"active\">\n      <a class=\"menu-main\" routerLink=\"/rulespage\">\n        <h4 class=\"nasa-apply-font\" id=\"par\">Le regole ufficiali</h4>\n      </a>\n    </div>\n  <div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/leggendary-cards/leggendary-cards.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/leggendary-cards/leggendary-cards.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlZ2dlbmRhcnktY2FyZHMvbGVnZ2VuZGFyeS1jYXJkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/leggendary-cards/leggendary-cards.component.html":
/*!******************************************************************!*\
  !*** ./src/app/leggendary-cards/leggendary-cards.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  leggendary-cards works!\n</p>\n"

/***/ }),

/***/ "./src/app/leggendary-cards/leggendary-cards.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/leggendary-cards/leggendary-cards.component.ts ***!
  \****************************************************************/
/*! exports provided: LeggendaryCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeggendaryCardsComponent", function() { return LeggendaryCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LeggendaryCardsComponent = /** @class */ (function () {
    function LeggendaryCardsComponent() {
    }
    LeggendaryCardsComponent.prototype.ngOnInit = function () {
    };
    LeggendaryCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leggendary-cards',
            template: __webpack_require__(/*! ./leggendary-cards.component.html */ "./src/app/leggendary-cards/leggendary-cards.component.html"),
            styles: [__webpack_require__(/*! ./leggendary-cards.component.css */ "./src/app/leggendary-cards/leggendary-cards.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeggendaryCardsComponent);
    return LeggendaryCardsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagetitle{\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n#registerform{\r\n  margin-top: 85px;\r\n  margin-bottom: 85px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2V0aXRsZXtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxuI3JlZ2lzdGVyZm9ybXtcclxuICBtYXJnaW4tdG9wOiA4NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDg1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf=\"error\">{{error}}</h4>\n<div class=\"container\">\n  <div class=\"pagetitle\">\n    <h1 style=\"font-family: yu-gi-ho;\">Pagina di login</h1>\n  </div>\n<form id=\"registerform\" (ngSubmit)=\"submit()\">\n  <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" name=\"username\" class=\"form-control\" [(ngModel)]=\"username\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"password\" />\n  </div>\n  <div class=\"form-group col-3\">\n    <button class=\"btn btn-primary\" type=\"submit\">Login</button>\n  </div>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.authservice.login(this.username, this.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (result) { return _this.router.navigate(['cardlist']); }, function (err) { return _this.error = 'Could not authenticate'; });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/loginpage/loginpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-row{\r\n  align: center;\r\n}\r\n\r\nimg{\r\n  width: 96px;\r\n  height: 140px;\r\n  margin: 5px;\r\n}\r\n\r\n.gruppo{\r\n  background-image: url(\"/assets/Wiki-background.jpg\");\r\n}\r\n\r\np{\r\n  color: white;\r\n}\r\n\r\nh6{\r\n  text-align: center;\r\n}\r\n\r\n.grid-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr;\r\n  grid-template-areas: \"img nome nome nome nome nome nome\" \"img attributo attributo livello tipo atk def\" \"img descrizione descrizione descrizione descrizione descrizione descrizione\" \"img pendeffect pendeffect blugem redgem qnt button\";\r\n}\r\n\r\n.img { grid-area: img; }\r\n\r\n.nome { grid-area: nome; }\r\n\r\n.attributo { grid-area: attributo; }\r\n\r\n.livello { grid-area: livello; }\r\n\r\n.tipo { grid-area: tipo; }\r\n\r\n.atk { grid-area: atk; }\r\n\r\n.def { grid-area: def; }\r\n\r\n.descrizione { grid-area: descrizione; }\r\n\r\n.pendeffect { grid-area: pendeffect; }\r\n\r\n.blugem { grid-area: blugem; }\r\n\r\n.redgem { grid-area: redgem; }\r\n\r\n.qnt { grid-area: qnt; }\r\n\r\n.button { grid-area: button; }\r\n\r\n#pagedescription{\r\n  margin-bottom: 30px;\r\n  box-sizing: border-box;\r\n  border: 6px solid #212121;\r\n  min-height:100px;\r\n\tpadding:30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5wYWdlL2xvZ2lucGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0RBQWtEO0VBQ2xELG1DQUFtQztFQUNuQywwT0FBME87QUFDNU87O0FBRUEsT0FBTyxjQUFjLEVBQUU7O0FBRXZCLFFBQVEsZUFBZSxFQUFFOztBQUV6QixhQUFhLG9CQUFvQixFQUFFOztBQUVuQyxXQUFXLGtCQUFrQixFQUFFOztBQUUvQixRQUFRLGVBQWUsRUFBRTs7QUFFekIsT0FBTyxjQUFjLEVBQUU7O0FBRXZCLE9BQU8sY0FBYyxFQUFFOztBQUV2QixlQUFlLHNCQUFzQixFQUFFOztBQUV2QyxjQUFjLHFCQUFxQixFQUFFOztBQUVyQyxVQUFVLGlCQUFpQixFQUFFOztBQUU3QixVQUFVLGlCQUFpQixFQUFFOztBQUU3QixPQUFPLGNBQWMsRUFBRTs7QUFFdkIsVUFBVSxpQkFBaUIsRUFBRTs7QUFFN0I7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixnQkFBZ0I7Q0FDakIsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvbG9naW5wYWdlL2xvZ2lucGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tcm93e1xyXG4gIGFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZ3tcclxuICB3aWR0aDogOTZweDtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uZ3J1cHBve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvV2lraS1iYWNrZ3JvdW5kLmpwZ1wiKTtcclxufVxyXG5cclxucHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmg2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1nIG5vbWUgbm9tZSBub21lIG5vbWUgbm9tZSBub21lXCIgXCJpbWcgYXR0cmlidXRvIGF0dHJpYnV0byBsaXZlbGxvIHRpcG8gYXRrIGRlZlwiIFwiaW1nIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lXCIgXCJpbWcgcGVuZGVmZmVjdCBwZW5kZWZmZWN0IGJsdWdlbSByZWRnZW0gcW50IGJ1dHRvblwiO1xyXG59XHJcblxyXG4uaW1nIHsgZ3JpZC1hcmVhOiBpbWc7IH1cclxuXHJcbi5ub21lIHsgZ3JpZC1hcmVhOiBub21lOyB9XHJcblxyXG4uYXR0cmlidXRvIHsgZ3JpZC1hcmVhOiBhdHRyaWJ1dG87IH1cclxuXHJcbi5saXZlbGxvIHsgZ3JpZC1hcmVhOiBsaXZlbGxvOyB9XHJcblxyXG4udGlwbyB7IGdyaWQtYXJlYTogdGlwbzsgfVxyXG5cclxuLmF0ayB7IGdyaWQtYXJlYTogYXRrOyB9XHJcblxyXG4uZGVmIHsgZ3JpZC1hcmVhOiBkZWY7IH1cclxuXHJcbi5kZXNjcml6aW9uZSB7IGdyaWQtYXJlYTogZGVzY3JpemlvbmU7IH1cclxuXHJcbi5wZW5kZWZmZWN0IHsgZ3JpZC1hcmVhOiBwZW5kZWZmZWN0OyB9XHJcblxyXG4uYmx1Z2VtIHsgZ3JpZC1hcmVhOiBibHVnZW07IH1cclxuXHJcbi5yZWRnZW0geyBncmlkLWFyZWE6IHJlZGdlbTsgfVxyXG5cclxuLnFudCB7IGdyaWQtYXJlYTogcW50OyB9XHJcblxyXG4uYnV0dG9uIHsgZ3JpZC1hcmVhOiBidXR0b247IH1cclxuXHJcbiNwYWdlZGVzY3JpcHRpb257XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkICMyMTIxMjE7XHJcbiAgbWluLWhlaWdodDoxMDBweDtcclxuXHRwYWRkaW5nOjMwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/loginpage/loginpage.component.html":
/*!****************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gruppo\">\n<div class=\"container\">\n  <div class=\"pagetitle\">\n    <h1 style=\"font-family: yu-gi-ho;\">La tua area personale</h1>\n  </div>\n  <div class=\"row\">\n    <div id=\"pagedescription\" class=\"col-sm\">\n      <b id=\"desc\"><font color=\"white\">Benvenuto nella tua area personale giovane duellante!, qui gestire il tuo deck personale e pubblicare la tua ricetta sul database nell' elenco di tutte le ricette degli  compilando il form sottostante (sempre che tu lo voglia ovviamente)</font></b>\n    </div>\n  </div>\n      <div class=\"row\">\n        <div class=\"col\" >\n          <div *ngFor=\"let card of carte.dati_carte_utente.cards; let i = index\" class=\"grid-container\">\n            <h6 *ngIf=\"card.type == 'main'\"><font color=\"yellow\"> MAIN DECK </font></h6>\n            <h6 *ngIf=\"card.type == 'extra'\"><font color=\"blue\"> EXTRA DECK </font></h6>\n            <h6 *ngIf=\"card.type == 'side'\"><font color=\"darkgreen\"> SIDE DECK </font></h6>\n            <div class=\"nome\"><font color=\"white\">NOME: {{ card.nome }}</font></div>\n            <div class=\"attributo\"><font color=\"white\">ATTRIBUTO: {{ card.attributo }}</font></div>\n            <div class=\"livello\"><font color=\"white\">LV:{{ card.livello }}</font></div>\n            <div class=\"tipo\"><font color=\"white\">{{ card.tipo }}</font></div>\n            <div class=\"atk\" *ngIf=\"card.attacco != 22222 && card.attacco != 10000\"><font color=\"white\">ATK: {{ card.attacco }}</font></div>\n            <div class=\"atk\" *ngIf=\"card.attacco == 22222\"><font color=\"white\">ATK: ????</font></div>\n            <div class=\"atk\" *ngIf=\"card.attacco == 10000\"><font color=\"white\">ATK: X000</font></div>\n            <div class=\"def\" *ngIf=\"card.difesa != 22222 && card.attacco != 10000\"><font color=\"white\">DEF: {{ card.difesa }}</font></div>\n            <div class=\"def\" *ngIf=\"card.difesa == 22222\"><font color=\"white\">DEF: ????</font></div>\n            <div class=\"def\" *ngIf=\"card.difesa == 10000\"><font color=\"white\">DEF: X000</font></div>\n            <div class=\"descrizione\"><font color=\"white\">{{ card.descrizione }}</font></div>\n            <div class=\"blugem\"><font color=\"white\">{{ card.blugem }}</font></div>\n            <div class=\"redgem\"><font color=\"white\">{{ card.redgem }}</font></div>\n            <div class=\"img\" align=\"center\"><img src=\"{{ card.img }}\"></div>\n            <div class=\"pendeffect\"><font color=\"white\">{{ card.pendeffect }}</font></div>\n            <div class=\"qnt\"><font color=\"white\">QNT: {{ card.qnt }}</font></div>\n            <div class=\"button\"><button type=\"button\" name=\"card\" (click)=\"delete(card,i);\">REM</button></div>\n          </div>\n          <br><br>\n        </div>\n      </div>\n</div>\n\n\n<div class=\"container\">\n  <div class=\"form-row\">\n      <div id=\"userdata\" class=\"form-group col-md-6\">\n        <h3><font color=\"white\">I tuoi dati personali</font></h3>\n        <font color=\"white\">Nome:</font> <input type=\"text\" [(ngModel)]=\"name\" class=\"form-control\">\n        <font color=\"white\">Cognome:</font> <input type=\"text\" [(ngModel)]=\"surname\" class=\"form-control\">\n        <font color=\"white\">Email:</font> <input type=\"text\" [(ngModel)]=\"email\" class=\"form-control\">\n      </div>\n\n<div id=\"formric\" class=\"form-group col-md-6\">\n  <h3><font color=\"white\">Publica la tua ricetta sul nostro database</font></h3>\n  <font color=\"white\">Nome ricetta:</font><input  #nomericetta placeholder=\"nome ricetta\" class=\"form-control\">\n  <font color=\"white\">descrizione:</font><input  #descrizione placeholder=\"descrizione\" class=\"form-control\">\n  <button class=\"btn btn-primary\" (click)=\"datarecipe.Addrecipes(nomericetta.value, descrizione.value); nomericetta.value=''; descrizione.value=''\">\n    Pubblica ricetta\n  </button>\n</div>\n      </div>\n    </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/loginpage/loginpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.ts ***!
  \**************************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dati_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dati.service */ "./src/app/dati.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../recipes.service */ "./src/app/recipes.service.ts");





var LoginpageComponent = /** @class */ (function () {
    function LoginpageComponent(carte, utente, datarecipe) {
        this.carte = carte;
        this.utente = utente;
        this.datarecipe = datarecipe;
        this.val = null;
        this.name = this.utente.UserLoggedName;
        this.surname = this.utente.UserLoggedCognome;
        this.email = this.utente.UserLoggedEmail;
    }
    LoginpageComponent.prototype.ngOnInit = function () {
        this.carte.CardsLoggedUser();
    };
    LoginpageComponent.prototype.delete = function (card, ind) {
        this.carte.deleteCardfromdeck(card, ind);
    };
    LoginpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loginpage',
            template: __webpack_require__(/*! ./loginpage.component.html */ "./src/app/loginpage/loginpage.component.html"),
            styles: [__webpack_require__(/*! ./loginpage.component.css */ "./src/app/loginpage/loginpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dati_service__WEBPACK_IMPORTED_MODULE_2__["DatiService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _recipes_service__WEBPACK_IMPORTED_MODULE_4__["RecipesService"]])
    ], LoginpageComponent);
    return LoginpageComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nav1{\r\n  background-image: url('/assets/Wiki-background.jpg');\r\n  background-repeat: repeat-x;\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0RBQW9EO0VBQ3BELDJCQUEyQjtFQUMzQixnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2MXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvV2lraS1iYWNrZ3JvdW5kLmpwZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"nav1\" class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" routerLink=\"/home\">\r\n    <h6 class=\"nasa-apply-font\" style=\"padding-left:10px\">Yu-Gi-Oh Deck management system</h6>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/cardlist\">Card list</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!auth.loggedIn\">\r\n        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!auth.loggedIn\">\r\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn\">\r\n        <a class=\"nav-link\" routerLink=\"/loginpage\">Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"auth.loggedIn && auth.adminControl\">\r\n        <a class=\"nav-link\" routerLink=\"/adminpage\">Administration</a>\r\n      </li>\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/recipes\">Ricette degli utenti</a>\r\n      </li>\r\n      <a class=\"nav-link\" (click)=\"logout()\" href=\"#\" *ngIf=\"auth.loggedIn\">Logout</a>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavbarComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['login']);
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/otherfilter.pipe.ts":
/*!*************************************!*\
  !*** ./src/app/otherfilter.pipe.ts ***!
  \*************************************/
/*! exports provided: OtherfilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherfilterPipe", function() { return OtherfilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OtherfilterPipe = /** @class */ (function () {
    function OtherfilterPipe() {
    }
    OtherfilterPipe.prototype.transform = function (value, args) {
        return null;
    };
    OtherfilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'otherfilter'
        })
    ], OtherfilterPipe);
    return OtherfilterPipe;
}());



/***/ }),

/***/ "./src/app/recipes-list/recipes-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/recipes-list/recipes-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n  margin-top: 30px;\r\n}\r\n.gruppo2{\r\n  background-image: url(\"/assets/Wiki-background.jpg\");\r\n}\r\n#pagedescription{\r\n  box-sizing: border-box;\r\n  border: 6px solid #212121;\r\n  min-height:100px;\r\n\tpadding:30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy1saXN0L3JlY2lwZXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0NBQ2pCLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMtbGlzdC9yZWNpcGVzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmdydXBwbzJ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9XaWtpLWJhY2tncm91bmQuanBnXCIpO1xyXG59XHJcbiNwYWdlZGVzY3JpcHRpb257XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDZweCBzb2xpZCAjMjEyMTIxO1xyXG4gIG1pbi1oZWlnaHQ6MTAwcHg7XHJcblx0cGFkZGluZzozMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/recipes-list/recipes-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/recipes-list/recipes-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gruppo2\">\r\n  <div class=\"container\">\r\n    <div class=\"pagetitle\">\r\n      <h1 style=\"font-family: yu-gi-ho;\">Ricette degli utenti</h1>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div id=\"pagedescription\" class=\"col-sm\">\r\n        <b id=\"desc\"><font color=\"white\">In questa pagina sono presenti tutte le Ricette dei Deck pubblicate dagli utenti, puoi usarle come riferimento per migliorare nei duelli. <br>\r\n        Hai la possibilità di vedere i dettagli di ogni ricetta cliccando sul pulsante \"Deck View\". <br> Se una ricetta è di tua proprietà\r\n        puoi anche decidere se eliminarla o meno.</font></b>\r\n      </div>\r\n    </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <table class=\"table table-sm table-dark\">\r\n            <tr id=\"tabletitle\">\r\n              <td><b>Cod</b></td>\r\n              <td><b>Nome</b></td>\r\n              <td><b>Descrizione</b></td>\r\n              <td><b>Dettagli ricetta</b></td>\r\n              <td><b>cancella</b></td>\r\n            </tr>\r\n            <tr *ngFor=\"let recipe of datarecipe.allric.recipes; let i = index;\">\r\n              <td>{{ recipe.idric }}</td>\r\n              <td>{{ recipe.nomeric }}</td>\r\n              <td>{{ recipe.desc }}</td>\r\n              <td> <button type=\"button\" name=\"recipedetailbutton\" (click)=\"showRecipeDetail(recipe)\">Deck View</button> </td>\r\n              <td>\r\n                <div *ngFor=\"let item of datarecipe.recipesid.recipes\">\r\n                  <button *ngIf=\"item.idric == recipe.idric\" type=\"button\" name=\"recipedetailbuttons\" (click)=\"deleterec(recipe.idric,i)\">DELETE</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n          <br><br>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/recipes-list/recipes-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/recipes-list/recipes-list.component.ts ***!
  \********************************************************/
/*! exports provided: RecipesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesListComponent", function() { return RecipesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipes.service */ "./src/app/recipes.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RecipesListComponent = /** @class */ (function () {
    function RecipesListComponent(datarecipe, route, router) {
        this.datarecipe = datarecipe;
        this.route = route;
        this.router = router;
    }
    RecipesListComponent.prototype.ngOnInit = function () {
        this.datarecipe.Getallallrecipes();
        this.datarecipe.Getrecipesidofuser();
    };
    RecipesListComponent.prototype.showRecipeDetail = function (recipe) {
        this.datarecipe.single_recipe = recipe;
        this.route.navigate(['recipess', this.datarecipe.single_recipe.idric]);
    };
    RecipesListComponent.prototype.deleterec = function (id, ind) {
        this.datarecipe.DeleteRecipe(id, ind);
    };
    RecipesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipes-list',
            template: __webpack_require__(/*! ./recipes-list.component.html */ "./src/app/recipes-list/recipes-list.component.html"),
            styles: [__webpack_require__(/*! ./recipes-list.component.css */ "./src/app/recipes-list/recipes-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RecipesListComponent);
    return RecipesListComponent;
}());



/***/ }),

/***/ "./src/app/recipes.service.ts":
/*!************************************!*\
  !*** ./src/app/recipes.service.ts ***!
  \************************************/
/*! exports provided: RecipesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesService", function() { return RecipesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var RecipesService = /** @class */ (function () {
    function RecipesService(http, utente) {
        this.http = http;
        this.utente = utente;
        this.singleric = [];
        /*maindeck: Array<Cards> = [];
        extradeck: Array<Cards> = [];
        sidedeck: Array<Cards> = [];*/
        this.allric = [];
        this.all_comment = [];
        this.all_comment_ids = [];
        this.recipesid = [];
    }
    RecipesService.prototype.Addrecipes = function (name, desc) {
        name = name.trim();
        desc = desc.trim();
        if (!name) {
            return;
        }
        if (!desc) {
            return;
        }
        var url = "http://localhost:8000/ricetta/user/" + localStorage.getItem("token_decoded_userid");
        var recipe = {};
        recipe["nomeric"] = name;
        recipe["desc"] = desc;
        this.http.post(url, recipe).subscribe(function (data) {
            alert(data.status);
        });
    };
    RecipesService.prototype.Getrecipe = function (id) {
        var _this = this;
        var url = "http://localhost:8000/ricetta/" + id;
        this.http.get(url).subscribe(function (data) {
            _this.singleric = data;
        });
        return this.singleric;
    };
    /*organizzed_ARRAYS(){
      for(let card of this.singleric["cards"]){
        if(card.type == 'main'){
          this.maindeck.push(card);
        }else if(card.type == 'extra'){
          this.extradeck.push(card);
        }else if(card.type == 'side'){
          this.sidedeck.push(card);
        }
      }
      console.log(this.maindeck[0]);
      console.log(this.extradeck[0]);
      console.log(this.sidedeck[0]);
    }*/
    RecipesService.prototype.Getallallrecipes = function () {
        var _this = this;
        var url = "http://localhost:8000/recipes";
        this.http.get(url).subscribe(function (data) {
            _this.allric = data;
        });
        return this.allric;
    };
    RecipesService.prototype.Getrecipesidofuser = function () {
        var _this = this;
        var url = "http://localhost:8000/recipes/" + localStorage.getItem("token_decoded_userid") + "/user";
        this.http.get(url).subscribe(function (data) {
            _this.recipesid = data;
        });
        //console.log(this.recipesid['recipes'][0].idric);
        //console.log(this.recipesid['recipes'].length);
    };
    RecipesService.prototype.ControllRecipe = function (id) {
        for (var i = 0; i <= this.recipesid['recipes'].length; i++) {
            if (this.recipesid['recipes'][i].idric == id) {
                return id;
            }
            else {
                return null;
            }
        }
    };
    RecipesService.prototype.Addcomment = function (id, desc) {
        var _this = this;
        var url = "http://localhost:8000/comments/user/" + localStorage.getItem("token_decoded_userid") + "/ricetta/" + id;
        var comment = {};
        var list_id = {};
        comment["desc"] = desc;
        this.http.post(url, comment).subscribe(function (data) {
            console.info(data);
            comment["id_com"] = data.id;
            comment["nome"] = _this.utente.UserLoggedName;
            comment["cognome"] = _this.utente.UserLoggedCognome;
            list_id["id_com"] = data.id;
        });
        this.all_comment_ids["comments"].push(list_id);
        this.all_comment["comments"].push(comment);
        alert("commento pubblicato!");
    };
    RecipesService.prototype.Getrecipescomments = function (id) {
        var _this = this;
        var url = "http://localhost:8000/comments/recipe/" + id;
        this.http.get(url).subscribe(function (data) {
            _this.all_comment = data;
        });
    };
    RecipesService.prototype.Getrecipescommentsids = function (id, iduser) {
        var _this = this;
        var url = "http://localhost:8000/comments/recipe/" + id + "/user/" + iduser;
        this.http.get(url).subscribe(function (data) {
            _this.all_comment_ids = data;
        });
    };
    RecipesService.prototype.DeleteRecipe = function (idrecipe, index) {
        this.allric["recipes"].splice(index, 1);
        var url = "http://localhost:8000/recipe/" + idrecipe;
        this.http.delete(url).subscribe(function (data) {
            console.log(data);
        });
    };
    RecipesService.prototype.DeleteComment = function (idcomment, index) {
        this.all_comment["comments"].splice(index, 1);
        var url = "http://localhost:8000/comment/" + idcomment;
        this.http.delete(url).subscribe(function (data) {
            console.log(data);
        });
    };
    RecipesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RecipesService);
    return RecipesService;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#registerform{\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.pagetitle{\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n#pagedescription{\r\n  box-sizing: border-box;\r\n  border: 4px solid #212121;\r\n  margin-bottom: 40px;\r\n  min-height:100px;\r\n\tpadding:30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakIsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNyZWdpc3RlcmZvcm17XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4ucGFnZXRpdGxle1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG4jcGFnZWRlc2NyaXB0aW9ue1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgIzIxMjEyMTtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1pbi1oZWlnaHQ6MTAwcHg7XHJcblx0cGFkZGluZzozMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 *ngIf=\"authservice.usersError\" > Questa email è stata gia usata</h4>\n<div class=\"container\">\n<div class=\"pagetitle\">\n  <h1 style=\"font-family: yu-gi-ho;\">Pagina di registrazione</h1>\n</div>\n<form id=\"registerform\" [formGroup]=\"form\" novalidate>\n  <div class=\"form-row\">\n    <div class=\"form-group col-md-6\">\n      <label for=\"inputEmail4\">Email</label>\n      <input formControlName=\"email\" type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n      <app-field-error [field]=\"form.controls.email\" fieldName=\"email\"></app-field-error>\n    </div>\n    <div class=\"form-group col-md-6\">\n      <label for=\"inputPassword4\">Password</label>\n      <input formControlName=\"pass\" type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n      <app-field-error [field]=\"form.controls.pass\" fieldName=\"pass\"></app-field-error>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputAddress\">FirstName</label>\n    <input formControlName=\"firstname\" type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"firstname\">\n    <app-field-error [field]=\"form.controls.firstname\" fieldName=\"firstname\"></app-field-error>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"inputAddress2\">Lastname</label>\n    <input formControlName=\"lastname\" type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"lastname\">\n    <app-field-error [field]=\"form.controls.lastname\" fieldName=\"lastname\"></app-field-error>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\n      <label class=\"form-check-label\" for=\"gridCheck\">\n        Check me out\n      </label>\n    </div>\n  </div>\n  <button *ngIf=\"form.valid\" type=\"submit\" class=\"btn btn-primary\" (click)=\"authservice.registeruser()\">Sign in</button>\n  <div *ngIf=\"authservice.usersData\" class=\"alert alert-success m4\" role=\"alert\">\n    Utente registrato con successo <br>\n  </div>\n</form>\n\n  <div id=\"pagedescription\" class=\"col-sm\">\n    <b >Registratevi per sfruttare le funzionalità dell' applicazione e potrete:</b>\n    <li>\n      gestire il vostro deck aggiungendo e rimuovendo le carte.\n    </li>\n    <li>\n      pubblicare e rimuovere la vostre ricette\n    </li>\n    <li>\n      commentare e recensire le ricette degli altrui\n    </li>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authservice) {
        this.authservice = authservice;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.authservice.inputnome, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.authservice.inputcognome, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.authservice.inputemail, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.authservice.inputpass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.form.valueChanges.subscribe(function () {
            _this.authservice.inputnome = _this.form.value.firstname;
            _this.authservice.inputcognome = _this.form.value.lastname;
            _this.authservice.inputemail = _this.form.value.email;
            _this.authservice.inputpass = _this.form.value.pass;
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/rulespage/rulespage.component.css":
/*!***************************************************!*\
  !*** ./src/app/rulespage/rulespage.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#options{\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.pagetitle{\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.sfondo{\r\n  background-image: url(\"/assets/vrains_background.png\");\r\n  background-size: 100%\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcnVsZXNwYWdlL3J1bGVzcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNEQUFzRDtFQUN0RDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcnVsZXNwYWdlL3J1bGVzcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI29wdGlvbnN7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ucGFnZXRpdGxle1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG4uc2ZvbmRve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdnJhaW5zX2JhY2tncm91bmQucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/rulespage/rulespage.component.html":
/*!****************************************************!*\
  !*** ./src/app/rulespage/rulespage.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n  <label>PDF src</label>\n  <input type=\"text\" placeholder=\"PDF src\" [(ngModel)]=\"pdfSrc\">\n</div>\n<pdf-viewer [src]=\"pdfSrc\" [render-text]=\"true\" style=\"display: block;\">\n</pdf-viewer> -->\n<div class=\"sfondo\">\n<div class=\"container\">\n  <div class=\"pagetitle\">\n    <h1 style=\"font-family: yu-gi-ho;\">Libro delle regole ufficiali</h1>\n  </div>\n    <div id=\"options\" class=\"row justify-content-center\">\n      <div id=\"indietro\" class=\"col-md-1\">\n        <button class=\"btn btn-primary\" type=\"submit\" (click)=\"Decrementpage(pagenumber)\"> indietro </button>\n      </div>\n      <div id=\"avanti\" class=\"col-md-1\">\n        <button  class=\"btn btn-primary\" type=\"submit\" (click)=\"Incrementpage(pagenumber)\"> avanti</button>\n      </div>\n      <div id=\"pag\" class=\"col-md-2\">\n        <font color=\"white\">Pagina:</font><input value=\"Vai alla pagina\" class=\"form-control\" [(ngModel)]=\"pagenumber\" type=\"Text\">\n      </div>\n    </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <pdf-viewer [src]=\"pdfSrc\"\n        [render-text]=\"true\"\n        [page]=\"pagenumber\"\n        [original-size]=\"false\"\n        [zoom]=\"0.5\"\n        [show-all]=\"false\"\n        style=\"display: block;\">\n      </pdf-viewer>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/rulespage/rulespage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/rulespage/rulespage.component.ts ***!
  \**************************************************/
/*! exports provided: RulespageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulespageComponent", function() { return RulespageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RulespageComponent = /** @class */ (function () {
    function RulespageComponent() {
        this.pdfSrc = '/assets/Rulebook_v9_it.pdf';
        this.pagenumber = 1;
    }
    RulespageComponent.prototype.ngOnInit = function () {
    };
    RulespageComponent.prototype.Incrementpage = function (e) {
        if (this.pagenumber >= 1) {
            this.pagenumber++;
        }
    };
    RulespageComponent.prototype.Decrementpage = function (e) {
        if (this.pagenumber == 1) {
            this.pagenumber = 1;
        }
        else {
            this.pagenumber--;
        }
    };
    RulespageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rulespage',
            template: __webpack_require__(/*! ./rulespage.component.html */ "./src/app/rulespage/rulespage.component.html"),
            styles: [__webpack_require__(/*! ./rulespage.component.css */ "./src/app/rulespage/rulespage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RulespageComponent);
    return RulespageComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    Allcards: "http://localhost:8000/allcards"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\utente1\Desktop\I_MIEI_PROGETTI\Yu-gi-ho-web-app\Yu-gi-ho-app\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map