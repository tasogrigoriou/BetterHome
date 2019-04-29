(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["property-property-module"],{

/***/ "./node_modules/ngx-drag-scroll/lib/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ngx-drag-scroll/lib/index.js ***!
  \***************************************************/
/*! exports provided: DragScrollModule, DragScrollComponent, DragScrollItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngx_drag_scroll_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngx-drag-scroll.module */ "./node_modules/ngx-drag-scroll/lib/ngx-drag-scroll.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragScrollModule", function() { return _ngx_drag_scroll_module__WEBPACK_IMPORTED_MODULE_0__["DragScrollModule"]; });

/* harmony import */ var _ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/lib/ngx-drag-scroll.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragScrollComponent", function() { return _ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_1__["DragScrollComponent"]; });

/* harmony import */ var _ngx_drag_scroll_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-drag-scroll-item */ "./node_modules/ngx-drag-scroll/lib/ngx-drag-scroll-item.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragScrollItemDirective", function() { return _ngx_drag_scroll_item__WEBPACK_IMPORTED_MODULE_2__["DragScrollItemDirective"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ngx-drag-scroll/lib/ngx-drag-scroll-item.js":
/*!******************************************************************!*\
  !*** ./node_modules/ngx-drag-scroll/lib/ngx-drag-scroll-item.js ***!
  \******************************************************************/
/*! exports provided: DragScrollItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragScrollItemDirective", function() { return DragScrollItemDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var DragScrollItemDirective = (function () {
    function DragScrollItemDirective(elementRef) {
        this.elementRef = elementRef;
        this.display = 'inline-block';
        this._dragDisabled = false;
        this._elementRef = elementRef;
    }
    Object.defineProperty(DragScrollItemDirective.prototype, "dragDisabled", {
        get: function () { return this._dragDisabled; },
        set: function (value) { this._dragDisabled = value; },
        enumerable: true,
        configurable: true
    });
    DragScrollItemDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[drag-scroll-item]'
                },] },
    ];
    DragScrollItemDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],] }] }
    ]; };
    DragScrollItemDirective.propDecorators = {
        display: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] }],
        dragDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['drag-disabled',] }]
    };
    return DragScrollItemDirective;
}());

if (false) {}
//# sourceMappingURL=ngx-drag-scroll-item.js.map

/***/ }),

/***/ "./node_modules/ngx-drag-scroll/lib/ngx-drag-scroll.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-drag-scroll/lib/ngx-drag-scroll.js ***!
  \*************************************************************/
/*! exports provided: DragScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragScrollComponent", function() { return DragScrollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_drag_scroll_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-drag-scroll-item */ "./node_modules/ngx-drag-scroll/lib/ngx-drag-scroll-item.js");



