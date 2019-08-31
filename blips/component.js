/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "@keyframes moveblip {\r\n    0% { transform: translateX(-15vw) }\r\n    100% { transform: translateX(100vw) }\r\n}\r\n\r\n.blip-container { height: 100%; width: 100%; overflow: hidden; position: relative; }\r\n.blip { animation: moveblip 100s linear infinite; transition: fill 1s linear; }", ""]);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function () {
  function e(t, s, n) {
    function i(r, a) {
      if (!s[r]) {
        if (!t[r]) {
          var c = "function" == typeof require && require;
          if (!a && c) return require(r, !0);
          if (o) return o(r, !0);
          var l = new Error("Cannot find module '" + r + "'");
          throw l.code = "MODULE_NOT_FOUND", l;
        }

        var u = s[r] = {
          exports: {}
        };
        t[r][0].call(u.exports, function (e) {
          var s = t[r][1][e];
          return i(s || e);
        }, u, u.exports, e, t, s, n);
      }

      return s[r].exports;
    }

    for (var o = "function" == typeof require && require, r = 0; r < n.length; r++) {
      i(n[r]);
    }

    return i;
  }

  return e;
}()({
  1: [function (e, t, s) {
    "use strict";

    t.exports = {
      client: e("./lib/client"),
      Client: e("./lib/client")
    };
  }, {
    "./lib/client": 3
  }],
  2: [function (e, t, s) {
    "use strict";

    var n = e("request"),
        i = e("./utils"),
        o = function o(e, t) {
      var s = null === i.get(e.url, null) ? i.get(e.uri, null) : i.get(e.url, null);
      if (i.isURL(s) || (s = "https://api.twitch.tv/kraken" + ("/" === s[0] ? s : "/" + s)), i.isNode()) n(i.merge({
        method: "GET",
        json: !0
      }, e, {
        url: s
      }), t);else if (i.isExtension()) {
        e = i.merge({
          url: s,
          method: "GET",
          headers: {}
        }, e);
        var o = new XMLHttpRequest();
        o.open(e.method, e.url, !0);

        for (var r in e.headers) {
          o.setRequestHeader(r, e.headers[r]);
        }

        o.responseType = "json", o.addEventListener("load", function (e) {
          4 == o.readyState && (200 != o.status ? t(o.status, null, null) : t(null, null, o.response));
        }), o.send();
      } else {
        var a = "jsonp_callback_" + Math.round(1e5 * Math.random());

        window[a] = function (e) {
          delete window[a], document.body.removeChild(c), t(null, null, e);
        };

        var c = document.createElement("script");
        c.src = "" + s + (s.includes("?") ? "&" : "?") + "callback=" + a, document.body.appendChild(c);
      }
    };

    t.exports = o;
  }, {
    "./utils": 9,
    request: 10
  }],
  3: [function (e, t, s) {
    (function (s) {
      "use strict";

      var n = e("./api"),
          i = e("./commands"),
          o = e("./events").EventEmitter,
          r = e("./logger"),
          a = e("./parser"),
          c = e("./timer"),
          l = s.WebSocket || s.MozWebSocket || e("ws"),
          u = e("./utils"),
          h = function f(e) {
        if (this instanceof f == !1) return new f(e);
        this.setMaxListeners(0), this.opts = u.get(e, {}), this.opts.channels = this.opts.channels || [], this.opts.connection = this.opts.connection || {}, this.opts.identity = this.opts.identity || {}, this.opts.options = this.opts.options || {}, this.clientId = u.get(this.opts.options.clientId, null), this.maxReconnectAttempts = u.get(this.opts.connection.maxReconnectAttempts, 1 / 0), this.maxReconnectInterval = u.get(this.opts.connection.maxReconnectInterval, 3e4), this.reconnect = u.get(this.opts.connection.reconnect, !1), this.reconnectDecay = u.get(this.opts.connection.reconnectDecay, 1.5), this.reconnectInterval = u.get(this.opts.connection.reconnectInterval, 1e3), this.reconnecting = !1, this.reconnections = 0, this.reconnectTimer = this.reconnectInterval, this.secure = u.get(this.opts.connection.secure, !1), this.emotes = "", this.emotesets = {}, this.channels = [], this.currentLatency = 0, this.globaluserstate = {}, this.lastJoined = "", this.latency = new Date(), this.moderators = {}, this.pingLoop = null, this.pingTimeout = null, this.reason = "", this.username = "", this.userstate = {}, this.wasCloseCalled = !1, this.ws = null;
        var t = "error";
        this.opts.options.debug && (t = "info"), this.log = this.opts.logger || r;

        try {
          r.setLevel(t);
        } catch (s) {}

        this.opts.channels.forEach(function (e, t, s) {
          s[t] = u.channel(e);
        }), o.call(this);
      };

      u.inherits(h, o), h.prototype.api = n;

      for (var m in i) {
        h.prototype[m] = i[m];
      }

      h.prototype.handleMessage = function (e) {
        var t = this;

        if (!u.isNull(e)) {
          this.emit("raw_message", JSON.parse(JSON.stringify(e)), e);
          var s = u.channel(u.get(e.params[0], null)),
              n = u.get(e.params[1], null),
              i = u.get(e.tags["msg-id"], null);

          if (e.tags = a.badges(a.badgeInfo(a.emotes(e.tags))), e.tags) {
            var o = e.tags;

            for (var r in o) {
              if ("emote-sets" !== r && "ban-duration" !== r && "bits" !== r) {
                var l = o[r];
                u.isBoolean(l) ? l = null : "1" === l ? l = !0 : "0" === l ? l = !1 : u.isString(l) && (l = u.unescapeIRC(l)), o[r] = l;
              }
            }
          }

          if (u.isNull(e.prefix)) switch (e.command) {
            case "PING":
              this.emit("ping"), u.isNull(this.ws) || 1 !== this.ws.readyState || this.ws.send("PONG");
              break;

            case "PONG":
              var h = new Date();
              this.currentLatency = (h.getTime() - this.latency.getTime()) / 1e3, this.emits(["pong", "_promisePing"], [[this.currentLatency]]), clearTimeout(this.pingTimeout);
              break;

            default:
              this.log.warn("Could not parse message with no prefix:\n" + JSON.stringify(e, null, 4));
          } else if ("tmi.twitch.tv" === e.prefix) switch (e.command) {
            case "002":
            case "003":
            case "004":
            case "375":
            case "376":
            case "CAP":
              break;

            case "001":
              this.username = e.params[0];
              break;

            case "372":
              this.log.info("Connected to server."), this.userstate["#tmijs"] = {}, this.emits(["connected", "_promiseConnect"], [[this.server, this.port], [null]]), this.reconnections = 0, this.reconnectTimer = this.reconnectInterval, this.pingLoop = setInterval(function () {
                u.isNull(t.ws) || 1 !== t.ws.readyState || t.ws.send("PING"), t.latency = new Date(), t.pingTimeout = setTimeout(function () {
                  u.isNull(t.ws) || (t.wasCloseCalled = !1, t.log.error("Ping timeout."), t.ws.close(), clearInterval(t.pingLoop), clearTimeout(t.pingTimeout));
                }, u.get(t.opts.connection.timeout, 9999));
              }, 6e4);
              var m = new c.queue(2e3),
                  f = u.union(this.opts.channels, this.channels);
              this.channels = [];

              for (var p = function p() {
                var e = f[d];
                m.add(function () {
                  u.isNull(t.ws) || 1 !== t.ws.readyState || t.join(e)["catch"](function (e) {
                    t.log.error(e);
                  });
                });
              }, d = 0; d < f.length; d++) {
                p();
              }

              m.run();
              break;

            case "NOTICE":
              var g = [null],
                  _ = [s, i, n],
                  b = [i],
                  v = [s, !0],
                  y = [s, !1],
                  w = [_, g],
                  C = [_, b],
                  k = "[" + s + "] " + n;

              switch (i) {
                case "subs_on":
                  this.log.info("[" + s + "] This room is now in subscribers-only mode."), this.emits(["subscriber", "subscribers", "_promiseSubscribers"], [v, v, g]);
                  break;

                case "subs_off":
                  this.log.info("[" + s + "] This room is no longer in subscribers-only mode."), this.emits(["subscriber", "subscribers", "_promiseSubscribersoff"], [y, y, g]);
                  break;

                case "emote_only_on":
                  this.log.info("[" + s + "] This room is now in emote-only mode."), this.emits(["emoteonly", "_promiseEmoteonly"], [v, g]);
                  break;

                case "emote_only_off":
                  this.log.info("[" + s + "] This room is no longer in emote-only mode."), this.emits(["emoteonly", "_promiseEmoteonlyoff"], [y, g]);
                  break;

                case "slow_on":
                case "slow_off":
                  break;

                case "followers_on_zero":
                case "followers_on":
                case "followers_off":
                  break;

                case "r9k_on":
                  this.log.info("[" + s + "] This room is now in r9k mode."), this.emits(["r9kmode", "r9kbeta", "_promiseR9kbeta"], [v, v, g]);
                  break;

                case "r9k_off":
                  this.log.info("[" + s + "] This room is no longer in r9k mode."), this.emits(["r9kmode", "r9kbeta", "_promiseR9kbetaoff"], [y, y, g]);
                  break;

                case "room_mods":
                  var T = n.split(": ")[1].toLowerCase().split(", ").filter(function (e) {
                    return e;
                  });
                  this.emits(["_promiseMods", "mods"], [[null, T], [s, T]]);
                  break;

                case "no_mods":
                  this.emits(["_promiseMods", "mods"], [[null, []], [s, []]]);
                  break;

                case "vips_success":
                  n.endsWith(".") && (n = n.slice(0, -1));
                  var x = n.split(": ")[1].toLowerCase().split(", ").filter(function (e) {
                    return e;
                  });
                  this.emits(["_promiseVips", "vips"], [[null, x], [s, x]]);
                  break;

                case "no_vips":
                  this.emits(["_promiseVips", "vips"], [[null, []], [s, []]]);
                  break;

                case "already_banned":
                case "bad_ban_admin":
                case "bad_ban_broadcaster":
                case "bad_ban_global_mod":
                case "bad_ban_self":
                case "bad_ban_staff":
                case "usage_ban":
                  this.log.info(k), this.emits(["notice", "_promiseBan"], C);
                  break;

                case "ban_success":
                  this.log.info(k), this.emits(["notice", "_promiseBan"], w);
                  break;

                case "usage_clear":
                  this.log.info(k), this.emits(["notice", "_promiseClear"], C);
                  break;

                case "usage_mods":
                  this.log.info(k), this.emits(["notice", "_promiseMods"], [_, [i, []]]);
                  break;

                case "mod_success":
                  this.log.info(k), this.emits(["notice", "_promiseMod"], w);
                  break;

                case "usage_vips":
                  this.log.info(k), this.emits(["notice", "_promiseVips"], [_, [i, []]]);
                  break;

                case "usage_vip":
                case "bad_vip_grantee_banned":
                case "bad_vip_grantee_already_vip":
                  this.log.info(k), this.emits(["notice", "_promiseVip"], [_, [i, []]]);
                  break;

                case "vip_success":
                  this.log.info(k), this.emits(["notice", "_promiseVip"], w);
                  break;

                case "usage_mod":
                case "bad_mod_banned":
                case "bad_mod_mod":
                  this.log.info(k), this.emits(["notice", "_promiseMod"], C);
                  break;

                case "unmod_success":
                  this.log.info(k), this.emits(["notice", "_promiseUnmod"], w);
                  break;

                case "unvip_success":
                  this.log.info(k), this.emits(["notice", "_promiseUnvip"], w);
                  break;

                case "usage_unmod":
                case "bad_unmod_mod":
                  this.log.info(k), this.emits(["notice", "_promiseUnmod"], C);
                  break;

                case "usage_unvip":
                case "bad_unvip_grantee_not_vip":
                  this.log.info(k), this.emits(["notice", "_promiseUnvip"], C);
                  break;

                case "color_changed":
                  this.log.info(k), this.emits(["notice", "_promiseColor"], w);
                  break;

                case "usage_color":
                case "turbo_only_color":
                  this.log.info(k), this.emits(["notice", "_promiseColor"], C);
                  break;

                case "commercial_success":
                  this.log.info(k), this.emits(["notice", "_promiseCommercial"], w);
                  break;

                case "usage_commercial":
                case "bad_commercial_error":
                  this.log.info(k), this.emits(["notice", "_promiseCommercial"], C);
                  break;

                case "hosts_remaining":
                  this.log.info(k);
                  var E = isNaN(n[0]) ? 0 : parseInt(n[0]);
                  this.emits(["notice", "_promiseHost"], [_, [null, ~~E]]);
                  break;

                case "bad_host_hosting":
                case "bad_host_rate_exceeded":
                case "bad_host_error":
                case "usage_host":
                  this.log.info(k), this.emits(["notice", "_promiseHost"], [_, [i, null]]);
                  break;

                case "already_r9k_on":
                case "usage_r9k_on":
                  this.log.info(k), this.emits(["notice", "_promiseR9kbeta"], C);
                  break;

                case "already_r9k_off":
                case "usage_r9k_off":
                  this.log.info(k), this.emits(["notice", "_promiseR9kbetaoff"], C);
                  break;

                case "timeout_success":
                  this.log.info(k), this.emits(["notice", "_promiseTimeout"], w);
                  break;

                case "delete_message_success":
                  this.log.info("[" + s + " " + n + "]"), this.emits(["notice", "_promiseDeletemessage"], w);

                case "already_subs_off":
                case "usage_subs_off":
                  this.log.info(k), this.emits(["notice", "_promiseSubscribersoff"], C);
                  break;

                case "already_subs_on":
                case "usage_subs_on":
                  this.log.info(k), this.emits(["notice", "_promiseSubscribers"], C);
                  break;

                case "already_emote_only_off":
                case "usage_emote_only_off":
                  this.log.info(k), this.emits(["notice", "_promiseEmoteonlyoff"], C);
                  break;

                case "already_emote_only_on":
                case "usage_emote_only_on":
                  this.log.info(k), this.emits(["notice", "_promiseEmoteonly"], C);
                  break;

                case "usage_slow_on":
                  this.log.info(k), this.emits(["notice", "_promiseSlow"], C);
                  break;

                case "usage_slow_off":
                  this.log.info(k), this.emits(["notice", "_promiseSlowoff"], C);
                  break;

                case "usage_timeout":
                case "bad_timeout_admin":
                case "bad_timeout_broadcaster":
                case "bad_timeout_duration":
                case "bad_timeout_global_mod":
                case "bad_timeout_self":
                case "bad_timeout_staff":
                  this.log.info(k), this.emits(["notice", "_promiseTimeout"], C);
                  break;

                case "untimeout_success":
                case "unban_success":
                  this.log.info(k), this.emits(["notice", "_promiseUnban"], w);
                  break;

                case "usage_unban":
                case "bad_unban_no_ban":
                  this.log.info(k), this.emits(["notice", "_promiseUnban"], C);
                  break;

                case "usage_delete":
                case "bad_delete_message_error":
                case "bad_delete_message_broadcaster":
                case "bad_delete_message_mod":
                  this.log.info(k), this.emits(["notice", "_promiseDeletemessage"], C);
                  break;

                case "usage_unhost":
                case "not_hosting":
                  this.log.info(k), this.emits(["notice", "_promiseUnhost"], C);
                  break;

                case "whisper_invalid_login":
                case "whisper_invalid_self":
                case "whisper_limit_per_min":
                case "whisper_limit_per_sec":
                case "whisper_restricted_recipient":
                  this.log.info(k), this.emits(["notice", "_promiseWhisper"], C);
                  break;

                case "no_permission":
                case "msg_banned":
                case "msg_room_not_found":
                case "msg_channel_suspended":
                case "tos_ban":
                  this.log.info(k), this.emits(["notice", "_promiseBan", "_promiseClear", "_promiseUnban", "_promiseTimeout", "_promiseDeletemessage", "_promiseMods", "_promiseMod", "_promiseUnmod", "_promiseVips", "_promiseVip", "_promiseUnvip", "_promiseCommercial", "_promiseHost", "_promiseUnhost", "_promiseJoin", "_promisePart", "_promiseR9kbeta", "_promiseR9kbetaoff", "_promiseSlow", "_promiseSlowoff", "_promiseFollowers", "_promiseFollowersoff", "_promiseSubscribers", "_promiseSubscribersoff", "_promiseEmoteonly", "_promiseEmoteonlyoff"], [_, [i, s]]);
                  break;

                case "msg_rejected":
                case "msg_rejected_mandatory":
                  this.log.info(k), this.emit("automod", s, i, n);
                  break;

                case "unrecognized_cmd":
                  this.log.info(k), this.emit("notice", s, i, n);
                  break;

                case "cmds_available":
                case "host_target_went_offline":
                case "msg_censored_broadcaster":
                case "msg_duplicate":
                case "msg_emoteonly":
                case "msg_verified_email":
                case "msg_ratelimit":
                case "msg_subsonly":
                case "msg_timedout":
                case "msg_bad_characters":
                case "msg_channel_blocked":
                case "msg_facebook":
                case "msg_followersonly":
                case "msg_followersonly_followed":
                case "msg_followersonly_zero":
                case "msg_slowmode":
                case "msg_suspended":
                case "no_help":
                case "usage_disconnect":
                case "usage_help":
                case "usage_me":
                  this.log.info(k), this.emit("notice", s, i, n);
                  break;

                case "host_on":
                case "host_off":
                  break;

                default:
                  n.includes("Login unsuccessful") || n.includes("Login authentication failed") ? (this.wasCloseCalled = !1, this.reconnect = !1, this.reason = n, this.log.error(this.reason), this.ws.close()) : n.includes("Error logging in") || n.includes("Improperly formatted auth") ? (this.wasCloseCalled = !1, this.reconnect = !1, this.reason = n, this.log.error(this.reason), this.ws.close()) : n.includes("Invalid NICK") ? (this.wasCloseCalled = !1, this.reconnect = !1, this.reason = "Invalid NICK.", this.log.error(this.reason), this.ws.close()) : this.log.warn("Could not parse NOTICE from tmi.twitch.tv:\n" + JSON.stringify(e, null, 4));
              }

              break;

            case "USERNOTICE":
              var S = e.tags["display-name"] || e.tags.login,
                  N = e.tags["msg-param-sub-plan"] || "",
                  P = u.unescapeIRC(u.get(e.tags["msg-param-sub-plan-name"], "")) || null,
                  L = N.includes("Prime"),
                  O = {
                prime: L,
                plan: N,
                planName: P
              },
                  I = e.tags,
                  D = ~~(e.tags["msg-param-streak-months"] || 0),
                  R = e.tags["msg-param-recipient-display-name"] || e.tags["msg-param-recipient-user-name"],
                  M = ~~e.tags["msg-param-mass-gift-count"];

              switch (I["message-type"] = i, i) {
                case "resub":
                  this.emits(["resub", "subanniversary"], [[s, S, D, n, I, O]]);
                  break;

                case "sub":
                  this.emit("subscription", s, S, O, n, I);
                  break;

                case "subgift":
                  this.emit("subgift", s, S, D, R, O, I);
                  break;

                case "anonsubgift":
                  this.emit("anonsubgift", s, D, R, O, I);
                  break;

                case "submysterygift":
                  this.emit("submysterygift", s, S, M, O, I);
                  break;

                case "anonsubmysterygift":
                  this.emit("anonsubmysterygift", s, M, O, I);
                  break;

                case "primepaidupgrade":
                  this.emit("primepaidupgrade", s, S, O, I);
                  break;

                case "giftpaidupgrade":
                  var A = e.tags["msg-param-sender-name"] || e.tags["msg-param-sender-login"];
                  this.emit("giftpaidupgrade", s, S, A, I);
                  break;

                case "anongiftpaidupgrade":
                  this.emit("anongiftpaidupgrade", s, S, I);
                  break;

                case "raid":
                  var S = e.tags["msg-param-displayName"] || e.tags["msg-param-login"],
                      U = e.tags["msg-param-viewerCount"];
                  this.emit("raided", s, S, U);
              }

              break;

            case "HOSTTARGET":
              var j = n.split(" "),
                  U = ~~j[1] || 0;
              "-" === j[0] ? (this.log.info("[" + s + "] Exited host mode."), this.emits(["unhost", "_promiseUnhost"], [[s, U], [null]])) : (this.log.info("[" + s + "] Now hosting " + j[0] + " for " + U + " viewer(s)."), this.emit("hosting", s, j[0], U));
              break;

            case "CLEARCHAT":
              if (e.params.length > 1) {
                var J = u.get(e.tags["ban-duration"], null);
                u.isNull(J) ? (this.log.info("[" + s + "] " + n + " has been banned."), this.emit("ban", s, n, null, e.tags)) : (this.log.info("[" + s + "] " + n + " has been timed out for " + J + " seconds."), this.emit("timeout", s, n, null, ~~J, e.tags));
              } else this.log.info("[" + s + "] Chat was cleared by a moderator."), this.emits(["clearchat", "_promiseClear"], [[s], [null]]);

              break;

            case "CLEARMSG":
              if (e.params.length > 1) {
                var S = e.tags.login,
                    H = n,
                    I = e.tags;
                I["message-type"] = "messagedeleted", this.log.info("[" + s + "] " + S + "'s message has been deleted."), this.emit("messagedeleted", s, S, H, I);
              }

              break;

            case "RECONNECT":
              this.log.info("Received RECONNECT request from Twitch.."), this.log.info("Disconnecting and reconnecting in " + Math.round(this.reconnectTimer / 1e3) + " seconds.."), this.disconnect(), setTimeout(function () {
                t.connect();
              }, this.reconnectTimer);
              break;

            case "USERSTATE":
              e.tags.username = this.username, "mod" === e.tags["user-type"] && (this.moderators[this.lastJoined] || (this.moderators[this.lastJoined] = []), this.moderators[this.lastJoined].includes(this.username) || this.moderators[this.lastJoined].push(this.username)), u.isJustinfan(this.getUsername()) || this.userstate[s] || (this.userstate[s] = e.tags, this.lastJoined = s, this.channels.push(s), this.log.info("Joined " + s), this.emit("join", s, u.username(this.getUsername()), !0)), e.tags["emote-sets"] !== this.emotes && this._updateEmoteset(e.tags["emote-sets"]), this.userstate[s] = e.tags;
              break;

            case "GLOBALUSERSTATE":
              this.globaluserstate = e.tags, "undefined" != typeof e.tags["emote-sets"] && this._updateEmoteset(e.tags["emote-sets"]);
              break;

            case "ROOMSTATE":
              if (u.channel(this.lastJoined) === s && this.emit("_promiseJoin", null, s), e.tags.channel = s, this.emit("roomstate", s, e.tags), !e.tags.hasOwnProperty("subs-only")) {
                if (e.tags.hasOwnProperty("slow")) if ("boolean" != typeof e.tags.slow || e.tags.slow) {
                  var q = ~~e.tags.slow,
                      G = [s, !0, q];
                  this.log.info("[" + s + "] This room is now in slow mode."), this.emits(["slow", "slowmode", "_promiseSlow"], [G, G, [null]]);
                } else {
                  var W = [s, !1, 0];
                  this.log.info("[" + s + "] This room is no longer in slow mode."), this.emits(["slow", "slowmode", "_promiseSlowoff"], [W, W, [null]]);
                }
                if (e.tags.hasOwnProperty("followers-only")) if ("-1" === e.tags["followers-only"]) {
                  var W = [s, !1, 0];
                  this.log.info("[" + s + "] This room is no longer in followers-only mode."), this.emits(["followersonly", "followersmode", "_promiseFollowersoff"], [W, W, [null]]);
                } else {
                  var q = ~~e.tags["followers-only"],
                      G = [s, !0, q];
                  this.log.info("[" + s + "] This room is now in follower-only mode."), this.emits(["followersonly", "followersmode", "_promiseFollowers"], [W, W, [null]]);
                }
              }

              break;

            case "SERVERCHANGE":
              break;

            default:
              this.log.warn("Could not parse message from tmi.twitch.tv:\n" + JSON.stringify(e, null, 4));
          } else if ("jtv" === e.prefix) switch (e.command) {
            case "MODE":
              "+o" === n ? (this.moderators[s] || (this.moderators[s] = []), this.moderators[s].includes(e.params[2]) || this.moderators[s].push(e.params[2]), this.emit("mod", s, e.params[2])) : "-o" === n && (this.moderators[s] || (this.moderators[s] = []), this.moderators[s].filter(function (t) {
                return t != e.params[2];
              }), this.emit("unmod", s, e.params[2]));
              break;

            default:
              this.log.warn("Could not parse message from jtv:\n" + JSON.stringify(e, null, 4));
          } else switch (e.command) {
            case "353":
              this.emit("names", e.params[2], e.params[3].split(" "));
              break;

            case "366":
              break;

            case "JOIN":
              var V = e.prefix.split("!")[0];
              u.isJustinfan(this.getUsername()) && this.username === V && (this.lastJoined = s, this.channels.push(s), this.log.info("Joined " + s), this.emit("join", s, V, !0)), this.username !== V && this.emit("join", s, V, !1);
              break;

            case "PART":
              var F = !1,
                  V = e.prefix.split("!")[0];

              if (this.username === V) {
                F = !0, this.userstate[s] && delete this.userstate[s];
                var z = this.channels.indexOf(s);
                -1 !== z && this.channels.splice(z, 1);
                var z = this.opts.channels.indexOf(s);
                -1 !== z && this.opts.channels.splice(z, 1), this.log.info("Left " + s), this.emit("_promisePart", null);
              }

              this.emit("part", s, V, F);
              break;

            case "WHISPER":
              var V = e.prefix.split("!")[0];
              this.log.info("[WHISPER] <" + V + ">: " + n), e.tags.hasOwnProperty("username") || (e.tags.username = V), e.tags["message-type"] = "whisper";
              var B = u.channel(e.tags.username);
              this.emits(["whisper", "message"], [[B, e.tags, n, !1]]);
              break;

            case "PRIVMSG":
              if (e.tags.username = e.prefix.split("!")[0], "jtv" === e.tags.username) {
                var $ = u.username(n.split(" ")[0]),
                    K = n.includes("auto");

                if (n.includes("hosting you for")) {
                  var Q = u.extractNumber(n);
                  this.emit("hosted", s, $, Q, K);
                } else n.includes("hosting you") && this.emit("hosted", s, $, 0, K);
              } else {
                var X = u.actionMessage(n);
                X ? (e.tags["message-type"] = "action", this.log.info("[" + s + "] *<" + e.tags.username + ">: " + X[1]), this.emits(["action", "message"], [[s, e.tags, X[1], !1]])) : e.tags.hasOwnProperty("bits") ? this.emit("cheer", s, e.tags, n) : (e.tags["message-type"] = "chat", this.log.info("[" + s + "] <" + e.tags.username + ">: " + n), this.emits(["chat", "message"], [[s, e.tags, n, !1]]));
              }

              break;

            default:
              this.log.warn("Could not parse message:\n" + JSON.stringify(e, null, 4));
          }
        }
      }, h.prototype.connect = function () {
        var e = this;
        return new Promise(function (t, s) {
          e.server = u.get(e.opts.connection.server, "irc-ws.chat.twitch.tv"), e.port = u.get(e.opts.connection.port, 80), e.secure && (e.port = 443), 443 === e.port && (e.secure = !0), e.reconnectTimer = e.reconnectTimer * e.reconnectDecay, e.reconnectTimer >= e.maxReconnectInterval && (e.reconnectTimer = e.maxReconnectInterval), e._openConnection(), e.once("_promiseConnect", function (n) {
            n ? s(n) : t([e.server, ~~e.port]);
          });
        });
      }, h.prototype._openConnection = function () {
        this.ws = new l((this.secure ? "wss" : "ws") + "://" + this.server + ":" + this.port + "/", "irc"), this.ws.onmessage = this._onMessage.bind(this), this.ws.onerror = this._onError.bind(this), this.ws.onclose = this._onClose.bind(this), this.ws.onopen = this._onOpen.bind(this);
      }, h.prototype._onOpen = function () {
        u.isNull(this.ws) || 1 !== this.ws.readyState || (this.log.info("Connecting to " + this.server + " on port " + this.port + ".."), this.emit("connecting", this.server, ~~this.port), this.username = u.get(this.opts.identity.username, u.justinfan()), this.password = u.password(u.get(this.opts.identity.password, "SCHMOOPIIE")), this.log.info("Sending authentication to server.."), this.emit("logon"), this.ws.send("CAP REQ :twitch.tv/tags twitch.tv/commands twitch.tv/membership"), this.ws.send("PASS " + this.password), this.ws.send("NICK " + this.username));
      }, h.prototype._onMessage = function (e) {
        var t = this,
            s = e.data.split("\r\n");
        s.forEach(function (e) {
          u.isNull(e) || t.handleMessage(a.msg(e));
        });
      }, h.prototype._onError = function () {
        var e = this;
        this.moderators = {}, this.userstate = {}, this.globaluserstate = {}, clearInterval(this.pingLoop), clearTimeout(this.pingTimeout), this.reason = u.isNull(this.ws) ? "Connection closed." : "Unable to connect.", this.emits(["_promiseConnect", "disconnected"], [[this.reason]]), this.reconnect && this.reconnections === this.maxReconnectAttempts && (this.emit("maxreconnect"), this.log.error("Maximum reconnection attempts reached.")), this.reconnect && !this.reconnecting && this.reconnections <= this.maxReconnectAttempts - 1 && (this.reconnecting = !0, this.reconnections = this.reconnections + 1, this.log.error("Reconnecting in " + Math.round(this.reconnectTimer / 1e3) + " seconds.."), this.emit("reconnect"), setTimeout(function () {
          e.reconnecting = !1, e.connect();
        }, this.reconnectTimer)), this.ws = null;
      }, h.prototype._onClose = function () {
        var e = this;
        this.moderators = {}, this.userstate = {}, this.globaluserstate = {}, clearInterval(this.pingLoop), clearTimeout(this.pingTimeout), this.wasCloseCalled ? (this.wasCloseCalled = !1, this.reason = "Connection closed.", this.log.info(this.reason), this.emits(["_promiseConnect", "_promiseDisconnect", "disconnected"], [[this.reason], [null], [this.reason]])) : (this.emits(["_promiseConnect", "disconnected"], [[this.reason]]), this.reconnect && this.reconnections === this.maxReconnectAttempts && (this.emit("maxreconnect"), this.log.error("Maximum reconnection attempts reached.")), this.reconnect && !this.reconnecting && this.reconnections <= this.maxReconnectAttempts - 1 && (this.reconnecting = !0, this.reconnections = this.reconnections + 1, this.log.error("Could not connect to server. Reconnecting in " + Math.round(this.reconnectTimer / 1e3) + " seconds.."), this.emit("reconnect"), setTimeout(function () {
          e.reconnecting = !1, e.connect();
        }, this.reconnectTimer))), this.ws = null;
      }, h.prototype._getPromiseDelay = function () {
        return this.currentLatency <= 600 ? 600 : this.currentLatency + 100;
      }, h.prototype._sendCommand = function (e, t, s, n) {
        var i = this;
        return new Promise(function (o, r) {
          if (u.isNull(i.ws) || 1 !== i.ws.readyState) return r("Not connected to server.");
          if ("number" == typeof e && u.promiseDelay(e).then(function () {
            r("No response from Twitch.");
          }), u.isNull(t)) i.log.info("Executing command: " + s), i.ws.send(s);else {
            var a = u.channel(t);
            i.log.info("[" + a + "] Executing command: " + s), i.ws.send("PRIVMSG " + a + " :" + s);
          }
          n(o, r);
        });
      }, h.prototype._sendMessage = function (e, t, s, n) {
        var i = this;
        return new Promise(function (o, r) {
          if (u.isNull(i.ws) || 1 !== i.ws.readyState) return r("Not connected to server.");
          if (u.isJustinfan(i.getUsername())) return r("Cannot send anonymous messages.");
          var c = u.channel(t);

          if (i.userstate[c] || (i.userstate[c] = {}), s.length >= 500) {
            var l = u.splitLine(s, 500);
            s = l[0], setTimeout(function () {
              i._sendMessage(e, t, l[1], function () {});
            }, 350);
          }

          i.ws.send("PRIVMSG " + c + " :" + s);
          var h = {};
          Object.keys(i.emotesets).forEach(function (e) {
            i.emotesets[e].forEach(function (e) {
              return u.isRegex(e.code) ? a.emoteRegex(s, e.code, e.id, h) : void a.emoteString(s, e.code, e.id, h);
            });
          });
          var m = u.merge(i.userstate[c], a.emotes({
            emotes: a.transformEmotes(h) || null
          })),
              f = u.actionMessage(s);
          f ? (m["message-type"] = "action", i.log.info("[" + c + "] *<" + i.getUsername() + ">: " + f[1]), i.emits(["action", "message"], [[c, m, f[1], !0]])) : (m["message-type"] = "chat", i.log.info("[" + c + "] <" + i.getUsername() + ">: " + s), i.emits(["chat", "message"], [[c, m, s, !0]])), n(o, r);
        });
      }, h.prototype._updateEmoteset = function (e) {
        var t = this;
        this.emotes = e, this.api({
          url: "/chat/emoticon_images?emotesets=" + e,
          headers: {
            Authorization: "OAuth " + u.password(u.get(this.opts.identity.password, "")).replace("oauth:", ""),
            "Client-ID": this.clientId
          }
        }, function (s, n, i) {
          return s ? void setTimeout(function () {
            t._updateEmoteset(e);
          }, 6e4) : (t.emotesets = i.emoticon_sets || {}, t.emit("emotesets", e, t.emotesets));
        });
      }, h.prototype.getUsername = function () {
        return this.username;
      }, h.prototype.getOptions = function () {
        return this.opts;
      }, h.prototype.getChannels = function () {
        return this.channels;
      }, h.prototype.isMod = function (e, t) {
        var s = u.channel(e);
        return this.moderators[s] || (this.moderators[s] = []), this.moderators[s].includes(u.username(t));
      }, h.prototype.readyState = function () {
        return u.isNull(this.ws) ? "CLOSED" : ["CONNECTING", "OPEN", "CLOSING", "CLOSED"][this.ws.readyState];
      }, h.prototype.disconnect = function () {
        var e = this;
        return new Promise(function (t, s) {
          u.isNull(e.ws) || 3 === e.ws.readyState ? (e.log.error("Cannot disconnect from server. Socket is not opened or connection is already closing."), s("Cannot disconnect from server. Socket is not opened or connection is already closing.")) : (e.wasCloseCalled = !0, e.log.info("Disconnecting from server.."), e.ws.close(), e.once("_promiseDisconnect", function () {
            t([e.server, ~~e.port]);
          }));
        });
      }, "undefined" != typeof t && t.exports && (t.exports = h), "undefined" != typeof window && (window.tmi = {}, window.tmi.client = h, window.tmi.Client = h);
    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
  }, {
    "./api": 2,
    "./commands": 4,
    "./events": 5,
    "./logger": 6,
    "./parser": 7,
    "./timer": 8,
    "./utils": 9,
    ws: 10
  }],
  4: [function (e, t, s) {
    "use strict";

    function n(e, t) {
      var s = this;
      return e = u.channel(e), t = u.get(t, 30), this._sendCommand(this._getPromiseDelay(), e, "/followers " + t, function (n, i) {
        s.once("_promiseFollowers", function (s) {
          s ? i(s) : n([e, ~~t]);
        });
      });
    }

    function i(e) {
      var t = this;
      return e = u.channel(e), this._sendCommand(this._getPromiseDelay(), e, "/followersoff", function (s, n) {
        t.once("_promiseFollowersoff", function (t) {
          t ? n(t) : s([e]);
        });
      });
    }

    function o(e) {
      var t = this;
      return e = u.channel(e), this._sendCommand(this._getPromiseDelay(), null, "PART " + e, function (s, n) {
        t.once("_promisePart", function (t) {
          t ? n(t) : s([e]);
        });
      });
    }

    function r(e) {
      var t = this;
      return e = u.channel(e), this._sendCommand(this._getPromiseDelay(), e, "/r9kbeta", function (s, n) {
        t.once("_promiseR9kbeta", function (t) {
          t ? n(t) : s([e]);
        });
      });
    }

    function a(e) {
      var t = this;
      return e = u.channel(e), this._sendCommand(this._getPromiseDelay(), e, "/r9kbetaoff", function (s, n) {
        t.once("_promiseR9kbetaoff", function (t) {
          t ? n(t) : s([e]);
        });
      });
    }

    function c(e, t) {
      var s = this;
      return e = u.channel(e), t = u.get(t, 300), this._sendCommand(this._getPromiseDelay(), e, "/slow " + t, function (n, i) {
        s.once("_promiseSlow", function (s) {
          s ? i(s) : n([e, ~~t]);
        });
      });
    }

    function l(e) {
      var t = this;
      return e = u.channel(e), this._sendCommand(this._getPromiseDelay(), e, "/slowoff", function (s, n) {
        t.once("_promiseSlowoff", function (t) {
          t ? n(t) : s([e]);
        });
      });
    }

    var u = e("./utils");
    t.exports = {
      action: function action(e, t) {
        return e = u.channel(e), t = "ACTION " + t + "", this._sendMessage(this._getPromiseDelay(), e, t, function (s, n) {
          s([e, t]);
        });
      },
      ban: function ban(e, t, s) {
        var n = this;
        return e = u.channel(e), t = u.username(t), s = u.get(s, ""), this._sendCommand(this._getPromiseDelay(), e, "/ban " + t + " " + s, function (i, o) {
          n.once("_promiseBan", function (n) {
            n ? o(n) : i([e, t, s]);
          });
        });
      },
      clear: function clear(e) {
        var t = this;
        return e = u.channel(e), this._sendCommand(this._getPromiseDelay(), e, "/clear", function (s, n) {
          t.once("_promiseClear", function (t) {
            t ? n(t) : s([e]);
          });
        });
      },
      color: function color(e, t) {
        var s = this;
        return t = u.get(t, e), this._sendCommand(this._getPromiseDelay(), "#tmijs", "/color " + t, function (e, n) {
          s.once("_promiseColor", function (s) {
            s ? n(s) : e([t]);
          });
        });
      },
      commercial: function commercial(e, t) {
        var s = this;
        return e = u.channel(e), t = u.get(t, 30), this._sendCommand(this._getPromiseDelay(), e, "/commercial " + t, function (n, i) {
          s.once("_promiseCommercial", function (s) {
            s ? i(s) : n([e, ~~t]);
          });
        });
      },
      deletemessage: function deletemessage(e, t) {
        var s = this;
        return e = u.channel(e), this._sendCommand(this._getPromiseDelay(), e, "/delete " + t, function (t, n) {
          s.once("_promiseDeletemessage", function (s) {
            s ? n(s) : t([e]);
          });
        });
      },
      emoteonly: function emoteonly(e) {
        var t = this;
        return e = u.channel(e), this._sendCommand(this._getPromiseDelay(), e, "/emoteonly", function (s, n) {
          t.once("_promiseEmoteonly", function (t) {
            t ? n(t) : s([e]);
          });
        });
      },
      emoteonlyoff: function emoteonlyoff(e) {
        var t = this;
        return e = u.channel(e), this._sendCommand(this._getPromiseDelay(), e, "/emoteonlyoff", function (s, n) {
          t.once("_promiseEmoteonlyoff", function (t) {
            t ? n(t) : s([e]);
          });
        });
      },
      followersonly: n,
      followersmode: n,
      followersonlyoff: i,
      followersmodeoff: i,
      host: function host(e, t) {
        var s = this;
        return e = u.channel(e), t = u.username(t), this._sendCommand(2e3, e, "/host " + t, function (n, i) {
          s.once("_promiseHost", function (s, o) {
            s ? i(s) : n([e, t, ~~o]);
          });
        });
      },
      join: function join(e) {
        var t = this;
        return e = u.channel(e), this._sendCommand(null, null, "JOIN " + e, function (s, n) {
          var i = "_promiseJoin",
              o = !1,
              r = function c(r, a) {
            e === u.channel(a) && (t.removeListener(i, c), o = !0, r ? n(r) : s([e]));
          };

          t.on(i, r);

          var a = t._getPromiseDelay();

          u.promiseDelay(a).then(function () {
            o || t.emit(i, "No response from Twitch.", e);
          });
        });
      },
      mod: function mod(e, t) {
        var s = this;
        return e = u.channel(e), t = u.username(t), this._sendCommand(this._getPromiseDelay(), e, "/mod " + t, function (n, i) {
          s.once("_promiseMod", function (s) {
            s ? i(s) : n([e, t]);
          });
        });
      },
      mods: function mods(e) {
        var t = this;
        return e = u.channel(e), this._sendCommand(this._getPromiseDelay(), e, "/mods", function (s, n) {
          t.once("_promiseMods", function (i, o) {
            i ? n(i) : (o.forEach(function (s) {
              t.moderators[e] || (t.moderators[e] = []), t.moderators[e].includes(s) || t.moderators[e].push(s);
            }), s(o));
          });
        });
      },
      part: o,
      leave: o,
      ping: function ping() {
        var e = this;
        return this._sendCommand(this._getPromiseDelay(), null, "PING", function (t, s) {
          e.latency = new Date(), e.pingTimeout = setTimeout(function () {
            null !== e.ws && (e.wasCloseCalled = !1, e.log.error("Ping timeout."), e.ws.close(), clearInterval(e.pingLoop), clearTimeout(e.pingTimeout));
          }, u.get(e.opts.connection.timeout, 9999)), e.once("_promisePing", function (e) {
            t([parseFloat(e)]);
          });
        });
      },
      r9kbeta: r,
      r9kmode: r,
      r9kbetaoff: a,
      r9kmodeoff: a,
      raw: function raw(e) {
        return this._sendCommand(this._getPromiseDelay(), null, e, function (t, s) {
          t([e]);
        });
      },
      say: function say(e, t) {
        return e = u.channel(e), t.startsWith(".") && !t.startsWith("..") || t.startsWith("/") || t.startsWith("\\") ? "me " === t.substr(1, 3) ? this.action(e, t.substr(4)) : this._sendCommand(this._getPromiseDelay(), e, t, function (s, n) {
          s([e, t]);
        }) : this._sendMessage(this._getPromiseDelay(), e, t, function (s, n) {
          s([e, t]);
        });
      },
      slow: c,
      slowmode: c,
      slowoff: l,
      slowmodeoff: l,
      subscribers: function subscribers(e) {
        var t = this;
        return e = u.channel(e), this._sendCommand(this._getPromiseDelay(), e, "/subscribers", function (s, n) {
          t.once("_promiseSubscribers", function (t) {
            t ? n(t) : s([e]);
          });
        });
      },
      subscribersoff: function subscribersoff(e) {
        var t = this;
        return e = u.channel(e), this._sendCommand(this._getPromiseDelay(), e, "/subscribersoff", function (s, n) {
          t.once("_promiseSubscribersoff", function (t) {
            t ? n(t) : s([e]);
          });
        });
      },
      timeout: function timeout(e, t, s, n) {
        var i = this;
        return e = u.channel(e), t = u.username(t), u.isNull(s) || u.isInteger(s) || (n = s, s = 300), s = u.get(s, 300), n = u.get(n, ""), this._sendCommand(this._getPromiseDelay(), e, "/timeout " + t + " " + s + " " + n, function (o, r) {
          i.once("_promiseTimeout", function (i) {
            i ? r(i) : o([e, t, ~~s, n]);
          });
        });
      },
      unban: function unban(e, t) {
        var s = this;
        return e = u.channel(e), t = u.username(t), this._sendCommand(this._getPromiseDelay(), e, "/unban " + t, function (n, i) {
          s.once("_promiseUnban", function (s) {
            s ? i(s) : n([e, t]);
          });
        });
      },
      unhost: function unhost(e) {
        var t = this;
        return e = u.channel(e), this._sendCommand(2e3, e, "/unhost", function (s, n) {
          t.once("_promiseUnhost", function (t) {
            t ? n(t) : s([e]);
          });
        });
      },
      unmod: function unmod(e, t) {
        var s = this;
        return e = u.channel(e), t = u.username(t), this._sendCommand(this._getPromiseDelay(), e, "/unmod " + t, function (n, i) {
          s.once("_promiseUnmod", function (s) {
            s ? i(s) : n([e, t]);
          });
        });
      },
      unvip: function unvip(e, t) {
        var s = this;
        return e = u.channel(e), t = u.username(t), this._sendCommand(this._getPromiseDelay(), e, "/unvip " + t, function (n, i) {
          s.once("_promiseUnvip", function (s) {
            s ? i(s) : n([e, t]);
          });
        });
      },
      vip: function vip(e, t) {
        var s = this;
        return e = u.channel(e), t = u.username(t), this._sendCommand(this._getPromiseDelay(), e, "/vip " + t, function (n, i) {
          s.once("_promiseVip", function (s) {
            s ? i(s) : n([e, t]);
          });
        });
      },
      vips: function vips(e) {
        var t = this;
        return e = u.channel(e), this._sendCommand(this._getPromiseDelay(), e, "/vips", function (e, s) {
          t.once("_promiseVips", function (t, n) {
            t ? s(t) : e(n);
          });
        });
      },
      whisper: function whisper(e, t) {
        var s = this;
        return e = u.username(e), e === this.getUsername() ? Promise.reject("Cannot send a whisper to the same account.") : this._sendCommand(this._getPromiseDelay(), "#tmijs", "/w " + e + " " + t, function (n, i) {
          var o = u.channel(e),
              r = u.merge({
            "message-type": "whisper",
            "message-id": null,
            "thread-id": null,
            username: s.getUsername()
          }, s.globaluserstate);
          s.emits(["whisper", "message"], [[o, r, t, !0], [o, r, t, !0]]), n([e, t]);
        });
      }
    };
  }, {
    "./utils": 9
  }],
  5: [function (e, t, s) {
    "use strict";

    function n() {
      this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
    }

    function i(e) {
      return "function" == typeof e;
    }

    function o(e) {
      return "number" == typeof e;
    }

    function r(e) {
      return "object" === ("undefined" == typeof e ? "undefined" : c(e)) && null !== e;
    }

    function a(e) {
      return void 0 === e;
    }

    var c = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    };
    String.prototype.startsWith || (String.prototype.startsWith = function (e, t) {
      return t = t || 0, this.indexOf(e, t) === t;
    }), t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0, n.defaultMaxListeners = 10, n.prototype.setMaxListeners = function (e) {
      if (!o(e) || 0 > e || isNaN(e)) throw TypeError("n must be a positive number");
      return this._maxListeners = e, this;
    }, n.prototype.emits = function (e, t) {
      for (var s = 0; s < e.length; s++) {
        var n = s < t.length ? t[s] : t[t.length - 1];
        this.emit.apply(this, [e[s]].concat(n));
      }
    }, n.prototype.emit = function (e) {
      var t, s, n, o, c, l;

      if (this._events || (this._events = {}), "error" === e && (!this._events.error || r(this._events.error) && !this._events.error.length)) {
        if (t = arguments[1], t instanceof Error) throw t;
        throw TypeError('Uncaught, unspecified "error" event.');
      }

      if (s = this._events[e], a(s)) return !1;
      if (i(s)) switch (arguments.length) {
        case 1:
          s.call(this);
          break;

        case 2:
          s.call(this, arguments[1]);
          break;

        case 3:
          s.call(this, arguments[1], arguments[2]);
          break;

        default:
          o = Array.prototype.slice.call(arguments, 1), s.apply(this, o);
      } else if (r(s)) for (o = Array.prototype.slice.call(arguments, 1), l = s.slice(), n = l.length, c = 0; n > c; c++) {
        l[c].apply(this, o);
      }
      return !0;
    }, n.prototype.addListener = function (e, t) {
      var s;
      if (!i(t)) throw TypeError("listener must be a function");
      return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, i(t.listener) ? t.listener : t), this._events[e] ? r(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, r(this._events[e]) && !this._events[e].warned && (s = a(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners, s && s > 0 && this._events[e].length > s && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())), this;
    }, n.prototype.on = n.prototype.addListener, n.prototype.once = function (e, t) {
      function s() {
        "_" !== e.charAt(0) || isNaN(e.substr(e.length - 1)) || (e = e.substring(0, e.length - 1)), this.removeListener(e, s), n || (n = !0, t.apply(this, arguments));
      }

      if (!i(t)) throw TypeError("listener must be a function");
      var n = !1;

      if (this._events.hasOwnProperty(e) && "_" === e.charAt(0)) {
        var o = 1,
            r = e;

        for (var a in this._events) {
          this._events.hasOwnProperty(a) && a.startsWith(r) && o++;
        }

        e += o;
      }

      return s.listener = t, this.on(e, s), this;
    }, n.prototype.removeListener = function (e, t) {
      var s, n, o, a;
      if (!i(t)) throw TypeError("listener must be a function");
      if (!this._events || !this._events[e]) return this;

      if (s = this._events[e], o = s.length, n = -1, s === t || i(s.listener) && s.listener === t) {
        if (delete this._events[e], this._events.hasOwnProperty(e + "2") && "_" === e.charAt(0)) {
          var c = e;

          for (var l in this._events) {
            this._events.hasOwnProperty(l) && l.startsWith(c) && (isNaN(parseInt(l.substr(l.length - 1))) || (this._events[e + parseInt(l.substr(l.length - 1) - 1)] = this._events[l], delete this._events[l]));
          }

          this._events[e] = this._events[e + "1"], delete this._events[e + "1"];
        }

        this._events.removeListener && this.emit("removeListener", e, t);
      } else if (r(s)) {
        for (a = o; a-- > 0;) {
          if (s[a] === t || s[a].listener && s[a].listener === t) {
            n = a;
            break;
          }
        }

        if (0 > n) return this;
        1 === s.length ? (s.length = 0, delete this._events[e]) : s.splice(n, 1), this._events.removeListener && this.emit("removeListener", e, t);
      }

      return this;
    }, n.prototype.removeAllListeners = function (e) {
      var t, s;
      if (!this._events) return this;
      if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;

      if (0 === arguments.length) {
        for (t in this._events) {
          "removeListener" !== t && this.removeAllListeners(t);
        }

        return this.removeAllListeners("removeListener"), this._events = {}, this;
      }

      if (s = this._events[e], i(s)) this.removeListener(e, s);else if (s) for (; s.length;) {
        this.removeListener(e, s[s.length - 1]);
      }
      return delete this._events[e], this;
    }, n.prototype.listeners = function (e) {
      var t;
      return t = this._events && this._events[e] ? i(this._events[e]) ? [this._events[e]] : this._events[e].slice() : [];
    }, n.prototype.listenerCount = function (e) {
      if (this._events) {
        var t = this._events[e];
        if (i(t)) return 1;
        if (t) return t.length;
      }

      return 0;
    }, n.listenerCount = function (e, t) {
      return e.listenerCount(t);
    };
  }, {}],
  6: [function (e, t, s) {
    "use strict";

    function n(e) {
      return function (t) {
        r[e] >= r[o] && console.log("[" + i.formatDate(new Date()) + "] " + e + ": " + t);
      };
    }

    var i = e("./utils"),
        o = "info",
        r = {
      trace: 0,
      debug: 1,
      info: 2,
      warn: 3,
      error: 4,
      fatal: 5
    };
    t.exports = {
      setLevel: function setLevel(e) {
        o = e;
      },
      trace: n("trace"),
      debug: n("debug"),
      info: n("info"),
      warn: n("warn"),
      error: n("error"),
      fatal: n("fatal")
    };
  }, {
    "./utils": 9
  }],
  7: [function (e, t, s) {
    "use strict";

    function n(e, t) {
      var s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ",",
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "/",
          o = arguments[4],
          r = e[t];
      if (void 0 === r) return e;
      var a = i.isString(r);
      if (e[t + "-raw"] = a ? r : null, r === !0) return e[t] = null, e;
      if (e[t] = {}, a) for (var c = r.split(s), l = 0; l < c.length; l++) {
        var u = c[l].split(n),
            h = u[1];
        void 0 !== o && h && (h = h.split(o)), e[t][u[0]] = h || null;
      }
      return e;
    }

    var i = e("./utils"),
        o = /\S+/g;
    t.exports = {
      badges: function badges(e) {
        return n(e, "badges");
      },
      badgeInfo: function badgeInfo(e) {
        return n(e, "badge-info");
      },
      emotes: function emotes(e) {
        return n(e, "emotes", "/", ":", ",");
      },
      emoteRegex: function emoteRegex(e, t, s, n) {
        o.lastIndex = 0;

        for (var r, a = new RegExp("(\\b|^|s)" + i.unescapeHtml(t) + "(\\b|$|s)"); null !== (r = o.exec(e));) {
          a.test(r[0]) && (n[s] = n[s] || [], n[s].push([r.index, o.lastIndex - 1]));
        }
      },
      emoteString: function emoteString(e, t, s, n) {
        o.lastIndex = 0;

        for (var r; null !== (r = o.exec(e));) {
          r[0] === i.unescapeHtml(t) && (n[s] = n[s] || [], n[s].push([r.index, o.lastIndex - 1]));
        }
      },
      transformEmotes: function transformEmotes(e) {
        var t = "";
        return Object.keys(e).forEach(function (s) {
          t = t + s + ":", e[s].forEach(function (e) {
            t = t + e.join("-") + ",";
          }), t = t.slice(0, -1) + "/";
        }), t.slice(0, -1);
      },
      msg: function msg(e) {
        var t = {
          raw: e,
          tags: {},
          prefix: null,
          command: null,
          params: []
        },
            s = 0,
            n = 0;

        if (64 === e.charCodeAt(0)) {
          var n = e.indexOf(" ");
          if (-1 === n) return null;

          for (var i = e.slice(1, n).split(";"), o = 0; o < i.length; o++) {
            var r = i[o],
                a = r.split("=");
            t.tags[a[0]] = r.substring(r.indexOf("=") + 1) || !0;
          }

          s = n + 1;
        }

        for (; 32 === e.charCodeAt(s);) {
          s++;
        }

        if (58 === e.charCodeAt(s)) {
          if (n = e.indexOf(" ", s), -1 === n) return null;

          for (t.prefix = e.slice(s + 1, n), s = n + 1; 32 === e.charCodeAt(s);) {
            s++;
          }
        }

        if (n = e.indexOf(" ", s), -1 === n) return e.length > s ? (t.command = e.slice(s), t) : null;

        for (t.command = e.slice(s, n), s = n + 1; 32 === e.charCodeAt(s);) {
          s++;
        }

        for (; s < e.length;) {
          if (n = e.indexOf(" ", s), 58 === e.charCodeAt(s)) {
            t.params.push(e.slice(s + 1));
            break;
          }

          if (-1 === n) {
            if (-1 === n) {
              t.params.push(e.slice(s));
              break;
            }
          } else for (t.params.push(e.slice(s, n)), s = n + 1; 32 === e.charCodeAt(s);) {
            s++;
          }
        }

        return t;
      }
    };
  }, {
    "./utils": 9
  }],
  8: [function (e, t, s) {
    "use strict";

    function n(e) {
      this.queue = [], this.index = 0, this.defaultDelay = e || 3e3;
    }

    n.prototype.add = function (e, t) {
      this.queue.push({
        fn: e,
        delay: t
      });
    }, n.prototype.run = function (e) {
      (e || 0 === e) && (this.index = e), this.next();
    }, n.prototype.next = function i() {
      var e = this,
          t = this.index++,
          s = this.queue[t],
          i = this.queue[this.index];
      s && (s.fn(), i && setTimeout(function () {
        e.next();
      }, i.delay || this.defaultDelay));
    }, n.prototype.reset = function () {
      this.index = 0;
    }, n.prototype.clear = function () {
      this.index = 0, this.queue = [];
    }, s.queue = n;
  }, {}],
  9: [function (e, t, s) {
    (function (e) {
      "use strict";

      var s = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          n = /^\u0001ACTION ([^\u0001]+)\u0001$/,
          i = /^(justinfan)(\d+$)/,
          o = /\\([sn:r\\])/g,
          r = {
        s: " ",
        n: "",
        ":": ";",
        r: ""
      },
          a = t.exports = {
        get: function get(e, t) {
          return "undefined" == typeof e ? t : e;
        },
        isBoolean: function isBoolean(e) {
          return "boolean" == typeof e;
        },
        isFinite: function (e) {
          function t(t) {
            return e.apply(this, arguments);
          }

          return t.toString = function () {
            return e.toString();
          }, t;
        }(function (e) {
          return isFinite(e) && !isNaN(parseFloat(e));
        }),
        isInteger: function isInteger(e) {
          return !isNaN(a.toNumber(e, 0));
        },
        isJustinfan: function isJustinfan(e) {
          return i.test(e);
        },
        isNull: function isNull(e) {
          return null === e;
        },
        isRegex: function isRegex(e) {
          return /[\|\\\^\$\*\+\?\:\#]/.test(e);
        },
        isString: function isString(e) {
          return "string" == typeof e;
        },
        isURL: function isURL(e) {
          return RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$", "i").test(e);
        },
        justinfan: function justinfan() {
          return "justinfan" + Math.floor(8e4 * Math.random() + 1e3);
        },
        password: function password(e) {
          return ["SCHMOOPIIE", "", null].includes(e) ? "SCHMOOPIIE" : "oauth:" + e.toLowerCase().replace("oauth:", "");
        },
        promiseDelay: function promiseDelay(e) {
          return new Promise(function (t) {
            setTimeout(t, e);
          });
        },
        replaceAll: function replaceAll(e, t) {
          if (null === e || "undefined" == typeof e) return null;

          for (var s in t) {
            e = e.replace(new RegExp(s, "g"), t[s]);
          }

          return e;
        },
        unescapeHtml: function unescapeHtml(e) {
          return e.replace(/\\&amp\\;/g, "&").replace(/\\&lt\\;/g, "<").replace(/\\&gt\\;/g, ">").replace(/\\&quot\\;/g, '"').replace(/\\&#039\\;/g, "'");
        },
        unescapeIRC: function unescapeIRC(e) {
          return e && e.includes("\\") ? e.replace(o, function (e, t) {
            return t in r ? r[t] : t;
          }) : e;
        },
        actionMessage: function actionMessage(e) {
          return e.match(n);
        },
        addWord: function addWord(e, t) {
          return e.length ? e + " " + t : e + t;
        },
        channel: function c(e) {
          var c = (e ? e : "").toLowerCase();
          return "#" === c[0] ? c : "#" + c;
        },
        extractNumber: function extractNumber(e) {
          for (var t = e.split(" "), s = 0; s < t.length; s++) {
            if (a.isInteger(t[s])) return ~~t[s];
          }

          return 0;
        },
        formatDate: function formatDate(e) {
          var t = e.getHours(),
              s = e.getMinutes();
          return t = (10 > t ? "0" : "") + t, s = (10 > s ? "0" : "") + s, t + ":" + s;
        },
        inherits: function inherits(e, t) {
          e.super_ = t;

          var s = function s() {};

          s.prototype = t.prototype, e.prototype = new s(), e.prototype.constructor = e;
        },
        isNode: function isNode() {
          try {
            return t.exports = "object" === ("undefined" == typeof e ? "undefined" : s(e)) && "[object process]" === Object.prototype.toString.call(e);
          } catch (n) {
            return !1;
          }
        },
        isExtension: function isExtension() {
          try {
            return !!(window.chrome && chrome.runtime && chrome.runtime.id);
          } catch (e) {
            return !1;
          }
        },
        merge: Object.assign,
        splitLine: function splitLine(e, t) {
          var s = e.substring(0, t).lastIndexOf(" ");
          return -1 === s && (s = t - 1), [e.substring(0, s), e.substring(s + 1)];
        },
        toNumber: function toNumber(e, t) {
          if (null === e) return 0;
          var s = Math.pow(10, a.isFinite(t) ? t : 0);
          return Math.round(e * s) / s;
        },
        union: function union(e, t) {
          for (var s = {}, n = [], i = 0; i < e.length; i++) {
            var o = e[i];
            s[o] || (s[o] = !0, n.push(o));
          }

          for (var i = 0; i < t.length; i++) {
            var o = t[i];
            s[o] || (s[o] = !0, n.push(o));
          }

          return n;
        },
        username: function l(e) {
          var l = (e ? e : "").toLowerCase();
          return "#" === l[0] ? l.slice(1) : l;
        }
      };
    }).call(this, e("_process"));
  }, {
    _process: 11
  }],
  10: [function (e, t, s) {
    "use strict";
  }, {}],
  11: [function (e, t, s) {
    function n() {
      throw new Error("setTimeout has not been defined");
    }

    function i() {
      throw new Error("clearTimeout has not been defined");
    }

    function o(e) {
      if (h === setTimeout) return setTimeout(e, 0);
      if ((h === n || !h) && setTimeout) return h = setTimeout, setTimeout(e, 0);

      try {
        return h(e, 0);
      } catch (t) {
        try {
          return h.call(null, e, 0);
        } catch (t) {
          return h.call(this, e, 0);
        }
      }
    }

    function r(e) {
      if (m === clearTimeout) return clearTimeout(e);
      if ((m === i || !m) && clearTimeout) return m = clearTimeout, clearTimeout(e);

      try {
        return m(e);
      } catch (t) {
        try {
          return m.call(null, e);
        } catch (t) {
          return m.call(this, e);
        }
      }
    }

    function a() {
      g && p && (g = !1, p.length ? d = p.concat(d) : _ = -1, d.length && c());
    }

    function c() {
      if (!g) {
        var e = o(a);
        g = !0;

        for (var t = d.length; t;) {
          for (p = d, d = []; ++_ < t;) {
            p && p[_].run();
          }

          _ = -1, t = d.length;
        }

        p = null, g = !1, r(e);
      }
    }

    function l(e, t) {
      this.fun = e, this.array = t;
    }

    function u() {}

    var h,
        m,
        f = t.exports = {};
    !function () {
      try {
        h = "function" == typeof setTimeout ? setTimeout : n;
      } catch (e) {
        h = n;
      }

      try {
        m = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        m = i;
      }
    }();

    var p,
        d = [],
        g = !1,
        _ = -1;

    f.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var s = 1; s < arguments.length; s++) {
        t[s - 1] = arguments[s];
      }
      d.push(new l(e, t)), 1 !== d.length || g || o(c);
    }, l.prototype.run = function () {
      this.fun.apply(null, this.array);
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function (e) {
      return [];
    }, f.binding = function (e) {
      throw new Error("process.binding is not supported");
    }, f.cwd = function () {
      return "/";
    }, f.chdir = function (e) {
      throw new Error("process.chdir is not supported");
    }, f.umask = function () {
      return 0;
    };
  }, {}]
}, {}, [1]);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// CONCATENATED MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ var memoize_one_esm = (memoizeOne);

// EXTERNAL MODULE: ./blips/Component.css
var Component = __webpack_require__(1);

// EXTERNAL MODULE: ./blips/tmi.min.js
var tmi_min = __webpack_require__(6);

// CONCATENATED MODULE: ./blips/Component.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return blips_Component_default; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var blips_Component_default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "_lastProps", {});

    _defineProperty(_assertThisInitialized(_this), "_tmi", void 0);

    _defineProperty(_assertThisInitialized(_this), "_chatBlipPointer", 0);

    _defineProperty(_assertThisInitialized(_this), "processMessage", function (channel, user, message, self) {
      if (_this.props.debugMode) {
        console.log({
          channel: channel,
          user: user,
          message: message
        });
      }

      if (user.color && user.color.length == 7) {
        // convert the user's color to RGB
        var r = parseInt("0x" + user.color.substr(1, 2));
        var g = parseInt("0x" + user.color.substr(3, 2));
        var b = parseInt("0x" + user.color.substr(5, 2)); // grab a blip, round-robin style

        var blipIndex = _this._chatBlipPointer++ % _this.props.blipCount;
        var blipRef = _this.refs["blip" + blipIndex]; // pull it's opacity

        var a = _this.extractOpacity(blipRef.style.fill); // set the new color


        blipRef.style.fill = "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "extractOpacity", function (color) {
      var m = color.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+\.?\d*)\s*\)$/i);

      if (!m) {
        return 1;
      }

      return parseFloat(m[4]);
    });

    _defineProperty(_assertThisInitialized(_this), "memoizeBlips", memoize_one_esm(function (blipCount, blipSpeed, blipSpeedVariance, blipColor, blipHeight) {
      var blips = [];

      for (var i = 0; i < blipCount; i++) {
        var animationDuration = 101 - blipSpeed + Math.random() * blipSpeedVariance;
        blips.push({
          animationDuration: animationDuration + "s",
          animationDelay: -(Math.random() * animationDuration) + "s",
          top: Math.random() * 95 + "%",
          width: Math.random() * 10 + 5 + "%",
          height: blipHeight + "%",
          color: blipColor,
          refName: "blip" + i
        });
      }

      return blips;
    }));

    _this.state = {
      channel: null,
      blips: [],
      userBlips: []
    }; // connect to tmi

    _this.updateTmiState();

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.updateTmiState();
    }
  }, {
    key: "updateTmiState",
    value: function updateTmiState() {
      if (!this.props.channel) {
        if (this._tmi) {
          this._tmi.disconnect();

          this._tmi = null;
        }
      } else {
        if (this.props.channel != this._lastProps.channel || this.props.debugMode != this._lastProps.debugMode) {
          if (this._tmi) {
            this._tmi.disconnect();

            this._tmi = null;
          }

          var _tmi = new tmi.client({
            connection: {
              secure: window.location.protocol == "https:"
            },
            options: {
              debug: this.props.debugMode
            },
            channels: [this.props.channel]
          });

          _tmi.addListener('message', this.processMessage);

          _tmi.connect();

          this._tmi = _tmi;
        }
      }

      this._lastProps = this.props;
    }
  }, {
    key: "propToInt",
    value: function propToInt(propVal, defaultValue) {
      if (!propVal) {
        return defaultValue;
      }

      var parsedVal = parseInt(propVal);

      if (isNaN(parsedVal)) {
        return defaultValue;
      }

      return parsedVal;
    }
  }, {
    key: "render",
    value: function render() {
      var blipCount = this.propToInt(this.props.blipCount);
      var blipHeight = this.propToInt(this.props.blipHeight);
      var blipSpeed = this.propToInt(this.props.blipSpeed);
      var blipSpeedVariance = this.propToInt(this.props.blipSpeedVariance);
      var blips = this.memoizeBlips(blipCount, blipSpeed, blipSpeedVariance, this.props.blipColor, blipHeight);
      var blipElements = blips.map(function (blip) {
        return external_React_default.a.createElement("rect", {
          className: "blip",
          x: 0,
          y: blip.top,
          width: blip.width,
          height: blip.height,
          ref: blip.refName,
          style: {
            fill: blip.color,
            animationDuration: blip.animationDuration,
            animationDelay: blip.animationDelay
          },
          key: blip.refName
        });
      });
      return external_React_default.a.createElement("svg", {
        version: "1.1",
        viewBox: "0 0 1920 1080",
        xmlns: "http://www.w3.org/2000/svg",
        className: "blipContainer"
      }, external_React_default.a.createElement("defs", null, external_React_default.a.createElement("filter", {
        id: "blur1"
      }, external_React_default.a.createElement("feGaussianBlur", {
        "in": "SourceGraphic",
        stdDeviation: this.props.blur + ",0"
      }))), external_React_default.a.createElement("g", {
        filter: "url(#blur1)"
      }, blipElements));
    }
  }]);

  return _default;
}(external_React_default.a.Component);

