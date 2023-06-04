(self["webpackChunkyu_gi_ho_app"] = self["webpackChunkyu_gi_ho_app"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 2695:
/*!**************************************************!*\
  !*** ./src/app/adminpage/adminpage.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminpageComponent": function() { return /* binding */ AdminpageComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ 6321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _dati_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dati.service */ 4173);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _field_error_field_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../field-error/field-error.component */ 3412);








function AdminpageComponent_form_19_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "DARK");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "DIVINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "EARTH");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "FIRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "LIGHT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "WATER");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "WIND");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "SPELL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "TRAP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Livello");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "11");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "12");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "app-field-error", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r12.form_carte.controls.livello);
} }
function AdminpageComponent_form_19_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "ATK");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-field-error", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r13.form_carte.controls.ATK);
} }
function AdminpageComponent_form_19_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "DEF");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-field-error", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r14.form_carte.controls.DEF);
} }
function AdminpageComponent_form_19_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Acqua");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Bestia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Guerriero-Bestia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Fata");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Macchina");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Incantatore");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Serpente-Marino");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Tuono");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Insetto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Psichico");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Zombie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Dinosauro");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Bestia Alata");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Divinit\u00E0-Bestia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Pianta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Roccia");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Guerriero");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Pesce");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Rettile");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Pyro");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Drago");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Demone");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Cyberverso");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Trappola Normale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Trappola Continua");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Contro Trappola");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Magia Normale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Magia Continua");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Magia Rapida");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Magia Terreno");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Magia Rituale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_option_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Magia Equipaggiamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_div_82_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tipo carta Mostro:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminpageComponent_form_19_div_82_Template_input_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r53.tipomostro = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Xyz");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminpageComponent_form_19_div_82_Template_input_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r55.tipomostro = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Fusione");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminpageComponent_form_19_div_82_Template_input_click_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r56.tipomostro = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Synchro");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminpageComponent_form_19_div_82_Template_input_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r57.tipomostro = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Rituale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminpageComponent_form_19_div_82_Template_input_click_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r54); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r58.tipomostro = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_div_83_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tipo effetto mostro:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Effetto");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 149, 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminpageComponent_form_19_div_83_Template_input_change_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](9); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r68.effetto = _r59.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Normale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 149, 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminpageComponent_form_19_div_83_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](14); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r70.normale = _r60.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Gemelli");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 149, 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminpageComponent_form_19_div_83_Template_input_change_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r71.gemelli = _r61.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Tuner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 149, 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminpageComponent_form_19_div_83_Template_input_change_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](24); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r72.tuner = _r62.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Union");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "input", 149, 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminpageComponent_form_19_div_83_Template_input_change_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r73.union = _r63.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Spirit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 149, 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminpageComponent_form_19_div_83_Template_input_change_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](34); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r74.spirit = _r64.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Toon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "input", 149, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminpageComponent_form_19_div_83_Template_input_change_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](39); const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r75.toon = _r65.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Pendulum");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "input", 149, 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminpageComponent_form_19_div_83_Template_input_change_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](44); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r76.pendulum = _r66.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "font", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Cyberse");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "input", 149, 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AdminpageComponent_form_19_div_83_Template_input_change_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r69); const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](49); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r77.cyberse = _r67.checked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Gemme blu (pendulum cards)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-field-error", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r49.form_carte.controls.gemmeblu);
} }
function AdminpageComponent_form_19_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Gemme rosse (pendulum cards)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-field-error", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r50.form_carte.controls.gemmerosse);
} }
function AdminpageComponent_form_19_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Effetto pendulum (pendulum cards)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-field-error", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r51.form_carte.controls.pendulumeffect);
} }
function AdminpageComponent_form_19_button_94_Template(rf, ctx) { if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminpageComponent_form_19_button_94_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r79); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); ctx_r78.uploader.uploadAll(); ctx_r78.dati.AddCardToList(); return ctx_r78.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Upload data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AdminpageComponent_form_19_Template(rf, ctx) { if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Codice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-field-error", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "app-field-error", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Attributo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AdminpageComponent_form_19_option_19_Template, 2, 0, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AdminpageComponent_form_19_option_20_Template, 2, 0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, AdminpageComponent_form_19_option_21_Template, 2, 0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AdminpageComponent_form_19_option_22_Template, 2, 0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, AdminpageComponent_form_19_option_23_Template, 2, 0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, AdminpageComponent_form_19_option_24_Template, 2, 0, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, AdminpageComponent_form_19_option_25_Template, 2, 0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AdminpageComponent_form_19_option_26_Template, 2, 0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, AdminpageComponent_form_19_option_27_Template, 2, 0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "app-field-error", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, AdminpageComponent_form_19_div_29_Template, 30, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Numero");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "app-field-error", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Descrizione");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "app-field-error", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, AdminpageComponent_form_19_div_42_Template, 6, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, AdminpageComponent_form_19_div_43_Template, 6, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminpageComponent_form_19_Template_select_click_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r81); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r80.dati.inputtipo = $event.target.value; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, AdminpageComponent_form_19_option_49_Template, 2, 0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, AdminpageComponent_form_19_option_50_Template, 2, 0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, AdminpageComponent_form_19_option_51_Template, 2, 0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, AdminpageComponent_form_19_option_52_Template, 2, 0, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, AdminpageComponent_form_19_option_53_Template, 2, 0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, AdminpageComponent_form_19_option_54_Template, 2, 0, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, AdminpageComponent_form_19_option_55_Template, 2, 0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, AdminpageComponent_form_19_option_56_Template, 2, 0, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, AdminpageComponent_form_19_option_57_Template, 2, 0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, AdminpageComponent_form_19_option_58_Template, 2, 0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, AdminpageComponent_form_19_option_59_Template, 2, 0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, AdminpageComponent_form_19_option_60_Template, 2, 0, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, AdminpageComponent_form_19_option_61_Template, 2, 0, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, AdminpageComponent_form_19_option_62_Template, 2, 0, "option", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, AdminpageComponent_form_19_option_63_Template, 2, 0, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, AdminpageComponent_form_19_option_64_Template, 2, 0, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](65, AdminpageComponent_form_19_option_65_Template, 2, 0, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, AdminpageComponent_form_19_option_66_Template, 2, 0, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, AdminpageComponent_form_19_option_67_Template, 2, 0, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, AdminpageComponent_form_19_option_68_Template, 2, 0, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, AdminpageComponent_form_19_option_69_Template, 2, 0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](70, AdminpageComponent_form_19_option_70_Template, 2, 0, "option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, AdminpageComponent_form_19_option_71_Template, 2, 0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, AdminpageComponent_form_19_option_72_Template, 2, 0, "option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, AdminpageComponent_form_19_option_73_Template, 2, 0, "option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](74, AdminpageComponent_form_19_option_74_Template, 2, 0, "option", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, AdminpageComponent_form_19_option_75_Template, 2, 0, "option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](76, AdminpageComponent_form_19_option_76_Template, 2, 0, "option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](77, AdminpageComponent_form_19_option_77_Template, 2, 0, "option", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, AdminpageComponent_form_19_option_78_Template, 2, 0, "option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, AdminpageComponent_form_19_option_79_Template, 2, 0, "option", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](80, AdminpageComponent_form_19_option_80_Template, 2, 0, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "app-field-error", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](82, AdminpageComponent_form_19_div_82_Template, 25, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](83, AdminpageComponent_form_19_div_83_Template, 50, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](84, AdminpageComponent_form_19_div_84_Template, 6, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, AdminpageComponent_form_19_div_85_Template, 6, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, AdminpageComponent_form_19_div_86_Template, 6, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "font", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Immagine carta");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "input", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "app-field-error", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, AdminpageComponent_form_19_button_94_Template, 2, 0, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.form_carte);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r0.form_carte.controls.codice);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r0.form_carte.controls.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MAGIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "TRAPPOLA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r0.form_carte.controls.attributo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r0.form_carte.controls.numero);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r0.form_carte.controls.descrizione);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "TRAPPOLA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "TRAPPOLA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "TRAPPOLA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MAGIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MAGIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MAGIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MAGIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MAGIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MAGIA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r0.form_carte.controls.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.tipocarta == "MOSTRO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("uploader", ctx_r0.uploader);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx_r0.form_carte.controls.linkimmagine);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.form_carte.valid);
} }
function AdminpageComponent_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const envelopes_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", envelopes_r82.envid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](envelopes_r82.nome);
} }
function AdminpageComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminpageComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r84); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r83.dati.AddCardToEnvelope(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Aggiungi");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const UploadURL = 'http://localhost:8000/api/upload';
class AdminpageComponent {
    constructor(dati) {
        this.dati = dati;
        this.title = 'Upload a File';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__.FileUploader({ url: UploadURL, itemAlias: 'photo' });
    }
    ngOnInit() {
        this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
        this.uploader.onCompleteItem = (item, response, status, headers) => {
            console.log('FileUpload:uploaded:', item, status, response);
        };
        // form aggiunta carta
        this.form_carte = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            codice: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputcod, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputnome, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            attributo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputattributo, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            livello: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputlivello),
            numero: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputnumero, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputdescrizione, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            ATK: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputattacco),
            DEF: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputdifesa),
            tipo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputtipo, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            extra: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.tipomostro),
            gemmeblu: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputblugem),
            gemmerosse: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputredgem),
            pendulumeffect: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputpendeffect),
            linkimmagine: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputimg, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        });
        this.form_carte.valueChanges.subscribe(() => {
            this.dati.inputcod = this.form_carte.value.codice;
            this.dati.inputnome = this.form_carte.value.nome;
            this.dati.inputattributo = this.form_carte.value.attributo;
            this.dati.inputlivello = this.form_carte.value.livello;
            this.dati.inputnumero = this.form_carte.value.numero;
            this.dati.inputdescrizione = this.form_carte.value.descrizione;
            this.dati.inputattacco = this.form_carte.value.ATK;
            this.dati.inputdifesa = this.form_carte.value.DEF;
            if (!(this.form_carte.value.extra)) {
                this.form_carte.value.extra = "";
            }
            this.dati.inputtipo = this.form_carte.value.tipo + this.form_carte.value.extra;
            if (this.effetto) {
                this.dati.inputtipo += "Effetto/";
            }
            if (this.gemelli) {
                this.dati.inputtipo += "Gemelli/";
            }
            if (this.tuner) {
                this.dati.inputtipo += "Tuner/";
            }
            if (this.union) {
                this.dati.inputtipo += "Union/";
            }
            if (this.spirit) {
                this.dati.inputtipo += "Spirit/";
            }
            if (this.toon) {
                this.dati.inputtipo += "Toon/";
            }
            if (this.pendulum) {
                this.dati.inputtipo += "Pendulum/";
            }
            if (this.cyberse) {
                this.dati.inputtipo += "Cyberse/";
            }
            if (this.normale) {
                this.dati.inputtipo += "Normale/";
            }
            this.dati.inputblugem = this.form_carte.value.gemmeblu;
            this.dati.inputredgem = this.form_carte.value.gemmerosse;
            this.dati.inputpendeffect = this.form_carte.value.pendulumeffect;
            if (this.form_carte.value.linkimmagine != null) {
                this.filename = "http://localhost:8000/" + this.form_carte.value.linkimmagine.substring(12);
                this.dati.inputimg = this.filename;
            }
        });
        // form aggiunta carte in busta
        this.dati.ListofEnvelopes();
        this.form_carte_buste = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            codcard: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputcodcard, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            codespansione: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputcodenvelope, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
        });
        this.form_carte_buste.valueChanges.subscribe(() => {
            this.dati.inputcodcard = this.form_carte_buste.value.codcard;
            this.dati.inputcodenvelope = this.form_carte_buste.value.codespansione;
        });
        // form aggiunta nuova cod_espansione
        this.form_buste = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            nomebusta: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputenvelopename, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            anno: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(this.dati.inputenvelopeyear, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
        });
        this.form_buste.valueChanges.subscribe(() => {
            this.dati.inputenvelopename = this.form_buste.value.nomebusta;
            this.dati.inputenvelopeyear = this.form_buste.value.anno;
        });
    }
    reset() {
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
    }
    setcardtype(e) {
        this.tipocarta = e;
        console.log(e);
    }
}
AdminpageComponent.ɵfac = function AdminpageComponent_Factory(t) { return new (t || AdminpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dati_service__WEBPACK_IMPORTED_MODULE_0__.DatiService)); };
AdminpageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminpageComponent, selectors: [["app-adminpage"]], decls: 49, vars: 6, consts: [[1, "group"], [1, "container"], [1, "pagetitle"], [2, "font-family", "yu-gi-ho"], ["color", "blue"], [1, "form-row"], ["id", "formchoice"], ["id", "formchoice", 1, "form-group", "col-md-3"], ["type", "text", 1, "form-control", 3, "click"], ["selected", ""], ["value", "MOSTRO"], ["value", "MAGIA"], ["value", "TRAPPOLA"], ["novalidate", "", 3, "formGroup", 4, "ngIf"], ["id", "cardintoenvelope", 1, "form-row"], ["novalidate", "", 3, "formGroup"], [1, "form-group", "col-md"], ["formControlName", "codcard", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "codespansione", "type", "number", "placeholder", "cod_espansione", 1, "form-control"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [3, "formGroup"], ["formControlName", "nomebusta", "type", "text", "placeholder", "nome", 1, "form-control"], ["formControlName", "anno", "type", "number", "placeholder", "anno", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "form-group", "col-md-3"], ["color", "white"], ["formControlName", "codice", "type", "text", "placeholder", "codice", 1, "form-control"], ["fieldName", "codice", 3, "field"], ["formControlName", "nome", "type", "text", "placeholder", "nome", 1, "form-control"], ["fieldName", "nome", 3, "field"], ["formControlName", "attributo", "type", "text", "placeholder", "attributo", 1, "form-control"], ["value", "DARK", 4, "ngIf"], ["value", "DIVINE", 4, "ngIf"], ["value", "EARTH", 4, "ngIf"], ["value", "FIRE", 4, "ngIf"], ["value", "LIGHT", 4, "ngIf"], ["value", "WATER", 4, "ngIf"], ["value", "WIND", 4, "ngIf"], ["value", "SPELL", "selected", "", 4, "ngIf"], ["value", "TRAP", "selected", "", 4, "ngIf"], ["fieldName", "attributo", 3, "field"], ["class", "form-group col-md-3", 4, "ngIf"], ["formControlName", "numero", "type", "text", "placeholder", "numero", 1, "form-control"], ["fieldName", "numero", 3, "field"], ["formControlName", "descrizione", "type", "text", "placeholder", "descrizione", 1, "form-control"], ["fieldName", "descrizione", 3, "field"], ["formControlName", "tipo", "type", "text", "placeholder", "tipo", 1, "form-control", 3, "click"], ["value", "Acqua/", 4, "ngIf"], ["value", "Bestia/", 4, "ngIf"], ["value", "Guerriero-Bestia/", 4, "ngIf"], ["value", "Fata/", 4, "ngIf"], ["value", "Macchina/", 4, "ngIf"], ["value", "Incantatore/", 4, "ngIf"], ["value", "Serpente-Marino/", 4, "ngIf"], ["value", "Tuono/", 4, "ngIf"], ["value", "Insetto/", 4, "ngIf"], ["value", "Psichico/", 4, "ngIf"], ["value", "Zombie/", 4, "ngIf"], ["value", "Dinosauro/", 4, "ngIf"], ["value", "Bestia Alata/", 4, "ngIf"], ["value", "Divinit\u00E0-Bestia/", 4, "ngIf"], ["value", "Pianta/", 4, "ngIf"], ["value", "Roccia/", 4, "ngIf"], ["value", "Guerriero/", 4, "ngIf"], ["value", "Pesce/", 4, "ngIf"], ["value", "Rettile/", 4, "ngIf"], ["value", "Pyro/", 4, "ngIf"], ["value", "Drago/", 4, "ngIf"], ["value", "Demone/", 4, "ngIf"], ["value", "Cyberverso/", 4, "ngIf"], ["value", "Trappola_Normale", 4, "ngIf"], ["value", "Trappola_Continua", 4, "ngIf"], ["value", "Contro_Trappola", 4, "ngIf"], ["value", "Magia_Normale", 4, "ngIf"], ["value", "Magia_Continua", 4, "ngIf"], ["value", "Magia_Rapida", 4, "ngIf"], ["value", "Magia_Terreno", 4, "ngIf"], ["value", "Magia_Rituale", 4, "ngIf"], ["value", "Magia_Equipaggiamento", 4, "ngIf"], ["fieldName", "tipo", 3, "field"], ["formControlName", "linkimmagine", "type", "file", "name", "photo", "ng2FileSelect", "", 1, "form-control", 3, "uploader"], ["fieldName", "linkimmagine", 3, "field"], ["type", "button", "class", "btn btn-success btn-s", 3, "click", 4, "ngIf"], ["value", "DARK"], ["value", "DIVINE"], ["value", "EARTH"], ["value", "FIRE"], ["value", "LIGHT"], ["value", "WATER"], ["value", "WIND"], ["value", "SPELL", "selected", ""], ["value", "TRAP", "selected", ""], ["formControlName", "livello", "type", "number", "placeholder", "livello", 1, "form-control"], ["type", "number", "value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["value", "12"], ["fieldName", "livello", 3, "field"], ["formControlName", "ATK", "type", "number", "placeholder", "ATK", 1, "form-control"], ["fieldName", "ATK", 3, "field"], ["formControlName", "DEF", "type", "number", "placeholder", "DEF", 1, "form-control"], ["fieldName", "DEF", 3, "field"], ["value", "Acqua/"], ["value", "Bestia/"], ["value", "Guerriero-Bestia/"], ["value", "Fata/"], ["value", "Macchina/"], ["value", "Incantatore/"], ["value", "Serpente-Marino/"], ["value", "Tuono/"], ["value", "Insetto/"], ["value", "Psichico/"], ["value", "Zombie/"], ["value", "Dinosauro/"], ["value", "Bestia Alata/"], ["value", "Divinit\u00E0-Bestia/"], ["value", "Pianta/"], ["value", "Roccia/"], ["value", "Guerriero/"], ["value", "Pesce/"], ["value", "Rettile/"], ["value", "Pyro/"], ["value", "Drago/"], ["value", "Demone/"], ["value", "Cyberverso/"], ["value", "Trappola_Normale"], ["value", "Trappola_Continua"], ["value", "Contro_Trappola"], ["value", "Magia_Normale"], ["value", "Magia_Continua"], ["value", "Magia_Rapida"], ["value", "Magia_Terreno"], ["value", "Magia_Rituale"], ["value", "Magia_Equipaggiamento"], ["color", "red"], ["formControlName", "extra", "value", "Link/", "name", "extra", "type", "radio", 1, "form-control", 3, "click"], ["formControlName", "extra", "value", "Xyz/", "name", "extra", "type", "radio", 1, "form-control", 3, "click"], ["formControlName", "extra", "value", "Fusione/", "name", "extra", "type", "radio", 1, "form-control", 3, "click"], ["formControlName", "extra", "value", "Synchro/", "name", "extra", "type", "radio", 1, "form-control", 3, "click"], ["formControlName", "extra", "value", "Ritual/", "name", "extra", "type", "radio", 1, "form-control", 3, "click"], ["type", "checkbox", 1, "form-control", 3, "change"], ["checkbox1", ""], ["checkbox9", ""], ["checkbox2", ""], ["checkbox3", ""], ["checkbox4", ""], ["checkbox5", ""], ["checkbox6", ""], ["checkbox7", ""], ["checkbox8", ""], ["formControlName", "gemmeblu", "type", "number", "placeholder", "Gemme blu", 1, "form-control"], ["fieldName", "gemmeblu", 3, "field"], ["formControlName", "gemmerosse", "type", "number", "placeholder", "Gemme rosse", 1, "form-control"], ["fieldName", "gemmerosse", 3, "field"], ["formControlName", "pendulumeffect", "type", "text", "placeholder", "Effetto pendulum", 1, "form-control"], ["fieldName", "pendulumeffect", 3, "field"], ["type", "button", 1, "btn", "btn-success", "btn-s", 3, "click"], [3, "value"]], template: function AdminpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "font", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Pagina di amministrazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Quale carta vuoi aggiungere?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminpageComponent_Template_select_click_10_listener($event) { return ctx.setcardtype($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Seleziona un tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "MOSTRO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "MAGIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "TRAPPOLA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, AdminpageComponent_form_19_Template, 95, 59, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Aggiunta carta in busta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Codice carta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AdminpageComponent_Template_input_ngModelChange_27_listener($event) { return ctx.form_carte.value.codice = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Espansione");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, AdminpageComponent_option_32_Template, 2, 2, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, AdminpageComponent_button_34_Template, 2, 0, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Aggiunta di una nuova busta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Nome busta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Anno di uscita");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminpageComponent_Template_button_click_47_listener() { return ctx.dati.AddEnvelope(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Aggiungi busta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tipocarta == "MOSTRO" || ctx.tipocarta == "MAGIA" || ctx.tipocarta == "TRAPPOLA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form_carte_buste);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.form_carte.value.codice);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dati.buste_espansione.envelopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form_carte_buste.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form_buste);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _field_error_field_error_component__WEBPACK_IMPORTED_MODULE_1__.FieldErrorComponent, ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__.FileSelectDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor], styles: [".group[_ngcontent-%COMP%]{\r\n  background-color: #616D7E;\r\n}\r\n\r\n#cardintoenvelope[_ngcontent-%COMP%]{\r\n  margin-top: 10%;\r\n}\r\n\r\n#formchoice[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n}\r\n\r\n.pagetitle[_ngcontent-%COMP%]{\r\n  border-bottom: 4px solid #212121;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWlucGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJhZG1pbnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncm91cHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2RDdFO1xyXG59XHJcblxyXG4jY2FyZGludG9lbnZlbG9wZXtcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbiNmb3JtY2hvaWNle1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5wYWdldGl0bGV7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _cardlist_cardlist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardlist/cardlist.component */ 9243);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginpage/loginpage.component */ 4249);
/* harmony import */ var _carddetail_carddetail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carddetail/carddetail.component */ 5690);
/* harmony import */ var _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminpage/adminpage.component */ 2695);
/* harmony import */ var _recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipes-list/recipes-list.component */ 4725);
/* harmony import */ var _duelistutility_duelistutility_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./duelistutility/duelistutility.component */ 8073);
/* harmony import */ var _deck_detail_deck_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deck-detail/deck-detail.component */ 2179);
/* harmony import */ var _rulespage_rulespage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rulespage/rulespage.component */ 2727);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);















