var ac_main =
webpackJsonpac__name_([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(443);

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(0);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(441);

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(857);

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(440);

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(444);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });


var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], AppState);



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myOrder_component__ = __webpack_require__(73);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__myOrder_component__["a"]; });



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__security_component__ = __webpack_require__(74);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__security_component__["a"]; });



/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__userInfo_component__ = __webpack_require__(75);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__userInfo_component__["a"]; });



/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(143);

/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(770);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(803);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(63);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ }),
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(442);

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });

/*
 * Angular 2 decorators and services
 */


/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(appState) {
        this.appState = appState;
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.name = 'Angular 2 Webpack Starter';
        this.url = 'https://twitter.com/AngularClass';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Initial App State', this.appState.state);
    };
    return AppComponent;
}());
AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None,
        styles: [
            __webpack_require__(109)
        ],
        template: __webpack_require__(95)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppState */]])
], AppComponent);

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_module__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info_info_module__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environment__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__app_routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_resolver__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__info__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_ui_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_ui_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_ui_auth__);
/* unused harmony export API_URL */
/* unused harmony export GOOGLE_CLIENT_ID */
/* unused harmony export MyAuthConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });










/*
 * Platform and Environment providers/directives/pipes
 */


// App is our top level component






// import '../styles/styles.scss';
// import '../styles/headings.css';

// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_13__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_14__app_service__["a" /* AppState */]
]);
var API_URL = 'http://localhost:3001/';
var GOOGLE_CLIENT_ID = '1042688196722-0hcc8rscgt9j0lcueuqsp0iqs175j6ud.apps.googleusercontent.com';
var MyAuthConfig = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](MyAuthConfig, _super);
    function MyAuthConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultHeaders = { 'Content-Type': 'application/json' };
        _this.providers = { google: { clientId: GOOGLE_CLIENT_ID,
            } };
        _this.baseUrl = API_URL;
        return _this;
        // loginUrl = API_URL + '/auth/login';
        // signupUrl = API_URL + '/auth/signup';
    }
    return MyAuthConfig;
}(__WEBPACK_IMPORTED_MODULE_18_ng2_ui_auth__["CustomConfig"]));

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["createNewHosts"])(cmpLocation);
        // save input values
        store.restoreInputValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["createInputTransfer"])();
        // remove styles
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__login__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__info__["a" /* InfoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_7__login_login_module__["a" /* LoginModule */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_9__info_info_module__["a" /* InfoModule */],
            __WEBPACK_IMPORTED_MODULE_18_ng2_ui_auth__["Ng2UiAuthModule"].forRoot(MyAuthConfig),
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routes__["ROUTES"], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_6__angular_router__["PreloadAllModules"] }),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__environment__["b" /* ENV_PROVIDERS */],
            APP_PROVIDERS
        ]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_core__["ApplicationRef"],
        __WEBPACK_IMPORTED_MODULE_14__app_service__["a" /* AppState */]])
], AppModule);



/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });




var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
], DataResolver);

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),
/* 65 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Can't resolve 'info/info.module' in '/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/src/app'\n    at onResolved (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/Resolver.js:66:16)\n    at loggingCallbackWrapper (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/Resolver.js:138:10)\n    at loggingCallbackWrapper (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/tapable/lib/Tapable.js:181:46)\n    at innerCallback (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/Resolver.js:125:19)\n    at loggingCallbackWrapper (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/tapable/lib/Tapable.js:283:15\n    at /Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:38:4\n    at loggingCallbackWrapper (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/Resolver.js:138:10)\n    at loggingCallbackWrapper (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/tapable/lib/Tapable.js:181:46)\n    at innerCallback (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/Resolver.js:125:19)\n    at loggingCallbackWrapper (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/tapable/lib/Tapable.js:283:15\n    at innerCallback (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/Resolver.js:123:11)\n    at loggingCallbackWrapper (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at /Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/tapable/lib/Tapable.js:283:15\n    at resolver.doResolve.createInnerCallback (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:44:6)\n    at loggingCallbackWrapper (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/Resolver.js:136:11)\n    at loggingCallbackWrapper (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at next (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/tapable/lib/Tapable.js:185:35)\n    at /Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/ModuleKindPlugin.js:23:4\n    at loggingCallbackWrapper (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at afterInnerCallback (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/Resolver.js:138:10)\n    at loggingCallbackWrapper (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/createInnerCallback.js:31:19)\n    at Resolver.applyPluginsAsyncSeriesBailResult1 (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/tapable/lib/Tapable.js:181:46)\n    at innerCallback (/Users/sylviawang/Desktop/fjy/webpack-angular2/angular2-webpack-starter/node_modules/enhanced-resolve/lib/Resolver.js:125:19)");

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });


var HomeComponent = (function () {
    // Set our default values
    // TypeScript public modifiers
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        // The selector is what angular internally uses
        // for `document.querySelectorAll(selector)` in our index.html
        // where, in this case, selector is the string 'home'
        selector: 'home',
        // We need to tell Angular's Dependency Injection which providers are in our app.
        providers: [],
        // Our list of styles in our component. We may add more to compose many styles together
        // Every Angular template is first compiled by the browser before Angular runs it's compiler
        template: __webpack_require__(96)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [])
], HomeComponent);



/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });


var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [],
        imports: [],
        providers: [],
        exports: []
    })
], HomeModule);



/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(66);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__info_component__ = __webpack_require__(70);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__info_component__["a"]; });



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });


var InfoComponent = (function () {
    function InfoComponent() {
    }
    InfoComponent.prototype.ngOnInit = function () {
    };
    return InfoComponent;
}());
InfoComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'cm-info',
        template: __webpack_require__(97)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [])
], InfoComponent);



/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_routes__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__myOrder__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__userInfo__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__security__ = __webpack_require__(28);
/* unused harmony export infoComponents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoModule; });








var infoComponents = [
    __WEBPACK_IMPORTED_MODULE_7__security__["a" /* SecurityComponent */],
    __WEBPACK_IMPORTED_MODULE_6__userInfo__["a" /* UserInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_5__myOrder__["a" /* MyOrderComponent */]
];
var InfoModule = (function () {
    function InfoModule() {
    }
    return InfoModule;
}());
InfoModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: infoComponents,
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__info_routes__["a" /* INFO_ROUTES */])
        ],
        providers: [],
        exports: [infoComponents, __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"]]
    })
], InfoModule);



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__myOrder__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userInfo__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__security__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INFO_ROUTES; });



var INFO_ROUTES = [
    { path: '', pathMatch: 'full', redirectTo: 'userInfo', outlet: 'info' },
    { path: 'userinfo', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_1__userInfo__["a" /* UserInfoComponent */], outlet: 'info' },
    { path: 'myorder', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_0__myOrder__["a" /* MyOrderComponent */], outlet: 'info' },
    { path: 'security', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__security__["a" /* SecurityComponent */], outlet: 'info' },
];


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrderComponent; });



