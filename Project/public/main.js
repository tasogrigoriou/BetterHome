(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about-us/about-us.module": [
		"./src/app/about-us/about-us.module.ts",
		"about-us-about-us-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _property_property_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property/property.component */ "./src/app/property/property.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example/example.component */ "./src/app/example/example.component.ts");








var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'about-us',
        loadChildren: './about-us/about-us.module#AboutUsModule'
    },
    {
        path: 'property',
        component: _property_property_component__WEBPACK_IMPORTED_MODULE_4__["PropertyComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    {
        path: 'example',
        component: _example_example_component__WEBPACK_IMPORTED_MODULE_7__["ExampleComponent"],
        data: { title: 'Example Fake Data' }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<app-header></app-header>\n<!-- routes will be rendered here -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _property_property_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./property/property.component */ "./src/app/property/property.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.dialog */ "./src/app/register/register.dialog.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./example/example.component */ "./src/app/example/example.component.ts");
/* harmony import */ var _core_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/alert/alert.component */ "./src/app/core/components/alert/alert.component.ts");
/* harmony import */ var _core_components_upload_upload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/upload/upload.component */ "./src/app/core/components/upload/upload.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var angular_material_fileupload__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular-material-fileupload */ "./node_modules/angular-material-fileupload/matFileUpload.esm.js");
/* harmony import */ var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @covalent/core/layout */ "./node_modules/@covalent/core/fesm5/covalent-core-layout.js");
/* harmony import */ var _covalent_core_steps__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @covalent/core/steps */ "./node_modules/@covalent/core/fesm5/covalent-core-steps.js");
/* harmony import */ var _covalent_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @covalent/http */ "./node_modules/@covalent/http/fesm5/covalent-http.js");
/* harmony import */ var _covalent_highlight__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @covalent/highlight */ "./node_modules/@covalent/highlight/fesm5/covalent-highlight.js");
/* harmony import */ var _covalent_markdown__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @covalent/markdown */ "./node_modules/@covalent/markdown/fesm5/covalent-markdown.js");
/* harmony import */ var _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @covalent/dynamic-forms */ "./node_modules/@covalent/dynamic-forms/fesm5/covalent-dynamic-forms.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _property_property_component__WEBPACK_IMPORTED_MODULE_7__["PropertyComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _register_register_dialog__WEBPACK_IMPORTED_MODULE_9__["RegisterDialog"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _example_example_component__WEBPACK_IMPORTED_MODULE_11__["ExampleComponent"],
                _core_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                _core_components_upload_upload_component__WEBPACK_IMPORTED_MODULE_13__["UploadComponent"]
            ],
            entryComponents: [
                _register_register_dialog__WEBPACK_IMPORTED_MODULE_9__["RegisterDialog"]
            ],
            imports: [
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_21__["MatToolbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"],
                angular_material_fileupload__WEBPACK_IMPORTED_MODULE_24__["MatFileUploadModule"],
                _covalent_core_layout__WEBPACK_IMPORTED_MODULE_25__["CovalentLayoutModule"],
                _covalent_core_steps__WEBPACK_IMPORTED_MODULE_26__["CovalentStepsModule"],
                // (optional) Additional Covalent Modules imports
                _covalent_http__WEBPACK_IMPORTED_MODULE_27__["CovalentHttpModule"].forRoot(),
                _covalent_highlight__WEBPACK_IMPORTED_MODULE_28__["CovalentHighlightModule"],
                _covalent_markdown__WEBPACK_IMPORTED_MODULE_29__["CovalentMarkdownModule"],
                _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_30__["CovalentDynamicFormsModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_31__["CovalentFileModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/components/alert/alert.component.html":
/*!************************************************************!*\
  !*** ./src/app/core/components/alert/alert.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"\n{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\n\">{{message.text}}</div>\n"

/***/ }),