var DragScrollComponent = (function () {
    function DragScrollComponent(_elementRef, _renderer, _document) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._document = _document;
        this._index = 0;
        this._scrollbarHidden = false;
        this._disabled = false;
        this._xDisabled = false;
        this._xWheelEnabled = false;
        this._yDisabled = false;
        this._dragDisabled = false;
        this._snapDisabled = false;
        this._snapOffset = 0;
        this._snapDuration = 500;
        this.isPressed = false;
        this.isScrolling = false;
        this.scrollTimer = -1;
        this.scrollToTimer = -1;
        this.downX = 0;
        this.downY = 0;
        this.displayType = 'block';
        this.elWidth = null;
        this.elHeight = null;
        this.scrollbarWidth = null;
        this.isAnimating = false;
        this.prevChildrenLength = 0;
        this.indexBound = 0;
        this.dsInitialized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.indexChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reachesLeftBound = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reachesRightBound = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.snapAnimationFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrollbarWidth = this.getScrollbarWidth() + "px";
    }
    Object.defineProperty(DragScrollComponent.prototype, "currIndex", {
        get: function () { return this._index; },
        set: function (value) {
            if (value !== this._index) {
                this._index = value;
                this.indexChanged.emit(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragScrollComponent.prototype, "scrollbarHidden", {
        get: function () { return this._scrollbarHidden; },
        set: function (value) { this._scrollbarHidden = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragScrollComponent.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragScrollComponent.prototype, "xDisabled", {
        get: function () { return this._xDisabled; },
        set: function (value) { this._xDisabled = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragScrollComponent.prototype, "yDisabled", {
        get: function () { return this._yDisabled; },
        set: function (value) { this._yDisabled = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragScrollComponent.prototype, "xWheelEnabled", {
        get: function () { return this._xWheelEnabled; },
        set: function (value) { this._xWheelEnabled = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragScrollComponent.prototype, "dragDisabled", {
        get: function () { return this._dragDisabled; },
        set: function (value) { this._dragDisabled = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragScrollComponent.prototype, "snapDisabled", {
        get: function () { return this._snapDisabled; },
        set: function (value) { this._snapDisabled = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragScrollComponent.prototype, "snapOffset", {
        get: function () { return this._snapOffset; },
        set: function (value) { this._snapOffset = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DragScrollComponent.prototype, "snapDuration", {
        get: function () { return this._snapDuration; },
        set: function (value) { this._snapDuration = value; },
        enumerable: true,
        configurable: true
    });
    DragScrollComponent.prototype.ngOnChanges = function () {
        this.setScrollBar();
        if (this.xDisabled || this.disabled) {
            this.disableScroll('x');
        }
        else {
            this.enableScroll('x');
        }
        if (this.yDisabled || this.disabled) {
            this.disableScroll('y');
        }
        else {
            this.enableScroll('y');
        }
    };
    DragScrollComponent.prototype.ngAfterViewInit = function () {
        this._renderer.setAttribute(this._contentRef.nativeElement, 'drag-scroll', 'true');
        this.displayType = typeof window !== 'undefined' ? window.getComputedStyle(this._elementRef.nativeElement).display : 'block';
        this._renderer.setStyle(this._contentRef.nativeElement, 'display', this.displayType);
        this._renderer.setStyle(this._contentRef.nativeElement, 'whiteSpace', 'noWrap');
        this.markElDimension();
        this._renderer.setStyle(this._contentRef.nativeElement, 'width', this.elWidth);
        this._renderer.setStyle(this._contentRef.nativeElement, 'height', this.elHeight);
        if (this.wrapper) {
            this.checkScrollbar();
        }
        this._onMouseDownListener = this._renderer.listen(this._contentRef.nativeElement, 'mousedown', this.onMouseDownHandler.bind(this));
        this._onTouchStartListener = this._renderer.listen(this._contentRef.nativeElement, 'touchstart', this.onMouseDownHandler.bind(this));
        this._onScrollListener = this._renderer.listen(this._contentRef.nativeElement, 'scroll', this.onScrollHandler.bind(this));
        this._onTouchEndListener = this._renderer.listen(this._contentRef.nativeElement, 'touchend', this.onMouseUpHandler.bind(this));
        this._onDragStartListener = this._renderer.listen('document', 'dragstart', function (e) {
            e.preventDefault();
        });
        this.checkNavStatus();
        this.dsInitialized.emit();
        this.adjustMarginToLastChild();
    };
    DragScrollComponent.prototype.ngAfterViewChecked = function () {
        if (this._children['_results'].length !== this.prevChildrenLength) {
            this.markElDimension();
            this.checkScrollbar();
            this.prevChildrenLength = this._children['_results'].length;
            this.checkNavStatus();
        }
    };
    DragScrollComponent.prototype.ngOnDestroy = function () {
        this._renderer.setAttribute(this._contentRef.nativeElement, 'drag-scroll', 'false');
        if (this._onMouseDownListener) {
            this._onMouseDownListener = this._onMouseDownListener();
        }
        if (this._onTouchStartListener) {
            this._onTouchStartListener = this._onTouchStartListener();
        }
        if (this._onScrollListener) {
            this._onScrollListener = this._onScrollListener();
        }
        if (this._onTouchEndListener) {
            this._onTouchEndListener = this._onTouchEndListener();
        }
        if (this._onDragStartListener) {
            this._onDragStartListener = this._onDragStartListener();
        }
    };
    DragScrollComponent.prototype.onMouseMoveHandler = function (event) {
        this.onMouseMove(event);
    };
    DragScrollComponent.prototype.onMouseMove = function (event) {
        if (this.isPressed && !this.disabled) {
            if (!this.xDisabled && !this.dragDisabled) {
                this._contentRef.nativeElement.scrollLeft =
                    this._contentRef.nativeElement.scrollLeft - event.clientX + this.downX;
                this.downX = event.clientX;
            }
            if (!this.yDisabled && !this.dragDisabled) {
                this._contentRef.nativeElement.scrollTop =
                    this._contentRef.nativeElement.scrollTop - event.clientY + this.downY;
                this.downY = event.clientY;
            }
        }
    };
    DragScrollComponent.prototype.onMouseDownHandler = function (event) {
        var dragScrollItem = this.locateDragScrollItem(((event.target)));
        if (dragScrollItem && dragScrollItem.dragDisabled) {
            return;
        }
        this._startGlobalListening();
        this.isPressed = true;
        this.downX = event.clientX;
        this.downY = event.clientY;
        clearTimeout(((this.scrollToTimer)));
    };
    DragScrollComponent.prototype.onScrollHandler = function () {
        var _this = this;
        this.checkNavStatus();
        if (!this.isPressed && !this.isAnimating && !this.snapDisabled) {
            this.isScrolling = true;
            clearTimeout(((this.scrollTimer)));
            this.scrollTimer = setTimeout(function () {
                _this.isScrolling = false;
                _this.locateCurrentIndex(true);
            }, 500);
        }
        else {
            this.locateCurrentIndex();
        }
    };
    DragScrollComponent.prototype.onMouseUpHandler = function (event) {
        if (this.isPressed) {
            this.isPressed = false;
            if (!this.snapDisabled) {
                this.locateCurrentIndex(true);
            }
            else {
                this.locateCurrentIndex();
            }
            this._stopGlobalListening();
        }
    };
    DragScrollComponent.prototype.moveLeft = function () {
        if ((this.currIndex !== 0 || this.snapDisabled)) {
            this.currIndex--;
            clearTimeout(((this.scrollToTimer)));
            this.scrollTo(this._contentRef.nativeElement, this.toChildrenLocation(), this.snapDuration);
        }
    };
    DragScrollComponent.prototype.moveRight = function () {
        var container = this.wrapper || this.parentNode;
        var containerWidth = container ? container.clientWidth : 0;
        if (!this.isScrollReachesRightEnd() && this.currIndex < this.maximumIndex(containerWidth, this._children)) {
            this.currIndex++;
            clearTimeout(((this.scrollToTimer)));
            this.scrollTo(this._contentRef.nativeElement, this.toChildrenLocation(), this.snapDuration);
        }
    };
    DragScrollComponent.prototype.moveTo = function (index) {
        var container = this.wrapper || this.parentNode;
        var containerWidth = container ? container.clientWidth : 0;
        if (index >= 0 &&
            index !== this.currIndex &&
            this.currIndex <= this.maximumIndex(containerWidth, this._children)) {
            this.currIndex = Math.min(index, this.maximumIndex(containerWidth, this._children));
            clearTimeout(((this.scrollToTimer)));
            this.scrollTo(this._contentRef.nativeElement, this.toChildrenLocation(), this.snapDuration);
        }
    };
    DragScrollComponent.prototype.checkNavStatus = function () {
        var _this = this;
        setTimeout(function () {
            var onlyOneItem = Boolean(_this._children['_results'].length <= 1);
            var containerIsLargerThanContent = Boolean(_this._contentRef.nativeElement.scrollWidth <=
                _this._contentRef.nativeElement.clientWidth);
            if (onlyOneItem || containerIsLargerThanContent) {
                _this.reachesLeftBound.emit(true);
                _this.reachesRightBound.emit(true);
            }
            else if (_this.isScrollReachesRightEnd()) {
                _this.reachesLeftBound.emit(false);
                _this.reachesRightBound.emit(true);
            }
            else if (_this._contentRef.nativeElement.scrollLeft === 0 &&
                _this._contentRef.nativeElement.scrollWidth > _this._contentRef.nativeElement.clientWidth) {
                _this.reachesLeftBound.emit(true);
                _this.reachesRightBound.emit(false);
            }
            else {
                _this.reachesLeftBound.emit(false);
                _this.reachesRightBound.emit(false);
            }
        }, 0);
    };
    DragScrollComponent.prototype.onWheel = function (event) {
        if (this._xWheelEnabled) {
            event.preventDefault();
            if (this._snapDisabled) {
                this._contentRef.nativeElement.scrollBy(event.deltaY, 0);
            }
            else {
                if (event.deltaY < 0) {
                    this.moveLeft();
                }
                else if (event.deltaY > 0) {
                    this.moveRight();
                }
            }
        }
    };
    DragScrollComponent.prototype.onWindowResize = function () {
        this.refreshWrapperDimensions();
    };
    DragScrollComponent.prototype._startGlobalListening = function () {
        if (!this._onMouseMoveListener) {
            this._onMouseMoveListener = this._renderer.listen('document', 'mousemove', this.onMouseMoveHandler.bind(this));
        }
        if (!this._onMouseUpListener) {
            this._onMouseUpListener = this._renderer.listen('document', 'mouseup', this.onMouseUpHandler.bind(this));
        }
    };
    DragScrollComponent.prototype._stopGlobalListening = function () {
        if (this._onMouseMoveListener) {
            this._onMouseMoveListener = this._onMouseMoveListener();
        }
        if (this._onMouseUpListener) {
            this._onMouseUpListener = this._onMouseUpListener();
        }
    };
    DragScrollComponent.prototype.disableScroll = function (axis) {
        this._renderer.setStyle(this._contentRef.nativeElement, "overflow-" + axis, 'hidden');
    };
    DragScrollComponent.prototype.enableScroll = function (axis) {
        this._renderer.setStyle(this._contentRef.nativeElement, "overflow-" + axis, 'auto');
    };
    DragScrollComponent.prototype.hideScrollbar = function () {
        if (this._contentRef.nativeElement.style.display !== 'none' && !this.wrapper) {
            this.parentNode = this._contentRef.nativeElement.parentNode;
            this.wrapper = this._renderer.createElement('div');
            this._renderer.setAttribute(this.wrapper, 'class', 'drag-scroll-wrapper');
            this._renderer.addClass(this.wrapper, 'drag-scroll-container');
            this.refreshWrapperDimensions();
            this._renderer.setStyle(this.wrapper, 'overflow', 'hidden');
            this._renderer.setStyle(this._contentRef.nativeElement, 'width', "calc(100% + " + this.scrollbarWidth + ")");
            this._renderer.setStyle(this._contentRef.nativeElement, 'height', "calc(100% + " + this.scrollbarWidth + ")");
            this._renderer.appendChild(this._elementRef.nativeElement, this.wrapper);
            this._renderer.appendChild(this.wrapper, this._contentRef.nativeElement);
            this.adjustMarginToLastChild();
        }
    };
    DragScrollComponent.prototype.showScrollbar = function () {
        if (this.wrapper) {
            this._renderer.setStyle(this._contentRef.nativeElement, 'width', '100%');
            this._renderer.setStyle(this._contentRef.nativeElement, 'height', this.wrapper.style.height);
            if (this.parentNode !== null) {
                this.parentNode.removeChild(this.wrapper);
                this.parentNode.appendChild(this._contentRef.nativeElement);
            }
            this.wrapper = null;
            this.adjustMarginToLastChild();
        }
    };
    DragScrollComponent.prototype.checkScrollbar = function () {
        if (this._contentRef.nativeElement.scrollWidth <= this._contentRef.nativeElement.clientWidth) {
            this._renderer.setStyle(this._contentRef.nativeElement, 'height', '100%');
        }
        else {
            this._renderer.setStyle(this._contentRef.nativeElement, 'height', "calc(100% + " + this.scrollbarWidth + ")");
        }
        if (this._contentRef.nativeElement.scrollHeight <= this._contentRef.nativeElement.clientHeight) {
            this._renderer.setStyle(this._contentRef.nativeElement, 'width', '100%');
        }
        else {
            this._renderer.setStyle(this._contentRef.nativeElement, 'width', "calc(100% + " + this.scrollbarWidth + ")");
        }
    };
    DragScrollComponent.prototype.setScrollBar = function () {
        if (this.scrollbarHidden) {
            this.hideScrollbar();
        }
        else {
            this.showScrollbar();
        }
    };
    DragScrollComponent.prototype.getScrollbarWidth = function () {
        var outer = this._renderer.createElement('div');
        this._renderer.setStyle(outer, 'visibility', 'hidden');
        this._renderer.setStyle(outer, 'width', '100px');
        this._renderer.setStyle(outer, 'msOverflowStyle', 'scrollbar');
        this._renderer.appendChild(this._document.body, outer);
        var widthNoScroll = outer.offsetWidth;
        this._renderer.setStyle(outer, 'overflow', 'scroll');
        var inner = this._renderer.createElement('div');
        this._renderer.setStyle(inner, 'width', '100%');
        this._renderer.appendChild(outer, inner);
        var widthWithScroll = inner.offsetWidth;
        this._renderer.removeChild(this._document.body, outer);
        return widthNoScroll - widthWithScroll || 20;
    };
    DragScrollComponent.prototype.refreshWrapperDimensions = function () {
        if (this.wrapper) {
            this._renderer.setStyle(this.wrapper, 'width', '100%');
            this._renderer.setStyle(this.wrapper, 'height', this._elementRef.nativeElement.style.height
                || this._elementRef.nativeElement.offsetHeight + 'px');
        }
    };
    DragScrollComponent.prototype.scrollTo = function (element, to, duration) {
        var self = this;
        self.isAnimating = true;
        var start = element.scrollLeft;
        var change = to - start - this.snapOffset;
        var increment = 20;
        var currentTime = 0;
        var easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) {
                return c / 2 * t * t + b;
            }
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
        var animateScroll = function () {
            currentTime += increment;
            element.scrollLeft = easeInOutQuad(currentTime, start, change, duration);
            if (currentTime < duration) {
                self.scrollToTimer = setTimeout(animateScroll, increment);
            }
            else {
                setTimeout(function () {
                    self.isAnimating = false;
                    self.snapAnimationFinished.emit(self.currIndex);
                }, increment);
            }
        };
        animateScroll();
    };
    DragScrollComponent.prototype.locateCurrentIndex = function (snap) {
        var _this = this;
        this.currentChildWidth(function (currentChildWidth, nextChildrenWidth, childrenWidth, idx, stop) {
            if ((_this._contentRef.nativeElement.scrollLeft >= childrenWidth &&
                _this._contentRef.nativeElement.scrollLeft <= nextChildrenWidth)) {
                if (nextChildrenWidth - _this._contentRef.nativeElement.scrollLeft > currentChildWidth / 2 && !_this.isScrollReachesRightEnd()) {
                    if (!_this.isAnimating) {
                        _this.currIndex = idx;
                    }
                    if (snap) {
                        _this.scrollTo(_this._contentRef.nativeElement, childrenWidth, _this.snapDuration);
                    }
                }
                else {
                    if (!_this.isAnimating) {
                        _this.currIndex = idx + 1;
                    }
                    if (snap) {
                        _this.scrollTo(_this._contentRef.nativeElement, childrenWidth + currentChildWidth, _this.snapDuration);
                    }
                }
                stop();
            }
            else if ((idx + 1) === (_this._children['_results'].length - 1)) {
                if (!_this.isAnimating) {
                    _this.currIndex = idx + 1;
                }
                stop();
            }
        });
    };
    DragScrollComponent.prototype.currentChildWidth = function (cb) {
        var childrenWidth = 0;
        var shouldBreak = false;
        var breakFunc = function () {
            shouldBreak = true;
        };
        for (var i = 0; i < this._children['_results'].length; i++) {
            if (i === this._children['_results'].length - 1) {
                break;
            }
            if (shouldBreak) {
                break;
            }
            var nextChildrenWidth = childrenWidth + this._children['_results'][i + 1]._elementRef.nativeElement.clientWidth;
            var currentClildWidth = this._children['_results'][i]._elementRef.nativeElement.clientWidth;
            cb(currentClildWidth, nextChildrenWidth, childrenWidth, i, breakFunc);
            childrenWidth += currentClildWidth;
        }
    };
    DragScrollComponent.prototype.toChildrenLocation = function () {
        var to = this.scrollbarHidden ? this.getScrollbarWidth() : 0;
        for (var i = 0; i < this.currIndex; i++) {
            to += this._children['_results'][i]._elementRef.nativeElement.clientWidth;
        }
        return to;
    };
    DragScrollComponent.prototype.locateDragScrollItem = function (element) {
        var item = null;
        for (var i = 0; i < this._children['_results'].length; i++) {
            if (element === this._children['_results'][i]._elementRef.nativeElement) {
                item = this._children['_results'][i];
            }
        }
        return item;
    };
    DragScrollComponent.prototype.markElDimension = function () {
        if (this.wrapper) {
            this.elWidth = this.wrapper.style.width;
            this.elHeight = this.wrapper.style.height;
        }
        else {
            this.elWidth = this._elementRef.nativeElement.style.width || (this._elementRef.nativeElement.offsetWidth + 'px');
            this.elHeight = this._elementRef.nativeElement.style.height || (this._elementRef.nativeElement.offsetHeight + 'px');
        }
        var container = this.wrapper || this.parentNode;
        var containerWidth = container ? container.clientWidth : 0;
        this.indexBound = this.maximumIndex(containerWidth, this._children);
    };
    DragScrollComponent.prototype.maximumIndex = function (containerWidth, childrenElements) {
        var count = 0;
        var childrenWidth = 0;
        for (var i = 0; i <= childrenElements['_results'].length; i++) {
            var dragScrollItemDirective = childrenElements['_results'][childrenElements['_results'].length - 1 - i];
            if (!dragScrollItemDirective) {
                break;
            }
            else {
                childrenWidth += dragScrollItemDirective._elementRef.nativeElement.clientWidth;
                if (childrenWidth < containerWidth) {
                    count++;
                }
                else {
                    break;
                }
            }
        }
        return childrenElements.length - count;
    };
    DragScrollComponent.prototype.isScrollReachesRightEnd = function () {
        var scrollLeftPos = this._contentRef.nativeElement.scrollLeft + this._contentRef.nativeElement.offsetWidth;
        return scrollLeftPos >= this._contentRef.nativeElement.scrollWidth;
    };
    DragScrollComponent.prototype.adjustMarginToLastChild = function () {
        if (this._children && this.hideScrollbar) {
            var lastItem = this._children['_results'][this._children['_results'].length - 1]._elementRef.nativeElement;
            if (this.wrapper && this._children['_results'].length > 1) {
                this._renderer.setStyle(lastItem, 'margin-right', this.scrollbarWidth);
            }
            else {
                this._renderer.setStyle(lastItem, 'margin-right', 0);
            }
        }
    };
    DragScrollComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'drag-scroll',
                    template: "\n    <div class=\"drag-scroll-content\" #contentRef>\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n    :host {\n      overflow: hidden;\n      display: block;\n    }\n    .drag-scroll-content {\n      height: 100%;\n      overflow: auto;\n      white-space: nowrap;\n    }\n    "]
                },] },
    ];
    DragScrollComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    DragScrollComponent.propDecorators = {
        _contentRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['contentRef',] }],
        _children: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_ngx_drag_scroll_item__WEBPACK_IMPORTED_MODULE_2__["DragScrollItemDirective"],] }],
        dsInitialized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        indexChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        reachesLeftBound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        reachesRightBound: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        snapAnimationFinished: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        scrollbarHidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['scrollbar-hidden',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['drag-scroll-disabled',] }],
        xDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['drag-scroll-x-disabled',] }],
        yDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['drag-scroll-y-disabled',] }],
        xWheelEnabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['scroll-x-wheel-enabled',] }],
        dragDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['drag-disabled',] }],
        snapDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['snap-disabled',] }],
        snapOffset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['snap-offset',] }],
        snapDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['snap-duration',] }],
        onWheel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['wheel', ['$event'],] }],
        onWindowResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize',] }]
    };
    return DragScrollComponent;
}());