const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'cardlist', component: _cardlist_cardlist_component__WEBPACK_IMPORTED_MODULE_1__.CardlistComponent, },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent, },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent },
    { path: 'loginpage', component: _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_4__.LoginpageComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__.AuthGuard] },
    { path: 'cards/:id', component: _carddetail_carddetail_component__WEBPACK_IMPORTED_MODULE_5__.CarddetailComponent, },
    { path: 'recipess/:id', component: _deck_detail_deck_detail_component__WEBPACK_IMPORTED_MODULE_9__.DeckDetailComponent, },
    { path: 'adminpage', component: _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_6__.AdminpageComponent, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__.AuthGuard] },
    { path: 'recipes', component: _recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_7__.RecipesListComponent, },
    { path: 'rulespage', component: _rulespage_rulespage_component__WEBPACK_IMPORTED_MODULE_10__.RulespageComponent, },
    { path: 'utility', component: _duelistutility_duelistutility_component__WEBPACK_IMPORTED_MODULE_8__.DuelistutilityComponent, },
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);




class AppComponent {
    constructor() {
        this.title = 'Yu-gi-ho-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenGetter": function() { return /* binding */ tokenGetter; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ 6313);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _cardlist_cardlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cardlist/cardlist.component */ 9243);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loginpage/loginpage.component */ 4249);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/it */ 4656);
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _errors_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./errors.service */ 6180);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @auth0/angular-jwt */ 5036);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.service */ 2891);
/* harmony import */ var _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./adminpage/adminpage.component */ 2695);
/* harmony import */ var _envelopesfilter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./envelopesfilter.pipe */ 5437);
/* harmony import */ var _carddetail_carddetail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./carddetail/carddetail.component */ 5690);
/* harmony import */ var _rulespage_rulespage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rulespage/rulespage.component */ 2727);
/* harmony import */ var _duelistutility_duelistutility_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./duelistutility/duelistutility.component */ 8073);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _otherfilter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./otherfilter.pipe */ 3575);
/* harmony import */ var _field_error_field_error_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./field-error/field-error.component */ 3412);
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng2-file-upload */ 6321);
/* harmony import */ var _recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./recipes-list/recipes-list.component */ 4725);
/* harmony import */ var _deck_detail_deck_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./deck-detail/deck-detail.component */ 2179);
/* harmony import */ var _leggendary_cards_leggendary_cards_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./leggendary-cards/leggendary-cards.component */ 3757);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng2-pdf-viewer */ 3621);


