/***/ "./src/app/core/components/alert/alert.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/alert/alert.component.ts ***!
  \**********************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/alert.service */ "./src/app/core/services/alert.service.ts");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/core/components/alert/alert.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/core/components/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar is-dark\">\n  <!-- menu -->\n  <div class=\"navbar-menu\">\n    <div class=\"navbar-start\">\n      <a class=\"navbar-item\" routerLink=\"\">Home</a>\n      <a class=\"navbar-item\" routerLink=\"about-us\">About us</a>\n      <a class=\"navbar-item\" routerLink=\"property\">Property</a>\n      <a class=\"navbar-item\" routerLink=\"register\">Register</a>\n      <a class=\"navbar-item\" routerLink=\"login\">Login</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/components/header/header.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/components/upload/upload.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/upload/upload.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Image Uploading-->\n\n<td-file-upload #fileMultipleUpload (upload)=\"uploadMultipleImages($event)\"\n                accept=\".jpg, .jpeg, .png, .tif\" defaultColor=\"primary\" activeColor=\"primary\" cancelColor=\"primary\" multiple>\n  <mat-icon>file_upload</mat-icon>\n  <span>\n    {{ fileMultipleUpload.value?.name || fileMultipleUpload.value?.length }} <span *ngIf=\"fileMultipleUpload.value?.length\">files selected</span>\n  </span>\n  <ng-template td-file-input-label>\n    <mat-icon>attach_file</mat-icon>\n    <span>\n      Upload images\n    </span>\n  </ng-template>\n</td-file-upload>\n"

/***/ }),

/***/ "./src/app/core/components/upload/upload.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/upload/upload.component.ts ***!
  \************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/upload.service */ "./src/app/core/services/upload.service.ts");



var UploadComponent = /** @class */ (function () {
    function UploadComponent(uploadService) {
        this.uploadService = uploadService;
    }
    UploadComponent.prototype.uploadMultipleImages = function (files) {
        if (files instanceof FileList) {
            for (var i = 0; i < files.length; i++) {
                this.uploadService.uploadImage(files[i], this.listingId).then(function (s) {
                    console.log(s);
                }).catch(function (err) {
                    console.log(err);
                });
            }
        }
        else {
            this.uploadService.uploadImage(files, this.listingId).then(function (s) {
                console.log(s);
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], UploadComponent.prototype, "listingId", void 0);
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'upload-component',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/core/components/upload/upload.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_members_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/members.service */ "./src/app/core/services/members.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _services_listings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/listings.service */ "./src/app/core/services/listings.service.ts");







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            providers: [
                _services_members_service__WEBPACK_IMPORTED_MODULE_4__["MembersService"],
                _services_listings_service__WEBPACK_IMPORTED_MODULE_6__["ListingsService"]
            ],
            declarations: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
            ],
            exports: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/services/alert.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/alert.service.ts ***!
  \************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/core/services/example.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/example.service.ts ***!
  \**************************************************/
/*! exports provided: ExampleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleService", function() { return ExampleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api/example';
var ExampleService = /** @class */ (function () {
    function ExampleService(http) {
        this.http = http;
    }
    /** CRUD functions (create, retrieve, update, delete) **/
    ExampleService.prototype.getExamples = function () {
        console.log(apiUrl);
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ExampleService.prototype.postExample = function (data) {
        return this.http.post(apiUrl, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ExampleService.prototype.updateExample = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ExampleService.prototype.deleteExample = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ExampleService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ExampleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ExampleService);
    return ExampleService;
}());



/***/ }),

/***/ "./src/app/core/services/listings.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/listings.service.ts ***!
  \***************************************************/
/*! exports provided: ListingsService, Listing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsService", function() { return ListingsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listing", function() { return Listing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListingsService = /** @class */ (function () {
    function ListingsService() {
        this.exampleListing1 = new Listing('1 4th St', ' San Francisco', 'California');
        this.exampleListing2 = new Listing('3 8th Ave', ' New York City', 'New York');
        this.exampleListing3 = new Listing('2 Wall St', ' New York City', 'New York');
        this.exampleListing4 = new Listing('4 Lombard St', ' San Francisco', 'California');
    }
    ListingsService.prototype.getListings = function () {
        return [
            this.exampleListing1,
            this.exampleListing2,
            this.exampleListing3,
            this.exampleListing4
        ];
    };
    ListingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListingsService);
    return ListingsService;
}());

var Listing = /** @class */ (function () {
    function Listing(listingAddress, listingCity, listingState) {
        this.listingAddress = listingAddress;
        this.listingCity = listingCity;
        this.listingState = listingState;
    }
    return Listing;
}());



/***/ }),

