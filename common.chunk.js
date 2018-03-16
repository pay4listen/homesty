webpackJsonp(["common"],{

/***/ "../../../../../src/app/modules/lazy-loaded/shared/pipe/order-status-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderStatusPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_main_order_order__ = __webpack_require__("../../../../../src/model/main/order/order.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OrderStatusPipe = (function () {
    function OrderStatusPipe() {
    }
    OrderStatusPipe.prototype.transform = function (value, args) {
        return __WEBPACK_IMPORTED_MODULE_1__model_main_order_order__["a" /* EnumOrderStatus */][value];
    };
    OrderStatusPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'orderStatusPipe'
        })
    ], OrderStatusPipe);
    return OrderStatusPipe;
}());



/***/ }),

/***/ "../../../../../src/app/modules/lazy-loaded/shared/pipe/transform-loop.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransformLoopPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TransformLoopPipe = (function () {
    function TransformLoopPipe() {
    }
    TransformLoopPipe.prototype.transform = function (value, args) {
        var outputArr = [];
        for (var i = 0; i < value; i++) {
            outputArr.push(i);
        }
        return outputArr;
    };
    TransformLoopPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'transformLoop'
        })
    ], TransformLoopPipe);
    return TransformLoopPipe;
}());



/***/ }),

/***/ "../../../../../src/app/modules/lazy-loaded/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipe_transform_loop_pipe__ = __webpack_require__("../../../../../src/app/modules/lazy-loaded/shared/pipe/transform-loop.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipe_order_status_pipe_pipe__ = __webpack_require__("../../../../../src/app/modules/lazy-loaded/shared/pipe/order-status-pipe.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharingModule = (function () {
    function SharingModule() {
    }
    SharingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pipe_transform_loop_pipe__["a" /* TransformLoopPipe */],
                __WEBPACK_IMPORTED_MODULE_3__pipe_order_status_pipe_pipe__["a" /* OrderStatusPipe */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__pipe_transform_loop_pipe__["a" /* TransformLoopPipe */],
                __WEBPACK_IMPORTED_MODULE_3__pipe_order_status_pipe_pipe__["a" /* OrderStatusPipe */]
            ]
        })
    ], SharingModule);
    return SharingModule;
}());



/***/ }),

/***/ "../../../../../src/model/main/order/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnumOrderStatus; });
var EnumOrderStatus;
(function (EnumOrderStatus) {
    EnumOrderStatus[EnumOrderStatus["Waiting"] = 0] = "Waiting";
    EnumOrderStatus[EnumOrderStatus["Confirmed"] = 1] = "Confirmed";
    EnumOrderStatus[EnumOrderStatus["Canceled"] = 2] = "Canceled";
})(EnumOrderStatus || (EnumOrderStatus = {}));


/***/ })

});
//# sourceMappingURL=common.chunk.js.map