// ...
function tokenGetter() {
    return localStorage.getItem('access_token');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_24__.ErrorHandler, useClass: _errors_service__WEBPACK_IMPORTED_MODULE_9__.ErrorsService },
        _auth_service__WEBPACK_IMPORTED_MODULE_12__.AuthService,
        _auth_guard__WEBPACK_IMPORTED_MODULE_11__.AuthGuard], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule,
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_28__.FileUploadModule,
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_29__.PdfViewerModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__.JwtModule.forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    whitelistedDomains: ['localhost:8000'],
                    blacklistedRoutes: ['localhost:8000/login']
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.NavbarComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _cardlist_cardlist_component__WEBPACK_IMPORTED_MODULE_4__.CardlistComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent,
        _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_7__.LoginpageComponent,
        _adminpage_adminpage_component__WEBPACK_IMPORTED_MODULE_13__.AdminpageComponent,
        _envelopesfilter_pipe__WEBPACK_IMPORTED_MODULE_14__.EnvelopesFilterPipe,
        _carddetail_carddetail_component__WEBPACK_IMPORTED_MODULE_15__.CarddetailComponent,
        _rulespage_rulespage_component__WEBPACK_IMPORTED_MODULE_16__.RulespageComponent,
        _duelistutility_duelistutility_component__WEBPACK_IMPORTED_MODULE_17__.DuelistutilityComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__.FooterComponent,
        _otherfilter_pipe__WEBPACK_IMPORTED_MODULE_19__.OtherfilterPipe,
        _field_error_field_error_component__WEBPACK_IMPORTED_MODULE_20__.FieldErrorComponent,
        _recipes_list_recipes_list_component__WEBPACK_IMPORTED_MODULE_21__.RecipesListComponent,
        _deck_detail_deck_detail_component__WEBPACK_IMPORTED_MODULE_22__.DeckDetailComponent,
        _leggendary_cards_leggendary_cards_component__WEBPACK_IMPORTED_MODULE_23__.LeggendaryCardsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_27__.HttpClientModule,
        ng2_file_upload__WEBPACK_IMPORTED_MODULE_28__.FileUploadModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_29__.PdfViewerModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_10__.JwtModule] }); })();
(0,_angular_common__WEBPACK_IMPORTED_MODULE_30__.registerLocaleData)((_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_8___default()), 'it');


/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem('access_token')) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });


/***/ }),

/***/ 2891:
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ 5036);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8002);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 1841);





class AuthService {
    constructor(http) {
        this.http = http;
        // input per la registrazione
        this.helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService();
        this.users = null;
        this.datasend = null;
    }
    registeruser() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + "/register";
        let users = {};
        users["nome"] = this.inputnome;
        users["cognome"] = this.inputcognome;
        users["pass"] = this.inputpass;
        users["email"] = this.inputemail;
        users["privilegi"] = "utente";
        this.http.post(url, users).subscribe((data) => {
            console.info(data);
            this.usersData = data;
            this.usersError = null;
        }, error => {
            this.usersError = error.error;
            this.usersData = null;
            console.error(this.usersError);
        });
    }
    login(email, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.url + '/login', { pass: password, email: email })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(result => {
            localStorage.setItem('access_token', result.token);
            localStorage.setItem('token_decoded_userid', this.helper.decodeToken(localStorage.getItem('access_token')).userID);
            return true;
        }));
    }
    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('token_decoded_userid');
    }
    get loggedIn() {
        return (localStorage.getItem('access_token') !== null);
    }
    get adminControl() {
        if (this.helper.decodeToken(localStorage.getItem('access_token')).privileges == 'admin') {
            return true;
        }
        else {
            return false;
        }
    }
    get UserLoggedName() {
        return this.helper.decodeToken(localStorage.getItem('access_token')).Nome;
    }
    get UserLoggedCognome() {
        return this.helper.decodeToken(localStorage.getItem('access_token')).Cognome;
    }
    get UserLoggedEmail() {
        return this.helper.decodeToken(localStorage.getItem('access_token')).Email;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5690:
/*!****************************************************!*\
  !*** ./src/app/carddetail/carddetail.component.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarddetailComponent": function() { return /* binding */ CarddetailComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _dati_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dati.service */ 4173);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




function CarddetailComponent_b_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("LV: ", ctx_r0.cardview.livello, "");
} }
function CarddetailComponent_div_26_b_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("ATK: ", ctx_r11.cardview.attacco, "");
} }
function CarddetailComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "font", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarddetailComponent_div_26_b_2_Template, 2, 1, "b", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.cardview.attacco != null);
} }
function CarddetailComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "font", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ATK: ????");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CarddetailComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "font", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "ATK: X000");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CarddetailComponent_div_29_b_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("DEF: ", ctx_r12.cardview.difesa, "");
} }
function CarddetailComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "font", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CarddetailComponent_div_29_b_2_Template, 2, 1, "b", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.cardview.difesa != null);
} }
function CarddetailComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "font", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "DEF: ????");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CarddetailComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "font", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "DEF: X000");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CarddetailComponent_b_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("EFFETTO PEND: ", ctx_r7.cardview.pendeffect, "");
} }
function CarddetailComponent_b_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("GEMME BLU: ", ctx_r8.cardview.blugem, "");
} }
function CarddetailComponent_b_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("GEMME ROSSE: ", ctx_r9.cardview.redgem, "");
} }
function CarddetailComponent_b_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const espansione_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", espansione_r13.nome, "", espansione_r13.anno, " ");
} }
class CarddetailComponent {
    constructor(dati, route, router) {
        this.dati = dati;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.cardview = this.dati.getCard(id);
    }
}
CarddetailComponent.ɵfac = function CarddetailComponent_Factory(t) { return new (t || CarddetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_dati_service__WEBPACK_IMPORTED_MODULE_0__.DatiService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
CarddetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarddetailComponent, selectors: [["app-carddetail"]], decls: 52, vars: 18, consts: [[1, "sfondo"], [1, "container"], [1, "row"], [1, "col"], [1, "grid-container"], [1, "img"], [3, "src"], [1, "nome"], ["color", "white"], [1, "attributo"], [1, "tipo"], [1, "livello"], [4, "ngIf"], [1, "descrizione"], ["class", "atk", 4, "ngIf"], ["class", "def", 4, "ngIf"], [1, "codice"], [1, "numero"], [1, "pendeffect"], [1, "bluegem"], [1, "redgem"], ["id", "espansioni", 1, "espansioni"], [4, "ngFor", "ngForOf"], [1, "atk"], [1, "def"]], template: function CarddetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "font", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "font", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "font", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "font", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CarddetailComponent_b_21_Template, 2, 1, "b", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "font", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, CarddetailComponent_div_26_Template, 3, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CarddetailComponent_div_27_Template, 4, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CarddetailComponent_div_28_Template, 4, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CarddetailComponent_div_29_Template, 3, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CarddetailComponent_div_30_Template, 4, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CarddetailComponent_div_31_Template, 4, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "font", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "font", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "font", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, CarddetailComponent_b_42_Template, 2, 1, "b", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "font", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, CarddetailComponent_b_45_Template, 2, 1, "b", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "font", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, CarddetailComponent_b_48_Template, 2, 1, "b", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "font", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, CarddetailComponent_b_51_Template, 2, 2, "b", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.cardview.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("NOME: ", ctx.cardview.nome, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("ATTRIBUTO: ", ctx.cardview.attributo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("TIPO: ", ctx.cardview.tipo, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardview.livello != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.cardview.descrizione);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardview.attacco != 22222 && ctx.cardview.attacco != 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardview.attacco == 22222);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardview.attacco == 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardview.difesa != 22222 && ctx.cardview.difesa != 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardview.difesa == 22222);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardview.difesa == 10000);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("SET: ", ctx.cardview.cod, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("COD: ", ctx.cardview.numero, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardview.pendeffect != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardview.blugem != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardview.redgem != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cardview.espansioni);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["img[_ngcontent-%COMP%]{\r\n  width: 288px;\r\n  height: 420px;\r\n}\r\n\r\nb[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.sfondo[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/1059004_yu-gi-oh-online-backgrounds-and-sleeves-projects-ygopro-forum_1024x642_h.jpg\");\r\n  background-size: 100%\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\r\n  grid-template-areas: \"img nome attributo tipo livello\" \"img descrizione descrizione descrizione descrizione\" \"img atk def codice numero\" \"img pendeffect pendeffect bluegem redgem\" \"espansioni espansioni espansioni espansioni espansioni\";\r\n  margin: 30px;\r\n}\r\n\r\n.img[_ngcontent-%COMP%] {\r\n  grid-area: img;\r\n  border-bottom: 4px solid #212121;\r\n  border-left: 4px solid #212121;\r\n  border-top: 4px solid #212121;\r\n}\r\n\r\n.nome[_ngcontent-%COMP%] {\r\n  grid-area: nome;\r\n  border-left: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n  border-top: 4px solid #212121;\r\n}\r\n\r\n.attributo[_ngcontent-%COMP%] {\r\n  grid-area: attributo;\r\n  border-bottom: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n  border-top: 4px solid #212121;\r\n}\r\n\r\n.tipo[_ngcontent-%COMP%] {\r\n  grid-area: tipo;\r\n  border-bottom: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n  border-top: 4px solid #212121;\r\n}\r\n\r\n.livello[_ngcontent-%COMP%] {\r\n  grid-area: livello;\r\n  border-bottom: 4px solid #212121;\r\n  border-top: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n}\r\n\r\n.descrizione[_ngcontent-%COMP%] {\r\n  grid-area: descrizione;\r\n  border-left: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n}\r\n\r\n.atk[_ngcontent-%COMP%] {\r\n  grid-area: atk;\r\n  border-left: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.def[_ngcontent-%COMP%] {\r\n  grid-area: def;\r\n  border-right: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.codice[_ngcontent-%COMP%] {\r\n  grid-area: codice;\r\n  border-right: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.numero[_ngcontent-%COMP%] {\r\n  grid-area: numero;\r\n  border-bottom: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n}\r\n\r\n.pendeffect[_ngcontent-%COMP%] {\r\n  grid-area: pendeffect;\r\n  border-left: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.bluegem[_ngcontent-%COMP%] {\r\n  grid-area: bluegem;\r\n  border-right: 4px solid #212121;\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.redgem[_ngcontent-%COMP%] {\r\n  grid-area: redgem;\r\n  border-bottom: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n}\r\n\r\n.espansioni[_ngcontent-%COMP%] {\r\n  grid-area: espansioni;\r\n  border-bottom: 4px solid #212121;\r\n  border-right: 4px solid #212121;\r\n  border-left: 4px solid #212121;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRkZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUhBQXFIO0VBQ3JIO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMENBQTBDO0VBQzFDLHVDQUF1QztFQUN2Qyw0T0FBNE87RUFDNU8sWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsK0JBQStCO0VBQy9CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLCtCQUErQjtFQUMvQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQiw4QkFBOEI7QUFDaEMiLCJmaWxlIjoiY2FyZGRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gIHdpZHRoOiAyODhweDtcclxuICBoZWlnaHQ6IDQyMHB4O1xyXG59XHJcblxyXG5ie1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5zZm9uZG97XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy8xMDU5MDA0X3l1LWdpLW9oLW9ubGluZS1iYWNrZ3JvdW5kcy1hbmQtc2xlZXZlcy1wcm9qZWN0cy15Z29wcm8tZm9ydW1fMTAyNHg2NDJfaC5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlXHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1nIG5vbWUgYXR0cmlidXRvIHRpcG8gbGl2ZWxsb1wiIFwiaW1nIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lXCIgXCJpbWcgYXRrIGRlZiBjb2RpY2UgbnVtZXJvXCIgXCJpbWcgcGVuZGVmZmVjdCBwZW5kZWZmZWN0IGJsdWVnZW0gcmVkZ2VtXCIgXCJlc3BhbnNpb25pIGVzcGFuc2lvbmkgZXNwYW5zaW9uaSBlc3BhbnNpb25pIGVzcGFuc2lvbmlcIjtcclxuICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIGdyaWQtYXJlYTogaW1nO1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItdG9wOiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxuLm5vbWUge1xyXG4gIGdyaWQtYXJlYTogbm9tZTtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItdG9wOiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxuLmF0dHJpYnV0byB7XHJcbiAgZ3JpZC1hcmVhOiBhdHRyaWJ1dG87XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItdG9wOiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxuLnRpcG8ge1xyXG4gIGdyaWQtYXJlYTogdGlwbztcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG4ubGl2ZWxsbyB7XHJcbiAgZ3JpZC1hcmVhOiBsaXZlbGxvO1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuXHJcbi5kZXNjcml6aW9uZSB7XHJcbiAgZ3JpZC1hcmVhOiBkZXNjcml6aW9uZTtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxuLmF0ayB7XHJcbiAgZ3JpZC1hcmVhOiBhdGs7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuXHJcbi5kZWYge1xyXG4gIGdyaWQtYXJlYTogZGVmO1xyXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuXHJcbi5jb2RpY2Uge1xyXG4gIGdyaWQtYXJlYTogY29kaWNlO1xyXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuXHJcbi5udW1lcm8ge1xyXG4gIGdyaWQtYXJlYTogbnVtZXJvO1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuXHJcbi5wZW5kZWZmZWN0IHtcclxuICBncmlkLWFyZWE6IHBlbmRlZmZlY3Q7XHJcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuXHJcbi5ibHVlZ2VtIHtcclxuICBncmlkLWFyZWE6IGJsdWVnZW07XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxuLnJlZGdlbSB7XHJcbiAgZ3JpZC1hcmVhOiByZWRnZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG5cclxuLmVzcGFuc2lvbmkge1xyXG4gIGdyaWQtYXJlYTogZXNwYW5zaW9uaTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 9243:
/*!************************************************!*\
  !*** ./src/app/cardlist/cardlist.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardlistComponent": function() { return /* binding */ CardlistComponent; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _dati_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dati.service */ 4173);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ 2891);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _envelopesfilter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../envelopesfilter.pipe */ 5437);








