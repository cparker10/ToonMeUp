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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _face_face_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./face/face.component */ "./src/app/face/face.component.ts");
/* harmony import */ var _hair_hair_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hair/hair.component */ "./src/app/hair/hair.component.ts");
/* harmony import */ var _nose_nose_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nose/nose.component */ "./src/app/nose/nose.component.ts");
/* harmony import */ var _lips_lips_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lips/lips.component */ "./src/app/lips/lips.component.ts");
/* harmony import */ var _clothes_clothes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clothes/clothes.component */ "./src/app/clothes/clothes.component.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var _haircolor_haircolor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./haircolor/haircolor.component */ "./src/app/haircolor/haircolor.component.ts");
/* harmony import */ var _hairstyle_hairstyle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hairstyle/hairstyle.component */ "./src/app/hairstyle/hairstyle.component.ts");
/* harmony import */ var _eyes_eyes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./eyes/eyes.component */ "./src/app/eyes/eyes.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");















var routes = [
    { path: 'index', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'face', component: _face_face_component__WEBPACK_IMPORTED_MODULE_5__["FaceComponent"] },
    { path: 'hair', component: _hair_hair_component__WEBPACK_IMPORTED_MODULE_6__["HairComponent"] },
    { path: 'eyes', component: _eyes_eyes_component__WEBPACK_IMPORTED_MODULE_13__["EyesComponent"] },
    { path: 'nose', component: _nose_nose_component__WEBPACK_IMPORTED_MODULE_7__["NoseComponent"] },
    { path: 'lips', component: _lips_lips_component__WEBPACK_IMPORTED_MODULE_8__["LipsComponent"] },
    { path: 'clothes', component: _clothes_clothes_component__WEBPACK_IMPORTED_MODULE_9__["ClothesComponent"] },
    { path: 'background', component: _background_background_component__WEBPACK_IMPORTED_MODULE_10__["BackgroundComponent"] },
    { path: 'haircolor', component: _haircolor_haircolor_component__WEBPACK_IMPORTED_MODULE_11__["HaircolorComponent"] },
    { path: 'hairstyle', component: _hairstyle_hairstyle_component__WEBPACK_IMPORTED_MODULE_12__["HairstyleComponent"] },
    { path: '', pathMatch: 'full', redirectTo: '/index' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__["PageNotFoundComponent"] }
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

module.exports = "/* body {\r\n    padding : 10px ;\r\n  } */\r\n  \r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0tBRUsiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJvZHkge1xyXG4gICAgcGFkZGluZyA6IDEwcHggO1xyXG4gIH0gKi9cclxuICBcclxuICBcclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "     <div class=\"container-fluid\">\n\n    <div class=\"row titlerow justify-content-md-center\">\n      <div class=\"col-md-auto\">\n        <h1>Toon Me Up</h1>\n      </div> \n    </div> \n  </div> \n\n    <div class=\"row svgrow no-gutters justify-content-md-center\" >\n        <div class=\"col colborder\" >\n            <div>\n                <svg class=\"svgstage\" id=\"svg\" version=\"5.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"></svg>\n              </div>\n          \n          <!-- <button id=\"saveimg\" class=\"btn btn-primary\" type=\"submit\">Download Me</button> -->\n        </div> \n   \n            <div class=\"col justify-content-center no-gutters\">\n          \n          <div [ngSwitch]=\"showComponent\">\n                <div *ngSwitchDefault>\n                     \n                  <ul class=\"nav nav-pills nav-fill appheaderrow\">\n                      \n                        <li class=\"nav-item custom-nav\"><a class=\"nav-link active\"  (click)=\"showComponent='face'\">Face</a></li>\n                        <li class=\"nav-item custom-nav\"><a class=\"nav-link\"  (click)=\"showComponent='background'\">Background</a></li>\n                        <li class=\"nav-item custom-nav\"><a class=\"nav-link\"  (click)=\"showComponent='hair'\">Hair</a></li>\n                      \n                    </ul>\n                    <app-face (showSkinColor)=\"dataFromFaceChild($event)\"></app-face>\n                  </div>\n              \n                <div *ngSwitchCase=\"'face'\">\n                    <ul class=\"nav nav-pills nav-fill appheaderrow\">\n                        <li class=\"nav-item custom-nav\"> <a class=\"nav-link active\" (click)=\"showComponent='face'\">Face</a></li>\n                        <li class=\"nav-item custom-nav\"> <a class=\"nav-link\" (click)=\"showComponent='background'\">Background</a></li>\n                        <li class=\"nav-item custom-nav\"> <a class=\"nav-link\" (click)=\"showComponent='hair'\">Hair</a></li>\n                    </ul>\n              <app-face (showSkinColor)=\"dataFromFaceChild($event)\"></app-face>\n                </div>\n              \n                <div *ngSwitchCase=\"'background'\">\n                    <ul class=\"nav nav-pills nav-fill appheaderrow\">\n                        <li class=\"nav-item custom-nav\"> <a class=\"nav-link\"  (click)=\"showComponent='face'\">Face</a></li>\n                        <li class=\"nav-item custom-nav\"> <a class=\"nav-link active\" (click)=\"showComponent='background'\">Background</a></li>\n                        <li class=\"nav-item custom-nav\"> <a class=\"nav-link\" (click)=\"showComponent='hair'\">Hair</a></li>\n                    </ul>\n                      <app-background (showBkgrColor)=\"dataFromChild($event)\"></app-background>\n                </div>\n              \n                <div *ngSwitchCase=\"'hair'\">\n                    <ul class=\" nav nav-pills nav-fill appheaderrow\">\n                        <li class=\"nav-item custom-nav\"> <a class=\"nav-link\" (click)=\"showComponent='face'\">Face</a></li>\n                        <li class=\"nav-item custom-nav\"> <a class=\"nav-link\" (click)=\"showComponent='background'\">Background</a></li>\n                        <li class=\"nav-item custom-nav\"> <a class=\"nav-link active\" (click)=\"showComponent='hair'\">Hair</a></li>\n                    </ul>\n                  <app-hair></app-hair>\n                </div>\n       \n          </div> \n          <!-- /end ngswitch -->\n\n        \n      \n  </div>\n      \n</div> \n"

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
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");



// declare var Snap: any;
var AppComponent = /** @class */ (function () {
    function AppComponent(data) {
        this.data = data;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.s = Snap("#svg");
        this.b = this.s.rect(0, 0, 800, 800); //for changing background
        this.b.attr({ id: "bgrTest" }); //for changing background
        // this.data.currentMessage.subscribe(message => this.message = message); //moved this to the hair component instead
    };
    //changing background
    AppComponent.prototype.dataFromChild = function (eventData) {
        this.selected = eventData.srcElement.currentSrc;
        var bkg_image = this.s.image(this.selected, 0, 0, 800, 800);
        var chosen_bkgr = bkg_image.toPattern(0, 0, 800, 800);
        this.b.attr({ fill: chosen_bkgr });
    };
    //changing face color
    AppComponent.prototype.dataFromFaceChild = function (eventData) {
        console.log(eventData);
        this.selected = eventData.srcElement.style.backgroundColor;
        var faceColor = Snap.select("#Skin");
        faceColor.attr('fill', this.selected);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _face_face_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./face/face.component */ "./src/app/face/face.component.ts");
/* harmony import */ var _hair_hair_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hair/hair.component */ "./src/app/hair/hair.component.ts");
/* harmony import */ var _nose_nose_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nose/nose.component */ "./src/app/nose/nose.component.ts");
/* harmony import */ var _lips_lips_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lips/lips.component */ "./src/app/lips/lips.component.ts");
/* harmony import */ var _clothes_clothes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./clothes/clothes.component */ "./src/app/clothes/clothes.component.ts");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./background/background.component */ "./src/app/background/background.component.ts");
/* harmony import */ var _eyes_eyes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./eyes/eyes.component */ "./src/app/eyes/eyes.component.ts");
/* harmony import */ var _hairstyle_hairstyle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hairstyle/hairstyle.component */ "./src/app/hairstyle/hairstyle.component.ts");
/* harmony import */ var _haircolor_haircolor_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./haircolor/haircolor.component */ "./src/app/haircolor/haircolor.component.ts");





 //just added













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _face_face_component__WEBPACK_IMPORTED_MODULE_10__["FaceComponent"],
                _hair_hair_component__WEBPACK_IMPORTED_MODULE_11__["HairComponent"],
                _nose_nose_component__WEBPACK_IMPORTED_MODULE_12__["NoseComponent"],
                _lips_lips_component__WEBPACK_IMPORTED_MODULE_13__["LipsComponent"],
                _clothes_clothes_component__WEBPACK_IMPORTED_MODULE_14__["ClothesComponent"],
                _background_background_component__WEBPACK_IMPORTED_MODULE_15__["BackgroundComponent"],
                _eyes_eyes_component__WEBPACK_IMPORTED_MODULE_16__["EyesComponent"],
                _hairstyle_hairstyle_component__WEBPACK_IMPORTED_MODULE_17__["HairstyleComponent"],
                _haircolor_haircolor_component__WEBPACK_IMPORTED_MODULE_18__["HaircolorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"], _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/background/background.component.css":