/***/ "./src/app/core/services/login.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/login.service.ts ***!
  \************************************************/
/*! exports provided: LoginService, LoginUser, Listing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUser", function() { return LoginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listing", function() { return Listing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api/login';
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    /*** Login User ***/
    LoginService.prototype.loginUser = function (userData) {
        return this.http.post(apiUrl, userData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    LoginService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());

var LoginUser = /** @class */ (function () {
    function LoginUser() {
    }
    return LoginUser;
}());

var Listing = /** @class */ (function () {
    function Listing() {
    }
    return Listing;
}());



/***/ }),

/***/ "./src/app/core/services/members.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/members.service.ts ***!
  \**************************************************/
/*! exports provided: MembersService, Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersService", function() { return MembersService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MembersService = /** @class */ (function () {
    function MembersService() {
        this.austinMember = new Member('Austin Sy-Velasco', 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/52809925_2350788244932949_4342396319202017280_n.jpg?_nc_cat=102&_nc_ht=scontent-sjc3-1.xx&oh=b0820dab31204a2faf17549ada264f1e&oe=5D228764', 'Austin is a back end developer for BetterHome. He will be graduating from SFSU in Spring 2019.');
        this.tasoMember = new Member('Taso Grigoriou', 'https://bit.ly/2NnQCof', 'Taso is the team lead for BetterHome. He currently works at Ancestry as an iOS engineer, and will be graduating from SFSU in Spring 2019.');
        this.coleMember = new Member('Michael Cole Tormey', 'https://bit.ly/2TfL8Ba', 'Cole is a front end engineer for BetterHome.');
        this.henokMember = new Member('Henok Kassegn', 'null', 'Henok is a front-end team lead for BetterHome.');
        this.liwangMember = new Member('Liwang Gao', 'https://bit.ly/2Nt9ZfN', 'I am the member of front-end team, and will graduate at 2019.');
        this.sawyerMember = new Member('Sawyer Nixon', 'https://bit.ly/2XkcA04', 'Sawyer is the backend lead for BetterHome. He is currently attending SFSU, and will be graduating in Fall 2019.');
    }
    MembersService.prototype.getMembers = function () {
        return [
            this.tasoMember,
            this.henokMember,
            this.liwangMember,
            this.austinMember,
            this.sawyerMember,
            this.coleMember
        ];
    };
    MembersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MembersService);
    return MembersService;
}());

var Member = /** @class */ (function () {
    function Member(name, photoUrl, body) {
        this.name = name;
        this.photoUrl = photoUrl;
        this.body = body;
    }
    return Member;
}());



/***/ }),

/***/ "./src/app/core/services/register.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/register.service.ts ***!
  \***************************************************/
/*! exports provided: RegisterService, RegisterUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUser", function() { return RegisterUser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api/register';
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    /** CRUD function for create **/
    RegisterService.prototype.registerUser = function (user) {
        return this.http.post(apiUrl, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    RegisterService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());

var RegisterUser = /** @class */ (function () {
    function RegisterUser() {
    }
    return RegisterUser;
}());



/***/ }),

/***/ "./src/app/core/services/upload.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/upload.service.ts ***!
  \*************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var apiUrl = '/api/upload';
