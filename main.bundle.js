webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/modules/lazy-loaded/booking-payment/booking-payment.module": [
		"../../../../../src/app/modules/lazy-loaded/booking-payment/booking-payment.module.ts",
		"booking-payment.module",
		"common"
	],
	"app/modules/lazy-loaded/hotel/hotel.module": [
		"../../../../../src/app/modules/lazy-loaded/hotel/hotel.module.ts",
		"hotel.module",
		"common"
	],
	"app/modules/lazy-loaded/user/user.module": [
		"../../../../../src/app/modules/lazy-loaded/user/user.module.ts",
		"user.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__preload_strategy_service__ = __webpack_require__("../../../../../src/app/preload-strategy.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var lazyRoute = [
    {
        path: 'hotel',
        loadChildren: 'app/modules/lazy-loaded/hotel/hotel.module#HotelModule',
        data: { preload: true }
    },
    {
        path: 'checkout',
        loadChildren: 'app/modules/lazy-loaded/booking-payment/booking-payment.module#BookingPaymentModule',
        data: { preload: true }
    },
    {
        path: 'user',
        loadChildren: 'app/modules/lazy-loaded/user/user.module#UserModule',
        data: { preload: true }
    }
];
var mainRoutes = lazyRoute.concat([
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__landing_page_landing_page_component__["a" /* LandingPageComponent */]
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_3__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
    }
]);
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(mainRoutes, {
                    preloadingStrategy: __WEBPACK_IMPORTED_MODULE_4__preload_strategy_service__["a" /* PreloadStrategyService */]
                })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n::-webkit-scrollbar {\n  width: 10px; }\n\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.5); }\n\n::-webkit-scrollbar-thumb:active {\n  background: rgba(0, 0, 0, 0.5); }\n\n.sidebar .sidebar-wrapper {\n  overflow: hidden; }\n\n.full-page:before {\n  background: transparent; }\n\n.form-group.label-floating.is-focused label.control-label {\n  color: #9c27b0; }\n\n.form-control {\n  height: 34px; }\n\n#home-search input, #search-nav input {\n  color: #fff; }\n\n#home-search .mat-input-placeholder.mat-empty, #search-nav .mat-input-placeholder.mat-empty {\n  color: #3f3f3f; }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n.animated.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feature_component_navigation_vertical_navbar_vertical_navbar_component__ = __webpack_require__("../../../../../src/app/feature-component/navigation/vertical-navbar/vertical-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feature_component_navigation_horizontal_navbar_horizontal_navbar_component__ = __webpack_require__("../../../../../src/app/feature-component/navigation/horizontal-navbar/horizontal-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feature_component_bg_setting_bg_setting_component__ = __webpack_require__("../../../../../src/app/feature-component/bg-setting/bg-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__feature_component_search_option_search_option_component__ = __webpack_require__("../../../../../src/app/feature-component/search-option/search-option.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_search_search_service__ = __webpack_require__("../../../../../src/app/service/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__preload_strategy_service__ = __webpack_require__("../../../../../src/app/preload-strategy.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__feature_component_navigation_vertical_navbar_vertical_navbar_component__["a" /* VerticalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__feature_component_navigation_horizontal_navbar_horizontal_navbar_component__["a" /* HorizontalNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__feature_component_bg_setting_bg_setting_component__["a" /* BgSettingComponent */],
                __WEBPACK_IMPORTED_MODULE_9__landing_page_landing_page_component__["a" /* LandingPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__feature_component_search_option_search_option_component__["a" /* SearchOptionComponent */],
                __WEBPACK_IMPORTED_MODULE_14__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_perfect_scrollbar__["a" /* PerfectScrollbarModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MatAutocompleteModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__preload_strategy_service__["a" /* PreloadStrategyService */],
                __WEBPACK_IMPORTED_MODULE_15__service_search_search_service__["a" /* SearchService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/feature-component/bg-setting/bg-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  bg-setting works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/feature-component/bg-setting/bg-setting.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature-component/bg-setting/bg-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BgSettingComponent; });
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

var BgSettingComponent = (function () {
    function BgSettingComponent() {
    }
    BgSettingComponent.prototype.ngOnInit = function () {
    };
    BgSettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-bg-setting',
            template: __webpack_require__("../../../../../src/app/feature-component/bg-setting/bg-setting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feature-component/bg-setting/bg-setting.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], BgSettingComponent);
    return BgSettingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feature-component/navigation/horizontal-navbar/horizontal-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-minimize\">\r\n      <button class=\"btn btn-round btn-white btn-fill btn-just-icon\" id=\"minimizeSidebar\">\r\n        <i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>\r\n        <i class=\"material-icons visible-on-sidebar-mini\">view_list</i>\r\n        <div class=\"ripple-container\"></div></button>\r\n    </div>\r\n    <div class=\"navbar-header\">\r\n      <button class=\"navbar-toggle\" type=\"button\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"/dashboard\"> Dashboard </a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\">\r\n      <div>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li>\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#pablo\">\r\n              <i class=\"material-icons\">dashboard</i>\r\n              <p class=\"hidden-lg hidden-md\">Dashboard</p>\r\n            </a>\r\n          </li>\r\n          <li class=\"dropdown\">\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n              <i class=\"material-icons\">notifications</i>\r\n              <span class=\"notification\">5</span>\r\n              <p class=\"hidden-lg hidden-md\">\r\n                Notifications\r\n                <b class=\"caret\"></b>\r\n              </p>\r\n            </a>\r\n            <ul class=\"dropdown-menu\">\r\n              <li>\r\n                <a href=\"#\">Mike John responded to your email</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">You have 5 new tasks</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">You're now friend with Andrew</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">Another Notification</a>\r\n              </li>\r\n              <li>\r\n                <a href=\"#\">Another One</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#pablo\">\r\n              <i class=\"material-icons\">person</i>\r\n              <p class=\"hidden-lg hidden-md\">Profile</p>\r\n            </a>\r\n          </li>\r\n          <li class=\"separator hidden-lg hidden-md\"></li>\r\n        </ul>\r\n        <form class=\"navbar-form navbar-right\" role=\"search\">\r\n          <div class=\"form-group form-search is-empty\">\r\n            <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\r\n            <span class=\"material-input\"></span>\r\n          </div>\r\n          <button class=\"btn btn-white btn-round btn-just-icon\" type=\"submit\">\r\n            <i class=\"material-icons\">search</i>\r\n            <div class=\"ripple-container\"></div>\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/feature-component/navigation/horizontal-navbar/horizontal-navbar.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature-component/navigation/horizontal-navbar/horizontal-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HorizontalNavbarComponent; });
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

var HorizontalNavbarComponent = (function () {
    function HorizontalNavbarComponent() {
    }
    HorizontalNavbarComponent.prototype.ngOnInit = function () {
    };
    HorizontalNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-horizontal-navbar',
            template: __webpack_require__("../../../../../src/app/feature-component/navigation/horizontal-navbar/horizontal-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feature-component/navigation/horizontal-navbar/horizontal-navbar.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], HorizontalNavbarComponent);
    return HorizontalNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feature-component/navigation/vertical-navbar/vertical-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n  <div class=\"logo-normal\">\r\n    <a class=\"simple-text\">\r\n      First Place Team\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"logo-img\">\r\n    <img >\r\n  </div>\r\n</div>\r\n\r\n<perfect-scrollbar class=\"sidebar-wrapper ps-container\">\r\n  <div class=\"sidebar-wrapper\">\r\n\r\n  <div class=\"user\">\r\n    <div class=\"photo\">\r\n      <img >\r\n    </div>\r\n    <div class=\"info\">\r\n      <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseExample\">\r\n                        <span>\r\n                            Tania Andrew\r\n                            <b class=\"caret\"></b>\r\n                        </span>\r\n      </a>\r\n      <div class=\"collapse\" id=\"collapseExample\" style=\"height: auto;\">\r\n        <ul class=\"nav\">\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <span class=\"sidebar-mini\">MP</span>\r\n              <span class=\"sidebar-normal\">My Profile</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <span class=\"sidebar-mini\">EP</span>\r\n              <span class=\"sidebar-normal\">Edit Profile</span>\r\n            </a>\r\n          </li>\r\n          <li>\r\n            <a href=\"javascript:void(0)\">\r\n              <span class=\"sidebar-mini\">S</span>\r\n              <span class=\"sidebar-normal\">Settings</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!---->\r\n  <div class=\"nav-container\">\r\n    <ul class=\"nav\">\r\n      <li *ngFor=\"let item of navItem\" routerlinkactive=\"active\" class=\"{{item.klass}}\">\r\n        <a>\r\n          <i class=\"material-icons\">{{item.icon}}</i>\r\n          <p>{{item.title}}</p>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n</perfect-scrollbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/feature-component/navigation/vertical-navbar/vertical-navbar.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature-component/navigation/vertical-navbar/vertical-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerticalNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_data_nav_item__ = __webpack_require__("../../../../../src/app/mock-data/nav-item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VerticalNavbarComponent = (function () {
    function VerticalNavbarComponent() {
    }
    VerticalNavbarComponent.prototype.ngOnInit = function () {
        this.navItem = __WEBPACK_IMPORTED_MODULE_1__mock_data_nav_item__["a" /* MockNavItem */];
        console.log(this.navItem);
    };
    VerticalNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vertical-navbar',
            template: __webpack_require__("../../../../../src/app/feature-component/navigation/vertical-navbar/vertical-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feature-component/navigation/vertical-navbar/vertical-navbar.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], VerticalNavbarComponent);
    return VerticalNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/feature-component/search-option/search-option.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\">\r\n  <div id=\"search-destination\" class=\"col-md-4\">\r\n    <mat-form-field>\r\n      <input type=\"text\" placeholder=\"Destination\" matInput\r\n             [matAutocomplete]=\"destination\" aria-label=\"Destination\"\r\n             formControlName=\"place\">\r\n      <mat-autocomplete #destination=\"matAutocomplete\" [displayWith]=\"customDisplay\">\r\n        <mat-option *ngFor=\"let item of filteredItem\" [value]=\"item\">\r\n          <ng-container *ngIf=\"item.city\">\r\n            <span><i class=\"material-icons\">location_city</i>{{item.city}}</span>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"item.name\">\r\n            <div class=\"hotel-panel\">\r\n              <span><i class=\"material-icons\">store</i>{{item.name}}</span>\r\n              <div><i class=\"material-icons\">location_on</i>{{item.address}}</div>\r\n            </div>\r\n          </ng-container>\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n  </div>\r\n  <div id=\"search-checkin\" class=\"col-md-3\">\r\n    <mat-form-field>\r\n      <mat-datepicker-toggle matSuffix [for]=\"checkinDate\">\r\n      </mat-datepicker-toggle>\r\n      <input matInput [min]=\"checkinMinDate\" [matDatepicker]=\"checkinDate\"\r\n             placeholder=\"Checkin date\" formControlName=\"checkin\">\r\n      <mat-datepicker #checkinDate></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n  <div id=\"search-checkout\" class=\"col-md-3\">\r\n    <mat-form-field>\r\n      <mat-datepicker-toggle matSuffix [for]=\"checkoutDate\">\r\n      </mat-datepicker-toggle>\r\n      <input matInput [min]=\"checkoutMinDate\" [matDatepicker]=\"checkoutDate\"\r\n             placeholder=\"Checkout date\" formControlName=\"checkout\">\r\n      <mat-datepicker #checkoutDate></mat-datepicker>\r\n    </mat-form-field>\r\n  </div>\r\n  <div id=\"search-btn\" class=\"col-md-2\">\r\n    <button type=\"submit\" class=\"btn btn-primary btn-fill\" style=\"transform: translateY(-12px)\"\r\n            [disabled]=\"isSearchBtnDisable\"\r\n            (click)=\"handleSearchBtnClick()\">\r\n      <i class=\"material-icons\">search</i>\r\n      <span>Search</span>\r\n      <div class=\"ripple-container\"></div>\r\n    </button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/feature-component/search-option/search-option.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n::-webkit-scrollbar {\n  width: 10px; }\n\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.5); }\n\n::-webkit-scrollbar-thumb:active {\n  background: rgba(0, 0, 0, 0.5); }\n\n.sidebar .sidebar-wrapper {\n  overflow: hidden; }\n\n.full-page:before {\n  background: transparent; }\n\n.form-group.label-floating.is-focused label.control-label {\n  color: #9c27b0; }\n\n.form-control {\n  height: 34px; }\n\n#home-search input, #search-nav input {\n  color: #fff; }\n\n#home-search .mat-input-placeholder.mat-empty, #search-nav .mat-input-placeholder.mat-empty {\n  color: #3f3f3f; }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n.animated.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n.mat-input-element {\n  color: white; }\n\n.form-control {\n  color: white; }\n\n.hotel-panel > div {\n  -webkit-transform: translate(130px, -65%);\n          transform: translate(130px, -65%);\n  font-size: 12px; }\n  .hotel-panel > div > i {\n    font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/feature-component/search-option/search-option.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchOptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchOptionComponent = (function () {
    function SearchOptionComponent(_fb, _router) {
        this._fb = _fb;
        this._router = _router;
        this.checkinMinDate = new Date();
        this.checkoutMinDate = new Date();
        this.isSearchBtnDisable = true;
        this.filteredItem = [];
        this.formValueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    Object.defineProperty(SearchOptionComponent.prototype, "searchData", {
        set: function (val) {
            if (val) {
                this.formData = val;
                this.initFormData();
            }
        },
        enumerable: true,
        configurable: true
    });
    SearchOptionComponent.prototype.ngOnInit = function () {
        this.checkoutMinDate.setDate(this.checkinMinDate.getDate() + 1);
        this.initFormData();
    };
    SearchOptionComponent.prototype.initFormData = function () {
        var _this = this;
        this.formGroup = this._fb.group({
            place: [this.formData && this.formData.place || null],
            checkin: [this.formData && this.formData.checkin || this.checkinMinDate],
            checkout: [this.formData && this.formData.checkout || this.checkoutMinDate],
        });
        this.formGroup.valueChanges.debounceTime(300).subscribe(function (values) {
            _this.formValueChange.emit(values);
            _this.isSearchBtnDisable = true;
            if (typeof values.place === 'object') {
                _this.isSearchBtnDisable = false;
            }
        });
    };
    SearchOptionComponent.prototype.customDisplay = function (destination) {
        return destination ? (destination.city || destination.name || destination) : destination;
    };
    SearchOptionComponent.prototype.handleSearchBtnClick = function () {
        var searchData = {
            place: this.formData.place,
            checkout: this.formData.checkout.toISOString().replace(/T.*/, '').split('-').reverse().join('-'),
            checkin: this.formData.checkin.toISOString().replace(/T.*/, '').split('-').reverse().join('-'),
        };
        searchData.place = searchData.place.placeID;
        this._router.navigate(['../hotel/list', [JSON.stringify(searchData)]]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], SearchOptionComponent.prototype, "searchData", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchOptionComponent.prototype, "filteredItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchOptionComponent.prototype, "formValueChange", void 0);
    SearchOptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search-option',
            template: __webpack_require__("../../../../../src/app/feature-component/search-option/search-option.component.html"),
            styles: [__webpack_require__("../../../../../src/app/feature-component/search-option/search-option.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], SearchOptionComponent);
    return SearchOptionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page\">\r\n\r\n  <nav id=\"home-nav\" class=\"navbar navbar-primary navbar-transparent navbar-fixed-top\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button class=\"navbar-toggle\" data-target=\"#menu-example\" data-toggle=\"collapse\" type=\"button\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"/#/dashboard\">Homesty Team</a>\r\n      </div>\r\n      <div id=\"search-nav\" class=\"hidden\">\r\n        <app-search-option [searchData]=\"searchData\"\r\n                           [filteredItem]=\"filteredItemList\"\r\n                           (formValueChange)=\"onSearchValueChange($event)\"\r\n        ></app-search-option>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"menu-example\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li class=\"custom-nav-item\">\r\n            <a routerLink=\"/user\">\r\n              <i class=\"material-icons\">flight_takeoff</i> Login\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n\r\n  <div id=\"home-search\" class=\"row search-bar\">\r\n    <div class=\"col-lg-10 col-md-10 col-lg-offset-1 col-md-offset-1\">\r\n      <div class=\"card animated fadeInDown\">\r\n        <div class=\"card-header card-header-text\" data-background-color=\"rose\">\r\n          <h4 class=\"card-title\">\r\n            Hotel\r\n          </h4>\r\n        </div>\r\n        <div class=\"card-content\">\r\n          <div class=\"row\">\r\n            <app-search-option [searchData]=\"searchData\"\r\n                               [filteredItem]=\"filteredItemList\"\r\n                               (formValueChange)=\"onSearchValueChange($event)\"\r\n            ></app-search-option>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"video-wrapper\">\r\n    <!--<video id=\"bg-video\" loop muted>-->\r\n      <!--<source src=\"../../assets/video/landing-video-bg.mp4\" type=\"video/mp4\">-->\r\n    <!--</video>-->\r\n    <img src=\"https://pay4listen.github.io/homesty/assets/img/hotel/hotel-detail-6.jpg\">\r\n  </div>\r\n\r\n  <div style=\"height: 300px;\"></div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n::-webkit-scrollbar {\n  width: 10px; }\n\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  background: rgba(0, 0, 0, 0.1); }\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(0, 0, 0, 0.5); }\n\n::-webkit-scrollbar-thumb:active {\n  background: rgba(0, 0, 0, 0.5); }\n\n.sidebar .sidebar-wrapper {\n  overflow: hidden; }\n\n.full-page:before {\n  background: transparent; }\n\n.form-group.label-floating.is-focused label.control-label {\n  color: #9c27b0; }\n\n.form-control {\n  height: 34px; }\n\n#home-search input, #search-nav input {\n  color: #fff; }\n\n#home-search .mat-input-placeholder.mat-empty, #search-nav .mat-input-placeholder.mat-empty {\n  color: #3f3f3f; }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n.animated.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown; }\n\n.video-wrapper {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0; }\n  .video-wrapper video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n  .video-wrapper img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n\n.search-bar {\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n  padding-top: 20%; }\n  .search-bar .card {\n    background: rgba(205, 205, 205, 0.3); }\n    .search-bar .card:hover {\n      background: rgba(205, 205, 205, 0.8); }\n  .search-bar .mat-input-container {\n    width: 100%; }\n\n.navbar .navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px; }\n\n.custom-nav-item {\n  border: 2px solid;\n  border-radius: 4px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_search_search_service__ = __webpack_require__("../../../../../src/app/service/search/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingPageComponent = (function () {
    function LandingPageComponent(_search) {
        this._search = _search;
        this.searchData = {
            checkin: new Date(),
            checkout: new Date(),
        };
    }
    LandingPageComponent.prototype.ngOnInit = function () {
        this.searchData.checkout.setDate(this.searchData.checkin.getDate() + 1);
        // setTimeout(() => {
        //   const video = <HTMLMediaElement>document.getElementById('bg-video');
        //   video.play();
        // }, 500);
    };
    LandingPageComponent.prototype.onWindowScroll = function () {
        if (window.pageYOffset >= 225) {
            document.getElementById('home-nav').style.backgroundColor = 'rgba(205, 205, 205, 0.74)';
            document.getElementById('home-search').style.display = 'none';
            document.getElementById('search-nav').classList.remove('hidden');
            // search form behavior
            document.getElementById('search-destination').className = 'col-md-3';
            document.getElementById('search-destination').style.marginLeft = '5%';
            document.getElementById('search-checkin').className = 'col-md-2';
            document.getElementById('search-checkout').className = 'col-md-2';
            document.getElementById('search-btn').className = 'col-md-1';
            document.getElementById('search-btn').setAttribute('style', 'position: relative; top: 13px');
            var spanText = document.getElementById('search-btn').children[0].children[1];
            spanText.style.display = 'none';
        }
        else {
            document.getElementById('home-search').style.display = 'block';
            document.getElementById('home-nav').style.backgroundColor = 'transparent';
            document.getElementById('search-nav').classList.add('hidden');
        }
    };
    LandingPageComponent.prototype.onSearchValueChange = function (event) {
        var _this = this;
        this.searchData = event;
        if (event.place && event.place !== '' && typeof event.place !== 'object') {
            this._search.searchDestination(this.searchData.place).then(function (result) { return _this.filteredItemList = result; });
        }
        this.filteredItemList = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], LandingPageComponent.prototype, "onWindowScroll", null);
    LandingPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing-page',
            template: __webpack_require__("../../../../../src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/landing-page/landing-page.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_search_search_service__["a" /* SearchService */]])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mock-data/hotel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockHotel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MockRoomType; });
var MockHotel = [
    {
        hotelID: 'dl-h1',
        placeID: 'dl',
        name: 'Hoang Van Da Lat',
        address: '123 Ho Xuan Huong',
        certification: 'Homesty Honor Degree',
        point: 7.5,
        star: 4,
        image: ['hotel-1.jpeg'],
        cheapestPrice: 845000,
        service: [
            {
                catName: 'Optional',
                serviceItem: [
                    { name: 'Breakfast', value: true },
                    { name: 'Buffet', value: false },
                    { name: 'BBQ', value: false }
                ]
            },
            {
                catName: 'Convenient',
                serviceItem: [
                    { name: 'Golf', value: false },
                    { name: 'Hiring Scooter', value: true },
                    { name: 'Smoking Room', value: false },
                    { name: 'Parking Area', value: true },
                    { name: 'Poll', value: true },
                    { name: 'Wifi', value: true },
                    { name: 'Gym', value: false },
                    { name: 'Spa', value: false },
                    { name: 'Airport Picking Up', value: true }
                ]
            }
        ]
    },
    {
        hotelID: 'dl-h2',
        placeID: 'dl',
        name: 'Thanh Tuyen Da Lat',
        address: '201 Dong Khoi',
        certification: 'Homesty Honor Degree',
        point: 8,
        star: 3,
        image: ['hotel-1.jpeg'],
        cheapestPrice: 754000,
        service: [
            {
                catName: 'Optional',
                serviceItem: [
                    { name: 'Breakfast', value: true },
                    { name: 'Buffet', value: true },
                    { name: 'BBQ', value: false }
                ]
            },
            {
                catName: 'Convenient',
                serviceItem: [
                    { name: 'Golf', value: false },
                    { name: 'Hiring Scooter', value: true },
                    { name: 'Smoking Room', value: false },
                    { name: 'Parking Area', value: true },
                    { name: 'Poll', value: true },
                    { name: 'Wifi', value: true },
                    { name: 'Gym', value: false },
                    { name: 'Spa', value: true },
                    { name: 'Airport Picking Up', value: true }
                ]
            }
        ]
    },
    {
        hotelID: 'dl-h3',
        placeID: 'dl',
        name: 'Empire Hotel Da Lat',
        address: '13 Tran Hung Dao',
        certification: 'Homesty Honor Degree',
        point: 6,
        star: 2,
        image: ['hotel-1.jpeg'],
        cheapestPrice: 1545000,
        service: [
            {
                catName: 'Optional',
                serviceItem: [
                    { name: 'Breakfast', value: true },
                    { name: 'Buffet', value: false },
                    { name: 'BBQ', value: true }
                ]
            },
            {
                catName: 'Convenient',
                serviceItem: [
                    { name: 'Golf', value: false },
                    { name: 'Hiring Scooter', value: true },
                    { name: 'Smoking Room', value: false },
                    { name: 'Parking Area', value: true },
                    { name: 'Poll', value: true },
                    { name: 'Wifi', value: true },
                    { name: 'Gym', value: false },
                    { name: 'Spa', value: false },
                    { name: 'Airport Picking Up', value: true }
                ]
            }
        ]
    },
    {
        hotelID: 'dl-h4',
        placeID: 'dl',
        name: 'Dang Cap Da Lat',
        address: '123 Ho Xuan Huong',
        certification: 'Homesty Honor Degree',
        point: 7.5,
        star: 4,
        image: ['hotel-1.jpeg'],
        cheapestPrice: 530000,
        service: [
            {
                catName: 'Optional',
                serviceItem: [
                    { name: 'Breakfast', value: true },
                    { name: 'Buffet', value: true },
                    { name: 'BBQ', value: false }
                ]
            },
            {
                catName: 'Convenient',
                serviceItem: [
                    { name: 'Golf', value: false },
                    { name: 'Hiring Scooter', value: true },
                    { name: 'Smoking Room', value: false },
                    { name: 'Parking Area', value: true },
                    { name: 'Poll', value: true },
                    { name: 'Wifi', value: true },
                    { name: 'Gym', value: true },
                    { name: 'Spa', value: false },
                    { name: 'Airport Picking Up', value: true }
                ]
            }
        ]
    },
    {
        hotelID: 'nt-h1',
        placeID: 'nt',
        name: 'Hoang Van Nha Trang',
        address: '123 Ho Xuan Huong',
        certification: 'Homesty Honor Degree',
        point: 7.5,
        star: 4,
        image: ['hotel-1.jpeg'],
        cheapestPrice: 875000,
    },
    {
        hotelID: 'nt-h2',
        placeID: 'nt',
        name: 'Thanh Tuyen Nha Trang',
        address: '201 Dong Khoi',
        certification: 'Homesty Honor Degree',
        point: 8,
        star: 3,
        image: ['hotel-1.jpeg'],
        cheapestPrice: 965000,
    },
    {
        hotelID: 'nt-h3',
        placeID: 'nt',
        name: 'Empire Hotel Nha Trang',
        address: '13 Tran Hung Dao',
        certification: 'Homesty Honor Degree',
        point: 6,
        star: 2,
        image: ['hotel-2.jpeg'],
        cheapestPrice: 2000000,
    },
    {
        hotelID: 'nt-h4',
        placeID: 'nt',
        name: 'Dang Cap Nha Trang',
        address: '123 Ho Xuan Huong',
        certification: 'Homesty Honor Degree',
        point: 7.5,
        star: 4,
        image: ['hotel-1.jpeg'],
        cheapestPrice: 456000,
    },
    {
        hotelID: 'nt-h5',
        placeID: 'nt',
        name: 'White House Nha Trang',
        address: '12 Bach Dang',
        certification: 'Homesty Honor Degree',
        point: 9,
        star: 4.5,
        image: ['hotel-2.jpeg'],
        cheapestPrice: 859000,
    },
    {
        hotelID: 'vt-h3',
        placeID: 'vt',
        name: 'Empire Hotel Vung Tau',
        address: '254 Thuy Van',
        certification: 'Homesty Honor Degree',
        point: 7.6,
        star: 3,
        image: ['hotel-2.jpeg'],
        cheapestPrice: 874000,
    },
    {
        hotelID: 'vt-h4',
        placeID: 'vt',
        name: 'Dang Cap Vung Tau',
        address: '123 Tran Hung Dao',
        certification: 'Homesty Honor Degree',
        point: 7.5,
        star: 4,
        image: ['hotel-1.jpeg'],
        cheapestPrice: 689000,
    },
    {
        hotelID: 'vt-h5',
        placeID: 'vt',
        name: 'White House Vung Tau',
        address: '12 Tran Hung Dao',
        certification: 'Homesty Honor Degree',
        point: 9,
        star: 4.5,
        image: ['hotel-2.jpeg'],
        cheapestPrice: 745000,
    }
];
var MockRoomType = [
    {
        roomTypeID: 1,
        hotelID: 'dl-h1',
        name: 'Luxury',
        image: 'hotel-detail-2.jpg',
        bed: '2 adult beds and 1 kid bed',
        size: '10x5m',
        price: 700000,
        capacity: 3,
        isBalcony: true
    },
    {
        roomTypeID: 2,
        hotelID: 'dl-h1',
        name: 'Superior',
        image: 'hotel-detail-2.jpg',
        bed: '1 adult bed',
        size: '7x5m',
        price: 500000,
        capacity: 2,
        isBalcony: true
    },
    {
        roomTypeID: 3,
        hotelID: 'dl-h1',
        name: 'Family',
        image: 'hotel-detail-2.jpg',
        bed: '2 adult beds and 2 kid beds',
        size: '20x10m',
        price: 1200000,
        capacity: 5,
        isBalcony: true
    },
    {
        roomTypeID: 4,
        hotelID: 'dl-h1',
        name: 'Deluxe City View',
        image: 'hotel-detail-2.jpg',
        bed: '1 adult beds',
        size: '10x10m',
        price: 800000,
        capacity: 3,
        isBalcony: true
    },
    {
        roomTypeID: 5,
        hotelID: 'dl-h1',
        name: 'Deluxe with Balcony',
        image: 'hotel-detail-2.jpg',
        bed: '2 adult beds',
        size: '10x10m',
        price: 700000,
        capacity: 3,
        isBalcony: true
    }
];


/***/ }),

/***/ "../../../../../src/app/mock-data/nav-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockNavItem; });
var MockNavItem = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: 'dashboard',
        klass: ''
    },
    {
        title: 'Setting',
        url: '/setting',
        icon: '',
        klass: ''
    }
];


/***/ }),