_defineProperty(blips_Component_default, "manifest", {
  "name": "Blips Background",
  "author": "MikeSci",
  "description": "An animated background that gets it's color information from Twitch chat.",
  "width": 1920,
  "height": 1080,
  "parameters": [{
    "name": "blipColor",
    "displayName": "Blip Color",
    "type": "color",
    "defaultValue": "rgba(255,255,255,0.5)"
  }, {
    "name": "blur",
    "displayName": "Blur",
    "type": "slider",
    "defaultValue": 6,
    min: 1,
    max: 20
  }, {
    "name": "blipCount",
    "displayName": "Blip Count",
    "type": "slider",
    "defaultValue": 60,
    min: 1,
    max: 200
  }, {
    "name": "blipHeight",
    "displayName": "Blip Height",
    "type": "slider",
    "defaultValue": 4,
    min: 1,
    max: 10
  }, {
    "name": "blipSpeed",
    "displayName": "Blip Speed",
    "type": "slider",
    "defaultValue": 35,
    min: 1,
    max: 100
  }, {
    "name": "blipSpeedVariance",
    "displayName": "Speed Variance",
    "type": "slider",
    "defaultValue": 10,
    min: 1,
    max: 20
  }, {
    "group": "Twitch Integration",
    "items": [{
      "name": "channel",
      "displayName": "Channel",
      "type": "text"
    }, {
      "name": "debugMode",
      "displayName": "Debug Mode",
      "type": "checkbox",
      "defaultValue": false
    }]
  }]
});



/***/ })
/******/ ]);