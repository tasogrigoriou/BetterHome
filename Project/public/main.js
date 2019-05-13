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

module.exports = "/*:host>.container {*/\n/*  max-width: 1264px;*/\n/*  width: 100%;*/\n/*  margin: 0 auto;*/\n/*  display: flex;*/\n/*  justify-content: space-between;*/\n/*  background: none;*/\n/*  float: left;*/\n/*}*/\n/*:host>.mat-tab-group {*/\n/*  flex-direction: row;*/\n/*}*/\n/*:host>.mat-tab-header {*/\n/*  border-bottom: none;*/\n/*}*/\n/*:host>.mat-tab-header-pagination {*/\n/*  display: none !important;*/\n/*}*/\n/*:host>.mat-tab-labels {*/\n/*  flex-direction: column;*/\n/*}*/\n/*:host>.mat-ink-bar {*/\n/*  height: 100%;*/\n/*  left: 98% !important;*/\n/*}*/\n/*:host>.mat-tab-body-wrapper {*/\n/*  flex: 1 1 auto;*/\n/*}*/\n/*.container {*/\n/*  position: relative;*/\n/*  width: 100%;*/\n/*  flex: 1 0 auto;*/\n/*  margin: 0 auto;*/\n/*  text-align: left;*/\n/*}*/\n/*#content {*/\n/*  box-sizing: content-box;*/\n/*  margin: 0 auto;*/\n/*  padding: 15px;*/\n/*  width: 1264px;*/\n/*  background-color: #ffffff;*/\n/*}*/\n/*#content {*/\n/*  max-width: 1100px;*/\n/*  width: 100%;*/\n/*  background-color: #ffffff;*/\n/*  padding: 24px;*/\n/*  box-sizing: border-box;*/\n/*}*/\n/*#content {*/\n/*  max-width: 1100px;*/\n/*  width: 100%;*/\n/*  background-color: #fff;*/\n/*  padding: 24px;*/\n/*  box-sizing: border-box;*/\n/*}*/\n/*#content::before, #main-content::before, #content::after, #main-content::after {*/\n/*  content: \"\";*/\n/*  display: table;*/\n/*}*/\n/*#content::after, #main-content::after {*/\n/*  clear: both;*/\n/*}*/\n/*.label{*/\n/*  font-size: xx-large;*/\n/*  font-weight: bold;*/\n/*}*/\n.fa {\n  color: darkgray;\n}\n.card-body {\n  margin-left: 25px;\n}\n.profile-p {\n  font-size: 18px;\n  font-style: oblique;\n  color: #686868;\n}\n.center-btn {\n  text-align: center;\n}\n.card-header-title {\n  padding-top: -20px;\n}\n.property-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.property-card {\n  position: relative;\n  margin-top: 10px;\n  align-items: center;\n  max-width: 400px;\n  width: 100%;\n}\n.a-link-card {\n  position: absolute;\n  top: 0; left: 0;\n  height: 100%; width: 100%;\n}\n.img-container {\n  max-height: 250px;\n  height: 100%;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.img-wrap {\n  display: inline-block;\n  position: relative;\n}\n.img-upload {\n  position: absolute;\n  top: 14px;\n  left: 16px;\n}\n.img-delete {\n  position: absolute;\n  top: 14px;\n  right: 16px;\n}\n.delete-button {\n  position: absolute;\n  top: 12px;\n  right: 16px;\n  height: 46px;\n  width: 30px;\n}\n::ng-deep .mat-tab-labels {\n   font-size: 20px;\n   justify-content: center;\n }\n::ng-deep .mat-tab-label {\n  font-size: 18px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQixvQ0FBb0M7QUFFcEMsc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQixJQUFJO0FBRUoseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QixJQUFJO0FBQ0osMEJBQTBCO0FBQzFCLHlCQUF5QjtBQUN6QixJQUFJO0FBQ0oscUNBQXFDO0FBQ3JDLDhCQUE4QjtBQUM5QixJQUFJO0FBQ0osMEJBQTBCO0FBQzFCLDRCQUE0QjtBQUM1QixJQUFJO0FBQ0osdUJBQXVCO0FBQ3ZCLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsSUFBSTtBQUNKLGdDQUFnQztBQUNoQyxvQkFBb0I7QUFDcEIsSUFBSTtBQUdKLGVBQWU7QUFDZix3QkFBd0I7QUFDeEIsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsc0JBQXNCO0FBQ3RCLElBQUk7QUFFSixhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCLG9CQUFvQjtBQUNwQixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLCtCQUErQjtBQUMvQixJQUFJO0FBRUosYUFBYTtBQUNiLHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakIsK0JBQStCO0FBQy9CLG1CQUFtQjtBQUNuQiw0QkFBNEI7QUFDNUIsSUFBSTtBQUNKLGFBQWE7QUFDYix1QkFBdUI7QUFDdkIsaUJBQWlCO0FBQ2pCLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkIsNEJBQTRCO0FBQzVCLElBQUk7QUFDSixtRkFBbUY7QUFDbkYsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixJQUFJO0FBQ0osMENBQTBDO0FBQzFDLGlCQUFpQjtBQUNqQixJQUFJO0FBRUosVUFBVTtBQUNWLHlCQUF5QjtBQUN6Qix1QkFBdUI7QUFFdkIsSUFBSTtBQUVKO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU0sRUFBRSxPQUFPO0VBQ2YsWUFBWSxFQUFFLFdBQVc7QUFDM0I7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztBQUNiO0FBRUE7R0FDRyxlQUFlO0dBQ2YsdUJBQXVCO0NBQ3pCO0FBRUQ7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKjpob3N0Pi5jb250YWluZXIgeyovXG4vKiAgbWF4LXdpZHRoOiAxMjY0cHg7Ki9cbi8qICB3aWR0aDogMTAwJTsqL1xuLyogIG1hcmdpbjogMCBhdXRvOyovXG4vKiAgZGlzcGxheTogZmxleDsqL1xuLyogIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xuXG4vKiAgYmFja2dyb3VuZDogbm9uZTsqL1xuLyogIGZsb2F0OiBsZWZ0OyovXG4vKn0qL1xuXG4vKjpob3N0Pi5tYXQtdGFiLWdyb3VwIHsqL1xuLyogIGZsZXgtZGlyZWN0aW9uOiByb3c7Ki9cbi8qfSovXG4vKjpob3N0Pi5tYXQtdGFiLWhlYWRlciB7Ki9cbi8qICBib3JkZXItYm90dG9tOiBub25lOyovXG4vKn0qL1xuLyo6aG9zdD4ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7Ki9cbi8qICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7Ki9cbi8qfSovXG4vKjpob3N0Pi5tYXQtdGFiLWxhYmVscyB7Ki9cbi8qICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyovXG4vKn0qL1xuLyo6aG9zdD4ubWF0LWluay1iYXIgeyovXG4vKiAgaGVpZ2h0OiAxMDAlOyovXG4vKiAgbGVmdDogOTglICFpbXBvcnRhbnQ7Ki9cbi8qfSovXG4vKjpob3N0Pi5tYXQtdGFiLWJvZHktd3JhcHBlciB7Ki9cbi8qICBmbGV4OiAxIDEgYXV0bzsqL1xuLyp9Ki9cblxuXG4vKi5jb250YWluZXIgeyovXG4vKiAgcG9zaXRpb246IHJlbGF0aXZlOyovXG4vKiAgd2lkdGg6IDEwMCU7Ki9cbi8qICBmbGV4OiAxIDAgYXV0bzsqL1xuLyogIG1hcmdpbjogMCBhdXRvOyovXG4vKiAgdGV4dC1hbGlnbjogbGVmdDsqL1xuLyp9Ki9cblxuLyojY29udGVudCB7Ki9cbi8qICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsqL1xuLyogIG1hcmdpbjogMCBhdXRvOyovXG4vKiAgcGFkZGluZzogMTVweDsqL1xuLyogIHdpZHRoOiAxMjY0cHg7Ki9cbi8qICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyovXG4vKn0qL1xuXG4vKiNjb250ZW50IHsqL1xuLyogIG1heC13aWR0aDogMTEwMHB4OyovXG4vKiAgd2lkdGg6IDEwMCU7Ki9cbi8qICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyovXG4vKiAgcGFkZGluZzogMjRweDsqL1xuLyogIGJveC1zaXppbmc6IGJvcmRlci1ib3g7Ki9cbi8qfSovXG4vKiNjb250ZW50IHsqL1xuLyogIG1heC13aWR0aDogMTEwMHB4OyovXG4vKiAgd2lkdGg6IDEwMCU7Ki9cbi8qICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyovXG4vKiAgcGFkZGluZzogMjRweDsqL1xuLyogIGJveC1zaXppbmc6IGJvcmRlci1ib3g7Ki9cbi8qfSovXG4vKiNjb250ZW50OjpiZWZvcmUsICNtYWluLWNvbnRlbnQ6OmJlZm9yZSwgI2NvbnRlbnQ6OmFmdGVyLCAjbWFpbi1jb250ZW50OjphZnRlciB7Ki9cbi8qICBjb250ZW50OiBcIlwiOyovXG4vKiAgZGlzcGxheTogdGFibGU7Ki9cbi8qfSovXG4vKiNjb250ZW50OjphZnRlciwgI21haW4tY29udGVudDo6YWZ0ZXIgeyovXG4vKiAgY2xlYXI6IGJvdGg7Ki9cbi8qfSovXG5cbi8qLmxhYmVseyovXG4vKiAgZm9udC1zaXplOiB4eC1sYXJnZTsqL1xuLyogIGZvbnQtd2VpZ2h0OiBib2xkOyovXG5cbi8qfSovXG5cbi5mYSB7XG4gIGNvbG9yOiBkYXJrZ3JheTtcbn1cblxuLmNhcmQtYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4ucHJvZmlsZS1wIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXN0eWxlOiBvYmxpcXVlO1xuICBjb2xvcjogIzY4Njg2ODtcbn1cblxuLmNlbnRlci1idG4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkLWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAtMjBweDtcbn1cblxuLnByb3BlcnR5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvcGVydHktY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hLWxpbmstY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwOyBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nLWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uaW1nLXdyYXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltZy11cGxvYWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTRweDtcbiAgbGVmdDogMTZweDtcbn1cblxuLmltZy1kZWxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTRweDtcbiAgcmlnaHQ6IDE2cHg7XG59XG5cbi5kZWxldGUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxNnB4O1xuICBoZWlnaHQ6IDQ2cHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWxzIHtcbiAgIGZvbnQtc2l6ZTogMjBweDtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuIH1cblxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<title>Account</title>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<body class=\"body\">\n<br>\n\n<div class=\"container\">\n  <div>\n    <h3 class=\"card-header-title\">Welcome {{user.username}}!</h3>\n  </div>\n\n  <mat-tab-group mat-stretch-tabs>\n\n    <mat-tab label=\"Profile\">\n      <br>\n        <div class=\"card-body\">\n\n          <p class=\"profile-p\"><i class=\"fa fa-user fa-fw w3-margin-right w3-xlarge \"></i>{{user.username}}</p>\n          <p class=\"profile-p\"><i class=\"fa fa-info fa-fw w3-margin-right w3-xlarge \"></i>{{user.firstName + ' ' + user.lastName}}</p>\n          <p class=\"profile-p\"><i class=\"fa fa-phone fa-fw w3-margin-right w3-xlarge \"></i>{{formatPhoneNumber(user.phoneNumber)}}</p>\n          <p class=\"profile-p\"><i class=\"fa fa-envelope fa-fw w3-margin-right w3-xlarge \"></i>{{user.emailAddress}}</p>\n\n          <br>\n          <button mat-raised-button type=\"edit\" class=\"btn btn-danger edit-acct-btn\" (click)=\"onEditAccountClick()\">Edit</button>\n\n        </div>\n    </mat-tab>\n\n    <mat-tab label=\"My Listings\">\n      <ng-template [ngIf]=\"userListings[userListingIndex] && userListings.length > 0\">\n        <div class=\"property-container\">\n          <mat-card class=\"property-card\" appMaterialElevation defaultElevation=\"3\" raisedElevation=\"24\">\n\n            <a class=\"a-link-card\" (click)=\"onEditListingClick()\"></a>\n\n            <a class=\"delete-button\" (click)=\"onDeleteListingClick(userListings[userListingIndex])\">\n              <mat-icon style=\"font-size: 33px !important\" color=\"warn\">delete_forever</mat-icon>\n            </a>\n\n            <mat-card-header>\n              <mat-card-title><h5>{{userListings[userListingIndex].title}}</h5>\n              </mat-card-title>\n              <mat-card-subtitle style=\"padding-top: 6px !important\">\n                {{userListings[userListingIndex].street + ', ' + userListings[userListingIndex].city + ', ' + userListings[userListingIndex].state}}\n              </mat-card-subtitle>\n            </mat-card-header>\n\n            <ng-template [ngIf]=\"userListings[userListingIndex] && userListings[userListingIndex].imageUrls.length > 0\">\n              <drag-scroll #drag_scroll>\n                <div class=\"img-wrap\"\n                     *ngFor=\"let imageUrl of userListings[userListingIndex].imageUrls\">\n                  <img class=\"img-container\"\n                       drag-scroll-item\n                       [src]=\"getImage(imageUrl)\"\n                       alt=\"\" />\n                  <a class=\"a-link-card\" (click)=\"onEditListingClick()\"></a>\n\n                  <a class=\"img-upload\" (click)=\"openInput()\">\n                    <mat-icon style=\"font-size: 30px !important\" color=\"primary\">cloud_upload</mat-icon>\n                    <input id=\"fileInput\"\n                           hidden\n                           type=\"file\"\n                           accept=\".jpg, .jpeg, .png, .tif\"\n                           (change)=\"onUploadImageClick($event.target.files)\"\n                           multiple>\n                  </a>\n                  <a class=\"img-delete\" (click)=\"onDeleteImageClick(imageUrl)\">\n                    <mat-icon style=\"font-size: 30px !important\" color=\"warn\">delete_forever</mat-icon>\n                  </a>\n\n                </div>\n              </drag-scroll>\n            </ng-template>\n\n            <mat-card-content>\n              <h6>{{userListings[userListingIndex].listingType + ' for ' + (userListings[userListingIndex].forSale ? 'sale' : 'rent')}}</h6>\n              <p><i>{{'$' + numberWithCommas(userListings[userListingIndex].price) + ' | ' + userListings[userListingIndex].numBedrooms + ' beds' + ' | ' + userListings[userListingIndex].numBathrooms + ' baths' + ' | ' + numberWithCommas(userListings[userListingIndex].lotSize) + ' sqft'}}</i></p>\n              <p class=\"property-access-title\">{{getPropertyAccessibility(userListings[userListingIndex])}}</p>\n              <p>{{userListings[userListingIndex].description}}</p>\n            </mat-card-content>\n          </mat-card>\n        </div>\n      </ng-template>\n\n      <div class=\"w3-center\">\n        <div class=\"w3-section\">\n          <div class=\"center-btn\">\n            <button mat-button (click)=\"clickLeftUserListings(userListingIndex)\">❮ Prev</button>\n            <button mat-button (click)=\"clickRightUserListings(userListingIndex)\">Next ❯</button>\n          </div>\n        </div>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"My Favorites\">\n      <ng-template [ngIf]=\"favoriteListings[favoriteListingIndex] && favoriteListings.length > 0\">\n        <div class=\"property-container\">\n          <mat-card class=\"property-card\" appMaterialElevation defaultElevation=\"3\" raisedElevation=\"24\">\n\n            <a class=\"a-link-card\" (click)=\"navigateToListing(favoriteListings[favoriteListingIndex].listingId)\"></a>\n\n            <a class=\"delete-button\" (click)=\"onRemoveFavoriteListingClick(favoriteListings[favoriteListingIndex])\">\n              <mat-icon style=\"font-size: 24px !important\" color=\"warn\">favorite</mat-icon>\n            </a>\n\n            <mat-card-header>\n              <mat-card-title><h5>{{favoriteListings[favoriteListingIndex].title}}</h5>\n              </mat-card-title>\n              <mat-card-subtitle style=\"padding-top: 6px !important\">\n                {{favoriteListings[favoriteListingIndex].street + ', ' + favoriteListings[favoriteListingIndex].city + ', ' + favoriteListings[favoriteListingIndex].state}}\n              </mat-card-subtitle>\n            </mat-card-header>\n\n            <ng-template [ngIf]=\"favoriteListings[favoriteListingIndex] && favoriteListings[favoriteListingIndex].imageUrls.length > 0\">\n              <drag-scroll #drag_scroll>\n                <div class=\"img-wrap\"\n                     *ngFor=\"let imageUrl of favoriteListings[favoriteListingIndex].imageUrls\">\n                  <img class=\"img-container\"\n                       drag-scroll-item\n                       [src]=\"getImage(imageUrl)\"\n                       alt=\"\" />\n                  <a class=\"a-link-card\" (click)=\"navigateToListing(favoriteListings[favoriteListingIndex].listingId)\"></a>\n                </div>\n              </drag-scroll>\n            </ng-template>\n\n            <mat-card-content>\n              <h6>{{favoriteListings[favoriteListingIndex].listingType + ' for ' + (favoriteListings[favoriteListingIndex].forSale ? 'sale' : 'rent')}}</h6>\n              <p><i>{{'$' + numberWithCommas(favoriteListings[favoriteListingIndex].price) + ' | ' + favoriteListings[favoriteListingIndex].numBedrooms + ' beds' + ' | ' + favoriteListings[favoriteListingIndex].numBathrooms + ' baths' + ' | ' + numberWithCommas(favoriteListings[favoriteListingIndex].lotSize) + ' sqft'}}</i></p>\n              <p class=\"property-access-title\">{{getPropertyAccessibility(favoriteListings[favoriteListingIndex])}}</p>\n              <p>{{favoriteListings[favoriteListingIndex].description}}</p>\n            </mat-card-content>\n          </mat-card>\n        </div>\n      </ng-template>\n\n      <div class=\"w3-center\">\n        <div class=\"w3-section\">\n          <button mat-button (click)=\"clickLeftFavoriteListings(favoriteListingIndex)\">❮ Prev</button>\n          <button mat-button (click)=\"clickRightFavoriteListings(favoriteListingIndex)\">Next ❯</button>\n        </div>\n      </div>\n    </mat-tab>\n\n  </mat-tab-group>\n\n  <div>\n    <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n  </div>\n\n</div>\n</body>\n</html>\n"

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
/* harmony import */ var _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/listings.service */ "./src/app/core/services/listings.service.ts");
/* harmony import */ var ngx_drag_scroll_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-drag-scroll/lib */ "./node_modules/ngx-drag-scroll/lib/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delete_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete.dialog */ "./src/app/account/delete.dialog.ts");
/* harmony import */ var _core_services_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/services/upload.service */ "./src/app/core/services/upload.service.ts");
/* harmony import */ var _core_services_favorites_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/services/favorites.service */ "./src/app/core/services/favorites.service.ts");










