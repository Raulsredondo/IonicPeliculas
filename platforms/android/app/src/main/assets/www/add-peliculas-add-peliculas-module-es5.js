(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-peliculas-add-peliculas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/add-peliculas/add-peliculas.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/add-peliculas/add-peliculas.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n      <ion-button slot=\"start\" (click)=\"close()\" >\n        <ion-icon ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n        </ion-button>\n    <ion-title>Añadir Nueva Pelicula</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list lines=\"full\">\n    <ion-item *ngIf=\"peli\">\n      <ion-label position=\"stacked\">Título <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input required type=\"text\" placeholder=\"Titulo\" [(ngModel)]=\"peli.Titulo\" oninput=\"handleFirstNameValue(event)\"></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"peli\">\n      <ion-label>Género</ion-label>\n      <ion-select placeholder=\"Genero\" [(ngModel)]=\"peli.Genero\" multiple=\"true\">\n        <ion-select-option value=\"accion\" selected>Acción</ion-select-option>\n        <ion-select-option value=\"aventuras\">Aventura</ion-select-option>\n        <ion-select-option value=\"drama\" >Drama</ion-select-option>\n        <ion-select-option value=\"terror\">Terror</ion-select-option>\n        <ion-select-option value=\"musical\">Musical</ion-select-option>\n        <ion-select-option value=\"cienciaFiccion\">Ciencia Ficción</ion-select-option>\n        <ion-select-option value=\"guerra\">Guerra</ion-select-option>\n        <ion-select-option value=\"suspense\">Suspense</ion-select-option>\n        <ion-select-option value=\"animacion\">Animación</ion-select-option>\n\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf=\"peli\">\n      <ion-label position=\"floating\">Estreno</ion-label>\n      <ion-input type=\"text\" placeholder=\"Estreno\" [(ngModel)]=\"peli.Estreno\"></ion-input>\n    </ion-item>\n    <ion-item  *ngIf=\"peli\">\n      <ion-label position=\"stacked\">Director <ion-text color=\"danger\">*</ion-text>\n      </ion-label>\n      <ion-input required type=\"text\" placeholder=\"Director\" [(ngModel)]=\"peli.Director\"></ion-input>\n    </ion-item >\n    <ion-item  *ngIf=\"peli\">\n      <ion-label position=\"floating\">Duración</ion-label>\n      <ion-input type=\"text\" placeholder=\"Duracion\" [(ngModel)]=\"peli.Duracion\"></ion-input>\n    </ion-item>\n    <ion-item *ngIf=\"peli\">\n        <ion-label  >Calificación</ion-label>\n        <ion-select placeholder=\"Calificacion\" [(ngModel)]=\"peli.Calificacion\" multiple=\"true\">\n          <ion-select-option value=\"Mayor18\" selected>Mayores de 18</ion-select-option>\n          <ion-select-option value=\"familia\">Para toda la familia</ion-select-option>\n       \n  \n        </ion-select>\n      </ion-item>\n    <ion-item  *ngIf=\"peli\">\n      <ion-label position=\"floating\" >Description</ion-label>\n      <ion-textarea placeholder=\"Descripcion\" [(ngModel)]=\"peli.Descripcion\"></ion-textarea>\n    </ion-item>\n \n\n  <ion-item *ngIf=\"peli\">\n      <ion-label position=\"floating\">Imagen</ion-label>\n      <ion-input type=\"text\" placeholder=\"img\" [(ngModel)]=\"peli.img\"></ion-input>\n    </ion-item>\n    <ion-item  *ngIf=\"peli\" >\n        <ion-label position=\"floating\" hidden>Imagen</ion-label>\n        <ion-input type=\"text\" placeholder=\"Duracion\" [(ngModel)]=\"peli.img\" hidden></ion-input>\n      </ion-item>\n</ion-list>\n  <ion-button expand=\"block\" (click)=\"savePelis()\">\n      <ion-icon name=\"folder-open\"></ion-icon>  Save\n  </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/add-peliculas/add-peliculas-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/add-peliculas/add-peliculas-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AddPeliculasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPeliculasPageRoutingModule", function() { return AddPeliculasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_peliculas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-peliculas.page */ "./src/app/add-peliculas/add-peliculas.page.ts");




var routes = [
    {
        path: '',
        component: _add_peliculas_page__WEBPACK_IMPORTED_MODULE_3__["AddPeliculasPage"]
    }
];
var AddPeliculasPageRoutingModule = /** @class */ (function () {
    function AddPeliculasPageRoutingModule() {
    }
    AddPeliculasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AddPeliculasPageRoutingModule);
    return AddPeliculasPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/add-peliculas/add-peliculas.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/add-peliculas/add-peliculas.module.ts ***!
  \*******************************************************/
/*! exports provided: AddPeliculasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPeliculasPageModule", function() { return AddPeliculasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_peliculas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-peliculas-routing.module */ "./src/app/add-peliculas/add-peliculas-routing.module.ts");
/* harmony import */ var _add_peliculas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-peliculas.page */ "./src/app/add-peliculas/add-peliculas.page.ts");







