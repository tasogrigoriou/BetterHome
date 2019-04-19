(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-module"],{

/***/ "./src/app/property/property-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/property/property-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PropertyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyRoutingModule", function() { return PropertyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _property_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property.component */ "./src/app/property/property.component.ts");
/* harmony import */ var _property_singleListing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property.singleListing.component */ "./src/app/property/property.singleListing.component.ts");





var routes = [
    {
        path: '',
        component: _property_component__WEBPACK_IMPORTED_MODULE_3__["PropertyComponent"]
    },
    {
        path: ':listing.Lid',
        component: _property_singleListing_component__WEBPACK_IMPORTED_MODULE_4__["PropertySingleListingComponent"]
    }
];
var PropertyRoutingModule = /** @class */ (function () {
    function PropertyRoutingModule() {
    }
    PropertyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PropertyRoutingModule);
    return PropertyRoutingModule;
}());



/***/ }),

/***/ "./src/app/property/property-single.component.html":
/*!*********************************************************!*\
  !*** ./src/app/property/property-single.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"card\" *ngIf=\"listing\">\n      <p> {{listing.listingAddress}}}<p>\n      <p>{{ listing.listingCity }}</p>\n      <p>{{ listing.listingState }}</p>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/property/property-single.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/property/property-single.component.ts ***!
  \*******************************************************/
/*! exports provided: PropertySingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertySingleComponent", function() { return PropertySingleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_listings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/listings.service */ "./src/app/core/services/listings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PropertySingleComponent = /** @class */ (function () {
    function PropertySingleComponent(route) {
        this.route = route;
    }
    PropertySingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.listing = new _core_services_listings_service__WEBPACK_IMPORTED_MODULE_2__["Listing"](params['Lid'], params['DisplayBoard_boardId'], params['title'], params['listingType'], params['price'], params['city'], params['zipCode'], params['street'], params['forSale'], params['numBedrooms'], params['numBathrooms']);
        });
    };
    PropertySingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property',
            template: __webpack_require__(/*! ./property-single.component.html */ "./src/app/property/property-single.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PropertySingleComponent);
    return PropertySingleComponent;
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

module.exports = "<mat-toolbar>\n\n    <span>Property Listings</span>\n\n</mat-toolbar>\n<P>\n</P>\n<div>\n  <div class=\"example-button-row\">\n    <button mat-raised-button>Back to Search</button>\n\n    Sort By : <button mat-raised-button [matMenuTriggerFor]=\"menu\">Relevance</button>\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item>Price:low to high</button>\n      <button mat-menu-item>Price:high to low</button>\n      <button mat-menu-item>Newest</button>\n    </mat-menu>\n  </div>\n</div>\n<div class = \"space\">\n  Showing 1 - 9 of {{numberOfResult}} results.\n</div>\n\n\n\n\n<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>\n    <mat-list role=\"list\">\n      <mat-list-item role=\"listitem\"><mat-checkbox>For Sell</mat-checkbox></mat-list-item>\n      <mat-list-item role=\"listitem\"><mat-checkbox>For rent</mat-checkbox></mat-list-item>\n      <mat-list-item role=\"listitem\">Price range</mat-list-item>\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\"><mat-checkbox>Under $100k</mat-checkbox></mat-list-item>\n        <mat-list-item role=\"listitem\"><mat-checkbox>$100k to $200k</mat-checkbox></mat-list-item>\n        <mat-list-item role=\"listitem\"><mat-checkbox>Over $200k</mat-checkbox></mat-list-item>\n      </mat-list>\n      <mat-list-item role=\"listitem\">Bed Rooms</mat-list-item>\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\"><mat-checkbox>1+</mat-checkbox></mat-list-item>\n        <mat-list-item role=\"listitem\"><mat-checkbox>2+</mat-checkbox></mat-list-item>\n        <mat-list-item role=\"listitem\"><mat-checkbox>3+</mat-checkbox></mat-list-item>\n      </mat-list>\n      <mat-list-item role=\"listitem\">Property Type</mat-list-item>\n      <mat-list role=\"list\">\n        <mat-list-item role=\"listitem\"> <mat-checkbox>House</mat-checkbox></mat-list-item>\n        <mat-list-item role=\"listitem\"> <mat-checkbox>Apartment</mat-checkbox></mat-list-item>\n        <mat-list-item role=\"listitem\"> <mat-checkbox>TownHouse</mat-checkbox></mat-list-item>\n      </mat-list>\n    </mat-list>\n  </mat-drawer>\n  <mat-drawer-content>\n    <!--<mat-grid-list cols=\"2\" rowHeight=\"2:1\">-->\n      <!--<mat-grid-tile></mat-grid-tile>-->\n      <!--<mat-grid-tile>2</mat-grid-tile>-->\n      <!--<mat-grid-tile>3</mat-grid-tile>-->\n      <!--<mat-grid-tile>4</mat-grid-tile>-->\n      <!--<mat-grid-tile>5</mat-grid-tile>-->\n      <!--<mat-grid-tile>6</mat-grid-tile>-->\n      <!--<mat-grid-tile>7</mat-grid-tile>-->\n      <!--<mat-grid-tile>8</mat-grid-tile>-->\n    <!--</mat-grid-list>-->\n\n    <section class=\"section\">\n      <div class=\"container\">\n        <div class=\"columns is-multiline\">\n          <div class=\"column is-4\" *ngFor=\"let listing of listings\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <a [routerLink]=\"[listing.Lid]\">{{ listing.street }}</a>\n                <!--<p>{{ listing.listingAddress }}</p>-->\n                <!--<p>{{ listing.listingCity }}</p>-->\n                <!--<p>{{ listing.listingState }}</p>-->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  </mat-drawer-content>\n</mat-drawer-container>\n\n"

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

/***/ "./src/app/property/property.module.ts":
/*!*********************************************!*\
  !*** ./src/app/property/property.module.ts ***!
  \*********************************************/
/*! exports provided: PropertyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyModule", function() { return PropertyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _property_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property.component */ "./src/app/property/property.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _property_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property-routing.module */ "./src/app/property/property-routing.module.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _property_singleListing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./property.singleListing.component */ "./src/app/property/property.singleListing.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _property_single_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./property-single.component */ "./src/app/property/property-single.component.ts");









var PropertyModule = /** @class */ (function () {
    function PropertyModule() {
    }
    PropertyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _property_routing_module__WEBPACK_IMPORTED_MODULE_4__["PropertyRoutingModule"]
            ],
            declarations: [_property_component__WEBPACK_IMPORTED_MODULE_2__["PropertyComponent"], _property_singleListing_component__WEBPACK_IMPORTED_MODULE_6__["PropertySingleListingComponent"], _property_single_component__WEBPACK_IMPORTED_MODULE_8__["PropertySingleComponent"]]
        })
    ], PropertyModule);
    return PropertyModule;
}());