var UploadService = /** @class */ (function () {
    function UploadService() {
    }
    UploadService.prototype.uploadImage = function (file, listingId) {
        if (listingId === void 0) { listingId = 0; }
        var fd = new FormData();
        var xhr = new XMLHttpRequest();
        fd.append('file', file, file.name);
        return new Promise(function (resolve, reject) {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('image uploaded');
                        resolve(xhr.response);
                    }
                    else {
                        console.log('failed to upload image');
                        reject(xhr.response);
                    }
                }
            };
            xhr.open('POST', apiUrl);
            xhr.setRequestHeader('listingId', String(listingId));
            xhr.send(fd);
        });
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/example/example.component.css":
/*!***********************************************!*\
  !*** ./src/app/example/example.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n\n.isbn-col {\n  flex: 0 0 100px !important;\n  white-space: unset !important;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n\n.mat-icon{\n  color: red;\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBsZS9leGFtcGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZXhhbXBsZS9leGFtcGxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5pc2JuLWNvbCB7XG4gIGZsZXg6IDAgMCAxMDBweCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1yb3cge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5tYXQtaWNvbntcbiAgY29sb3I6IHJlZDtcbn1cblxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/example/example.component.html":
/*!************************************************!*\
  !*** ./src/app/example/example.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Material Design Table Example-->\n\n<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/example-create']\"><mat-icon>add</mat-icon></a>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"ID\">\n      <th mat-header-cell *matHeaderCellDef> ID </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"isbn-col\"> {{element.id}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"Name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n\n\n<!--Image upload child component example-->\n\n<upload-component [listingId]=\"listingId\"></upload-component>\n"

/***/ }),

/***/ "./src/app/example/example.component.ts":
/*!**********************************************!*\
  !*** ./src/app/example/example.component.ts ***!
  \**********************************************/
/*! exports provided: ExampleComponent, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_example_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/example.service */ "./src/app/core/services/example.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");




var ExampleComponent = /** @class */ (function () {
    function ExampleComponent(exampleService) {
        this.exampleService = exampleService;
        this.examples = [];
        this.dataSource = new ExampleDataSource(this.exampleService);
        this.displayedColumns = ['ID', 'Name'];
    }
    ExampleComponent.prototype.ngOnInit = function () {
        this.getExamples();
    };
    ExampleComponent.prototype.getExamples = function () {
        var _this = this;
        this.exampleService.getExamples()
            .subscribe(function (response) {
            console.log(response);
            _this.examples = response;
        }, function (err) {
            console.log(err);
        });
    };
    ExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example',
            template: __webpack_require__(/*! ./example.component.html */ "./src/app/example/example.component.html"),
            styles: [__webpack_require__(/*! ./example.component.css */ "./src/app/example/example.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_example_service__WEBPACK_IMPORTED_MODULE_2__["ExampleService"]])
    ], ExampleComponent);
    return ExampleComponent;
}());

var ExampleDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleDataSource, _super);
    function ExampleDataSource(exampleService) {
        var _this = _super.call(this) || this;
        _this.exampleService = exampleService;
        return _this;
    }
    ExampleDataSource.prototype.connect = function () {
        return this.exampleService.getExamples();
    };
    ExampleDataSource.prototype.disconnect = function () {
    };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home_search\n{\n  width: 100%;\n  z-index: 100;\n  background: #FFFFFF;\n}\n.home_search_container\n{\n  position: absolute;\n  top: -112px;\n  left: 15px;\n  width: calc(100% - 30px);\n  height: 90px;\n  border-radius: 45px;\n  padding: 10px;\n  background: rgba(255,255,255,0.33);\n}\n.home_search_content\n{\n  width: 100%;\n  height: 100%;\n  background: #FFFFFF;\n  border-radius: 35px;\n}\n.search_form\n{\n  position: relative;\n  height: 100%;\n}\n.search_form_content\n{\n  width: 100%;\n  height: 100%;\n  padding-left: 14px;\n  padding-right: 11px;\n}\n.search_form_content > div\n{\n  width: 20%;\n  height: 100%;\n  padding-left: 18px;\n  padding-right: 2px;\n}\n.search_form_content > div:not(:last-child)\n{\n  border-right: solid 2px #d1d1d1;\n}\n.search_form_select\n{\n  display: block;\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  width: 100%;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -webkit-box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);\n  -webkit-user-select: none;\n  background-position: center right;\n  background-repeat: no-repeat;\n  border: none;\n  outline: none;\n  font-size: 13px;\n  font-weight: 400;\n  color: #6b6b6b;\n  cursor: pointer;\n}\n.search_form_button\n{\n  width: 193px;\n  height: 100%;\n  border-radius: 35px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 700;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  background: linear-gradient(to right, #487fee, #32fa95);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDO0FBQ0E7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7O0VBRUUsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDtBQUNBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFLCtCQUErQjtBQUNqQztBQUNBOztFQUVFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG1DQUFtQztFQUluQywyQkFBMkI7RUFDM0IsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0RBQWdEO0VBQ2hELHlCQUF5QjtFQUN6QixpQ0FBaUM7RUFDakMsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOztFQUVFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix1REFBdUQ7QUFDekQiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lX3NlYXJjaFxue1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuLmhvbWVfc2VhcmNoX2NvbnRhaW5lclxue1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTExMnB4O1xuICBsZWZ0OiAxNXB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMzBweCk7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjMzKTtcbn1cbi5ob21lX3NlYXJjaF9jb250ZW50XG57XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG59XG4uc2VhcmNoX2Zvcm1cbntcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2VhcmNoX2Zvcm1fY29udGVudFxue1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDE0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDExcHg7XG59XG4uc2VhcmNoX2Zvcm1fY29udGVudCA+IGRpdlxue1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgcGFkZGluZy1yaWdodDogMnB4O1xufVxuLnNlYXJjaF9mb3JtX2NvbnRlbnQgPiBkaXY6bm90KDpsYXN0LWNoaWxkKVxue1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDJweCAjZDFkMWQxO1xufVxuLnNlYXJjaF9mb3JtX3NlbGVjdFxue1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciByaWdodDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNmI2YjZiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2VhcmNoX2Zvcm1fYnV0dG9uXG57XG4gIHdpZHRoOiAxOTNweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNDg3ZmVlLCAjMzJmYTk1KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-info is-fullheight is-bold\">\n  <div class=\"hero-body\">\n    <h1 class=\"title\">Search </h1>\n    <div class=\"container\">\n      <!-- Home Search -->\n      <div class=\"home_search\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"home_search_container\">\n                <div class=\"home_search_content\">\n                  <form action=\"#\" class=\"search_form d-flex flex-row align-items-start justfy-content-start\">\n                    <div class=\"search_form_content d-flex flex-row align-items-start justfy-content-start flex-wrap\">\n                      <div>\n                        <select class=\"search_form_select\">\n                          <option disabled selected>For rent </option>\n                          <option>Yes</option>\n                          <option>No</option>\n                        </select>\n                      </div>\n                      <div>\n                        <select class=\"search_form_select\">\n                          <option disabled selected>All types</option>\n                          <option>Apartment</option>\n                          <option>House</option>\n                          <option>Condo</option>\n                          <option>TownHouse</option>\n                        </select>\n                      </div>\n                      <div>\n                        <select class=\"search_form_select\">\n                          <option disabled selected>City</option>\n                          <option>New York</option>\n                          <option>Paris</option>\n                          <option>Amsterdam</option>\n                          <option>Rome</option>\n                        </select>\n                      </div>\n                      <div>\n                        <select class=\"search_form_select\">\n                          <option disabled selected>Bedrooms</option>\n                          <option>Any</option>\n                          <option>Studio</option>\n                          <option>1 Bed</option>\n                          <option>2 Bed</option>\n                          <option>3 Bed</option>\n                          <option>4 Bed</option>\n                        </select>\n                      </div>\n                      <div>\n                        <select class=\"search_form_select\">\n                          <option disabled selected>Bathrooms</option>\n                          <option>1</option>\n                          <option>1.5</option>\n                          <option>2</option>\n                          <option>2.5</option>\n                          <option>3</option>\n                        </select>\n                      </div>\n                    </div>\n                    <button class=\"search_form_button ml-auto\">search</button>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</section>\n\n\n\n"

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
    HomeComponent.prototype.ngOnInit = function () { };
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

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Login</span>\n</mat-toolbar>\n<mat-card class=\"my-card\">\n  <mat-card-content>\n\n    <!--FORM FIELDS HERE-->\n    <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n      <mat-form-field class=\"full-width\">\n        <mat-label>Username</mat-label>\n        <input matInput placeholder=\"Username\" [(ngModel)]=\"user.username\" name=\"username\" required>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-label>Password</mat-label>\n        <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\" name=\"password\" required>\n      </mat-form-field>\n    </div>\n\n  </mat-card-content>\n  <mat-card-actions>\n\n    <!-- LOGIN BUTTON -->\n    <button mat-raised-button (click)=\"onSubmit()\" color=\"primary\">Login</button>\n\n    <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n\n  </mat-card-actions>\n</mat-card>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.dialog */ "./src/app/register/register.dialog.ts");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/login.service */ "./src/app/core/services/login.service.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginService, dialog) {
        this.router = router;
        this.loginService = loginService;
        this.dialog = dialog;
        this.user = {
            username: "",
            password: ""
        };
        this.isLoaded = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isLoaded = false;
        this.loginService.loginUser(this.user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (user) {
            _this.loginUser = user;
            _this.isLoaded = true;
            _this.openDialog('Login successful!', true);
        }, function (err) {
            _this.isLoaded = true;
            _this.openDialog('Unable to login. Username or password are incorrect. Please try again', false);
        });
    };
    LoginComponent.prototype.openDialog = function (message, subscribe) {
        var _this = this;
        var dialogRef = this.dialog.open(_register_register_dialog__WEBPACK_IMPORTED_MODULE_5__["RegisterDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        if (subscribe) {
            dialogRef.afterClosed().subscribe(function (result) {
                _this.router.navigate(['/']);
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/property/property.component.css":
/*!*************************************************!*\
  !*** ./src/app/property/property.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  width: 1100px;\n  height:940px;\n  margin: 10px;\n  border: 1px none #555;\n}\n\n.example-button-row button {\n  margin-left: 8px;\n  margin-right: 400px;\n  background-color: aliceblue;\n}\n\n.space{margin-left:10px;}\n\nmat-grid-tile {\n  background: lightblue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHkvcHJvcGVydHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBLE9BQU8sZ0JBQWdCLENBQUM7O0FBR3hCO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcHJvcGVydHkvcHJvcGVydHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMTAwcHg7XG4gIGhlaWdodDo5NDBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXI6IDFweCBub25lICM1NTU7XG59XG5cbi5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuXG4uc3BhY2V7bWFyZ2luLWxlZnQ6MTBweDt9XG5cblxubWF0LWdyaWQtdGlsZSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/property/property.component.html":
/*!**************************************************!*\
  !*** ./src/app/property/property.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n\n    <span>Property Listings</span>\n\n</mat-toolbar>\n<P>\n</P>\n<div>\n  <div class=\"example-button-row\">\n    <button mat-raised-button>Back to Search</button>\n\n    Sort By : <button mat-raised-button [matMenuTriggerFor]=\"menu\">Relevance</button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item>Price:low to high</button>\n      <button mat-menu-item>Price:high to low</button>\n      <button mat-menu-item>Newest</button>\n    </mat-menu>\n  </div>\n</div>\n<div class = \"space\">\n  Showing 1 - 9 of {{numberOfResult}} results.\n</div>\n\n\n\n\n<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>\n    <mat-list role=\"list\">\n      <mat-list-item role=\"listitem\"><mat-checkbox>For Sell</mat-checkbox></mat-list-item>\n      <mat-list-item role=\"listitem\"><mat-checkbox>For rent</mat-checkbox></mat-list-item>\n      <mat-list-item role=\"listitem\">Price range</mat-list-item>\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\"><mat-checkbox>Under $100k</mat-checkbox></mat-list-item>\n        <mat-list-item role=\"listitem\"><mat-checkbox>$100k to $200k</mat-checkbox></mat-list-item>\n        <mat-list-item role=\"listitem\"><mat-checkbox>Over $200k</mat-checkbox></mat-list-item>\n      </mat-list>\n      <mat-list-item role=\"listitem\">Bed Rooms</mat-list-item>\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\"><mat-checkbox>1+</mat-checkbox></mat-list-item>\n        <mat-list-item role=\"listitem\"><mat-checkbox>2+</mat-checkbox></mat-list-item>\n        <mat-list-item role=\"listitem\"><mat-checkbox>3+</mat-checkbox></mat-list-item>\n      </mat-list>\n      <mat-list-item role=\"listitem\">Property Type</mat-list-item>\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\"> <mat-checkbox>House</mat-checkbox></mat-list-item>\n        <mat-list-item role=\"listitem\"> <mat-checkbox>Apartment</mat-checkbox></mat-list-item>\n        <mat-list-item role=\"listitem\"> <mat-checkbox>TownHouse</mat-checkbox></mat-list-item>\n      </mat-list>\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content>\n    <!--<mat-grid-list cols=\"2\" rowHeight=\"2:1\">-->\n      <!--<mat-grid-tile></mat-grid-tile>-->\n      <!--<mat-grid-tile>2</mat-grid-tile>-->\n      <!--<mat-grid-tile>3</mat-grid-tile>-->\n      <!--<mat-grid-tile>4</mat-grid-tile>-->\n      <!--<mat-grid-tile>5</mat-grid-tile>-->\n      <!--<mat-grid-tile>6</mat-grid-tile>-->\n      <!--<mat-grid-tile>7</mat-grid-tile>-->\n      <!--<mat-grid-tile>8</mat-grid-tile>-->\n    <!--</mat-grid-list>-->\n\n    <section class=\"section\">\n      <div class=\"container\">\n        <div class=\"columns is-multiline\">\n          <div class=\"column is-4\" *ngFor=\"let listing of listings\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <!--<a [routerLink]=\"[listing.listingAddress]\" skipLocationChange=\"true\" [queryParams]=\"{-->\n            <!--listingAddress: listing.listingAddress,-->\n            <!--listingCity: listing.listingCity,-->\n            <!--listingState: listing.listingState-->\n            <!--}\">{{ listing.listingAddress }}</a>-->\n                <p>{{ listing.listingAddress }}</p>\n                <p>{{ listing.listingCity }}</p>\n                <p>{{ listing.listingState }}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  </mat-drawer-content>\n</mat-drawer-container>\n\n"

/***/ }),

/***/ "./src/app/property/property.component.ts":
/*!************************************************!*\
  !*** ./src/app/property/property.component.ts ***!
  \************************************************/
/*! exports provided: PropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyComponent", function() { return PropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_listings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/listings.service */ "./src/app/core/services/listings.service.ts");



var PropertyComponent = /** @class */ (function () {
    function PropertyComponent(listingsService) {
        this.listingsService = listingsService;
    }
    PropertyComponent.prototype.ngOnInit = function () {
        this.listings = this.listingsService.getListings();
        this.numberOfResult = this.listings.length;
    };
    PropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property',
            template: __webpack_require__(/*! ./property.component.html */ "./src/app/property/property.component.html"),
            styles: [__webpack_require__(/*! ./property.component.css */ "./src/app/property/property.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_listings_service__WEBPACK_IMPORTED_MODULE_2__["ListingsService"]])
    ], PropertyComponent);
    return PropertyComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.my-card {*/\n  /*margin: 0 auto;*/\n  /*width: 800px;*/\n  /*}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNsQixJQUFJIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLm15LWNhcmQgeyovXG4gIC8qbWFyZ2luOiAwIGF1dG87Ki9cbiAgLyp3aWR0aDogODAwcHg7Ki9cbi8qfSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <span>Registration</span>\n</mat-toolbar>\n<mat-card class=\"my-card\">\n  <mat-card-content>\n\n      <!--FORM FIELDS HERE-->\n    <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n      <mat-form-field class=\"full-width\">\n        <mat-label>First Name</mat-label>\n        <input matInput placeholder=\"First name\" [(ngModel)]=\"user.firstName\" name=\"firstName\" required><br>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-label>Last Name</mat-label>\n        <input matInput placeholder=\"Last name\" [(ngModel)]=\"user.lastName\" name=\"lastName\" required>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-label>Username</mat-label>\n        <input matInput placeholder=\"Username\" [(ngModel)]=\"user.username\" name=\"username\" required>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-label>Password</mat-label>\n        <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\" name=\"password\" required>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-label>Email Address</mat-label>\n        <input matInput placeholder=\"Email address\" [(ngModel)]=\"user.emailAddress\" name=\"emailAddress\" required>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-label>Phone Number</mat-label>\n        <input matInput placeholder=\"Phone number\" [(ngModel)]=\"user.phoneNumber\" name=\"phoneNumber\" required>\n      </mat-form-field>\n    </div>\n\n  </mat-card-content>\n  <mat-card-actions>\n\n    <!-- REGISTER BUTTON -->\n    <button mat-raised-button (click)=\"onSubmit()\" color=\"primary\">Register</button>\n\n    <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n\n  </mat-card-actions>\n</mat-card>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/register.service */ "./src/app/core/services/register.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _register_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.dialog */ "./src/app/register/register.dialog.ts");







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, registerService, dialog) {
        this.router = router;
        this.registerService = registerService;
        this.dialog = dialog;
        this.isLoaded = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.user = new _core_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterUser"]();
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.isDataProvided()) {
            this.isLoaded = false;
            this.registerService.registerUser(this.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .subscribe(function (data) {
                _this.isLoaded = true;
                _this.openDialog('Registration successful!', true);
            }, function (error) {
                _this.isLoaded = true;
                _this.openDialog('Username is already taken. Please choose another username', false);
            });
        }
        else {
            this.openDialog('Please enter input for all required fields', false);
        }
    };
    RegisterComponent.prototype.isDataProvided = function () {
        return (!this.isEmpty(this.user.username) &&
            !this.isEmpty(this.user.password) &&
            !this.isEmpty(this.user.firstName) &&
            !this.isEmpty(this.user.lastName) &&
            !this.isEmpty(this.user.emailAddress) &&
            !this.isEmpty(this.user.phoneNumber));
    };
    RegisterComponent.prototype.isEmpty = function (str) {
        return (!str || 0 === str.length);
    };
    RegisterComponent.prototype.openDialog = function (message, subscribe) {
        var _this = this;
        var dialogRef = this.dialog.open(_register_dialog__WEBPACK_IMPORTED_MODULE_6__["RegisterDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        if (subscribe) {
            dialogRef.afterClosed().subscribe(function (result) {
                _this.router.navigate(['/login']);
            });
        }
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/register/register.dialog.html":
/*!***********************************************!*\
  !*** ./src/app/register/register.dialog.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  {{data.message}}\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n  <button mat-raised-button color=\"primary\" (click)=\"onOkClick()\">Ok</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/register/register.dialog.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.dialog.ts ***!
  \*********************************************/
/*! exports provided: RegisterDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDialog", function() { return RegisterDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var RegisterDialog = /** @class */ (function () {
    function RegisterDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    RegisterDialog.prototype.onOkClick = function () {
        this.dialogRef.close();
    };
    RegisterDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dialog-component',
            template: __webpack_require__(/*! ./register.dialog.html */ "./src/app/register/register.dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], RegisterDialog);
    return RegisterDialog;
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

module.exports = __webpack_require__(/*! /Users/tagrigoriou/csc648-sp19-team43/Project/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map