if (false) {}
//# sourceMappingURL=ngx-drag-scroll.js.map

/***/ }),

/***/ "./node_modules/ngx-drag-scroll/lib/ngx-drag-scroll.module.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-drag-scroll/lib/ngx-drag-scroll.module.js ***!
  \********************************************************************/
/*! exports provided: DragScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragScrollModule", function() { return DragScrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-drag-scroll */ "./node_modules/ngx-drag-scroll/lib/ngx-drag-scroll.js");
/* harmony import */ var _ngx_drag_scroll_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-drag-scroll-item */ "./node_modules/ngx-drag-scroll/lib/ngx-drag-scroll-item.js");



var DragScrollModule = (function () {
    function DragScrollModule() {
    }
    DragScrollModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    exports: [
                        _ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_1__["DragScrollComponent"],
                        _ngx_drag_scroll_item__WEBPACK_IMPORTED_MODULE_2__["DragScrollItemDirective"]
                    ],
                    declarations: [
                        _ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_1__["DragScrollComponent"],
                        _ngx_drag_scroll_item__WEBPACK_IMPORTED_MODULE_2__["DragScrollItemDirective"]
                    ]
                },] },
    ];
    return DragScrollModule;
}());

//# sourceMappingURL=ngx-drag-scroll.module.js.map