function CardlistComponent_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const envel_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", envel_r2.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", envel_r2.nome, " year: ", envel_r2.anno, "");
} }
function CardlistComponent_table_14_tr_17_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function CardlistComponent_table_14_tr_17_td_7_Template_select_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return (ctx_r9.carte.quantity[i_r5] = $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "1_carta");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "2_carte");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "3_carte");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r6.carte.quantity[i_r5]);
} }
function CardlistComponent_table_14_tr_17_td_8_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Main Deck");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CardlistComponent_table_14_tr_17_td_8_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Extra Deck");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CardlistComponent_table_14_tr_17_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function CardlistComponent_table_14_tr_17_td_8_Template_select_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r16); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return (ctx_r15.carte.typedeck[i_r5] = $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, CardlistComponent_table_14_tr_17_td_8_option_2_Template, 2, 0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CardlistComponent_table_14_tr_17_td_8_option_3_Template, 2, 0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Side Deck");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const i_r5 = ctx_r18.index;
    const card_r4 = ctx_r18.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx_r7.carte.typedeck[i_r5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(card_r4.tipo.split("/")[1] == "Fusione" || card_r4.tipo.split("/")[1] == "Synchro"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", card_r4.tipo.split("/")[1] == "Fusione" || card_r4.tipo.split("/")[1] == "Synchro");
} }
function CardlistComponent_table_14_tr_17_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CardlistComponent_table_14_tr_17_td_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const card_r4 = ctx_r20.$implicit; const i_r5 = ctx_r20.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r19.carte.AddToDeck(card_r4, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "ADD");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CardlistComponent_table_14_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, CardlistComponent_table_14_tr_17_td_7_Template, 8, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, CardlistComponent_table_14_tr_17_td_8_Template, 6, 3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, CardlistComponent_table_14_tr_17_td_9_Template, 3, 0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CardlistComponent_table_14_tr_17_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const card_r4 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r22.showCardDetail(card_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Card details");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", card_r4.img.replace("http://localhost:8000", ctx_r3.envurl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](card_r4.cod);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", card_r4.nome, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.auth.loggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.auth.loggedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.auth.loggedIn);
} }
function CardlistComponent_table_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "IMMAGINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "SET");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "NOME");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "QUANTITA'");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "TIPO DECK'");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, CardlistComponent_table_14_tr_17_Template, 13, 6, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "envelopesFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](18, 1, ctx_r1.carte.dati_carte.cards, ctx_r1.pack));
} }
class CardlistComponent {
    constructor(carte, pacchetti, route, router, auth) {
        this.carte = carte;
        this.pacchetti = pacchetti;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.pack = "";
        this.envurl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url;
    }
    ngOnInit() {
        this.carte.Load_All_Cards();
        this.pacchetti.ListofEnvelopes();
    }
    setPack(e) {
        this.pack = e;
        console.log(e);
    }
    showCardDetail(card) {
        this.carte.single_card = card;
        this.route.navigate(['cards', this.carte.single_card.cod]);
    }
}
CardlistComponent.ɵfac = function CardlistComponent_Factory(t) { return new (t || CardlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dati_service__WEBPACK_IMPORTED_MODULE_1__.DatiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_dati_service__WEBPACK_IMPORTED_MODULE_1__.DatiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService)); };
CardlistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CardlistComponent, selectors: [["app-cardlist"]], decls: 36, vars: 3, consts: [[1, "container-fluid"], [1, "container"], [1, "pagetitle"], [2, "font-family", "yu-gi-ho"], [1, "row"], [1, "col"], ["name", "profile", 1, "browser-default", "custom-select", 3, "value", "input"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "table table-sm table-dark", 4, "ngIf"], ["id", "pagedescription"], ["color", "white"], [3, "value"], [1, "table", "table-sm", "table-dark"], ["id", "tabletitle"], [4, "ngFor", "ngForOf"], [3, "src"], [4, "ngIf"], ["type", "button", "name", "detailbutton", 3, "click"], ["name", "profile", 3, "value", "input"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "main", 4, "ngIf"], ["value", "extra", 4, "ngIf"], ["value", "side"], ["value", "main"], ["value", "extra"], ["type", "button", "name", "card", 3, "click"]], template: function CardlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Lista di tutte le carte");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function CardlistComponent_Template_select_input_7_listener($event) { return ctx.setPack($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Seleziona un espansione");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, CardlistComponent_option_10_Template, 2, 3, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, CardlistComponent_table_14_Template, 19, 4, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "font", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "In questa pagina sono presenti tutti i vari set di tutte le espansioni esistenti a partire dal \"La Leggenda del drago bianco occhi blu\" fino ad oggi. Se sei registrato puoi utilizzare queste carte per gestire il tuo deck virtualmente selezionando una quantit\u00E0 per ogni carta e infine il tipo di deck da aggiungere");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "font", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\"Main deck\": il mazzo iniziale MIN 40 carte MAX 60 carte ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "font", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "\"Side deck\": (mazzo di supporto) MAX 15 carte,");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "font", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\"Extra deck:\" mazzo contenente le carte mostro 'fusione', 'sinchro', 'xyz', 'link' MAX 15 carte");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "font", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "ricordati che secondo le regole ufficiali ogni deck pu\u00F2 avere massimo tre copie per di ogni carta ad eccezione delle carte proibite, limitate e semi limitate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.pack);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pacchetti.buste_espansione.envelopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.pack);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf], pipes: [_envelopesfilter_pipe__WEBPACK_IMPORTED_MODULE_3__.EnvelopesFilterPipe], styles: ["img[_ngcontent-%COMP%]{\r\n  width: 96px;\r\n  height: 140px;\r\n}\r\n\r\n.container-fluid[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/Wiki-background.jpg\");\r\n  \r\n}\r\n\r\n#pagedescription[_ngcontent-%COMP%]{\r\n  box-sizing: border-box;\r\n  border: 4px solid #212121;\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  min-height:100px;\r\n\tpadding:30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRsaXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BEO21DQUNpQztBQUNuQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7Q0FDakIsWUFBWTtBQUNiIiwiZmlsZSI6ImNhcmRsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgd2lkdGg6IDk2cHg7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL1dpa2ktYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgLypib3JkZXItbGVmdDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzIxMjEyMTsqL1xyXG59XHJcblxyXG4jcGFnZWRlc2NyaXB0aW9ue1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgIzIxMjEyMTtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWluLWhlaWdodDoxMDBweDtcclxuXHRwYWRkaW5nOjMwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4173:
/*!*********************************!*\
  !*** ./src/app/dati.service.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatiService": function() { return /* binding */ DatiService; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 2891);




class DatiService {
    constructor(http, authservice) {
        this.http = http;
        this.authservice = authservice;
        this.card = null;
        this.dati_carte = [];
        this.carta_selezionata = null;
        this.quantity = [this.dati_carte.length];
        this.typedeck = [];
    }
    Load_All_Cards() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/allcards";
        this.http.get(url).subscribe((data) => {
            this.dati_carte = data;
        });
    }
    AddToDeck(card, index) {
        this.card = card;
        this.carta_selezionata = {
            userid_fk: localStorage.getItem("token_decoded_userid"),
            cod_fk: this.card.cod,
            qnt: this.quantity[index],
            type: this.typedeck[index],
        };
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/users/" + localStorage.getItem("token_decoded_userid") + "/cards/" + this.card.cod + "/type/" + this.carta_selezionata.type;
        let url2 = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/users/" + localStorage.getItem("token_decoded_userid") + "/cards/" + this.card.cod;
        let url3 = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/users/" + localStorage.getItem("token_decoded_userid") + "/cards/" + this.card.cod + "/type/" + this.carta_selezionata.type;
        if (this.carta_selezionata.qnt != null && this.carta_selezionata.type != null) {
            this.http.get(url).subscribe((data) => {
                console.log(data.card.cod_fk);
                if (data.card.cod_fk == this.carta_selezionata.cod_fk && data.card.type == this.carta_selezionata.type) {
                    this.http.put(url3, this.carta_selezionata).subscribe((data) => {
                        console.log(data);
                    });
                    this.dati_carte_utente["cards"].splice(index, 1);
                    this.dati_carte_utente["cards"].push(card);
                }
                else if (data.card == "false") {
                    this.http.post(url2, this.carta_selezionata).subscribe((data) => {
                        alert("carta aggiunta con successo!");
                    });
                }
            });
        }
        else {
            alert("ERRORE: devi aggiungere una quantità di carte da agiungere al deck e il tipo di deck");
        }
    }
    getCard(codice) {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/singlecard/" + codice;
        this.http.get(url).subscribe((data) => {
            this.single_card = data;
        });
        return this.single_card;
    }
    deleteCardfromdeck(card, index) {
        this.dati_carte_utente["cards"].splice(index, 1);
        this.card = card;
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/users/" + localStorage.getItem("token_decoded_userid") + "/cards/" + this.card.cod + "/type/" + this.card.type;
        this.http.delete(url).subscribe((data) => {
            console.info("Rimozione effetuata con successo");
        });
    }
    CardsLoggedUser() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/users/" + localStorage.getItem("token_decoded_userid") + "/cards";
        return this.http.get(url).subscribe((data) => {
            this.dati_carte_utente = data;
            //let a = data.cards[0].type;
        });
    }
    ;
    ListofEnvelopes() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/envelope/all";
        this.http.get(url).subscribe((data) => {
            this.buste_espansione = data;
        });
    }
    ;
    AddCardToList() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/cards";
        let card = {};
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
        this.http.post(url, card).subscribe((data) => {
            console.info(data);
        });
        alert("nuova carta aggiunta con successo!");
    }
    AddEnvelope() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/envelope";
        let envelope = {};
        envelope["nome"] = this.inputenvelopename;
        envelope["anno"] = this.inputenvelopeyear;
        this.http.post(url, envelope).subscribe((data) => {
            console.info(data);
        });
        alert("nuova busta aggiunta con successo!");
    }
    AddCardToEnvelope() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/cards/" + this.inputcodcard + "/envelope/" + this.inputcodenvelope;
        this.http.post(url, url).subscribe((data) => { });
        alert("Relazione aggiunta con successo!");
    }
}
DatiService.ɵfac = function DatiService_Factory(t) { return new (t || DatiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
DatiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DatiService, factory: DatiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2179:
/*!******************************************************!*\
  !*** ./src/app/deck-detail/deck-detail.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeckDetailComponent": function() { return /* binding */ DeckDetailComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _dati_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dati.service */ 4173);
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../recipes.service */ 2910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);