/*!*****************************************************!*\
  !*** ./src/app/background/background.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tncm91bmQvYmFja2dyb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/background/background.component.html":
/*!******************************************************!*\
  !*** ./src/app/background/background.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div id=\"background\" class=\"background_row\" >\n\n    <ng-container  *ngFor=\"let p of project_bkgr\">\n       <a (click) = \"triggerEvent($event)\"><img src=\"./assets/images/bkgr/{{p.filename}}\" alt=\"{{p.name}}\"></a>\n    </ng-container>\n    \n  </div>\n"

/***/ }),

/***/ "./src/app/background/background.component.ts":
/*!****************************************************!*\
  !*** ./src/app/background/background.component.ts ***!
  \****************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import * from 'jquery';
var BackgroundComponent = /** @class */ (function () {
    function BackgroundComponent() {
        this.project_bkgr = [];
        this.showBkgrColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.project_bkgr = [
            { name: "bkgr_princess", filename: "bkgr_princess.jpg" },
            { name: "bkgr_floral_print", filename: "bkgr_floral_print.jpg" },
            { name: "bkgr_halftone", filename: "bkgr_halftone.jpg" },
            { name: "bkgr_orangeweb", filename: "bkgr_orangeweb.jpg" },
            { name: "bkgr_rainbowmm", filename: "bkgr_rainbowmm.jpg" },
            { name: "bkgr_cheetah", filename: "bkgr_cheetah.jpg" },
            { name: "bkgr_bright", filename: "bkgr_bright.jpeg" },
            { name: "bkgr_burst", filename: "bkgr_burst.png" },
            { name: "bkgr_sunray", filename: "bkgr_sunray.jpg" },
            { name: "bkgr_circ_halftone", filename: "bkgr_circ_halftone.jpg" },
            { name: "bkgr_royal", filename: "bkgr_royal.jpg" },
            { name: "bkgr_flowerwall", filename: "bkgr_flowerwall.jpg" },
            { name: "bkgr_rainbowwave", filename: "bkgr_rainbowwave.jpg" },
        ];
    }
    ;
    BackgroundComponent.prototype.triggerEvent = function () {
        //  2b. Emit the Event
        this.showBkgrColor.emit(event); //we can pass in any data type
    };
    BackgroundComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BackgroundComponent.prototype, "showBackground", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BackgroundComponent.prototype, "showBkgrColor", void 0);
    BackgroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-background',
            template: __webpack_require__(/*! ./background.component.html */ "./src/app/background/background.component.html"),
            styles: [__webpack_require__(/*! ./background.component.css */ "./src/app/background/background.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BackgroundComponent);
    return BackgroundComponent;
}()); //end of class



/***/ }),

