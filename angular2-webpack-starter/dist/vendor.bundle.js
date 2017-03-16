webpackJsonpac__name_([1],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Observable_1 = __webpack_require__(14);
var core_1 = __webpack_require__(1);
var config_service_1 = __webpack_require__(6);
var storage_service_1 = __webpack_require__(13);
var SharedService = (function () {
    function SharedService(storage, config) {
        this.storage = storage;
        this.config = config;
        this.tokenName = this.config.tokenPrefix ? [this.config.tokenPrefix, this.config.tokenName].join(this.config.tokenSeparator) : this.config.tokenName;
    }
    SharedService.prototype.getToken = function () {
        return this.storage.get(this.tokenName);
    };
    SharedService.prototype.getPayload = function () {
        var token = this.getToken();
        if (token && token.split('.').length === 3) {
            try {
                var base64Url = token.split('.')[1];
                var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                return JSON.parse(decodeURIComponent(encodeURIComponent(window.atob(base64))));
            }
            catch (e) {
                return undefined;
            }
        }
    };
    SharedService.prototype.setToken = function (response) {
        if (!response) {
            console.warn('Can\'t set token without passing a value');
            return;
        }
        var token;
        if (typeof response === 'string') {
            token = response;
        }
        else {
            token = this.config.resolveToken(response);
        }
        if (token) {
            this.storage.set(this.tokenName, token);
        }
    };
    SharedService.prototype.removeToken = function () {
        this.storage.remove(this.tokenName);
    };
    SharedService.prototype.isAuthenticated = function () {
        var token = this.getToken();
        if (token) {
            if (token.split('.').length === 3) {
                try {
                    var base64Url = token.split('.')[1];
                    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                    var exp = JSON.parse(window.atob(base64)).exp;
                    if (exp) {
                        var isExpired = Math.round(new Date().getTime() / 1000) >= exp;
                        if (isExpired) {
                            this.storage.remove(this.tokenName);
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                }
                catch (e) {
                    return true;
                }
            }
            return true;
        }
        return false;
    };
    SharedService.prototype.getExpirationDate = function () {
        var payload = this.getPayload();
        if (payload && payload.exp && Math.round(new Date().getTime() / 1000) < payload.exp) {
            var date = new Date(0);
            date.setUTCSeconds(payload.exp);
            return date;
        }
        return null;
    };
    SharedService.prototype.logout = function () {
        this.storage.remove(this.tokenName);
        return Observable_1.Observable.create(function (observer) {
            observer.next();
            observer.complete();
        });
    };
    SharedService.prototype.setStorageType = function (type) {
        this.config.storageType = type;
    };
    SharedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [storage_service_1.StorageService, config_service_1.ConfigService])
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function assign(target) {
    var src = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        src[_i - 1] = arguments[_i];
    }
    if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
    }
    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source != null) {
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
    }
    return target;
}
exports.assign = assign;
function joinUrl(baseUrl, url) {
    if (/^(?:[a-z]+:)?\/\//i.test(url)) {
        return url;
    }
    var joined = [baseUrl, url].join('/');
    var normalize = function (str) {
        return str
            .replace(/[\/]+/g, '/')
            .replace(/\/\?/g, '?')
            .replace(/\/\#/g, '#')
            .replace(/\:\//g, '://');
    };
    return normalize(joined);
}
exports.joinUrl = joinUrl;
function merge(obj1, obj2) {
    var result = {};
    for (var i in obj1) {
        if (obj1.hasOwnProperty(i)) {
            if ((i in obj2) && (typeof obj1[i] === 'object') && (i !== null)) {
                result[i] = merge(obj1[i], obj2[i]);
            }
            else {
                result[i] = obj1[i];
            }
        }
    }
    for (i in obj2) {
        if (obj2.hasOwnProperty(i)) {
            if (i in result) {
                continue;
            }
            result[i] = obj2[i];
        }
    }
    return result;
}
exports.merge = merge;
function camelCase(name) {
    return name.replace(/([\:\-\_]+(.))/g, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter;
    });
}
exports.camelCase = camelCase;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(14);
var utils_1 = __webpack_require__(11);
var config_service_1 = __webpack_require__(6);
__webpack_require__(249);
__webpack_require__(248);
__webpack_require__(251);
__webpack_require__(247);
__webpack_require__(250);
__webpack_require__(17);
__webpack_require__(255);
__webpack_require__(254);
__webpack_require__(256);
__webpack_require__(253);
var PopupService = (function () {
    function PopupService(config) {
        this.config = config;
        this.url = '';
        this.popupWindow = null;
    }
    PopupService.prepareOptions = function (options) {
        options = options || {};
        var width = options.width || 500;
        var height = options.height || 500;
        return utils_1.assign({
            width: width,
            height: height,
            left: window.screenX + ((window.outerWidth - width) / 2),
            top: window.screenY + ((window.outerHeight - height) / 2.5)
        }, options);
    };
    PopupService.stringifyOptions = function (options) {
        return Object.keys(options).map(function (key) {
            return key + '=' + options[key];
        }).join(',');
    };
    PopupService.parseQueryString = function (joinedKeyValue) {
        var key, value;
        return joinedKeyValue.split('&').reduce(function (obj, keyValue) {
            if (keyValue) {
                value = keyValue.split('=');
                key = decodeURIComponent(value[0]);
                obj[key] = typeof value[1] !== 'undefined' ? decodeURIComponent(value[1]) : true;
            }
            return obj;
        }, {});
    };
    PopupService.prototype.open = function (url, name, options) {
        this.url = url;
        var stringifiedOptions = PopupService.stringifyOptions(PopupService.prepareOptions(options));
        var UA = window.navigator.userAgent;
        var windowName = (this.config.cordova || UA.indexOf('CriOS') > -1) ? '_blank' : name;
        this.popupWindow = window.open(url, windowName, stringifiedOptions);
        window['popup'] = this.popupWindow;
        if (this.popupWindow && this.popupWindow.focus) {
            this.popupWindow.focus();
        }
        return this;
    };
    PopupService.prototype.eventListener = function (redirectUri) {
        var _this = this;
        return Observable_1.Observable
            .merge(Observable_1.Observable.fromEvent(this.popupWindow, 'loadstart')
            .switchMap(function (event) {
            if (!_this.popupWindow || _this.popupWindow.closed) {
                return Observable_1.Observable.throw(new Error('Authentication Canceled'));
            }
            if (event.url.indexOf(redirectUri) !== 0) {
                return Observable_1.Observable.empty();
            }
            var parser = document.createElement('a');
            parser.href = event.url;
            if (parser.search || parser.hash) {
                var queryParams = parser.search.substring(1).replace(/\/$/, '');
                var hashParams = parser.hash.substring(1).replace(/\/$/, '');
                var hash = PopupService.parseQueryString(hashParams);
                var qs = PopupService.parseQueryString(queryParams);
                var allParams = utils_1.assign({}, qs, hash);
                _this.popupWindow.close();
                if (allParams.error) {
                    throw allParams.error;
                }
                else {
                    return Observable_1.Observable.of(allParams);
                }
            }
            return Observable_1.Observable.empty();
        }), Observable_1.Observable.fromEvent(this.popupWindow, 'exit').delay(100).map(function () { throw new Error('Authentication Canceled'); })).take(1);
    };
    PopupService.prototype.pollPopup = function () {
        var _this = this;
        return Observable_1.Observable
            .interval(50)
            .switchMap(function () {
            if (!_this.popupWindow || _this.popupWindow.closed) {
                return Observable_1.Observable.throw(new Error('Authentication Canceled'));
            }
            var documentOrigin = document.location.host;
            var popupWindowOrigin = '';
            try {
                popupWindowOrigin = _this.popupWindow.location.host;
            }
            catch (error) {
            }
            if (popupWindowOrigin === documentOrigin && (_this.popupWindow.location.search || _this.popupWindow.location.hash)) {
                var queryParams = _this.popupWindow.location.search.substring(1).replace(/\/$/, '');
                var hashParams = _this.popupWindow.location.hash.substring(1).replace(/[\/$]/, '');
                var hash = PopupService.parseQueryString(hashParams);
                var qs = PopupService.parseQueryString(queryParams);
                _this.popupWindow.close();
                var allParams = utils_1.assign({}, qs, hash);
                if (allParams.error) {
                    throw allParams.error;
                }
                else {
                    return Observable_1.Observable.of(allParams);
                }
            }
            return Observable_1.Observable.empty();
        })
            .take(1);
    };
    PopupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [config_service_1.ConfigService])
    ], PopupService);
    return PopupService;
}());
exports.PopupService = PopupService;
//# sourceMappingURL=popup.service.js.map

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var config_service_1 = __webpack_require__(6);
var StorageService = (function () {
    function StorageService(config) {
        var _this = this;
        this.config = config;
        this.store = {};
        this.isStorageAvailable = (function () {
            try {
                var supported = config.storageType in window && window[config.storageType] !== null;
                if (supported) {
                    var key = Math.random().toString(36).substring(7);
                    window[_this.config.storageType].setItem(key, '');
                    window[_this.config.storageType].removeItem(key);
                }
                return supported;
            }
            catch (e) {
                return false;
            }
        })();
        if (!this.isStorageAvailable) {
            console.warn(config.storageType + ' is not available.');
        }
    }
    StorageService.prototype.get = function (key) {
        return this.isStorageAvailable ? window[this.config.storageType].getItem(key) : this.store[key];
    };
    StorageService.prototype.set = function (key, value) {
        return this.isStorageAvailable ? window[this.config.storageType].setItem(key, value) : this.store[key] = value;
    };
    StorageService.prototype.remove = function (key) {
        return this.isStorageAvailable ? window[this.config.storageType].removeItem(key) : delete this.store[key];
    };
    StorageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [config_service_1.ConfigService])
    ], StorageService);
    return StorageService;
}());
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var shared_service_1 = __webpack_require__(10);
var config_service_1 = __webpack_require__(6);
var utils_1 = __webpack_require__(11);
__webpack_require__(39);
var jwt_http_service_1 = __webpack_require__(9);
function getFullOpts(user, userOpts) {
    var opts = userOpts || {};
    if (user) {
        opts.body = typeof user === 'string' ? user : JSON.stringify(user);
    }
    opts.method = opts.method || 'POST';
    return opts;
}
var LocalService = (function () {
    function LocalService(http, shared, config) {
        this.http = http;
        this.shared = shared;
        this.config = config;
    }
    LocalService.prototype.login = function (user, opts) {
        var _this = this;
        var fullOpts = getFullOpts(user, opts);
        var url = fullOpts.url ? fullOpts.url : utils_1.joinUrl(this.config.baseUrl, this.config.loginUrl);
        return this.http.request(url, fullOpts)
            .do(function (response) { return _this.shared.setToken(response); });
    };
    LocalService.prototype.signup = function (user, opts) {
        var fullOpts = getFullOpts(user, opts);
        var url = fullOpts.url ? fullOpts.url : utils_1.joinUrl(this.config.baseUrl, this.config.signupUrl);
        return this.http.request(url, getFullOpts(user, fullOpts));
    };
    LocalService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [jwt_http_service_1.JwtHttp, shared_service_1.SharedService, config_service_1.ConfigService])
    ], LocalService);
    return LocalService;
}());
exports.LocalService = LocalService;
//# sourceMappingURL=local.service.js.map

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var oauth1_service_1 = __webpack_require__(20);
var oauth2_service_1 = __webpack_require__(21);
var shared_service_1 = __webpack_require__(10);
var utils_1 = __webpack_require__(11);
var config_service_1 = __webpack_require__(6);
__webpack_require__(39);
var jwt_http_service_1 = __webpack_require__(9);
var OauthService = (function () {
    function OauthService(http, injector, shared, config) {
        this.http = http;
        this.injector = injector;
        this.shared = shared;
        this.config = config;
    }
    OauthService.prototype.authenticate = function (name, userData) {
        var _this = this;
        var provider = this.config.providers[name].oauthType === '1.0' ? this.injector.get(oauth1_service_1.Oauth1Service) : this.injector.get(oauth2_service_1.Oauth2Service);
        return provider.open(this.config.providers[name], userData || {})
            .do(function (response) {
            if (_this.config.providers[name].url) {
                _this.shared.setToken(response);
            }
        });
    };
    OauthService.prototype.unlink = function (provider, opts) {
        opts = opts || {};
        var url = opts.url ? opts.url : utils_1.joinUrl(this.config.baseUrl, this.config.unlinkUrl);
        opts.body = JSON.stringify({ provider: provider }) || opts.body;
        opts.method = opts.method || 'POST';
        return this.http.request(url, opts);
    };
    OauthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [jwt_http_service_1.JwtHttp, core_1.Injector, shared_service_1.SharedService, config_service_1.ConfigService])
    ], OauthService);
    return OauthService;
}());
exports.OauthService = OauthService;
//# sourceMappingURL=oauth.service.js.map

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var popup_service_1 = __webpack_require__(12);
var utils_1 = __webpack_require__(11);
var config_service_1 = __webpack_require__(6);
__webpack_require__(17);
var jwt_http_service_1 = __webpack_require__(9);
var Oauth1Service = (function () {
    function Oauth1Service(http, popup, config) {
        this.http = http;
        this.popup = popup;
        this.config = config;
    }
    Oauth1Service.prototype.open = function (options, userData) {
        var _this = this;
        this.defaults = utils_1.assign({}, Oauth1Service.base, options);
        var popupWindow;
        var serverUrl = this.config.baseUrl ? utils_1.joinUrl(this.config.baseUrl, this.defaults.url) : this.defaults.url;
        if (!this.config.cordova) {
            popupWindow = this.popup.open('', this.defaults.name, this.defaults.popupOptions);
        }
        return this.http.post(serverUrl, JSON.stringify(this.defaults))
            .switchMap(function (response) {
            if (_this.config.cordova) {
                popupWindow = _this.popup.open([_this.defaults.authorizationEndpoint, _this.buildQueryString(response.json())].join('?'), _this.defaults.name, _this.defaults.popupOptions);
            }
            else {
                popupWindow.popupWindow.location =
                    [_this.defaults.authorizationEndpoint, _this.buildQueryString(response.json())].join('?');
            }
            return _this.config.cordova ? popupWindow.eventListener(_this.defaults.redirectUri) : popupWindow.pollPopup();
        })
            .switchMap(function (response) {
            var exchangeForToken = options.exchangeForToken;
            if (typeof exchangeForToken !== 'function') {
                exchangeForToken = _this.exchangeForToken.bind(_this);
            }
            return exchangeForToken(response, userData);
        });
    };
    Oauth1Service.prototype.exchangeForToken = function (oauthData, userData) {
        var data = utils_1.assign({}, this.defaults, oauthData, userData);
        var exchangeForTokenUrl = this.config.baseUrl ? utils_1.joinUrl(this.config.baseUrl, this.defaults.url) : this.defaults.url;
        return this.defaults.method
            ? this.http.request(exchangeForTokenUrl, {
                body: JSON.stringify(data),
                withCredentials: this.config.withCredentials,
                method: this.defaults.method
            })
            : this.http.post(exchangeForTokenUrl, data, { withCredentials: this.config.withCredentials });
    };
    Oauth1Service.prototype.buildQueryString = function (obj) {
        return Object.keys(obj).map(function (key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
        }).join('&');
    };
    Oauth1Service.base = {
        url: null,
        name: null,
        popupOptions: null,
        redirectUri: null,
        authorizationEndpoint: null
    };
    Oauth1Service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [jwt_http_service_1.JwtHttp, popup_service_1.PopupService, config_service_1.ConfigService])
    ], Oauth1Service);
    return Oauth1Service;
}());
exports.Oauth1Service = Oauth1Service;
//# sourceMappingURL=oauth1.service.js.map

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(14);
var utils_1 = __webpack_require__(11);
var config_service_1 = __webpack_require__(6);
var popup_service_1 = __webpack_require__(12);
var storage_service_1 = __webpack_require__(13);
__webpack_require__(17);
__webpack_require__(38);
var jwt_http_service_1 = __webpack_require__(9);
var Oauth2Service = (function () {
    function Oauth2Service(http, popup, storage, config) {
        this.http = http;
        this.popup = popup;
        this.storage = storage;
        this.config = config;
    }
    Oauth2Service.prototype.open = function (options, userData) {
        var _this = this;
        this.defaults = utils_1.merge(options, Oauth2Service.base);
        var url;
        var openPopup;
        var stateName = this.defaults.name + '_state';
        var state = this.defaults.state;
        if (typeof state === 'string') {
            this.storage.set(stateName, state);
        }
        else if (typeof state === 'function') {
            this.storage.set(stateName, state());
        }
        url = [this.defaults.authorizationEndpoint, this.buildQueryString()].join('?');
        if (this.config.cordova) {
            openPopup = this.popup
                .open(url, this.defaults.name, this.defaults.popupOptions)
                .eventListener(this.defaults.redirectUri);
        }
        else {
            openPopup = this.popup
                .open(url, this.defaults.name, this.defaults.popupOptions)
                .pollPopup();
        }
        return openPopup
            .switchMap(function (oauthData) {
            if (!options.exchangeForToken && (_this.defaults.responseType === 'token' || !_this.defaults.url)) {
                return Observable_1.Observable.of(oauthData);
            }
            if (oauthData.state && oauthData.state !== _this.storage.get(stateName)) {
                throw 'OAuth "state" mismatch';
            }
            var exchangeForToken = options.exchangeForToken;
            if (typeof exchangeForToken !== 'function') {
                exchangeForToken = _this.exchangeForToken.bind(_this);
            }
            return exchangeForToken(oauthData, userData);
        });
    };
    Oauth2Service.prototype.exchangeForToken = function (oauthData, userData) {
        var data = utils_1.assign({}, this.defaults, oauthData, userData);
        var exchangeForTokenUrl = this.config.baseUrl ? utils_1.joinUrl(this.config.baseUrl, this.defaults.url) : this.defaults.url;
        return this.defaults.method
            ? this.http.request(exchangeForTokenUrl, {
                body: JSON.stringify(data),
                withCredentials: this.config.withCredentials,
                method: this.defaults.method
            })
            : this.http.post(exchangeForTokenUrl, JSON.stringify(data), { withCredentials: this.config.withCredentials });
    };
    Oauth2Service.prototype.buildQueryString = function () {
        var _this = this;
        var keyValuePairs = [];
        var urlParams = ['defaultUrlParams', 'requiredUrlParams', 'optionalUrlParams'];
        urlParams.forEach(function (params) {
            if (_this.defaults[params]) {
                _this.defaults[params].forEach(function (paramName) {
                    var camelizedName = utils_1.camelCase(paramName);
                    var paramValue = typeof _this.defaults[paramName] === 'function' ?
                        _this.defaults[paramName]() :
                        _this.defaults[camelizedName];
                    if (paramName === 'state') {
                        var stateName = _this.defaults.name + '_state';
                        paramValue = encodeURIComponent(_this.storage.get(stateName));
                    }
                    if (paramName === 'scope' && Array.isArray(paramValue)) {
                        paramValue = paramValue.join(_this.defaults.scopeDelimiter);
                        if (_this.defaults.scopePrefix) {
                            paramValue = [_this.defaults.scopePrefix, paramValue].join(_this.defaults.scopeDelimiter);
                        }
                    }
                    keyValuePairs.push([paramName, paramValue]);
                });
            }
        });
        return keyValuePairs.map(function (pair) {
            return pair.join('=');
        }).join('&');
    };
    Oauth2Service.base = {
        defaultUrlParams: ['response_type', 'client_id', 'redirect_uri'],
        responseType: 'code',
        responseParams: {
            code: 'code',
            clientId: 'clientId',
            redirectUri: 'redirectUri'
        }
    };
    Oauth2Service = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [jwt_http_service_1.JwtHttp, popup_service_1.PopupService, storage_service_1.StorageService, config_service_1.ConfigService])
    ], Oauth2Service);
    return Oauth2Service;
}());
exports.Oauth2Service = Oauth2Service;
//# sourceMappingURL=oauth2.service.js.map

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = __extends;
/* unused harmony export __assign */
/* unused harmony export __rest */
/* harmony export (immutable) */ __webpack_exports__["b"] = __decorate;
/* unused harmony export __param */
/* harmony export (immutable) */ __webpack_exports__["c"] = __metadata;
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
};

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), q = [], c, i;
    return i = { next: verb("next"), "throw": verb("throw"), "return": verb("return") }, i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { return function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]), next(); }); }; }
    function next() { if (!c && q.length) resume((c = q.shift())[0], c[1]); }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(c[3], e); } }
    function step(r) { r.done ? settle(c[2], r) : r.value[0] === "yield" ? settle(c[2], { value: r.value[1], done: false }) : Promise.resolve(r.value[1]).then(r.value[0] === "delegate" ? delegate : fulfill, reject); }
    function delegate(r) { step(r.done ? r : { value: ["yield", r.value], done: false }); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { c = void 0, f(v), next(); }
};