function DeckDetailComponent_div_7_h6_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "font", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " MAIN DECK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DeckDetailComponent_div_7_h6_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "font", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " EXTRA DECK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DeckDetailComponent_div_7_h6_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "font", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " SIDE DECK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DeckDetailComponent_div_7_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("ATK: ", card_r2.attacco, "");
} }
function DeckDetailComponent_div_7_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "ATK: ????");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DeckDetailComponent_div_7_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "ATK: X000");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DeckDetailComponent_div_7_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("DEF: ", card_r2.difesa, "");
} }
function DeckDetailComponent_div_7_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "DEF: ????");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DeckDetailComponent_div_7_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "DEF: X000");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DeckDetailComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DeckDetailComponent_div_7_h6_1_Template, 3, 0, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DeckDetailComponent_div_7_h6_2_Template, 3, 0, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DeckDetailComponent_div_7_h6_3_Template, 3, 0, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, DeckDetailComponent_div_7_div_16_Template, 3, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, DeckDetailComponent_div_7_div_17_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, DeckDetailComponent_div_7_div_18_Template, 3, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, DeckDetailComponent_div_7_div_19_Template, 3, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, DeckDetailComponent_div_7_div_20_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, DeckDetailComponent_div_7_div_21_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "font", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeckDetailComponent_div_7_Template_button_click_40_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16); const card_r2 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.showCardDetail(card_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Card Dettail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", card_r2.type == "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", card_r2.type == "extra");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", card_r2.type == "side");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("NOME: ", card_r2.nome, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("ATTRIBUTO: ", card_r2.attributo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("LV:", card_r2.livello, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r2.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", card_r2.attacco != 22222 && card_r2.attacco != 10000);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", card_r2.attacco == 22222);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", card_r2.attacco == 10000);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", card_r2.difesa != 22222 && card_r2.attacco != 10000);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", card_r2.difesa == 22222);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", card_r2.difesa == 10000);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r2.descrizione);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r2.blugem);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r2.redgem);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", card_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](card_r2.pendeffect);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("QNT: ", card_r2.qnt, "");
} }
function DeckDetailComponent_tr_9_div_10_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeckDetailComponent_tr_9_div_10_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); const comment_r17 = ctx_r23.$implicit; const i_r18 = ctx_r23.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r22.deletecom(comment_r17.id_com, i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DeckDetailComponent_tr_9_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DeckDetailComponent_tr_9_div_10_button_1_Template, 2, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const comment_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r20.id_com == comment_r17.id_com);
} }
function DeckDetailComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, DeckDetailComponent_tr_9_div_10_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r17 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r17.id_com);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r17.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r17.cognome);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](comment_r17.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.recipesdata.all_comment_ids.comments);
} }
class DeckDetailComponent {
    constructor(dati, recipesdata, route, router) {
        this.dati = dati;
        this.recipesdata = recipesdata;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.recipesdata.Getrecipe(this.id);
        this.recipesdata.Getrecipescomments(this.id);
        this.recipesdata.Getrecipescommentsids(this.id, Number(localStorage.getItem("token_decoded_userid")));
        this.form_comment = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            descrizione: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.commentbody, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
        });
        this.form_comment.valueChanges.subscribe(() => {
            this.commentbody = this.form_comment.value.descrizione;
        });
    }
    deletecom(id, ind) {
        this.recipesdata.DeleteComment(id, ind);
        //this.recipesdata.Getrecipescomments(this.id);
    }
    Addcom(id, desc) {
        this.recipesdata.Addcomment(id, desc);
        this.recipesdata.Getrecipescommentsids(this.id, Number(localStorage.getItem("token_decoded_userid")));
        //this.recipesdata.Getrecipescomments(this.id);
    }
    showCardDetail(card) {
        this.dati.single_card = card;
        this.router.navigate(['cards', this.dati.single_card.cod]);
    }
}
DeckDetailComponent.ɵfac = function DeckDetailComponent_Factory(t) { return new (t || DeckDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_dati_service__WEBPACK_IMPORTED_MODULE_0__.DatiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_recipes_service__WEBPACK_IMPORTED_MODULE_1__.RecipesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
DeckDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DeckDetailComponent, selectors: [["app-deck-detail"]], decls: 18, vars: 4, consts: [[1, "sfondo"], [1, "container"], [1, "pagetitle"], [2, "font-family", "yu-gi-ho"], [1, "row"], [1, "col"], ["class", "grid-container", 4, "ngFor", "ngForOf"], [1, "table", "table-sm", "table-dark"], [4, "ngFor", "ngForOf"], [3, "formGroup"], ["for", "comment"], ["color", "white"], ["formControlName", "descrizione", "type", "text", "rows", "5", "id", "comment", 1, "form-control"], ["type", "submit", "name", "postcommentbutton", 1, "btn", "btn-primary", 3, "click"], [1, "grid-container"], [4, "ngIf"], [1, "nome"], [1, "attributo"], [1, "livello"], [1, "tipo"], ["class", "atk", 4, "ngIf"], ["class", "def", 4, "ngIf"], [1, "descrizione"], [1, "blugem"], [1, "redgem"], ["align", "center", 1, "img"], [3, "src"], [1, "pendeffect"], [1, "qnt"], [1, "button"], ["type", "button", "name", "card", 3, "click"], ["color", "yellow"], ["color", "blue"], ["color", "darkgreen"], [1, "atk"], [1, "def"], ["type", "button", "name", "commentsdelete", 3, "click", 4, "ngIf"], ["type", "button", "name", "commentsdelete", 3, "click"]], template: function DeckDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DeckDetailComponent_div_7_Template, 42, 19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DeckDetailComponent_tr_9_Template, 11, 5, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "font", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Lascia una recensione:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DeckDetailComponent_Template_button_click_16_listener() { return ctx.Addcom(ctx.id, ctx.commentbody); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Commenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.recipesdata.single_recipe.nomeric);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recipesdata.singleric.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.recipesdata.all_comment.comments);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form_comment);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".sfondo[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/Wiki-background.jpg\");;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  width: 96px;\r\n  height: 140px;\r\n  margin: 5px;\r\n}\r\n\r\nh6[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr;\r\n  grid-template-areas: \"img nome nome nome nome nome nome\" \"img attributo attributo livello tipo atk def\" \"img descrizione descrizione descrizione descrizione descrizione descrizione\" \"img pendeffect pendeffect blugem redgem qnt button\";\r\n}\r\n\r\n.img[_ngcontent-%COMP%] { grid-area: img; }\r\n\r\n.nome[_ngcontent-%COMP%] { grid-area: nome; }\r\n\r\n.attributo[_ngcontent-%COMP%] { grid-area: attributo; }\r\n\r\n.livello[_ngcontent-%COMP%] { grid-area: livello; }\r\n\r\n.tipo[_ngcontent-%COMP%] { grid-area: tipo; }\r\n\r\n.atk[_ngcontent-%COMP%] { grid-area: atk; }\r\n\r\n.def[_ngcontent-%COMP%] { grid-area: def; }\r\n\r\n.descrizione[_ngcontent-%COMP%] { grid-area: descrizione; }\r\n\r\n.pendeffect[_ngcontent-%COMP%] { grid-area: pendeffect; }\r\n\r\n.blugem[_ngcontent-%COMP%] { grid-area: blugem; }\r\n\r\n.redgem[_ngcontent-%COMP%] { grid-area: redgem; }\r\n\r\n.qnt[_ngcontent-%COMP%] { grid-area: qnt; }\r\n\r\n.button[_ngcontent-%COMP%] { grid-area: button; }\r\n\r\n#pagedescription[_ngcontent-%COMP%]{\r\n  margin-bottom: 30px;\r\n  box-sizing: border-box;\r\n  border: 6px solid #212121;\r\n  min-height:100px;\r\n\tpadding:30px;\r\n}\r\n\r\n.pagetitle[_ngcontent-%COMP%]{\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2stZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixrREFBa0Q7RUFDbEQsbUNBQW1DO0VBQ25DLDBPQUEwTztBQUM1Tzs7QUFFQSxPQUFPLGNBQWMsRUFBRTs7QUFFdkIsUUFBUSxlQUFlLEVBQUU7O0FBRXpCLGFBQWEsb0JBQW9CLEVBQUU7O0FBRW5DLFdBQVcsa0JBQWtCLEVBQUU7O0FBRS9CLFFBQVEsZUFBZSxFQUFFOztBQUV6QixPQUFPLGNBQWMsRUFBRTs7QUFFdkIsT0FBTyxjQUFjLEVBQUU7O0FBRXZCLGVBQWUsc0JBQXNCLEVBQUU7O0FBRXZDLGNBQWMscUJBQXFCLEVBQUU7O0FBRXJDLFVBQVUsaUJBQWlCLEVBQUU7O0FBRTdCLFVBQVUsaUJBQWlCLEVBQUU7O0FBRTdCLE9BQU8sY0FBYyxFQUFFOztBQUV2QixVQUFVLGlCQUFpQixFQUFFOztBQUU3QjtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtDQUNqQixZQUFZO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImRlY2stZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2ZvbmRve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvV2lraS1iYWNrZ3JvdW5kLmpwZ1wiKTs7XHJcbn1cclxuXHJcbmltZ3tcclxuICB3aWR0aDogOTZweDtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG5oNntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1nIG5vbWUgbm9tZSBub21lIG5vbWUgbm9tZSBub21lXCIgXCJpbWcgYXR0cmlidXRvIGF0dHJpYnV0byBsaXZlbGxvIHRpcG8gYXRrIGRlZlwiIFwiaW1nIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lXCIgXCJpbWcgcGVuZGVmZmVjdCBwZW5kZWZmZWN0IGJsdWdlbSByZWRnZW0gcW50IGJ1dHRvblwiO1xyXG59XHJcblxyXG4uaW1nIHsgZ3JpZC1hcmVhOiBpbWc7IH1cclxuXHJcbi5ub21lIHsgZ3JpZC1hcmVhOiBub21lOyB9XHJcblxyXG4uYXR0cmlidXRvIHsgZ3JpZC1hcmVhOiBhdHRyaWJ1dG87IH1cclxuXHJcbi5saXZlbGxvIHsgZ3JpZC1hcmVhOiBsaXZlbGxvOyB9XHJcblxyXG4udGlwbyB7IGdyaWQtYXJlYTogdGlwbzsgfVxyXG5cclxuLmF0ayB7IGdyaWQtYXJlYTogYXRrOyB9XHJcblxyXG4uZGVmIHsgZ3JpZC1hcmVhOiBkZWY7IH1cclxuXHJcbi5kZXNjcml6aW9uZSB7IGdyaWQtYXJlYTogZGVzY3JpemlvbmU7IH1cclxuXHJcbi5wZW5kZWZmZWN0IHsgZ3JpZC1hcmVhOiBwZW5kZWZmZWN0OyB9XHJcblxyXG4uYmx1Z2VtIHsgZ3JpZC1hcmVhOiBibHVnZW07IH1cclxuXHJcbi5yZWRnZW0geyBncmlkLWFyZWE6IHJlZGdlbTsgfVxyXG5cclxuLnFudCB7IGdyaWQtYXJlYTogcW50OyB9XHJcblxyXG4uYnV0dG9uIHsgZ3JpZC1hcmVhOiBidXR0b247IH1cclxuXHJcbiNwYWdlZGVzY3JpcHRpb257XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkICMyMTIxMjE7XHJcbiAgbWluLWhlaWdodDoxMDBweDtcclxuXHRwYWRkaW5nOjMwcHg7XHJcbn1cclxuXHJcbi5wYWdldGl0bGV7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 8073:
/*!************************************************************!*\
  !*** ./src/app/duelistutility/duelistutility.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DuelistutilityComponent": function() { return /* binding */ DuelistutilityComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class DuelistutilityComponent {
    constructor() { }
    ngOnInit() {
    }
}
DuelistutilityComponent.ɵfac = function DuelistutilityComponent_Factory(t) { return new (t || DuelistutilityComponent)(); };
DuelistutilityComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DuelistutilityComponent, selectors: [["app-duelistutility"]], decls: 2, vars: 0, template: function DuelistutilityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " duelistutility works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkdWVsaXN0dXRpbGl0eS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5437:
/*!*****************************************!*\
  !*** ./src/app/envelopesfilter.pipe.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnvelopesFilterPipe": function() { return /* binding */ EnvelopesFilterPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class EnvelopesFilterPipe {
    transform(cardlist, packname) {
        if (!packname)
            return cardlist;
        return cardlist.filter(function (card) {
            for (let y = 0; y < card.espansioni.length; y++) { // errore
                if (card.espansioni[y].nome == packname) {
                    return card.nome;
                }
            }
        });
    }
}
EnvelopesFilterPipe.ɵfac = function EnvelopesFilterPipe_Factory(t) { return new (t || EnvelopesFilterPipe)(); };
EnvelopesFilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "envelopesFilter", type: EnvelopesFilterPipe, pure: true });