/***/ "./src/app/clothes/clothes.component.css":
/*!***********************************************!*\
  !*** ./src/app/clothes/clothes.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3RoZXMvY2xvdGhlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/clothes/clothes.component.html":
/*!************************************************!*\
  !*** ./src/app/clothes/clothes.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  clothes works!\n</p>\n"

/***/ }),

/***/ "./src/app/clothes/clothes.component.ts":
/*!**********************************************!*\
  !*** ./src/app/clothes/clothes.component.ts ***!
  \**********************************************/
/*! exports provided: ClothesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothesComponent", function() { return ClothesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClothesComponent = /** @class */ (function () {
    function ClothesComponent() {
    }
    ClothesComponent.prototype.ngOnInit = function () {
    };
    ClothesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clothes',
            template: __webpack_require__(/*! ./clothes.component.html */ "./src/app/clothes/clothes.component.html"),
            styles: [__webpack_require__(/*! ./clothes.component.css */ "./src/app/clothes/clothes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClothesComponent);
    return ClothesComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([{ filename: "", fill_area_name: "", svg_name: "" }]);
        this.currentMessage = this.messageSource.asObservable(); //allows you to subscribe to/access message source
    }
    //consider removing this getter as getter should be covered via currentMessage
    DataService.prototype.getMessage = function () {
        return this.messageSource.asObservable();
    };
    //the setter function:
    DataService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/eyes/eyes.component.css":
/*!*****************************************!*\
  !*** ./src/app/eyes/eyes.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V5ZXMvZXllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/eyes/eyes.component.html":
/*!******************************************!*\
  !*** ./src/app/eyes/eyes.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  eyes works!\n</p>\n"

/***/ }),

/***/ "./src/app/eyes/eyes.component.ts":
/*!****************************************!*\
  !*** ./src/app/eyes/eyes.component.ts ***!
  \****************************************/
/*! exports provided: EyesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyesComponent", function() { return EyesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EyesComponent = /** @class */ (function () {
    function EyesComponent() {
    }
    EyesComponent.prototype.ngOnInit = function () {
    };
    EyesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eyes',
            template: __webpack_require__(/*! ./eyes.component.html */ "./src/app/eyes/eyes.component.html"),
            styles: [__webpack_require__(/*! ./eyes.component.css */ "./src/app/eyes/eyes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EyesComponent);
    return EyesComponent;
}());



/***/ }),

/***/ "./src/app/face/face.component.css":
/*!*****************************************!*\
  !*** ./src/app/face/face.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhY2UvZmFjZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/face/face.component.html":
/*!******************************************!*\
  !*** ./src/app/face/face.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n      <div id=\"skin_color\" class=\"skin_color_selection\">\n        \n          <ng-container *ngFor=\"let p of project_skin_color\">\n            <a (click) = \"triggerEvent($event)\"><button class=\"color_select_button\" [style.backgroundColor]=\"p.hex\" ></button></a>\n          </ng-container>\n        \n      </div>\n \n   "

/***/ }),

