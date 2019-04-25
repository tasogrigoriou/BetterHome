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
	],
	"./property/property.module": [
		"./src/app/property/property.module.ts",
		"property-property-module"
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

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host>.container {\n  max-width: 1264px;\n  width: 100%;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  background: none;\n  float: left;\n}\n\n:host>.mat-tab-group {\n  flex-direction: row;\n}\n\n:host>.mat-tab-header {\n  border-bottom: none;\n}\n\n:host>.mat-tab-header-pagination {\n  display: none !important;\n}\n\n:host>.mat-tab-labels {\n  flex-direction: column;\n}\n\n:host>.mat-ink-bar {\n  height: 100%;\n  left: 98% !important;\n}\n\n:host>.mat-tab-body-wrapper {\n  flex: 1 1 auto;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n  flex: 1 0 auto;\n  margin: 0 auto;\n  text-align: left;\n}\n\n#content {\n  box-sizing: content-box;\n  margin: 0 auto;\n  padding: 15px;\n  width: 1264px;\n  background-color: #ffffff;\n}\n\n#content {\n  max-width: 1100px;\n  width: 100%;\n  background-color: #ffffff;\n  padding: 24px;\n  box-sizing: border-box;\n}\n\n#content {\n  max-width: 1100px;\n  width: 100%;\n  background-color: #fff;\n  padding: 24px;\n  box-sizing: border-box;\n}\n\n#content::before, #main-content::before, #content::after, #main-content::after {\n  content: \"\";\n  display: table;\n}\n\n#content::after, #main-content::after {\n  clear: both;\n}\n\n.label{\n  font-size: xx-large;\n  font-weight: bold;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztFQUNkLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdD4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjY0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBmbG9hdDogbGVmdDtcbn1cblxuOmhvc3Q+Lm1hdC10YWItZ3JvdXAge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuOmhvc3Q+Lm1hdC10YWItaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbjpob3N0Pi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuOmhvc3Q+Lm1hdC10YWItbGFiZWxzIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0Pi5tYXQtaW5rLWJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogOTglICFpbXBvcnRhbnQ7XG59XG46aG9zdD4ubWF0LXRhYi1ib2R5LXdyYXBwZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgZmxleDogMSAwIGF1dG87XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4jY29udGVudCB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDEyNjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuI2NvbnRlbnQge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4jY29udGVudCB7XG4gIG1heC13aWR0aDogMTEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMjRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiNjb250ZW50OjpiZWZvcmUsICNtYWluLWNvbnRlbnQ6OmJlZm9yZSwgI2NvbnRlbnQ6OmFmdGVyLCAjbWFpbi1jb250ZW50OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuI2NvbnRlbnQ6OmFmdGVyLCAjbWFpbi1jb250ZW50OjphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ubGFiZWx7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Account</title>\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n</head>\n<body>\n<br>\n<br>\n     <div class=\"container\">\n       <div id=\"content\">\n         <div id=\"main-content\">\n           <mat-tab-group>\n              <mat-tab label=\"Profile\">\n                <br>\n                <div class=\"card-body\">\n\n                 <form>\n                   <div class=\"row\">\n                     <div class=\"col-md-3\">\n                       <mat-form-field class=\"example-full-width\">\n                         <input matInput placeholder=\"First Name\" type=\"text\">\n\n                         <input matInput placeholder=\"First Name\"> <!--[(ngModel)]=\"user.username\"> -->\n                       </mat-form-field>\n                     </div>\n                     <div class=\"col-md-4\">\n                       <mat-form-field class=\"example-full-width\">\n                         <input matInput placeholder=\"Last Name\" > <!-- [(ngModel)]=\"user.lastName\" type=\"text\"> -->\n                       </mat-form-field>\n                     </div>\n                   </div>\n\n                   <div class=\"row\">\n                     <div class=\"col-md-3\">\n                       <mat-form-field class=\"example-full-width\">\n                         <input matInput placeholder=\"Email Address\" > <!--[(ngModel)]=\"user.emailAddress\" type=\"text\"> -->\n                       </mat-form-field>\n                     </div>\n                     <div class=\"col-md-4\">\n                       <mat-form-field class=\"example-full-width\">\n                         <input matInput placeholder=\"Phone Number\"> <!-- [(ngModel)]=\"user.phoneNumber\" type=\"text\"> -->\n                       </mat-form-field>\n                     </div>\n                   </div>\n\n                   <div class=\"row\">\n                     <div class=\"col-md-3\">\n                       <mat-form-field class=\"example-full-width\">\n                         <input matInput placeholder=\"Street Address\" type=\"text\">\n                       </mat-form-field>\n                     </div>\n                     <div class=\"col-md-4\">\n                       <mat-form-field class=\"example-full-width\">\n                         <input matInput placeholder=\"City\" type=\"text\">\n                       </mat-form-field>\n                     </div>\n                   </div>\n\n                   <div class=\"row\">\n                     <div class=\"col-md-3\">\n                       <mat-form-field class=\"example-full-width\">\n                         <input matInput placeholder=\"State\" type=\"text\">\n                       </mat-form-field>\n                     </div>\n                     <div class=\"col-md-4\">\n                       <mat-form-field class=\"example-full-width\">\n                         <input matInput placeholder=\"Zip Code\" type=\"text\">\n                       </mat-form-field>\n                     </div>\n                   </div>\n\n                   <div class=\"w3-center\">\n                     <div class=\"w3-section\">\n                       <button mat-raised-button type = \"save\" w3-button w3-light-grey>Save</button>\n                     </div>\n                   </div>\n\n                   <button mat-raised-button  type = \"edit\" class=\"btn btn-danger pull-right\">Edit</button>\n\n                 </form>\n\n               </div>\n             </mat-tab>\n\n             <mat-tab label=\"My Listing\">\n                <br>\n                 <p><i class=\"fa fa-dollar fa-fw w3-margin-right w3-large \"></i> <var id =\"listingPrice\"> Price </var></p>\n                 <p><i class=\"fa fa-bed fa-fw w3-margin-right w3-large \"></i> <var id = \"bedRoom\"> Bedroom </var></p>\n                 <p><i class=\"fa fa-bath fa-fw w3-margin-right w3-large \"></i> <var id = \"bathRoom\"> Bathroom </var></p>\n                 <p><i class=\"fa fa-map-marker fa-fw w3-margin-right w3-large \"></i> <var id = \"address\"> Address </var></p>\n                 <p><i class=\"fa fa-phone fa-fw w3-margin-right w3-large \"></i> <var id=\"listingPhoneNumber\">(xxx)xxx-xxxx</var></p>\n                 <p><i class=\"fa fa-envelope fa-fw w3-margin-right w3-large \"></i> <var id=\"listingEmail\"> sendhelp@mailboyz.gov</var></p>\n\n               <div class=\"w3-center\">\n                 <div class=\"w3-section\">\n                   <button class=\"w3-button w3-light-grey\" (click)=\"plusDivs(-1)\" mat-button>❮ Prev</button>\n                   <button class=\"w3-button w3-light-grey\" (click)=\"plusDivs(1)\" mat-button>Next ❯</button>\n                   <button mat-raised-button  type = \"edit\" class=\"btn btn-danger pull-right\">Edit</button>\n                 </div>\n               </div>\n\n             </mat-tab>\n             <mat-tab label=\"Favorite\">\n               Favorite List\n               <br><br>\n             </mat-tab>\n           </mat-tab-group>\n         </div>\n       </div>\n     </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_register_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/register.service */ "./src/app/core/services/register.service.ts");



var AccountComponent = /** @class */ (function () {
    function AccountComponent(registerService) {
        this.registerService = registerService;
        this.isLoaded = true;
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent.prototype.onSaveInfoClick = function () {
    };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/addlisting/addlisting.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn1 button{\n  width:90%;\n  margin-left: 60px;\n\n}\n.example-container {\n  display: flex;\n  flex-direction: column;\n}\n.example-container > * {\n  margin-left: 60px;\n  width: 90%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkbGlzdGluZy9hZGRsaXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCOztBQUVuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FkZGxpc3RpbmcvYWRkbGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bjEgYnV0dG9ue1xuICB3aWR0aDo5MCU7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuXG59XG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIHdpZHRoOiA5MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/addlisting/addlisting.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Addlisting</title>\n\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n  <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n</head>\n<body>\n<br><br>\n  <mat-toolbar>\n    <span>Add new Listings</span>\n  </mat-toolbar>\n  <div class=\"example-container\">\n    <mat-form-field>\n      <input matInput placeholder=\"Title\" [(ngModel)]=\"listing.title\" required>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Price\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.price\" required>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Lot Size\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.lotSize\" required>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Sell or Rent\" [(ngModel)]=\"listing.forSale\" required>\n        <mat-option value=\"option1\" [value]=\"true\">For sell</mat-option>\n        <mat-option value=\"option2\" [value]=\"false\">For rent</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Number of Bedrooms\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.numBedrooms\" required>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Number of Bathrooms\" [(ngModel)]=\"listing.numBathrooms\" required>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Street\" [(ngModel)]=\"listing.street\" required>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"City\" [(ngModel)]=\"listing.city\" required>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"State\" [(ngModel)]=\"listing.state\" required>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Zip code\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.zipCode\" required>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Hospital Access\" [(ngModel)]=\"listing.hospitalAccess\" required>\n        <mat-option value=\" option1\" [value]=\"true\" >Yes</mat-option>\n        <mat-option value=\" option2\" [value]=\"false\" >No</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Bart Access\" [(ngModel)]=\"listing.BARTAccess\" required>\n        <mat-option value=\"option1\" [value]=\"true\">Yes</mat-option>\n        <mat-option value=\"option2\" [value]=\"false\">No</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Wheelchair Access\" [(ngModel)]=\"listing.wheelchairAccess\" required>\n        <mat-option value=\"option1\" [value]=\"true\">Yes</mat-option>\n        <mat-option value=\"option2\" [value]=\"false\">No</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field>\n      <mat-select placeholder=\"Near Laundry\" [(ngModel)]=\"listing.laundry\" required>\n        <mat-option value=\"option1\" [value]=\"true\">Yes</mat-option>\n        <mat-option value=\"option2\" [value]=\"false\">No</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n\n\n    <mat-form-field>\n      <mat-select placeholder=\"Listing Type\" [(ngModel)]=\"listing.listingType\" required>\n        <mat-option value=\"option1\">House</mat-option>\n        <mat-option value=\"option2\">Apartment</mat-option>\n        <mat-option value=\"option3\">Condo</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n\n\n    <mat-form-field>\n      <textarea matInput placeholder=\"Description\"></textarea>\n    </mat-form-field>\n\n    <!--https://stackoverflow.com/questions/47936183/angular-file-upload-->\n    <div class=\"form-group\">\n      <label for=\"file\">Upload the pictures</label>\n      <br>\n      <input type=\"file\"\n             id=\"file\"\n             (change)=\"handleFileInput($event.target.files)\">\n    </div>\n\n  </div>\n  <div class =\"btn1\">\n    <button (click)=\"onSubmit()\">Create the Listing</button>\n  </div>\n<br><br>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/addlisting/addlisting.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.ts ***!
  \****************************************************/
/*! exports provided: AddListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListingComponent", function() { return AddlistingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/listing.service */ "./src/app/core/services/listing.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.dialog */ "./src/app/register/register.dialog.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var AddlistingComponent = /** @class */ (function () {
    function AddlistingComponent(router, listingsService, dialog) {
        this.router = router;
        this.listingsService = listingsService;
        this.dialog = dialog;
        this.isLoaded = true;
    }
    AddlistingComponent.prototype.ngOnInit = function () {
        this.listings = this.listingsService.getListings();
    };
    AddlistingComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.isDataProvided()) {
            this.isLoaded = false;
            this.listingsService.createListing(this.listing)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (data) {
                _this.isLoaded = true;
                _this.openDialog('Posting creation successful! You may now view and edit your listing under the My Listing tab on your account page', true);
            });
        }
        else {
            this.openDialog('Please enter input for all required fields', false);
        }
    };
    AddlistingComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    };
    AddlistingComponent.prototype.isDataProvided = function () {
        return (!this.isEmptyStr(this.listing.title) &&
            !this.isEmptyStr(this.listing.listingType) &&
            !this.isEmptyNum(this.listing.price) &&
            !this.isEmptyNum(this.listing.lotSize) &&
            !this.isEmptyStr(this.listing.city) &&
            !this.isEmptyNum(this.listing.zipCode) &&
            !this.isEmptyStr(this.listing.street) &&
            !this.isEmptyStr(this.listing.state) &&
            !this.isEmptyBool(this.listing.forSale) &&
            !this.isEmptyNum(this.listing.numBedrooms) &&
            !this.isEmptyStr(this.listing.numBathrooms) &&
            !this.isEmptyBool(this.listing.laundry) &&
            !this.isEmptyBool(this.listing.hospitalAccess) &&
            !this.isEmptyBool(this.listing.BARTAccess) &&
            !this.isEmptyBool(this.listing.wheelchairAccess));
        return true;
    };
    AddlistingComponent.prototype.isEmptyStr = function (str) {
        return (!str || 0 == str.length);
    };
    AddlistingComponent.prototype.isEmptyNum = function (num) {
        return (!num || 0 == num);
    };
    AddlistingComponent.prototype.isEmptyBool = function (bool) {
        return (!bool);
    };
    AddlistingComponent.prototype.openDialog = function (message, subscribe) {
        var _this = this;
        var dialogRef = this.dialog.open(_register_register_dialog__WEBPACK_IMPORTED_MODULE_5__["RegisterDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        if (subscribe) {
            dialogRef.afterClosed().subscribe(function (result) {
                _this.router.navigate(['/account']);
            });
        }
    };
    AddlistingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-listing',
            template: __webpack_require__(/*! ./add-listing.component.html */ "./src/app/add-listing/add-listing.component.html"),
            styles: [__webpack_require__(/*! ./add-listing.component.css */ "./src/app/add-listing/add-listing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__["ListingsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], AddlistingComponent);
    return AddlistingComponent;
}());



/***/ }),

