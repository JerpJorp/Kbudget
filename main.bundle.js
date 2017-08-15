webpackJsonp([1],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-home *ngIf=\"userLoggedin; else login\"></app-home>\n<ng-template #login><app-login></app-login></ng-template>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__display_state_service__ = __webpack_require__("../../../../../src/app/display-state.service.ts");
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
    function AppComponent(DisplayStateService, ref) {
        this.DisplayStateService = DisplayStateService;
        this.ref = ref;
        this.title = 'app';
        this.userLoggedin = false;
    }
    AppComponent.prototype.userCheck = function () {
        if (this.DisplayStateService.LoggedInUser !== undefined) {
            this.userLoggedin = true;
        }
        this.ref.detectChanges();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit');
        this.DisplayStateService.event.subscribe(function (x) {
            console.log("service event...");
            if (x == __WEBPACK_IMPORTED_MODULE_1__display_state_service__["a" /* ChangeType */].LoggedInUser) {
                console.log("got login in home");
                _this.userCheck();
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__display_state_service__["b" /* DisplayStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__display_state_service__["b" /* DisplayStateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__display_state_service__ = __webpack_require__("../../../../../src/app/display-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* HttpModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__display_state_service__["b" /* DisplayStateService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/display-state.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DisplayStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayStateService = (function () {
    function DisplayStateService() {
        this.event = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Subject"]();
    }
    DisplayStateService.prototype.UserIsLoggedIn = function () {
        var returnValue = this.LoggedInUser !== undefined && this.LoggedInUser.email !== undefined;
        console.log("DisplayStateService.UserIsLoggedIn: " + returnValue);
        return returnValue;
    };
    DisplayStateService.prototype.SetLoggedInUser = function (googleUser) {
        console.log("setting user: ");
        this.LoggedInUser = googleUser;
        this.event.next(ChangeType.LoggedInUser);
    };
    return DisplayStateService;
}());
DisplayStateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DisplayStateService);

var ChangeType;
(function (ChangeType) {
    ChangeType[ChangeType["LoggedInUser"] = 1] = "LoggedInUser";
})(ChangeType || (ChangeType = {}));
//# sourceMappingURL=display-state.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\r\n * Base structure\r\n */\r\n\r\n/* Move down content because we have a fixed navbar that is 50px tall */\r\nbody {\r\n  padding-top: 50px;\r\n}\r\n\r\n/*\r\n * Typography\r\n */\r\n\r\nh1 {\r\n  margin-bottom: 20px;\r\n  padding-bottom: 9px;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n\r\n/*\r\n * Sidebar\r\n */\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  top: 51px;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  padding: 20px;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n  border-right: 1px solid #eee;\r\n}\r\n\r\n/* Sidebar navigation */\r\n.sidebar {\r\n  padding-left: 0;\r\n  padding-right: 0;\r\n}\r\n\r\n.sidebar .nav {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.sidebar .nav-item {\r\n  width: 100%;\r\n}\r\n\r\n.sidebar .nav-item + .nav-item {\r\n  margin-left: 0;\r\n}\r\n\r\n.sidebar .nav-link {\r\n  border-radius: 0;\r\n}\r\n\r\n/*\r\n * Dashboard\r\n */\r\n\r\n /* Placeholders */\r\n.placeholders {\r\n  padding-bottom: 3rem;\r\n}\r\n\r\n.placeholder img {\r\n  padding-top: 1.5rem;\r\n  padding-bottom: 1.5rem;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right hidden-lg-up\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\n    aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n  <a class=\"navbar-brand\" href=\"#\">Financial Projection</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"nav navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"javascript;;\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav\">\n      <li clas=\"nav-item pull-right\">\n        <span class=\"navbar-text\">\n                Hello, {{DisplayStateService?.LoggedInUser?.name}}\n          </span>\n      </li>\n      <li clas=\"nav-item\">\n        <img class=\"ml-1\" style=\"height: 30px\" src=\"{{DisplayStateService?.LoggedInUser?.imageUrl}}\">\n      </li>\n    </ul>\n\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\n      <ul class=\"nav nav-pills flex-column\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" href=\"#\">Overview <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Reports</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Analytics</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Export</a>\n        </li>\n      </ul>\n\n      <ul class=\"nav nav-pills flex-column\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Nav item</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Nav item again</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">One more nav</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Another nav item</a>\n        </li>\n      </ul>\n\n      <ul class=\"nav nav-pills flex-column\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Nav item again</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">One more nav</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Another nav item</a>\n        </li>\n      </ul>\n    </nav>\n\n    <main class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\n      <h1>Dashboard</h1>\n\n      <section class=\"row text-center placeholders\">\n        <div class=\"col-6 col-sm-3 placeholder\">\n          <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\"\n            alt=\"Generic placeholder thumbnail\">\n          <h4>Label</h4>\n          <div class=\"text-muted\">Something else</div>\n        </div>\n        <div class=\"col-6 col-sm-3 placeholder\">\n          <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\"\n            alt=\"Generic placeholder thumbnail\">\n          <h4>Label</h4>\n          <span class=\"text-muted\">Something else</span>\n        </div>\n        <div class=\"col-6 col-sm-3 placeholder\">\n          <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\"\n            alt=\"Generic placeholder thumbnail\">\n          <h4>Label</h4>\n          <span class=\"text-muted\">Something else</span>\n        </div>\n        <div class=\"col-6 col-sm-3 placeholder\">\n          <img src=\"data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=\" width=\"200\" height=\"200\" class=\"img-fluid rounded-circle\"\n            alt=\"Generic placeholder thumbnail\">\n          <h4>Label</h4>\n          <span class=\"text-muted\">Something else</span>\n        </div>\n      </section>\n\n      <h2>Section title</h2>\n      <div class=\"table-responsive\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Header</th>\n              <th>Header</th>\n              <th>Header</th>\n              <th>Header</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>1,001</td>\n              <td>Lorem</td>\n              <td>ipsum</td>\n              <td>dolor</td>\n              <td>sit</td>\n            </tr>\n            <tr>\n              <td>1,002</td>\n              <td>amet</td>\n              <td>consectetur</td>\n              <td>adipiscing</td>\n              <td>elit</td>\n            </tr>\n            <tr>\n              <td>1,003</td>\n              <td>Integer</td>\n              <td>nec</td>\n              <td>odio</td>\n              <td>Praesent</td>\n            </tr>\n            <tr>\n              <td>1,003</td>\n              <td>libero</td>\n              <td>Sed</td>\n              <td>cursus</td>\n              <td>ante</td>\n            </tr>\n            <tr>\n              <td>1,004</td>\n              <td>dapibus</td>\n              <td>diam</td>\n              <td>Sed</td>\n              <td>nisi</td>\n            </tr>\n            <tr>\n              <td>1,005</td>\n              <td>Nulla</td>\n              <td>quis</td>\n              <td>sem</td>\n              <td>at</td>\n            </tr>\n            <tr>\n              <td>1,006</td>\n              <td>nibh</td>\n              <td>elementum</td>\n              <td>imperdiet</td>\n              <td>Duis</td>\n            </tr>\n            <tr>\n              <td>1,007</td>\n              <td>sagittis</td>\n              <td>ipsum</td>\n              <td>Praesent</td>\n              <td>mauris</td>\n            </tr>\n            <tr>\n              <td>1,008</td>\n              <td>Fusce</td>\n              <td>nec</td>\n              <td>tellus</td>\n              <td>sed</td>\n            </tr>\n            <tr>\n              <td>1,009</td>\n              <td>augue</td>\n              <td>semper</td>\n              <td>porta</td>\n              <td>Mauris</td>\n            </tr>\n            <tr>\n              <td>1,010</td>\n              <td>massa</td>\n              <td>Vestibulum</td>\n              <td>lacinia</td>\n              <td>arcu</td>\n            </tr>\n            <tr>\n              <td>1,011</td>\n              <td>eget</td>\n              <td>nulla</td>\n              <td>Class</td>\n              <td>aptent</td>\n            </tr>\n            <tr>\n              <td>1,012</td>\n              <td>taciti</td>\n              <td>sociosqu</td>\n              <td>ad</td>\n              <td>litora</td>\n            </tr>\n            <tr>\n              <td>1,013</td>\n              <td>torquent</td>\n              <td>per</td>\n              <td>conubia</td>\n              <td>nostra</td>\n            </tr>\n            <tr>\n              <td>1,014</td>\n              <td>per</td>\n              <td>inceptos</td>\n              <td>himenaeos</td>\n              <td>Curabitur</td>\n            </tr>\n            <tr>\n              <td>1,015</td>\n              <td>sodales</td>\n              <td>ligula</td>\n              <td>in</td>\n              <td>libero</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </main>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__display_state_service__ = __webpack_require__("../../../../../src/app/display-state.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(DisplayStateService) {
        this.DisplayStateService = DisplayStateService;
        this.user = this.DisplayStateService.LoggedInUser;
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__display_state_service__["b" /* DisplayStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__display_state_service__["b" /* DisplayStateService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row h-100 justify-content-center align-items-center\">\r\n        <div class=\"col-md-4 col-offset-4\">\r\n            <div *ngIf=\"ready\" class=\"card\">\r\n                <div class=\"card-header\">\r\n                    Featured\r\n                </div>\r\n                <div class=\"card-block\">\r\n                    <h4 class=\"card-title\">Google sign in</h4>\r\n                    <p class=\"card-text\">Sign in via google to continue using this application.</p>\r\n                    <button id=\"googleBtn\" class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Sign in</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__display_state_service__ = __webpack_require__("../../../../../src/app/display-state.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(DisplayStateService) {
        this.DisplayStateService = DisplayStateService;
        this.ready = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.googleInit(); }, 300);
    };
    LoginComponent.prototype.googleInit = function () {
        console.log("googleInit");
        this.ready = true;
        var that = this;
        gapi.load('auth2', function () {
            that.auth2 = gapi.auth2.init({
                client_id: '640778788540-gf59i4al004spro6n1cjkperbievhhck.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            console.log("attachSignin");
            that.attachSignin(document.getElementById('googleBtn'));
        });
    };
    LoginComponent.prototype.attachSignin = function (element) {
        var that = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            console.log("here");
            var profile = googleUser.getBasicProfile();
            that.DisplayStateService.SetLoggedInUser({
                token: googleUser.getAuthResponse().id_token,
                id: profile.getId(),
                name: profile.getName(),
                imageUrl: profile.getImageUrl(),
                email: profile.getEmail()
            });
            console.log('called navigate!');
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__display_state_service__["b" /* DisplayStateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__display_state_service__["b" /* DisplayStateService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
console.log('main.ts');
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map