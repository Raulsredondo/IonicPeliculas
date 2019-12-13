(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-pelis-info-pelis-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/info-pelis/info-pelis.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/info-pelis/info-pelis.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n  <ion-toolbar color=\"tertiary\">\n    <ion-button slot=\"start\" (click)=\"close()\">\n      <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    </ion-button>\n    <ion-title>{{peli.Titulo}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"full\">\n    <ion-item *ngIf=\"peli\">\n      <ion-label position=\"stacked\">Título <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input required type=\"text\" placeholder=\"Titulo\" [(ngModel)]=\"peli.Titulo\"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"peli\">\n      <ion-label>Género</ion-label>\n      <ion-select placeholder=\"Genero\" [(ngModel)]=\"peli.Genero\" multiple=\"true\">\n        <ion-select-option value=\"accion\" selected>Acción</ion-select-option>\n        <ion-select-option value=\"aventuras\">Aventura</ion-select-option>\n        <ion-select-option value=\"drama\">Drama</ion-select-option>\n        <ion-select-option value=\"terror\">Terror</ion-select-option>\n        <ion-select-option value=\"musical\">Musical</ion-select-option>\n        <ion-select-option value=\"cienciaFiccion\">Ciencia Ficción</ion-select-option>\n        <ion-select-option value=\"guerra\">Guerra</ion-select-option>\n        <ion-select-option value=\"suspense\">Suspense</ion-select-option>\n        <ion-select-option value=\"animacion\">Animación</ion-select-option>\n\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf=\"peli\">\n      <ion-label position=\"floating\">Estreno</ion-label>\n      <ion-input type=\"text\" placeholder=\"Estreno\" [(ngModel)]=\"peli.Estreno\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"peli\">\n      <ion-label position=\"stacked\">Director <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input required type=\"text\" placeholder=\"Director\" [(ngModel)]=\"peli.Director\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"peli\">\n      <ion-label position=\"floating\">Duración</ion-label>\n      <ion-input type=\"text\" placeholder=\"Duracion\" [(ngModel)]=\"peli.Duracion\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"peli\">\n      <ion-label>Calificación</ion-label>\n      <ion-select placeholder=\"Calificacion\" [(ngModel)]=\"peli.Calificacion\" multiple=\"true\">\n        <ion-select-option value=\"Mayor18\" selected>Mayores de 18</ion-select-option>\n        <ion-select-option value=\"familia\">Para toda la familia</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf=\"peli\">\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-textarea  [(ngModel)]=\"peli.Descripcion\"></ion-textarea>\n    </ion-item>\n    <ion-item *ngIf=\"peli\">\n      <ion-label position=\"floating\">Imagen</ion-label>\n      <ion-input type=\"text\" placeholder=\"Duracion\" [(ngModel)]=\"peli.img\"></ion-input>\n    </ion-item>\n\n\n\n    <ion-button expand=\"block\" (click)=\"savePelis()\"><ion-icon name=\"folder-open\"></ion-icon>Save</ion-button>\n    <ion-button color=\"warning\" (click)=\"guardatfav()\"><ion-icon ios=\"ios-star\" md=\"md-star\"></ion-icon></ion-button>\n    <ion-button color=\"danger\" (click)=\"RemovePeli(peli.id)\"> <ion-icon name=\"trash\"></ion-icon></ion-button>\n\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/info-pelis/info-pelis-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/info-pelis/info-pelis-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: InfoPelisPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPelisPageRoutingModule", function() { return InfoPelisPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _info_pelis_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-pelis.page */ "./src/app/info-pelis/info-pelis.page.ts");




const routes = [
    {
        path: '',
        component: _info_pelis_page__WEBPACK_IMPORTED_MODULE_3__["InfoPelisPage"]
    }
];
let InfoPelisPageRoutingModule = class InfoPelisPageRoutingModule {
};
InfoPelisPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfoPelisPageRoutingModule);



/***/ }),

/***/ "./src/app/info-pelis/info-pelis.module.ts":
/*!*************************************************!*\
  !*** ./src/app/info-pelis/info-pelis.module.ts ***!
  \*************************************************/
/*! exports provided: InfoPelisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPelisPageModule", function() { return InfoPelisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_pelis_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-pelis-routing.module */ "./src/app/info-pelis/info-pelis-routing.module.ts");
/* harmony import */ var _info_pelis_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-pelis.page */ "./src/app/info-pelis/info-pelis.page.ts");







let InfoPelisPageModule = class InfoPelisPageModule {
};
InfoPelisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _info_pelis_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoPelisPageRoutingModule"]
        ],
        declarations: [_info_pelis_page__WEBPACK_IMPORTED_MODULE_6__["InfoPelisPage"]]
    })
], InfoPelisPageModule);



/***/ }),

/***/ "./src/app/info-pelis/info-pelis.page.scss":
/*!*************************************************!*\
  !*** ./src/app/info-pelis/info-pelis.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8tcGVsaXMvaW5mby1wZWxpcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/info-pelis/info-pelis.page.ts":
/*!***********************************************!*\
  !*** ./src/app/info-pelis/info-pelis.page.ts ***!
  \***********************************************/
/*! exports provided: InfoPelisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPelisPage", function() { return InfoPelisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let InfoPelisPage = class InfoPelisPage {
    constructor(route, nav, peliservice) {
        this.route = route;
        this.nav = nav;
        this.peliservice = peliservice;
        this.peli = {
            id: '',
            Titulo: '',
            Genero: '',
            Estreno: '',
            Duracion: '',
            Director: '',
            Descripcion: '',
            Calificacion: '',
            img: ''
        };
        this.peliId = null;
    }
    ngOnInit() {
        this.peliId = this.route.snapshot.params['id'];
        if (this.peliId) {
            this.loadTodo();
        }
    }
    loadTodo() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.peliId);
            this.peliservice.getTodo(this.peliId).subscribe(peli => {
                this.peli = peli;
            });
        });
    }
    close() {
        this.nav.navigateForward('home');
    }
    guardatfav() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.peliId);
            if (this.peliId) {
                this.peliservice.AddFavPelicula(this.peli, this.peliId).then(() => {
                });
            }
        });
    }
    savePelis(peliId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.peliId = this.route.snapshot.params['id'];
            if (this.peliId) {
                this.peliservice.updatePelicula(this.peli, this.peliId).then(() => {
                    this.nav.navigateForward('home');
                });
            }
            else {
                this.peliservice.addPelicula(this.peli).then(() => {
                    this.nav.navigateForward('home');
                });
            }
        });
    }
    RemovePeli() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.peliservice.remove(this.peliId);
            this.nav.navigateForward('home');
        });
    }
};
InfoPelisPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__["PeliculasService"] }
];
InfoPelisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info-pelis',
        template: __webpack_require__(/*! raw-loader!./info-pelis.page.html */ "./node_modules/raw-loader/index.js!./src/app/info-pelis/info-pelis.page.html"),
        styles: [__webpack_require__(/*! ./info-pelis.page.scss */ "./src/app/info-pelis/info-pelis.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__["PeliculasService"]])
], InfoPelisPage);



/***/ })

}]);
//# sourceMappingURL=info-pelis-info-pelis-module-es2015.js.map