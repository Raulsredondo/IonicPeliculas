(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favoritos-favoritos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/favoritos/favoritos.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/favoritos/favoritos.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>Tus Favoritos</ion-title>\n    <ion-button slot=\"start\" (click)=\"close()\" >\n      <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n    <ion-card>\n        <ion-item-sliding *ngFor=\"let pelis of pelisFAV\" >\n            <ion-item lines=\"inset\" button [routerLink]=\"['/info-pelis', pelis.id]\">\n\n       \n        <ion-item>\n            <ion-avatar slot=\"start\">\n              <img src=\"{{pelis.img}}\">\n            </ion-avatar>\n            <ion-label>\n              <h2>{{pelis.Titulo}}</h2>\n             \n            </ion-label>\n          </ion-item>\n        </ion-item>\n        <ion-item-options side=\"end\">\n            <ion-item-option (click)=\"Removefav(pelis.id)\" color=\"danger\">\n              <ion-icon name=\"trash\" slot=\"end\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      \n        \n      </ion-card>\n    </ion-list>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/favoritos/favoritos-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/favoritos/favoritos-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: FavoritosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosPageRoutingModule", function() { return FavoritosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _favoritos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favoritos.page */ "./src/app/favoritos/favoritos.page.ts");




const routes = [
    {
        path: '',
        component: _favoritos_page__WEBPACK_IMPORTED_MODULE_3__["FavoritosPage"]
    }
];
let FavoritosPageRoutingModule = class FavoritosPageRoutingModule {
};
FavoritosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavoritosPageRoutingModule);



/***/ }),

/***/ "./src/app/favoritos/favoritos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/favoritos/favoritos.module.ts ***!
  \***********************************************/
/*! exports provided: FavoritosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosPageModule", function() { return FavoritosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _favoritos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favoritos-routing.module */ "./src/app/favoritos/favoritos-routing.module.ts");
/* harmony import */ var _favoritos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favoritos.page */ "./src/app/favoritos/favoritos.page.ts");







let FavoritosPageModule = class FavoritosPageModule {
};
FavoritosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _favoritos_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritosPageRoutingModule"]
        ],
        declarations: [_favoritos_page__WEBPACK_IMPORTED_MODULE_6__["FavoritosPage"]]
    })
], FavoritosPageModule);



/***/ }),

/***/ "./src/app/favoritos/favoritos.page.scss":
/*!***********************************************!*\
  !*** ./src/app/favoritos/favoritos.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRvcy9mYXZvcml0b3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/favoritos/favoritos.page.ts":
/*!*********************************************!*\
  !*** ./src/app/favoritos/favoritos.page.ts ***!
  \*********************************************/
/*! exports provided: FavoritosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritosPage", function() { return FavoritosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let FavoritosPage = class FavoritosPage {
    constructor(nav, route, peliservice, router) {
        this.nav = nav;
        this.route = route;
        this.peliservice = peliservice;
        this.router = router;
        this.pelisFAV = [];
    }
    ngOnInit() {
    }
    close() {
        this.nav.navigateForward('home');
    }
    ionViewWillEnter() {
        console.log("entraa en view");
        this.pelisFAV = [];
        this.subcripcion = this.peliservice.getFavoritos().subscribe(pelis => {
            this.pelisFAV = pelis;
            console.log(this.pelisFAV);
        });
    }
    Removefav(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(id + "remove");
            this.peliservice.removefav(id);
            this.nav.navigateForward('home');
        });
    }
    ionViewDidLeave() {
        this.subcripcion.unsubscribe();
    }
};
FavoritosPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__["PeliculasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FavoritosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favoritos',
        template: __webpack_require__(/*! raw-loader!./favoritos.page.html */ "./node_modules/raw-loader/index.js!./src/app/favoritos/favoritos.page.html"),
        styles: [__webpack_require__(/*! ./favoritos.page.scss */ "./src/app/favoritos/favoritos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_peliculas_service__WEBPACK_IMPORTED_MODULE_3__["PeliculasService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], FavoritosPage);



/***/ })

}]);
//# sourceMappingURL=favoritos-favoritos-module-es2015.js.map