function __asyncDelegator(o) {
    var i = { next: verb("next"), "throw": verb("throw", function (e) { throw e; }), "return": verb("return", function (v) { return { value: v, done: true }; }) };
    return o = __asyncValues(o), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { return function (v) { return { value: ["delegate", (o[n] || f).call(o, v)], done: false }; }; }
};

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
};

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var shared_service_1 = __webpack_require__(10);
var local_service_1 = __webpack_require__(18);
var oauth_service_1 = __webpack_require__(19);
var AuthService = (function () {
    function AuthService(shared, local, oauth) {
        this.shared = shared;
        this.local = local;
        this.oauth = oauth;
    }
    AuthService.prototype.login = function (user, opts) {
        return this.local.login(user, opts);
    };
    AuthService.prototype.signup = function (user, opts) {
        return this.local.signup(user, opts);
    };
    AuthService.prototype.logout = function () {
        return this.shared.logout();
    };
    AuthService.prototype.authenticate = function (name, userData) {
        return this.oauth.authenticate(name, userData);
    };
    AuthService.prototype.link = function (name, userData) {
        return this.oauth.authenticate(name, userData);
    };
    AuthService.prototype.unlink = function (provider, opts) {
        return this.oauth.unlink(provider, opts);
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.shared.isAuthenticated();
    };
    AuthService.prototype.getToken = function () {
        return this.shared.getToken();
    };
    AuthService.prototype.setToken = function (token) {
        this.shared.setToken(token);
    };
    AuthService.prototype.removeToken = function () {
        this.shared.removeToken();
    };
    AuthService.prototype.getPayload = function () {
        return this.shared.getPayload();
    };
    AuthService.prototype.setStorageType = function (type) {
        this.shared.setStorageType(type);
    };
    AuthService.prototype.getExpirationDate = function () {
        return this.shared.getExpirationDate();
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [shared_service_1.SharedService, local_service_1.LocalService, oauth_service_1.OauthService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(15);
var CustomConfig = (function () {
    function CustomConfig() {
    }
    return CustomConfig;
}());
exports.CustomConfig = CustomConfig;
var ConfigService = (function () {
    function ConfigService(config) {
        var _this = this;
        this.withCredentials = false;
        this.tokenRoot = null;
        this.baseUrl = '/';
        this.loginUrl = '/auth/login';
        this.signupUrl = '/auth/signup';
        this.unlinkUrl = '/auth/unlink/';
        this.refreshUrl = '/auth/refresh';
        this.tokenName = 'token';
        this.tokenSeparator = '_';
        this.tokenPrefix = 'ng2-ui-auth';
        this.authHeader = 'Authorization';
        this.authToken = 'Bearer';
        this.storageType = 'localStorage';
        this.defaultHeaders = null;
        this.autoRefreshToken = false;
        this.refreshBeforeExpiration = 600000;
        this.tryTokenRefreshIfUnauthorized = false;
        this.cordova = this.isCordovaApp();
        this.resolveToken = function (response) {
            var tokenObj = response;
            if (response instanceof http_1.Response) {
                tokenObj = response.json();
            }
            var accessToken = tokenObj &&
                (tokenObj['access_token'] || tokenObj['token'] || tokenObj['data']);
            if (!accessToken) {
                console.warn('No token found');
                return null;
            }
            if (typeof accessToken === 'string') {
                return accessToken;
            }
            if (typeof accessToken !== 'object') {
                console.warn('No token found');
                return null;
            }
            var tokenRootData = _this.tokenRoot &&
                _this.tokenRoot.split('.').reduce(function (o, x) {
                    return o[x];
                }, accessToken);
            var token = tokenRootData ? tokenRootData[_this.tokenName] : accessToken[_this.tokenName];
            if (token) {
                return token;
            }
            var tokenPath = _this.tokenRoot ? _this.tokenRoot + '.' + _this.tokenName : _this.tokenName;
            console.warn('Expecting a token named "' + tokenPath);
            return null;
        };
        this.providers = {
            facebook: {
                name: 'facebook',
                url: '/auth/facebook',
                authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
                redirectUri: this.getHttpHost('/'),
                requiredUrlParams: ['display', 'scope'],
                scope: ['email'],
                scopeDelimiter: ',',
                display: 'popup',
                oauthType: '2.0',
                popupOptions: { width: 580, height: 400 }
            },
            google: {
                name: 'google',
                url: '/auth/google',
                authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
                redirectUri: this.getHttpHost(),
                requiredUrlParams: ['scope'],
                optionalUrlParams: ['display', 'state', 'prompt', 'login_hint', 'access_type', 'include_granted_scopes', 'openid.realm', 'hd'],
                scope: ['profile', 'email'],
                scopePrefix: 'openid',
                scopeDelimiter: ' ',
                display: 'popup',
                oauthType: '2.0',
                popupOptions: { width: 452, height: 633 },
                state: function () { return encodeURIComponent(Math.random().toString(36).substr(2)); },
            },
            github: {
                name: 'github',
                url: '/auth/github',
                authorizationEndpoint: 'https://github.com/login/oauth/authorize',
                redirectUri: this.getHttpHost(),
                optionalUrlParams: ['scope'],
                scope: ['user:email'],
                scopeDelimiter: ' ',
                oauthType: '2.0',
                popupOptions: { width: 1020, height: 618 }
            },
            instagram: {
                name: 'instagram',
                url: '/auth/instagram',
                authorizationEndpoint: 'https://api.instagram.com/oauth/authorize',
                redirectUri: this.getHttpHost(),
                requiredUrlParams: ['scope'],
                scope: ['basic'],
                scopeDelimiter: '+',
                oauthType: '2.0'
            },
            linkedin: {
                name: 'linkedin',
                url: '/auth/linkedin',
                authorizationEndpoint: 'https://www.linkedin.com/uas/oauth2/authorization',
                redirectUri: this.getHttpHost(),
                requiredUrlParams: ['state'],
                scope: ['r_emailaddress'],
                scopeDelimiter: ' ',
                state: 'STATE',
                oauthType: '2.0',
                popupOptions: { width: 527, height: 582 }
            },
            twitter: {
                name: 'twitter',
                url: '/auth/twitter',
                authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
                redirectUri: this.getHttpHost(),
                oauthType: '1.0',
                popupOptions: { width: 495, height: 645 }
            },
            twitch: {
                name: 'twitch',
                url: '/auth/twitch',
                authorizationEndpoint: 'https://api.twitch.tv/kraken/oauth2/authorize',
                redirectUri: this.getHttpHost(),
                requiredUrlParams: ['scope'],
                scope: ['user_read'],
                scopeDelimiter: ' ',
                display: 'popup',
                oauthType: '2.0',
                popupOptions: { width: 500, height: 560 }
            },
            live: {
                name: 'live',
                url: '/auth/live',
                authorizationEndpoint: 'https://login.live.com/oauth20_authorize.srf',
                redirectUri: this.getHttpHost(),
                requiredUrlParams: ['display', 'scope'],
                scope: ['wl.emails'],
                scopeDelimiter: ' ',
                display: 'popup',
                oauthType: '2.0',
                popupOptions: { width: 500, height: 560 }
            },
            yahoo: {
                name: 'yahoo',
                url: '/auth/yahoo',
                authorizationEndpoint: 'https://api.login.yahoo.com/oauth2/request_auth',
                redirectUri: this.getHttpHost(),
                scope: [],
                scopeDelimiter: ',',
                oauthType: '2.0',
                popupOptions: { width: 559, height: 519 }
            },
            bitbucket: {
                name: 'bitbucket',
                url: '/auth/bitbucket',
                authorizationEndpoint: 'https://bitbucket.org/site/oauth2/authorize',
                redirectUri: this.getHttpHost('/'),
                requiredUrlParams: ['scope'],
                scope: ['email'],
                scopeDelimiter: ',',
                oauthType: '2.0',
                popupOptions: { width: 1028, height: 529 }
            },
            spotify: {
                name: 'spotify',
                url: '/auth/spotify',
                authorizationEndpoint: 'https://accounts.spotify.com/authorize',
                redirectUri: this.getHttpHost(),
                optionalUrlParams: ['state'],
                requiredUrlParams: ['scope'],
                scope: ['user-read-email'],
                scopePrefix: '',
                scopeDelimiter: ',',
                oauthType: '2.0',
                popupOptions: { width: 500, height: 530 },
                state: function () { return encodeURIComponent(Math.random().toString(36).substr(2)); }
            }
        };
        Object.keys(config).forEach(function (key) {
            if (typeof config[key] === "undefined") {
                return;
            }
            if (key !== 'providers') {
                _this[key] = config[key];
            }
            else {
                Object.keys(config[key]).map(function (provider) {
                    _this.providers[provider] = Object.assign(_this.providers[provider] || {}, config.providers[provider]);
                });
            }
        });
    }
    ConfigService.prototype.getHttpHost = function (path) {
        if (path === void 0) { path = ''; }
        return window.location.origin + path;
    };
    ConfigService.prototype.isCordovaApp = function () {
        return !!window['cordova'];
    };
    ConfigService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [CustomConfig])
    ], ConfigService);
    return ConfigService;
}());
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var config_service_1 = __webpack_require__(6);
var shared_service_1 = __webpack_require__(10);
var jwt_http_service_1 = __webpack_require__(9);
var oauth_service_1 = __webpack_require__(19);
var popup_service_1 = __webpack_require__(12);
var oauth1_service_1 = __webpack_require__(20);
var oauth2_service_1 = __webpack_require__(21);
var local_service_1 = __webpack_require__(18);
var auth_service_1 = __webpack_require__(30);
var storage_service_1 = __webpack_require__(13);
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(15);
var local_service_2 = __webpack_require__(18);
exports.LocalService = local_service_2.LocalService;
var oauth2_service_2 = __webpack_require__(21);
exports.Oauth2Service = oauth2_service_2.Oauth2Service;
var oauth1_service_2 = __webpack_require__(20);
exports.Oauth1Service = oauth1_service_2.Oauth1Service;
var popup_service_2 = __webpack_require__(12);
exports.PopupService = popup_service_2.PopupService;
var oauth_service_2 = __webpack_require__(19);
exports.OauthService = oauth_service_2.OauthService;
var jwt_http_service_2 = __webpack_require__(9);
exports.JwtHttp = jwt_http_service_2.JwtHttp;
var shared_service_2 = __webpack_require__(10);
exports.SharedService = shared_service_2.SharedService;
var storage_service_2 = __webpack_require__(13);
exports.StorageService = storage_service_2.StorageService;
var auth_service_2 = __webpack_require__(30);
exports.AuthService = auth_service_2.AuthService;
var config_service_2 = __webpack_require__(6);
exports.ConfigService = config_service_2.ConfigService;
exports.CustomConfig = config_service_2.CustomConfig;
var Ng2UiAuthModule = (function () {
    function Ng2UiAuthModule() {
    }
    Ng2UiAuthModule.forRootWithCustomHttp = function (config, httpProvider) {
        return {
            ngModule: Ng2UiAuthModule,
            providers: [
                { provide: config_service_1.CustomConfig, useClass: config },
                { provide: config_service_1.ConfigService, useClass: config_service_1.ConfigService, deps: [config_service_1.CustomConfig] },
                { provide: storage_service_1.StorageService, useClass: storage_service_1.StorageService, deps: [config_service_1.ConfigService] },
                { provide: shared_service_1.SharedService, useClass: shared_service_1.SharedService, deps: [storage_service_1.StorageService, config_service_1.ConfigService] },
                httpProvider,
                { provide: oauth_service_1.OauthService, useClass: oauth_service_1.OauthService, deps: [jwt_http_service_1.JwtHttp, core_1.Injector, shared_service_1.SharedService, config_service_1.ConfigService] },
                { provide: popup_service_1.PopupService, useClass: popup_service_1.PopupService, deps: [config_service_1.ConfigService] },
                { provide: oauth1_service_1.Oauth1Service, useClass: oauth1_service_1.Oauth1Service, deps: [jwt_http_service_1.JwtHttp, popup_service_1.PopupService, config_service_1.ConfigService] },
                { provide: oauth2_service_1.Oauth2Service, useClass: oauth2_service_1.Oauth2Service, deps: [jwt_http_service_1.JwtHttp, popup_service_1.PopupService, storage_service_1.StorageService, config_service_1.ConfigService] },
                { provide: local_service_1.LocalService, useClass: local_service_1.LocalService, deps: [jwt_http_service_1.JwtHttp, shared_service_1.SharedService, config_service_1.ConfigService] },
                { provide: auth_service_1.AuthService, useClass: auth_service_1.AuthService, deps: [shared_service_1.SharedService, local_service_1.LocalService, oauth_service_1.OauthService] },]
        };
    };
    Ng2UiAuthModule.forRoot = function (config) {
        return {
            ngModule: Ng2UiAuthModule,
            providers: [
                { provide: config_service_1.CustomConfig, useClass: config },
                { provide: config_service_1.ConfigService, useClass: config_service_1.ConfigService, deps: [config_service_1.CustomConfig] },
                { provide: storage_service_1.StorageService, useClass: storage_service_1.StorageService, deps: [config_service_1.ConfigService] },
                { provide: shared_service_1.SharedService, useClass: shared_service_1.SharedService, deps: [storage_service_1.StorageService, config_service_1.ConfigService] },
                { provide: jwt_http_service_1.JwtHttp, useClass: jwt_http_service_1.JwtHttp, deps: [http_1.Http, shared_service_1.SharedService, config_service_1.ConfigService] },
                { provide: oauth_service_1.OauthService, useClass: oauth_service_1.OauthService, deps: [jwt_http_service_1.JwtHttp, core_1.Injector, shared_service_1.SharedService, config_service_1.ConfigService] },
                { provide: popup_service_1.PopupService, useClass: popup_service_1.PopupService, deps: [config_service_1.ConfigService] },
                { provide: oauth1_service_1.Oauth1Service, useClass: oauth1_service_1.Oauth1Service, deps: [jwt_http_service_1.JwtHttp, popup_service_1.PopupService, config_service_1.ConfigService] },
                { provide: oauth2_service_1.Oauth2Service, useClass: oauth2_service_1.Oauth2Service, deps: [jwt_http_service_1.JwtHttp, popup_service_1.PopupService, storage_service_1.StorageService, config_service_1.ConfigService] },
                { provide: local_service_1.LocalService, useClass: local_service_1.LocalService, deps: [jwt_http_service_1.JwtHttp, shared_service_1.SharedService, config_service_1.ConfigService] },
                { provide: auth_service_1.AuthService, useClass: auth_service_1.AuthService, deps: [shared_service_1.SharedService, local_service_1.LocalService, oauth_service_1.OauthService] },]
        };
    };
    Ng2UiAuthModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule]
        }), 
        __metadata('design:paramtypes', [])
    ], Ng2UiAuthModule);
    return Ng2UiAuthModule;
}());
exports.Ng2UiAuthModule = Ng2UiAuthModule;
//# sourceMappingURL=ng2-ui-auth.module.js.map

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var http_1 = __webpack_require__(15);
__webpack_require__(17);
__webpack_require__(252);
var config_service_1 = __webpack_require__(6);
var shared_service_1 = __webpack_require__(10);
var JwtHttp = (function () {
    function JwtHttp(_http, _shared, _config) {
        this._http = _http;
        this._shared = _shared;
        this._config = _config;
    }
    JwtHttp.prototype.request = function (url, options) {
        var _this = this;
        var exp = this._shared.getExpirationDate();
        if (this._shared.getToken() &&
            (!exp || exp.getTime() + this._config.refreshBeforeExpiration > Date.now()) &&
            (options.autoRefreshToken ||
                typeof options.autoRefreshToken === 'undefined' && this._config.autoRefreshToken)) {
            return this.refreshToken()
                .switchMap(function () { return _this.actualRequest(url, options); });
        }
        if (this._config.tryTokenRefreshIfUnauthorized) {
            return this.actualRequest(url, options)
                .catch(function (response) {
                if (response.status === 401) {
                    return _this.refreshToken()
                        .switchMap(function () { return _this.actualRequest(url, options); });
                }
                throw response;
            });
        }
        return this.actualRequest(url, options);
    };
    JwtHttp.prototype.get = function (url, options) {
        options = options || {};
        options.method = http_1.RequestMethod.Get;
        return this.request(url, options);
    };
    JwtHttp.prototype.post = function (url, body, options) {
        options = options || {};
        options.method = http_1.RequestMethod.Post;
        options.body = body;
        return this.request(url, options);
    };
    JwtHttp.prototype.put = function (url, body, options) {
        options = options || {};
        options.method = http_1.RequestMethod.Put;
        options.body = body;
        return this.request(url, options);
    };
    JwtHttp.prototype.delete = function (url, options) {
        options = options || {};
        options.method = http_1.RequestMethod.Delete;
        return this.request(url, options);
    };
    JwtHttp.prototype.patch = function (url, body, options) {
        options = options || {};
        options.method = http_1.RequestMethod.Patch;
        options.body = body;
        return this.request(url, options);
    };
    JwtHttp.prototype.head = function (url, options) {
        options = options || {};
        options.method = http_1.RequestMethod.Head;
        return this.request(url, options);
    };
    JwtHttp.prototype.refreshToken = function () {
        var _this = this;
        var authHeader = new http_1.Headers();
        authHeader.append(this._config.authHeader, (this._config.authToken + ' ' + this._shared.getToken()));
        return this._http
            .get(this._config.refreshUrl, {
            headers: authHeader
        })
            .do(function (res) { return _this._shared.setToken(res); });
    };
    JwtHttp.prototype.actualRequest = function (url, options) {
        if (url instanceof http_1.Request) {
            url.headers = url.headers || new http_1.Headers();
            this.setHeaders(url);
        }
        else {
            options = options || {};
            this.setHeaders(options);
        }
        return this._http.request(url, options);
    };
    JwtHttp.prototype.setHeaders = function (obj) {
        var _this = this;
        obj.headers = obj.headers || new http_1.Headers();
        if (this._config.defaultHeaders) {
            Object.keys(this._config.defaultHeaders).forEach(function (defaultHeader) {
                if (!obj.headers.has(defaultHeader)) {
                    obj.headers.set(defaultHeader, _this._config.defaultHeaders[defaultHeader]);
                }
            });
        }
        if (this._shared.isAuthenticated()) {
            obj.headers.set(this._config.authHeader, this._config.authToken + ' ' + this._shared.getToken());
        }
    };
    JwtHttp = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, shared_service_1.SharedService, config_service_1.ConfigService])
    ], JwtHttp);
    return JwtHttp;
}());
exports.JwtHttp = JwtHttp;
//# sourceMappingURL=jwt-http.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ })

});
//# sourceMappingURL=vendor.bundle.js.map