/***/ }),

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

module.exports = ".property-toolbar {\n  min-height: 74px;\n  height: auto;\n  width: 100%;\n  margin-bottom: 10px;\n  border-bottom: 1px;\n  border-bottom-style: solid;\n  border-bottom-color: rgba(107, 107, 107, 0.35);\n}\n\n.property-toolbar-title {\n  font-size: 20px;\n  padding-top: 5px;\n  padding-left: 5px;\n}\n\n.cont-search ::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\n.cont-form ::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\n.property-grid-list {\n  background-color: transparent;\n}\n\n.property-grid-title {\n  border: 1px;\n}\n\n.property-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.property-card {\n  position: relative;\n  margin-top: 10px;\n  align-items: center;\n}\n\n.favorite-button {\n  position: absolute;\n  top: 12px;\n  right: 16px;\n  height: 36px;\n  width: 20px;\n}\n\n.property-card-title {\n  margin-bottom: 8px;\n}\n\n.property-card-image {\n  margin-left: 0;\n  margin-right: 0;\n  width: 100%;\n}\n\n.property-paginator {\n  margin-bottom: 10px;\n}\n\n.space {\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n\n.cont-form {\n  margin-top: 20px;\n  margin-right: 20px;\n  max-width: 135px;\n}\n\n.cont-search {\n  margin-right: 20px;\n  max-width: 210px;\n}\n\n.a-link-card {\n  position: absolute;\n  top: 0; left: 0;\n  height: 100%; width: 100%;\n}\n\n.property-access-title {\n  margin-top: -10px;\n  color: rgba(0, 0, 0, 0.6);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHkvcHJvcGVydHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTSxFQUFFLE9BQU87RUFDZixZQUFZLEVBQUUsV0FBVztBQUMzQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9wcm9wZXJ0eS9wcm9wZXJ0eS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnR5LXRvb2xiYXIge1xuICBtaW4taGVpZ2h0OiA3NHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHg7XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDEwNywgMTA3LCAxMDcsIDAuMzUpO1xufVxuXG4ucHJvcGVydHktdG9vbGJhci10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5jb250LXNlYXJjaCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uY29udC1mb3JtIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByb3BlcnR5LWdyaWQtbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucHJvcGVydHktZ3JpZC10aXRsZSB7XG4gIGJvcmRlcjogMXB4O1xufVxuXG4ucHJvcGVydHktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9wZXJ0eS1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmF2b3JpdGUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4ucHJvcGVydHktY2FyZC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnByb3BlcnR5LWNhcmQtaW1hZ2Uge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb3BlcnR5LXBhZ2luYXRvciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zcGFjZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jb250LWZvcm0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogMTM1cHg7XG59XG5cbi5jb250LXNlYXJjaCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiAyMTBweDtcbn1cblxuLmEtbGluay1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7IGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9wZXJ0eS1hY2Nlc3MtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/property/property.component.html":
/*!**************************************************!*\
  !*** ./src/app/property/property.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"container-fluid property-toolbar\">\n\n    <mat-form-field class=\"cont-search\" [floatLabel]=\"'never'\">\n      <input matInput placeholder=\"Search by city...\" [(ngModel)]=\"listingSearch.city\" (keyup.enter)=\"onSearchClick()\" required>\n      <a class=\"my-search\" mat-button matSuffix color=\"primary\" (click)=\"onSearchClick()\"><mat-icon>search</mat-icon></a>\n    </mat-form-field>\n\n    <mat-form-field class=\"cont-form\" [floatLabel]=\"'never'\">\n      <mat-label>Listing Type</mat-label>\n      <mat-select [(value)]=\"listingSearch.listingType\" (selectionChange)=\"onSelectionChange()\">\n        <mat-option value=\"Any\">Any Type</mat-option>\n        <mat-option value=\"House\">House</mat-option>\n        <mat-option value=\"Apartment\">Apartment</mat-option>\n        <mat-option value=\"Condo\">Condo</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"cont-form\" [floatLabel]=\"'never'\">\n      <mat-label>Sale or Rental</mat-label>\n      <mat-select [(value)]=\"listingSearch.forSale\" (selectionChange)=\"onSelectionChange()\">\n        <mat-option value=null>Sale and Rental</mat-option>\n        <mat-option value=1>Sale</mat-option>\n        <mat-option value=0>Rental</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"cont-form\" [floatLabel]=\"'never'\">\n      <mat-label>Bedrooms</mat-label>\n      <mat-select [(value)]=\"listingSearch.numBedrooms\" (selectionChange)=\"onSelectionChange()\">\n        <mat-option value=0>Any Beds</mat-option>\n        <mat-option value=1>1+ Bed</mat-option>\n        <mat-option value=2>2+ Beds</mat-option>\n        <mat-option value=3>3+ Beds</mat-option>\n        <mat-option value=4>4+ Beds</mat-option>\n        <mat-option value=5>5+ Beds</mat-option>\n        <mat-option value=6>6+ Beds</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field class=\"cont-form\" [floatLabel]=\"'never'\">\n      <mat-label>Bathrooms</mat-label>\n      <mat-select [(value)]=\"listingSearch.numBathrooms\" (selectionChange)=\"onSelectionChange()\">\n        <mat-option value=0>Any Baths</mat-option>\n        <mat-option value=1>1+ Bath</mat-option>\n        <mat-option value=2>2+ Baths</mat-option>\n        <mat-option value=3>3+ Baths</mat-option>\n        <mat-option value=4>4+ Baths</mat-option>\n        <mat-option value=5>5+ Baths</mat-option>\n        <mat-option value=6>6+ Baths</mat-option>\n      </mat-select>\n    </mat-form-field>\n\n  </div>\n\n  <div class=\"space\">\n    <h2>Property Listings</h2>\n    <ng-template [ngIf]=\"listings.length > 0\">\n      <mat-paginator class=\"property-paginator\"\n                     [length]=\"listings.length\" [pageSize]=\"15\">\n      </mat-paginator>\n    </ng-template>\n  </div>\n\n  <div class=\"property-container\" fxLayout=\"row wrap\" fxLayoutAlign=\"start start\" fxLayoutGap=\"10px\" fxLayoutGap.xs=\"0\">\n    <mat-card class=\"property-card\" appMaterialElevation defaultElevation=\"3\" raisedElevation=\"24\"\n              [fxFlex]=\"rowWidth\"\n              (window:resize)=\"onResize($event)\"\n              *ngFor=\"let listing of listings\">\n\n      <a class=\"a-link-card\" [routerLink]=\"[listing.listingId]\"></a>\n\n      <a class=\"favorite-button\" (click)=\"onFavoriteClick(listing)\">\n        <mat-icon style=\"font-size: 21px !important\" color=\"warn\">favorite_border</mat-icon>\n      </a>\n\n      <mat-card-header>\n        <mat-card-title><h5>{{listing.title}}</h5>\n        </mat-card-title>\n        <mat-card-subtitle style=\"padding-top: 6px !important\">{{listing.street + ', ' + listing.city + ', ' + listing.state}}</mat-card-subtitle>\n      </mat-card-header>\n\n      <img class=\"property-card-image\" mat-card-image\n           [src]=\"listing.imageUrls[0]\"\n           alt=\"Image not found\">\n\n      <mat-card-content>\n        <h6>{{listing.listingType + ' for ' + (listing.forSale ? 'sale' : 'rent')}}</h6>\n        <p><i>{{'$' + numberWithCommas(listing.price) + ' | ' + listing.numBedrooms + ' beds' + ' | ' + listing.numBathrooms + ' baths'}}</i></p>\n        <p class=\"property-access-title\">{{getPropertyAccessibility(listing)}}</p>\n        <p>{{listing.description}}</p>\n      </mat-card-content>\n    </mat-card>\n  </div>\n\n  <div>\n    <mat-spinner *ngIf=\"!isLoaded\"></mat-spinner>\n  </div>\n\n  <ng-template [ngIf]=\"listings.length > 0\">\n    <mat-paginator class=\"property-paginator\"\n                   [length]=\"listings.length\" [pageSize]=\"15\">\n    </mat-paginator>\n  </ng-template>\n\n</div>\n"

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







var PropertyComponent = /** @class */ (function () {
    function PropertyComponent(router, listingsService, searchService, dialog) {
        this.router = router;
        this.listingsService = listingsService;
        this.searchService = searchService;
        this.dialog = dialog;
        this.filter = true;
        this.isLoaded = true;
    }
    PropertyComponent.prototype.ngOnInit = function () {
        this.listings = this.searchService.getListings();
        if (localStorage.getItem('listingSearch')) {
            this.listingSearch = JSON.parse(localStorage.getItem('listingSearch'));
        }
        else {
            this.listingSearch = {
                city: ''
            };
        }
        this.breakpoint = (window.innerWidth <= 500) ? 1 : 3;
        this.rowWidth = (window.innerWidth <= 500) ? '100%' : '30%';
    };
    PropertyComponent.prototype.ngOnDestroy = function () {
        if (this.listingSearch) {
            localStorage.setItem('listingSearch', JSON.stringify(this.listingSearch));
        }
    };
    PropertyComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 3;
        this.rowWidth = (event.target.innerWidth <= 500) ? '100%' : '30%';
    };
    PropertyComponent.prototype.onSearchClick = function () {
        this.reloadData();
    };
    PropertyComponent.prototype.onSelectionChange = function () {
        this.reloadData();
    };
    PropertyComponent.prototype.reloadData = function () {
        var _this = this;
        this.isLoaded = false;
        localStorage.setItem('listingSearch', JSON.stringify(this.listingSearch));
        this.searchService.getSearchListings(this.listingSearch)
            .subscribe(function (listings) {
            _this.isLoaded = true;
            _this.listings = listings;
            _this.searchService.saveSearchListings(listings);
        }, function (err) {
            _this.isLoaded = true;
            _this.listings = [];
            _this.searchService.saveSearchListings([]);
            _this.openDialog('Unable to retrieve any listing based on your search and filter options. Please try again');
        });
    };
    PropertyComponent.prototype.onFavoriteClick = function (listing) {
        console.log(listing.title);
    };
    PropertyComponent.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    PropertyComponent.prototype.getPropertyAccessibility = function (listing) {
        var access = 'Accessibility: ';
        if (!listing.laundry && !listing.hospitalAccess && !listing.wheelchairAccess && !listing.BARTAccess)
            return access + 'none';
        var laundry = listing.laundry ? 'laundry' : '';
        var hospital = listing.hospitalAccess ? ', hospital' : '';
        var wheelchair = listing.wheelchairAccess ? ', wheelchair' : '';
        var bart = listing.BARTAccess ? ', bart' : '';
        return access + laundry + hospital + wheelchair + bart;
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
    PropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property',
            template: __webpack_require__(/*! ./property.component.html */ "./src/app/property/property.component.html"),
            styles: [__webpack_require__(/*! ./property.component.css */ "./src/app/property/property.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _core_services_listings_service__WEBPACK_IMPORTED_MODULE_2__["ListingsService"],
            _core_services_search_listings_service__WEBPACK_IMPORTED_MODULE_3__["SearchListingsService"],
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

module.exports = ".body\n{\n  overflow-x: hidden;\n  width: 100%;\n  color: #6b6b6b;\n}\n.mySlides\n{\n  display:none\n}\n.fa\n{\n  color: darkgray;\n}\n.propertyOverview\n{\n  padding-left: 30%\n}\n.favorite\n{\n  padding-left: 60%\n}\n.my-container {\n  margin: 0 auto;\n  max-width: 600px;\n  max-height: 600px;\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHkvcHJvcGVydHkuc2luZ2xlTGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRSxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFO0FBQ0Y7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wcm9wZXJ0eS9wcm9wZXJ0eS5zaW5nbGVMaXN0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keVxue1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogIzZiNmI2Yjtcbn1cbi5teVNsaWRlc1xue1xuICBkaXNwbGF5Om5vbmVcbn1cbi5mYVxue1xuICBjb2xvcjogZGFya2dyYXk7XG59XG4ucHJvcGVydHlPdmVydmlld1xue1xuICBwYWRkaW5nLWxlZnQ6IDMwJVxufVxuLmZhdm9yaXRlXG57XG4gIHBhZGRpbmctbGVmdDogNjAlXG59XG5cbi5teS1jb250YWluZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/property/property.singleListing.component.html":
/*!****************************************************************!*\
  !*** ./src/app/property/property.singleListing.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<title>Individual Listing</title>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<body class=\"body\">\n\n<div class=\"w3-center\">\n  <div class=\"w3-section\">\n\n<!--    <div>-->\n<!--      <button class=\"favorite\" mat-raised-button (click)=\"addToFavorites()\" color=\"primary\">+ Add to Favorites</button>-->\n<!--    </div>-->\n    <div class=\"my-container\">\n      <drag-scroll #drag_scroll>\n        <img drag-scroll-item *ngFor=\"let photo of listing.imageUrls\" [src]=\"photo\" alt=\"\" />\n      </drag-scroll>\n    </div>\n  </div>\n\n<!--  <div>-->\n    <button mat-button (click)=\"moveLeft()\">❮ Prev</button>\n    <button mat-button (click)=\"moveRight()\">Next ❯</button>\n<!--  </div>-->\n\n</div>\n\n<div class=\"propertyOverview\" *ngIf=\"listing.listingId\">\n  <h2>Overview</h2>\n  <hr width=\"50%\" size=\"8\">\n  <p><i class=\"fa fa-dollar fa-fw w3-margin-right w3-large \"></i> For {{ forSale() }} ${{ listing.price }}</p>\n  <p><i class=\"fa fa-bath fa-fw w3-margin-right w3-large \"></i> {{ listing.numBedrooms }} bed, {{ listing.numBathrooms }} bath</p>\n  <p><i class=\"fa fa-map-marker fa-fw w3-margin-right w3-large \"></i> {{ listing.street }} {{ listing.city }} {{ listing.zipCode }}</p>\n  <h2>Contact</h2>\n<!--  <p><i class=\"fa fa-phone fa-fw w3-margin-right w3-large \"></i> {{user.phoneNumber || '(415) 766-2205'}}</p>-->\n<!--  <p><i class=\"fa fa-envelope fa-fw w3-margin-right w3-large \"></i> {{user.emailAddress || 'example-email@mail.sfsu.edu'}}</p>-->\n  <p><i class=\"fa fa-phone fa-fw w3-margin-right w3-large \"></i>(415) 766-2205</p>\n  <p><i class=\"fa fa-envelope fa-fw w3-margin-right w3-large \"></i>example-email@mail.sfsu.edu</p>\n</div>\n\n</body>\n</html>\n"

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
            var listingId = Number(params.get('listing.listingId'));
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
    PropertySingleListingComponent.prototype.moveLeft = function () {
        this.dragScroll.moveLeft();
    };
    PropertySingleListingComponent.prototype.moveRight = function () {
        this.dragScroll.moveRight();
    };
    PropertySingleListingComponent.prototype.addToFavorites = function () {
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
            _core_services_listings_service__WEBPACK_IMPORTED_MODULE_3__["ListingsService"]])
    ], PropertySingleListingComponent);
    return PropertySingleListingComponent;
}());



/***/ })

}]);
//# sourceMappingURL=property-property-module.js.map