/***/ }),

/***/ 6180:
/*!***********************************!*\
  !*** ./src/app/errors.service.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorsService": function() { return /* binding */ ErrorsService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class ErrorsService {
    constructor() { }
    handleError(error) {
        console.error(error);
        // if(error instanceof HttpErrorResponse){
        //   alert(`server error: ${error.message}`)
        // }else{
        //   alert(`errore sconosciuto: ${error.message}`)
        // }
    }
}
ErrorsService.ɵfac = function ErrorsService_Factory(t) { return new (t || ErrorsService)(); };
ErrorsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorsService, factory: ErrorsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3412:
/*!******************************************************!*\
  !*** ./src/app/field-error/field-error.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldErrorComponent": function() { return /* binding */ FieldErrorComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 2891);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);



function FieldErrorComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Campo obbligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FieldErrorComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "E-mail errata");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FieldErrorComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Valore non conforme");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function FieldErrorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FieldErrorComponent_div_0_div_1_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, FieldErrorComponent_div_0_div_2_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FieldErrorComponent_div_0_div_3_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.field.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.field.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.field.errors.pattern);
} }
function FieldErrorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const msg_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", msg_r5, "\n");
} }
class FieldErrorComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
    get orderErrorMessages() {
        if (this.auth.usersError && this.auth.usersError[this.fieldName] !== undefined) {
            return this.auth.usersError[this.fieldName];
        }
        return [];
    }
}
FieldErrorComponent.ɵfac = function FieldErrorComponent_Factory(t) { return new (t || FieldErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
FieldErrorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FieldErrorComponent, selectors: [["app-field-error"]], inputs: { field: "field", fieldName: "fieldName" }, decls: 2, vars: 2, consts: [["class", "text-danger", 4, "ngIf"], ["class", "text-danger", 4, "ngFor", "ngForOf"], [1, "text-danger"], [4, "ngIf"]], template: function FieldErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, FieldErrorComponent_div_0_Template, 4, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FieldErrorComponent_div_1_Template, 2, 1, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.field.invalid && (ctx.field.touched || ctx.field.dirty) && ctx.field.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orderErrorMessages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWVsZC1lcnJvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 0, consts: [["id", "informazioni"], ["id", "bg-dark", 1, "bg-dark", "text-white"], ["id", "id-footer-row1", 1, "row-md", 2, "padding", "10px"], ["id", "id-footer-row2", 1, "row-md", 2, "padding", "10px"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A91996 KAZUKI TAKAHASHI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A92017 NAS\u30FBTV TOKYO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A92019 Konami Digital Entertainment \u00A0 | \u00A0 Powered by Krauser_Corporation \u00A0 | \u00A0 Contatti: andrea.franco@virgilio.it ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#bg-dark[_ngcontent-%COMP%]{\r\n  background-image: url('/assets/Wiki-background.jpg');\r\n  background-repeat: repeat;\r\n}\r\n\r\n#id-footer-row1[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n#id-footer-row2[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n#informazioni[_ngcontent-%COMP%]{\r\n  border-top: 4px solid #212121;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0RBQW9EO0VBQ3BELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiZy1kYXJre1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9XaWtpLWJhY2tncm91bmQuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxufVxyXG5cclxuI2lkLWZvb3Rlci1yb3cxe1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jaWQtZm9vdGVyLXJvdzJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jaW5mb3JtYXppb25pe1xyXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 20, vars: 1, consts: [["id", "home-wallpaper", "alt", "yu-gi-ho_wallpaper", 1, "img-fluid", 3, "src"], [1, "container-fluid"], [1, "row"], ["routerLinkActive", "active", 1, "col-md"], ["routerLink", "/cardlist", 1, "menu-main"], ["id", "par", 1, "nasa-apply-font"], ["routerLink", "/recipes", 1, "menu-main"], ["routerLink", "/utility", 1, "menu-main"], ["routerLink", "/rulespage", 1, "menu-main"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Card list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ricette");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Utilit\u00E0 del duellante");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Le regole ufficiali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "/assets/Yu Gi Oh Duel Monsters 224224 Latino MEGA   Identi.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["#home-description[_ngcontent-%COMP%]{\r\n  border-style: inset;\r\n  border-width: 5px;\r\n  border-top-color: darkred;\r\n  border-left-color: darkred;\r\n  border-right-color: darkred;\r\n  border-bottom-color: darkred;\r\n}\r\n\r\n#home-wallpaper[_ngcontent-%COMP%]{\r\n  border-bottom: 4px solid #212121;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n\r\n.row[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/Wiki-background.jpg\");\r\n  background-size: auto\r\n}\r\n\r\n.col-md[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n  margin-right: 25px;\r\n  margin-left: 25px;\r\n  border-color: #ff9e00;\r\n  border-style: solid;\r\n  border-width: 10px;\r\n  background: rgba(0,0,0,1);\r\n  background: radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 36%, rgba(105,63,0,1) 50%, rgba(105,63,0,1) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#693f00', GradientType=1 );\r\n}\r\n\r\n#par[_ngcontent-%COMP%]{\r\n  color: white;\r\n  margin-top: 70%;\r\n  margin-bottom: 70%;\r\n  text-align: center;\r\n}\r\n\r\n.menu-main[_ngcontent-%COMP%]{\r\n  min-height:400px;\r\n\tpadding:10px 10px 5px;\r\n\t\r\n\tdisplay: block;\r\n\tbox-sizing: border-box;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0Usb0RBQW9EO0VBQ3BEO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQU96QixnSUFBZ0k7RUFDaEksb0hBQW9IO0FBQ3RIOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0NBQ2pCLHFCQUFxQjtDQUNyQiw2QkFBNkI7Q0FDN0IsY0FBYztDQUNkLHNCQUFzQjtBQUN2QiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZS1kZXNjcmlwdGlvbntcclxuICBib3JkZXItc3R5bGU6IGluc2V0O1xyXG4gIGJvcmRlci13aWR0aDogNXB4O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IGRhcmtyZWQ7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IGRhcmtyZWQ7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBkYXJrcmVkO1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IGRhcmtyZWQ7XHJcbn1cclxuXHJcbiNob21lLXdhbGxwYXBlcntcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi8qLmNvbnRhaW5lci1mbHVpZHtcclxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMyMTIxMjE7XHJcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgIzIxMjEyMTtcclxufSovXHJcblxyXG4ucm93e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvV2lraS1iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG9cclxufVxyXG5cclxuLmNvbC1tZHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjVweDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBib3JkZXItY29sb3I6ICNmZjllMDA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwxKTtcclxuXHJcbiAgYmFja2dyb3VuZDogLW1vei1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDAsMCwwLDEpIDAlLCByZ2JhKDAsMCwwLDEpIDM2JSwgcmdiYSgxMDUsNjMsMCwxKSA1MCUsIHJnYmEoMTA1LDYzLDAsMSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChyYWRpYWwsIGNlbnRlciBjZW50ZXIsIDBweCwgY2VudGVyIGNlbnRlciwgMTAwJSwgY29sb3Itc3RvcCgwJSwgcmdiYSgwLDAsMCwxKSksIGNvbG9yLXN0b3AoMzYlLCByZ2JhKDAsMCwwLDEpKSwgY29sb3Itc3RvcCg1MCUsIHJnYmEoMTA1LDYzLDAsMSkpLCBjb2xvci1zdG9wKDEwMCUsIHJnYmEoMTA1LDYzLDAsMSkpKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMCwwLDAsMSkgMCUsIHJnYmEoMCwwLDAsMSkgMzYlLCByZ2JhKDEwNSw2MywwLDEpIDUwJSwgcmdiYSgxMDUsNjMsMCwxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlIGNvdmVyLCByZ2JhKDAsMCwwLDEpIDAlLCByZ2JhKDAsMCwwLDEpIDM2JSwgcmdiYSgxMDUsNjMsMCwxKSA1MCUsIHJnYmEoMTA1LDYzLDAsMSkgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLW1zLXJhZGlhbC1ncmFkaWVudChjZW50ZXIsIGVsbGlwc2UgY292ZXIsIHJnYmEoMCwwLDAsMSkgMCUsIHJnYmEoMCwwLDAsMSkgMzYlLCByZ2JhKDEwNSw2MywwLDEpIDUwJSwgcmdiYSgxMDUsNjMsMCwxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMCwwLDAsMSkgMCUsIHJnYmEoMCwwLDAsMSkgMzYlLCByZ2JhKDEwNSw2MywwLDEpIDUwJSwgcmdiYSgxMDUsNjMsMCwxKSAxMDAlKTtcclxuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzAwMDAwMCcsIGVuZENvbG9yc3RyPScjNjkzZjAwJywgR3JhZGllbnRUeXBlPTEgKTtcclxufVxyXG5cclxuI3BhcntcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogNzAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDcwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW51LW1haW57XHJcbiAgbWluLWhlaWdodDo0MDBweDtcclxuXHRwYWRkaW5nOjEwcHggMTBweCA1cHg7XHJcblx0Lypib3JkZXI6IDJweCBzb2xpZCAjMjEyMTIxOyovXHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3757:
/*!****************************************************************!*\
  !*** ./src/app/leggendary-cards/leggendary-cards.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeggendaryCardsComponent": function() { return /* binding */ LeggendaryCardsComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class LeggendaryCardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LeggendaryCardsComponent.ɵfac = function LeggendaryCardsComponent_Factory(t) { return new (t || LeggendaryCardsComponent)(); };
LeggendaryCardsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeggendaryCardsComponent, selectors: [["app-leggendary-cards"]], decls: 2, vars: 0, template: function LeggendaryCardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " leggendary-cards works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWdnZW5kYXJ5LWNhcmRzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 2891);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);






function LoginComponent_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.error);
} }
class LoginComponent {
    constructor(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    submit() {
        this.authservice.login(this.username, this.password)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)())
            .subscribe(result => this.router.navigate(['cardlist']), err => this.error = 'Could not authenticate');
    }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 17, vars: 3, consts: [[4, "ngIf"], [1, "container"], [1, "pagetitle"], [2, "font-family", "yu-gi-ho"], ["id", "registerform", 3, "ngSubmit"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "password"], ["type", "password", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-3"], ["type", "submit", 1, "btn", "btn-primary"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoginComponent_h4_0_Template, 2, 1, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Pagina di login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_9_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: [".pagetitle[_ngcontent-%COMP%]{\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n#registerform[_ngcontent-%COMP%]{\r\n  margin-top: 85px;\r\n  margin-bottom: 85px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZXRpdGxle1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG4jcmVnaXN0ZXJmb3Jte1xyXG4gIG1hcmdpbi10b3A6IDg1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogODVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 4249:
/*!**************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginpageComponent": function() { return /* binding */ LoginpageComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _dati_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dati.service */ 4173);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ 2891);
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipes.service */ 2910);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);