var AccountComponent = /** @class */ (function () {
    function AccountComponent(router, registerService, listingsService, favoritesService, uploadService, dialog) {
        this.router = router;
        this.registerService = registerService;
        this.listingsService = listingsService;
        this.favoritesService = favoritesService;
        this.uploadService = uploadService;
        this.dialog = dialog;
        this.userListings = [];
        this.favoriteListings = [];
        this.userListingIndex = 0;
        this.favoriteListingIndex = 0;
        this.isLoaded = false;
    }
    AccountComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('loginUser')) {
            return;
        }
        this.user = JSON.parse(localStorage.getItem('loginUser'));
        this.loadData();
    };
    AccountComponent.prototype.loadData = function () {
        var _this = this;
        var promises = [];
        promises.push(this.listingsService.getUserListings(this.user.userId).toPromise().then(function (listings) {
            console.log('my listings: ' + listings);
            _this.userListings = listings;
        }).catch(function (err) {
            console.log(err);
        }));
        promises.push(this.favoritesService.getFavorites(this.user.userId).toPromise().then(function (favorites) {
            console.log('my favorites: ' + favorites);
            _this.favoriteListings = favorites;
        }).catch(function (err) {
            console.log(err);
        }));
        Promise.all(promises).then(function (s) {
            _this.isLoaded = true;
        }).catch(function (err) {
            console.log(err);
            _this.isLoaded = true;
        });
    };
    AccountComponent.prototype.getImage = function (imageUrl) {
        return _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__["ListingsService"].cloudStorage + "/" + imageUrl;
    };
    AccountComponent.prototype.clickLeftUserListings = function (i) {
        if (i == 0)
            return;
        this.userListingIndex--;
    };
    AccountComponent.prototype.clickRightUserListings = function (i) {
        if (i == this.userListings.length - 1)
            return;
        this.userListingIndex++;
    };
    AccountComponent.prototype.clickLeftFavoriteListings = function (i) {
        if (i == 0)
            return;
        this.favoriteListingIndex--;
    };
    AccountComponent.prototype.clickRightFavoriteListings = function (i) {
        if (i == this.favoriteListings.length - 1)
            return;
        this.favoriteListingIndex++;
    };
    AccountComponent.prototype.onDeleteListingClick = function (listing) {
        this.openDeleteListingDialog(listing, 'Are you sure you want to delete this listing?');
    };
    AccountComponent.prototype.onRemoveFavoriteListingClick = function (listing) {
        this.openRemoveFavoriteListingDialog(listing, 'Are you sure you want to remove this listing from your favorites?');
    };
    AccountComponent.prototype.openInput = function () {
        document.getElementById("fileInput").click();
    };
    AccountComponent.prototype.onUploadImageClick = function (files) {
        var _this = this;
        this.isLoaded = false;
        var promises = [];
        for (var i = 0; i < files.length; i++) {
            promises.push(this.uploadService.uploadImage(files[i], this.userListings[this.userListingIndex].listingId).toPromise());
        }
        // Waits for all promises to be returned (all image uploading calls finish)
        Promise.all(promises).then(function (s) {
            console.log(s);
            _this.loadData();
        }).catch(function (err) {
            console.log(err);
            _this.isLoaded = true;
        });
    };
    AccountComponent.prototype.onDeleteImageClick = function (imageUrl) {
        if (this.userListings[this.userListingIndex].imageUrls.length == 1) {
            return;
        }
        this.openDeleteImageDialog(imageUrl, 'Are you sure you want to delete this image?');
    };
    AccountComponent.prototype.onEditAccountClick = function () {
        this.router.navigate(['/update-login']);
    };
    AccountComponent.prototype.onEditListingClick = function () {
        var listing = this.userListings[this.userListingIndex];
        this.router.navigate(['/update-property', listing.listingId]);
    };
    AccountComponent.prototype.navigateToListing = function (listingId) {
        this.router.navigate(['/properties', listingId]);
    };
    AccountComponent.prototype.deleteListing = function (listing) {
        var _this = this;
        this.listingsService.deleteListing(listing.listingId).subscribe(function (result) {
            _this.userListings = _this.userListings.filter(function (userListing) {
                return userListing.listingId !== listing.listingId;
            });
            _this.userListingIndex = 0;
        }, function (err) {
            console.log(err);
        });
    };
    AccountComponent.prototype.deleteImage = function (imageUrl) {
        var _this = this;
        this.listingsService.deleteImage(imageUrl).subscribe(function (result) {
            _this.userListings[_this.userListingIndex].imageUrls = _this.userListings[_this.userListingIndex].imageUrls.filter(function (url) {
                return url !== imageUrl;
            });
        }, function (err) {
            console.log(err);
        });
    };
    AccountComponent.prototype.removeFavoriteListing = function (listing) {
        var _this = this;
        this.favoritesService.removeFavorite(listing.listingId, this.user.userId).subscribe(function (result) {
            _this.favoriteListings = _this.favoriteListings.filter(function (favListing) {
                return favListing.listingId !== listing.listingId;
            });
            _this.favoriteListingIndex = 0;
        }, function (err) {
            console.log(err);
        });
    };
    AccountComponent.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    AccountComponent.prototype.formatPhoneNumber = function (phoneNumberString) {
        var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
    };
    AccountComponent.prototype.getPropertyAccessibility = function (listing) {
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
    AccountComponent.prototype.openDeleteListingDialog = function (listing, message) {
        var _this = this;
        var dialog = this.dialog.open(_delete_dialog__WEBPACK_IMPORTED_MODULE_7__["DeleteDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        dialog.afterClosed().subscribe(function (result) {
            if (result == 'delete') {
                _this.deleteListing(listing);
            }
        });
    };
    AccountComponent.prototype.openDeleteImageDialog = function (imageUrl, message) {
        var _this = this;
        var dialog = this.dialog.open(_delete_dialog__WEBPACK_IMPORTED_MODULE_7__["DeleteDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        dialog.afterClosed().subscribe(function (result) {
            if (result == 'delete') {
                _this.deleteImage(imageUrl);
            }
        });
    };
    AccountComponent.prototype.openRemoveFavoriteListingDialog = function (listing, message) {
        var _this = this;
        var dialog = this.dialog.open(_delete_dialog__WEBPACK_IMPORTED_MODULE_7__["DeleteDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        dialog.afterClosed().subscribe(function (result) {
            if (result == 'delete') {
                _this.removeFavoriteListing(listing);
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drag_scroll', { read: ngx_drag_scroll_lib__WEBPACK_IMPORTED_MODULE_4__["DragScrollComponent"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_drag_scroll_lib__WEBPACK_IMPORTED_MODULE_4__["DragScrollComponent"])
    ], AccountComponent.prototype, "dragScroll", void 0);
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _core_services_register_service__WEBPACK_IMPORTED_MODULE_2__["RegisterService"],
            _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__["ListingsService"],
            _core_services_favorites_service__WEBPACK_IMPORTED_MODULE_9__["FavoritesService"],
            _core_services_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/account/delete.dialog.html":
/*!********************************************!*\
  !*** ./src/app/account/delete.dialog.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <p>{{data.message}}</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n  <button mat-raised-button color=\"warn\" (click)=\"onDeleteClick()\">Delete</button>\n  <button mat-raised-button (click)=\"onCancelClick()\">Cancel</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/account/delete.dialog.ts":
/*!******************************************!*\
  !*** ./src/app/account/delete.dialog.ts ***!
  \******************************************/
/*! exports provided: DeleteDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialog", function() { return DeleteDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DeleteDialog = /** @class */ (function () {
    function DeleteDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DeleteDialog.prototype.onDeleteClick = function () {
        this.dialogRef.close('delete');
    };
    DeleteDialog.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    DeleteDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delete-dialog-component',
            template: __webpack_require__(/*! ./delete.dialog.html */ "./src/app/account/delete.dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DeleteDialog);
    return DeleteDialog;
}());



/***/ }),

/***/ "./src/app/add-listing/add-listing.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  margin: 0 auto;\n  max-width: 800px;\n  width: 100%;\n  padding-bottom: 10px;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\n.form-field-div {\n  display: flex;\n  justify-content: center;\n}\n\n.post-listing-header {\n  padding-top: 20px;\n  padding-bottom: 8px;\n}\n\n.cont-input {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.cont-form {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.create-listing-btn {\n  height: 50px;\n  max-width: 800px;\n  width: 100%;\n  margin: 10px auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWxpc3RpbmcvYWRkLWxpc3RpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWRkLWxpc3RpbmcvYWRkLWxpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1maWVsZC1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBvc3QtbGlzdGluZy1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLmNvbnQtaW5wdXQge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jb250LWZvcm0ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jcmVhdGUtbGlzdGluZy1idG4ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDEwcHggYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/add-listing/add-listing.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"loginUser\">\n\n  <ng-template [ngIf]=\"isFullScreen\">\n    <div class=\"container example-container\" (window:resize)=\"onResize($event)\">\n      <h2 class=\"post-listing-header\">Post Listing</h2>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Title</mat-label>\n        <input matInput placeholder=\"Title\" [(ngModel)]=\"listing.title\" required>\n      </mat-form-field>\n\n      <div class=\"form-field-div\">\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Listing Type</mat-label>\n          <mat-select placeholder=\"Listing Type\" [(value)]=\"listing.listingType\" required>\n            <mat-option value=\"House\">House</mat-option>\n            <mat-option value=\"Apartment\">Apartment</mat-option>\n            <mat-option value=\"Condo\">Condo</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Sale or Rent</mat-label>\n          <mat-select placeholder=\"Sale or Rent\" [(value)]=\"listing.forSale\" required>\n            <mat-option value=1>Sale</mat-option>\n            <mat-option value=0>Rent</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-field-div\">\n        <mat-form-field class=\"cont-form\">\n          <mat-label>Bedrooms</mat-label>\n          <mat-select [(value)]=\"listing.numBedrooms\" required>\n            <mat-option value=1>1 Bed</mat-option>\n            <mat-option value=2>2 Beds</mat-option>\n            <mat-option value=3>3 Beds</mat-option>\n            <mat-option value=4>4 Beds</mat-option>\n            <mat-option value=5>5 Beds</mat-option>\n            <mat-option value=6>6 Beds</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-form\">\n          <mat-label>Bathrooms</mat-label>\n          <mat-select [(value)]=\"listing.numBathrooms\" required>\n            <mat-option value=1>1 Bath</mat-option>\n            <mat-option value=2>2 Baths</mat-option>\n            <mat-option value=3>3 Baths</mat-option>\n            <mat-option value=4>4 Baths</mat-option>\n            <mat-option value=5>5 Baths</mat-option>\n            <mat-option value=6>6 Baths</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-field-div\">\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Street</mat-label>\n          <input matInput placeholder=\"Street\" [(ngModel)]=\"listing.street\" required>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>City</mat-label>\n          <input matInput placeholder=\"City\" [(ngModel)]=\"listing.city\" required>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>State</mat-label>\n          <input matInput placeholder=\"State\" [(ngModel)]=\"listing.state\" required>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Zip code</mat-label>\n          <input matInput placeholder=\"Zip code\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.zipCode\" required>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-field-div\">\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Price</mat-label>\n          <input matInput placeholder=\"Price\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.price\" required>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Lot Size</mat-label>\n          <input matInput placeholder=\"Lot Size\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.lotSize\" required>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-field-div\">\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Hospital Access</mat-label>\n          <mat-select placeholder=\"Hospital Access\" [(value)]=\"listing.hospitalAccess\">\n            <mat-option value=1>Yes</mat-option>\n            <mat-option value=0>No</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Bart Access</mat-label>\n          <mat-select placeholder=\"Bart Access\" [(value)]=\"listing.BARTAccess\">\n            <mat-option value=1>Yes</mat-option>\n            <mat-option value=0>No</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Wheelchair Access</mat-label>\n          <mat-select placeholder=\"Wheelchair Access\" [(value)]=\"listing.wheelchairAccess\">\n            <mat-option value=1>Yes</mat-option>\n            <mat-option value=0>No</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Laundry Access</mat-label>\n          <mat-select placeholder=\"Laundry Access\" [(value)]=\"listing.laundry\">\n            <mat-option value=1>Yes</mat-option>\n            <mat-option value=0>No</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Description</mat-label>\n        <textarea matInput placeholder=\"Description\" [(ngModel)]=\"listing.description\" required></textarea>\n      </mat-form-field>\n\n      <div>\n        <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n      </div>\n\n      <!--Image Uploading-->\n      <ng-template [ngIf]=\"!didSaveImages\">\n        <td-file-upload #fileMultipleUpload\n                        (select)=\"saveImages($event)\"\n                        accept=\".jpg, .jpeg, .png, .tif\"\n                        defaultColor=\"primary\"\n                        activeColor=\"primary\"\n                        cancelColor=\"primary\"\n                        multiple>\n          <mat-icon>file_upload</mat-icon>\n          <span>\n          {{fileMultipleUpload.value?.name || fileMultipleUpload.value?.length}}\n            <span *ngIf=\"fileMultipleUpload.value?.length\">files selected</span>\n        </span>\n          <ng-template td-file-input-label>\n            <mat-icon>attach_file</mat-icon>\n            <span>Upload images</span>\n          </ng-template>\n        </td-file-upload>\n      </ng-template>\n\n      <ng-template [ngIf]=\"didSaveImages\">\n        <div>\n          <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Create Listing</button>\n        </div>\n      </ng-template>\n\n    </div>\n  </ng-template>\n\n  <ng-template [ngIf]=\"!isFullScreen\">\n    <div class=\"container example-container\" (window:resize)=\"onResize($event)\">\n      <h2 class=\"post-listing-header\">Post Listing</h2>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Title</mat-label>\n        <input matInput placeholder=\"Title\" [(ngModel)]=\"listing.title\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Listing Type</mat-label>\n        <mat-select placeholder=\"Listing Type\" [(value)]=\"listing.listingType\" required>\n          <mat-option value=\"House\">House</mat-option>\n          <mat-option value=\"Apartment\">Apartment</mat-option>\n          <mat-option value=\"Condo\">Condo</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Sale or Rent</mat-label>\n        <mat-select placeholder=\"Sale or Rent\" [(value)]=\"listing.forSale\" required>\n          <mat-option value=1>Sale</mat-option>\n          <mat-option value=0>Rent</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-form\">\n        <mat-label>Bedrooms</mat-label>\n        <mat-select [(value)]=\"listing.numBedrooms\" required>\n          <mat-option value=1>1 Bed</mat-option>\n          <mat-option value=2>2 Beds</mat-option>\n          <mat-option value=3>3 Beds</mat-option>\n          <mat-option value=4>4 Beds</mat-option>\n          <mat-option value=5>5 Beds</mat-option>\n          <mat-option value=6>6 Beds</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-form\">\n        <mat-label>Bathrooms</mat-label>\n        <mat-select [(value)]=\"listing.numBathrooms\" required>\n          <mat-option value=1>1 Bath</mat-option>\n          <mat-option value=2>2 Baths</mat-option>\n          <mat-option value=3>3 Baths</mat-option>\n          <mat-option value=4>4 Baths</mat-option>\n          <mat-option value=5>5 Baths</mat-option>\n          <mat-option value=6>6 Baths</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Street</mat-label>\n        <input matInput placeholder=\"Street\" [(ngModel)]=\"listing.street\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>City</mat-label>\n        <input matInput placeholder=\"City\" [(ngModel)]=\"listing.city\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>State</mat-label>\n        <input matInput placeholder=\"State\" [(ngModel)]=\"listing.state\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Zip code</mat-label>\n        <input matInput placeholder=\"Zip code\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.zipCode\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Price</mat-label>\n        <input matInput placeholder=\"Price\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.price\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Lot Size</mat-label>\n        <input matInput placeholder=\"Lot Size\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.lotSize\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Hospital Access</mat-label>\n        <mat-select placeholder=\"Hospital Access\" [(value)]=\"listing.hospitalAccess\">\n          <mat-option value=1>Yes</mat-option>\n          <mat-option value=0>No</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Bart Access</mat-label>\n        <mat-select placeholder=\"Bart Access\" [(value)]=\"listing.BARTAccess\">\n          <mat-option value=1>Yes</mat-option>\n          <mat-option value=0>No</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Wheelchair Access</mat-label>\n        <mat-select placeholder=\"Wheelchair Access\" [(value)]=\"listing.wheelchairAccess\">\n          <mat-option value=1>Yes</mat-option>\n          <mat-option value=0>No</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Laundry Access</mat-label>\n        <mat-select placeholder=\"Laundry Access\" [(value)]=\"listing.laundry\">\n          <mat-option value=1>Yes</mat-option>\n          <mat-option value=0>No</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Description</mat-label>\n        <textarea matInput placeholder=\"Description\" [(ngModel)]=\"listing.description\" required></textarea>\n      </mat-form-field>\n\n      <div>\n        <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n      </div>\n\n      <!--Image Uploading-->\n      <ng-template [ngIf]=\"!didSaveImages\">\n        <td-file-upload #fileMultipleUpload\n                        (select)=\"saveImages($event)\"\n                        accept=\".jpg, .jpeg, .png, .tif\"\n                        defaultColor=\"primary\"\n                        activeColor=\"primary\"\n                        cancelColor=\"warn\"\n                        multiple>\n          <mat-icon>file_upload</mat-icon>\n          <span>\n          {{fileMultipleUpload.value?.name || fileMultipleUpload.value?.length}}\n            <span *ngIf=\"fileMultipleUpload.value?.length\">files selected</span>\n        </span>\n          <ng-template td-file-input-label>\n            <mat-icon>attach_file</mat-icon>\n            <span>Upload images</span>\n          </ng-template>\n        </td-file-upload>\n      </ng-template>\n\n      <ng-template [ngIf]=\"didSaveImages\">\n        <div>\n          <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Create Listing</button>\n        </div>\n      </ng-template>\n\n    </div>\n  </ng-template>\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/add-listing/add-listing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-listing/add-listing.component.ts ***!
  \******************************************************/
/*! exports provided: AddListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListingComponent", function() { return AddListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/listings.service */ "./src/app/core/services/listings.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.dialog */ "./src/app/register/register.dialog.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_upload_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/upload.service */ "./src/app/core/services/upload.service.ts");








var AddListingComponent = /** @class */ (function () {
    function AddListingComponent(router, listingsService, uploadService, dialog) {
        this.router = router;
        this.listingsService = listingsService;
        this.uploadService = uploadService;
        this.dialog = dialog;
        this.isLoaded = true;
        this.didSaveImages = false;
    }
    AddListingComponent.prototype.ngOnInit = function () {
        this.listing = new _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__["Listing"]();
        if (localStorage.getItem('loginUser')) {
            this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
            this.listing.user = this.loginUser;
        }
        this.isFullScreen = (window.innerWidth >= 1000);
    };
    AddListingComponent.prototype.onResize = function (event) {
        this.isFullScreen = (event.target.innerWidth >= 1000);
    };
    AddListingComponent.prototype.saveImages = function (files) {
        this.files = files;
        this.didSaveImages = true;
    };
    AddListingComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.isDataProvided()) {
            this.openDialog('Please enter valid input for all required fields', false);
            return;
        }
        this.showSpinner();
        this.replaceDoubleQuotes();
        this.listingsService.createListing(this.listing)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (result) {
            _this.uploadImages(result.listingId);
        }, function (err) {
            console.log(err);
            _this.hideSpinner();
            _this.openDialog('Unable to create listing. Please try again', false);
        });
    };
    AddListingComponent.prototype.replaceDoubleQuotes = function () {
        this.listing.title = this.listing.title.replace(/"/g, "'");
        this.listing.description = this.listing.description.replace(/"/g, "'");
    };
    AddListingComponent.prototype.uploadImages = function (listingId) {
        var _this = this;
        var promises = [];
        if (this.files instanceof FileList) {
            for (var i = 0; i < this.files.length; i++) {
                promises.push(this.uploadService.uploadImage(this.files[i], listingId).toPromise());
            }
        }
        else {
            promises.push(this.uploadService.uploadImage(this.files, listingId).toPromise());
        }
        // Waits for all promises to be returned (all image uploading calls finish)
        Promise.all(promises).then(function (s) {
            console.log(s);
            _this.hideSpinner();
            _this.openDialog('Successfully posted new listing!', true);
        }).catch(function (err) {
            console.log(err);
            _this.hideSpinner();
            _this.openDialog('Unable to upload images. Please try again', false);
        });
    };
    AddListingComponent.prototype.showSpinner = function () {
        this.isLoaded = false;
    };
    AddListingComponent.prototype.hideSpinner = function () {
        this.isLoaded = true;
    };
    AddListingComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        return !(charCode > 31 && (charCode < 48 || charCode > 57));
    };
    AddListingComponent.prototype.isDataProvided = function () {
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
            !this.isEmptyNum(this.listing.numBathrooms));
    };
    AddListingComponent.prototype.isEmptyStr = function (str) {
        return (!str || 0 == str.length);
    };
    AddListingComponent.prototype.isEmptyNum = function (num) {
        return (!num || 0 == num);
    };
    AddListingComponent.prototype.isEmptyBool = function (bool) {
        return (!bool);
    };
    AddListingComponent.prototype.openDialog = function (message, subscribe) {
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
    AddListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addlisting',
            template: __webpack_require__(/*! ./add-listing.component.html */ "./src/app/add-listing/add-listing.component.html"),
            styles: [__webpack_require__(/*! ./add-listing.component.css */ "./src/app/add-listing/add-listing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__["ListingsService"],
            _core_services_upload_service__WEBPACK_IMPORTED_MODULE_7__["UploadService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], AddListingComponent);
    return AddListingComponent;
}());



/***/ }),