/***/ "./src/app/face/face.component.ts":
/*!****************************************!*\
  !*** ./src/app/face/face.component.ts ***!
  \****************************************/
/*! exports provided: FaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaceComponent", function() { return FaceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FaceComponent = /** @class */ (function () {
    function FaceComponent() {
        this.project_skin_color = [];
        this.showSkinColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.project_skin_color = [
            // {color: "none",hex:"#00FFFFFF"},
            { color: "rosey brown", hex: "#E7CEC9" },
            { color: "original", hex: "#c49e8c" },
            { color: "med mocha", hex: "#B39285" },
            { color: "deer", hex: "#C18566" },
            { color: "russet", hex: "#8D5524" },
            { color: "chestnut", hex: "#524138" },
        ];
    }
    FaceComponent.prototype.ngOnInit = function () {
    };
    FaceComponent.prototype.triggerEvent = function () {
        this.showSkinColor.emit(event); //we can pass in any data type
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FaceComponent.prototype, "showSkinColor", void 0);
    FaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-face',
            template: __webpack_require__(/*! ./face.component.html */ "./src/app/face/face.component.html"),
            styles: [__webpack_require__(/*! ./face.component.css */ "./src/app/face/face.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaceComponent);
    return FaceComponent;
}());



/***/ }),

/***/ "./src/app/hair/hair.component.css":
/*!*****************************************!*\
  !*** ./src/app/hair/hair.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hhaXIvaGFpci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/hair/hair.component.html":
/*!******************************************!*\
  !*** ./src/app/hair/hair.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div id=\"hair_row\" >\n\n      <app-hairstyle (showHairStyle)=\"dataFromHairStyleChild($event)\"></app-hairstyle>\n<hr>\n\n      <app-haircolor (showHairColor)=\"dataFromHairColorChild($event)\"></app-haircolor>\n      \n    </div>\n  \n  "

/***/ }),

