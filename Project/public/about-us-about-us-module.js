(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-us-about-us-module"],{

/***/ "./src/app/about-us/about-us-list.component.html":
/*!*******************************************************!*\
  !*** ./src/app/about-us/about-us-list.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"columns is-multiline\">\n      <div class=\"column is-4\" *ngFor=\"let member of members\">\n        <div class=\"card\">\n          <div class=\"card-content\">\n            <a [routerLink]=\"[member.name]\" skipLocationChange=\"true\" [queryParams]=\"{\n            name: member.name,\n            photoUrl: member.photoUrl,\n            body: member.body\n            }\">{{ member.name }}</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/about-us/about-us-list.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/about-us/about-us-list.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutUsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsListComponent", function() { return AboutUsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/members.service */ "./src/app/core/services/members.service.ts");



var AboutUsListComponent = /** @class */ (function () {
    function AboutUsListComponent(membersService) {
        this.membersService = membersService;
    }
    AboutUsListComponent.prototype.ngOnInit = function () {
        this.members = this.membersService.getMembers();
    };
    AboutUsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us-list',
            template: __webpack_require__(/*! ./about-us-list.component.html */ "./src/app/about-us/about-us-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_members_service__WEBPACK_IMPORTED_MODULE_2__["MembersService"]])
    ], AboutUsListComponent);
    return AboutUsListComponent;
}());



/***/ }),

/***/ "./src/app/about-us/about-us-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/about-us/about-us-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutUsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsRoutingModule", function() { return AboutUsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_us_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us-list.component */ "./src/app/about-us/about-us-list.component.ts");
/* harmony import */ var _about_us_single_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us-single.component */ "./src/app/about-us/about-us-single.component.ts");





var routes = [
    {
        path: '',
        component: _about_us_list_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsListComponent"]
    },
    {
        path: ':member.name',
        component: _about_us_single_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsSingleComponent"]
    }
];
var AboutUsRoutingModule = /** @class */ (function () {
    function AboutUsRoutingModule() {
    }
    AboutUsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AboutUsRoutingModule);
    return AboutUsRoutingModule;
}());



/***/ }),

/***/ "./src/app/about-us/about-us-single.component.html":
/*!*********************************************************!*\
  !*** ./src/app/about-us/about-us-single.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"card\" *ngIf=\"member\">\n      <img [src]=\"member.photoUrl\">\n      <h1>{{ member.name }}</h1>\n      <p>{{ member.body }}</p>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/about-us/about-us-single.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/about-us/about-us-single.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutUsSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsSingleComponent", function() { return AboutUsSingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_members_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/members.service */ "./src/app/core/services/members.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AboutUsSingleComponent = /** @class */ (function () {
    function AboutUsSingleComponent(route) {
        this.route = route;
    }
    AboutUsSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.member = new _core_services_members_service__WEBPACK_IMPORTED_MODULE_2__["Member"](params['name'], params['photoUrl'], params['body']);
        });
    };
    AboutUsSingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us-single',
            template: __webpack_require__(/*! ./about-us-single.component.html */ "./src/app/about-us/about-us-single.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], AboutUsSingleComponent);
    return AboutUsSingleComponent;
}());



/***/ }),

/***/ "./src/app/about-us/about-us.module.ts":
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
/*! exports provided: AboutUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsModule", function() { return AboutUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us-routing.module */ "./src/app/about-us/about-us-routing.module.ts");
/* harmony import */ var _about_us_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us-list.component */ "./src/app/about-us/about-us-list.component.ts");
/* harmony import */ var _about_us_single_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us-single.component */ "./src/app/about-us/about-us-single.component.ts");






var AboutUsModule = /** @class */ (function () {
    function AboutUsModule() {
    }
    AboutUsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _about_us_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutUsRoutingModule"]
            ],
            declarations: [_about_us_list_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsListComponent"], _about_us_single_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsSingleComponent"]]
        })
    ], AboutUsModule);
    return AboutUsModule;
}());



/***/ })

}]);
//# sourceMappingURL=about-us-about-us-module.js.map