/***/ "./src/app/admin-images/admin-images.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin-images/admin-images.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header-title {\n  margin-top: 18px;\n  margin-bottom: 10px;\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.img-container {\n  max-height: 400px;\n  height: 100%;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.img-wrap {\n  display: inline-block;\n  position: relative;\n}\n\n.img-delete {\n  position: absolute;\n  top: 16px;\n  right: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4taW1hZ2VzL2FkbWluLWltYWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4taW1hZ2VzL2FkbWluLWltYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmltZy1jb250YWluZXIge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmltZy13cmFwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWctZGVsZXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/admin-images/admin-images.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-images/admin-images.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"isUserAdmin && images\">\n  <div class=\"container\">\n\n    <div>\n      <h4 class=\"card-header-title\">Image Gallery</h4>\n    </div>\n\n    <mat-grid-list [cols]=\"breakpoint\" rowHeight=\"2:1\" (window:resize)=\"onResize($event)\">\n      <mat-grid-tile *ngFor=\"let image of images\">\n        <img [src]=\"getImage(image)\" alt=\"no image\" style='height: 100%; width: 100%; object-fit: fill'/>\n        <a class=\"img-delete\" (click)=\"onDeleteImageClick(image)\">\n          <mat-icon style=\"font-size: 30px !important\" color=\"warn\">delete_forever</mat-icon>\n        </a>\n      </mat-grid-tile>\n    </mat-grid-list>\n\n    <div>\n      <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n    </div>\n\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/admin-images/admin-images.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-images/admin-images.component.ts ***!
  \********************************************************/
/*! exports provided: AdminImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminImagesComponent", function() { return AdminImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/admin.service */ "./src/app/core/services/admin.service.ts");
/* harmony import */ var _account_delete_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account/delete.dialog */ "./src/app/account/delete.dialog.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_services_listings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/listings.service */ "./src/app/core/services/listings.service.ts");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../register/register.dialog */ "./src/app/register/register.dialog.ts");







