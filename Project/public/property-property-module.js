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
        path: ':listing.listingId',
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

module.exports = "<!--this component is not used-->\n\n<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"card\" *ngIf=\"listing\">\n      <p> {{listing.listingAddress}}}<p>\n      <p>{{ listing.listingCity }}</p>\n      <p>{{ listing.listingState }}</p>\n    </div>\n  </div>\n</section>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PropertySingleComponent = /** @class */ (function () {
    function PropertySingleComponent(route) {
        this.route = route;
    }
    PropertySingleComponent.prototype.ngOnInit = function () {
        this.route.queryParams.subscribe(function (params) {
            // this.listing = new Listing(params['listingId'], params['DisplayBoard_boardId'], params['title'], params['listingType'],
            //   params['price'], params['city'], params['zipCode'], params['street'],
            //   params['forSale'], params['numBedrooms'], params['numBathrooms']);
        });
    };
    PropertySingleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property',
            template: __webpack_require__(/*! ./property-single.component.html */ "./src/app/property/property-single.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = ".property-toolbar {\n  min-height: 74px;\n  height: auto;\n  width: 100%;\n  margin-bottom: 10px;\n  border-bottom: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(107, 107, 107, 0.35);\n}\n\n.property-toolbar-title {\n  font-size: 20px;\n  padding-top: 5px;\n  padding-left: 5px;\n}\n\n.cont-search ::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\n.cont-form ::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\n.cont-price-range ::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\n.property-grid-list {\n  background-color: transparent;\n}\n\n.property-grid-title {\n  border: 1px;\n}\n\n.property-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.property-card {\n  position: relative;\n  margin-bottom: 10px;\n  align-items: center;\n}\n\n.favorite-button {\n  position: absolute;\n  top: 12px;\n  right: 16px;\n  height: 36px;\n  width: 20px;\n}\n\n.property-card-title {\n  margin-bottom: 8px;\n}\n\n.property-card-image {\n  margin-left: 0;\n  margin-right: 0;\n  width: 100%;\n}\n\n.img-container {\n  max-height: 500px;\n  height: 100%;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.img-wrap {\n  display: inline-block;\n  position: relative;\n}\n\n.property-paginator {\n  margin-bottom: 10px;\n}\n\n.space {\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n\n.cont-form {\n  margin-top: 20px;\n  margin-right: 20px;\n  max-width: 135px;\n}\n\n.cont-search {\n  margin-left: 35px;\n  margin-top: 20px;\n  margin-right: 20px;\n  max-width: 210px;\n}\n\n.cont-price-range {\n  margin-top: 20px;\n  margin-right: 20px;\n  max-width: 80px;\n}\n\n.a-link-card {\n  position: absolute;\n  top: 0; left: 0;\n  height: 100%; width: 100%;\n}\n\n.property-access-title {\n  margin-top: -10px;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.desc-cont {\n  /*line-height: 2.5ex;*/\n  /*height: 7.5ex; !* 2.5ex for each visible line *!*/\n  /*overflow: hidden;*/\n  /*display: block;*/\n  /*white-space: nowrap;*/\n  /*text-overflow: ellipsis;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHkvcHJvcGVydHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTSxFQUFFLE9BQU87RUFDZixZQUFZLEVBQUUsV0FBVztBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbURBQW1EO0VBQ25ELG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvcGVydHktdG9vbGJhciB7XG4gIG1pbi1oZWlnaHQ6IDc0cHg7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMTA3LCAxMDcsIDEwNywgMC4zNSk7XG59XG5cbi5wcm9wZXJ0eS10b29sYmFyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmNvbnQtc2VhcmNoIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jb250LWZvcm0gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmNvbnQtcHJpY2UtcmFuZ2UgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvcGVydHktZ3JpZC1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wcm9wZXJ0eS1ncmlkLXRpdGxlIHtcbiAgYm9yZGVyOiAxcHg7XG59XG5cbi5wcm9wZXJ0eS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb3BlcnR5LWNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mYXZvcml0ZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5wcm9wZXJ0eS1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ucHJvcGVydHktY2FyZC1pbWFnZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW1nLXdyYXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb3BlcnR5LXBhZ2luYXRvciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zcGFjZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jb250LWZvcm0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogMTM1cHg7XG59XG5cbi5jb250LXNlYXJjaCB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogMjEwcHg7XG59XG5cbi5jb250LXByaWNlLXJhbmdlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG59XG5cbi5hLWxpbmstY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwOyBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvcGVydHktYWNjZXNzLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5kZXNjLWNvbnQge1xuICAvKmxpbmUtaGVpZ2h0OiAyLjVleDsqL1xuICAvKmhlaWdodDogNy41ZXg7ICEqIDIuNWV4IGZvciBlYWNoIHZpc2libGUgbGluZSAqISovXG4gIC8qb3ZlcmZsb3c6IGhpZGRlbjsqL1xuICAvKmRpc3BsYXk6IGJsb2NrOyovXG4gIC8qd2hpdGUtc3BhY2U6IG5vd3JhcDsqL1xuICAvKnRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyovXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/property/property.component.html":
/*!**************************************************!*\
  !*** ./src/app/property/property.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid property-toolbar\">\n\n  <mat-form-field class=\"cont-search\" [floatLabel]=\"'never'\">\n    <input matInput placeholder=\"Search by city...\" [(ngModel)]=\"listingSearch.city\" (keyup.enter)=\"onSearchClick()\" required>\n    <a class=\"my-search\" mat-button matSuffix color=\"primary\" (click)=\"onSearchClick()\"><mat-icon>search</mat-icon></a>\n  </mat-form-field>\n\n  <mat-form-field class=\"cont-price-range\">\n    <input matInput placeholder=\"Min price\" [(ngModel)]=\"listingSearch.minPrice\" (keypress)=\"numberOnly($event)\" (keyup.enter)=\"onSearchClick()\">\n  </mat-form-field>\n\n  <mat-form-field class=\"cont-price-range\">\n    <input matInput placeholder=\"Max price\" [(ngModel)]=\"listingSearch.maxPrice\" (keypress)=\"numberOnly($event)\" (keyup.enter)=\"onSearchClick()\">\n  </mat-form-field>\n\n  <mat-form-field class=\"cont-form\" [floatLabel]=\"'never'\">\n    <mat-label>Listing Type</mat-label>\n    <mat-select [(value)]=\"listingSearch.listingType\" (selectionChange)=\"onSelectionChange()\">\n      <mat-option value=\"Any\">Any Type</mat-option>\n      <mat-option value=\"House\">House</mat-option>\n      <mat-option value=\"Apartment\">Apartment</mat-option>\n      <mat-option value=\"Condo\">Condo</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"cont-form\" [floatLabel]=\"'never'\">\n    <mat-label>Sale or Rental</mat-label>\n    <mat-select [(value)]=\"listingSearch.forSale\" (selectionChange)=\"onSelectionChange()\">\n      <mat-option value=null>Sale and Rental</mat-option>\n      <mat-option value=1>Sale</mat-option>\n      <mat-option value=0>Rental</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"cont-form\" [floatLabel]=\"'never'\">\n    <mat-label>Bedrooms</mat-label>\n    <mat-select [(value)]=\"listingSearch.numBedrooms\" (selectionChange)=\"onSelectionChange()\">\n      <mat-option value=0>Any Beds</mat-option>\n      <mat-option value=1>1+ Bed</mat-option>\n      <mat-option value=2>2+ Beds</mat-option>\n      <mat-option value=3>3+ Beds</mat-option>\n      <mat-option value=4>4+ Beds</mat-option>\n      <mat-option value=5>5+ Beds</mat-option>\n      <mat-option value=6>6+ Beds</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"cont-form\" [floatLabel]=\"'never'\">\n    <mat-label>Bathrooms</mat-label>\n    <mat-select [(value)]=\"listingSearch.numBathrooms\" (selectionChange)=\"onSelectionChange()\">\n      <mat-option value=0>Any Baths</mat-option>\n      <mat-option value=1>1+ Bath</mat-option>\n      <mat-option value=2>2+ Baths</mat-option>\n      <mat-option value=3>3+ Baths</mat-option>\n      <mat-option value=4>4+ Baths</mat-option>\n      <mat-option value=5>5+ Baths</mat-option>\n      <mat-option value=6>6+ Baths</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"cont-form\" [floatLabel]=\"'never'\">\n    <mat-label>Lot size</mat-label>\n    <mat-select [(value)]=\"listingSearch.lotSize\" (selectionChange)=\"onSelectionChange()\">\n      <mat-option value=0>Any Lot Size</mat-option>\n      <mat-option value=1000>1000+ sqft</mat-option>\n      <mat-option value=2000>2000+ sqft</mat-option>\n      <mat-option value=3000>3000+ sqft</mat-option>\n      <mat-option value=4000>4000+ sqft</mat-option>\n      <mat-option value=5000>5000+ sqft</mat-option>\n      <mat-option value=6000>6000+ sqft</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"cont-form\" [floatLabel]=\"'never'\">\n    <mat-label>Accessibility</mat-label>\n    <mat-select [formControl]=\"accessibilities\" multiple (selectionChange)=\"onSelectionChange()\">\n      <mat-option *ngFor=\"let accessibility of accessibilityList\" [value]=\"accessibility\">{{accessibility}}</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n</div>\n\n<div class=\"container\">\n\n  <div class=\"space\">\n    <h2>Property Listings</h2>\n    <ng-template [ngIf]=\"listings.length > 0\">\n      <mat-paginator #paginatorTop class=\"property-paginator\"\n                     [length]=\"listings.length\"\n                     [pageSize]=\"pageSize\"\n                     [pageSizeOptions]=\"pageSizeOptions\"\n                     (page)=\"handlePageTop($event)\">\n      </mat-paginator>\n    </ng-template>\n  </div>\n\n  <div class=\"property-container\" fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\"16px\" fxLayoutGap.xs=\"0\">\n    <mat-card class=\"property-card\" appMaterialElevation defaultElevation=\"3\" raisedElevation=\"24\"\n              [fxFlex]=\"rowWidth\"\n              (window:resize)=\"onResize($event)\"\n              *ngFor=\"let listing of pagedListings\">\n\n      <a class=\"a-link-card\" [routerLink]=\"[listing.listingId]\"></a>\n\n      <ng-template [ngIf]=\"user\">\n        <a class=\"favorite-button\" (click)=\"onFavoriteClick(listing)\">\n          <ng-template [ngIf]=\"!isFavorite(listing)\">\n            <mat-icon style=\"font-size: 24px !important\" color=\"warn\">favorite_border</mat-icon>\n          </ng-template>\n          <ng-template [ngIf]=\"isFavorite(listing)\">\n            <mat-icon style=\"font-size: 24px !important\" color=\"warn\">favorite</mat-icon>\n          </ng-template>\n        </a>\n      </ng-template>\n\n      <mat-card-header>\n        <mat-card-title><h5>{{listing.title}}</h5>\n        </mat-card-title>\n        <mat-card-subtitle style=\"padding-top: 6px !important\">{{listing.street + ', ' + listing.city + ', ' + listing.state}}</mat-card-subtitle>\n      </mat-card-header>\n\n      <drag-scroll #drag_scroll>\n        <div class=\"img-wrap\"\n             *ngFor=\"let imageUrl of listing.imageUrls\">\n          <img class=\"img-container\"\n               drag-scroll-item\n               [src]=\"imageUrl\"\n               alt=\"\" />\n          <a class=\"a-link-card\" [routerLink]=\"[listing.listingId]\"></a>\n        </div>\n      </drag-scroll>\n\n      <mat-card-content>\n        <h6>{{listing.listingType + ' for ' + (listing.forSale ? 'sale' : 'rent')}}</h6>\n        <p><i>{{'$' + numberWithCommas(listing.price) + ' | ' + listing.numBedrooms + ' beds' + ' | ' + listing.numBathrooms + ' baths' + ' | ' + numberWithCommas(listing.lotSize) + ' sqft'}}</i></p>\n        <p class=\"property-access-title\">{{getPropertyAccessibility(listing)}}</p>\n        <p>{{listing.description}}</p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div>\n    <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n  </div>\n\n  <ng-template [ngIf]=\"listings.length > 0\">\n    <mat-paginator #paginatorBottom class=\"property-paginator\"\n                   [length]=\"listings.length\"\n                   [pageSize]=\"pageSize\"\n                   [pageSizeOptions]=\"pageSizeOptions\"\n                   (page)=\"handlePageBottom($event)\">\n    </mat-paginator>\n  </ng-template>\n\n</div>\n"

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
/* harmony import */ var _core_services_search_listings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/search.listings.service */ "./src/app/core/services/search.listings.service.ts");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register/register.dialog */ "./src/app/register/register.dialog.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/favorites.service */ "./src/app/core/services/favorites.service.ts");
/* harmony import */ var ngx_drag_scroll_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-drag-scroll/lib */ "./node_modules/ngx-drag-scroll/lib/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var PropertyComponent = /** @class */ (function () {
    function PropertyComponent(router, listingsService, searchService, favoritesService, dialog) {
        this.router = router;
        this.listingsService = listingsService;
        this.searchService = searchService;
        this.favoritesService = favoritesService;
        this.dialog = dialog;
        this.filter = true;
        this.isLoaded = false;
        this.accessibilities = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]();
        this.accessibilityList = ['Laundry', 'Hospital', 'Wheelchair', 'BART'];
        this.pageIndex = 0;
        this.pageSize = 3;
        this.pageSizeOptions = [3, 6, 18, 30, 60];
    }
    PropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('loginUser')) {
            this.user = JSON.parse(localStorage.getItem('loginUser'));
        }
        if (localStorage.getItem('listingSearch')) {
            this.listingSearch = JSON.parse(localStorage.getItem('listingSearch'));
        }
        else {
            this.listingSearch = {
                city: ''
            };
        }
        this.listings = this.searchService.getListings();
        this.pagedListings = this.listings.slice(0, this.pageSize);
        this.rowWidth = (window.innerWidth <= 500) ? '100%' : '31%';
        if (!this.user) {
            this.isLoaded = true;
            return;
        }
        var promises = [];
        var _loop_1 = function (i) {
            promises.push(this_1.favoritesService.isFavorite(this_1.listings[i].listingId, this_1.user.userId).toPromise().then(function (result) {
                _this.listings[i].isFavorite = true;
            }).catch(function (err) {
                console.log(err);
            }));
        };
        var this_1 = this;
        for (var i = 0; i < this.listings.length; i++) {
            _loop_1(i);
        }
        Promise.all(promises).then(function (s) {
            console.log(s);
            _this.isLoaded = true;
        }).catch(function (err) {
            console.log(err);
            _this.isLoaded = true;
        });
    };
    PropertyComponent.prototype.ngOnDestroy = function () {
        if (this.listingSearch) {
            localStorage.setItem('listingSearch', JSON.stringify(this.listingSearch));
        }
    };
    PropertyComponent.prototype.handlePageTop = function (event) {
        this.bottomPaginator.pageSize = event.pageSize;
        this.bottomPaginator.pageIndex = event.pageIndex;
        this.pageDidChange(event);
    };
    PropertyComponent.prototype.handlePageBottom = function (event) {
        this.topPaginator.pageSize = event.pageSize;
        this.topPaginator.pageIndex = event.pageIndex;
        this.pageDidChange(event);
    };
    PropertyComponent.prototype.pageDidChange = function (event) {
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        var startIndex = this.pageSize * this.pageIndex;
        this.pagedListings = this.listings.slice(startIndex, startIndex + this.pageSize);
    };
    PropertyComponent.prototype.onResize = function (event) {
        this.rowWidth = (event.target.innerWidth <= 500) ? '100%' : '31%';
    };
    PropertyComponent.prototype.onSearchClick = function () {
        if (!this.listingSearch.city.length) {
            this.openDialog('Please enter some text for the city field');
            return;
        }
        this.reloadData();
    };
    PropertyComponent.prototype.onSelectionChange = function () {
        this.listingSearch.accessibilities = this.accessibilities.value;
        this.reloadData();
    };
    PropertyComponent.prototype.reloadData = function () {
        var _this = this;
        this.isLoaded = false;
        localStorage.setItem('listingSearch', JSON.stringify(this.listingSearch));
        this.searchService.getSearchListings(this.listingSearch).subscribe(function (listings) {
            _this.isLoaded = true;
            _this.listings = listings;
            var startIndex = _this.pageSize * _this.pageIndex;
            _this.pagedListings = _this.listings.slice(startIndex, startIndex + _this.pageSize);
            _this.searchService.saveSearchListings(listings);
        }, function (err) {
            _this.isLoaded = true;
            _this.listings = [];
            _this.pagedListings = [];
            _this.searchService.saveSearchListings([]);
            _this.openDialog('Unable to retrieve any listing based on your search and filter options. Please try again');
        });
    };
    PropertyComponent.prototype.onFavoriteClick = function (listing) {
        if (!listing.isFavorite) {
            this.favoritesService.addFavorite(listing.listingId, this.user.userId).subscribe(function (result) {
                console.log(result);
                listing.isFavorite = true;
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.favoritesService.removeFavorite(listing.listingId, this.user.userId).subscribe(function (result) {
                console.log(result);
                listing.isFavorite = false;
            }, function (err) {
                console.log(err);
            });
        }
    };
    PropertyComponent.prototype.isFavorite = function (listing) {
        return listing.isFavorite;
    };
    PropertyComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        return !(charCode > 31 && (charCode < 48 || charCode > 57));
    };
    PropertyComponent.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    PropertyComponent.prototype.getPropertyAccessibility = function (listing) {
        var access = 'Accessibility: ';
        if (!listing.laundry && !listing.hospitalAccess && !listing.wheelchairAccess && !listing.BARTAccess)
            return access + 'none';
        var accessList = [];
        if (listing.laundry)
            accessList.push('laundry');
        if (listing.hospitalAccess)
            accessList.push('hospital');
        if (listing.wheelchairAccess)
            accessList.push('wheelchair');
        if (listing.BARTAccess)
            accessList.push('bart');
        var accessStr = access;
        for (var i = 0; i < accessList.length; i++) {
            if (i == 0) {
                accessStr = accessStr + accessList[i];
            }
            else {
                accessStr = accessStr + ', ' + accessList[i];
            }
        }
        return accessStr;
    };
    PropertyComponent.prototype.openDialog = function (message, subscribe) {
        if (subscribe === void 0) { subscribe = false; }
        var dialog = this.dialog.open(_register_register_dialog__WEBPACK_IMPORTED_MODULE_4__["RegisterDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paginatorTop'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], PropertyComponent.prototype, "topPaginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paginatorBottom'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], PropertyComponent.prototype, "bottomPaginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drag_scroll', { read: ngx_drag_scroll_lib__WEBPACK_IMPORTED_MODULE_8__["DragScrollComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_drag_scroll_lib__WEBPACK_IMPORTED_MODULE_8__["DragScrollComponent"])
    ], PropertyComponent.prototype, "dragScroll", void 0);
    PropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property',
            template: __webpack_require__(/*! ./property.component.html */ "./src/app/property/property.component.html"),
            styles: [__webpack_require__(/*! ./property.component.css */ "./src/app/property/property.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _core_services_listings_service__WEBPACK_IMPORTED_MODULE_2__["ListingsService"],
            _core_services_search_listings_service__WEBPACK_IMPORTED_MODULE_3__["SearchListingsService"],
            _core_services_favorites_service__WEBPACK_IMPORTED_MODULE_7__["FavoritesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var ngx_drag_scroll_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-drag-scroll/lib */ "./node_modules/ngx-drag-scroll/lib/index.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var _covalent_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @covalent/http */ "./node_modules/@covalent/http/fesm5/covalent-http.js");
/* harmony import */ var _covalent_highlight__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @covalent/highlight */ "./node_modules/@covalent/highlight/fesm5/covalent-highlight.js");
/* harmony import */ var _covalent_markdown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @covalent/markdown */ "./node_modules/@covalent/markdown/fesm5/covalent-markdown.js");
/* harmony import */ var _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @covalent/dynamic-forms */ "./node_modules/@covalent/dynamic-forms/fesm5/covalent-dynamic-forms.js");





















var PropertyModule = /** @class */ (function () {
    function PropertyModule() {
    }
    PropertyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_15__["FlexLayoutModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_16__["CovalentLayoutModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_16__["CovalentStepsModule"],
                _covalent_http__WEBPACK_IMPORTED_MODULE_17__["CovalentHttpModule"].forRoot(),
                _covalent_highlight__WEBPACK_IMPORTED_MODULE_18__["CovalentHighlightModule"],
                _covalent_markdown__WEBPACK_IMPORTED_MODULE_19__["CovalentMarkdownModule"],
                _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_20__["CovalentDynamicFormsModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_16__["CovalentFileModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _property_routing_module__WEBPACK_IMPORTED_MODULE_4__["PropertyRoutingModule"],
                ngx_drag_scroll_lib__WEBPACK_IMPORTED_MODULE_10__["DragScrollModule"]
            ],
            declarations: [
                _property_component__WEBPACK_IMPORTED_MODULE_2__["PropertyComponent"],
                _property_singleListing_component__WEBPACK_IMPORTED_MODULE_6__["PropertySingleListingComponent"],
                _property_single_component__WEBPACK_IMPORTED_MODULE_8__["PropertySingleComponent"]
            ]
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

module.exports = ".body {\n  overflow-x: hidden;\n  width: 100%;\n  color: #6b6b6b;\n}\n.mySlides {\n  display:none\n}\n.fa {\n  color: darkgray;\n}\n.propertyOverview {\n  padding-left: 30%\n}\n.prop-title {\n  font-weight: bold;\n  text-align: center;\n  padding-top: 18px;\n  padding-bottom: 0px;\n}\n.my-container {\n  margin: 0 auto;\n  max-width: 600px;\n  max-height: 600px;\n  width: 100%;\n  height: 100%;\n}\n.fav-btn-container {\n  text-align: center;\n  padding-bottom: 15px;\n}\n.fav-btn {\n  width: 150px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHkvcHJvcGVydHkuc2luZ2xlTGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRTtBQUNGO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRTtBQUNGO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5L3Byb3BlcnR5LnNpbmdsZUxpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICM2YjZiNmI7XG59XG4ubXlTbGlkZXMge1xuICBkaXNwbGF5Om5vbmVcbn1cblxuLmZhIHtcbiAgY29sb3I6IGRhcmtncmF5O1xufVxuXG4ucHJvcGVydHlPdmVydmlldyB7XG4gIHBhZGRpbmctbGVmdDogMzAlXG59XG5cbi5wcm9wLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5teS1jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5mYXYtYnRuLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5mYXYtYnRuIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/property/property.singleListing.component.html":
/*!****************************************************************!*\
  !*** ./src/app/property/property.singleListing.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<title>Individual Listing</title>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<h3 class=\"prop-title\">{{listing.title}}</h3>\n\n<body class=\"body\">\n\n<div class=\"w3-center\">\n  <div class=\"w3-section\">\n    <div class=\"my-container\">\n      <drag-scroll #drag_scroll>\n        <img drag-scroll-item *ngFor=\"let photo of listing.imageUrls\" [src]=\"photo\" alt=\"\" />\n      </drag-scroll>\n    </div>\n  </div>\n\n  <button mat-button (click)=\"moveLeft()\">❮ Prev</button>\n  <button mat-button (click)=\"moveRight()\">Next ❯</button>\n\n</div>\n\n<div class=\"propertyOverview\" *ngIf=\"listing.listingId\">\n  <h2>Overview</h2>\n  <hr width=\"50%\" size=\"8\">\n  <p><i class=\"fa fa-building fa-fw w3-margin-right w3-large \"></i>For {{ saleTitle() }}</p>\n  <p><i class=\"fa fa-dollar fa-fw w3-margin-right w3-large \"></i>{{ priceTitle() }}</p>\n  <p><i class=\"fa fa-map-marker fa-fw w3-margin-right w3-large \"></i>{{listing.street }}, {{ listing.city }}, {{ listing.state }}, {{ listing.zipCode }}</p>\n  <p><i class=\"fa fa-bed fa-fw w3-margin-right w3-large \"></i>{{bedTitle()}}</p>\n  <p><i class=\"fa fa-bath fa-fw w3-margin-right w3-large \"></i>{{bathTitle()}}</p>\n  <p><i class=\"fa fa-universal-access fa-fw w3-margin-right w3-large \"></i>{{accessibilityTitle()}}</p>\n  <p><i class=\"fa fa-info-circle fa-fw w3-margin-right w3-large \"></i>{{listing.description}}</p>\n  <h2>Contact</h2>\n  <hr width=\"50%\" size=\"8\">\n  <p><i class=\"fa fa-phone fa-fw w3-margin-right w3-large \"></i>{{formatPhoneNumber(listing.user.phoneNumber)}}</p>\n  <p><i class=\"fa fa-envelope fa-fw w3-margin-right w3-large \"></i>{{listing.user.emailAddress}}</p>\n</div>\n\n<ng-template [ngIf]=\"user\">\n  <div class=\"fav-btn-container\">\n    <button class=\"fav-btn\" mat-raised-button (click)=\"addToFavorites()\" color=\"primary\">+ Add to Favorites</button>\n  </div>\n</ng-template>\n\n</body>\n</html>\n"

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
/* harmony import */ var ngx_drag_scroll_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-drag-scroll/lib */ "./node_modules/ngx-drag-scroll/lib/index.js");
/* harmony import */ var _core_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/favorites.service */ "./src/app/core/services/favorites.service.ts");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../register/register.dialog */ "./src/app/register/register.dialog.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var PropertySingleListingComponent = /** @class */ (function () {
    function PropertySingleListingComponent(route, listingsService, favoritesService, dialog) {
        this.route = route;
        this.listingsService = listingsService;
        this.favoritesService = favoritesService;
        this.dialog = dialog;
    }
    PropertySingleListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('loginUser')) {
            this.user = JSON.parse(localStorage.getItem('loginUser'));
        }
        this.route.paramMap.subscribe(function (params) {
            var listingId = Number(params.get('listing.listingId'));
            _this.listingsService.getSingleListing(listingId).subscribe(function (listing) {
                _this.listing = listing;
            }, function (err) {
                console.log(err);
            });
        });
    };
    PropertySingleListingComponent.prototype.saleTitle = function () {
        return this.listing.forSale ? 'Sale' : 'Rent';
    };
    PropertySingleListingComponent.prototype.priceTitle = function () {
        return this.listing.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    PropertySingleListingComponent.prototype.bedTitle = function () {
        if (this.listing.numBedrooms == 1) {
            return this.listing.numBedrooms.toString() + ' bed';
        }
        return this.listing.numBedrooms.toString() + ' beds';
    };
    PropertySingleListingComponent.prototype.bathTitle = function () {
        if (this.listing.numBathrooms == 1) {
            return this.listing.numBathrooms.toString() + ' bath';
        }
        return this.listing.numBedrooms.toString() + ' baths';
    };
    PropertySingleListingComponent.prototype.accessibilityTitle = function () {
        var listing = this.listing;
        var access = 'Accessibility: ';
        if (!listing.laundry && !listing.hospitalAccess && !listing.wheelchairAccess && !listing.BARTAccess)
            return access + 'none';
        var accessList = [];
        if (listing.laundry)
            accessList.push('laundry');
        if (listing.hospitalAccess)
            accessList.push('hospital');
        if (listing.wheelchairAccess)
            accessList.push('wheelchair');
        if (listing.BARTAccess)
            accessList.push('bart');
        var accessStr = access;
        for (var i = 0; i < accessList.length; i++) {
            if (i == 0) {
                accessStr = accessStr + accessList[i];
            }
            else {
                accessStr = accessStr + ', ' + accessList[i];
            }
        }
        return accessStr;
    };
    PropertySingleListingComponent.prototype.moveLeft = function () {
        this.dragScroll.moveLeft();
    };
    PropertySingleListingComponent.prototype.moveRight = function () {
        this.dragScroll.moveRight();
    };
    PropertySingleListingComponent.prototype.addToFavorites = function () {
        var _this = this;
        this.favoritesService.addFavorite(this.listing.listingId, this.user.userId).subscribe(function (result) {
            _this.openDialog('Successfully added listing to favorites!');
        }, function (err) {
            console.log(err);
        });
    };
    PropertySingleListingComponent.prototype.formatPhoneNumber = function (phoneNumberString) {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
    };
    PropertySingleListingComponent.prototype.openDialog = function (message) {
        var dialog = this.dialog.open(_register_register_dialog__WEBPACK_IMPORTED_MODULE_6__["RegisterDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drag_scroll', { read: ngx_drag_scroll_lib__WEBPACK_IMPORTED_MODULE_4__["DragScrollComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_drag_scroll_lib__WEBPACK_IMPORTED_MODULE_4__["DragScrollComponent"])
    ], PropertySingleListingComponent.prototype, "dragScroll", void 0);
    PropertySingleListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property',
            template: __webpack_require__(/*! ./property.singleListing.component.html */ "./src/app/property/property.singleListing.component.html"),
            styles: [__webpack_require__(/*! ./property.singleListing.component.css */ "./src/app/property/property.singleListing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__["ListingsService"],
            _core_services_favorites_service__WEBPACK_IMPORTED_MODULE_5__["FavoritesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], PropertySingleListingComponent);
    return PropertySingleListingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=property-property-module.js.map