/***/ "./src/app/advanced-search/advanced-search.component.css":
/*!***************************************************************!*\
  !*** ./src/app/advanced-search/advanced-search.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-div {\n  margin: 0 auto;\n  max-width: 900px;\n  width: 100%;\n}\n\n.my-mat-card {\n  max-width: 900px;\n  width: 100%;\n}\n\n.cont-form {\n  margin-right: 20px;\n}\n\n.cont-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n/* unvisited link */\n\na:link {\n  color: rgba(0, 0, 0, 0);\n}\n\n/* visited link */\n\na:visited {\n  color: rgba(0, 0, 0, 0);\n}\n\n/* mouse over link */\n\na:hover {\n  color: rgba(0, 0, 0, 0.58);\n}\n\n/* selected link */\n\na:active {\n  color: rgba(0, 0, 0, 0);\n}\n\na {\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.cont-a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2YW5jZWQtc2VhcmNoL2FkdmFuY2VkLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLGtCQUFrQjs7QUFDbEI7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkdmFuY2VkLXNlYXJjaC9hZHZhbmNlZC1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm15LW1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250LWZvcm0ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jb250LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi8qIHVudmlzaXRlZCBsaW5rICovXG5hOmxpbmsge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLyogdmlzaXRlZCBsaW5rICovXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLyogbW91c2Ugb3ZlciBsaW5rICovXG5hOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41OCk7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNvbnQtYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/advanced-search/advanced-search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/advanced-search/advanced-search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-info is-fullheight-with-navbar is-bold\">\n  <div class=\"hero-body\">\n    <div class=\"main-div\">\n\n      <div>\n        <h1 class=\"cont-title\">Advanced Search</h1>\n      </div>\n\n      <mat-card class=\"my-mat-card mat-elevation-z20\">\n\n        <mat-form-field class=\"cont-form\">\n        <mat-label>Sale or Rental</mat-label>\n        <mat-select [(value)]=\"listingSearch.forSale\">\n        <mat-option value=null>Both</mat-option>\n        <mat-option value=1>Sale</mat-option>\n        <mat-option value=0>Rental</mat-option>\n        </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-form\">\n        <mat-label>Bedrooms</mat-label>\n        <mat-select [(value)]=\"listingSearch.numBedrooms\">\n        <mat-option value=0>Any</mat-option>\n        <mat-option value=1>1 Bed</mat-option>\n        <mat-option value=2>2 Beds</mat-option>\n        <mat-option value=3>3 Beds</mat-option>\n        </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-form\">\n        <mat-label>Bathrooms</mat-label>\n        <mat-select [(value)]=\"listingSearch.numBathrooms\">\n        <mat-option value=0>Any</mat-option>\n        <mat-option value=1>1</mat-option>\n        <mat-option value=2>2</mat-option>\n        <mat-option value=3>3</mat-option>\n        </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-form\">\n          <input matInput placeholder=\"Search by city...\" [(ngModel)]=\"listingSearch.city\" (keyup.enter)=\"onSearchClick()\" required>\n          <a class=\"my-search\" mat-button matSuffix color=\"primary\" (click)=\"onSearchClick()\"><mat-icon>search</mat-icon></a>\n        </mat-form-field>\n\n        <!--<button class=\"cont-button\" mat-raised-button color=\"primary\" (click)=\"onSearchClick()\">Search</button>-->\n\n      </mat-card>\n\n      <div>\n        <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n      </div>\n\n    </div>\n\n  </div>\n  <app-footer></app-footer>\n</section>\n"

/***/ }),