/***/ "./src/app/hair/hair.component.ts":
/*!****************************************!*\
  !*** ./src/app/hair/hair.component.ts ***!
  \****************************************/
/*! exports provided: HairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HairComponent", function() { return HairComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var HairComponent = /** @class */ (function () {
    function HairComponent(data) {
        this.data = data;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HairComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) {
            _this.message = message;
        });
        this.currentStyle = (this.message[0]['fill_area_name']);
        // to preserve setting in case a hairstyle has already been selected
        if (this.currentStyle) {
            this.fillAreaName = ("#" + this.currentStyle);
        }
        //to retain already selected color
        //tbd
        // so that HairColor fill area is already selected and color can be changed upon load. 
        // previously fill area name was undefined and user had to select a hairstyle before the color will change. 
        // now fill area is assigned to default hair style is coily fro w/ fill area name of #HairColor
        if (this.fillAreaName == null || this.fillAreaName === undefined) {
            this.fillAreaName = "#HairColor";
        }
    };
    ;
    //changing haircolor
    HairComponent.prototype.dataFromHairColorChild = function (eventData) {
        this.selectedCol = eventData.srcElement.style.backgroundColor;
        var hairColor = Snap.select(this.fillAreaName);
        hairColor.attr({ fill: this.selectedCol });
    };
    ;
    // changing hairstyle
    HairComponent.prototype.dataFromHairStyleChild = function (eventData) {
        this.selectedStyle = ("#" + eventData.style_info[0].svg_name);
        this.fillAreaName = ("#" + eventData.style_info[0].fill_area_name);
        var hairStyle = Snap.select(this.selectedStyle);
        hairStyle.attr({ visibility: "visible" });
    };
    HairComponent.prototype.newMessage = function (incoming) {
        this.data.changeMessage(incoming);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HairComponent.prototype, "valueChange", void 0);
    HairComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hair',
            template: __webpack_require__(/*! ./hair.component.html */ "./src/app/hair/hair.component.html"),
            styles: [__webpack_require__(/*! ./hair.component.css */ "./src/app/hair/hair.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HairComponent);
    return HairComponent;
}());

;


/***/ }),

/***/ "./src/app/haircolor/haircolor.component.css":
/*!***************************************************!*\
  !*** ./src/app/haircolor/haircolor.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hhaXJjb2xvci9oYWlyY29sb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/haircolor/haircolor.component.html":
/*!****************************************************!*\
  !*** ./src/app/haircolor/haircolor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"hair_color_selection\" >\n    <span *ngFor=\"let p of project_hair_color\">\n    <button (click) = \"triggerEvent($event)\" class=\"color_select_button\" [style.backgroundColor]=\"p.hex\" ></button>\n    </span>\n\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/haircolor/haircolor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/haircolor/haircolor.component.ts ***!
  \**************************************************/
/*! exports provided: HaircolorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaircolorComponent", function() { return HaircolorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var HaircolorComponent = /** @class */ (function () {
    function HaircolorComponent(data) {
        this.data = data;
        this.project_hair_color = [];
        this.showHairColor = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HaircolorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) {
            _this.message = message;
        });
        this.project_hair_color = [
            { color: "burlywood", hex: "#DEB887" },
            { color: "chocolate", hex: "#D2691E" },
            { color: "saddlebrown", hex: "#8B4513" },
            { color: "root beer", hex: "#3a3c3d" },
            { color: "off black", hex: "#090806" },
        ];
    };
    HaircolorComponent.prototype.newMessage = function (incoming) {
        this.data.changeMessage(incoming);
    };
    HaircolorComponent.prototype.triggerEvent = function () {
        this.showHairColor.emit(event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HaircolorComponent.prototype, "showHairColor", void 0);
    HaircolorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-haircolor',
            template: __webpack_require__(/*! ./haircolor.component.html */ "./src/app/haircolor/haircolor.component.html"),
            styles: [__webpack_require__(/*! ./haircolor.component.css */ "./src/app/haircolor/haircolor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HaircolorComponent);
    return HaircolorComponent;
}());

// go to skin change color, return to hair, try to change hair color - won't work 


/***/ }),