var MyOrderComponent = (function () {
    function MyOrderComponent(router) {
        this.router = router;
    }
    MyOrderComponent.prototype.ngOnInit = function () {
    };
    return MyOrderComponent;
}());
MyOrderComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'cm-my-order',
        styles: ["\n  "],
        template: __webpack_require__(98)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], MyOrderComponent);



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecurityComponent; });



var SecurityComponent = (function () {
    function SecurityComponent(router) {
        this.router = router;
    }
    SecurityComponent.prototype.ngOnInit = function () {
    };
    return SecurityComponent;
}());
SecurityComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'security',
        styles: ["\n  "],
        template: __webpack_require__(99)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], SecurityComponent);



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });



var UserInfoComponent = (function () {
    function UserInfoComponent(router) {
        this.router = router;
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    return UserInfoComponent;
}());
UserInfoComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'user-info',
        styles: ["\n  "],
        template: __webpack_require__(100)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], UserInfoComponent);



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordComponent; });




var ForgetPasswordComponent = (function () {
    function ForgetPasswordComponent(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
    }
    ForgetPasswordComponent.prototype.signup = function () {
        this.option.signup = true;
        this.option.forgetPassword = false;
    };
    ForgetPasswordComponent.prototype.passwordMes = function () {
        this.option.passwordMes = true;
        this.option.forgetPassword = false;
    };
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    return ForgetPasswordComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Option)
], ForgetPasswordComponent.prototype, "option", void 0);
ForgetPasswordComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'forget-password',
        styles: ["\n  "],
        template: __webpack_require__(101)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__["AuthService"]])
], ForgetPasswordComponent);



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__forgetPassword_component__ = __webpack_require__(76);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__forgetPassword_component__["a"]; });



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__(79);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });


var LoginComponent = (function () {
    // login = true;
    // signup = false;
    // forgetPassword = false;
    // signupSuccess = false;
    // TypeScript public modifiers
    function LoginComponent() {
        // Set our default values
        this.localState = { value: '' };
        this.option = {
            loginMain: true,
            signup: false,
            forgetPassword: false,
            signupSuccess: false,
            newPasswordMes: false,
            newPassword: false,
            passwordMes: false
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        // The selector is what angular internally uses
        // for `document.querySelectorAll(selector)` in our index.html
        // where, in this case, selector is the string 'home'
        selector: 'login',
        // We need to tell Angular's Dependency Injection which providers are in our app.
        providers: [],
        // Our list of styles in our component. We may add more to compose many styles together
        // Every Angular template is first compiled by the browser before Angular runs it's compiler
        template: __webpack_require__(102)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [])
], LoginComponent);



/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loginMain__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__newPasswordMes__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signupSuccess__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__newPassword__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__passwordMes__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgetPassword__ = __webpack_require__(77);
/* unused harmony export loginComponents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });










var loginComponents = [
    __WEBPACK_IMPORTED_MODULE_3__loginMain__["a" /* LoginMainComponent */],
    __WEBPACK_IMPORTED_MODULE_4__signup__["a" /* SignupComponent */],
    __WEBPACK_IMPORTED_MODULE_8__passwordMes__["a" /* PasswordMesComponent */],
    __WEBPACK_IMPORTED_MODULE_7__newPassword__["a" /* NewPasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_5__newPasswordMes__["a" /* NewPasswordMesComponent */],
    __WEBPACK_IMPORTED_MODULE_9__forgetPassword__["a" /* ForgetPasswordComponent */],
    __WEBPACK_IMPORTED_MODULE_6__signupSuccess__["a" /* SignupSuccessComponent */]
];
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: loginComponents,
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"]
        ],
        providers: [],
        exports: loginComponents
    })
], LoginModule);



/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loginMain_component__ = __webpack_require__(82);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__loginMain_component__["a"]; });



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginMainComponent; });




var LoginMainComponent = (function () {
    function LoginMainComponent(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.wechatImg = '../../images/wechat.png';
        this.sinaImg = '../../images/sina.png ';
    }
    LoginMainComponent.prototype.signup = function () {
        this.option.signup = true;
        this.option.loginMain = false;
    };
    LoginMainComponent.prototype.forgetPassword = function () {
        this.option.forgetPassword = true;
        this.option.loginMain = false;
    };
    LoginMainComponent.prototype.handleError = function (err) {
        console.log("could not login");
    };
    LoginMainComponent.prototype.login = function (user) {
        var _this = this;
        this.auth.login(user)
            .subscribe({
            error: function (err) { return _this.handleError(err); },
            complete: function () { return _this.router.navigateByUrl('/home'); }
        });
    };
    LoginMainComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        this.auth.authenticate('google')
            .subscribe({
            error: function (err) { return _this.handleError(err); },
            complete: function () { return _this.router.navigateByUrl('/home'); }
        });
    };
    LoginMainComponent.prototype.isAuthenticated = function () {
        console.log(this.auth.isAuthenticated());
        return this.auth.isAuthenticated();
    };
    LoginMainComponent.prototype.logout = function () {
        var _this = this;
        this.auth.logout()
            .subscribe({
            error: function (err) { return _this.handleError(err); },
            complete: function () { return _this.router.navigateByUrl('/login'); }
        });
    };
    LoginMainComponent.prototype.ngOnInit = function () {
    };
    return LoginMainComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Option)
], LoginMainComponent.prototype, "option", void 0);
LoginMainComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'login-main',
        styles: ["\n  "],
        template: __webpack_require__(103)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__["AuthService"]])
], LoginMainComponent);



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__newPassword_component__ = __webpack_require__(84);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__newPassword_component__["a"]; });



/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPasswordComponent; });




var NewPasswordComponent = (function () {
    function NewPasswordComponent(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
    }
    NewPasswordComponent.prototype.newPasswordMes = function () {
        this.option.newPasswordMes = true;
        this.option.loginMain = false;
    };
    NewPasswordComponent.prototype.ngOnInit = function () {
    };
    return NewPasswordComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Option)
], NewPasswordComponent.prototype, "option", void 0);
NewPasswordComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'new-password',
        styles: ["\n  "],
        template: __webpack_require__(104)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__["AuthService"]])
], NewPasswordComponent);



/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__newPasswordMes_component__ = __webpack_require__(86);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__newPasswordMes_component__["a"]; });



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPasswordMesComponent; });