var AdminImagesComponent = /** @class */ (function () {
    function AdminImagesComponent(adminService, listingsService, dialog) {
        this.adminService = adminService;
        this.listingsService = listingsService;
        this.dialog = dialog;
    }
    AdminImagesComponent.prototype.ngOnInit = function () {
        if (!localStorage.getItem('loginUser'))
            return;
        this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;
        this.showSpinner();
        this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
        this.isUserAdmin = this.loginUser.username === 'admin';
        this.loadData();
    };
    AdminImagesComponent.prototype.loadData = function () {
        var _this = this;
        this.adminService.getAllImages().subscribe(function (images) {
            console.log(images);
            _this.images = images;
            _this.hideSpinner();
        }, function (err) {
            console.log(err);
            _this.hideSpinner();
        });
    };
    AdminImagesComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
    };
    AdminImagesComponent.prototype.getImage = function (imageUrl) {
        return _core_services_listings_service__WEBPACK_IMPORTED_MODULE_5__["ListingsService"].cloudStorage + "/" + imageUrl;
    };
    AdminImagesComponent.prototype.onDeleteImageClick = function (imageUrl) {
        this.openDeleteImageDialog(imageUrl, 'Are you sure you want to delete this image?');
    };
    AdminImagesComponent.prototype.deleteImage = function (imageUrl) {
        var _this = this;
        this.showSpinner();
        this.listingsService.deleteImage(imageUrl).subscribe(function (result) {
            _this.openDialog('Successfully deleted image');
            _this.loadData();
        }, function (err) {
            _this.openDialog('Unable to delete image');
            console.log(err);
        });
    };
    AdminImagesComponent.prototype.showSpinner = function () {
        this.isLoaded = false;
    };
    AdminImagesComponent.prototype.hideSpinner = function () {
        this.isLoaded = true;
    };
    AdminImagesComponent.prototype.openDeleteImageDialog = function (imageUrl, message) {
        var _this = this;
        var dialog = this.dialog.open(_account_delete_dialog__WEBPACK_IMPORTED_MODULE_3__["DeleteDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        dialog.afterClosed().subscribe(function (result) {
            if (result == 'delete') {
                _this.deleteImage(imageUrl);
            }
        });
    };
    AdminImagesComponent.prototype.openDialog = function (message) {
        this.dialog.open(_register_register_dialog__WEBPACK_IMPORTED_MODULE_6__["RegisterDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
    };
    AdminImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-images',
            template: __webpack_require__(/*! ./admin-images.component.html */ "./src/app/admin-images/admin-images.component.html"),
            styles: [__webpack_require__(/*! ./admin-images.component.css */ "./src/app/admin-images/admin-images.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            _core_services_listings_service__WEBPACK_IMPORTED_MODULE_5__["ListingsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AdminImagesComponent);
    return AdminImagesComponent;
}());



/***/ }),

/***/ "./src/app/admin-listings/admin-listings.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-listings/admin-listings.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@media only screen and (max-width: 736px) and (orientation:portrait) {*/\n/*  mat-header-row, mat-row {*/\n/*    width: 300%;*/\n/*  }*/\n/*}*/\n.mat-form-field {\n  font-size: 16px;\n  width: 250px;\n}\n.example-header {\n  min-height: 72px;\n  padding: 12px 26px 0;\n}\n[mat-row].remove-background {\n  background: none;\n}\n.row-link:hover {\n  background-color: rgba(0, 0, 0, .05);\n}\n.table-link {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbGlzdGluZ3MvYWRtaW4tbGlzdGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RUFBeUU7QUFDekUsOEJBQThCO0FBQzlCLG1CQUFtQjtBQUNuQixNQUFNO0FBQ04sSUFBSTtBQUVKO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1saXN0aW5ncy9hZG1pbi1saXN0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSB7Ki9cbi8qICBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdyB7Ki9cbi8qICAgIHdpZHRoOiAzMDAlOyovXG4vKiAgfSovXG4vKn0qL1xuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNzJweDtcbiAgcGFkZGluZzogMTJweCAyNnB4IDA7XG59XG5cblttYXQtcm93XS5yZW1vdmUtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5yb3ctbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cblxuLnRhYmxlLWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin-listings/admin-listings.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-listings/admin-listings.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"isUserAdmin\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"example-container mat-elevation-z8\">\n\n    <mat-table class=\"table-link\" [dataSource]=\"dataSource\" matSort>\n\n      <ng-container matColumnDef=\"id\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.listingId}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"title\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Title </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.title}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"listingType\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Listing Type </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.listingType}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"forSale\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Sale or Rent </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{getForSaleTitle(row)}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"address\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Address </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{getAddressTitle(row)}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"price\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Price </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> ${{numberWithCommas(row.price)}} </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row class=\"row-link\"\n               *matRowDef=\"let row; columns: displayedColumns;\"\n               (click)=\"onRowClick(row)\">\n      </mat-row>\n    </mat-table>\n\n    <div>\n      <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n    </div>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/admin-listings/admin-listings.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-listings/admin-listings.component.ts ***!
  \************************************************************/
/*! exports provided: AdminListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminListingsComponent", function() { return AdminListingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/admin.service */ "./src/app/core/services/admin.service.ts");





var AdminListingsComponent = /** @class */ (function () {
    function AdminListingsComponent(router, adminService) {
        this.router = router;
        this.adminService = adminService;
        this.isUserAdmin = false;
        this.isLoaded = false;
        this.displayedColumns = ['id', 'title', 'listingType', 'forSale', 'address', 'price'];
    }
    AdminListingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('loginUser'))
            return;
        this.showSpinner();
        this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
        this.isUserAdmin = this.loginUser.username === 'admin';
        this.adminService.getAllListings().subscribe(function (listings) {
            _this.listings = listings;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](listings);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.hideSpinner();
        }, function (err) {
            console.log(err);
            _this.hideSpinner();
        });
    };
    AdminListingsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AdminListingsComponent.prototype.onRowClick = function (listing) {
        console.log(listing);
        this.router.navigate(['/update-property', listing.listingId]);
    };
    AdminListingsComponent.prototype.getForSaleTitle = function (listing) {
        return listing.forSale ? 'Sale' : 'Rent';
    };
    AdminListingsComponent.prototype.getAddressTitle = function (listing) {
        return listing.street + ", " + listing.city + ", " + listing.state + ", " + listing.zipCode;
    };
    AdminListingsComponent.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    AdminListingsComponent.prototype.showSpinner = function () {
        this.isLoaded = false;
    };
    AdminListingsComponent.prototype.hideSpinner = function () {
        this.isLoaded = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AdminListingsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AdminListingsComponent.prototype, "sort", void 0);
    AdminListingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-listings',
            template: __webpack_require__(/*! ./admin-listings.component.html */ "./src/app/admin-listings/admin-listings.component.html"),
            styles: [__webpack_require__(/*! ./admin-listings.component.css */ "./src/app/admin-listings/admin-listings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], AdminListingsComponent);
    return AdminListingsComponent;
}());



/***/ }),

/***/ "./src/app/admin-users/admin-users.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@media only screen and (max-width: 736px) and (orientation:portrait) {*/\n/*  mat-header-row, mat-row {*/\n/*    width: 300%;*/\n/*  }*/\n/*}*/\n.mat-form-field {\n  font-size: 16px;\n  width: 250px;\n}\n.example-header {\n  min-height: 72px;\n  padding: 12px 26px 0;\n}\n[mat-row].remove-background {\n  background: none;\n}\n.row-link:hover {\n  background-color: rgba(0, 0, 0, .05);\n}\n.table-link {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tdXNlcnMvYWRtaW4tdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RUFBeUU7QUFDekUsOEJBQThCO0FBQzlCLG1CQUFtQjtBQUNuQixNQUFNO0FBQ04sSUFBSTtBQUVKO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi11c2Vycy9hZG1pbi11c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczNnB4KSBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSB7Ki9cbi8qICBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdyB7Ki9cbi8qICAgIHdpZHRoOiAzMDAlOyovXG4vKiAgfSovXG4vKn0qL1xuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuXG4uZXhhbXBsZS1oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA3MnB4O1xuICBwYWRkaW5nOiAxMnB4IDI2cHggMDtcbn1cblxuW21hdC1yb3ddLnJlbW92ZS1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnJvdy1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMDUpO1xufVxuXG4udGFibGUtbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin-users/admin-users.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"isUserAdmin\">\n  <div class=\"example-header\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n  </div>\n\n  <div class=\"example-container mat-elevation-z8\">\n\n    <mat-table class=\"table-link\" [dataSource]=\"dataSource\" matSort>\n\n      <ng-container matColumnDef=\"id\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.userId}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"username\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Username </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.username}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"firstName\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> First Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.firstName}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"lastName\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Last Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.lastName}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"emailAddress\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Email Address </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.emailAddress}} </mat-cell>\n      </ng-container>\n\n      <ng-container matColumnDef=\"phoneNumber\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Phone Number </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.phoneNumber}} </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row class=\"row-link\"\n               *matRowDef=\"let row; columns: displayedColumns;\"\n               (click)=\"onRowClick(row)\">\n      </mat-row>\n    </mat-table>\n\n    <div>\n      <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n    </div>\n\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/admin-users/admin-users.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-users/admin-users.component.ts ***!
  \******************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/admin.service */ "./src/app/core/services/admin.service.ts");