/***/ "./src/app/hairstyle/hairstyle.component.css":
/*!***************************************************!*\
  !*** ./src/app/hairstyle/hairstyle.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .on { background-color: yellow; } */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFpcnN0eWxlL2hhaXJzdHlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFzQyIsImZpbGUiOiJzcmMvYXBwL2hhaXJzdHlsZS9oYWlyc3R5bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5vbiB7IGJhY2tncm91bmQtY29sb3I6IHllbGxvdzsgfSAqLyJdfQ== */"

/***/ }),

/***/ "./src/app/hairstyle/hairstyle.component.html":
/*!****************************************************!*\
  !*** ./src/app/hairstyle/hairstyle.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"hair\" class=\"hair_style_row\">\n  \n  \n    <ng-container *ngFor=\"let style of project_hair_style; let i = index\">\n        <a (click)=\"clicked(i, $event, style_info)\" (click)=\"toggle(style)\" ><img src=\"./assets/images/hair/{{style.filename}}\" alt=\"{{style.desc}}\"></a>\n        \n        \n    </ng-container>\n\n    \n    \n  </div>\n    <!-- //note: <g></g> is unknown in angular -->"

/***/ }),

/***/ "./src/app/hairstyle/hairstyle.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hairstyle/hairstyle.component.ts ***!
  \**************************************************/