var NewPasswordMesComponent = (function () {
    function NewPasswordMesComponent(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
    }
    NewPasswordMesComponent.prototype.ngOnInit = function () {
    };
    return NewPasswordMesComponent;
}());
NewPasswordMesComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'new-password-mes',
        styles: ["\n  "],
        template: __webpack_require__(105)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__["AuthService"]])
], NewPasswordMesComponent);



/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__passwordMes_component__ = __webpack_require__(88);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__passwordMes_component__["a"]; });



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordMesComponent; });




var PasswordMesComponent = (function () {
    function PasswordMesComponent(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
    }
    PasswordMesComponent.prototype.ngOnInit = function () {
    };
    return PasswordMesComponent;
}());
PasswordMesComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'password-mes',
        styles: ["\n  "],
        template: __webpack_require__(106)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__["AuthService"]])
], PasswordMesComponent);



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signup_component__ = __webpack_require__(90);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signup_component__["a"]; });



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });




var SignupComponent = (function () {
    function SignupComponent(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.wechaImg = 'images/wechat.png';
        this.sinaImg = 'images/sina.png';
    }
    SignupComponent.prototype.handleError = function (err) {
        console.log("could not login");
    };
    SignupComponent.prototype.login = function () {
        this.option.signup = false;
        this.option.loginMain = true;
    };
    SignupComponent.prototype.signupSuccess = function () {
        this.option.signup = false;
        this.option.signupSuccess = true;
    };
    SignupComponent.prototype.signup = function (user) {
        var _this = this;
        this.auth.signup(user)
            .subscribe({
            error: function (err) { return _this.handleError(err); },
            complete: function () { return _this.router.navigateByUrl('/home'); }
        });
    };
    SignupComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        this.auth.authenticate('google')
            .subscribe({
            error: function (err) { return _this.handleError(err); },
            complete: function () { return _this.router.navigateByUrl('/home'); }
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Option)
], SignupComponent.prototype, "option", void 0);
SignupComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'signup',
        styles: ["\n  "],
        template: __webpack_require__(107)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__["AuthService"]])
], SignupComponent);



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signupSuccess_component__ = __webpack_require__(92);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__signupSuccess_component__["a"]; });



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupSuccessComponent; });




var SignupSuccessComponent = (function () {
    function SignupSuccessComponent(route, router, auth) {
        this.route = route;
        this.router = router;
        this.auth = auth;
    }
    SignupSuccessComponent.prototype.signup = function () {
        this.option.signup = true;
        this.option.loginMain = false;
    };
    SignupSuccessComponent.prototype.ngOnInit = function () {
    };
    return SignupSuccessComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Option)
], SignupSuccessComponent.prototype, "option", void 0);
SignupSuccessComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'signup-success',
        styles: ["\n  "],
        template: __webpack_require__(108)
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"],
        __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"],
        __WEBPACK_IMPORTED_MODULE_3_ng2_ui_auth__["AuthService"]])
], SignupSuccessComponent);



/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(94)();
// imports


// module
exports.push([module.i, "/*html, body{\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif\n}\n\na.active {\n  background-color: gray;\n}*/\n", ""]);

// exports