var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent(router, adminService) {
        this.router = router;
        this.adminService = adminService;
        this.isUserAdmin = false;
        this.isLoaded = false;
        this.displayedColumns = ['id', 'username', 'firstName', 'lastName', 'emailAddress', 'phoneNumber'];
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('loginUser'))
            return;
        this.showSpinner();
        this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
        this.isUserAdmin = this.loginUser.username === 'admin';
        this.adminService.getAllUsers().subscribe(function (users) {
            _this.users = users;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](users);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
            _this.hideSpinner();
        }, function (err) {
            console.log(err);
            _this.hideSpinner();
        });
    };
    AdminUsersComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AdminUsersComponent.prototype.onRowClick = function (user) {
        this.router.navigate(['/update-account', user.userId]);
    };
    AdminUsersComponent.prototype.showSpinner = function () {
        this.isLoaded = false;
    };
    AdminUsersComponent.prototype.hideSpinner = function () {
        this.isLoaded = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AdminUsersComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AdminUsersComponent.prototype, "sort", void 0);
    AdminUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-users',
            template: __webpack_require__(/*! ./admin-users.component.html */ "./src/app/admin-users/admin-users.component.html"),
            styles: [__webpack_require__(/*! ./admin-users.component.css */ "./src/app/admin-users/admin-users.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/advanced-search/advanced-search.component.css":
/*!***************************************************************!*\
  !*** ./src/app/advanced-search/advanced-search.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-div {\n  margin: 0 auto;\n  max-width: 1340px;\n  width: 100%;\n}\n\n.my-mat-card {\n  max-width: 1340px;\n  width: 100%;\n}\n\n.cont-form {\n  margin-right: 20px;\n  max-width: 125px;\n}\n\n.cont-price-range {\n  margin-right: 20px;\n  max-width: 80px;\n}\n\n.cont-search {\n  margin-right: 20px;\n  max-width: 210px;\n}\n\n.cont-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n/* unvisited link */\n\na:link {\n  color: rgba(0, 0, 0, 0);\n}\n\n/* visited link */\n\na:visited {\n  color: rgba(0, 0, 0, 0);\n}\n\n/* mouse over link */\n\na:hover {\n  color: rgba(0, 0, 0, 0.58);\n}\n\n/* selected link */\n\na:active {\n  color: rgba(0, 0, 0, 0);\n}\n\na {\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.cont-a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2YW5jZWQtc2VhcmNoL2FkdmFuY2VkLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQSxtQkFBbUI7O0FBQ25CO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLGlCQUFpQjs7QUFDakI7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsb0JBQW9COztBQUNwQjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZHZhbmNlZC1zZWFyY2gvYWR2YW5jZWQtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXYge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxMzQwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXktbWF0LWNhcmQge1xuICBtYXgtd2lkdGg6IDEzNDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250LWZvcm0ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogMTI1cHg7XG59XG5cbi5jb250LXByaWNlLXJhbmdlIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDgwcHg7XG59XG5cbi5jb250LXNlYXJjaCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiAyMTBweDtcbn1cblxuLmNvbnQtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLyogdW52aXNpdGVkIGxpbmsgKi9cbmE6bGluayB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4vKiB2aXNpdGVkIGxpbmsgKi9cbmE6dmlzaXRlZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cbmE6aG92ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU4KTtcbn1cblxuLyogc2VsZWN0ZWQgbGluayAqL1xuYTphY3RpdmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29udC1hIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/advanced-search/advanced-search.component.html":
/*!****************************************************************!*\
  !*** ./src/app/advanced-search/advanced-search.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-info is-fullheight-with-navbar is-bold\">\n  <div class=\"hero-body\">\n    <div class=\"main-div\">\n\n      <div>\n        <h1 class=\"cont-title\">Advanced Search</h1>\n      </div>\n\n      <mat-card class=\"my-mat-card mat-elevation-z24\">\n\n        <mat-form-field class=\"cont-form\">\n          <mat-label>Listing Type</mat-label>\n          <mat-select [(value)]=\"listingSearch.listingType\">\n            <mat-option value=\"Any\">Any</mat-option>\n            <mat-option value=\"House\">House</mat-option>\n            <mat-option value=\"Apartment\">Apartment</mat-option>\n            <mat-option value=\"Condo\">Condo</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-form\">\n          <mat-label>Sale or Rental</mat-label>\n          <mat-select [(value)]=\"listingSearch.forSale\">\n            <mat-option value=null>Both</mat-option>\n            <mat-option value=1>Sale</mat-option>\n            <mat-option value=0>Rental</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-form\">\n          <mat-label>Bedrooms</mat-label>\n          <mat-select [(value)]=\"listingSearch.numBedrooms\">\n            <mat-option value=0>Any</mat-option>\n            <mat-option value=1>1+ Bed</mat-option>\n            <mat-option value=2>2+ Beds</mat-option>\n            <mat-option value=3>3+ Beds</mat-option>\n            <mat-option value=4>4+ Beds</mat-option>\n            <mat-option value=5>5+ Beds</mat-option>\n            <mat-option value=6>6+ Beds</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-form\">\n          <mat-label>Bathrooms</mat-label>\n          <mat-select [(value)]=\"listingSearch.numBathrooms\">\n            <mat-option value=0>Any</mat-option>\n            <mat-option value=1>1+ Bath</mat-option>\n            <mat-option value=2>2+ Baths</mat-option>\n            <mat-option value=3>3+ Baths</mat-option>\n            <mat-option value=4>4+ Baths</mat-option>\n            <mat-option value=5>5+ Baths</mat-option>\n            <mat-option value=6>6+ Baths</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-form\">\n          <mat-label>Lot size</mat-label>\n          <mat-select [(value)]=\"listingSearch.lotSize\">\n            <mat-option value=0>Any</mat-option>\n            <mat-option value=1000>1000+ sqft</mat-option>\n            <mat-option value=2000>2000+ sqft</mat-option>\n            <mat-option value=3000>3000+ sqft</mat-option>\n            <mat-option value=4000>4000+ sqft</mat-option>\n            <mat-option value=5000>5000+ sqft</mat-option>\n            <mat-option value=6000>6000+ sqft</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-form\">\n          <mat-label>Accessibility</mat-label>\n          <mat-select [formControl]=\"accessibilities\" multiple (selectionChange)=\"onAccessibilityChange()\">\n            <mat-option *ngFor=\"let accessibility of accessibilityList\" [value]=\"accessibility\">{{accessibility}}</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-price-range\">\n          <input matInput placeholder=\"Min price\" [(ngModel)]=\"listingSearch.minPrice\" (keypress)=\"numberOnly($event)\" (keyup.enter)=\"onSearchClick()\">\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-price-range\">\n          <input matInput placeholder=\"Max price\" [(ngModel)]=\"listingSearch.maxPrice\" (keypress)=\"numberOnly($event)\" (keyup.enter)=\"onSearchClick()\">\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-search\">\n          <input matInput placeholder=\"Search by city...\" [(ngModel)]=\"listingSearch.city\" (keyup.enter)=\"onSearchClick()\" required>\n          <a class=\"my-search\" mat-button matSuffix color=\"primary\" (click)=\"onSearchClick()\"><mat-icon>search</mat-icon></a>\n        </mat-form-field>\n\n      </mat-card>\n\n      <div>\n        <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n      </div>\n\n    </div>\n\n  </div>\n  <app-footer></app-footer>\n</section>\n"

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
/* harmony import */ var _core_services_search_listings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/search.listings.service */ "./src/app/core/services/search.listings.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.dialog */ "./src/app/register/register.dialog.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var AdvancedSearchComponent = /** @class */ (function () {
    function AdvancedSearchComponent(router, searchService, dialog) {
        this.router = router;
        this.searchService = searchService;
        this.dialog = dialog;
        this.accessibilities = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.accessibilityList = ['Laundry', 'Hospital', 'Wheelchair', 'BART'];
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
    AdvancedSearchComponent.prototype.onAccessibilityChange = function () {
        this.listingSearch.accessibilities = this.accessibilities.value;
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
                _this.router.navigate(['/properties']);
            }, function (err) {
                _this.isLoaded = true;
                _this.openDialog('Unable to retrieve any listing based on your search. Please try again');
            });
        }
    };
    AdvancedSearchComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        return !(charCode > 31 && (charCode < 48 || charCode > 57));
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
                _this.router.navigate(['/properties']);
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
/* harmony import */ var _add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-listing/add-listing.component */ "./src/app/add-listing/add-listing.component.ts");
/* harmony import */ var _advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./advanced-search/advanced-search.component */ "./src/app/advanced-search/advanced-search.component.ts");
/* harmony import */ var _update_login_update_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update-login/update-login.component */ "./src/app/update-login/update-login.component.ts");
/* harmony import */ var _update_property_update_property_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update-property/update-property.component */ "./src/app/update-property/update-property.component.ts");
/* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/admin-users/admin-users.component.ts");
/* harmony import */ var _admin_listings_admin_listings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-listings/admin-listings.component */ "./src/app/admin-listings/admin-listings.component.ts");
/* harmony import */ var _update_account_update_account_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./update-account/update-account.component */ "./src/app/update-account/update-account.component.ts");
/* harmony import */ var _admin_images_admin_images_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-images/admin-images.component */ "./src/app/admin-images/admin-images.component.ts");


















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
        path: 'properties',
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
        path: 'update-login',
        component: _update_login_update_login_component__WEBPACK_IMPORTED_MODULE_12__["UpdateLoginComponent"]
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
        component: _add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_10__["AddListingComponent"]
    },
    {
        path: 'update-property/:listingId',
        component: _update_property_update_property_component__WEBPACK_IMPORTED_MODULE_13__["UpdatePropertyComponent"]
    },
    {
        path: 'admin-users',
        component: _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_14__["AdminUsersComponent"]
    },
    {
        path: 'admin-listings',
        component: _admin_listings_admin_listings_component__WEBPACK_IMPORTED_MODULE_15__["AdminListingsComponent"]
    },
    {
        path: 'admin-images',
        component: _admin_images_admin_images_component__WEBPACK_IMPORTED_MODULE_17__["AdminImagesComponent"]
    },
    {
        path: 'update-account/:userId',
        component: _update_account_update_account_component__WEBPACK_IMPORTED_MODULE_16__["UpdateAccountComponent"]
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
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
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
/* harmony import */ var _add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-listing/add-listing.component */ "./src/app/add-listing/add-listing.component.ts");
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
/* harmony import */ var ngx_drag_scroll_lib__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-drag-scroll/lib */ "./node_modules/ngx-drag-scroll/lib/index.js");
/* harmony import */ var _account_delete_dialog__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./account/delete.dialog */ "./src/app/account/delete.dialog.ts");
/* harmony import */ var _update_login_update_login_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./update-login/update-login.component */ "./src/app/update-login/update-login.component.ts");
/* harmony import */ var _update_property_update_property_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./update-property/update-property.component */ "./src/app/update-property/update-property.component.ts");
/* harmony import */ var _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin-users/admin-users.component */ "./src/app/admin-users/admin-users.component.ts");
/* harmony import */ var _admin_listings_admin_listings_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin-listings/admin-listings.component */ "./src/app/admin-listings/admin-listings.component.ts");
/* harmony import */ var _update_account_update_account_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./update-account/update-account.component */ "./src/app/update-account/update-account.component.ts");
/* harmony import */ var _admin_images_admin_images_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin-images/admin-images.component */ "./src/app/admin-images/admin-images.component.ts");













































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
                _account_delete_dialog__WEBPACK_IMPORTED_MODULE_36__["DeleteDialog"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _example_example_component__WEBPACK_IMPORTED_MODULE_11__["ExampleComponent"],
                _core_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_16__["SearchResultsComponent"],
                _core_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"],
                _core_components_upload_upload_component__WEBPACK_IMPORTED_MODULE_13__["UploadComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_14__["AccountComponent"],
                _add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_15__["AddListingComponent"],
                _advanced_search_advanced_search_component__WEBPACK_IMPORTED_MODULE_34__["AdvancedSearchComponent"],
                _update_login_update_login_component__WEBPACK_IMPORTED_MODULE_37__["UpdateLoginComponent"],
                _update_property_update_property_component__WEBPACK_IMPORTED_MODULE_38__["UpdatePropertyComponent"],
                _admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_39__["AdminUsersComponent"],
                _admin_listings_admin_listings_component__WEBPACK_IMPORTED_MODULE_40__["AdminListingsComponent"],
                _update_account_update_account_component__WEBPACK_IMPORTED_MODULE_41__["UpdateAccountComponent"],
                _admin_images_admin_images_component__WEBPACK_IMPORTED_MODULE_42__["AdminImagesComponent"]
            ],
            entryComponents: [
                _register_register_dialog__WEBPACK_IMPORTED_MODULE_9__["RegisterDialog"],
                _account_delete_dialog__WEBPACK_IMPORTED_MODULE_36__["DeleteDialog"]
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
                ngx_drag_scroll_lib__WEBPACK_IMPORTED_MODULE_35__["DragScrollModule"]
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

module.exports = ".my-toolbar {\n  background-color: white;\n  /* Gradient backgrounds for toolbar */\n  /*background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 100%);*/\n  /*background-image: linear-gradient(141deg, rgba(4, 198, 255, 0) 0%, rgba(35, 168, 255, 0.2) 100%);*/\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n}\n\n.home-link {\n  font-size: 17px;\n  padding-left: 10px;\n}\n\n.middle-span {\n  text-align: center;\n}\n\n.my-span {\n  float: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n/* unvisited link */\n\na:link {\n  color: rgba(0, 0, 0, 0.75);\n}\n\n/* visited link */\n\na:visited {\n  color: rgba(0, 0, 0, 0.75);\n}\n\n/* mouse over link */\n\na:hover {\n  color: rgba(0, 0, 0, 0.4);\n}\n\n/* selected link */\n\na:active {\n  color: rgba(0, 0, 0, 0.75);\n}\n\na {\n  text-decoration: none;\n  padding-right: 20px;\n  font-size: 14px;\n}\n\n.my-header-title {\n  font-size: 22px;\n  padding-left: 5px;\n}\n\n.my-mat-button {\n  color: rgba(0, 0, 0, 0.75);\n  background-color: white;\n}\n\n.my-mat-button-push-right {\n  margin-right: -25px;\n}\n\n.my-mat-button-push-slight-right {\n  margin-right: -10px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMsdUVBQXVFO0VBQ3ZFLG9HQUFvRztFQUNwRyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBRUEsbUJBQW1COztBQUNuQjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8qIEdyYWRpZW50IGJhY2tncm91bmRzIGZvciB0b29sYmFyICovXG4gIC8qYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0MWRlZywgIzA0YTZkNyAwJSwgIzIwOWNlZSAxMDAlKTsqL1xuICAvKmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDFkZWcsIHJnYmEoNCwgMTk4LCAyNTUsIDApIDAlLCByZ2JhKDM1LCAxNjgsIDI1NSwgMC4yKSAxMDAlKTsqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ob21lLWxpbmsge1xuICBmb250LXNpemU6IDE3cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLm1pZGRsZS1zcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXktc3BhbiB7XG4gIGZsb2F0OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIC8qIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cbiAgICAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi8qIHVudmlzaXRlZCBsaW5rICovXG5hOmxpbmsge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLyogdmlzaXRlZCBsaW5rICovXG5hOnZpc2l0ZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuLyogbW91c2Ugb3ZlciBsaW5rICovXG5hOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLyogc2VsZWN0ZWQgbGluayAqL1xuYTphY3RpdmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubXktaGVhZGVyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLm15LW1hdC1idXR0b24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5teS1tYXQtYnV0dG9uLXB1c2gtcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IC0yNXB4O1xufVxuXG4ubXktbWF0LWJ1dHRvbi1wdXNoLXNsaWdodC1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogLTEwcHg7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/components/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/core/components/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"!isMobileScreen\">\n  <mat-toolbar color=\"primary\" class=\"mat-elevation-z8 my-toolbar\" (window:resize)=\"onResize($event)\">\n\n    <a [routerLink]=\"'/'\"><h6 class=\"home-link\">Home</h6></a>\n\n    <!-- Centered Logo -->\n    <span class=\"my-span\">\n    <img class=\"bh-logo\" src=\"https://i.ibb.co/N1FRWdS/better-home-logo.png\" alt=\"BetterHome\" width=\"100\" height=\"100\">\n  </span>\n\n    <!-- This fills the remaining space of the current row -->\n    <span class=\"example-fill-remaining-space\"></span>\n\n    <ng-template [ngIf]=\"loginUser && isUserAdmin\">\n      <a [routerLink]=\"'/admin-users'\">Users</a>\n      <a [routerLink]=\"'/admin-listings'\">Listings</a>\n      <a [routerLink]=\"'/admin-images'\">Images</a>\n      <a mat-button class=\"my-mat-button\" color=\"primary\" [matMenuTriggerFor]=\"menu\">{{loginUser.username}}\n        <mat-icon>arrow_drop_down</mat-icon>\n      </a>\n\n      <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n        <button mat-menu-item [routerLink]=\"'/account'\">\n          <mat-icon>account_box</mat-icon>\n          <span>Account</span>\n        </button>\n        <button mat-menu-item [routerLink]=\"'/logout'\">\n          <mat-icon>close</mat-icon>\n          <span>Logout</span>\n        </button>\n      </mat-menu>\n\n    </ng-template>\n\n    <ng-template [ngIf]=\"loginUser && !isUserAdmin\">\n      <a [routerLink]=\"'/add-listing'\">Post Listing</a>\n      <a mat-button class=\"my-mat-button\" color=\"primary\" [matMenuTriggerFor]=\"menu\">{{loginUser.username}}\n        <mat-icon>arrow_drop_down</mat-icon>\n      </a>\n\n      <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n        <button mat-menu-item [routerLink]=\"'/account'\">\n          <mat-icon>account_box</mat-icon>\n          <span>Account</span>\n        </button>\n        <button mat-menu-item [routerLink]=\"'/logout'\">\n          <mat-icon>close</mat-icon>\n          <span>Logout</span>\n        </button>\n      </mat-menu>\n\n    </ng-template>\n\n    <ng-template [ngIf]=\"!loginUser\">\n      <a [routerLink]=\"'/login'\">Login</a>\n      <a [routerLink]=\"'/register'\">Register</a>\n    </ng-template>\n\n  </mat-toolbar>\n</ng-template>\n\n<ng-template [ngIf]=\"isMobileScreen\">\n  <mat-toolbar color=\"primary\" class=\"mat-elevation-z8 my-toolbar\" (window:resize)=\"onResize($event)\">\n\n    <a [routerLink]=\"'/'\"><h6 class=\"home-link\">Home</h6></a>\n\n    <!-- Centered Logo -->\n    <span class=\"my-span\">\n      <img class=\"bh-logo\" src=\"https://i.ibb.co/N1FRWdS/better-home-logo.png\" alt=\"BetterHome\" width=\"100\" height=\"100\">\n    </span>\n\n    <!-- This fills the remaining space of the current row -->\n    <span class=\"example-fill-remaining-space\"></span>\n\n    <ng-template [ngIf]=\"loginUser && isUserAdmin\">\n      <a mat-button class=\"my-mat-button\" color=\"primary\" [matMenuTriggerFor]=\"menu\">{{loginUser.username}}\n        <mat-icon>arrow_drop_down</mat-icon>\n      </a>\n\n      <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n        <button mat-menu-item [routerLink]=\"'/admin-users'\">\n          <mat-icon>accessibility_new</mat-icon>\n          <span>Users</span>\n        </button>\n        <button mat-menu-item [routerLink]=\"'/admin-listings'\">\n          <mat-icon>account_balance</mat-icon>\n          <span>Listings</span>\n        </button>\n        <button mat-menu-item [routerLink]=\"'/admin-images'\">\n          <mat-icon>photo_library</mat-icon>\n          <span>Images</span>\n        </button>\n        <button mat-menu-item [routerLink]=\"'/logout'\">\n          <mat-icon>close</mat-icon>\n          <span>Logout</span>\n        </button>\n      </mat-menu>\n\n    </ng-template>\n\n    <ng-template [ngIf]=\"loginUser && !isUserAdmin\">\n      <a mat-button class=\"my-mat-button-push-right\" color=\"primary\" [matMenuTriggerFor]=\"menu\">{{loginUser.username}}\n        <mat-icon>arrow_drop_down</mat-icon>\n      </a>\n\n      <mat-menu #menu=\"matMenu\" xPosition=\"before\">\n        <button mat-menu-item [routerLink]=\"'/account'\">\n          <mat-icon>account_box</mat-icon>\n          <span>Account</span>\n        </button>\n        <button mat-menu-item [routerLink]=\"'/add-listing'\">\n          <mat-icon>add</mat-icon>\n          <span>Post Listing</span>\n        </button>\n        <button mat-menu-item [routerLink]=\"'/logout'\">\n          <mat-icon>close</mat-icon>\n          <span>Logout</span>\n        </button>\n      </mat-menu>\n\n    </ng-template>\n\n    <ng-template [ngIf]=\"!loginUser\">\n      <a class=\"my-mat-button-push-slight-right\" [routerLink]=\"'/login'\">Login</a>\n      <a class=\"my-mat-button-push-right\" [routerLink]=\"'/register'\">Register</a>\n    </ng-template>\n\n  </mat-toolbar>\n</ng-template>\n\n"

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
        this.isUserAdmin = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('loginUser')) {
            this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
            this.isUserAdmin = this.loginUser.username === 'admin';
        }
        this.loginService.getLoginUser.subscribe(function (loginUser) {
            _this.loginUser = loginUser;
            if (_this.loginUser && !_this.isEmpty(_this.loginUser.username)) {
                _this.isUserAdmin = _this.loginUser.username === 'admin';
            }
        });
        this.isMobileScreen = (window.innerWidth <= 500);
    };
    HeaderComponent.prototype.onResize = function (event) {
        this.isMobileScreen = (event.target.innerWidth <= 500);
    };
    HeaderComponent.prototype.isEmpty = function (str) {
        return (!str || 0 === str.length);
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

module.exports = "<!--Image Uploading-->\n\n<td-file-upload #fileMultipleUpload\n                (select)=\"uploadMultipleImages($event)\"\n                accept=\".jpg, .jpeg, .png, .tif\"\n                defaultColor=\"primary\"\n                activeColor=\"primary\"\n                cancelColor=\"primary\"\n                multiple>\n  <mat-icon>file_upload</mat-icon>\n  <span>\n    {{fileMultipleUpload.value?.name || fileMultipleUpload.value?.length}}\n    <span *ngIf=\"fileMultipleUpload.value?.length\">files selected</span>\n  </span>\n  <ng-template td-file-input-label>\n    <mat-icon>attach_file</mat-icon>\n    <span>\n      Upload images\n    </span>\n  </ng-template>\n</td-file-upload>\n"

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
                this.uploadService.uploadImage(files[i], this.listingId).subscribe(function (s) {
                    console.log(s);
                }, function (err) {
                    console.log(err);
                });
            }
        }
        else {
            this.uploadService.uploadImage(files, this.listingId).subscribe(function (s) {
                console.log(s);
            }, function (err) {
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _directives_elevation_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/elevation.directive */ "./src/app/core/directives/elevation.directive.ts");











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
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _directives_elevation_directive__WEBPACK_IMPORTED_MODULE_10__["MaterialElevationDirective"]
            ],
            exports: [
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _directives_elevation_directive__WEBPACK_IMPORTED_MODULE_10__["MaterialElevationDirective"]
            ],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/directives/elevation.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/core/directives/elevation.directive.ts ***!
  \********************************************************/
/*! exports provided: MaterialElevationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialElevationDirective", function() { return MaterialElevationDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaterialElevationDirective = /** @class */ (function () {
    function MaterialElevationDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.defaultElevation = 2;
        this.raisedElevation = 14;
        this.setElevation(this.defaultElevation);
    }
    MaterialElevationDirective.prototype.ngOnChanges = function (_changes) {
        this.setElevation(this.defaultElevation);
    };
    MaterialElevationDirective.prototype.onMouseEnter = function () {
        this.setElevation(this.raisedElevation);
    };
    MaterialElevationDirective.prototype.onMouseLeave = function () {
        this.setElevation(this.defaultElevation);
    };
    MaterialElevationDirective.prototype.setElevation = function (amount) {
        var _this = this;
        var elevationPrefix = 'mat-elevation-z';
        // remove all elevation classes
        var classesToRemove = Array.from(this.element.nativeElement.classList)
            .filter(function (c) { return c.startsWith(elevationPrefix); });
        classesToRemove.forEach(function (c) {
            _this.renderer.removeClass(_this.element.nativeElement, c);
        });
        // add the given elevation class
        var newClass = "" + elevationPrefix + amount;
        this.renderer.addClass(this.element.nativeElement, newClass);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MaterialElevationDirective.prototype, "defaultElevation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MaterialElevationDirective.prototype, "raisedElevation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MaterialElevationDirective.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MaterialElevationDirective.prototype, "onMouseLeave", null);
    MaterialElevationDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appMaterialElevation]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], MaterialElevationDirective);
    return MaterialElevationDirective;
}());