/*! exports provided: HairstyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HairstyleComponent", function() { return HairstyleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");


// import * as Snap from 'snapsvg';

var HairstyleComponent = /** @class */ (function () {
    function HairstyleComponent(data) {
        this.data = data;
        this.project_hair_style = [];
        this.style_info = []; //this is the object containing info for the hairstyles
        this.showHairStyle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    HairstyleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (message) { return _this.message = message; });
        this.project_hair_style = [
            { filename: "sm-2Braids.png", desc: "Two braids", fill_area_name: "_2BraidsHairColor", svg_name: "_2BraidsGroup", reveal: false },
            { filename: "sm_curlyfro.png", desc: "Coily Fro", fill_area_name: "HairColor", svg_name: "CurlyFroGroup", reveal: false },
            { filename: "sm_crown.png", desc: "Crown", fill_area_name: "PuffHairColor", svg_name: "CrownPuffGroup", reveal: false }
        ];
    };
    ;
    HairstyleComponent.prototype.newMessage = function (style_info) {
        this.data.changeMessage(style_info);
    };
    HairstyleComponent.prototype.clicked = function (index, event, style_info) {
        this.show = index;
        this.style_info.length = 0;
        this.styleName = this.project_hair_style[this.show].filename;
        this.fillArea = this.project_hair_style[this.show].fill_area_name;
        this.svgGroupName = this.project_hair_style[this.show].svg_name;
        this.reveal = this.project_hair_style[this.show].reveal;
        this.style_info.push({ filename: this.styleName, fill_area_name: this.fillArea, svg_name: this.svgGroupName, reveal: this.reveal });
        // console.log("filename is " + this.project_hair_style[this.show].filename + "svg_name " + this.project_hair_style[this.show].svg_name);
        // console.log("printing this style info from hairstylecomponent" + this.style_info[0].filename);
        this.showHairStyle.emit({ event: event, style_info: style_info });
        this.newMessage(style_info);
    };
    ;
    HairstyleComponent.prototype.toggle = function (style) {
        this.project_hair_style.map(function (p) {
            if (p.svg_name == style.svg_name) {
                p.reveal = !p.reveal;
            }
            else {
                p.reveal = false;
                var hide = Snap.select("#" + p.svg_name);
                hide.attr({ visibility: "hidden" });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HairstyleComponent.prototype, "showHairStyle", void 0);
    HairstyleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hairstyle',
            template: __webpack_require__(/*! ./hairstyle.component.html */ "./src/app/hairstyle/hairstyle.component.html"),
            styles: [__webpack_require__(/*! ./hairstyle.component.css */ "./src/app/hairstyle/hairstyle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], HairstyleComponent);
    return HairstyleComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   \n  <div class=\"container\">\n    <div class=\"row justify-content-center titlerow\">\n      <div class=\"col-6\">\n        <h1>Hello Party People</h1>\n      </div> \n      <!-- //end div col8 -->\n    </div> \n    <!-- /end title row -->\n\n    <div class=\"row justify-content-center svgrow\">\n        <div class=\"col-6 \">\n          <svg class=\"svgstage\" id=\"svg\">\n\n            \n          </svg>\n        </div> \n        <div class=\"col-1\">\n            <div class=\"color_selection\"></div>\n          </div> \n        <!-- //end div col8 -->\n    </div> \n    <!-- /end svgrow -->\n    \n\n    <div class=\"row justify-content-center tabrow\">\n      <div class=\"col-6\">\n          <!-- Nav tabs -->\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\"> \n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"face-tab\" data-toggle=\"tab\" href=\"#face\" role=\"tab\" aria-controls=\"face\" aria-selected=\"true\">face</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"hair-tab\" data-toggle=\"tab\" href=\"#hair\" role=\"tab\" aria-controls=\"hair\" aria-selected=\"false\">hair</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"background-tab\" data-toggle=\"tab\" href=\"#background\" role=\"tab\" aria-controls=\"background\" aria-selected=\"false\">background</a>\n            </li>\n          </ul>\n          \n          <!-- Tab panes -->\n          <div class=\"tab-content\">\n            <div class=\"tab-pane face-tab active\" id=\"face\" role=\"tabpanel\" aria-labelledby=\"face-tab\">Test for face</div>\n            <div class=\"tab-pane hair-tab\" id=\"hair\" role=\"tabpanel\" aria-labelledby=\"hair-tab\">test for hair</div>\n            <div class=\"tab-pane background-tab\" id=\"background\" role=\"tabpanel\" aria-labelledby=\"background-tab\"></div>\n            </div> \n          <!-- end div tab content -->\n      </div> \n      <!-- /end div col8 -->\n    </div> \n    <!-- //end div tabrow -->\n\n    <app-face></app-face>\n    <app-hair></app-hair>\n    <app-background></app-background>\n  </div> \n  <!-- end div container -->\n    \n    \n\n    \n\n<router-outlet></router-outlet>\n"

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

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HttpService = /** @class */ (function () {
    function HttpService() {
    }
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/lips/lips.component.css":
/*!*****************************************!*\
  !*** ./src/app/lips/lips.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpcHMvbGlwcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/lips/lips.component.html":
/*!******************************************!*\
  !*** ./src/app/lips/lips.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  lips works!\n</p>\n"

/***/ }),

/***/ "./src/app/lips/lips.component.ts":
/*!****************************************!*\
  !*** ./src/app/lips/lips.component.ts ***!
  \****************************************/
/*! exports provided: LipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LipsComponent", function() { return LipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LipsComponent = /** @class */ (function () {
    function LipsComponent() {
    }
    LipsComponent.prototype.ngOnInit = function () {
    };
    LipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lips',
            template: __webpack_require__(/*! ./lips.component.html */ "./src/app/lips/lips.component.html"),
            styles: [__webpack_require__(/*! ./lips.component.css */ "./src/app/lips/lips.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LipsComponent);
    return LipsComponent;
}());



/***/ }),

/***/ "./src/app/nose/nose.component.css":
/*!*****************************************!*\
  !*** ./src/app/nose/nose.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vc2Uvbm9zZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/nose/nose.component.html":
/*!******************************************!*\
  !*** ./src/app/nose/nose.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  nose works!\n</p>\n"

/***/ }),

/***/ "./src/app/nose/nose.component.ts":
/*!****************************************!*\
  !*** ./src/app/nose/nose.component.ts ***!
  \****************************************/
/*! exports provided: NoseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoseComponent", function() { return NoseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoseComponent = /** @class */ (function () {
    function NoseComponent() {
    }
    NoseComponent.prototype.ngOnInit = function () {
    };
    NoseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nose',
            template: __webpack_require__(/*! ./nose.component.html */ "./src/app/nose/nose.component.html"),
            styles: [__webpack_require__(/*! ./nose.component.css */ "./src/app/nose/nose.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoseComponent);
    return NoseComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\CHRYSTAL_FILES\CodingDojo\mean_stack\angular\project\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map