function LoginpageComponent_div_12_h6_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "font", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " MAIN DECK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginpageComponent_div_12_h6_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "font", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " EXTRA DECK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginpageComponent_div_12_h6_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "font", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " SIDE DECK ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginpageComponent_div_12_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("ATK: ", card_r3.attacco, "");
} }
function LoginpageComponent_div_12_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "ATK: ????");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginpageComponent_div_12_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "ATK: X000");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginpageComponent_div_12_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("DEF: ", card_r3.difesa, "");
} }
function LoginpageComponent_div_12_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "DEF: ????");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginpageComponent_div_12_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "DEF: X000");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginpageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginpageComponent_div_12_h6_1_Template, 3, 0, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LoginpageComponent_div_12_h6_2_Template, 3, 0, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LoginpageComponent_div_12_h6_3_Template, 3, 0, "h6", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LoginpageComponent_div_12_div_16_Template, 3, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, LoginpageComponent_div_12_div_17_Template, 3, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, LoginpageComponent_div_12_div_18_Template, 3, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, LoginpageComponent_div_12_div_19_Template, 3, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, LoginpageComponent_div_12_div_20_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, LoginpageComponent_div_12_div_21_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "font", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginpageComponent_div_12_Template_button_click_40_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const card_r3 = restoredCtx.$implicit; const i_r4 = restoredCtx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r16.delete(card_r3, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "REM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", card_r3.type == "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", card_r3.type == "extra");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", card_r3.type == "side");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("NOME: ", card_r3.nome, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("ATTRIBUTO: ", card_r3.attributo, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("LV:", card_r3.livello, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](card_r3.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", card_r3.attacco != 22222 && card_r3.attacco != 10000);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", card_r3.attacco == 22222);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", card_r3.attacco == 10000);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", card_r3.difesa != 22222 && card_r3.attacco != 10000);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", card_r3.difesa == 22222);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", card_r3.difesa == 10000);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](card_r3.descrizione);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](card_r3.blugem);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](card_r3.redgem);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", card_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](card_r3.pendeffect);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("QNT: ", card_r3.qnt, "");
} }
class LoginpageComponent {
    constructor(carte, utente, datarecipe) {
        this.carte = carte;
        this.utente = utente;
        this.datarecipe = datarecipe;
        this.val = null;
        this.name = this.utente.UserLoggedName;
        this.surname = this.utente.UserLoggedCognome;
        this.email = this.utente.UserLoggedEmail;
    }
    ngOnInit() {
        this.carte.CardsLoggedUser();
    }
    delete(card, ind) {
        this.carte.deleteCardfromdeck(card, ind);
    }
}
LoginpageComponent.ɵfac = function LoginpageComponent_Factory(t) { return new (t || LoginpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_dati_service__WEBPACK_IMPORTED_MODULE_0__.DatiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_recipes_service__WEBPACK_IMPORTED_MODULE_2__.RecipesService)); };
LoginpageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginpageComponent, selectors: [["app-loginpage"]], decls: 44, vars: 4, consts: [[1, "gruppo"], [1, "container"], [1, "pagetitle"], [2, "font-family", "yu-gi-ho"], [1, "row"], ["id", "pagedescription", 1, "col-sm"], ["id", "desc"], ["color", "white"], [1, "col"], ["class", "grid-container", 4, "ngFor", "ngForOf"], [1, "form-row"], ["id", "userdata", 1, "form-group", "col-md-6"], ["type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "formric", 1, "form-group", "col-md-6"], ["placeholder", "nome ricetta", 1, "form-control"], ["nomericetta", ""], ["placeholder", "descrizione", 1, "form-control"], ["descrizione", ""], [1, "btn", "btn-primary", 3, "click"], [1, "grid-container"], [4, "ngIf"], [1, "nome"], [1, "attributo"], [1, "livello"], [1, "tipo"], ["class", "atk", 4, "ngIf"], ["class", "def", 4, "ngIf"], [1, "descrizione"], [1, "blugem"], [1, "redgem"], ["align", "center", 1, "img"], [3, "src"], [1, "pendeffect"], [1, "qnt"], [1, "button"], ["type", "button", "name", "card", 3, "click"], ["color", "yellow"], ["color", "blue"], ["color", "darkgreen"], [1, "atk"], [1, "def"]], template: function LoginpageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "La tua area personale");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "font", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Benvenuto nella tua area personale giovane duellante!, qui gestire il tuo deck personale e pubblicare la tua ricetta sul database nell' elenco di tutte le ricette degli compilando il form sottostante (sempre che tu lo voglia ovviamente)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, LoginpageComponent_div_12_Template, 42, 19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "font", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "I tuoi dati personali");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "font", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Nome:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginpageComponent_Template_input_ngModelChange_23_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "font", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Cognome:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginpageComponent_Template_input_ngModelChange_26_listener($event) { return ctx.surname = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "font", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function LoginpageComponent_Template_input_ngModelChange_29_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "font", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Publica la tua ricetta sul nostro database");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "font", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Nome ricetta:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "font", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "descrizione:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginpageComponent_Template_button_click_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](37); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](41); ctx.datarecipe.Addrecipes(_r1.value, _r2.value); _r1.value = ""; return _r2.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Pubblica ricetta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.carte.dati_carte_utente.cards);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.surname);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.email);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".form-row[_ngcontent-%COMP%]{\r\n  align: center;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  width: 96px;\r\n  height: 140px;\r\n  margin: 5px;\r\n}\r\n\r\n.gruppo[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/Wiki-background.jpg\");\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n\r\nh6[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr 1fr 1fr 1fr;\r\n  grid-template-areas: \"img nome nome nome nome nome nome\" \"img attributo attributo livello tipo atk def\" \"img descrizione descrizione descrizione descrizione descrizione descrizione\" \"img pendeffect pendeffect blugem redgem qnt button\";\r\n}\r\n\r\n.img[_ngcontent-%COMP%] { grid-area: img; }\r\n\r\n.nome[_ngcontent-%COMP%] { grid-area: nome; }\r\n\r\n.attributo[_ngcontent-%COMP%] { grid-area: attributo; }\r\n\r\n.livello[_ngcontent-%COMP%] { grid-area: livello; }\r\n\r\n.tipo[_ngcontent-%COMP%] { grid-area: tipo; }\r\n\r\n.atk[_ngcontent-%COMP%] { grid-area: atk; }\r\n\r\n.def[_ngcontent-%COMP%] { grid-area: def; }\r\n\r\n.descrizione[_ngcontent-%COMP%] { grid-area: descrizione; }\r\n\r\n.pendeffect[_ngcontent-%COMP%] { grid-area: pendeffect; }\r\n\r\n.blugem[_ngcontent-%COMP%] { grid-area: blugem; }\r\n\r\n.redgem[_ngcontent-%COMP%] { grid-area: redgem; }\r\n\r\n.qnt[_ngcontent-%COMP%] { grid-area: qnt; }\r\n\r\n.button[_ngcontent-%COMP%] { grid-area: button; }\r\n\r\n#pagedescription[_ngcontent-%COMP%]{\r\n  margin-bottom: 30px;\r\n  box-sizing: border-box;\r\n  border: 6px solid #212121;\r\n  min-height:100px;\r\n\tpadding:30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2lucGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0RBQWtEO0VBQ2xELG1DQUFtQztFQUNuQywwT0FBME87QUFDNU87O0FBRUEsT0FBTyxjQUFjLEVBQUU7O0FBRXZCLFFBQVEsZUFBZSxFQUFFOztBQUV6QixhQUFhLG9CQUFvQixFQUFFOztBQUVuQyxXQUFXLGtCQUFrQixFQUFFOztBQUUvQixRQUFRLGVBQWUsRUFBRTs7QUFFekIsT0FBTyxjQUFjLEVBQUU7O0FBRXZCLE9BQU8sY0FBYyxFQUFFOztBQUV2QixlQUFlLHNCQUFzQixFQUFFOztBQUV2QyxjQUFjLHFCQUFxQixFQUFFOztBQUVyQyxVQUFVLGlCQUFpQixFQUFFOztBQUU3QixVQUFVLGlCQUFpQixFQUFFOztBQUU3QixPQUFPLGNBQWMsRUFBRTs7QUFFdkIsVUFBVSxpQkFBaUIsRUFBRTs7QUFFN0I7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixnQkFBZ0I7Q0FDakIsWUFBWTtBQUNiIiwiZmlsZSI6ImxvZ2lucGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tcm93e1xyXG4gIGFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmltZ3tcclxuICB3aWR0aDogOTZweDtcclxuICBoZWlnaHQ6IDE0MHB4O1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uZ3J1cHBve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvV2lraS1iYWNrZ3JvdW5kLmpwZ1wiKTtcclxufVxyXG5cclxucHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmg2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW1nIG5vbWUgbm9tZSBub21lIG5vbWUgbm9tZSBub21lXCIgXCJpbWcgYXR0cmlidXRvIGF0dHJpYnV0byBsaXZlbGxvIHRpcG8gYXRrIGRlZlwiIFwiaW1nIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lIGRlc2NyaXppb25lXCIgXCJpbWcgcGVuZGVmZmVjdCBwZW5kZWZmZWN0IGJsdWdlbSByZWRnZW0gcW50IGJ1dHRvblwiO1xyXG59XHJcblxyXG4uaW1nIHsgZ3JpZC1hcmVhOiBpbWc7IH1cclxuXHJcbi5ub21lIHsgZ3JpZC1hcmVhOiBub21lOyB9XHJcblxyXG4uYXR0cmlidXRvIHsgZ3JpZC1hcmVhOiBhdHRyaWJ1dG87IH1cclxuXHJcbi5saXZlbGxvIHsgZ3JpZC1hcmVhOiBsaXZlbGxvOyB9XHJcblxyXG4udGlwbyB7IGdyaWQtYXJlYTogdGlwbzsgfVxyXG5cclxuLmF0ayB7IGdyaWQtYXJlYTogYXRrOyB9XHJcblxyXG4uZGVmIHsgZ3JpZC1hcmVhOiBkZWY7IH1cclxuXHJcbi5kZXNjcml6aW9uZSB7IGdyaWQtYXJlYTogZGVzY3JpemlvbmU7IH1cclxuXHJcbi5wZW5kZWZmZWN0IHsgZ3JpZC1hcmVhOiBwZW5kZWZmZWN0OyB9XHJcblxyXG4uYmx1Z2VtIHsgZ3JpZC1hcmVhOiBibHVnZW07IH1cclxuXHJcbi5yZWRnZW0geyBncmlkLWFyZWE6IHJlZGdlbTsgfVxyXG5cclxuLnFudCB7IGdyaWQtYXJlYTogcW50OyB9XHJcblxyXG4uYnV0dG9uIHsgZ3JpZC1hcmVhOiBidXR0b247IH1cclxuXHJcbiNwYWdlZGVzY3JpcHRpb257XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogNnB4IHNvbGlkICMyMTIxMjE7XHJcbiAgbWluLWhlaWdodDoxMDBweDtcclxuXHRwYWRkaW5nOjMwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 6313:
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 2891);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




function NavbarComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Administration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavbarComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_a_21_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    logout() {
        this.auth.logout();
        this.router.navigate(['login']);
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 22, vars: 5, consts: [["id", "nav1", 1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], ["routerLink", "/home", 1, "navbar-brand"], [1, "nasa-apply-font", 2, "padding-left", "10px"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarText", "aria-controls", "navbarText", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarText", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], ["routerLinkActive", "active", 1, "nav-item"], ["routerLink", "/home", 1, "nav-link"], ["routerLink", "/cardlist", 1, "nav-link"], ["class", "nav-item", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/recipes", 1, "nav-link"], ["class", "nav-link", "href", "#", 3, "click", 4, "ngIf"], ["routerLink", "/register", 1, "nav-link"], ["routerLink", "/login", 1, "nav-link"], ["routerLink", "/loginpage", 1, "nav-link"], ["routerLink", "/adminpage", 1, "nav-link"], ["href", "#", 1, "nav-link", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h6", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Yu-Gi-Oh Deck management system");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Card list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, NavbarComponent_li_14_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NavbarComponent_li_15_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NavbarComponent_li_16_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, NavbarComponent_li_17_Template, 3, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Ricette degli utenti");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, NavbarComponent_a_21_Template, 2, 0, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.auth.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.loggedIn && ctx.auth.adminControl);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.auth.loggedIn);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["#nav1[_ngcontent-%COMP%]{\r\n  background-image: url('/assets/Wiki-background.jpg');\r\n  background-repeat: repeat-x;\r\n  border-bottom: 4px solid #212121;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0RBQW9EO0VBQ3BELDJCQUEyQjtFQUMzQixnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2MXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvV2lraS1iYWNrZ3JvdW5kLmpwZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzIxMjEyMTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 3575:
/*!*************************************!*\
  !*** ./src/app/otherfilter.pipe.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherfilterPipe": function() { return /* binding */ OtherfilterPipe; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class OtherfilterPipe {
    transform(value, args) {
        return null;
    }
}
OtherfilterPipe.ɵfac = function OtherfilterPipe_Factory(t) { return new (t || OtherfilterPipe)(); };
OtherfilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "otherfilter", type: OtherfilterPipe, pure: true });


/***/ }),

/***/ 4725:
/*!********************************************************!*\
  !*** ./src/app/recipes-list/recipes-list.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesListComponent": function() { return /* binding */ RecipesListComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../recipes.service */ 2910);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);