/***/ }),

/***/ "./src/app/core/services/admin.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/admin.service.ts ***!
  \************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api/admin';
var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.getAllUsers = function () {
        return this.http.get(apiUrl + '/users', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AdminService.prototype.getAllListings = function () {
        return this.http.get(apiUrl + '/listings', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AdminService.prototype.getAllImages = function () {
        return this.http.get(apiUrl + '/images', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    AdminService.prototype.handleError = function (error) {
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
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AdminService);
    return AdminService;
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

/***/ "./src/app/core/services/favorites.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/favorites.service.ts ***!
  \****************************************************/
/*! exports provided: FavoritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesService", function() { return FavoritesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api/favorites';
var FavoritesService = /** @class */ (function () {
    function FavoritesService(http) {
        this.http = http;
    }
    FavoritesService.prototype.getFavorites = function (userId) {
        return this.http.get(apiUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'userId': String(userId)
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    FavoritesService.prototype.isFavorite = function (listingId, userId) {
        return this.http.get(apiUrl + ("/" + listingId), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'userId': String(userId)
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    FavoritesService.prototype.addFavorite = function (listingId, userId) {
        var body = {
            userId: userId,
            listingId: listingId
        };
        return this.http.post(apiUrl, body, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    FavoritesService.prototype.removeFavorite = function (listingId, userId) {
        return this.http.delete(apiUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'userId': String(userId),
                'listingId': String(listingId)
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    FavoritesService.prototype.handleError = function (error) {
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
    FavoritesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], FavoritesService);
    return FavoritesService;
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = '/api/listing';
var ListingsService = /** @class */ (function () {
    function ListingsService(http) {
        this.http = http;
    }
    /** CRUD function for create **/
    ListingsService.prototype.createListing = function (listing) {
        return this.http.post(apiUrl, listing, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ListingsService.prototype.getSingleListing = function (listingId) {
        return this.http.get(apiUrl + ("/" + listingId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ListingsService.prototype.updateListing = function (listing) {
        return this.http.put(apiUrl + ("/" + listing.listingId), listing, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ListingsService.prototype.getUserListings = function (userId) {
        return this.http.get(apiUrl + '/user/listings', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'userId': String(userId)
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ListingsService.prototype.deleteListing = function (listingId) {
        return this.http.delete(apiUrl + ("/" + listingId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ListingsService.prototype.deleteImage = function (imageUrl) {
        console.log(imageUrl);
        return this.http.delete(apiUrl + ("/image/" + imageUrl), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
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
    ListingsService.cloudStorage = 'https://storage.googleapis.com/better-home-234220';
    ListingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ListingsService);
    return ListingsService;
}());

var Listing = /** @class */ (function () {
    function Listing(listingId, title, listingType, price, city, state, zipCode, street, forSale, numBedrooms, numBathrooms, imageUrls, laundry, hospitalAccess, BARTAccess, wheelchairAccess, lotSize, description, user, isFavorite) {
        if (listingId === void 0) { listingId = null; }
        if (title === void 0) { title = ''; }
        if (listingType === void 0) { listingType = ''; }
        if (price === void 0) { price = null; }
        if (city === void 0) { city = ''; }
        if (state === void 0) { state = ''; }
        if (zipCode === void 0) { zipCode = null; }
        if (street === void 0) { street = ''; }
        if (forSale === void 0) { forSale = null; }
        if (numBedrooms === void 0) { numBedrooms = null; }
        if (numBathrooms === void 0) { numBathrooms = null; }
        if (imageUrls === void 0) { imageUrls = []; }
        if (laundry === void 0) { laundry = false; }
        if (hospitalAccess === void 0) { hospitalAccess = false; }
        if (BARTAccess === void 0) { BARTAccess = false; }
        if (wheelchairAccess === void 0) { wheelchairAccess = false; }
        if (lotSize === void 0) { lotSize = null; }
        if (description === void 0) { description = ''; }
        if (user === void 0) { user = null; }
        if (isFavorite === void 0) { isFavorite = false; }
        this.listingId = listingId;
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
        this.imageUrls = imageUrls;
        this.laundry = laundry;
        this.hospitalAccess = hospitalAccess;
        this.BARTAccess = BARTAccess;
        this.wheelchairAccess = wheelchairAccess;
        this.lotSize = lotSize;
        this.description = description;
        this.user = user;
        this.isFavorite = isFavorite;
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
    /*** Update User ***/
    LoginService.prototype.updateUser = function (user) {
        return this.http.put(apiUrl, user, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    LoginService.prototype.getSingleUser = function (userId) {
        return this.http.get(apiUrl + ("/" + userId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    LoginService.prototype.deleteUser = function (userId) {
        return this.http.delete(apiUrl + ("/" + userId), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
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
  !*** ./src/app/core/services/search.listings.service.ts ***!
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var apiUrl = '/api/upload';
var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.uploadImage = function (file, listingId) {
        if (listingId === void 0) { listingId = 0; }
        var formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(apiUrl, formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'listingId': String(listingId)
            })
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    UploadService.prototype.handleError = function (error) {
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])('Something bad happened; please try again later.');
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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

module.exports = ".main-div {\n  margin: 0 auto;\n  max-width: 500px;\n  width: 100%;\n}\n\n.my-mat-card {\n  max-width: 500px;\n  width: 100%;\n}\n\n.cont-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.cont-input {\n  width: 100%;\n}\n\n/* unvisited link */\n\na:link {\n  color: rgba(0, 0, 0, 0);\n}\n\n/* visited link */\n\na:visited {\n  color: rgba(0, 0, 0, 0);\n}\n\n/* mouse over link */\n\na:hover {\n  color: rgba(0, 0, 0, 0.58);\n}\n\n/* selected link */\n\na:active {\n  color: rgba(0, 0, 0, 0);\n}\n\na {\n  text-decoration: none;\n  font-size: 14px;\n}\n\n.cont-a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 14px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsbUJBQW1COztBQUNuQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLG9CQUFvQjs7QUFDcEI7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXYge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5teS1tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xuYTpsaW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi8qIHZpc2l0ZWQgbGluayAqL1xuYTp2aXNpdGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTgpO1xufVxuXG4vKiBzZWxlY3RlZCBsaW5rICovXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jb250LWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-info is-fullheight-with-navbar is-bold\">\n  <div class=\"hero-body\">\n    <div class=\"main-div\">\n\n      <div>\n        <h1 class=\"cont-title\">Search Listings</h1>\n      </div>\n\n      <mat-card class=\"my-mat-card mat-elevation-z24\">\n        <mat-form-field class=\"cont-input\">\n          <input matInput placeholder=\"Search by city...\" [(ngModel)]=\"listingSearch.city\" (keyup.enter)=\"onSearchClick()\" required>\n          <a class=\"my-search\" mat-button matSuffix color=\"primary\" (click)=\"onSearchClick()\"><mat-icon>search</mat-icon></a>\n        </mat-form-field>\n      </mat-card>\n\n      <div>\n        <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n      </div>\n\n      <div class=\"cont-a\">\n        <a [routerLink]=\"'/advanced-search'\"><h6>Advanced Search</h6></a>\n      </div>\n\n    </div>\n\n  </div>\n  <app-footer></app-footer>\n</section>\n"

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
/* harmony import */ var _core_services_search_listings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/search.listings.service */ "./src/app/core/services/search.listings.service.ts");
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
            this.listingSearch = {
                city: this.listingSearch.city
            };
            this.isLoaded = false;
            this.searchService.getSearchListings(this.listingSearch)
                .subscribe(function (listings) {
                _this.isLoaded = true;
                _this.searchService.saveSearchListings(listings);
                _this.router.navigate(['/properties']);
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
                _this.router.navigate(['/properties']);
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

module.exports = ".main-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  max-width: 350px;\n  width: 100%;\n}\n\n.my-mat-card {\n  max-width: 350px;\n  width: 100%;\n}\n\n.my-button {\n  margin-right: 80px;\n  margin-left: 80px;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm15LW1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5teS1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xufVxuXG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-toolbar>-->\n<!--<span>Login</span>-->\n<!--</mat-toolbar>-->\n<section class=\"hero is-info is-fullheight-with-navbar is-bold\">\n  <div class=\"hero-body\">\n    <div class=\"main-div\">\n      <mat-card class=\"my-mat-card mat-elevation-z20\">\n        <mat-card-title class=\"main-div\">Login</mat-card-title>\n        <mat-card-content>\n\n          <!--FORM FIELDS HERE-->\n          <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <mat-form-field class=\"cont-input\">\n              <mat-label>Username</mat-label>\n              <input matInput placeholder=\"Username\" [(ngModel)]=\"user.username\" name=\"username\" required (keyup.enter)=\"onSubmit()\">\n            </mat-form-field>\n            <mat-form-field class=\"cont-input\">\n              <mat-label>Password</mat-label>\n              <input matInput type=\"password\" placeholder=\"Password\" [(ngModel)]=\"user.password\" name=\"password\" required (keyup.enter)=\"onSubmit()\">\n            </mat-form-field>\n          </div>\n\n        </mat-card-content>\n        <mat-card-actions>\n\n          <div class=\"my-button\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n            <!-- LOGIN BUTTON -->\n            <button mat-raised-button (click)=\"onSubmit()\" color=\"primary\">Login</button>\n          </div>\n\n          <div>\n          <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n          </div>\n\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</section>\n"

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

module.exports = "<mat-list>\n\n  <h1 mat-subheader>Listings</h1>\n  <mat-divider></mat-divider>\n  <mat-list-item *ngFor=\"let listing of listings\">\n    <p mat-line>title: {{listing.title}}</p>\n    <p mat-line>city: {{listing.city}}</p>\n    <p mat-line>street: {{listing.street}}</p>\n    <p mat-line>bedrooms: {{listing.numBedrooms}}</p>\n    <p mat-line>bathrooms: {{listing.numBathrooms}}</p>\n    <mat-divider></mat-divider>\n  </mat-list-item>\n\n</mat-list>\n"

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
/* harmony import */ var _core_services_search_listings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/search.listings.service */ "./src/app/core/services/search.listings.service.ts");



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

/***/ "./src/app/update-account/update-account.component.css":
/*!*************************************************************!*\
  !*** ./src/app/update-account/update-account.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  max-width: 350px;\n  width: 100%;\n}\n\n.my-mat-card {\n  max-width: 350px;\n  width: 100%;\n}\n\n.my-button {\n  margin-right: 80px;\n  margin-left: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLWFjY291bnQvdXBkYXRlLWFjY291bnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91cGRhdGUtYWNjb3VudC91cGRhdGUtYWNjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm15LW1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5teS1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/update-account/update-account.component.html":
/*!**************************************************************!*\
  !*** ./src/app/update-account/update-account.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"editUser && isUserAdmin\">\n  <section class=\"hero is-info is-fullheight-with-navbar is-bold\">\n    <div class=\"hero-body\">\n      <div class=\"main-div\">\n        <mat-card class=\"my-mat-card mat-elevation-z20\">\n          <mat-card-title class=\"main-div\">Update Account</mat-card-title>\n          <mat-card-content>\n\n            <!--FORM FIELDS HERE-->\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n              <mat-form-field class=\"cont-input\">\n                <mat-label>First Name</mat-label>\n                <input matInput placeholder=\"First name\" [(ngModel)]=\"editUser.firstName\" name=\"firstName\"><br>\n              </mat-form-field>\n              <mat-form-field class=\"cont-input\">\n                <mat-label>Last Name</mat-label>\n                <input matInput placeholder=\"Last name\" [(ngModel)]=\"editUser.lastName\" name=\"lastName\">\n              </mat-form-field>\n              <mat-form-field class=\"cont-input\">\n                <mat-label>Username</mat-label>\n                <input matInput placeholder=\"Username\" [(ngModel)]=\"editUser.username\" name=\"username\">\n              </mat-form-field>\n              <mat-form-field class=\"cont-input\">\n                <mat-label>New Password</mat-label>\n                <input matInput type=\"password\" placeholder=\"New Password\" [(ngModel)]=\"newPassword\" name=\"new-password\">\n              </mat-form-field>\n              <mat-form-field class=\"cont-input\">\n                <mat-label>Email Address</mat-label>\n                <input matInput placeholder=\"Email address\" [(ngModel)]=\"editUser.emailAddress\" name=\"emailAddress\">\n              </mat-form-field>\n              <mat-form-field class=\"cont-input\">\n                <mat-label>Phone Number</mat-label>\n                <input matInput placeholder=\"Phone number\" [(ngModel)]=\"editUser.phoneNumber\" name=\"phoneNumber\">\n              </mat-form-field>\n            </div>\n\n          </mat-card-content>\n          <mat-card-actions>\n\n            <div class=\"my-button\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n              <button mat-raised-button (click)=\"onUpdateClick()\" color=\"primary\">Update</button>\n              <button mat-raised-button (click)=\"onDeleteClick()\" color=\"warn\">Delete</button>\n            </div>\n\n            <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </section>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/update-account/update-account.component.ts":
/*!************************************************************!*\
  !*** ./src/app/update-account/update-account.component.ts ***!
  \************************************************************/
/*! exports provided: UpdateAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAccountComponent", function() { return UpdateAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/login.service */ "./src/app/core/services/login.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.dialog */ "./src/app/register/register.dialog.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _account_delete_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../account/delete.dialog */ "./src/app/account/delete.dialog.ts");








var UpdateAccountComponent = /** @class */ (function () {
    function UpdateAccountComponent(route, router, loginService, dialog) {
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.dialog = dialog;
        this.newPassword = '';
        this.isLoaded = false;
    }
    UpdateAccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('loginUser'))
            return;
        this.showSpinner();
        this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
        this.isUserAdmin = this.loginUser.username === 'admin';
        this.route.paramMap.subscribe(function (params) {
            _this.userId = Number(params.get('userId'));
            _this.loginService.getSingleUser(_this.userId).subscribe(function (editUser) {
                _this.editUser = editUser;
                _this.hideSpinner();
            }, function (err) {
                console.log(err);
            });
        });
    };
    UpdateAccountComponent.prototype.onUpdateClick = function () {
        var _this = this;
        this.showSpinner();
        this.loginService.updateUser({
            userId: this.userId,
            firstName: this.editUser.firstName,
            lastName: this.editUser.lastName,
            username: this.editUser.username,
            password: !this.isEmpty(this.newPassword) ? this.newPassword : '',
            emailAddress: this.editUser.emailAddress,
            phoneNumber: this.editUser.phoneNumber
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.hideSpinner();
            _this.openDialog('Update account info successful', true);
        }, function (error) {
            console.log(error);
            _this.hideSpinner();
        });
    };
    UpdateAccountComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.showSpinner();
        this.loginService.deleteUser(user.userId).subscribe(function (result) {
            _this.hideSpinner();
            _this.openDialog('Successfully deleted account', true);
        }, function (err) {
            _this.hideSpinner();
            _this.openDialog('Unable to delete account');
            console.log(err);
        });
    };
    UpdateAccountComponent.prototype.onDeleteClick = function () {
        this.openDeleteUserDialog(this.editUser, 'Are you sure you want to delete this user?');
    };
    UpdateAccountComponent.prototype.showSpinner = function () {
        this.isLoaded = false;
    };
    UpdateAccountComponent.prototype.hideSpinner = function () {
        this.isLoaded = true;
    };
    UpdateAccountComponent.prototype.isEmpty = function (str) {
        return (!str || 0 === str.length);
    };
    UpdateAccountComponent.prototype.openDialog = function (message, subscribe) {
        var _this = this;
        if (subscribe === void 0) { subscribe = false; }
        var dialogRef = this.dialog.open(_register_register_dialog__WEBPACK_IMPORTED_MODULE_5__["RegisterDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        if (subscribe) {
            dialogRef.afterClosed().subscribe(function (result) {
                _this.router.navigate(['/admin-users']);
            });
        }
    };
    UpdateAccountComponent.prototype.openDeleteUserDialog = function (user, message) {
        var _this = this;
        var dialog = this.dialog.open(_account_delete_dialog__WEBPACK_IMPORTED_MODULE_7__["DeleteDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        dialog.afterClosed().subscribe(function (result) {
            if (result == 'delete') {
                _this.deleteUser(user);
            }
        });
    };
    UpdateAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-account',
            template: __webpack_require__(/*! ./update-account.component.html */ "./src/app/update-account/update-account.component.html"),
            styles: [__webpack_require__(/*! ./update-account.component.css */ "./src/app/update-account/update-account.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], UpdateAccountComponent);
    return UpdateAccountComponent;
}());



/***/ }),

/***/ "./src/app/update-login/update-login.component.css":
/*!*********************************************************!*\
  !*** ./src/app/update-login/update-login.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  max-width: 350px;\n  width: 100%;\n}\n\n.my-mat-card {\n  max-width: 350px;\n  width: 100%;\n}\n\n.my-button {\n  margin-right: 80px;\n  margin-left: 80px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLWxvZ2luL3VwZGF0ZS1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1sb2dpbi91cGRhdGUtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAzNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5teS1tYXQtY2FyZCB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubXktYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xuICBtYXJnaW4tbGVmdDogODBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/update-login/update-login.component.html":
/*!**********************************************************!*\
  !*** ./src/app/update-login/update-login.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"loginUser\">\n  <section class=\"hero is-info is-fullheight-with-navbar is-bold\">\n    <div class=\"hero-body\">\n      <div class=\"main-div\">\n        <mat-card class=\"my-mat-card mat-elevation-z20\">\n          <mat-card-title class=\"main-div\">Update Account</mat-card-title>\n          <mat-card-content>\n\n            <!--FORM FIELDS HERE-->\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\">\n              <mat-form-field class=\"cont-input\">\n                <mat-label>First Name</mat-label>\n                <input matInput placeholder=\"First name\" [(ngModel)]=\"loginUser.firstName\" name=\"firstName\"><br>\n              </mat-form-field>\n              <mat-form-field class=\"cont-input\">\n                <mat-label>Last Name</mat-label>\n                <input matInput placeholder=\"Last name\" [(ngModel)]=\"loginUser.lastName\" name=\"lastName\">\n              </mat-form-field>\n              <mat-form-field class=\"cont-input\">\n                <mat-label>Username</mat-label>\n                <input matInput placeholder=\"Username\" [(ngModel)]=\"loginUser.username\" name=\"username\">\n              </mat-form-field>\n              <mat-form-field class=\"cont-input\">\n                <mat-label>Old Password</mat-label>\n                <input matInput type=\"password\" placeholder=\"Old Password\" [(ngModel)]=\"oldPassword\" name=\"old-password\" required>\n              </mat-form-field>\n              <mat-form-field class=\"cont-input\">\n                <mat-label>New Password</mat-label>\n                <input matInput type=\"password\" placeholder=\"New Password\" [(ngModel)]=\"newPassword\" name=\"new-password\">\n              </mat-form-field>\n              <mat-form-field class=\"cont-input\">\n                <mat-label>Email Address</mat-label>\n                <input matInput placeholder=\"Email address\" [(ngModel)]=\"loginUser.emailAddress\" name=\"emailAddress\">\n              </mat-form-field>\n              <mat-form-field class=\"cont-input\">\n                <mat-label>Phone Number</mat-label>\n                <input matInput placeholder=\"Phone number\" [(ngModel)]=\"loginUser.phoneNumber\" name=\"phoneNumber\">\n              </mat-form-field>\n            </div>\n\n          </mat-card-content>\n          <mat-card-actions>\n\n            <!-- REGISTER BUTTON -->\n            <div class=\"my-button\" fxLayout=\"column\" fxLayoutAlign=\"center\">\n              <button mat-raised-button (click)=\"onSubmit()\" color=\"primary\">Update</button>\n            </div>\n\n            <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n\n          </mat-card-actions>\n        </mat-card>\n      </div>\n    </div>\n  </section>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/update-login/update-login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/update-login/update-login.component.ts ***!
  \********************************************************/
/*! exports provided: UpdateLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLoginComponent", function() { return UpdateLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/register.service */ "./src/app/core/services/register.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../register/register.dialog */ "./src/app/register/register.dialog.ts");
/* harmony import */ var _core_services_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/login.service */ "./src/app/core/services/login.service.ts");








var UpdateLoginComponent = /** @class */ (function () {
    function UpdateLoginComponent(router, loginService, dialog) {
        this.router = router;
        this.loginService = loginService;
        this.dialog = dialog;
        this.user = {
            username: "",
            password: ""
        };
        this.isLoaded = true;
    }
    UpdateLoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('loginUser')) {
            this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
            this.oldUsername = this.loginUser.username;
        }
        this.registerUser = new _core_services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterUser"]();
    };
    UpdateLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.isDataProvided()) {
            this.isLoaded = false;
            this.loginService.loginUser({
                username: this.oldUsername,
                password: this.oldPassword
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                .subscribe(function (result) {
                _this.loginService.updateUser({
                    userId: result.userId,
                    firstName: _this.loginUser.firstName,
                    lastName: _this.loginUser.lastName,
                    username: _this.loginUser.username,
                    password: !_this.isEmpty(_this.newPassword) ? _this.newPassword : '',
                    emailAddress: _this.loginUser.emailAddress,
                    phoneNumber: _this.loginUser.phoneNumber
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
                    .subscribe(function (data) {
                    _this.isLoaded = true;
                    _this.loginService.emitLoginEvent(_this.loginUser);
                    _this.openDialog('Update login info successful!', true);
                }, function (error) {
                    console.log(error);
                    _this.isLoaded = true;
                });
            }, function (err) {
                console.log(err);
                _this.isLoaded = true;
                _this.openDialog('Unable to verify credentials. Old password is incorrect. Please try again');
            });
        }
        else {
            this.openDialog('Please enter old password for validating credentials');
        }
    };
    UpdateLoginComponent.prototype.isDataProvided = function () {
        return (!this.isEmpty(this.loginUser.username) &&
            !this.isEmpty(this.oldPassword) &&
            !this.isEmpty(this.loginUser.firstName) &&
            !this.isEmpty(this.loginUser.lastName) &&
            !this.isEmpty(this.loginUser.emailAddress) &&
            !this.isEmpty(this.loginUser.phoneNumber));
    };
    UpdateLoginComponent.prototype.isEmpty = function (str) {
        return (!str || 0 === str.length);
    };
    UpdateLoginComponent.prototype.openDialog = function (message, subscribe) {
        var _this = this;
        if (subscribe === void 0) { subscribe = false; }
        var dialogRef = this.dialog.open(_register_register_dialog__WEBPACK_IMPORTED_MODULE_6__["RegisterDialog"], {
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
    UpdateLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-login',
            template: __webpack_require__(/*! ./update-login.component.html */ "./src/app/update-login/update-login.component.html"),
            styles: [__webpack_require__(/*! ./update-login.component.css */ "./src/app/update-login/update-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], UpdateLoginComponent);
    return UpdateLoginComponent;
}());



/***/ }),

/***/ "./src/app/update-property/update-property.component.css":
/*!***************************************************************!*\
  !*** ./src/app/update-property/update-property.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container > * {\n  margin: 0 auto;\n  max-width: 800px;\n  width: 100%;\n  padding-bottom: 10px;\n}\n\nmat-form-field {\n  width: 100%;\n}\n\n.form-field-div {\n  display: flex;\n  justify-content: center;\n}\n\n.post-listing-header {\n  padding-top: 20px;\n  padding-bottom: 8px;\n}\n\n.cont-input {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.cont-form {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.create-listing-btn {\n  height: 50px;\n  max-width: 800px;\n  width: 100%;\n  margin: 10px auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLXByb3BlcnR5L3VwZGF0ZS1wcm9wZXJ0eS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91cGRhdGUtcHJvcGVydHkvdXBkYXRlLXByb3BlcnR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogODAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZmllbGQtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wb3N0LWxpc3RpbmctaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5jb250LWlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29udC1mb3JtIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY3JlYXRlLWxpc3RpbmctYnRuIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXgtd2lkdGg6IDgwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/update-property/update-property.component.html":
/*!****************************************************************!*\
  !*** ./src/app/update-property/update-property.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"(loginUser && listing && listingBelongsToUser) || (isUserAdmin)\">\n\n  <ng-template [ngIf]=\"isFullScreen\">\n    <div class=\"container example-container\" (window:resize)=\"onResize($event)\">\n      <h2 class=\"post-listing-header\">Update Listing</h2>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Title</mat-label>\n        <input matInput placeholder=\"Title\" [(ngModel)]=\"listing.title\" required>\n      </mat-form-field>\n\n      <div class=\"form-field-div\">\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Listing Type</mat-label>\n          <mat-select placeholder=\"Listing Type\" [(value)]=\"listing.listingType\" required>\n            <mat-option value=\"House\">House</mat-option>\n            <mat-option value=\"Apartment\">Apartment</mat-option>\n            <mat-option value=\"Condo\">Condo</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Sale or Rent</mat-label>\n          <mat-select placeholder=\"Sale or Rent\" [(ngModel)]=\"listing.forSale\" required>\n            <mat-option [value]=1>Sale</mat-option>\n            <mat-option [value]=0>Rent</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-field-div\">\n        <mat-form-field class=\"cont-form\">\n          <mat-label>Bedrooms</mat-label>\n          <mat-select [(ngModel)]=\"listing.numBedrooms\" required>\n            <mat-option [value]=1>1 Bed</mat-option>\n            <mat-option [value]=2>2 Beds</mat-option>\n            <mat-option [value]=3>3 Beds</mat-option>\n            <mat-option [value]=4>4 Beds</mat-option>\n            <mat-option [value]=5>5 Beds</mat-option>\n            <mat-option [value]=6>6 Beds</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-form\">\n          <mat-label>Bathrooms</mat-label>\n          <mat-select [(ngModel)]=\"listing.numBathrooms\" required>\n            <mat-option [value]=1>1 Bath</mat-option>\n            <mat-option [value]=2>2 Baths</mat-option>\n            <mat-option [value]=3>3 Baths</mat-option>\n            <mat-option [value]=4>4 Baths</mat-option>\n            <mat-option [value]=5>5 Baths</mat-option>\n            <mat-option [value]=6>6 Baths</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-field-div\">\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Street</mat-label>\n          <input matInput placeholder=\"Street\" [(ngModel)]=\"listing.street\" required>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>City</mat-label>\n          <input matInput placeholder=\"City\" [(ngModel)]=\"listing.city\" required>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>State</mat-label>\n          <input matInput placeholder=\"State\" [(ngModel)]=\"listing.state\" required>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Zip code</mat-label>\n          <input matInput placeholder=\"Zip code\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.zipCode\" required>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-field-div\">\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Price</mat-label>\n          <input matInput placeholder=\"Price\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.price\" required>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Lot Size</mat-label>\n          <input matInput placeholder=\"Lot Size\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.lotSize\" required>\n        </mat-form-field>\n      </div>\n\n      <div class=\"form-field-div\">\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Hospital Access</mat-label>\n          <mat-select placeholder=\"Hospital Access\" [(ngModel)]=\"listing.hospitalAccess\">\n            <mat-option [value]=1>Yes</mat-option>\n            <mat-option [value]=0>No</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Bart Access</mat-label>\n          <mat-select placeholder=\"Bart Access\" [(ngModel)]=\"listing.BARTAccess\">\n            <mat-option [value]=1>Yes</mat-option>\n            <mat-option [value]=0>No</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Wheelchair Access</mat-label>\n          <mat-select placeholder=\"Wheelchair Access\" [(ngModel)]=\"listing.wheelchairAccess\">\n            <mat-option [value]=1>Yes</mat-option>\n            <mat-option [value]=0>No</mat-option>\n          </mat-select>\n        </mat-form-field>\n\n        <mat-form-field class=\"cont-input\">\n          <mat-label>Laundry Access</mat-label>\n          <mat-select placeholder=\"Laundry Access\" [(ngModel)]=\"listing.laundry\">\n            <mat-option [value]=1>Yes</mat-option>\n            <mat-option [value]=0>No</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Description</mat-label>\n        <textarea matInput placeholder=\"Description\" [(ngModel)]=\"listing.description\" required></textarea>\n      </mat-form-field>\n\n      <div class=\"my-button\" fxLayout=\"row\" fxLayoutAlign=\"center\" fxLayoutGap=\"12px\" fxLayoutGap.xs=\"0\">\n        <button mat-raised-button (click)=\"onUpdateClick()\" color=\"primary\">Update</button>\n        <button mat-raised-button (click)=\"onDeleteClick()\" color=\"warn\">Delete</button>\n      </div>\n\n      <div>\n        <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n      </div>\n\n    </div>\n  </ng-template>\n\n  <ng-template [ngIf]=\"!isFullScreen\">\n    <div class=\"container example-container\" (window:resize)=\"onResize($event)\">\n      <h2 class=\"post-listing-header\">Update Listing</h2>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Title</mat-label>\n        <input matInput placeholder=\"Title\" [(ngModel)]=\"listing.title\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Listing Type</mat-label>\n        <mat-select placeholder=\"Listing Type\" [(value)]=\"listing.listingType\" required>\n          <mat-option value=\"House\">House</mat-option>\n          <mat-option value=\"Apartment\">Apartment</mat-option>\n          <mat-option value=\"Condo\">Condo</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Sale or Rent</mat-label>\n        <mat-select placeholder=\"Sale or Rent\" [(ngModel)]=\"listing.forSale\" required>\n          <mat-option [value]=1>Sale</mat-option>\n          <mat-option [value]=0>Rent</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-form\">\n        <mat-label>Bedrooms</mat-label>\n        <mat-select [(ngModel)]=\"listing.numBedrooms\" required>\n          <mat-option [value]=1>1 Bed</mat-option>\n          <mat-option [value]=2>2 Beds</mat-option>\n          <mat-option [value]=3>3 Beds</mat-option>\n          <mat-option [value]=4>4 Beds</mat-option>\n          <mat-option [value]=5>5 Beds</mat-option>\n          <mat-option [value]=6>6 Beds</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-form\">\n        <mat-label>Bathrooms</mat-label>\n        <mat-select [(ngModel)]=\"listing.numBathrooms\" required>\n          <mat-option [value]=1>1 Bath</mat-option>\n          <mat-option [value]=2>2 Baths</mat-option>\n          <mat-option [value]=3>3 Baths</mat-option>\n          <mat-option [value]=4>4 Baths</mat-option>\n          <mat-option [value]=5>5 Baths</mat-option>\n          <mat-option [value]=6>6 Baths</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Street</mat-label>\n        <input matInput placeholder=\"Street\" [(ngModel)]=\"listing.street\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>City</mat-label>\n        <input matInput placeholder=\"City\" [(ngModel)]=\"listing.city\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>State</mat-label>\n        <input matInput placeholder=\"State\" [(ngModel)]=\"listing.state\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Zip code</mat-label>\n        <input matInput placeholder=\"Zip code\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.zipCode\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Price</mat-label>\n        <input matInput placeholder=\"Price\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.price\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Lot Size</mat-label>\n        <input matInput placeholder=\"Lot Size\" (keypress)=\"numberOnly($event)\" [(ngModel)]=\"listing.lotSize\" required>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Hospital Access</mat-label>\n        <mat-select placeholder=\"Hospital Access\" [(ngModel)]=\"listing.hospitalAccess\">\n          <mat-option [value]=1>Yes</mat-option>\n          <mat-option [value]=0>No</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Bart Access</mat-label>\n        <mat-select placeholder=\"Bart Access\" [(ngModel)]=\"listing.BARTAccess\">\n          <mat-option [value]=1>Yes</mat-option>\n          <mat-option [value]=0>No</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Wheelchair Access</mat-label>\n        <mat-select placeholder=\"Wheelchair Access\" [(ngModel)]=\"listing.wheelchairAccess\">\n          <mat-option [value]=1>Yes</mat-option>\n          <mat-option [value]=0>No</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Laundry Access</mat-label>\n        <mat-select placeholder=\"Laundry Access\" [(ngModel)]=\"listing.laundry\">\n          <mat-option [value]=1>Yes</mat-option>\n          <mat-option [value]=0>No</mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      <mat-form-field class=\"cont-input\">\n        <mat-label>Description</mat-label>\n        <textarea matInput placeholder=\"Description\" [(ngModel)]=\"listing.description\" required></textarea>\n      </mat-form-field>\n\n      <div class=\"my-button\" fxLayout=\"row\" fxLayoutAlign=\"center\">\n        <button mat-raised-button (click)=\"onUpdateClick()\" color=\"primary\">Update</button>\n        <button mat-raised-button (click)=\"onDeleteClick()\" color=\"warn\">Delete</button>\n      </div>\n\n      <div>\n        <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n      </div>\n\n    </div>\n  </ng-template>\n\n</ng-template>\n"

/***/ }),

/***/ "./src/app/update-property/update-property.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/update-property/update-property.component.ts ***!
  \**************************************************************/
/*! exports provided: UpdatePropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePropertyComponent", function() { return UpdatePropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/listings.service */ "./src/app/core/services/listings.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _register_register_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../register/register.dialog */ "./src/app/register/register.dialog.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _account_delete_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../account/delete.dialog */ "./src/app/account/delete.dialog.ts");








var UpdatePropertyComponent = /** @class */ (function () {
    function UpdatePropertyComponent(router, route, listingsService, dialog) {
        this.router = router;
        this.route = route;
        this.listingsService = listingsService;
        this.dialog = dialog;
        this.isLoaded = true;
        this.listingBelongsToUser = false;
    }
    UpdatePropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('loginUser'))
            return;
        this.showSpinner();
        this.loginUser = JSON.parse(localStorage.getItem('loginUser'));
        this.isUserAdmin = this.loginUser.username === 'admin';
        this.route.paramMap.subscribe(function (params) {
            var listingId = Number(params.get('listingId'));
            _this.listingsService.getSingleListing(listingId).subscribe(function (listing) {
                console.log(listing);
                _this.listingBelongsToUser = listing.user.userId === _this.loginUser.userId;
                _this.listing = listing;
                _this.hideSpinner();
            }, function (err) {
                console.log(err);
                _this.hideSpinner();
            });
        });
        this.isFullScreen = (window.innerWidth >= 1000);
    };
    UpdatePropertyComponent.prototype.onResize = function (event) {
        this.isFullScreen = (event.target.innerWidth >= 1000);
    };
    UpdatePropertyComponent.prototype.onUpdateClick = function () {
        var _this = this;
        console.log(this.listing);
        if (!this.isDataProvided()) {
            this.openDialog('Please enter valid input for all required fields', false);
            return;
        }
        this.showSpinner();
        this.replaceDoubleQuotes();
        this.listingsService.updateListing(this.listing)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (result) {
            _this.hideSpinner();
            _this.openDialog('Successfully update listing!', true);
        }, function (err) {
            console.log(err);
            _this.hideSpinner();
            _this.openDialog('Unable to update listing. Please try again', false);
        });
    };
    UpdatePropertyComponent.prototype.onDeleteClick = function () {
        this.openDeleteListingDialog(this.listing, 'Are you sure you want to delete this listing?');
    };
    UpdatePropertyComponent.prototype.deleteListing = function (listing) {
        var _this = this;
        this.listingsService.deleteListing(listing.listingId).subscribe(function (result) {
            _this.openDialog('Successfully deleted listing', true);
        }, function (err) {
            console.log(err);
            _this.openDialog('Unable to delete listing', false);
        });
    };
    UpdatePropertyComponent.prototype.replaceDoubleQuotes = function () {
        this.listing.title = this.listing.title.replace(/"/g, "'");
        this.listing.description = this.listing.description.replace(/"/g, "'");
    };
    UpdatePropertyComponent.prototype.showSpinner = function () {
        this.isLoaded = false;
    };
    UpdatePropertyComponent.prototype.hideSpinner = function () {
        this.isLoaded = true;
    };
    UpdatePropertyComponent.prototype.numberOnly = function (event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        return !(charCode > 31 && (charCode < 48 || charCode > 57));
    };
    UpdatePropertyComponent.prototype.isDataProvided = function () {
        return (!this.isEmptyStr(this.listing.title) &&
            !this.isEmptyStr(this.listing.listingType) &&
            !this.isEmptyNum(this.listing.price) &&
            !this.isEmptyNum(this.listing.lotSize) &&
            !this.isEmptyStr(this.listing.city) &&
            !this.isEmptyNum(this.listing.zipCode) &&
            !this.isEmptyStr(this.listing.street) &&
            !this.isEmptyStr(this.listing.state) &&
            !this.isEmptyNum(this.listing.numBedrooms) &&
            !this.isEmptyNum(this.listing.numBathrooms));
    };
    UpdatePropertyComponent.prototype.isEmptyStr = function (str) {
        return (!str || 0 == str.length);
    };
    UpdatePropertyComponent.prototype.isEmptyNum = function (num) {
        return (!num || 0 == num);
    };
    UpdatePropertyComponent.prototype.isEmptyBool = function (bool) {
        return (!bool);
    };
    UpdatePropertyComponent.prototype.openDialog = function (message, subscribe) {
        var _this = this;
        var dialogRef = this.dialog.open(_register_register_dialog__WEBPACK_IMPORTED_MODULE_5__["RegisterDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        if (subscribe) {
            dialogRef.afterClosed().subscribe(function (result) {
                if (_this.isUserAdmin) {
                    _this.router.navigate(['/admin-listings']);
                }
                else {
                    _this.router.navigate(['/account']);
                }
            });
        }
    };
    UpdatePropertyComponent.prototype.openDeleteListingDialog = function (listing, message) {
        var _this = this;
        var dialog = this.dialog.open(_account_delete_dialog__WEBPACK_IMPORTED_MODULE_7__["DeleteDialog"], {
            width: '250px',
            data: {
                message: message
            }
        });
        dialog.afterClosed().subscribe(function (result) {
            if (result == 'delete') {
                _this.deleteListing(listing);
            }
        });
    };
    UpdatePropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-update',
            template: __webpack_require__(/*! ./update-property.component.html */ "./src/app/update-property/update-property.component.html"),
            styles: [__webpack_require__(/*! ./update-property.component.css */ "./src/app/update-property/update-property.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__["ListingsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], UpdatePropertyComponent);
    return UpdatePropertyComponent;
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