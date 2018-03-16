webpackJsonp(["booking-payment.module"],{

/***/ "../../../../../src/app/modules/lazy-loaded/booking-payment/booking-detail/booking-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--BASIC ORDER INFO-->\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <img src=\"https://pay4listen.github.io/homesty/assets/img/hotel/hotel-detail-5.jpg\" width=\"100%\">\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h4 class=\"card-title\">{{orderDetail.hotelName}}</h4>\r\n    <p class=\"category\"><i class=\"material-icons\">place</i>{{orderDetail.hotelAddress}}</p>\r\n    <div class=\"row col-md-12 order-info\">\r\n      <label>Date In: <span class=\"text-danger\">{{orderDetail.dateIn}}</span></label>\r\n    </div>\r\n    <div class=\"row col-md-12 order-info\">\r\n      <label>Date Leave: <span class=\"text-danger\">{{orderDetail.dateOut}}</span></label>\r\n    </div>\r\n    <div class=\"row col-md-12 order-info\">\r\n      <label>Room: <span class=\"text-danger\">{{orderDetail.room.name}}</span></label>\r\n    </div>\r\n    <div class=\"row col-md-12 order-info\">\r\n      <label>Quantity: <span class=\"text-danger\">{{orderDetail.quantity}}</span></label>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4 order-room-info\">\r\n    <ul>\r\n      <li *ngIf=\"orderDetail.room.isBalcony\"><i class=\"material-icons\">done</i> Balcony View</li>\r\n      <li><i class=\"material-icons\">done</i> {{orderDetail.room.bed}}</li>\r\n      <li><i class=\"material-icons\">done</i> Capacity: {{orderDetail.room.capacity}} <i class=\"material-icons\">person</i></li>\r\n      <li><i class=\"material-icons\">done</i> Price: {{orderDetail.room.price}}VND/Night</li>\r\n      <li><i class=\"material-icons\">done</i> Size: {{orderDetail.room.size}}</li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<!--CUSTOMER INFO & CUSTOMER REQUEST-->\r\n<div class=\"row\">\r\n  <div class=\"col-md-4\">\r\n    <h4 class=\"card-title\">Your infomation</h4>\r\n    <form class=\"col-md-offset-1\" [formGroup]=\"cusForm\">\r\n      <div class=\"form-group label-floating is-empty\">\r\n        <label class=\"control-label\">Full name\r\n          <span class=\"star\">*</span>\r\n        </label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"fullName\">\r\n        <div *ngIf=\"formErrorMsg.fullName !== ''\" class=\"error-msg\">{{formErrorMsg.fullName}}</div>\r\n      </div>\r\n      <div class=\"form-group label-floating is-empty\">\r\n        <label class=\"control-label\">Phone number\r\n          <span class=\"star\">*</span>\r\n        </label>\r\n        <input type=\"text\" class=\"form-control\"\r\n               maxlength=\"11\" formControlName=\"phone\">\r\n        <div *ngIf=\"formErrorMsg.phone !== ''\" class=\"error-msg\">{{formErrorMsg.phone}}</div>\r\n      </div>\r\n      <div class=\"form-group label-floating is-empty\">\r\n        <label class=\"control-label\">Email\r\n          <span class=\"star\">*</span>\r\n        </label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"email\">\r\n        <div *ngIf=\"formErrorMsg.email !== ''\" class=\"error-msg\">{{formErrorMsg.email}}</div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"col-md-offset-2 col-md-6\">\r\n    <h4 class=\"card-title\">Alternative request</h4>\r\n    <form class=\"col-md-offset-1\" [formGroup]=\"alterRequestForm\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-xs-4\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-xs-6\">\r\n              <div class=\"form-group label-floating is-empty\">\r\n                <label class=\"control-label\">Arrive at</label>\r\n                <input type=\"text\" class=\"form-control\" formControlName=\"arriveAt\">\r\n              </div>\r\n            </div>\r\n            <div class=\"togglebutton\">\r\n              <label style=\"color: black\">\r\n                <input type=\"checkbox\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"isTypeTimeCheck\">\r\n                <span class=\"toggle\"></span>{{isTypeTimeCheck ? 'am' : 'pm'}}\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xs-4\">\r\n          <div class=\"checkbox custom-mat-checkbox\">\r\n            <label style=\"color: black\">\r\n              <input type=\"checkbox\" formControlName=\"isAirportPickUp\">\r\n              <span class=\"checkbox-material\"><span class=\"check\"></span></span> Pick up at airport\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xs-4\">\r\n          <div class=\"checkbox custom-mat-checkbox\">\r\n            <label style=\"color: black\">\r\n              <input type=\"checkbox\" formControlName=\"isCityView\">\r\n              <span class=\"checkbox-material\"><span class=\"check\"></span></span> City View\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 col-xs-4\">\r\n          <div class=\"checkbox\">\r\n            <label style=\"color: black\">\r\n              <input type=\"checkbox\" formControlName=\"isQuite\">\r\n              <span class=\"checkbox-material\"><span class=\"check\"></span></span> Quite Area\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xs-4\">\r\n          <div class=\"checkbox\">\r\n            <label style=\"color: black\">\r\n              <input type=\"checkbox\" formControlName=\"isNoSmoking\">\r\n              <span class=\"checkbox-material\"><span class=\"check\"></span></span> No smoking room\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 col-xs-4\">\r\n          <div class=\"checkbox\">\r\n            <label style=\"color: black\">\r\n              <input type=\"checkbox\" formControlName=\"isRooftop\">\r\n              <span class=\"checkbox-material\"><span class=\"check\"></span></span> Rooftop room\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"form-group label-floating is-empty\">\r\n            <label class=\"control-label\">Note</label>\r\n            <textarea type=\"text\" class=\"form-control\"\r\n                      formControlName=\"note\"></textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/lazy-loaded/booking-payment/booking-detail/booking-detail.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n::-webkit-scrollbar {\n  width: 10px; }\n\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.5); }\n\n::-webkit-scrollbar-thumb:active {\n  background: rgba(0, 0, 0, 0.5); }\n\n.sidebar .sidebar-wrapper {\n  overflow: hidden; }\n\n.full-page:before {\n  background: transparent; }\n\n.form-group.label-floating.is-focused label.control-label {\n  color: #9c27b0; }\n\n.form-control {\n  height: 34px; }\n\n#home-search input, #search-nav input {\n  color: #fff; }\n\n#home-search .mat-input-placeholder.mat-empty, #search-nav .mat-input-placeholder.mat-empty {\n  color: #3f3f3f; }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n.animated.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n.main-panel {\n  width: 100%; }\n  .main-panel .main-content {\n    margin-top: 0px; }\n\n.wizard-card {\n  background-color: white; }\n  .wizard-card .nav-pills > li.active {\n    border-radius: 4px;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    box-shadow: 0px 2px 8px 0px;\n    background-color: #9c27b0; }\n    .wizard-card .nav-pills > li.active a {\n      color: #fff !important;\n      font-weight: bold; }\n\n.nav-pills:not(.nav-pills-icons) > li > a {\n  border-radius: 4px; }\n\n.error-msg {\n  font-weight: 400;\n  color: #9C160E; }\n\nh4 {\n  font-weight: 600; }\n\n.order-info label {\n  color: black;\n  font-size: 16px;\n  font-weight: 400; }\n\n.order-info span {\n  font-size: 18px;\n  font-weight: 800; }\n\n.order-room-info {\n  color: green; }\n  .order-room-info i {\n    -webkit-transform: translateY(6px);\n            transform: translateY(6px); }\n  .order-room-info ul li {\n    list-style-type: none;\n    font-size: 1.5em;\n    font-weight: 400;\n    padding: 10px 0px; }\n\n.custom-mat-checkbox {\n  -webkit-transform: translateY(15px);\n          transform: translateY(15px); }\n\n.togglebutton {\n  -webkit-transform: translateY(30px);\n          transform: translateY(30px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/lazy-loaded/booking-payment/booking-detail/booking-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_form_validator_form_validator_service__ = __webpack_require__("../../../../../src/app/service/form-validator/form-validator.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingDetailComponent = (function () {
    function BookingDetailComponent(_fb) {
        this._fb = _fb;
        this.isTypeTimeCheck = false;
        this.cusFormValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.alterRequestFormValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.formErrorMsg = {
            'email': '',
            'fullName': '',
            'phone': ''
        };
    }
    BookingDetailComponent.prototype.ngOnInit = function () {
        this.initFormData();
    };
    BookingDetailComponent.prototype.initFormData = function () {
        this.cusForm = this._fb.group({
            fullName: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            email: [null, [__WEBPACK_IMPORTED_MODULE_2__service_form_validator_form_validator_service__["a" /* FormValidatorService */].emailValidator, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]],
            phone: [null, [__WEBPACK_IMPORTED_MODULE_2__service_form_validator_form_validator_service__["a" /* FormValidatorService */].phoneValidator, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required]]
        });
        this.detectCusFormChange();
        this.alterRequestForm = this._fb.group({
            arriveAt: [null],
            isRooftop: [false],
            isAirportPickUp: [false],
            isNoSmoking: [false],
            isQuite: [false],
            isCityView: [false],
            note: [null]
        });
        this.detectAlterRequestFormChange();
    };
    BookingDetailComponent.prototype.detectCusFormChange = function () {
        var _this = this;
        this.cusForm.valueChanges.subscribe(function (values) {
            var formChange = {
                valid: _this.cusForm.valid,
                dirty: _this.cusForm.dirty
            };
            if (_this.cusForm.valid && _this.cusForm.dirty) {
                formChange = __assign({}, formChange, { values: values });
            }
            _this.cusFormValueChange.emit(formChange);
            /**Get error message from FormValidatorService*/
            for (var field in _this.formErrorMsg) {
                _this.formErrorMsg[field] = '';
                var control = _this.cusForm.get(field);
                if (control && control.dirty && !control.valid) {
                    for (var key in control.errors) {
                        _this.formErrorMsg[field] = __WEBPACK_IMPORTED_MODULE_2__service_form_validator_form_validator_service__["a" /* FormValidatorService */].getValidatorErrorMessage(key);
                    }
                }
            }
        });
    };
    BookingDetailComponent.prototype.detectAlterRequestFormChange = function () {
        var _this = this;
        this.alterRequestForm.valueChanges.subscribe(function (values) {
            if (values.arriveAt) {
                if (_this.isTypeTimeCheck) {
                    values.arriveAt = values.arriveAt + 'am';
                }
                else {
                    values.arriveAt = values.arriveAt + 'pm';
                }
            }
            _this.alterRequestFormValueChange.emit(values);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], BookingDetailComponent.prototype, "orderDetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], BookingDetailComponent.prototype, "cusFormValueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], BookingDetailComponent.prototype, "alterRequestFormValueChange", void 0);
    BookingDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-booking-detail',
            template: __webpack_require__("../../../../../src/app/modules/lazy-loaded/booking-payment/booking-detail/booking-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/lazy-loaded/booking-payment/booking-detail/booking-detail.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], BookingDetailComponent);
    return BookingDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/lazy-loaded/booking-payment/booking-invoice/booking-invoice.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\r\n  <div class=\"col-md-8 col-md-offset-2\">\r\n    <h2 class=\"card-title\">{{orderDetail.hotelName}}</h2>\r\n    <div class=\"row col-md-12\">\r\n      <div class=\"col-md-6\">\r\n        <img src=\"https://pay4listen.github.io/homesty/assets/img/hotel/{{orderDetail.room.image}}\"\r\n             width=\"100%\" height=\"200px\">\r\n      </div>\r\n      <div class=\"col-md-6 text-left\">\r\n        <p style=\"font-size: 1.5em; font-weight: 600\"><i class=\"material-icons\">place</i> {{orderDetail.hotelAddress}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row col-md-12 confirm-order\">\r\n      <ul>\r\n        <li class=\"row\">\r\n          <span class=\"confirm-label\">Room</span>\r\n          <span class=\"confirm-detail\">{{orderDetail.room.name}}</span>\r\n        </li>\r\n        <li class=\"row\">\r\n          <span class=\"confirm-label\">Booked</span>\r\n          <span class=\"confirm-detail\">{{orderDetail.quantity}} Room</span>\r\n        </li>\r\n        <li class=\"row\">\r\n          <span class=\"confirm-label\">Check in date</span>\r\n          <span class=\"confirm-detail\">{{orderDetail.dateIn}}</span>\r\n        </li>\r\n        <li class=\"row\">\r\n          <span class=\"confirm-label\">Checkout date</span>\r\n          <span class=\"confirm-detail\">{{orderDetail.dateOut}}</span>\r\n        </li>\r\n        <li class=\"row\">\r\n          <span class=\"confirm-label\">Customer</span>\r\n          <span class=\"confirm-detail\" *ngIf=\"orderDetail.customer\">{{orderDetail.customer.fullName}}</span>\r\n        </li>\r\n        <li class=\"row\" *ngIf=\"orderDetail.note && orderDetail.note !== ''\">\r\n          <span class=\"confirm-label\">Alternative Request</span>\r\n          <span class=\"confirm-detail\">{{orderDetail.note}}</span>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"row col-md-12 confirm-price\" *ngIf=\"orderDetail.total\">\r\n      <div class=\"text-right\">\r\n        <h3 class=\"text-success\">Total: <b>{{orderDetail.total}}</b></h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/lazy-loaded/booking-payment/booking-invoice/booking-invoice.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n::-webkit-scrollbar {\n  width: 10px; }\n\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.5); }\n\n::-webkit-scrollbar-thumb:active {\n  background: rgba(0, 0, 0, 0.5); }\n\n.sidebar .sidebar-wrapper {\n  overflow: hidden; }\n\n.full-page:before {\n  background: transparent; }\n\n.form-group.label-floating.is-focused label.control-label {\n  color: #9c27b0; }\n\n.form-control {\n  height: 34px; }\n\n#home-search input, #search-nav input {\n  color: #fff; }\n\n#home-search .mat-input-placeholder.mat-empty, #search-nav .mat-input-placeholder.mat-empty {\n  color: #3f3f3f; }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n.animated.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n.main-panel {\n  width: 100%; }\n  .main-panel .main-content {\n    margin-top: 0px; }\n\n.wizard-card {\n  background-color: white; }\n  .wizard-card .nav-pills > li.active {\n    border-radius: 4px;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    box-shadow: 0px 2px 8px 0px;\n    background-color: #9c27b0; }\n    .wizard-card .nav-pills > li.active a {\n      color: #fff !important;\n      font-weight: bold; }\n\n.nav-pills:not(.nav-pills-icons) > li > a {\n  border-radius: 4px; }\n\n.error-msg {\n  font-weight: 400;\n  color: #9C160E; }\n\n.confirm-order ul {\n  margin: 15px 0px; }\n  .confirm-order ul li {\n    list-style-type: none;\n    margin-bottom: 20px;\n    border-bottom: 1px solid #d0cfcf; }\n    .confirm-order ul li span {\n      font-size: 18px; }\n    .confirm-order ul li .confirm-label {\n      font-weight: 400;\n      float: left; }\n    .confirm-order ul li .confirm-detail {\n      float: right; }\n\n.confirm-price {\n  margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/lazy-loaded/booking-payment/booking-invoice/booking-invoice.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingInvoiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingInvoiceComponent = (function () {
    function BookingInvoiceComponent() {
    }
    BookingInvoiceComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], BookingInvoiceComponent.prototype, "orderDetail", void 0);
    BookingInvoiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-booking-invoice',
            template: __webpack_require__("../../../../../src/app/modules/lazy-loaded/booking-payment/booking-invoice/booking-invoice.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/lazy-loaded/booking-payment/booking-invoice/booking-invoice.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingInvoiceComponent);
    return BookingInvoiceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/lazy-loaded/booking-payment/booking-payment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-panel\">\r\n  <div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"wizard-card\">\r\n          <div class=\"wizard-header\">\r\n            <h3 class=\"wizard-title\">Checkout Information</h3>\r\n          </div>\r\n\r\n          <!--INNER NAVIGATION-->\r\n          <div class=\"wizard-navigation\">\r\n            <ul class=\"nav nav-pills\">\r\n              <li [class.active]=\"currentStep === 1\" style=\"width: 50%;\">\r\n                <a>Order Detail</a>\r\n              </li>\r\n              <li [class.active]=\"currentStep === 2\" style=\"width: 50%;\">\r\n                <a>Confirm</a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n\r\n          <!--TAB CONTENT-->\r\n          <div class=\"tab-content\">\r\n            <app-booking-detail [class.hide]=\"currentStep === 2\"\r\n                                [orderDetail]=\"orderDetail\"\r\n                                (cusFormValueChange)=\"recvCusFormValue($event)\"\r\n                                (alterRequestFormValueChange)=\"recvAlterResquestValue($event)\"></app-booking-detail>\r\n\r\n            <app-booking-invoice [class.hide]=\"currentStep === 1\"\r\n                                 [orderDetail]=\"orderDetail\"></app-booking-invoice>\r\n          </div>\r\n\r\n          <!--BUTTON ACTION-->\r\n          <div class=\"wizard-footer\">\r\n            <div class=\"text-center\">\r\n              <button *ngIf=\"currentStep === 1\" type=\"button\"\r\n                      [disabled]=\"isFinishBtnDisable\"\r\n                      (click)=\"onCompleteBookingClick()\"\r\n                      class=\"btn btn-fill btn-success btn-wd\">Finish</button>\r\n            </div>\r\n            <div class=\"clearfix\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/lazy-loaded/booking-payment/booking-payment.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n::-webkit-scrollbar {\n  width: 10px; }\n\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.5); }\n\n::-webkit-scrollbar-thumb:active {\n  background: rgba(0, 0, 0, 0.5); }\n\n.sidebar .sidebar-wrapper {\n  overflow: hidden; }\n\n.full-page:before {\n  background: transparent; }\n\n.form-group.label-floating.is-focused label.control-label {\n  color: #9c27b0; }\n\n.form-control {\n  height: 34px; }\n\n#home-search input, #search-nav input {\n  color: #fff; }\n\n#home-search .mat-input-placeholder.mat-empty, #search-nav .mat-input-placeholder.mat-empty {\n  color: #3f3f3f; }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n.animated.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n.main-panel {\n  width: 100%; }\n  .main-panel .main-content {\n    margin-top: 0px; }\n\n.wizard-card {\n  background-color: white; }\n  .wizard-card .nav-pills > li.active {\n    border-radius: 4px;\n    -webkit-transform: scale(1.05);\n            transform: scale(1.05);\n    box-shadow: 0px 2px 8px 0px;\n    background-color: #9c27b0; }\n    .wizard-card .nav-pills > li.active a {\n      color: #fff !important;\n      font-weight: bold; }\n\n.nav-pills:not(.nav-pills-icons) > li > a {\n  border-radius: 4px; }\n\n.error-msg {\n  font-weight: 400;\n  color: #9C160E; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/lazy-loaded/booking-payment/booking-payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingPaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookingPaymentComponent = (function () {
    function BookingPaymentComponent(_activateRoute) {
        this._activateRoute = _activateRoute;
        this.currentStep = 1;
        /**Handle behavior of next btn*/
        this.isFinishBtnDisable = true;
    }
    BookingPaymentComponent.prototype.ngOnInit = function () {
        this.orderDetail = JSON.parse(this._activateRoute.snapshot.params['0']);
    };
    BookingPaymentComponent.prototype.recvCusFormValue = function (event) {
        this.isFinishBtnDisable = true;
        if (event.valid && event.dirty) {
            this.isFinishBtnDisable = false;
            if (event.values) {
                this.customerInfo = event.values;
            }
        }
    };
    BookingPaymentComponent.prototype.recvAlterResquestValue = function (event) {
        this.alterRequestDetail = event;
    };
    /**@description:
     * When click finish. Create an order and also auto create a new Account for customer
     */
    BookingPaymentComponent.prototype.onCompleteBookingClick = function () {
        this.orderDetail.note = this.convertRequestToText();
        this.orderDetail.customer = this.customerInfo;
        this.orderDetail.total = this.orderDetail.quantity * this.orderDetail.room.price;
        this.currentStep = 2;
    };
    BookingPaymentComponent.prototype.convertRequestToText = function () {
        var _this = this;
        var note = '';
        if (this.alterRequestDetail) {
            Object.keys(this.alterRequestDetail).forEach(function (key) {
                if (_this.alterRequestDetail[key]) {
                    switch (key) {
                        case 'arriveAt':
                            note += 'Arrive at: ' + _this.alterRequestDetail[key];
                            break;
                        case 'note':
                            note += ', note: ' + _this.alterRequestDetail[key];
                            break;
                        case 'isQuite':
                            note += ', quite room: ' + (_this.alterRequestDetail[key] ? 'yes' : 'no');
                            break;
                        case 'isRooftop':
                            note += ', roof top room: ' + (_this.alterRequestDetail[key] ? 'yes' : 'no');
                            break;
                        case 'isAirportPickUp':
                            note += ', pick me at airport: ' + (_this.alterRequestDetail[key] ? 'yes' : 'no');
                            break;
                        case 'isCityView':
                            note += ', city view room: ' + (_this.alterRequestDetail[key] ? 'yes' : 'no');
                            break;
                        case 'isNoSmoking':
                            note += ', no smoking room: ' + (_this.alterRequestDetail[key] ? 'yes' : 'no');
                            break;
                    }
                }
            });
        }
        return note;
    };
    BookingPaymentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-booking-payment',
            template: __webpack_require__("../../../../../src/app/modules/lazy-loaded/booking-payment/booking-payment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/lazy-loaded/booking-payment/booking-payment.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BookingPaymentComponent);
    return BookingPaymentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/lazy-loaded/booking-payment/booking-payment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPaymentModule", function() { return BookingPaymentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__booking_payment_component__ = __webpack_require__("../../../../../src/app/modules/lazy-loaded/booking-payment/booking-payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__booking_detail_booking_detail_component__ = __webpack_require__("../../../../../src/app/modules/lazy-loaded/booking-payment/booking-detail/booking-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__booking_invoice_booking_invoice_component__ = __webpack_require__("../../../../../src/app/modules/lazy-loaded/booking-payment/booking-invoice/booking-invoice.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/modules/lazy-loaded/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_form_validator_form_validator_service__ = __webpack_require__("../../../../../src/app/service/form-validator/form-validator.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var paymentRoute = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__booking_payment_component__["a" /* BookingPaymentComponent */]
    }
];
var BookingPaymentModule = (function () {
    function BookingPaymentModule() {
    }
    BookingPaymentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(paymentRoute),
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__booking_payment_component__["a" /* BookingPaymentComponent */],
                __WEBPACK_IMPORTED_MODULE_4__booking_detail_booking_detail_component__["a" /* BookingDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_5__booking_invoice_booking_invoice_component__["a" /* BookingInvoiceComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__service_form_validator_form_validator_service__["a" /* FormValidatorService */]
            ]
        })
    ], BookingPaymentModule);
    return BookingPaymentModule;
}());



/***/ }),

/***/ "../../../../../src/app/service/form-validator/form-validator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormValidatorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormValidatorService = (function () {
    function FormValidatorService() {
    }
    FormValidatorService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'invalidPhone': 'Invalid phone number',
            'invalidEmail': 'Invalid email address',
            'minlength': 'Not enough characters'
        };
        return config[validatorName];
    };
    FormValidatorService.emailValidator = function (control) {
        if (control.value && control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmail': true };
        }
    };
    FormValidatorService.phoneValidator = function (control) {
        if (control.value && control.value.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)) {
            return null;
        }
        else {
            return { 'invalidPhone': true };
        }
    };
    FormValidatorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], FormValidatorService);
    return FormValidatorService;
}());



/***/ })

});
//# sourceMappingURL=booking-payment.module.chunk.js.map