/***/ }),

/***/ "./src/app/property/property.singleListing.component.css":
/*!***************************************************************!*\
  !*** ./src/app/property/property.singleListing.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body\n{\n  overflow-x: hidden;\n  width: 100%;\n  color: #6b6b6b;\n}\n.mySlides\n{\n  display:none\n}\n.fa\n{\n  color: darkgray;\n}\n.propertyOverview\n{\n  padding-left: 30%\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHkvcHJvcGVydHkuc2luZ2xlTGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUU7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LnNpbmdsZUxpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5XG57XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjNmI2YjZiO1xufVxuLm15U2xpZGVzXG57XG4gIGRpc3BsYXk6bm9uZVxufVxuLmZhXG57XG4gIGNvbG9yOiBkYXJrZ3JheTtcbn1cbi5wcm9wZXJ0eU92ZXJ2aWV3XG57XG4gIHBhZGRpbmctbGVmdDogMzAlXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/property/property.singleListing.component.html":
/*!****************************************************************!*\
  !*** ./src/app/property/property.singleListing.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<title>Individual Listing</title>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<body class=\"body\">\n\n<div class=\"w3-center\">\n  <div class=\"w3-section\">\n    <button class=\"w3-button w3-light-grey\" (click)=\"plusDivs(-1)\" mat-button>❮ Prev</button>\n    <button class=\"w3-button w3-light-grey\" (click)=\"plusDivs(1)\" mat-button>Next ❯</button>\n  </div>\n</div>\n\n<!--  -->\n<div class=\"propertyOverview\" *ngIf=\"listing.Lid\">\n  <h2>Overview</h2>\n  <hr width=\"50%\" size=\"8\">\n  <p><i class=\"fa fa-dollar fa-fw w3-margin-right w3-large \"></i> For {{ forSale(listing.forSale) }} ${{ listing.price }}</p>\n  <p><i class=\"fa fa-bath fa-fw w3-margin-right w3-large \"></i> {{ listing.numBedrooms }} bed, {{ listing.numBathrooms }} bath</p>\n  <p><i class=\"fa fa-map-marker fa-fw w3-margin-right w3-large \"></i> {{ listing.street }} {{ listing.city }} {{ listing.zipCode }}</p>\n  <h2>Contact</h2>\n  <p><i class=\"fa fa-phone fa-fw w3-margin-right w3-large \"></i> <var id=\"listingPhoneNumber\">(xxx)xxx-xxxx</var></p>\n  <p><i class=\"fa fa-envelope fa-fw w3-margin-right w3-large \"></i> <var id=\"listingEmail\"> sendhelp@mailboyz.gov</var></p>\n</div>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/property/property.singleListing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/property/property.singleListing.component.ts ***!
  \**************************************************************/
/*! exports provided: PropertySingleListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertySingleListingComponent", function() { return PropertySingleListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/listings.service */ "./src/app/core/services/listings.service.ts");




var PropertySingleListingComponent = /** @class */ (function () {
    function PropertySingleListingComponent(route, listingsService) {
        this.route = route;
        this.listingsService = listingsService;
    }
    PropertySingleListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        localStorage.getItem('userLogin');
        console.log(this.route.snapshot.params);
        this.route.paramMap.subscribe(function (params) {
            console.log(params);
            var listingId = Number(params.get('listing.Lid'));
            console.log(listingId);
            _this.listing = _this.listingsService.getListingById(listingId);
            console.log(_this.listing);
        });
    };
    PropertySingleListingComponent.prototype.forSale = function () {
        if (this.listing.forSale == true)
            return "sale";
        return "rent";
    };
    PropertySingleListingComponent.prototype.plusDivs = function (n) {
        //this.showDivs(slideIndex += n);
    };
    PropertySingleListingComponent.prototype.showDivs = function (n) {
        // if (n > x.length) {slideIndex = 1}
        // if (n < 1) {slideIndex = x.length}
        // for (var i = 0; i < x.length; i++) {
        //   x[i].style.display = "none";
        // }
        // x[slideIndex-1].style.display = "block";
    };
    PropertySingleListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property',
            template: __webpack_require__(/*! ./property.singleListing.component.html */ "./src/app/property/property.singleListing.component.html"),
            styles: [__webpack_require__(/*! ./property.singleListing.component.css */ "./src/app/property/property.singleListing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__["ListingsService"]])
    ], PropertySingleListingComponent);
    return PropertySingleListingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=property-property-module.js.map