var AddPeliculasPageModule = /** @class */ (function () {
    function AddPeliculasPageModule() {
    }
    AddPeliculasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _add_peliculas_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPeliculasPageRoutingModule"]
            ],
            declarations: [_add_peliculas_page__WEBPACK_IMPORTED_MODULE_6__["AddPeliculasPage"]]
        })
    ], AddPeliculasPageModule);
    return AddPeliculasPageModule;
}());



/***/ }),

/***/ "./src/app/add-peliculas/add-peliculas.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/add-peliculas/add-peliculas.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wZWxpY3VsYXMvYWRkLXBlbGljdWxhcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/add-peliculas/add-peliculas.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-peliculas/add-peliculas.page.ts ***!
  \*****************************************************/
/*! exports provided: AddPeliculasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPeliculasPage", function() { return AddPeliculasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/peliculas.service */ "./src/app/services/peliculas.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var AddPeliculasPage = /** @class */ (function () {
    function AddPeliculasPage(route, nav, peliservice, loading) {
        this.route = route;
        this.nav = nav;
        this.peliservice = peliservice;
        this.loading = loading;
        this.peli = {
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
    AddPeliculasPage.prototype.ngOnInit = function () {
        this.peliId = this.route.snapshot.params['id'];
    };
    AddPeliculasPage.prototype.close = function () {
        this.nav.navigateForward('/home');
    };
    AddPeliculasPage.prototype.savePelis = function (peliId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.peliId) {
                    this.peliservice.updatePelicula(this.peli, this.peliId).then(function () {
                        _this.nav.navigateForward('/');
                    });
                }
                else {
                    this.peliservice.addPelicula(this.peli).then(function () {
                        _this.nav.navigateForward('/');
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AddPeliculasPage.prototype.onRemoveTo = function (idTodo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.peliservice.remove(idTodo);
                return [2 /*return*/];
            });
        });
    };
    AddPeliculasPage.prototype.loadTodo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.create({
                            message: 'Loading....'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.peliservice.getTodo(this.peliId).subscribe(function (peli) {
                            loading.dismiss();
                            _this.peli = peli;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AddPeliculasPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
    ]; };
    AddPeliculasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-peliculas',
            template: __webpack_require__(/*! raw-loader!./add-peliculas.page.html */ "./node_modules/raw-loader/index.js!./src/app/add-peliculas/add-peliculas.page.html"),
            styles: [__webpack_require__(/*! ./add-peliculas.page.scss */ "./src/app/add-peliculas/add-peliculas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _services_peliculas_service__WEBPACK_IMPORTED_MODULE_2__["PeliculasService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], AddPeliculasPage);
    return AddPeliculasPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-peliculas-add-peliculas-module-es5.js.map