/***/ "./src/app/advanced-search/advanced-search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/advanced-search/advanced-search.component.ts ***!
  \**************************************************************/
/*! exports provided: AdvancedSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedSearchComponent", function() { return AdvancedSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_search_listings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/search.listing.service */ "./src/app/core/services/search.listing.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.dialog */ "./src/app/register/register.dialog.ts");






var AdvancedSearchComponent = /** @class */ (function () {
    function AdvancedSearchComponent(router, searchService, dialog) {
        this.router = router;
        this.searchService = searchService;
        this.dialog = dialog;
        this.isLoaded = true;
    }
    AdvancedSearchComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('listingSearch')) {
            this.listingSearch = JSON.parse(localStorage.getItem('listingSearch'));
        }
        else {
            this.listingSearch = {
                city: ''
            };
        }
    };
    AdvancedSearchComponent.prototype.ngOnDestroy = function () {
        if (this.listingSearch) {
            localStorage.setItem('listingSearch', JSON.stringify(this.listingSearch));
        }
    };
    AdvancedSearchComponent.prototype.onSearchClick = function () {
        var _this = this;
        if (!this.listingSearch.city.length) {
            this.openDialog('Please enter some text for the city field');
        }
        else {
            this.isLoaded = false;
            this.searchService.getSearchListings(this.listingSearch)
                .subscribe(function (listings) {
                _this.isLoaded = true;
                _this.searchService.saveSearchListings(listings);
                _this.openDialog('Successfully retrieved Listings!', true);
            }, function (err) {
                _this.isLoaded = true;
                _this.openDialog('Unable to retrieve any listing based on your search. Please try again');
            });
        }
    };
    AdvancedSearchComponent.prototype.openDialog = function (message, subscribe) {
        var _this = this;
        if (subscribe === void 0) { subscribe = false; }
        var dialog = this.dialog.open(_register_register_dialog__WEBPACK_IMPORTED_MODULE_5__["RegisterDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        if (subscribe) {
            dialog.afterClosed().subscribe(function (result) {
                _this.router.navigate(['/search-results']);
            });
        }
    };
    AdvancedSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advanced-search',
            template: __webpack_require__(/*! ./advanced-search.component.html */ "./src/app/advanced-search/advanced-search.component.html"),
            styles: [__webpack_require__(/*! ./advanced-search.component.css */ "./src/app/advanced-search/advanced-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_search_listings_service__WEBPACK_IMPORTED_MODULE_3__["SearchListingsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AdvancedSearchComponent);
    return AdvancedSearchComponent;
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
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example/example.component */ "./src/app/example/example.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-listing/add-listing.component */ "./src/app/add-listing/add-listing.component.ts");
/* harmony import */ var _advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./advanced-search/advanced-search.component */ "./src/app/advanced-search/advanced-search.component.ts");












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
        loadChildren: './property/property.module#PropertyModule'
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"]
    },
    {
        path: 'advanced-search',
        component: _advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_11__["AdvancedSearchComponent"]
    },
    {
        path: 'example',
        component: _example_example_component__WEBPACK_IMPORTED_MODULE_7__["ExampleComponent"],
        data: { title: 'Example Fake Data' }
    },
    {
        path: 'search-results',
        component: _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_8__["SearchResultsComponent"]
    },
    {
        path: 'account',
        component: _account_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"]
    },
    {
        path: 'add-listing',
        component: _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_10__["AddListingComponent"]
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.dialog */ "./src/app/register/register.dialog.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./example/example.component */ "./src/app/example/example.component.ts");
/* harmony import */ var _core_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/alert/alert.component */ "./src/app/core/components/alert/alert.component.ts");
/* harmony import */ var _core_components_upload_upload_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/upload/upload.component */ "./src/app/core/components/upload/upload.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-listing/add-listing.component */ "./src/app/add-listing/add-listing.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _covalent_core_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @covalent/core/layout */ "./node_modules/@covalent/core/fesm5/covalent-core-layout.js");
/* harmony import */ var _covalent_core_steps__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @covalent/core/steps */ "./node_modules/@covalent/core/fesm5/covalent-core-steps.js");
/* harmony import */ var _covalent_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @covalent/http */ "./node_modules/@covalent/http/fesm5/covalent-http.js");
/* harmony import */ var _covalent_highlight__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @covalent/highlight */ "./node_modules/@covalent/highlight/fesm5/covalent-highlight.js");
/* harmony import */ var _covalent_markdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @covalent/markdown */ "./node_modules/@covalent/markdown/fesm5/covalent-markdown.js");
/* harmony import */ var _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @covalent/dynamic-forms */ "./node_modules/@covalent/dynamic-forms/fesm5/covalent-dynamic-forms.js");
/* harmony import */ var _covalent_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @covalent/core */ "./node_modules/@covalent/core/fesm5/covalent-core.js");
/* harmony import */ var _advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./advanced-search/advanced-search.component */ "./src/app/advanced-search/advanced-search.component.ts");





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _register_register_dialog__WEBPACK_IMPORTED_MODULE_9__["RegisterDialog"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _example_example_component__WEBPACK_IMPORTED_MODULE_11__["ExampleComponent"],
                _core_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_16__["SearchResultsComponent"],
                _core_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                _core_components_upload_upload_component__WEBPACK_IMPORTED_MODULE_13__["UploadComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_14__["AccountComponent"],
                _addlisting_addlisting_component__WEBPACK_IMPORTED_MODULE_15__["AddListingComponent"],
                _advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_34__["AdvancedSearchComponent"],
            ],
            entryComponents: [
                _register_register_dialog__WEBPACK_IMPORTED_MODULE_9__["RegisterDialog"]
            ],
            imports: [
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckboxModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_26__["FlexLayoutModule"],
                _covalent_core_layout__WEBPACK_IMPORTED_MODULE_27__["CovalentLayoutModule"],
                _covalent_core_steps__WEBPACK_IMPORTED_MODULE_28__["CovalentStepsModule"],
                _covalent_http__WEBPACK_IMPORTED_MODULE_29__["CovalentHttpModule"].forRoot(),
                _covalent_highlight__WEBPACK_IMPORTED_MODULE_30__["CovalentHighlightModule"],
                _covalent_markdown__WEBPACK_IMPORTED_MODULE_31__["CovalentMarkdownModule"],
                _covalent_dynamic_forms__WEBPACK_IMPORTED_MODULE_32__["CovalentDynamicFormsModule"],
                _covalent_core__WEBPACK_IMPORTED_MODULE_33__["CovalentFileModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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

/***/ "./src/app/core/components/footer/footer.component.css":
/*!*************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin-right: 10px;\n  margin-bottom: 20px;\n}\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n/* unvisited link */\n\na:link {\n  color: rgba(0, 0, 0, 0.75);\n}\n\n/* visited link */\n\na:visited {\n  color: rgba(0, 0, 0, 0.75);\n}\n\n/* mouse over link */\n\na:hover {\n  color: rgba(0, 0, 0, 0.4);\n}\n\n/* selected link */\n\na:active {\n  color: rgba(0, 0, 0, 0.75);\n}\n\na {\n  text-decoration: none;\n  padding-right: 10px;\n  padding-bottom: 6px;\n  font-size: 14px;\n}\n\n.my-header {\n  padding-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTttREFDaUQ7RUFDakQsY0FBYztBQUNoQjs7QUFFQSxtQkFBbUI7O0FBQ25CO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUEsb0JBQW9COztBQUNwQjtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi8qIHVudmlzaXRlZCBsaW5rICovXG5hOmxpbmsge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLyogdmlzaXRlZCBsaW5rICovXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLyogbW91c2Ugb3ZlciBsaW5rICovXG5hOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLyogc2VsZWN0ZWQgbGluayAqL1xuYTphY3RpdmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubXktaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <span>\n  </span>\n  <span class=\"example-fill-remaining-space\"></span>\n  <a [routerLink]=\"'/about-us'\">About us</a>\n</div>\n"

/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
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
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/core/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/components/header/header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/core/components/header/header.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-toolbar {\n  background-color: white;\n  /* Gradient backgrounds for toolbar */\n  /*background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 100%);*/\n  /*background-image: linear-gradient(141deg, rgba(4, 198, 255, 0) 0%, rgba(35, 168, 255, 0.2) 100%);*/\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n/* unvisited link */\n\na:link {\n  color: rgba(0, 0, 0, 0.75);\n}\n\n/* visited link */\n\na:visited {\n  color: rgba(0, 0, 0, 0.75);\n}\n\n/* mouse over link */\n\na:hover {\n  color: rgba(0, 0, 0, 0.4);\n}\n\n/* selected link */\n\na:active {\n  color: rgba(0, 0, 0, 0.75);\n}\n\na {\n  text-decoration: none;\n  padding-right: 20px;\n  font-size: 14px;\n}\n\n.my-header-title {\n  padding-left: 5px;\n}\n\n.my-mat-button {\n  color: rgba(0, 0, 0, 0.75);\n  background-color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMsdUVBQXVFO0VBQ3ZFLG9HQUFvRztFQUNwRyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBRUEsbUJBQW1COztBQUNuQjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLyogR3JhZGllbnQgYmFja2dyb3VuZHMgZm9yIHRvb2xiYXIgKi9cbiAgLypiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQxZGVnLCAjMDRhNmQ3IDAlLCAjMjA5Y2VlIDEwMCUpOyovXG4gIC8qYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MWRlZywgcmdiYSg0LCAxOTgsIDI1NSwgMCkgMCUsIHJnYmEoMzUsIDE2OCwgMjU1LCAwLjIpIDEwMCUpOyovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbn1cblxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xuYTpsaW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi8qIHZpc2l0ZWQgbGluayAqL1xuYTp2aXNpdGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm15LWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubXktbWF0LWJ1dHRvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar is-dark\">-->\n<!--  &lt;!&ndash; menu &ndash;&gt;-->\n<!--  <div class=\"navbar-menu\">-->\n<!--    <div class=\"navbar-start\">-->\n<!--      <a class=\"navbar-item\" routerLink=\"\">Home</a>-->\n<!--      <a class=\"navbar-item\" routerLink=\"about-us\">About us</a>-->\n<!--      <a class=\"navbar-item\" routerLink=\"property\">Property</a>-->\n<!--      <a class=\"navbar-item\" routerLink=\"account\">Account</a>-->\n<!--      <a class=\"navbar-item\" routerLink=\"add-listing\">Add Listing</a>-->\n<!--      <a class=\"navbar-item\" routerLink=\"register\">Register</a>-->\n<!--      <a class=\"navbar-item\" routerLink=\"login\">Login</a>-->\n<!--    </div>-->\n<!--  </div>-->\n<!--</nav>-->\n\n<mat-toolbar color=\"primary\" class=\"mat-elevation-z8 my-toolbar\">\n  <span>\n    <a [routerLink]=\"'/'\"><h3 class=\"my-header-title\">Better Home</h3></a>\n  </span>\n\n  <!-- This fills the remaining space of the current row -->\n  <span class=\"example-fill-remaining-space\"></span>\n\n  <!--Right Aligned Links-->\n  <ng-template [ngIf]=\"loginUser\">\n    <a mat-button class=\"my-mat-button\" color=\"primary\" [matMenuTriggerFor]=\"menu\">{{ loginUser.username }}\n      <mat-icon>arrow_drop_down</mat-icon>\n    </a>\n\n    <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n      <button mat-menu-item [routerLink]=\"'/account'\">\n        <mat-icon>account_box</mat-icon>\n        <span>Account</span>\n      </button>\n      <button mat-menu-item [routerLink]=\"'/post-listing'\">\n        <mat-icon>add</mat-icon>\n        <span>Post Listing</span>\n      </button>\n      <button mat-menu-item [routerLink]=\"'/logout'\">\n        <mat-icon>close</mat-icon>\n        <span>Logout</span>\n      </button>\n    </mat-menu>\n\n  </ng-template>\n\n  <ng-template [ngIf]=\"!loginUser\">\n    <a [routerLink]=\"'/login'\">Login</a>\n    <a [routerLink]=\"'/register'\">Register</a>\n  </ng-template>\n\n</mat-toolbar>\n"

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
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/login.service */ "./src/app/core/services/login.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('loginUser')) {
            this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
        }
        this.loginService.getLoginUser.subscribe(function (loginUser) {
            _this.loginUser = loginUser;
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/core/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
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
/* harmony import */ var _services_listings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/listing.service */ "./src/app/core/services/listing.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");










var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
            ],
            providers: [
                _services_members_service__WEBPACK_IMPORTED_MODULE_4__["MembersService"],
                _services_listings_service__WEBPACK_IMPORTED_MODULE_6__["ListingsService"]
            ],
            declarations: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
            ],
            exports: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
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
  !*** ./src/app/core/services/listing.service.ts ***!
  \***************************************************/
/*! exports provided: ListingsService, Listing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsService", function() { return ListingsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Listing", function() { return Listing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api/register';
var ListingsService = /** @class */ (function () {
    function ListingsService(http) {
        this.http = http;
        this.exampleListing1 = new Listing(69, 0, 'Example Listing1', 'House', 3000, 'San Francisco', 'California', 94132, 'Example Street 1', true, 2, '2', 'https://bit.ly/2Vc5oog', false, false, true, true, 800);
        this.exampleListing2 = new Listing(70, 0, 'Example Listing2', 'Apartment', 10000, "San Francisco", 'California', 94132, 'Example Street 2', true, 3, '3', 'https://bit.ly/2UJTUca', true, true, false, false, 1000);
        this.exampleListing3 = new Listing(71, 0, 'Example Listing3', 'Condo', 30000, "San Francisco", 'California', 94132, 'Example Street 3', false, 3, '2.5', 'https://bit.ly/2UtC20w', true, false, true, false, 900);
    }
    /** CRUD function for create **/
    ListingsService.prototype.createListing = function (listing) {
        return this.http.post(apiUrl, listing, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ListingsService.prototype.handleError = function (error) {
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
    ListingsService.prototype.getListings = function () {
        return [
            this.exampleListing1,
            this.exampleListing2,
            this.exampleListing3
        ];
    };
    ListingsService.prototype.getListingById = function (id) {
        var listings = this.getListings();
        for (var i = 0; i < listings.length; i++) {
            if (id == listings[i].listingId) {
                return listings[i];
            }
        }
        return null;
    };
    ListingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ListingsService);
    return ListingsService;
}());

var Listing = /** @class */ (function () {
    function Listing(Lid, DisplayBoard_boardId, title, listingType, price, city, state, zipCode, street, forSale, numBedrooms, numBathrooms, imageUrl, laundry, hospitalAccess, BARTAccess, wheelchairAccess, lotSize) {
        this.Lid = Lid;
        this.DisplayBoard_boardId = DisplayBoard_boardId;
        this.title = title;
        this.listingType = listingType;
        this.price = price;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.street = street;
        this.forSale = forSale;
        this.numBedrooms = numBedrooms;
        this.numBathrooms = numBathrooms;
        this.imageUrl = imageUrl;
        this.laundry = laundry;
        this.hospitalAccess = hospitalAccess;
        this.BARTAccess = BARTAccess;
        this.wheelchairAccess = wheelchairAccess;
        this.lotSize = lotSize;
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
        this.getLoginUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /*** Login User ***/
    LoginService.prototype.loginUser = function (userData) {
        return this.http.post(apiUrl, userData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    LoginService.prototype.emitLoginEvent = function (loginUser) {
        localStorage.setItem('loginUser', JSON.stringify(loginUser));
        this.getLoginUser.emit(loginUser);
    };
    LoginService.prototype.logoutUser = function () {
        localStorage.removeItem('loginUser');
        this.getLoginUser.emit(null);
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], LoginService.prototype, "getLoginUser", void 0);
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

/***/ "./src/app/core/services/search.listings.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/services/search.listing.service.ts ***!
  \**********************************************************/
/*! exports provided: SearchListingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchListingsService", function() { return SearchListingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api/search';
var SearchListingsService = /** @class */ (function () {
    function SearchListingsService(http) {
        this.http = http;
        this.listings = [];
    }
    /*** Get Listings from search query ***/
    SearchListingsService.prototype.getSearchListings = function (searchQuery) {
        return this.http.post(apiUrl, searchQuery, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    SearchListingsService.prototype.saveSearchListings = function (listings) {
        localStorage.setItem('searchListings', JSON.stringify(listings));
    };
    SearchListingsService.prototype.getListings = function () {
        if (localStorage.getItem('searchListings')) {
            return JSON.parse(localStorage.getItem('searchListings'));
        }
        return [];
    };
    SearchListingsService.prototype.handleError = function (error) {
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
    SearchListingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SearchListingsService);
    return SearchListingsService;
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

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/example-create']\"><mat-icon>add</mat-icon></a>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"ID\">\n      <th mat-header-cell *matHeaderCellDef> ID </th>\n      <td mat-cell *matCellDef=\"let element\" class=\"isbn-col\"> {{element.id}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"Name\">\n      <th mat-header-cell *matHeaderCellDef> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n</div>\n\n<!--Image upload child component example-->\n\n<upload-component [listingId]=\"listingId\"></upload-component>\n"

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

module.exports = ".main-div {\n  margin: 0 auto;\n  max-width: 500px;\n  width: 100%;\n}\n\n.my-mat-card {\n  max-width: 500px;\n  width: 100%;\n}\n\n.cont-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.cont-input {\n  width: 100%;\n}\n\n/* unvisited link */\n\na:link {\n  color: rgba(0, 0, 0, 0);\n}\n\n/* visited link */\n\na:visited {\n  color: rgba(0, 0, 0, 0);\n}\n\n/* mouse over link */\n\na:hover {\n  color: rgba(0, 0, 0, 0.58);\n}\n\n/* selected link */\n\na:active {\n  color: rgba(0, 0, 0, 0);\n}\n\na {\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.cont-a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsbUJBQW1COztBQUNuQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXYge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5teS1tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xuYTpsaW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi8qIHZpc2l0ZWQgbGluayAqL1xuYTp2aXNpdGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTgpO1xufVxuXG4vKiBzZWxlY3RlZCBsaW5rICovXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb250LWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-info is-fullheight-with-navbar is-bold\">\n  <div class=\"hero-body\">\n    <div class=\"main-div\">\n\n      <div>\n        <h1 class=\"cont-title\">Search Listings</h1>\n      </div>\n\n      <mat-card class=\"my-mat-card mat-elevation-z20\">\n\n        <!--<mat-form-field class=\"cont-form\">-->\n        <!--<mat-label>Sale or Rental</mat-label>-->\n        <!--<mat-select [(value)]=\"listingSearch.forSale\">-->\n        <!--<mat-option value=null>Both</mat-option>-->\n        <!--<mat-option value=1>Sale</mat-option>-->\n        <!--<mat-option value=0>Rental</mat-option>-->\n        <!--</mat-select>-->\n        <!--</mat-form-field>-->\n\n        <!--<mat-form-field class=\"cont-form\">-->\n        <!--<mat-label>Bedrooms</mat-label>-->\n        <!--<mat-select [(value)]=\"listingSearch.numBedrooms\">-->\n        <!--<mat-option value=0>Any</mat-option>-->\n        <!--<mat-option value=1>1 Bed</mat-option>-->\n        <!--<mat-option value=2>2 Beds</mat-option>-->\n        <!--<mat-option value=3>3 Beds</mat-option>-->\n        <!--</mat-select>-->\n        <!--</mat-form-field>-->\n\n        <!--<mat-form-field class=\"cont-form\">-->\n        <!--<mat-label>Bathrooms</mat-label>-->\n        <!--<mat-select [(value)]=\"listingSearch.numBathrooms\">-->\n        <!--<mat-option value=0>Any</mat-option>-->\n        <!--<mat-option value=1>1</mat-option>-->\n        <!--<mat-option value=2>2</mat-option>-->\n        <!--<mat-option value=3>3</mat-option>-->\n        <!--</mat-select>-->\n        <!--</mat-form-field>-->\n\n        <mat-form-field class=\"cont-input\">\n          <input matInput placeholder=\"Search by city...\" [(ngModel)]=\"listingSearch.city\" (keyup.enter)=\"onSearchClick()\" required>\n          <a class=\"my-search\" mat-button matSuffix color=\"primary\" (click)=\"onSearchClick()\"><mat-icon>search</mat-icon></a>\n        </mat-form-field>\n\n<!--        <button class=\"cont-button\" mat-raised-button color=\"primary\" (click)=\"onSearchClick()\">Search</button>-->\n\n      </mat-card>\n\n      <div>\n        <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n      </div>\n      <div class=\"cont-a\">\n        <a [routerLink]=\"'/advanced-search'\">Advanced Search</a>\n      </div>\n\n    </div>\n\n  </div>\n  <app-footer></app-footer>\n</section>\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register/register.dialog */ "./src/app/register/register.dialog.ts");
/* harmony import */ var _core_services_search_listings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/search.listing.service */ "./src/app/core/services/search.listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, searchService, dialog) {
        this.router = router;
        this.searchService = searchService;
        this.dialog = dialog;
        this.isLoaded = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('listingSearch')) {
            this.listingSearch = JSON.parse(localStorage.getItem('listingSearch'));
        }
        else {
            this.listingSearch = {
                city: ''
            };
        }
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        if (this.listingSearch) {
            localStorage.setItem('listingSearch', JSON.stringify(this.listingSearch));
        }
    };
    HomeComponent.prototype.onSearchClick = function () {
        var _this = this;
        if (!this.listingSearch.city.length) {
            this.openDialog('Please enter some text for the city field');
        }
        else {
            this.isLoaded = false;
            this.searchService.getSearchListings(this.listingSearch)
                .subscribe(function (listings) {
                _this.isLoaded = true;
                _this.searchService.saveSearchListings(listings);
                _this.openDialog('Successfully retrieved Listings!', true);
            }, function (err) {
                _this.isLoaded = true;
                _this.openDialog('Unable to retrieve any listing based on your search. Please try again');
            });
        }
    };
    HomeComponent.prototype.openDialog = function (message, subscribe) {
        var _this = this;
        if (subscribe === void 0) { subscribe = false; }
        var dialog = this.dialog.open(_register_register_dialog__WEBPACK_IMPORTED_MODULE_3__["RegisterDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        if (subscribe) {
            dialog.afterClosed().subscribe(function (result) {
                _this.router.navigate(['/search-results']);
            });
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _core_services_search_listings_service__WEBPACK_IMPORTED_MODULE_4__["SearchListingsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  max-width: 350px;\n  width: 100%;\n}\n\n.my-mat-card {\n  max-width: 350px;\n  width: 100%;\n}\n\n.my-button {\n  margin-right: 80px;\n  margin-left: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm15LW1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5teS1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-toolbar>-->\n<!--<span>Login</span>-->\n<!--</mat-toolbar>-->\n<section class=\"hero is-info is-fullheight-with-navbar is-bold\">\n  <div class=\"hero-body\">\n    <div class=\"main-div\">\n      <mat-card class=\"my-mat-card mat-elevation-z20\">\n        <mat-card-title class=\"main-div\">Login</mat-card-title>\n        <mat-card-content>\n\n          <!--FORM FIELDS HERE-->\n          <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field class=\"cont-input\">\n              <mat-label>Username</mat-label>\n              <input matInput placeholder=\"Username\" [(ngModel)]=\"user.username\" name=\"username\" required>\n            </mat-form-field>\n            <mat-form-field class=\"cont-input\">\n              <mat-label>Password</mat-label>\n              <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\" name=\"password\" required>\n            </mat-form-field>\n          </div>\n\n        </mat-card-content>\n        <mat-card-actions>\n\n          <div class=\"my-button\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <!-- LOGIN BUTTON -->\n            <button mat-raised-button (click)=\"onSubmit()\" color=\"primary\">Login</button>\n          </div>\n\n          <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</section>\n"

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
                _this.loginService.emitLoginEvent(_this.loginUser);
                _this.router.navigate(['/']);
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.dialog */ "./src/app/register/register.dialog.ts");






var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router, loginService, dialog) {
        this.router = router;
        this.loginService = loginService;
        this.dialog = dialog;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.loginService.logoutUser();
        this.openDialog('Logout successful!');
    };
    LogoutComponent.prototype.openDialog = function (message) {
        var _this = this;
        var dialogRef = this.dialog.open(_register_register_dialog__WEBPACK_IMPORTED_MODULE_5__["RegisterDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.router.navigate(['/']);
        });
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  max-width: 350px;\n  width: 100%;\n}\n\n.my-mat-card {\n  max-width: 350px;\n  width: 100%;\n}\n\n.my-button {\n  margin-right: 80px;\n  margin-left: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm15LW1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5teS1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-info is-fullheight-with-navbar is-bold\">\n  <div class=\"hero-body\">\n    <div class=\"main-div\">\n      <mat-card class=\"my-mat-card mat-elevation-z20\">\n        <mat-card-title class=\"main-div\">Register</mat-card-title>\n        <mat-card-content>\n\n          <!--FORM FIELDS HERE-->\n          <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field class=\"cont-input\">\n              <mat-label>First Name</mat-label>\n              <input matInput placeholder=\"First name\" [(ngModel)]=\"user.firstName\" name=\"firstName\" required><br>\n            </mat-form-field>\n            <mat-form-field class=\"cont-input\">\n              <mat-label>Last Name</mat-label>\n              <input matInput placeholder=\"Last name\" [(ngModel)]=\"user.lastName\" name=\"lastName\" required>\n            </mat-form-field>\n            <mat-form-field class=\"cont-input\">\n              <mat-label>Username</mat-label>\n              <input matInput placeholder=\"Username\" [(ngModel)]=\"user.username\" name=\"username\" required>\n            </mat-form-field>\n            <mat-form-field class=\"cont-input\">\n              <mat-label>Password</mat-label>\n              <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\" name=\"password\" required>\n            </mat-form-field>\n            <mat-form-field class=\"cont-input\">\n              <mat-label>Email Address</mat-label>\n              <input matInput placeholder=\"Email address\" [(ngModel)]=\"user.emailAddress\" name=\"emailAddress\" required>\n            </mat-form-field>\n            <mat-form-field class=\"cont-input\">\n              <mat-label>Phone Number</mat-label>\n              <input matInput placeholder=\"Phone number\" [(ngModel)]=\"user.phoneNumber\" name=\"phoneNumber\" required>\n            </mat-form-field>\n          </div>\n\n        </mat-card-content>\n        <mat-card-actions>\n\n          <!-- REGISTER BUTTON -->\n          <div class=\"my-button\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <button mat-raised-button (click)=\"onSubmit()\" color=\"primary\">Register</button>\n          </div>\n\n          <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</section>\n"

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
                _this.openDialog('Registration successful! You may login now', true);
            }, function (error) {
                _this.isLoaded = true;
                _this.openDialog('Username or email is already taken. Please try again', false);
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

module.exports = "<mat-dialog-content>\n  <p>{{data.message}}</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n  <button mat-raised-button color=\"primary\" (click)=\"onOkClick()\">Ok</button>\n</mat-dialog-actions>\n"

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

/***/ "./src/app/search-results/search-results.component.css":
/*!*************************************************************!*\
  !*** ./src/app/search-results/search-results.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1yZXN1bHRzL3NlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/search-results/search-results.component.html":
/*!**************************************************************!*\
  !*** ./src/app/search-results/search-results.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n\n  <h1 mat-subheader>Listings</h1>\n  <mat-divider></mat-divider>\n  <mat-list-item *ngFor=\"let listing of listing\">\n    <p mat-line>title: {{listing.title}}</p>\n    <p mat-line>city: {{listing.city}}</p>\n    <p mat-line>street: {{listing.street}}</p>\n    <p mat-line>bedrooms: {{listing.numBedrooms}}</p>\n    <p mat-line>bathrooms: {{listing.numBathrooms}}</p>\n    <mat-divider></mat-divider>\n  </mat-list-item>\n\n</mat-list>\n"

/***/ }),

/***/ "./src/app/search-results/search-results.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-results/search-results.component.ts ***!
  \************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_search_listings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/search.listing.service */ "./src/app/core/services/search.listing.service.ts");



var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(searchService) {
        this.searchService = searchService;
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        this.listings = this.searchService.getListings();
        console.log(this.listings);
    };
    SearchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.css */ "./src/app/search-results/search-results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_search_listings_service__WEBPACK_IMPORTED_MODULE_2__["SearchListingsService"]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
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

module.exports = __webpack_require__(/*! /Users/anastasiosgrigoriou/WebstormProjects/csc648-sp19-team43/Project/angular-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