/***/ }),
/* 94 */,
/* 95 */
/***/ (function(module, exports) {

module.exports = "<div>\n  <header>\n    <nav class=\"navbar navbar-default cbp-af-header cm-nav cbp-af-header-shrink\" role=\"navigation\">\n      <div class=\"cm-nav-content\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\" style=\"height:80px;\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n            aria-expanded=\"false\" style=\"margin-top:20px\">\n\t                  <span class=\"sr-only\">Toggle navigation</span>\n\t                  <span class=\"icon-bar\"></span>\n\t                  <span class=\"icon-bar\"></span>\n\t                  <span class=\"icon-bar\"></span>\n\t                </button>\n          <a href=\"index.html\"><img src=\"../images/cmbottom.png\" style=\"margin:8px;height:64px\"></a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\" style=\"margin-left:10px;\">\n            <li>\n              <a [routerLink]=\"['']\">\n                <h3>首页</h3>\n              </a>\n            </li>\n            <li>\n              <a [routerLink]=\"['/info']\">\n                <h3>我的订单</h3>\n              </a>\n            </li>\n            <li>\n              <a href=\"\" data-toggle=\"tooltip\" title=\"<img src='../images/qrcode.png' class='img-responsive'\" data-placement=\"bottom\" data-html=\"true\">\n                <h3>手机应用</h3>\n              </a>\n            </li>\n\n            <li>\n              <a href=\"fresh.html\">\n                <h3>客服中心</h3>\n              </a>\n            </li>\n            <li>\n              <a href=\"\">\n                <h3>购物车<span class=\"badge\">0</span></h3>\n              </a>\n            </li>\n            <li>\n              <h3 style=\"margin-top:30px;cursor: pointer;\" class=\"cm-nav-login\">登录\\注册</h3>\n            </li>\n            <!-- <li class=\"dropdown\">\n                   \t <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><h3>用户名 <span class=\"caret\"></span></h3></a>\n                   \t <ul class=\"dropdown-menu\">\n                      <li><a href=\"info.html\">个人信息</a></li>\n                      <li><a href=\"security.html\">安全中心</a></li>\n                      <li role=\"separator\" class=\"divider\"></li>\n                      <li><a href=\"#\">退出登录</a></li>\n                   \t </ul>\n                 \t</li> -->\n          </ul>\n        </div>\n\n        <div class=\"collapse navbar-collapse cm-nav-content\" id=\"cm-lg-nav\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"cm-nav-index\" style=\"background: url(../images/nav-bg.png);background-size: 100%\">\n              <a [routerLink]=\"['']\" style=\"margin-top:15px\">\n                <h3>首页</h3>\n              </a>\n            </li>\n            <li class=\"cm-nav-myorder\">\n              <a [routerLink]=\"['/info']\" style=\"margin-top:15px\">\n                <h3>我的订单</h3>\n              </a>\n            </li>\n          </ul>\n\n          <ul class=\"nav navbar-nav cm-nav-right\">\n            <li class=\"cm-nav-app\">\n              <a>\n                <img src=\"../images/phone.png\" style=\"height: 40%;margin-right: 5px;\">\n                <h3>手机应用</h3>\n              </a>\n            </li>\n            <!-- <div class=\"cm-nav-qr\">\n\t\t\t\t\t\t\t<p>手机订餐更方便</p>\n\t\t\t\t\t\t\t<img src=\"../images/qrcode.png\" style=\"width: 115px;height: 115px; margin: auto;\">\n\t\t\t\t\t\t</div> -->\n            <li class=\"cm-nav-service\">\n              <a href=\"fresh.html\">\n                <img src=\"../images/earphone.png\" style=\"height: 30%;margin-right: 5px;\">\n                <h3>客服中心</h3>\n              </a>\n            </li>\n            <li class=\"cm-nav-cart\" style=\"width:45px\">\n              <img src=\"../images/shoppingcar.png\" style=\"height:35%;margin-top:15px\">\n              <div><sup style=\"font-size: 16px\">0</sup></div>\n            </li>\n            <li class=\"cm-nav-login\" style=\"margin:0 5px;cursor: pointer;\">\n              <h3 style=\"margin-top:30px\">登录\\注册</h3>\n            </li>\n          </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n\n      </div>\n      <!-- /.container -->\n    </nav>\n  </header>\n\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n\n  <div class=\"cm-footer\">\n    <div class=\"cm-footer-item\">\n      <h2>用户帮助</h2>\n      <ul style=\"padding:0\">\n        <ol>\n          <a href=\"fresh.html\">\n            <p>新手指南</p>\n          </a>\n        </ol>\n        <ol>\n          <a href=\"question.html\">\n            <p>常见问题</p>\n          </a>\n        </ol>\n      </ul>\n    </div>\n    <div class=\"cm-footer-item\">\n      <h2>商业合作</h2>\n      <p>合作电话:<br/>634-323-1245</p>\n    </div>\n    <div class=\"cm-footer-item\">\n      <h2>关于我们</h2>\n      <ul style=\"padding:0\">\n        <ol>\n          <a href=\"about.html\">\n            <p>馋猫介绍</p>\n          </a>\n        </ol>\n        <ol>\n          <p>联系我们</p>\n          <div style=\"display:flex;\">\n            <img src=\"../images/wechat.png\" style=\"height:30px\">\n            <img src=\"../images/sina.png\" style=\"height:30px;margin-left:10px\">\n          </div>\n        </ol>\n      </ul>\n    </div>\n    <div class=\"cm-footer-item\">\n      <h2>下载手机版</h2>\n      <div style=\"display:flex\">\n        <div style=\"display:flex;flex-direction:column;\">\n          <a href=\"https://itunes.apple.com/ca/app/chan-mao-ding-can/id888553991?mt=8\"><img src=\"../images/appstore.png\" style=\"width:148px\" /></a>\n          <a href=\"https://play.google.com/store/apps/details?id=ca.chanmao.orderapp\" style=\"margin-top:10px\"><img src=\"../images/google.png\" style=\"width:148px\" />\n          </a>\n        </div>\n        <div style=\"display:flex;flex-direction:column;text-align:center;margin-left:5px\">\n          <img src=\"../images/qrcode.png\" height=\"108px\">\n          <p>扫描下载馋猫App</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"cm-content\">\n    <div class=\"cm-carousel\">\n      <div id=\"carousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interal=\"3000\" style=\"top:-28px\">\n        <!-- Indicators -->\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carousel\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carousel\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carousel\" data-slide-to=\"2\"></li>\n        </ol>\n\n        <!-- Wrapper for slides -->\n        <div class=\"carousel-inner\" role=\"listbox\">\n          <div class=\"item active\">\n            <img src=\"../images/carousel1.png\" alt=\"slide0\" />\n            <div class=\"carousel-caption\">\n              <!--  <h2>糖记甜品</h2>\n                            <p>春节期间满30打八五折</p> -->\n            </div>\n          </div>\n          <div class=\"item\">\n            <img src=\"../images/carousel1.png\" alt=\"slide1\" />\n            <div class=\"carousel-caption\">\n              <!-- <h2>猫爪火锅</h2>\n                            <p>春节期间满30打八五折</p> -->\n            </div>\n          </div>\n          <div class=\"item\">\n            <img src=\"../images/carousel1.png\" alt=\"slide2\" />\n            <div class=\"carousel-caption\">\n              <!-- <h2>大鸭梨</h2>\n                            <p>春节期间满30打八五折</p> -->\n            </div>\n          </div>\n        </div>\n\n        <!-- Controls -->\n        <a class=\"left carousel-control\" href=\"#carousel\" role=\"button\" data-slide=\"prev\">\n          <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#carousel\" role=\"button\" data-slide=\"next\">\n          <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n\n    <div class=\"cm-res\">\n      <div class=\"cm-res-1\">\n        <div class=\"cm-res-address\" style=\"display:flex\">\n          <p>当前地址：</p>\n          <p>111 main street</p>\n          <label>更改地址</label>\n        </div>\n        <div class=\"inner-addon right-addon\" style=\"position: relative\" style=\"border:1px solid #e6e6e6;\">\n          <i class=\"glyphicon glyphicon-search\" style=\"margin-top:3px\"></i>\n          <input type=\"text\" placeholder=\"Search\" style=\"height:30px;width:225px;\" />\n        </div>\n      </div>\n\n      <!-- <div id=\"cm-res-2\" class=\".navbar-fixed-top\">\n\t\t\t\t<div class=\"inner-addon right-addon\" style=\"position: relative;margin-right:5px;height:30px;max-width:340px;width:100%;\">\n\t\t\t\t\t<i class=\"glyphicon glyphicon-search\" style=\"margin-top:3px\"></i>\n\t\t\t\t\t<input type=\"text\" placeholder=\"Search\" style=\"height:30px;width:100%;\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"cm-nav-cart\" style=\"height:30px\">\n\t\t\t\t\t<img src=\"../images/shoppingcar.png\" style=\"height:30px;margin:0\">\n\t\t\t\t\t<div style=\"margin-top: 2px\"><sup style=\"font-size: 16px\">0</sup></div>\n\t\t\t\t</div>\n\t\t\t</div> -->\n\n      <div class=\"cm-area\">\n        <p>城市：</p>\n        <p class=\"button-group\" data-toggle=\"buttons\">\n          <label type=\"button\" class=\"btn active\"><input type=\"radio\">All</label>\n          <label type=\"button\" class=\"btn\"><input type=\"radio\">Markham</label>\n          <label type=\"button\" class=\"btn\"><input type=\"radio\">North York</label>\n          <label type=\"button\" class=\"btn\"><input type=\"radio\">Richmond Hill</label>\n          <label type=\"button\" class=\"btn\"><input type=\"radio\">Downtown</label>\n          <label type=\"button\" class=\"btn\"><input type=\"radio\">Mississauga</label>\n          <label type=\"button\" class=\"btn\"><input type=\"radio\">Scarborough</label>\n\n        </p>\n      </div>\n      <div class=\"cm-taste\">\n        <p>菜系选择：</p>\n        <p class=\"button-group\" data-toggle=\"buttons\">\n          <label type=\"button\" class=\"btn active\"><input type=\"radio\">所有餐馆</label>\n          <label type=\"button\" class=\"btn\"><input type=\"radio\">北方面食</label>\n          <label type=\"button\" class=\"btn\"><input type=\"radio\">粤式早茶</label>\n          <label type=\"button\" class=\"btn\"><input type=\"radio\">烧烤火锅</label>\n          <label type=\"button\" class=\"btn\"><input type=\"radio\">麻辣川菜</label>\n          <label type=\"button\" class=\"btn\"><input type=\"radio\">甜品小食</label>\n        </p>\n      </div>\n\n      <div class=\"cm-res-img\">\n        <a href=\"order.html\">\n          <label type=\"button\" class=\"cm-res-item\">\n            \t\t\t<img src=\"../images/res-img.png\" class=\"img-responsive\" >\n            \t\t\t<div class=\"cm-res-tag\">\n            \t\t\t\t<p class=\"cm-tag-name\">半亩园</p>\n            \t\t\t\t<p class=\"cm-tag-taste\">粤式早茶</p>\n            \t\t\t\t<p class=\"cm-tag-address\">77 main street, Toronto - 7km</p>\n            \t\t\t</div>\n            \t\t</label>\n        </a>\n        <a href=\"order.html\">\n          <label type=\"button\" class=\"cm-res-item\" style=\"margin-left:1.3%;margin-right:1.3%\">\n            \t\t\t<img src=\"../images/res-img.png\" class=\"img-responsive\" >\n            \t\t\t<div class=\"cm-res-tag\">\n            \t\t\t\t<p class=\"cm-tag-name\">半亩园</p>\n            \t\t\t\t<p class=\"cm-tag-taste\">粤式早茶</p>\n            \t\t\t\t<p class=\"cm-tag-address\">77 main street, Toronto - 7km</p>\n            \t\t\t</div>\n            \t\t</label>\n        </a>\n        <label type=\"button\" class=\"cm-res-item\">\n            \t\t\t<img src=\"../images/res-img.png\" class=\"img-responsive\" >\n            \t\t\t<div class=\"cm-res-tag\">\n            \t\t\t\t<p class=\"cm-tag-name\">半亩园</p>\n            \t\t\t\t<p class=\"cm-tag-taste\">粤式早茶</p>\n            \t\t\t\t<p class=\"cm-tag-address\">77 main street, Toronto - 7km</p>\n            \t\t\t</div>\n            \t\t</label>\n        <label type=\"button\" class=\"cm-res-item\" id=\"cm-res-item\">\n            \t\t\t<div id=\"cm-close-black\">\n            \t\t\t\t<p>商家休息<br/><br/>暂不接单</p>\n            \t\t\t\t<p class=\"cm-open\">开店时间：00：00AM</p>\n            \t\t\t</div>\n            \t\t\t<img src=\"../images/res-img.png\" class=\"img-responsive\" >\n            \t\t\t<div class=\"cm-res-tag\">\n            \t\t\t\t<p class=\"cm-tag-name\">半亩园</p>\n            \t\t\t\t<p class=\"cm-tag-taste\">粤式早茶</p>\n            \t\t\t\t<p class=\"cm-tag-address\">77 main street, Toronto - 7km</p>\n            \t\t\t</div>\n            \t\t</label>\n        <label type=\"button\" class=\"cm-res-item\" id=\"cm-res-item\" style=\"margin-left:1.3%;margin-right:1.3%\">\n            \t\t\t<img src=\"../images/res-img.png\" class=\"img-responsive\" >\n            \t\t\t<div class=\"cm-res-tag\">\n            \t\t\t\t<p class=\"cm-tag-name\">半亩园</p>\n            \t\t\t\t<p class=\"cm-tag-taste\">粤式早茶</p>\n            \t\t\t\t<p class=\"cm-tag-address\">77 main street, Toronto - 7km</p>\n            \t\t\t</div>\n            \t\t</label>\n        <label type=\"button\" class=\"cm-res-item\" id=\"cm-res-item\">\n            \t\t\t<img src=\"../images/res-img.png\" class=\"img-responsive\" >\n            \t\t\t<div class=\"cm-res-tag\">\n            \t\t\t\t<p class=\"cm-tag-name\">半亩园</p>\n            \t\t\t\t<p class=\"cm-tag-taste\">粤式早茶</p>\n            \t\t\t\t<p class=\"cm-tag-address\">77 main street, Toronto - 7km</p>\n            \t\t\t</div>\n            \t\t</label>\n      </div>\n      <hr/>\n    </div>\n  </div>\n"

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cm-content-2\">\n    <div class=\"cm-res-1\">\n            <div class=\"cm-res-address\" style=\"display:flex\">\n              <p>当前地址：</p>\n              <p>111 main street</p>\n              <label>更改地址</label>\n            </div>\n    </div>\n\n    <div class=\"cm-info-container container\" style=\"width:100%;padding:0;margin-top:20px\">\n            <div class=\"col-sm-2\" style=\"padding:0\">\n              <div class=\"cm-info-catalog\">\n                <button class=\"cm-personal\"><h2>个人中心</h2></button>\n                <button class=\"cm-myorder cm-active\"><h2>我的订单</h2></button>\n                <button class=\"cm-security\"><h2>安全中心</h2></button>\n              </div>\n            </div>\n            <div class=\"col-sm-10\" style=\"padding:0\">\n              <router-outlet name=\"info\"></router-outlet>\n              </div>\n        </div>\n    </div>\n"

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = "<div id=\"myorder\" class=\"cm-info-content\">\n                    <h2 style=\"margin:10px 0;font-size:20px\">我的订单</h2><br/>\n\n                    <div class=\"panel panel-default\" style=\"margin:20px 0\">\n                        <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                          <h4 class=\"panel-title\">\n                            <p>半亩园</p>\n                            <p>订单号</p>\n                            <p>10/17/2016</p>\n                            <p>$200.00</p>\n                            <p>正在配送</p>\n                            <button class=\"cm-btn-contact\">催单/联系客服</button>\n\n                            <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                查看详情<span class=\"glyphicon glyphicon-menu-down\" style=\"color:#ea7b21;margin-left:5px\"></span>\n                            </a>\n                          </h4>\n                        </div>\n                        <div id=\"collapseOne\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                          <div class=\"panel-body\">\n                            <div>\n                              <table class=\"cm-order-detail\">\n                                <tr>\n                                  <td style=\"width:130px;\">XXXXX盖浇饭</td>\n                                  <td>x1</td>\n                                  <td>$9.00</td>\n                                </tr>\n                                <tr>\n                                  <td style=\"width:130px;\">茶树菇汤</td>\n                                  <td>x1</td>\n                                  <td>$9.00</td>\n                                </tr>\n                              </table>\n                              <table class=\"cm-order-detail\">\n                                <tr>\n                                  <td style=\"width:200px;\">税</td>\n                                  <td>$9.00</td>\n                                </tr>\n                                <tr>\n                                  <td style=\"width:200px;\">运费</td>\n                                  <td>$9.00</td>\n                                </tr>\n                              </table>\n                              <table class=\"cm-order-detail\" style=\"border:none;\">\n                                <tr>\n                                  <td style=\"width:200px;\">总计</td>\n                                  <td>$9.00</td>\n                                </tr>\n                              </table>\n                              </div>\n                              <div>\n                                <h3 style=\"margin:5px 0\">评价</h3>\n                                <p>评价评价评价评价评价评价评价</p>\n                              </div>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class=\"panel panel-default\">\n                        <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                          <h4 class=\"panel-title\">\n                            <p>半亩园</p>\n                            <p>订单号</p>\n                            <p>10/17/2016</p>\n                            <p>$200.00</p>\n                            <p>已送达</p>\n                            <!-- <button class=\"cm-btn-comment\">评价</button> -->\n                            <div style=\"margin-left:60px\" id=\"rateYo-read\"></div>\n\n                            <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\n                                查看详情<span class=\"glyphicon glyphicon-menu-down\" style=\"color:#ea7b21;margin-left:5px\"></span>\n                            </a>\n                          </h4>\n                        </div>\n                        <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                          <div class=\"panel-body\">\n                                <div>\n                                  <table class=\"cm-order-detail\">\n                                    <tr>\n                                      <td style=\"width:130px;\">XXXXX盖浇饭</td>\n                                      <td>x1</td>\n                                      <td>$9.00</td>\n                                    </tr>\n                                    <tr>\n                                      <td style=\"width:130px;\">茶树菇汤</td>\n                                      <td>x1</td>\n                                      <td>$9.00</td>\n                                    </tr>\n                                  </table>\n                                  <table class=\"cm-order-detail\">\n                                    <tr>\n                                      <td style=\"width:200px;\">税</td>\n                                      <td>$9.00</td>\n                                    </tr>\n                                    <tr>\n                                      <td style=\"width:200px;\">运费</td>\n                                      <td>$9.00</td>\n                                    </tr>\n                                  </table>\n                                  <table class=\"cm-order-detail\" style=\"border:none;\">\n                                    <tr>\n                                      <td style=\"width:200px;\">总计</td>\n                                      <td>$9.00</td>\n                                    </tr>\n                                  </table>\n                                </div>\n                                <div>\n                                    <h3 style=\"margin:5px 0\">评价</h3>\n                                    <p>评价评价评价评价评价评价评价</p>\n                                </div>\n                          </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"panel panel-default\" style=\"margin:20px 0\">\n                        <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                          <h4 class=\"panel-title\">\n                            <p>半亩园</p>\n                            <p>订单号</p>\n                            <p>10/17/2016</p>\n                            <p>$200.00</p>\n                            <p>已配送</p>\n                            <button class=\"cm-btn-comment\">评价</button>\n\n                            <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"true\" aria-controls=\"collapseThree\">\n                                查看详情<span class=\"glyphicon glyphicon-menu-down\" style=\"color:#ea7b21;margin-left:5px\"></span>\n                            </a>\n                          </h4>\n                        </div>\n                        <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                          <div class=\"panel-body\">\n                            <div>\n                              <table class=\"cm-order-detail\">\n                                <tr>\n                                  <td style=\"width:130px;\">XXXXX盖浇饭</td>\n                                  <td>x1</td>\n                                  <td>$9.00</td>\n                                </tr>\n                                <tr>\n                                  <td style=\"width:130px;\">茶树菇汤</td>\n                                  <td>x1</td>\n                                  <td>$9.00</td>\n                                </tr>\n                              </table>\n                              <table class=\"cm-order-detail\">\n                                <tr>\n                                  <td style=\"width:200px;\">税</td>\n                                  <td>$9.00</td>\n                                </tr>\n                                <tr>\n                                  <td style=\"width:200px;\">运费</td>\n                                  <td>$9.00</td>\n                                </tr>\n                              </table>\n                              <table class=\"cm-order-detail\" style=\"border:none;\">\n                                <tr>\n                                  <td style=\"width:200px;\">总计</td>\n                                  <td>$9.00</td>\n                                </tr>\n                              </table>\n                              </div>\n                              <div>\n                                <h3 style=\"margin:5px 0\">评价</h3>\n                                <p>评价评价评价评价评价评价评价</p>\n                              </div>\n                          </div>\n                        </div>\n                      </div>\n\n                  </div>"

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = "   <div id=\"security\" class=\"cm-info-content\">\n                    <h2 style=\"margin:10px 0;font-size:20px\">安全中心</h2><br/>\n                      <form class=\"cm-form\" id=\"submitForm\">\n                          <div class=\"cm-form-group\">\n                              <label for=\"nameInput\" class=\"control-label\">当前密码</label>\n                              <div >\n                                  <input type=\"text\" name=\"nameInput\" class=\"form-control\"/>\n                              </div>\n                          </div>\n                          <div class=\"cm-form-group\">\n                              <label for=\"emailInput\" class=\"control-label\">输入新密码</label>\n                              <div >\n                                    <input type=\"email\" name=\"emailInput\" class=\"form-control\"/>\n                              </div>\n                          </div>\n                          <div class=\"cm-form-group\">\n                              <label for=\"nameInput\" class=\"control-label\">确认新密码</label>\n                              <div >\n                                  <input type=\"text\" name=\"nameInput\" class=\"form-control\"/>\n                              </div>\n                          </div>\n                          <div style=\"display:flex;width:230px;justify-content:space-between\">\n                              <input class=\"cm-btn-submit\" type=\"submit\" value=\"保存\" data-toggle=\"tooltip\" title=\"submit\"/>\n                              <input class=\"cm-btn-cancel\" type=\"submit\" value=\"取消\" data-toggle=\"tooltip\" title=\"submit\"/>\n                          </div>\n                      </form>\n                  </div>"

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "<div id=\"personal\" class=\"cm-info-content\">\n  <h2 style=\"margin:10px 0;font-size:20px\">个人中心</h2><br/>\n  <form class=\"cm-form\" id=\"submitForm\">\n    <div class=\"cm-form-group\">\n      <label for=\"nameInput\" class=\"control-label\">用户名</label>\n      <div>\n        <input type=\"text\" name=\"nameInput\" class=\"form-control\" />\n      </div>\n    </div>\n    <div class=\"cm-form-group\">\n      <label for=\"emailInput\" class=\"control-label\">邮件</label>\n      <div>\n        <input type=\"email\" name=\"emailInput\" class=\"form-control\" />\n      </div>\n    </div>\n    <div class=\"cm-form-group\">\n      <label for=\"nameInput\" class=\"control-label\">电话号码</label>\n      <div>\n        <input type=\"text\" name=\"nameInput\" class=\"form-control\" />\n      </div>\n    </div>\n    <div class=\"\">\n      <label for=\"nameInput\" class=\"control-label\">地址信息</label>\n      <div class=\"cm-address cm-home\">\n        <div class=\"cm-address-content\">\n          <p>家</p>\n          <p>111 main street, Toronto, ON</p>\n        </div>\n        <div class=\"cm-address-delete\">\n          <button style=\"color:#ea7b21\">修改</button>\n          <button>删除</button>\n        </div>\n        <div class=\"cm-address-add\">\n          <button style=\"color:#ea7b21\">添加</button>\n        </div>\n      </div>\n      <div class=\"cm-address cm-company\">\n        <div class=\"cm-address-content\">\n          <p>公司</p>\n        </div>\n        <div class=\"cm-address-delete\">\n          <button style=\"color:#ea7b21\">修改</button>\n          <button>删除</button>\n        </div>\n        <div class=\"cm-address-add\">\n          <button style=\"color:#ea7b21\">添加</button>\n        </div>\n      </div>\n      <div class=\"cm-address cm-other\">\n        <div class=\"cm-address-content\">\n          <p>其他</p>\n        </div>\n        <div class=\"cm-address-delete\">\n          <button style=\"color:#ea7b21\">修改</button>\n          <button>删除</button>\n        </div>\n        <div class=\"cm-address-add\">\n          <button style=\"color:#ea7b21\">添加</button>\n        </div>\n      </div>\n    </div>\n\n    <div style=\"display:flex;width:230px;justify-content:space-between\">\n      <input class=\"cm-btn-submit\" type=\"submit\" value=\"保存\" data-toggle=\"tooltip\" title=\"submit\" />\n      <input class=\"cm-btn-cancel\" type=\"submit\" value=\"取消\" data-toggle=\"tooltip\" title=\"submit\" />\n    </div>\n  </form>\n</div>\n"

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cm-popup cm-password\">\n  <div class=\"\" style=\"margin-left:250px;width: 250px;margin-top:100px\">\n\n    <h2>找回密码</h2>\n    <p style=\"color: white;background-image: url(images/alert.png);width: 160px;height:36px;background-repeat: no-repeat;padding: 6px 15px;position: absolute;margin-left: 260px;margin-top:20px\">您的邮箱未注册</p>\n    <div class=\"inner-addon left-addon\" style=\"position: relative;margin-top:30px;height:36px;max-width:250px;width:100%;\">\n      <i class=\"glyphicon glyphicons-envelope\" style=\"margin-top:3px\"></i>\n      <input type=\"text\" placeholder=\"邮箱地址\" style=\"height:36px;width:100%;\" />\n    </div>\n    <button (click)='passwordMes()' class=\"cm-btn-next\" style=\"color: white;font-size: 16px;border:none;background-color: #ea7b21;width: 100%;margin-top:20px;padding: 5px 0\">下一步</button>\n    <hr/>\n    <div style=\"display: flex;justify-content: space-between;margin: 10px 0\">\n      <p>还没有账号？</p>\n      <button (click)='signup()' class=\"cm-btn-signup\" style=\"color: #ea7b21;border:1px solid #ea7b21;background:white;width: 70px\">注册</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = "<div>\n  <login-main *ngIf=\"option.loginMain\" [option]='option'>\n  </login-main>\n  <signup *ngIf=\"option.signup\" [option]='option'>\n  </signup>\n  <forget-password *ngIf=\"option.forgetPassword\" [option]='option'>\n  </forget-password>\n  <signup-success *ngIf=\"option.signupSuccess\" [option]='option'>\n  </signup-success>\n  <new-password-mes *ngIf=\"option.newPasswordMes\">\n  </new-password-mes>\n  <new-password *ngIf=\"option.newPassword\" [option]='option'>\n  </new-password>\n  <password-mes *ngIf=\"option.passwordMes\">\n  </password-mes>\n</div>\n"

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cm-popup cm-login\">\n  <div class=\"\" role=\"document\" style=\"margin-left:250px;width: 250px\">\n    <h2>登录</h2>\n    <div class=\"cm-resend\">\n      <p>您的邮箱还未激活</p>\n      <button class=\"\" style=\"color: #ea7b21;border:none;background:none\">重新发送激活邮件。</button>\n    </div>\n    <div class=\"inner-addon left-addon\" style=\"position: relative;margin-top:30px;height:36px;max-width:250px;width:100%;\">\n      <i class=\"glyphicon glyphicon-user\" style=\"margin-top:3px\"></i>\n      <input type=\"text\" [(ngModel)]='username' placeholder=\"用户名/邮箱\" style=\"height:36px;width:100%;\" />\n    </div>\n    <div class=\"inner-addon left-addon\" style=\"position: relative;margin-top:10px;height:36px;max-width:250px;width:100%;\">\n      <i class=\"glyphicon glyphicon-lock\" style=\"margin-top:3px\"></i>\n      <input type=\"text\" [(ngModel)]='password' placeholder=\"密码\" style=\"height:36px;width:100%;\" />\n    </div>\n    <p style=\"color: white;background-image: url( ../../images/alert.png);width: 145px;height:36px;background-size:100%;padding: 6px 15px;position: absolute;margin-left: 260px;margin-top:-35px\">用户名或密码错误</p>\n    <div style=\"display: flex;justify-content: space-between;margin: 10px 0\">\n      <label><input type=\"checkbox\" name=\"remember\" style=\"margin-right: 3px\" />下次自动登入</label>\n      <button class=\"cm-forget\" (click)='forgetPassword()' style=\"color: #ea7b21;border:none;background:none\">忘记密码?</button>\n    </div>\n    <button class=\"\" style=\"color: white;font-size: 16px;border:none;background-color: #ea7b21;width: 100%;padding: 5px 0\">登录</button>\n    <hr/>\n    <div style=\"display: flex;justify-content: space-between;margin: 10px 0\">\n      <p>还没有账号？</p>\n      <button class=\"cm-btn-signup\" (click)='signup()' style=\"color: #ea7b21;border:1px solid #ea7b21;background:white;width: 70px\">注册</button>\n    </div>\n    <div style=\"display: flex;justify-content: space-between;margin: 10px 0\">\n      <hr style=\"width: 18%;margin-top: 10px\" />\n      <p>可使用以下账号直接登录</p>\n      <hr style=\"width: 18%;margin-top: 10px\" />\n    </div>\n    <div style=\"display: flex;justify-content: space-around;margin: 10px 0\">\n      <a href=\"\"><img [src]=\"wechatImg\" style=\"width: 35px\"></a>\n      <a href=\"\"><img [src]=\"sinaImg\" style=\"width: 35px\"></a>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cm-popup cm-new-password\">\n  <div class=\"\" style=\"margin-left:250px;margin-top:100px;width: 250px\">\n    <h2>请设置您的新密码</h2>\n    <div class=\"inner-addon left-addon\" style=\"position: relative;margin-top:30px;height:36px;max-width:250px;width:100%;\">\n      <i class=\"glyphicon glyphicon-user\" style=\"margin-top:3px\"></i>\n      <input type=\"text\" placeholder=\"设置新密码\" style=\"height:36px;width:100%;\" />\n    </div>\n    <p style=\"color: white;background-image: url(images/alert.png);width: 115px;height:36px;background-repeat: no-repeat;padding: 6px 22px;position: absolute;margin-left: 260px;margin-top: 10px\">密码不一致</p>\n    <div class=\"inner-addon left-addon\" style=\"position: relative;margin-top:10px;height:36px;max-width:250px;width:100%;\">\n      <i class=\"glyphicon glyphicon-lock\" style=\"margin-top:3px\"></i>\n      <input type=\"text\" placeholder=\"确认密码\" style=\"height:36px;width:100%;\" />\n    </div>\n    <button (click)='newPasswordMes()' class=\"cm-btn-newpass\" style=\"color: white;font-size: 16px;border:none;background-color: #ea7b21;margin-top:20px;width: 100%;padding: 5px 0\">提交</button>\n  </div>\n</div>\n"

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cm-popup cm-p\">\n  <div class=\"\" style=\"margin-left:260px;width: 250px;margin-top:120px\">\n    <h2>新密码已设置成功！</h2>\n    <p style=\"margin-top: 40px\">你已经成功设置了你的密码！</p>\n    <p>请用这个新密码来继续登录你的账号。</p>\n    <button class=\"\" style=\"color: white;font-size: 16px;border:none;background-color: #ea7b21;margin-top:20px;width: 100%;padding: 5px 0\">登录</button>\n  </div>\n</div>\n"

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cm-popup cm-password-mes\">\n  <div class=\"\" style=\"margin-left:260px;width: 250px;margin-top:100px\">\n    <h2>找回密码</h2>\n    <p style=\"margin-top: 30px\">密码恢复指导已经发到你的邮箱啦: </p>\n    <p style=\"color: #ea7b21\">liupinlin@chanmao.com</p><br/>\n    <p>请检查你的邮箱(包括垃圾文件夹).</p>\n  </div>\n</div>\n"

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cm-popup cm-signup\">\n  <div class=\"container\" style=\"margin-top:20px;width: 100%\">\n    <div class=\"col-xs-6\" style=\"z-index: 100\">\n      <h2>使用邮箱注册</h2>\n      <div class=\"inner-addon left-addon\" style=\"position: relative;margin-top:30px;height:36px;max-width:250px;width:100%;\">\n        <input type=\"text\" placeholder=\"设置用户名\" style=\"height:36px;width:100%;\" />\n      </div>\n      <p style=\"color: white;background-image: url(images/alert.png);width: 130px;height:36px;background-size:100%;padding: 6px 15px;position: absolute;margin-left: 260px;margin-top:-35px\">用户名已存在</p>\n      <div class=\"inner-addon left-addon\" style=\"position: relative;margin-top:10px;height:36px;max-width:250px;width:100%;\">\n        <input type=\"text\" placeholder=\"设置密码\" style=\"height:36px;width:100%;\" />\n      </div>\n      <p style=\"color: white;background-image: url(images/alert.png);width: 130px;height:36px;background-size:100%;padding: 6px 15px;position: absolute;margin-left: 260px;margin-top:-35px\">请输入密码</p>\n      <div class=\"inner-addon left-addon\" style=\"position: relative;margin-top:10px;height:36px;max-width:250px;width:100%;\">\n        <input type=\"text\" placeholder=\"确认密码\" style=\"height:36px;width:100%;\" />\n      </div>\n      <p style=\"color: white;background-image: url(../../images/alert.png);width: 130px;height:36px;background-size:100%;padding: 6px 15px;position: absolute;margin-left: 260px;margin-top:-35px\">密码不一致</p>\n      <div class=\"inner-addon left-addon\" style=\"position: relative;margin-top:10px;height:36px;max-width:250px;width:100%;\">\n        <input type=\"text\" placeholder=\"电子邮箱地址\" style=\"height:36px;width:100%;\" />\n      </div>\n      <p style=\"color: white;background-image: url(../../images/alert.png);width: 130px;height:36px;background-size:100%;padding: 6px 15px;position: absolute;margin-left: 260px;margin-top:-35px\">邮箱不存在</p>\n      <button (click)='signupSuccess()' class=\"cm-btn-welcome\" style=\"color: white;font-size: 16px;border:none;background-color: #ea7b21;width: 250px;padding: 5px 0;margin-top:20px\">注册</button>\n    </div>\n    <div class=\"col-xs-1\">\n      <div style=\"border-left:1px solid rgb(238,238,238);height:250px;margin-top: 50px;\"></div>\n    </div>\n    <div class=\"col-xs-5\">\n      <h2 style=\"margin-top: 50px;margin-bottom: 0\">已经注册过了？</h2>\n      <div style=\"display: flex;align-items: baseline;\">\n        <h2>请点击</h2><button (click)='login()' class=\"cm-btn-login\" style=\"color: #ea7b21;font-size: 18px;border:none;background:none\">直接登录</button></div>\n      <div style=\"display: flex;justify-content: space-between;margin: 100px 0 10px 0\">\n        <hr style=\"width: 18%;margin-top: 10px\" />\n        <p>可使用以下账号直接登录</p>\n        <hr style=\"width: 18%;margin-top: 10px\" />\n      </div>\n      <div style=\"display: flex;justify-content: space-around;margin: 10px 0\">\n        <a href=\"\"><img src=\"../../images/wechat.png\" style=\"width: 35px\"></a>\n        <a href=\"\"><img src=\"../../images/sina.png\" style=\"width: 35px\"></a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cm-popup cm-welcome\">\n  <div class=\"\" style=\"margin-left:260px;width: 250px;margin-top:90px\">\n    <h2 style=\"color: #ea7b21\">XXX</h2>\n    <h2>欢迎加入馋猫大家庭！</h2>\n    <p style=\"margin-top: 20px\">-用户已注册成功！</p>\n    <p>请检查注册邮箱的邮件进行激活. (如果没有收到邮件，请检查垃圾邮箱） </p>\n    <button class=\"\" style=\"color: #ea7b21;border:none;background:none;padding:0\">重新发送激活邮件。</button>\n  </div>\n</div>\n"

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(93);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(759);

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(762);

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(767);

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(768);

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(775);

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(786);

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(797);

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(819);

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(859);

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(2))(862);

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(40);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ })
],[257]);
//# sourceMappingURL=main.bundle.js.map