/***/ "../../../../../src/app/mock-data/place.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockPlace; });
var MockPlace = [
    {
        placeID: 'dl', city: 'Da Lat', country: 'Viet Nam', province: 'Lam Dong'
    },
    {
        placeID: 'nt', city: 'Nha Trang', country: 'Viet Nam', province: 'Khanh Hoa'
    },
    {
        placeID: 'pt', city: 'Phan Thiet', country: 'Viet Nam', province: 'Khanh Hoa'
    },
    {
        placeID: 'dn', city: 'Da Nang', country: 'Viet Nam', province: 'Da Nang'
    },
    {
        placeID: 'ch', city: 'Can Gio', country: 'Viet Nam', province: 'Can Gio'
    },
    {
        placeID: 'vt', city: 'Vung Tau', country: 'Viet Nam', province: 'Ba Ria Vung Tua'
    }
];


/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/preload-strategy.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloadStrategyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreloadStrategyService = (function () {
    function PreloadStrategyService() {
    }
    PreloadStrategyService.prototype.preload = function (route, load) {
        return route.data && route.data.preload ? load() : __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
    };
    PreloadStrategyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PreloadStrategyService);
    return PreloadStrategyService;
}());



/***/ }),

/***/ "../../../../../src/app/service/search/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_data_hotel__ = __webpack_require__("../../../../../src/app/mock-data/hotel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mock_data_place__ = __webpack_require__("../../../../../src/app/mock-data/place.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchService = (function () {
    function SearchService() {
        this.$placeList = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](__WEBPACK_IMPORTED_MODULE_3__mock_data_place__["a" /* MockPlace */]);
        this.$hotelList = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](__WEBPACK_IMPORTED_MODULE_2__mock_data_hotel__["a" /* MockHotel */]);
    }
    SearchService.prototype.searchDestination = function (searchKey) {
        var searchResult = this.$placeList.getValue().filter(function (place) { return place.city.toLowerCase().includes(searchKey.toLowerCase()); });
        if (searchResult && searchResult.length > 0) {
            return Promise.resolve(searchResult);
        }
        else {
            searchResult = this.$hotelList.getValue().filter(function (hotel) { return hotel.name.toLowerCase().includes(searchKey.toLowerCase()); });
            return Promise.resolve(searchResult);
        }
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map