function RecipesListComponent_tr_33_div_11_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipesListComponent_tr_33_div_11_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const recipe_r1 = ctx_r7.$implicit; const i_r2 = ctx_r7.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.deleterec(recipe_r1.idric, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "DELETE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RecipesListComponent_tr_33_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecipesListComponent_tr_33_div_11_button_1_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const recipe_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r4.idric == recipe_r1.idric);
} }
function RecipesListComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecipesListComponent_tr_33_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const recipe_r1 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.showRecipeDetail(recipe_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Deck View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RecipesListComponent_tr_33_div_11_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const recipe_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r1.idric);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r1.nomeric);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recipe_r1.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.datarecipe.recipesid.recipes);
} }
class RecipesListComponent {
    constructor(datarecipe, route, router) {
        this.datarecipe = datarecipe;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.datarecipe.Getallallrecipes();
        this.datarecipe.Getrecipesidofuser();
    }
    showRecipeDetail(recipe) {
        this.datarecipe.single_recipe = recipe;
        this.route.navigate(['recipess', this.datarecipe.single_recipe.idric]);
    }
    deleterec(id, ind) {
        this.datarecipe.DeleteRecipe(id, ind);
    }
}
RecipesListComponent.ɵfac = function RecipesListComponent_Factory(t) { return new (t || RecipesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_recipes_service__WEBPACK_IMPORTED_MODULE_0__.RecipesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
RecipesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecipesListComponent, selectors: [["app-recipes-list"]], decls: 36, vars: 1, consts: [[1, "gruppo2"], [1, "container"], [1, "pagetitle"], [2, "font-family", "yu-gi-ho"], [1, "row"], ["id", "pagedescription", 1, "col-sm"], ["id", "desc"], ["color", "white"], [1, "col"], [1, "table", "table-sm", "table-dark"], ["id", "tabletitle"], [4, "ngFor", "ngForOf"], ["type", "button", "name", "recipedetailbutton", 3, "click"], ["type", "button", "name", "recipedetailbuttons", 3, "click", 4, "ngIf"], ["type", "button", "name", "recipedetailbuttons", 3, "click"]], template: function RecipesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Ricette degli utenti");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "font", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "In questa pagina sono presenti tutte le Ricette dei Deck pubblicate dagli utenti, puoi usarle come riferimento per migliorare nei duelli. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Hai la possibilit\u00E0 di vedere i dettagli di ogni ricetta cliccando sul pulsante \"Deck View\". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Se una ricetta \u00E8 di tua propriet\u00E0 puoi anche decidere se eliminarla o meno.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cod");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Descrizione");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Dettagli ricetta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "cancella");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RecipesListComponent_tr_33_Template, 12, 4, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.datarecipe.allric.recipes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["table[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n}\r\n.gruppo2[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/Wiki-background.jpg\");\r\n}\r\n#pagedescription[_ngcontent-%COMP%]{\r\n  box-sizing: border-box;\r\n  border: 6px solid #212121;\r\n  min-height:100px;\r\n\tpadding:30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY2lwZXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvREFBb0Q7QUFDdEQ7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0NBQ2pCLFlBQVk7QUFDYiIsImZpbGUiOiJyZWNpcGVzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLmdydXBwbzJ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9XaWtpLWJhY2tncm91bmQuanBnXCIpO1xyXG59XHJcbiNwYWdlZGVzY3JpcHRpb257XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDZweCBzb2xpZCAjMjEyMTIxO1xyXG4gIG1pbi1oZWlnaHQ6MTAwcHg7XHJcblx0cGFkZGluZzozMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2910:
/*!************************************!*\
  !*** ./src/app/recipes.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipesService": function() { return /* binding */ RecipesService; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 2891);




class RecipesService {
    constructor(http, utente) {
        this.http = http;
        this.utente = utente;
        this.recipesid = [];
    }
    Addrecipes(name, desc) {
        name = name.trim();
        desc = desc.trim();
        if (!name) {
            return;
        }
        if (!desc) {
            return;
        }
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/ricetta/user/" + localStorage.getItem("token_decoded_userid");
        let recipe = {};
        recipe["nomeric"] = name;
        recipe["desc"] = desc;
        this.http.post(url, recipe).subscribe((data) => {
            alert(data.status);
        });
    }
    Getrecipe(id) {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/ricetta/" + id;
        this.http.get(url).subscribe((data) => {
            this.singleric = data;
        });
        return this.singleric;
    }
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
    Getallallrecipes() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/recipes";
        this.http.get(url).subscribe((data) => {
            this.allric = data;
        });
        return this.allric;
    }
    Getrecipesidofuser() {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/recipes/" + localStorage.getItem("token_decoded_userid") + "/user";
        this.http.get(url).subscribe((data) => {
            this.recipesid = data;
        });
        //console.log(this.recipesid['recipes'][0].idric);
        //console.log(this.recipesid['recipes'].length);
    }
    ControllRecipe(id) {
        for (let i = 0; i <= this.recipesid['recipes'].length; i++) {
            if (this.recipesid['recipes'][i].idric == id) {
                return id;
            }
            else {
                return null;
            }
        }
    }
    Addcomment(id, desc) {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/comments/user/" + localStorage.getItem("token_decoded_userid") + "/ricetta/" + id;
        let comment = {};
        comment["desc"] = desc;
        this.user_comment = {
            nome: this.utente.UserLoggedName,
            cognome: this.utente.UserLoggedCognome,
            id_com: null,
            desc: desc
        };
        this.http.post(url, comment).subscribe((data) => {
            console.info(data);
            this.user_comment["id_com"] = data.id;
            this.common_id_comment['id_com'] = data.id;
        });
        //console.log(this.user_comment)
        this.all_comment_ids["comments"].push(this.common_id_comment);
        this.all_comment["comments"].push(this.user_comment);
        alert("commento pubblicato!");
    }
    Getrecipescomments(id) {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/comments/recipe/" + id;
        this.http.get(url).subscribe((data) => {
            this.all_comment = data;
        });
    }
    Getrecipescommentsids(id, iduser) {
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/comments/recipe/" + id + "/user/" + iduser;
        this.http.get(url).subscribe((data) => {
            this.all_comment_ids = data;
        });
    }
    DeleteRecipe(idrecipe, index) {
        this.allric["recipes"].splice(index, 1);
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/recipe/" + idrecipe;
        this.http.delete(url).subscribe((data) => {
            console.log(data);
        });
    }
    DeleteComment(idcomment, index) {
        this.all_comment["comments"].splice(index, 1);
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.url + "/comment/" + idcomment;
        this.http.delete(url).subscribe((data) => {
            console.log(data);
        });
    }
}
RecipesService.ɵfac = function RecipesService_Factory(t) { return new (t || RecipesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
RecipesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RecipesService, factory: RecipesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": function() { return /* binding */ RegisterComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 2891);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _field_error_field_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../field-error/field-error.component */ 3412);






function RegisterComponent_h4_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Questa email \u00E8 stata gia usata");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterComponent_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.authservice.registeruser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Utente registrato con successo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(authservice) {
        this.authservice = authservice;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.authservice.inputnome, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.authservice.inputcognome, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.authservice.inputemail, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
            pass: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(this.authservice.inputpass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
        });
        this.form.valueChanges.subscribe(() => {
            this.authservice.inputnome = this.form.value.firstname;
            this.authservice.inputcognome = this.form.value.lastname;
            this.authservice.inputemail = this.form.value.email;
            this.authservice.inputpass = this.form.value.pass;
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 43, vars: 8, consts: [[4, "ngIf"], [1, "container"], [1, "pagetitle"], [2, "font-family", "yu-gi-ho"], ["id", "registerform", "novalidate", "", 3, "formGroup"], [1, "form-row"], [1, "form-group", "col-md-6"], ["for", "inputEmail4"], ["formControlName", "email", "type", "email", "id", "inputEmail4", "placeholder", "Email", 1, "form-control"], ["fieldName", "email", 3, "field"], ["for", "inputPassword4"], ["formControlName", "pass", "type", "password", "id", "inputPassword4", "placeholder", "Password", 1, "form-control"], ["fieldName", "pass", 3, "field"], [1, "form-group"], ["for", "inputAddress"], ["formControlName", "firstname", "type", "text", "id", "inputAddress", "placeholder", "firstname", 1, "form-control"], ["fieldName", "firstname", 3, "field"], ["for", "inputAddress2"], ["formControlName", "lastname", "type", "text", "id", "inputAddress2", "placeholder", "lastname", 1, "form-control"], ["fieldName", "lastname", 3, "field"], [1, "form-check"], ["type", "checkbox", "id", "gridCheck", 1, "form-check-input"], ["for", "gridCheck", 1, "form-check-label"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "alert alert-success m4", "role", "alert", 4, "ngIf"], ["id", "pagedescription", 1, "col-sm"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["role", "alert", 1, "alert", "alert-success", "m4"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, RegisterComponent_h4_0_Template, 2, 0, "h4", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Pagina di registrazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-field-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "app-field-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "FirstName");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "app-field-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Lastname");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "app-field-error", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Check me out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, RegisterComponent_button_32_Template, 2, 0, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, RegisterComponent_div_33_Template, 3, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Registratevi per sfruttare le funzionalit\u00E0 dell' applicazione e potrete:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " gestire il vostro deck aggiungendo e rimuovendo le carte. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " pubblicare e rimuovere la vostre ricette ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " commentare e recensire le ricette degli altrui ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authservice.usersError);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx.form.controls.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx.form.controls.pass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx.form.controls.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("field", ctx.form.controls.lastname);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authservice.usersData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _field_error_field_error_component__WEBPACK_IMPORTED_MODULE_1__.FieldErrorComponent], styles: ["#registerform[_ngcontent-%COMP%]{\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.pagetitle[_ngcontent-%COMP%]{\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n#pagedescription[_ngcontent-%COMP%]{\r\n  box-sizing: border-box;\r\n  border: 4px solid #212121;\r\n  margin-bottom: 40px;\r\n  min-height:100px;\r\n\tpadding:30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCLFlBQVk7QUFDYiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlZ2lzdGVyZm9ybXtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5wYWdldGl0bGV7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMyMTIxMjE7XHJcbn1cclxuXHJcbiNwYWdlZGVzY3JpcHRpb257XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjMjEyMTIxO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWluLWhlaWdodDoxMDBweDtcclxuXHRwYWRkaW5nOjMwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2727:
/*!**************************************************!*\
  !*** ./src/app/rulespage/rulespage.component.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RulespageComponent": function() { return /* binding */ RulespageComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-pdf-viewer */ 3621);



class RulespageComponent {
    constructor() {
        this.pdfSrc = '/assets/Rulebook_v9_it.pdf';
        this.pagenumber = 1;
    }
    ngOnInit() {
    }
    Incrementpage(e) {
        if (this.pagenumber >= 1) {
            this.pagenumber++;
        }
    }
    Decrementpage(e) {
        if (this.pagenumber == 1) {
            this.pagenumber = 1;
        }
        else {
            this.pagenumber--;
        }
    }
}
RulespageComponent.ɵfac = function RulespageComponent_Factory(t) { return new (t || RulespageComponent)(); };
RulespageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RulespageComponent, selectors: [["app-rulespage"]], decls: 19, vars: 7, consts: [[1, "sfondo"], [1, "container"], [1, "pagetitle"], [2, "font-family", "yu-gi-ho"], ["id", "options", 1, "row", "justify-content-center"], ["id", "indietro", 1, "col-md-1"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["id", "avanti", 1, "col-md-1"], ["id", "pag", 1, "col-md-2"], ["color", "white"], ["value", "Vai alla pagina", "type", "Text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row"], [1, "col"], [2, "display", "block", 3, "src", "render-text", "page", "original-size", "zoom", "show-all"]], template: function RulespageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Libro delle regole ufficiali");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RulespageComponent_Template_button_click_7_listener() { return ctx.Decrementpage(ctx.pagenumber); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " indietro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RulespageComponent_Template_button_click_10_listener() { return ctx.Incrementpage(ctx.pagenumber); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " avanti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "font", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Pagina:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RulespageComponent_Template_input_ngModelChange_15_listener($event) { return ctx.pagenumber = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "pdf-viewer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pagenumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("render-text", true)("page", ctx.pagenumber)("original-size", false)("zoom", 0.5)("show-all", false);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__.PdfViewerComponent], styles: ["#options[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.pagetitle[_ngcontent-%COMP%]{\r\n  border-bottom: 4px solid #212121;\r\n}\r\n\r\n.sfondo[_ngcontent-%COMP%]{\r\n  background-image: url(\"/assets/vrains_background.png\");\r\n  background-size: 100%\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNEQUFzRDtFQUN0RDtBQUNGIiwiZmlsZSI6InJ1bGVzcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI29wdGlvbnN7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ucGFnZXRpdGxle1xyXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjMjEyMTIxO1xyXG59XHJcblxyXG4uc2ZvbmRve1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvdnJhaW5zX2JhY2tncm91bmQucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: "https://yu-gi-ho-deploy-production.up.railway.app"
    //url: "http://0.0.0.0:3000"
    //url: "http://localhost:8000"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 172:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 2001:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 3779:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 2258:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map