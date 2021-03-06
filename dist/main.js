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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\r\n    font-family: 'Roboto Condensed';\r\n    margin: 0;\r\n    background: #e1f6ff;\r\n}\r\n.dg.ac{\r\n    transition: 0s;\r\n    transition-property: right;\r\n    transition-duration: .4s;\r\n    top: 70px !important;\r\n}\r\n.dg .main {\r\n    margin-right: 0;\r\n }\r\n.container {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n#canvas-parent {\r\n    display: inline-block;\r\n}\r\n#chart{\r\n    border: 1px solid #d9d9d9;\r\n    border-radius: 7px;\r\n    background-color: #fff;\r\n}\r\n/*~~~~~~~~~~ BAR CHARTART ~~~~~~~~~~*/\r\n.tooltip-element-bar {\r\n    position: absolute;\r\n    z-index: 22;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    background: #2c2c2c;\r\n    padding: 3px;\r\n    height: fit-content;\r\n    color: #fff;\r\n    width: 120px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 6px;\r\n    font-family: sans-serif;\r\n    font-size: 13px;\r\n    flex-direction: column;\r\n}\r\n.show_tooltip{\r\n    transition: cubic-bezier(.075,.82,.165,1) .4s;\r\n    visibility: visible;\r\n}\r\n.tooltip-element-bar p {\r\n    margin: 0;\r\n}\r\n.tooltip-element-bar:after {\r\n    content: '';\r\n    position: absolute;\r\n    margin: auto;\r\n    width: 0;\r\n    transform: rotate(90deg);\r\n    height: 0;\r\n    border-left: 6px solid transparent;\r\n    border-right: 6px solid transparent;\r\n    border-top: 6px solid #2c2c2c;\r\n    clear: both;\r\n}\r\n#to-left:after {\r\n    left: -8px;\r\n    top: 0;\r\n    bottom: 0;\r\n}\r\n#to-left-bottom:after {\r\n    left: -8px;\r\n    bottom: 5px;\r\n}\r\n#to-right-bottom:after {\r\n    right: -8px;\r\n    bottom: 5px;\r\n    transform: rotate(-90deg);\r\n}\r\n#to-right:after {\r\n    right: -8px;\r\n    bottom: 0px;\r\n    top: 0px;\r\n    transform: rotate(-90deg);\r\n}\r\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
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

/***/ "./node_modules/dat.gui/build/dat.gui.module.js":
/*!******************************************************!*\
  !*** ./node_modules/dat.gui/build/dat.gui.module.js ***!
  \******************************************************/
/*! exports provided: color, controllers, dom, gui, GUI, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "controllers", function() { return controllers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gui", function() { return gui; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUI", function() { return GUI$1; });
/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

function colorToString (color, forceCSSHex) {
  var colorFormat = color.__state.conversionName.toString();
  var r = Math.round(color.r);
  var g = Math.round(color.g);
  var b = Math.round(color.b);
  var a = color.a;
  var h = Math.round(color.h);
  var s = color.s.toFixed(1);
  var v = color.v.toFixed(1);
  if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
    var str = color.hex.toString(16);
    while (str.length < 6) {
      str = '0' + str;
    }
    return '#' + str;
  } else if (colorFormat === 'CSS_RGB') {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  } else if (colorFormat === 'CSS_RGBA') {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  } else if (colorFormat === 'HEX') {
    return '0x' + color.hex.toString(16);
  } else if (colorFormat === 'RGB_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ']';
  } else if (colorFormat === 'RGBA_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ',' + a + ']';
  } else if (colorFormat === 'RGB_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + '}';
  } else if (colorFormat === 'RGBA_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
  } else if (colorFormat === 'HSV_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + '}';
  } else if (colorFormat === 'HSVA_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
  }
  return 'unknown format';
}

var ARR_EACH = Array.prototype.forEach;
var ARR_SLICE = Array.prototype.slice;
var Common = {
  BREAK: {},
  extend: function extend(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (!this.isUndefined(obj[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  defaults: function defaults(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (this.isUndefined(target[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  compose: function compose() {
    var toCall = ARR_SLICE.call(arguments);
    return function () {
      var args = ARR_SLICE.call(arguments);
      for (var i = toCall.length - 1; i >= 0; i--) {
        args = [toCall[i].apply(this, args)];
      }
      return args[0];
    };
  },
  each: function each(obj, itr, scope) {
    if (!obj) {
      return;
    }
    if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
      obj.forEach(itr, scope);
    } else if (obj.length === obj.length + 0) {
      var key = void 0;
      var l = void 0;
      for (key = 0, l = obj.length; key < l; key++) {
        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
          return;
        }
      }
    } else {
      for (var _key in obj) {
        if (itr.call(scope, obj[_key], _key) === this.BREAK) {
          return;
        }
      }
    }
  },
  defer: function defer(fnc) {
    setTimeout(fnc, 0);
  },
  debounce: function debounce(func, threshold, callImmediately) {
    var timeout = void 0;
    return function () {
      var obj = this;
      var args = arguments;
      function delayed() {
        timeout = null;
        if (!callImmediately) func.apply(obj, args);
      }
      var callNow = callImmediately || !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(delayed, threshold);
      if (callNow) {
        func.apply(obj, args);
      }
    };
  },
  toArray: function toArray(obj) {
    if (obj.toArray) return obj.toArray();
    return ARR_SLICE.call(obj);
  },
  isUndefined: function isUndefined(obj) {
    return obj === undefined;
  },
  isNull: function isNull(obj) {
    return obj === null;
  },
  isNaN: function (_isNaN) {
    function isNaN(_x) {
      return _isNaN.apply(this, arguments);
    }
    isNaN.toString = function () {
      return _isNaN.toString();
    };
    return isNaN;
  }(function (obj) {
    return isNaN(obj);
  }),
  isArray: Array.isArray || function (obj) {
    return obj.constructor === Array;
  },
  isObject: function isObject(obj) {
    return obj === Object(obj);
  },
  isNumber: function isNumber(obj) {
    return obj === obj + 0;
  },
  isString: function isString(obj) {
    return obj === obj + '';
  },
  isBoolean: function isBoolean(obj) {
    return obj === false || obj === true;
  },
  isFunction: function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
  }
};

var INTERPRETATIONS = [
{
  litmus: Common.isString,
  conversions: {
    THREE_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
        };
      },
      write: colorToString
    },
    SIX_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9]{6})$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString(), 0)
        };
      },
      write: colorToString
    },
    CSS_RGB: {
      read: function read(original) {
        var test = original.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3])
        };
      },
      write: colorToString
    },
    CSS_RGBA: {
      read: function read(original) {
        var test = original.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3]),
          a: parseFloat(test[4])
        };
      },
      write: colorToString
    }
  }
},
{
  litmus: Common.isNumber,
  conversions: {
    HEX: {
      read: function read(original) {
        return {
          space: 'HEX',
          hex: original,
          conversionName: 'HEX'
        };
      },
      write: function write(color) {
        return color.hex;
      }
    }
  }
},
{
  litmus: Common.isArray,
  conversions: {
    RGB_ARRAY: {
      read: function read(original) {
        if (original.length !== 3) {
          return false;
        }
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b];
      }
    },
    RGBA_ARRAY: {
      read: function read(original) {
        if (original.length !== 4) return false;
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2],
          a: original[3]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b, color.a];
      }
    }
  }
},
{
  litmus: Common.isObject,
  conversions: {
    RGBA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b) && Common.isNumber(original.a)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b,
          a: color.a
        };
      }
    },
    RGB_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b
        };
      }
    },
    HSVA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v) && Common.isNumber(original.a)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v,
          a: color.a
        };
      }
    },
    HSV_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v
        };
      }
    }
  }
}];
var result = void 0;
var toReturn = void 0;
var interpret = function interpret() {
  toReturn = false;
  var original = arguments.length > 1 ? Common.toArray(arguments) : arguments[0];
  Common.each(INTERPRETATIONS, function (family) {
    if (family.litmus(original)) {
      Common.each(family.conversions, function (conversion, conversionName) {
        result = conversion.read(original);
        if (toReturn === false && result !== false) {
          toReturn = result;
          result.conversionName = conversionName;
          result.conversion = conversion;
          return Common.BREAK;
        }
      });
      return Common.BREAK;
    }
  });
  return toReturn;
};

var tmpComponent = void 0;
var ColorMath = {
  hsv_to_rgb: function hsv_to_rgb(h, s, v) {
    var hi = Math.floor(h / 60) % 6;
    var f = h / 60 - Math.floor(h / 60);
    var p = v * (1.0 - s);
    var q = v * (1.0 - f * s);
    var t = v * (1.0 - (1.0 - f) * s);
    var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
    return {
      r: c[0] * 255,
      g: c[1] * 255,
      b: c[2] * 255
    };
  },
  rgb_to_hsv: function rgb_to_hsv(r, g, b) {
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h = void 0;
    var s = void 0;
    if (max !== 0) {
      s = delta / max;
    } else {
      return {
        h: NaN,
        s: 0,
        v: 0
      };
    }
    if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else {
      h = 4 + (r - g) / delta;
    }
    h /= 6;
    if (h < 0) {
      h += 1;
    }
    return {
      h: h * 360,
      s: s,
      v: max / 255
    };
  },
  rgb_to_hex: function rgb_to_hex(r, g, b) {
    var hex = this.hex_with_component(0, 2, r);
    hex = this.hex_with_component(hex, 1, g);
    hex = this.hex_with_component(hex, 0, b);
    return hex;
  },
  component_from_hex: function component_from_hex(hex, componentIndex) {
    return hex >> componentIndex * 8 & 0xFF;
  },
  hex_with_component: function hex_with_component(hex, componentIndex, value) {
    return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Color = function () {
  function Color() {
    classCallCheck(this, Color);
    this.__state = interpret.apply(this, arguments);
    if (this.__state === false) {
      throw new Error('Failed to interpret color arguments');
    }
    this.__state.a = this.__state.a || 1;
  }
  createClass(Color, [{
    key: 'toString',
    value: function toString() {
      return colorToString(this);
    }
  }, {
    key: 'toHexString',
    value: function toHexString() {
      return colorToString(this, true);
    }
  }, {
    key: 'toOriginal',
    value: function toOriginal() {
      return this.__state.conversion.write(this);
    }
  }]);
  return Color;
}();
function defineRGBComponent(target, component, componentHexIndex) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'RGB') {
        return this.__state[component];
      }
      Color.recalculateRGB(this, component, componentHexIndex);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'RGB') {
        Color.recalculateRGB(this, component, componentHexIndex);
        this.__state.space = 'RGB';
      }
      this.__state[component] = v;
    }
  });
}
function defineHSVComponent(target, component) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'HSV') {
        return this.__state[component];
      }
      Color.recalculateHSV(this);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'HSV') {
        Color.recalculateHSV(this);
        this.__state.space = 'HSV';
      }
      this.__state[component] = v;
    }
  });
}
Color.recalculateRGB = function (color, component, componentHexIndex) {
  if (color.__state.space === 'HEX') {
    color.__state[component] = ColorMath.component_from_hex(color.__state.hex, componentHexIndex);
  } else if (color.__state.space === 'HSV') {
    Common.extend(color.__state, ColorMath.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
  } else {
    throw new Error('Corrupted color state');
  }
};
Color.recalculateHSV = function (color) {
  var result = ColorMath.rgb_to_hsv(color.r, color.g, color.b);
  Common.extend(color.__state, {
    s: result.s,
    v: result.v
  });
  if (!Common.isNaN(result.h)) {
    color.__state.h = result.h;
  } else if (Common.isUndefined(color.__state.h)) {
    color.__state.h = 0;
  }
};
Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
defineRGBComponent(Color.prototype, 'r', 2);
defineRGBComponent(Color.prototype, 'g', 1);
defineRGBComponent(Color.prototype, 'b', 0);
defineHSVComponent(Color.prototype, 'h');
defineHSVComponent(Color.prototype, 's');
defineHSVComponent(Color.prototype, 'v');
Object.defineProperty(Color.prototype, 'a', {
  get: function get$$1() {
    return this.__state.a;
  },
  set: function set$$1(v) {
    this.__state.a = v;
  }
});
Object.defineProperty(Color.prototype, 'hex', {
  get: function get$$1() {
    if (!this.__state.space !== 'HEX') {
      this.__state.hex = ColorMath.rgb_to_hex(this.r, this.g, this.b);
    }
    return this.__state.hex;
  },
  set: function set$$1(v) {
    this.__state.space = 'HEX';
    this.__state.hex = v;
  }
});

var Controller = function () {
  function Controller(object, property) {
    classCallCheck(this, Controller);
    this.initialValue = object[property];
    this.domElement = document.createElement('div');
    this.object = object;
    this.property = property;
    this.__onChange = undefined;
    this.__onFinishChange = undefined;
  }
  createClass(Controller, [{
    key: 'onChange',
    value: function onChange(fnc) {
      this.__onChange = fnc;
      return this;
    }
  }, {
    key: 'onFinishChange',
    value: function onFinishChange(fnc) {
      this.__onFinishChange = fnc;
      return this;
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      this.object[this.property] = newValue;
      if (this.__onChange) {
        this.__onChange.call(this, newValue);
      }
      this.updateDisplay();
      return this;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.object[this.property];
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      return this;
    }
  }, {
    key: 'isModified',
    value: function isModified() {
      return this.initialValue !== this.getValue();
    }
  }]);
  return Controller;
}();

var EVENT_MAP = {
  HTMLEvents: ['change'],
  MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
  KeyboardEvents: ['keydown']
};
var EVENT_MAP_INV = {};
Common.each(EVENT_MAP, function (v, k) {
  Common.each(v, function (e) {
    EVENT_MAP_INV[e] = k;
  });
});
var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
function cssValueToPixels(val) {
  if (val === '0' || Common.isUndefined(val)) {
    return 0;
  }
  var match = val.match(CSS_VALUE_PIXELS);
  if (!Common.isNull(match)) {
    return parseFloat(match[1]);
  }
  return 0;
}
var dom = {
  makeSelectable: function makeSelectable(elem, selectable) {
    if (elem === undefined || elem.style === undefined) return;
    elem.onselectstart = selectable ? function () {
      return false;
    } : function () {};
    elem.style.MozUserSelect = selectable ? 'auto' : 'none';
    elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
    elem.unselectable = selectable ? 'on' : 'off';
  },
  makeFullscreen: function makeFullscreen(elem, hor, vert) {
    var vertical = vert;
    var horizontal = hor;
    if (Common.isUndefined(horizontal)) {
      horizontal = true;
    }
    if (Common.isUndefined(vertical)) {
      vertical = true;
    }
    elem.style.position = 'absolute';
    if (horizontal) {
      elem.style.left = 0;
      elem.style.right = 0;
    }
    if (vertical) {
      elem.style.top = 0;
      elem.style.bottom = 0;
    }
  },
  fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
    var params = pars || {};
    var className = EVENT_MAP_INV[eventType];
    if (!className) {
      throw new Error('Event type ' + eventType + ' not supported.');
    }
    var evt = document.createEvent(className);
    switch (className) {
      case 'MouseEvents':
        {
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0,
          0,
          clientX,
          clientY,
          false, false, false, false, 0, null);
          break;
        }
      case 'KeyboardEvents':
        {
          var init = evt.initKeyboardEvent || evt.initKeyEvent;
          Common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
          break;
        }
      default:
        {
          evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
          break;
        }
    }
    Common.defaults(evt, aux);
    elem.dispatchEvent(evt);
  },
  bind: function bind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.addEventListener) {
      elem.addEventListener(event, func, bool);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + event, func);
    }
    return dom;
  },
  unbind: function unbind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.removeEventListener) {
      elem.removeEventListener(event, func, bool);
    } else if (elem.detachEvent) {
      elem.detachEvent('on' + event, func);
    }
    return dom;
  },
  addClass: function addClass(elem, className) {
    if (elem.className === undefined) {
      elem.className = className;
    } else if (elem.className !== className) {
      var classes = elem.className.split(/ +/);
      if (classes.indexOf(className) === -1) {
        classes.push(className);
        elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
      }
    }
    return dom;
  },
  removeClass: function removeClass(elem, className) {
    if (className) {
      if (elem.className === className) {
        elem.removeAttribute('class');
      } else {
        var classes = elem.className.split(/ +/);
        var index = classes.indexOf(className);
        if (index !== -1) {
          classes.splice(index, 1);
          elem.className = classes.join(' ');
        }
      }
    } else {
      elem.className = undefined;
    }
    return dom;
  },
  hasClass: function hasClass(elem, className) {
    return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
  },
  getWidth: function getWidth(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
  },
  getHeight: function getHeight(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
  },
  getOffset: function getOffset(el) {
    var elem = el;
    var offset = { left: 0, top: 0 };
    if (elem.offsetParent) {
      do {
        offset.left += elem.offsetLeft;
        offset.top += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
    }
    return offset;
  },
  isActive: function isActive(elem) {
    return elem === document.activeElement && (elem.type || elem.href);
  }
};

var BooleanController = function (_Controller) {
  inherits(BooleanController, _Controller);
  function BooleanController(object, property) {
    classCallCheck(this, BooleanController);
    var _this2 = possibleConstructorReturn(this, (BooleanController.__proto__ || Object.getPrototypeOf(BooleanController)).call(this, object, property));
    var _this = _this2;
    _this2.__prev = _this2.getValue();
    _this2.__checkbox = document.createElement('input');
    _this2.__checkbox.setAttribute('type', 'checkbox');
    function onChange() {
      _this.setValue(!_this.__prev);
    }
    dom.bind(_this2.__checkbox, 'change', onChange, false);
    _this2.domElement.appendChild(_this2.__checkbox);
    _this2.updateDisplay();
    return _this2;
  }
  createClass(BooleanController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      this.__prev = this.getValue();
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (this.getValue() === true) {
        this.__checkbox.setAttribute('checked', 'checked');
        this.__checkbox.checked = true;
        this.__prev = true;
      } else {
        this.__checkbox.checked = false;
        this.__prev = false;
      }
      return get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return BooleanController;
}(Controller);

var OptionController = function (_Controller) {
  inherits(OptionController, _Controller);
  function OptionController(object, property, opts) {
    classCallCheck(this, OptionController);
    var _this2 = possibleConstructorReturn(this, (OptionController.__proto__ || Object.getPrototypeOf(OptionController)).call(this, object, property));
    var options = opts;
    var _this = _this2;
    _this2.__select = document.createElement('select');
    if (Common.isArray(options)) {
      var map = {};
      Common.each(options, function (element) {
        map[element] = element;
      });
      options = map;
    }
    Common.each(options, function (value, key) {
      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);
    });
    _this2.updateDisplay();
    dom.bind(_this2.__select, 'change', function () {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });
    _this2.domElement.appendChild(_this2.__select);
    return _this2;
  }
  createClass(OptionController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (dom.isActive(this.__select)) return this;
      this.__select.value = this.getValue();
      return get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return OptionController;
}(Controller);

var StringController = function (_Controller) {
  inherits(StringController, _Controller);
  function StringController(object, property) {
    classCallCheck(this, StringController);
    var _this2 = possibleConstructorReturn(this, (StringController.__proto__ || Object.getPrototypeOf(StringController)).call(this, object, property));
    var _this = _this2;
    function onChange() {
      _this.setValue(_this.__input.value);
    }
    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'keyup', onChange);
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(StringController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (!dom.isActive(this.__input)) {
        this.__input.value = this.getValue();
      }
      return get(StringController.prototype.__proto__ || Object.getPrototypeOf(StringController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return StringController;
}(Controller);

function numDecimals(x) {
  var _x = x.toString();
  if (_x.indexOf('.') > -1) {
    return _x.length - _x.indexOf('.') - 1;
  }
  return 0;
}
var NumberController = function (_Controller) {
  inherits(NumberController, _Controller);
  function NumberController(object, property, params) {
    classCallCheck(this, NumberController);
    var _this = possibleConstructorReturn(this, (NumberController.__proto__ || Object.getPrototypeOf(NumberController)).call(this, object, property));
    var _params = params || {};
    _this.__min = _params.min;
    _this.__max = _params.max;
    _this.__step = _params.step;
    if (Common.isUndefined(_this.__step)) {
      if (_this.initialValue === 0) {
        _this.__impliedStep = 1;
      } else {
        _this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
      }
    } else {
      _this.__impliedStep = _this.__step;
    }
    _this.__precision = numDecimals(_this.__impliedStep);
    return _this;
  }
  createClass(NumberController, [{
    key: 'setValue',
    value: function setValue(v) {
      var _v = v;
      if (this.__min !== undefined && _v < this.__min) {
        _v = this.__min;
      } else if (this.__max !== undefined && _v > this.__max) {
        _v = this.__max;
      }
      if (this.__step !== undefined && _v % this.__step !== 0) {
        _v = Math.round(_v / this.__step) * this.__step;
      }
      return get(NumberController.prototype.__proto__ || Object.getPrototypeOf(NumberController.prototype), 'setValue', this).call(this, _v);
    }
  }, {
    key: 'min',
    value: function min(minValue) {
      this.__min = minValue;
      return this;
    }
  }, {
    key: 'max',
    value: function max(maxValue) {
      this.__max = maxValue;
      return this;
    }
  }, {
    key: 'step',
    value: function step(stepValue) {
      this.__step = stepValue;
      this.__impliedStep = stepValue;
      this.__precision = numDecimals(stepValue);
      return this;
    }
  }]);
  return NumberController;
}(Controller);

function roundToDecimal(value, decimals) {
  var tenTo = Math.pow(10, decimals);
  return Math.round(value * tenTo) / tenTo;
}
var NumberControllerBox = function (_NumberController) {
  inherits(NumberControllerBox, _NumberController);
  function NumberControllerBox(object, property, params) {
    classCallCheck(this, NumberControllerBox);
    var _this2 = possibleConstructorReturn(this, (NumberControllerBox.__proto__ || Object.getPrototypeOf(NumberControllerBox)).call(this, object, property, params));
    _this2.__truncationSuspended = false;
    var _this = _this2;
    var prevY = void 0;
    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!Common.isNaN(attempted)) {
        _this.setValue(attempted);
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onBlur() {
      onFinish();
    }
    function onMouseDrag(e) {
      var diff = prevY - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);
      prevY = e.clientY;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      onFinish();
    }
    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prevY = e.clientY;
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'mousedown', onMouseDown);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
        onFinish();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(NumberControllerBox, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
      return get(NumberControllerBox.prototype.__proto__ || Object.getPrototypeOf(NumberControllerBox.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerBox;
}(NumberController);

function map(v, i1, i2, o1, o2) {
  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}
var NumberControllerSlider = function (_NumberController) {
  inherits(NumberControllerSlider, _NumberController);
  function NumberControllerSlider(object, property, min, max, step) {
    classCallCheck(this, NumberControllerSlider);
    var _this2 = possibleConstructorReturn(this, (NumberControllerSlider.__proto__ || Object.getPrototypeOf(NumberControllerSlider)).call(this, object, property, { min: min, max: max, step: step }));
    var _this = _this2;
    _this2.__background = document.createElement('div');
    _this2.__foreground = document.createElement('div');
    dom.bind(_this2.__background, 'mousedown', onMouseDown);
    dom.bind(_this2.__background, 'touchstart', onTouchStart);
    dom.addClass(_this2.__background, 'slider');
    dom.addClass(_this2.__foreground, 'slider-fg');
    function onMouseDown(e) {
      document.activeElement.blur();
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      onMouseDrag(e);
    }
    function onMouseDrag(e) {
      e.preventDefault();
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
      return false;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onTouchStart(e) {
      if (e.touches.length !== 1) {
        return;
      }
      dom.bind(window, 'touchmove', onTouchMove);
      dom.bind(window, 'touchend', onTouchEnd);
      onTouchMove(e);
    }
    function onTouchMove(e) {
      var clientX = e.touches[0].clientX;
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
    }
    function onTouchEnd() {
      dom.unbind(window, 'touchmove', onTouchMove);
      dom.unbind(window, 'touchend', onTouchEnd);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.updateDisplay();
    _this2.__background.appendChild(_this2.__foreground);
    _this2.domElement.appendChild(_this2.__background);
    return _this2;
  }
  createClass(NumberControllerSlider, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
      this.__foreground.style.width = pct * 100 + '%';
      return get(NumberControllerSlider.prototype.__proto__ || Object.getPrototypeOf(NumberControllerSlider.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerSlider;
}(NumberController);

var FunctionController = function (_Controller) {
  inherits(FunctionController, _Controller);
  function FunctionController(object, property, text) {
    classCallCheck(this, FunctionController);
    var _this2 = possibleConstructorReturn(this, (FunctionController.__proto__ || Object.getPrototypeOf(FunctionController)).call(this, object, property));
    var _this = _this2;
    _this2.__button = document.createElement('div');
    _this2.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(_this2.__button, 'click', function (e) {
      e.preventDefault();
      _this.fire();
      return false;
    });
    dom.addClass(_this2.__button, 'button');
    _this2.domElement.appendChild(_this2.__button);
    return _this2;
  }
  createClass(FunctionController, [{
    key: 'fire',
    value: function fire() {
      if (this.__onChange) {
        this.__onChange.call(this);
      }
      this.getValue().call(this.object);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
    }
  }]);
  return FunctionController;
}(Controller);

var ColorController = function (_Controller) {
  inherits(ColorController, _Controller);
  function ColorController(object, property) {
    classCallCheck(this, ColorController);
    var _this2 = possibleConstructorReturn(this, (ColorController.__proto__ || Object.getPrototypeOf(ColorController)).call(this, object, property));
    _this2.__color = new Color(_this2.getValue());
    _this2.__temp = new Color(0);
    var _this = _this2;
    _this2.domElement = document.createElement('div');
    dom.makeSelectable(_this2.domElement, false);
    _this2.__selector = document.createElement('div');
    _this2.__selector.className = 'selector';
    _this2.__saturation_field = document.createElement('div');
    _this2.__saturation_field.className = 'saturation-field';
    _this2.__field_knob = document.createElement('div');
    _this2.__field_knob.className = 'field-knob';
    _this2.__field_knob_border = '2px solid ';
    _this2.__hue_knob = document.createElement('div');
    _this2.__hue_knob.className = 'hue-knob';
    _this2.__hue_field = document.createElement('div');
    _this2.__hue_field.className = 'hue-field';
    _this2.__input = document.createElement('input');
    _this2.__input.type = 'text';
    _this2.__input_textShadow = '0 1px 1px ';
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        onBlur.call(this);
      }
    });
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__selector, 'mousedown', function ()        {
      dom.addClass(this, 'drag').bind(window, 'mouseup', function ()        {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    dom.bind(_this2.__selector, 'touchstart', function ()        {
      dom.addClass(this, 'drag').bind(window, 'touchend', function ()        {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    var valueField = document.createElement('div');
    Common.extend(_this2.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });
    Common.extend(_this2.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    Common.extend(_this2.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });
    Common.extend(_this2.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });
    Common.extend(valueField.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');
    Common.extend(_this2.__hue_field.style, {
      width: '15px',
      height: '100px',
      border: '1px solid #555',
      cursor: 'ns-resize',
      position: 'absolute',
      top: '3px',
      right: '3px'
    });
    hueGradient(_this2.__hue_field);
    Common.extend(_this2.__input.style, {
      outline: 'none',
      textAlign: 'center',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
    });
    dom.bind(_this2.__saturation_field, 'mousedown', fieldDown);
    dom.bind(_this2.__saturation_field, 'touchstart', fieldDown);
    dom.bind(_this2.__field_knob, 'mousedown', fieldDown);
    dom.bind(_this2.__field_knob, 'touchstart', fieldDown);
    dom.bind(_this2.__hue_field, 'mousedown', fieldDownH);
    dom.bind(_this2.__hue_field, 'touchstart', fieldDownH);
    function fieldDown(e) {
      setSV(e);
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'touchmove', setSV);
      dom.bind(window, 'mouseup', fieldUpSV);
      dom.bind(window, 'touchend', fieldUpSV);
    }
    function fieldDownH(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'touchmove', setH);
      dom.bind(window, 'mouseup', fieldUpH);
      dom.bind(window, 'touchend', fieldUpH);
    }
    function fieldUpSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'touchmove', setSV);
      dom.unbind(window, 'mouseup', fieldUpSV);
      dom.unbind(window, 'touchend', fieldUpSV);
      onFinish();
    }
    function fieldUpH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'touchmove', setH);
      dom.unbind(window, 'mouseup', fieldUpH);
      dom.unbind(window, 'touchend', fieldUpH);
      onFinish();
    }
    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.__color.toOriginal());
      }
    }
    _this2.__saturation_field.appendChild(valueField);
    _this2.__selector.appendChild(_this2.__field_knob);
    _this2.__selector.appendChild(_this2.__saturation_field);
    _this2.__selector.appendChild(_this2.__hue_field);
    _this2.__hue_field.appendChild(_this2.__hue_knob);
    _this2.domElement.appendChild(_this2.__input);
    _this2.domElement.appendChild(_this2.__selector);
    _this2.updateDisplay();
    function setSV(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__saturation_field.getBoundingClientRect();
      var _ref = e.touches && e.touches[0] || e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;
      var s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
      var v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (v > 1) {
        v = 1;
      } else if (v < 0) {
        v = 0;
      }
      if (s > 1) {
        s = 1;
      } else if (s < 0) {
        s = 0;
      }
      _this.__color.v = v;
      _this.__color.s = s;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    function setH(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__hue_field.getBoundingClientRect();
      var _ref2 = e.touches && e.touches[0] || e,
          clientY = _ref2.clientY;
      var h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (h > 1) {
        h = 1;
      } else if (h < 0) {
        h = 0;
      }
      _this.__color.h = h * 360;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    return _this2;
  }
  createClass(ColorController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var i = interpret(this.getValue());
      if (i !== false) {
        var mismatch = false;
        Common.each(Color.COMPONENTS, function (component) {
          if (!Common.isUndefined(i[component]) && !Common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
            mismatch = true;
            return {};
          }
        }, this);
        if (mismatch) {
          Common.extend(this.__color.__state, i);
        }
      }
      Common.extend(this.__temp.__state, this.__color.__state);
      this.__temp.a = 1;
      var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
      var _flip = 255 - flip;
      Common.extend(this.__field_knob.style, {
        marginLeft: 100 * this.__color.s - 7 + 'px',
        marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
        backgroundColor: this.__temp.toHexString(),
        border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
      });
      this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
      this.__temp.s = 1;
      this.__temp.v = 1;
      linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());
      this.__input.value = this.__color.toString();
      Common.extend(this.__input.style, {
        backgroundColor: this.__color.toHexString(),
        color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
        textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
      });
    }
  }]);
  return ColorController;
}(Controller);
var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
function linearGradient(elem, x, a, b) {
  elem.style.background = '';
  Common.each(vendors, function (vendor) {
    elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
  });
}
function hueGradient(elem) {
  elem.style.background = '';
  elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
  elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
}

var css = {
  load: function load(url, indoc) {
    var doc = indoc || document;
    var link = doc.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    doc.getElementsByTagName('head')[0].appendChild(link);
  },
  inject: function inject(cssContent, indoc) {
    var doc = indoc || document;
    var injected = document.createElement('style');
    injected.type = 'text/css';
    injected.innerHTML = cssContent;
    var head = doc.getElementsByTagName('head')[0];
    try {
      head.appendChild(injected);
    } catch (e) {
    }
  }
};

var saveDialogContents = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

var ControllerFactory = function ControllerFactory(object, property) {
  var initialValue = object[property];
  if (Common.isArray(arguments[2]) || Common.isObject(arguments[2])) {
    return new OptionController(object, property, arguments[2]);
  }
  if (Common.isNumber(initialValue)) {
    if (Common.isNumber(arguments[2]) && Common.isNumber(arguments[3])) {
      if (Common.isNumber(arguments[4])) {
        return new NumberControllerSlider(object, property, arguments[2], arguments[3], arguments[4]);
      }
      return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
    }
    if (Common.isNumber(arguments[4])) {
      return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
    }
    return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });
  }
  if (Common.isString(initialValue)) {
    return new StringController(object, property);
  }
  if (Common.isFunction(initialValue)) {
    return new FunctionController(object, property, '');
  }
  if (Common.isBoolean(initialValue)) {
    return new BooleanController(object, property);
  }
  return null;
};

function requestAnimationFrame(callback) {
  setTimeout(callback, 1000 / 60);
}
var requestAnimationFrame$1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;

var CenteredDiv = function () {
  function CenteredDiv() {
    classCallCheck(this, CenteredDiv);
    this.backgroundElement = document.createElement('div');
    Common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear',
      transition: 'opacity 0.2s linear'
    });
    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';
    this.domElement = document.createElement('div');
    Common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
      transition: 'transform 0.2s ease-out, opacity 0.2s linear'
    });
    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);
    var _this = this;
    dom.bind(this.backgroundElement, 'click', function () {
      _this.hide();
    });
  }
  createClass(CenteredDiv, [{
    key: 'show',
    value: function show() {
      var _this = this;
      this.backgroundElement.style.display = 'block';
      this.domElement.style.display = 'block';
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
      this.layout();
      Common.defer(function () {
        _this.backgroundElement.style.opacity = 1;
        _this.domElement.style.opacity = 1;
        _this.domElement.style.webkitTransform = 'scale(1)';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this = this;
      var hide = function hide() {
        _this.domElement.style.display = 'none';
        _this.backgroundElement.style.display = 'none';
        dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
        dom.unbind(_this.domElement, 'transitionend', hide);
        dom.unbind(_this.domElement, 'oTransitionEnd', hide);
      };
      dom.bind(this.domElement, 'webkitTransitionEnd', hide);
      dom.bind(this.domElement, 'transitionend', hide);
      dom.bind(this.domElement, 'oTransitionEnd', hide);
      this.backgroundElement.style.opacity = 0;
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
      this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
    }
  }]);
  return CenteredDiv;
}();

var styleSheet = ___$insertStyle(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");

css.inject(styleSheet);
var CSS_NAMESPACE = 'dg';
var HIDE_KEY_CODE = 72;
var CLOSE_BUTTON_HEIGHT = 20;
var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
var SUPPORTS_LOCAL_STORAGE = function () {
  try {
    return !!window.localStorage;
  } catch (e) {
    return false;
  }
}();
var SAVE_DIALOGUE = void 0;
var autoPlaceVirgin = true;
var autoPlaceContainer = void 0;
var hide = false;
var hideableGuis = [];
var GUI = function GUI(pars) {
  var _this = this;
  var params = pars || {};
  this.domElement = document.createElement('div');
  this.__ul = document.createElement('ul');
  this.domElement.appendChild(this.__ul);
  dom.addClass(this.domElement, CSS_NAMESPACE);
  this.__folders = {};
  this.__controllers = [];
  this.__rememberedObjects = [];
  this.__rememberedObjectIndecesToControllers = [];
  this.__listening = [];
  params = Common.defaults(params, {
    closeOnTop: false,
    autoPlace: true,
    width: GUI.DEFAULT_WIDTH
  });
  params = Common.defaults(params, {
    resizable: params.autoPlace,
    hideable: params.autoPlace
  });
  if (!Common.isUndefined(params.load)) {
    if (params.preset) {
      params.load.preset = params.preset;
    }
  } else {
    params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
  }
  if (Common.isUndefined(params.parent) && params.hideable) {
    hideableGuis.push(this);
  }
  params.resizable = Common.isUndefined(params.parent) && params.resizable;
  if (params.autoPlace && Common.isUndefined(params.scrollable)) {
    params.scrollable = true;
  }
  var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
  var saveToLocalStorage = void 0;
  var titleRow = void 0;
  Object.defineProperties(this,
  {
    parent: {
      get: function get$$1() {
        return params.parent;
      }
    },
    scrollable: {
      get: function get$$1() {
        return params.scrollable;
      }
    },
    autoPlace: {
      get: function get$$1() {
        return params.autoPlace;
      }
    },
    closeOnTop: {
      get: function get$$1() {
        return params.closeOnTop;
      }
    },
    preset: {
      get: function get$$1() {
        if (_this.parent) {
          return _this.getRoot().preset;
        }
        return params.load.preset;
      },
      set: function set$$1(v) {
        if (_this.parent) {
          _this.getRoot().preset = v;
        } else {
          params.load.preset = v;
        }
        setPresetSelectIndex(this);
        _this.revert();
      }
    },
    width: {
      get: function get$$1() {
        return params.width;
      },
      set: function set$$1(v) {
        params.width = v;
        setWidth(_this, v);
      }
    },
    name: {
      get: function get$$1() {
        return params.name;
      },
      set: function set$$1(v) {
        params.name = v;
        if (titleRow) {
          titleRow.innerHTML = params.name;
        }
      }
    },
    closed: {
      get: function get$$1() {
        return params.closed;
      },
      set: function set$$1(v) {
        params.closed = v;
        if (params.closed) {
          dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
        } else {
          dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
        }
        this.onResize();
        if (_this.__closeButton) {
          _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
        }
      }
    },
    load: {
      get: function get$$1() {
        return params.load;
      }
    },
    useLocalStorage: {
      get: function get$$1() {
        return useLocalStorage;
      },
      set: function set$$1(bool) {
        if (SUPPORTS_LOCAL_STORAGE) {
          useLocalStorage = bool;
          if (bool) {
            dom.bind(window, 'unload', saveToLocalStorage);
          } else {
            dom.unbind(window, 'unload', saveToLocalStorage);
          }
          localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
        }
      }
    }
  });
  if (Common.isUndefined(params.parent)) {
    this.closed = params.closed || false;
    dom.addClass(this.domElement, GUI.CLASS_MAIN);
    dom.makeSelectable(this.domElement, false);
    if (SUPPORTS_LOCAL_STORAGE) {
      if (useLocalStorage) {
        _this.useLocalStorage = true;
        var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
        if (savedGui) {
          params.load = JSON.parse(savedGui);
        }
      }
    }
    this.__closeButton = document.createElement('div');
    this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
    dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
    if (params.closeOnTop) {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
      this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
    } else {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
      this.domElement.appendChild(this.__closeButton);
    }
    dom.bind(this.__closeButton, 'click', function () {
      _this.closed = !_this.closed;
    });
  } else {
    if (params.closed === undefined) {
      params.closed = true;
    }
    var titleRowName = document.createTextNode(params.name);
    dom.addClass(titleRowName, 'controller-name');
    titleRow = addRow(_this, titleRowName);
    var onClickTitle = function onClickTitle(e) {
      e.preventDefault();
      _this.closed = !_this.closed;
      return false;
    };
    dom.addClass(this.__ul, GUI.CLASS_CLOSED);
    dom.addClass(titleRow, 'title');
    dom.bind(titleRow, 'click', onClickTitle);
    if (!params.closed) {
      this.closed = false;
    }
  }
  if (params.autoPlace) {
    if (Common.isUndefined(params.parent)) {
      if (autoPlaceVirgin) {
        autoPlaceContainer = document.createElement('div');
        dom.addClass(autoPlaceContainer, CSS_NAMESPACE);
        dom.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
        document.body.appendChild(autoPlaceContainer);
        autoPlaceVirgin = false;
      }
      autoPlaceContainer.appendChild(this.domElement);
      dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
    }
    if (!this.parent) {
      setWidth(_this, params.width);
    }
  }
  this.__resizeHandler = function () {
    _this.onResizeDebounced();
  };
  dom.bind(window, 'resize', this.__resizeHandler);
  dom.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
  dom.bind(this.__ul, 'transitionend', this.__resizeHandler);
  dom.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
  this.onResize();
  if (params.resizable) {
    addResizeHandle(this);
  }
  saveToLocalStorage = function saveToLocalStorage() {
    if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }
  };
  this.saveToLocalStorageIfPossible = saveToLocalStorage;
  function resetWidth() {
    var root = _this.getRoot();
    root.width += 1;
    Common.defer(function () {
      root.width -= 1;
    });
  }
  if (!params.parent) {
    resetWidth();
  }
};
GUI.toggleHide = function () {
  hide = !hide;
  Common.each(hideableGuis, function (gui) {
    gui.domElement.style.display = hide ? 'none' : '';
  });
};
GUI.CLASS_AUTO_PLACE = 'a';
GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
GUI.CLASS_MAIN = 'main';
GUI.CLASS_CONTROLLER_ROW = 'cr';
GUI.CLASS_TOO_TALL = 'taller-than-window';
GUI.CLASS_CLOSED = 'closed';
GUI.CLASS_CLOSE_BUTTON = 'close-button';
GUI.CLASS_CLOSE_TOP = 'close-top';
GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
GUI.CLASS_DRAG = 'drag';
GUI.DEFAULT_WIDTH = 245;
GUI.TEXT_CLOSED = 'Close Controls';
GUI.TEXT_OPEN = 'Open Controls';
GUI._keydownHandler = function (e) {
  if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
    GUI.toggleHide();
  }
};
dom.bind(window, 'keydown', GUI._keydownHandler, false);
Common.extend(GUI.prototype,
{
  add: function add(object, property) {
    return _add(this, object, property, {
      factoryArgs: Array.prototype.slice.call(arguments, 2)
    });
  },
  addColor: function addColor(object, property) {
    return _add(this, object, property, {
      color: true
    });
  },
  remove: function remove(controller) {
    this.__ul.removeChild(controller.__li);
    this.__controllers.splice(this.__controllers.indexOf(controller), 1);
    var _this = this;
    Common.defer(function () {
      _this.onResize();
    });
  },
  destroy: function destroy() {
    if (this.parent) {
      throw new Error('Only the root GUI should be removed with .destroy(). ' + 'For subfolders, use gui.removeFolder(folder) instead.');
    }
    if (this.autoPlace) {
      autoPlaceContainer.removeChild(this.domElement);
    }
    var _this = this;
    Common.each(this.__folders, function (subfolder) {
      _this.removeFolder(subfolder);
    });
    dom.unbind(window, 'keydown', GUI._keydownHandler, false);
    removeListeners(this);
  },
  addFolder: function addFolder(name) {
    if (this.__folders[name] !== undefined) {
      throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
    }
    var newGuiParams = { name: name, parent: this };
    newGuiParams.autoPlace = this.autoPlace;
    if (this.load &&
    this.load.folders &&
    this.load.folders[name]) {
      newGuiParams.closed = this.load.folders[name].closed;
      newGuiParams.load = this.load.folders[name];
    }
    var gui = new GUI(newGuiParams);
    this.__folders[name] = gui;
    var li = addRow(this, gui.domElement);
    dom.addClass(li, 'folder');
    return gui;
  },
  removeFolder: function removeFolder(folder) {
    this.__ul.removeChild(folder.domElement.parentElement);
    delete this.__folders[folder.name];
    if (this.load &&
    this.load.folders &&
    this.load.folders[folder.name]) {
      delete this.load.folders[folder.name];
    }
    removeListeners(folder);
    var _this = this;
    Common.each(folder.__folders, function (subfolder) {
      folder.removeFolder(subfolder);
    });
    Common.defer(function () {
      _this.onResize();
    });
  },
  open: function open() {
    this.closed = false;
  },
  close: function close() {
    this.closed = true;
  },
  hide: function hide() {
    this.domElement.style.display = 'none';
  },
  show: function show() {
    this.domElement.style.display = '';
  },
  onResize: function onResize() {
    var root = this.getRoot();
    if (root.scrollable) {
      var top = dom.getOffset(root.__ul).top;
      var h = 0;
      Common.each(root.__ul.childNodes, function (node) {
        if (!(root.autoPlace && node === root.__save_row)) {
          h += dom.getHeight(node);
        }
      });
      if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
        dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
      } else {
        dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = 'auto';
      }
    }
    if (root.__resize_handle) {
      Common.defer(function () {
        root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
      });
    }
    if (root.__closeButton) {
      root.__closeButton.style.width = root.width + 'px';
    }
  },
  onResizeDebounced: Common.debounce(function () {
    this.onResize();
  }, 50),
  remember: function remember() {
    if (Common.isUndefined(SAVE_DIALOGUE)) {
      SAVE_DIALOGUE = new CenteredDiv();
      SAVE_DIALOGUE.domElement.innerHTML = saveDialogContents;
    }
    if (this.parent) {
      throw new Error('You can only call remember on a top level GUI.');
    }
    var _this = this;
    Common.each(Array.prototype.slice.call(arguments), function (object) {
      if (_this.__rememberedObjects.length === 0) {
        addSaveMenu(_this);
      }
      if (_this.__rememberedObjects.indexOf(object) === -1) {
        _this.__rememberedObjects.push(object);
      }
    });
    if (this.autoPlace) {
      setWidth(this, this.width);
    }
  },
  getRoot: function getRoot() {
    var gui = this;
    while (gui.parent) {
      gui = gui.parent;
    }
    return gui;
  },
  getSaveObject: function getSaveObject() {
    var toReturn = this.load;
    toReturn.closed = this.closed;
    if (this.__rememberedObjects.length > 0) {
      toReturn.preset = this.preset;
      if (!toReturn.remembered) {
        toReturn.remembered = {};
      }
      toReturn.remembered[this.preset] = getCurrentPreset(this);
    }
    toReturn.folders = {};
    Common.each(this.__folders, function (element, key) {
      toReturn.folders[key] = element.getSaveObject();
    });
    return toReturn;
  },
  save: function save() {
    if (!this.load.remembered) {
      this.load.remembered = {};
    }
    this.load.remembered[this.preset] = getCurrentPreset(this);
    markPresetModified(this, false);
    this.saveToLocalStorageIfPossible();
  },
  saveAs: function saveAs(presetName) {
    if (!this.load.remembered) {
      this.load.remembered = {};
      this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
    }
    this.load.remembered[presetName] = getCurrentPreset(this);
    this.preset = presetName;
    addPresetOption(this, presetName, true);
    this.saveToLocalStorageIfPossible();
  },
  revert: function revert(gui) {
    Common.each(this.__controllers, function (controller) {
      if (!this.getRoot().load.remembered) {
        controller.setValue(controller.initialValue);
      } else {
        recallSavedValue(gui || this.getRoot(), controller);
      }
      if (controller.__onFinishChange) {
        controller.__onFinishChange.call(controller, controller.getValue());
      }
    }, this);
    Common.each(this.__folders, function (folder) {
      folder.revert(folder);
    });
    if (!gui) {
      markPresetModified(this.getRoot(), false);
    }
  },
  listen: function listen(controller) {
    var init = this.__listening.length === 0;
    this.__listening.push(controller);
    if (init) {
      updateDisplays(this.__listening);
    }
  },
  updateDisplay: function updateDisplay() {
    Common.each(this.__controllers, function (controller) {
      controller.updateDisplay();
    });
    Common.each(this.__folders, function (folder) {
      folder.updateDisplay();
    });
  }
});
function addRow(gui, newDom, liBefore) {
  var li = document.createElement('li');
  if (newDom) {
    li.appendChild(newDom);
  }
  if (liBefore) {
    gui.__ul.insertBefore(li, liBefore);
  } else {
    gui.__ul.appendChild(li);
  }
  gui.onResize();
  return li;
}
function removeListeners(gui) {
  dom.unbind(window, 'resize', gui.__resizeHandler);
  if (gui.saveToLocalStorageIfPossible) {
    dom.unbind(window, 'unload', gui.saveToLocalStorageIfPossible);
  }
}
function markPresetModified(gui, modified) {
  var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
  if (modified) {
    opt.innerHTML = opt.value + '*';
  } else {
    opt.innerHTML = opt.value;
  }
}
function augmentController(gui, li, controller) {
  controller.__li = li;
  controller.__gui = gui;
  Common.extend(controller,                                   {
    options: function options(_options) {
      if (arguments.length > 1) {
        var nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: nextSibling,
          factoryArgs: [Common.toArray(arguments)]
        });
      }
      if (Common.isArray(_options) || Common.isObject(_options)) {
        var _nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: _nextSibling,
          factoryArgs: [_options]
        });
      }
    },
    name: function name(_name) {
      controller.__li.firstElementChild.firstElementChild.innerHTML = _name;
      return controller;
    },
    listen: function listen() {
      controller.__gui.listen(controller);
      return controller;
    },
    remove: function remove() {
      controller.__gui.remove(controller);
      return controller;
    }
  });
  if (controller instanceof NumberControllerSlider) {
    var box = new NumberControllerBox(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });
    Common.each(['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'], function (method) {
      var pc = controller[method];
      var pb = box[method];
      controller[method] = box[method] = function () {
        var args = Array.prototype.slice.call(arguments);
        pb.apply(box, args);
        return pc.apply(controller, args);
      };
    });
    dom.addClass(li, 'has-slider');
    controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
  } else if (controller instanceof NumberControllerBox) {
    var r = function r(returned) {
      if (Common.isNumber(controller.__min) && Common.isNumber(controller.__max)) {
        var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
        var wasListening = controller.__gui.__listening.indexOf(controller) > -1;
        controller.remove();
        var newController = _add(gui, controller.object, controller.property, {
          before: controller.__li.nextElementSibling,
          factoryArgs: [controller.__min, controller.__max, controller.__step]
        });
        newController.name(oldName);
        if (wasListening) newController.listen();
        return newController;
      }
      return returned;
    };
    controller.min = Common.compose(r, controller.min);
    controller.max = Common.compose(r, controller.max);
  } else if (controller instanceof BooleanController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__checkbox, 'click');
    });
    dom.bind(controller.__checkbox, 'click', function (e) {
      e.stopPropagation();
    });
  } else if (controller instanceof FunctionController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__button, 'click');
    });
    dom.bind(li, 'mouseover', function () {
      dom.addClass(controller.__button, 'hover');
    });
    dom.bind(li, 'mouseout', function () {
      dom.removeClass(controller.__button, 'hover');
    });
  } else if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
    controller.updateDisplay = Common.compose(function (val) {
      li.style.borderLeftColor = controller.__color.toString();
      return val;
    }, controller.updateDisplay);
    controller.updateDisplay();
  }
  controller.setValue = Common.compose(function (val) {
    if (gui.getRoot().__preset_select && controller.isModified()) {
      markPresetModified(gui.getRoot(), true);
    }
    return val;
  }, controller.setValue);
}
function recallSavedValue(gui, controller) {
  var root = gui.getRoot();
  var matchedIndex = root.__rememberedObjects.indexOf(controller.object);
  if (matchedIndex !== -1) {
    var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];
    if (controllerMap === undefined) {
      controllerMap = {};
      root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
    }
    controllerMap[controller.property] = controller;
    if (root.load && root.load.remembered) {
      var presetMap = root.load.remembered;
      var preset = void 0;
      if (presetMap[gui.preset]) {
        preset = presetMap[gui.preset];
      } else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
        preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
      } else {
        return;
      }
      if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
        var value = preset[matchedIndex][controller.property];
        controller.initialValue = value;
        controller.setValue(value);
      }
    }
  }
}
function _add(gui, object, property, params) {
  if (object[property] === undefined) {
    throw new Error('Object "' + object + '" has no property "' + property + '"');
  }
  var controller = void 0;
  if (params.color) {
    controller = new ColorController(object, property);
  } else {
    var factoryArgs = [object, property].concat(params.factoryArgs);
    controller = ControllerFactory.apply(gui, factoryArgs);
  }
  if (params.before instanceof Controller) {
    params.before = params.before.__li;
  }
  recallSavedValue(gui, controller);
  dom.addClass(controller.domElement, 'c');
  var name = document.createElement('span');
  dom.addClass(name, 'property-name');
  name.innerHTML = controller.property;
  var container = document.createElement('div');
  container.appendChild(name);
  container.appendChild(controller.domElement);
  var li = addRow(gui, container, params.before);
  dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
  if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
  } else {
    dom.addClass(li, _typeof(controller.getValue()));
  }
  augmentController(gui, li, controller);
  gui.__controllers.push(controller);
  return controller;
}
function getLocalStorageHash(gui, key) {
  return document.location.href + '.' + key;
}
function addPresetOption(gui, name, setSelected) {
  var opt = document.createElement('option');
  opt.innerHTML = name;
  opt.value = name;
  gui.__preset_select.appendChild(opt);
  if (setSelected) {
    gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
  }
}
function showHideExplain(gui, explain) {
  explain.style.display = gui.useLocalStorage ? 'block' : 'none';
}
function addSaveMenu(gui) {
  var div = gui.__save_row = document.createElement('li');
  dom.addClass(gui.domElement, 'has-save');
  gui.__ul.insertBefore(div, gui.__ul.firstChild);
  dom.addClass(div, 'save-row');
  var gears = document.createElement('span');
  gears.innerHTML = '&nbsp;';
  dom.addClass(gears, 'button gears');
  var button = document.createElement('span');
  button.innerHTML = 'Save';
  dom.addClass(button, 'button');
  dom.addClass(button, 'save');
  var button2 = document.createElement('span');
  button2.innerHTML = 'New';
  dom.addClass(button2, 'button');
  dom.addClass(button2, 'save-as');
  var button3 = document.createElement('span');
  button3.innerHTML = 'Revert';
  dom.addClass(button3, 'button');
  dom.addClass(button3, 'revert');
  var select = gui.__preset_select = document.createElement('select');
  if (gui.load && gui.load.remembered) {
    Common.each(gui.load.remembered, function (value, key) {
      addPresetOption(gui, key, key === gui.preset);
    });
  } else {
    addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
  }
  dom.bind(select, 'change', function () {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
    }
    gui.preset = this.value;
  });
  div.appendChild(select);
  div.appendChild(gears);
  div.appendChild(button);
  div.appendChild(button2);
  div.appendChild(button3);
  if (SUPPORTS_LOCAL_STORAGE) {
    var explain = document.getElementById('dg-local-explain');
    var localStorageCheckBox = document.getElementById('dg-local-storage');
    var saveLocally = document.getElementById('dg-save-locally');
    saveLocally.style.display = 'block';
    if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
      localStorageCheckBox.setAttribute('checked', 'checked');
    }
    showHideExplain(gui, explain);
    dom.bind(localStorageCheckBox, 'change', function () {
      gui.useLocalStorage = !gui.useLocalStorage;
      showHideExplain(gui, explain);
    });
  }
  var newConstructorTextArea = document.getElementById('dg-new-constructor');
  dom.bind(newConstructorTextArea, 'keydown', function (e) {
    if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
      SAVE_DIALOGUE.hide();
    }
  });
  dom.bind(gears, 'click', function () {
    newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
    SAVE_DIALOGUE.show();
    newConstructorTextArea.focus();
    newConstructorTextArea.select();
  });
  dom.bind(button, 'click', function () {
    gui.save();
  });
  dom.bind(button2, 'click', function () {
    var presetName = prompt('Enter a new preset name.');
    if (presetName) {
      gui.saveAs(presetName);
    }
  });
  dom.bind(button3, 'click', function () {
    gui.revert();
  });
}
function addResizeHandle(gui) {
  var pmouseX = void 0;
  gui.__resize_handle = document.createElement('div');
  Common.extend(gui.__resize_handle.style, {
    width: '6px',
    marginLeft: '-3px',
    height: '200px',
    cursor: 'ew-resize',
    position: 'absolute'
  });
  function drag(e) {
    e.preventDefault();
    gui.width += pmouseX - e.clientX;
    gui.onResize();
    pmouseX = e.clientX;
    return false;
  }
  function dragStop() {
    dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.unbind(window, 'mousemove', drag);
    dom.unbind(window, 'mouseup', dragStop);
  }
  function dragStart(e) {
    e.preventDefault();
    pmouseX = e.clientX;
    dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.bind(window, 'mousemove', drag);
    dom.bind(window, 'mouseup', dragStop);
    return false;
  }
  dom.bind(gui.__resize_handle, 'mousedown', dragStart);
  dom.bind(gui.__closeButton, 'mousedown', dragStart);
  gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
}
function setWidth(gui, w) {
  gui.domElement.style.width = w + 'px';
  if (gui.__save_row && gui.autoPlace) {
    gui.__save_row.style.width = w + 'px';
  }
  if (gui.__closeButton) {
    gui.__closeButton.style.width = w + 'px';
  }
}
function getCurrentPreset(gui, useInitialValues) {
  var toReturn = {};
  Common.each(gui.__rememberedObjects, function (val, index) {
    var savedValues = {};
    var controllerMap = gui.__rememberedObjectIndecesToControllers[index];
    Common.each(controllerMap, function (controller, property) {
      savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
    });
    toReturn[index] = savedValues;
  });
  return toReturn;
}
function setPresetSelectIndex(gui) {
  for (var index = 0; index < gui.__preset_select.length; index++) {
    if (gui.__preset_select[index].value === gui.preset) {
      gui.__preset_select.selectedIndex = index;
    }
  }
}
function updateDisplays(controllerArray) {
  if (controllerArray.length !== 0) {
    requestAnimationFrame$1.call(window, function () {
      updateDisplays(controllerArray);
    });
  }
  Common.each(controllerArray, function (c) {
    c.updateDisplay();
  });
}

var color = {
  Color: Color,
  math: ColorMath,
  interpret: interpret
};
var controllers = {
  Controller: Controller,
  BooleanController: BooleanController,
  OptionController: OptionController,
  StringController: StringController,
  NumberController: NumberController,
  NumberControllerBox: NumberControllerBox,
  NumberControllerSlider: NumberControllerSlider,
  FunctionController: FunctionController,
  ColorController: ColorController
};
var dom$1 = { dom: dom };
var gui = { GUI: GUI };
var GUI$1 = GUI;
var index = {
  color: color,
  controllers: controllers,
  dom: dom$1,
  gui: gui,
  GUI: GUI$1
};


/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=dat.gui.module.js.map


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/scripts/Bar.js":
/*!****************************!*\
  !*** ./src/scripts/Bar.js ***!
  \****************************/
/*! exports provided: Bar, ParametersBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bar", function() { return Bar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersBar", function() { return ParametersBar; });
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");


function Bar (options, canvas, self, _legendInfo, dataChart) {
    this._canvasElement  = canvas;
    this._dataChart      = dataChart;
    this._legendInfo     = _legendInfo;
    this._self           = self;
    this._barsPositions  = {};
    this._gui            = new dat_gui__WEBPACK_IMPORTED_MODULE_0__["GUI"]({resizable : false});
    const barFolder      = this._gui.addFolder('Bar');
    this._configuration  = options;
    this.animateBars     = false;
    this._self._borderColor    = [175, 160, 160];

    barFolder.addColor(this._self, '_borderColor').name('Border Color')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    barFolder.add(this._self, '_borderOpacity', 0, 1).name('Border Opacity')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    barFolder.addColor(this._self, '_axisColor').name('Axis Color')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    barFolder.add(this._self, '_axisOpacity', 0, 1).name('Axis Opacity')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    const _bars = barFolder.addFolder('Bars');
    _bars.add(this._self._bars, 'width', 20, 60).name('Width')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    _bars.add(this._self, '_barTooltip').name(`Bar's Tooltip`)
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    // Bars Colors ______________
    _bars.addColor(this._self._barsColors, 'one').name('One')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    _bars.addColor(this._self._barsColors, 'two').name('Two')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    _bars.addColor(this._self._barsColors, 'three').name('Three')
        .onChange(() => {
            requestAnimationFrame(this.__animate.bind(this))
        });
    //_________________

    // Sub Folders
    const xAxis = barFolder.addFolder('XAxis')
    xAxis.add(this._self._labelsX, 'display').name('Display')
        .onChange((e) => {
            xAxisColor.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            xAxisFontSize.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            requestAnimationFrame(this.__animate.bind(this))
        })
    const xAxisFontSize = xAxis.add(this._self._labelsX, 'fontSize', 10, 26).name('Font Size');
    xAxisFontSize.onChange(() => {
        requestAnimationFrame(this.__animate.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsX.display ? 'auto' : 'none'}; opacity: ${this._self._labelsX.display ? 1 : 0.5}`);
    const xAxisColor = xAxis.addColor(this._self._labelsX, 'color').name('Color');
    xAxisColor.onChange(() => {
        requestAnimationFrame(this.__animate.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsX.display ? 'auto' : 'none'}; opacity: ${this._self._labelsX.display ? 1 : 0.5}`);

    const yAxis = barFolder.addFolder('YAxis')
    yAxis.add(this._self._labelsY, 'display')
        .onChange((e) => {
            yAxisColor.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            yAxisFontSize.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            requestAnimationFrame(this.__animate.bind(this))
        })
    const yAxisFontSize = yAxis.add(this._self._labelsY, 'fontSize', 10, 26).name('Font Size');
    yAxisFontSize.onChange(() => {
        requestAnimationFrame(this.__animate.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsY.display ? 'auto' : 'none'}; opacity: ${this._self._labelsY.display ? 1 : 0.5}`);
    const yAxisColor = yAxis.addColor(this._self._labelsY, 'color').name('Color');
    yAxisColor.onChange(() => {
        requestAnimationFrame(this.__animate.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsY.display ? 'auto' : 'none'}; opacity: ${this._self._labelsY.display ? 1 : 0.5}`);
}
Bar.prototype.__setAxisYLine = function (_displayX) {
    this._self._canvas.beginPath();
    this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
    let _heightAxis = null;
    if (this._self._labelsX.hasOwnProperty('fontSize') && _displayX) {
        _heightAxis = this._self._labelsX.fontSize * 2;
        this._self._paddingXBottom = _heightAxis
    } else _heightAxis = this._self._paddingXBottom;
    this._self._lineXWidth && (
        this._self._canvas.moveTo(this._self._paddingYLeft, this._self._heightCanvas - _heightAxis),
            this._self._canvas.lineTo(this._self._paddingYLeft, this._self._paddingXTop),
            this._self._canvas.lineWidth = this._self._lineYWidth
    );
    if (this._self._axisOpacity !== 1) {
        this._self._canvas.strokeStyle = this._self._axisColor.replace(')', ', ' + this._self._axisOpacity + ')').replace('rgb', 'rgba')
    } else {
        this._self._canvas.strokeStyle = this._self._axisColor
    }
    this._self._canvas.stroke();
    this._self._canvas.closePath();
    this._self._canvas.resetTransform()
};
Bar.prototype.__setAxisXLine = function (_display) {
    this._self._canvas.beginPath();
    this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
    this._self._paddingXBottom = this._self._labelsX.display ? this._self._paddingXBottom: 10;
    let _heightAxis = null;
    if (this._self._labelsX.hasOwnProperty('fontSize') && _display) {
        _heightAxis = this._self._labelsX.fontSize * 2;
        this._self._paddingXBottom = _heightAxis
    } else _heightAxis = this._self._paddingXBottom;
    this._self._lineXWidth && (
        this._self._canvas.moveTo(this._self._paddingYLeft, this._self._heightCanvas - _heightAxis),
            this._self._canvas.lineTo(this._self._widthCanvas - this._self._paddingYRight, this._self._heightCanvas - _heightAxis),
            this._self._canvas.lineWidth = this._self._lineYWidth
    );
    if (this._self._axisOpacity !== 1) {
        this._self._canvas.strokeStyle = this._self._axisColor.replace(')', ', ' + this._self._axisOpacity + ')').replace('rgb', 'rgba')
    } else {
        this._self._canvas.strokeStyle = this._self._axisColor
    }
    this._self._canvas.stroke();
    this._self._canvas.closePath();
    this._self._canvas.resetTransform()
};
Bar.prototype.__setAxisY = function (_displayX, _displayY) {
    this.__setAxisYLine(_displayX)
    if (_displayY) {
        this._self._canvas.font = this._self._labelsY.fontSize + 'px Arial';
        this._self._canvas.textAlign = "right";
        this._self._canvas.fillStyle = this._self._labelsY.color;
        this._self._canvas.fillText('0', this._self._paddingYLeft - 7, this._self._heightCanvas - this._self._paddingXBottom);
        this._self._canvas.clearColor;
    }
};
Bar.prototype.__setCoordinatesNet = function (_displayY) {
    let [_maxValue] = [
        this._self._result.__max_min_values(this._configuration.data.datasets.data).max,
        1
    ];
    let maxCeil = Math.ceil(Number(_maxValue.toString().split('')[0] + (_maxValue.toString().split('')[1] | _maxValue.toString().split('')[1]))/10);
    if (this._self._labelsY.display) {
        if (_maxValue > 999999999999 || _maxValue === Infinity) {
            maxCeil *= 10000;
            this._legendInfo.info1 = 'x10000000'
        } else if (_maxValue > 999999999) {
            maxCeil *= 1000;
            this._legendInfo.info1 = 'x1000000'
        } else if (_maxValue > 99999999) {
            maxCeil *= 100;
            this._legendInfo.info1 = 'x1000000'
        } else if (_maxValue > 9999999) {
            maxCeil *= 10;
            this._legendInfo.info1 = 'x1000000'
        } else if (_maxValue > 999999) {
            maxCeil *= 1;
            this._legendInfo.info1 = 'x1000000'
        } else if (_maxValue > 99999) {
            maxCeil *= 100;
            this._legendInfo.info1 = 'x1000'
        } else if (_maxValue > 9999) {
            maxCeil *= 10;
            this._legendInfo.info1 = 'x1000'
        } else if (_maxValue > 999) {
            maxCeil *= 1000;
            this._legendInfo.info1 = 'x1000'
        } else if (_maxValue > 99) {
            maxCeil *= 100;
            this._legendInfo.info1 = 'x1'
        } else if (_maxValue > 9) {
            maxCeil *= 10;
            this._legendInfo.info1 = 'x1'
        } else {
            maxCeil *= 1;
            this._legendInfo.info1 = 'x1'
        }
    }
    let nextVal = maxCeil;
    for (let i = 1; i < 10; i++) {
        this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
        this._self._canvas.beginPath();
        this._self._canvas.moveTo(this._self._paddingYLeft - 5, i * (this._self._heightCanvas - this._self._paddingXBottom - this._self._paddingXTop) / 10 + this._self._paddingXTop)
        this._self._canvas.lineTo(this._self._widthCanvas - this._self._paddingYRight, i * (this._self._heightCanvas - this._self._paddingXBottom - this._self._paddingXTop) / 10 + this._self._paddingXTop)
        this._self._canvas.lineWidth = this._self._lineXWidth;
        if (this._self._borderColor instanceof Array) {
            this._self._canvas.strokeStyle = `rgba(${this._self._borderColor[0]}, ${this._self._borderColor[1]}, ${this._self._borderColor[2]}, ${this._self._borderOpacity})`
        } else {
            this._self._canvas.strokeStyle = this._self._borderColor
        }
        this._self._canvas.stroke();
        this._self._canvas.resetTransform();
        this._self._canvas.closePath();
        if (_displayY) {
            nextVal -= maxCeil/10;
            this._self._canvas.font = this._self._labelsY.fontSize + 'px Arial';
            this._self._canvas.textAlign = "right";
            this._self._canvas.fillStyle = this._self._labelsY.color;
            this._self._canvas.fillText((nextVal.toFixed(1).replace(/\.0+$/,'')).toString(), this._self._paddingYLeft - 7, i * (this._self._heightCanvas - this._self._paddingXBottom - this._self._paddingXTop) / 10 + this._self._paddingXTop + this._self._labelsY.fontSize / 3)
            this._self._canvas.clearColor;
        }
    }
    for (let i = 1; i < this._configuration.data.labels.length; i++) {
        this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
        this._self._canvas.beginPath();
        this._self._canvas.moveTo(this._self._paddingYLeft + i * (this._self._widthCanvas - this._self._paddingYRight - this._self._paddingYLeft) / this._configuration.data.labels.length, this._self._paddingXTop)
        this._self._canvas.lineTo(this._self._paddingYLeft + i * (this._self._widthCanvas - this._self._paddingYRight - this._self._paddingYLeft) / this._configuration.data.labels.length, this._self._heightCanvas - this._self._paddingXBottom)
        this._self._canvas.lineWidth = this._self._lineXWidth;
        if (this._self._borderColor instanceof Array) {
            this._self._canvas.strokeStyle = `rgba(${this._self._borderColor[0]}, ${this._self._borderColor[1]}, ${this._self._borderColor[2]}, ${this._self._borderOpacity})`
        } else {
            this._self._canvas.strokeStyle = this._self._borderColor
        }
        this._self._canvas.stroke();
        this._self._canvas.resetTransform();
        this._self._canvas.closePath();
    }
};
Bar.prototype.__beforeChanging = function () {
    let [_maxValue] = [
        this._self._result.__max_min_values(this._configuration.data.datasets.data).max
    ];
    // For Getting current Left Padding
    if (this._self._labelsY.display) {
        this._self._canvas.font = this._self._labelsY.fontSize + 'px Arial';
        if (_maxValue.toString().split('').length > 9) {
            this._self._paddingYLeft = this._self._canvas.measureText('00000').width + 10
        } else {
            this._self._paddingYLeft = this._self._canvas.measureText('0000').width + 10
        }
    } else {
        this._self._paddingYLeft = 10
    }
    //_____________________
};
Bar.prototype.__setAxisX = function (_display) {
    this.__setAxisXLine(_display);
    if (_display) {
        this._self._canvas.font = this._self._labelsX.fontSize + 'px Arial';
        let _heightAxis = null;
        if (this._self._labelsX.hasOwnProperty('fontSize')) {
            _heightAxis = this._self._labelsX.fontSize * 2;
            this._self._paddingXBottom = _heightAxis
        } else _heightAxis = this._self._paddingXBottom
        let _canvasBadgeWidth = (this._self._widthCanvas - (this._self._paddingYLeft + this._self._paddingYRight)) / this._configuration.data.labels.length
        this._configuration.data.labels.forEach((_, index) => {
            this._self._canvas.textAlign = "center";
            this._self._canvas.fillStyle = this._self._labelsX.color;
            this._self._canvas.fillText(this._self._result.__fittingString(this._self._canvas, _, _canvasBadgeWidth - 10), (index * _canvasBadgeWidth + this._self._paddingYLeft) + (_canvasBadgeWidth/2), this._self._heightCanvas - ((_heightAxis - _heightAxis / 3) / 2))
            this._self._canvas.clearColor;
        })
    }
};
Bar.prototype.__drawBars = function (onChange) {
    let [_maxHeight, _maxValue] = [
        this._self._heightCanvas - this._self._paddingXBottom,
        this._self._result.__max_min_values(this._configuration.data.datasets.data).max
    ]
    let _canvasBadgeWidth = (this._self._widthCanvas - (this._self._paddingYLeft + this._self._paddingYRight)) / this._configuration.data.labels.length
    const _setProperties = (_index, _x1, _x2, _y1, _y2) => {
        Object.defineProperty(this._barsPositions, _index, {
            value: {
                x1: {x: _x1, y: _y1},
                x2: {x: _x1, y: _y2},
                y1: {x: _x2, y: _y1},
                y2: {x: _x2, y: _y2}
            },
            enumerable: true,
            configurable: true,
            writable: false
        })
    };
    this._configuration.data.labels.forEach((_, index) => {
        this._self._canvas.beginPath();
        this._self._canvas.fillStyle  = this._self.constructor.__drawLineColor(0, 0, 0, this._self._heightCanvas, [this._self._barsColors.one, this._self._barsColors.two, this._self._barsColors.three])
        const _percentage = (this._configuration.data.datasets.data[index].value * 100) / _maxValue
        if (onChange) {
            if (_maxHeight === _maxHeight - Math.round(((_maxHeight - this._self._paddingXTop) * _percentage) / 100)) {
                _setProperties(
                    index,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2 + this._self._bars.width,
                    _maxHeight - 1,
                    _maxHeight
                );
                this._self._canvas.fillRect(index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    _maxHeight,
                    this._self._bars.width,
                    -1)
            } else {
                _setProperties(
                    index,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2 + this._self._bars.width,
                    _maxHeight - Math.round(((_maxHeight - this._self._paddingXTop) * _percentage) / 100),
                    _maxHeight
                );
                this._self._canvas.fillRect(index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    _maxHeight,
                    this._self._bars.width,
                    -((_maxHeight - this._self._paddingXTop) * _percentage) / 100)
            }
        } else {
            let customHeight = 0;
            if (_maxHeight === _maxHeight - Math.round(((_maxHeight - this._self._paddingXTop) * _percentage) / 100)) {
                _setProperties(
                    index,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2 + this._self._bars.width,
                    _maxHeight - 1,
                    _maxHeight
                );
                this._self._canvas.fillRect(index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    _maxHeight,
                    this._self._bars.width,
                    -1)
            } else {
                for (let i = 0; i < Math.round(((_maxHeight - this._self._paddingXTop) * _percentage) / 100); i++) {
                    setTimeout(() => {
                        customHeight++
                        this._self._canvas.fillRect(index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                            _maxHeight,
                            this._self._bars.width,
                            -customHeight)
                    }, 500)
                }
                _setProperties(
                    index,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2,
                    index * _canvasBadgeWidth + this._self._paddingYLeft + (_canvasBadgeWidth - this._self._bars.width) / 2 + this._self._bars.width,
                    _maxHeight - Math.round(((_maxHeight - this._self._paddingXTop) * _percentage) / 100),
                    _maxHeight
                );
            }
        }
        this._self._canvas.closePath();
    })
};
Bar.prototype.__draw = function () {
    this.__beforeChanging();
    this.__setAxisX(this._self._labelsX.display);
    this.__setAxisY(this._self._labelsX.display, this._self._labelsY.display);
    this.__setCoordinatesNet(this._self._labelsY.display);
    this._self._result.__setHeader(this._legendInfo.header);
    this.__drawBars(this.animateBars);
};
Bar.prototype.__update = function () {
    this._self.constructor.__maxValueInit(this._configuration);
    this.__draw();
};
Bar.prototype.__animate = function () {
    this.__update();
    this.animateBars = true;
    // adding tooltip effect for Bar Chart _______________
    let _tooltipElement = null;
    if (this._self._barTooltip) {
        const canvasMove = (e) => {
            if (this._self._barTooltip) {
                let moveBar = false;
                Array.from(Object.keys(this._self._result.bar._barsPositions)).forEach((_, index) => {
                    if (e.offsetX >= this._self._result.bar._barsPositions[_].x1.x &&
                        e.offsetX <= this._self._result.bar._barsPositions[_].y1.x &&
                        e.offsetY >= this._self._result.bar._barsPositions[_].x1.y &&
                        e.offsetY <= this._self._result.bar._barsPositions[_].y2.y) {
                        moveBar = true;
                        let [heightBar, maxHeight, tooltipHeight, tooltipWidth] = [
                            this._self._result.bar._barsPositions[_].x2.y - this._self._result.bar._barsPositions[_].x1.y,
                            this._self._result.bar._barsPositions[_].x2.y,
                            _tooltipElement.getBoundingClientRect().height,
                            _tooltipElement.getBoundingClientRect().width
                        ];
                        let [_top, _left, className] = [0, 0, null];
                        _top = maxHeight - heightBar + this._canvasElement.offsetTop;
                        _left = this._self._result.bar._barsPositions[_].x1.x + this._canvasElement.offsetLeft + this._self._bars.width + 10
                        className = 'to-left';
                        if (heightBar < tooltipHeight) {
                            _top = maxHeight - tooltipHeight + this._canvasElement.offsetTop;
                            className = 'to-left-bottom';
                        }
                        if (this._self._result.bar._barsPositions[_].x1.x + this._self._bars.width + tooltipWidth > this._self._widthCanvas - this._self._paddingYRight) {
                            _left = this._self._result.bar._barsPositions[_].x1.x + this._canvasElement.offsetLeft - tooltipWidth - 10
                            className = (heightBar < tooltipHeight) ? 'to-right-bottom' : 'to-right';
                        }
                        _tooltipElement.setAttribute('id', className);
                        _tooltipElement.innerHTML = `
                                <p>${this._dataChart[Number(_)].text}</p>
                                <p>${this._dataChart[Number(_)].value}</p>
                            `;
                        _tooltipElement.style.cssText = `
                                top: ${_top}px;
                                left: ${_left}px;
                            `;
                        _tooltipElement.style.cssText += 'opacity: 1'
                        _tooltipElement.classList.add('show_tooltip')
                    }
                })
                if (!moveBar) {
                    _tooltipElement.style.cssText += 'opacity: 0'
                    _tooltipElement.classList.remove('show_tooltip')
                }
                /*>>>>> For Setter <<<<<<*/
                this._self._bars.mouseMove.callback = _tooltipElement;
                //_____________
            }
        };
        this._canvasElement.removeEventListener('mousemove', canvasMove, false);
        if (document.querySelector('.tooltip-element-bar')) {
            document.querySelectorAll('.tooltip-element-bar').forEach(_ => _.remove())
        }
        _tooltipElement = document.createElement('DIV');
        _tooltipElement.className = 'tooltip-element-bar'
        this._canvasElement.insertAdjacentElement('afterend', _tooltipElement);
        this._canvasElement.addEventListener('mousemove', canvasMove)
    }
    //______________________________________
};
Bar.prototype.__init = function () {
    setTimeout(() => {
        this.__animate()
    }, 0)
};
const ParametersBar = (_dataChart) => {
    return {
        type: 'bar',
        data: {
            labels: _dataChart.map(_ => _.text),
            datasets: {
                data: _dataChart,
                borderColor: [175, 160, 160],
                borderOpacity: 1
            }
        },
        options: {
            bars: {
                backgroundColors: { one: '#F21103', two: '#F86300', three: '#F7C601'},
                mouseMove: {
                    tooltip: true,
                    set callback (element) {}
                },
                width: 40
            },
            padding: {
                paddingLeft: 70,
                paddingRight: 30,
                paddingBottom: 10
            },
            scales: {
                axisColor: 'rgb(85,72,72)',
                yAxis: {
                    lineWidth: 1,
                    tricks: {
                        labels: {
                            display: true,
                            fontSize: 14,
                            color: 'rgb(35,32,32)'
                        }
                    }
                },
                xAxis: {
                    lineWidth: 1,
                    tricks: {
                        labels: {
                            display: true,
                            fontSize: 14,
                            color: 'rgb(35,32,32)'
                        }
                    }
                }
            }
        }
    }
};

/***/ }),

/***/ "./src/scripts/Line.js":
/*!*****************************!*\
  !*** ./src/scripts/Line.js ***!
  \*****************************/
/*! exports provided: Line, ParametersLine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersLine", function() { return ParametersLine; });
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");


function Line (options, canvas, self, _legendInfo) {
    this._canvasElement   = canvas;
    this._legendInfo      = _legendInfo;
    this._self            = self;
    this._gui             = new dat_gui__WEBPACK_IMPORTED_MODULE_0__["GUI"]({resizable : false});
    const lineFolder      = this._gui.addFolder('Line');
    this._configuration   = options;
    this._data            = this._configuration.data.datasets.data;
    this._points2D        = [];
    this._legends2D       = [];
    this._positionPoints  = [];
    this._positionLine    = [];
    this._lineIndexes     = [];
    this._animationDraw   = true;
    this._clickedLegends  = this._data.map(_ => true);
    this._canvasBadgeWidth= (this._self._widthCanvas - (this._self._paddingYLeftLine + this._self._paddingYRightLine)) / this._configuration.data.labels.length;

    lineFolder.addColor(this._self, '_borderColorLine').name('Border Color')
        .onChange(() => {
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    lineFolder.add(this._self, '_borderOpacityLine', 0, 1).name('Border Opacity')
        .onChange(() => {
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    lineFolder.addColor(this._self, '_axisColorLine').name('Axis Color')
        .onChange(() => {
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    lineFolder.add(this._self, '_axisOpacityLine', 0, 1).name('Axis Opacity')
        .onChange(() => {
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    lineFolder.add(this._self, '_pointTooltip').name(`Point's Tooltip`)
        .onChange(() => {
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    const linesFolder = lineFolder.addFolder('Lines');
    linesFolder.open();
    let TimeoutLineWidth = null;
    linesFolder.add(this._self, '_lineWidth', 1, 3).name('Line Width')
        .onChange(() => {
            if (TimeoutLineWidth) {
                cancelAnimationFrame(this.__update.bind(this))
                clearTimeout(TimeoutLineWidth);
            }
            this._animationDraw = true;
            TimeoutLineWidth = setTimeout(() => {
                requestAnimationFrame(this.__update.bind(this))
            }, 500)
        });
    setTimeout(() => {
        this._self._lineColors.forEach((color, index) => {
            linesFolder.addColor(this._self._lineColors, [index]).name('Line Color ' + (index + 1))
                .onChange(() => {
                    this._animationDraw = false;
                    requestAnimationFrame(this.__update.bind(this))
                });
        })
    }, 100);

    // Sub Folders
    const linesXaxis = lineFolder.addFolder('XAxis');
    linesXaxis.add(this._self._labelsXLine, 'display').name('Display')
        .onChange((e) => {
            xAxisColor.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            xAxisFontSize.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    const xAxisFontSize = linesXaxis.add(this._self._labelsXLine, 'fontSize', 10, 26).name('Font Size');
    xAxisFontSize.onChange(() => {
        this._animationDraw = false;
        requestAnimationFrame(this.__update.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsXLine.display ? 'auto' : 'none'}; opacity: ${this._self._labelsXLine.display ? 1 : 0.5}`);
    const xAxisColor = linesXaxis.addColor(this._self._labelsXLine, 'color').name('Color');
    xAxisColor.onChange(() => {
        this._animationDraw = false;
        requestAnimationFrame(this.__update.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsXLine.display ? 'auto' : 'none'}; opacity: ${this._self._labelsXLine.display ? 1 : 0.5}`);

    const linesYAxis = lineFolder.addFolder('YAxis')
    linesYAxis.add(this._self._labelsYLine, 'display')
        .onChange((e) => {
            yAxisColor.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            yAxisFontSize.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    const yAxisFontSize = linesYAxis.add(this._self._labelsYLine, 'fontSize', 10, 26).name('Font Size');
    yAxisFontSize.onChange(() => {
        this._animationDraw = false;
        requestAnimationFrame(this.__update.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsYLine.display ? 'auto' : 'none'}; opacity: ${this._self._labelsYLine.display ? 1 : 0.5}`);
    const yAxisColor = linesYAxis.addColor(this._self._labelsYLine, 'color').name('Color');
    yAxisColor.onChange(() => {
        this._animationDraw = false;
        requestAnimationFrame(this.__update.bind(this))
    })
        .domElement.parentElement.setAttribute('style', `pointer-events: ${this._self._labelsYLine.display ? 'auto' : 'none'}; opacity: ${this._self._labelsYLine.display ? 1 : 0.5}`);
    const legendBar = lineFolder.addFolder('Legend');
    legendBar.add(this._self, '_legendLine').name('Display')
        .onChange(() => {
            this._animationDraw = false;
            requestAnimationFrame(this.__update.bind(this))
        });
    legendBar.open()
};
Line.prototype.__setCoordinatesNet = function (_displayY) {
    let [_maxValue] = [
        this._self._result.__max_min_values(this._data.flat(Infinity)).max,
        1
    ];
    let maxCeil = Math.ceil(Number(_maxValue.toString().split('')[0] + (_maxValue.toString().split('')[1] | _maxValue.toString().split('')[1]))/10);
    if (this._self._labelsYLine.display) {
        if (_maxValue > 999999999999 || _maxValue === Infinity) {
            maxCeil *= 10000;
            this._legendInfo.info1 = 'x10000000'
        } else if (_maxValue > 999999999) {
            maxCeil *= 1000;
            this._legendInfo.info1 = 'x1000000'
        } else if (_maxValue > 99999999) {
            maxCeil *= 100;
            this._legendInfo.info1 = 'x1000000'
        } else if (_maxValue > 9999999) {
            maxCeil *= 10;
            this._legendInfo.info1 = 'x1000000'
        } else if (_maxValue > 999999) {
            maxCeil *= 1;
            this._legendInfo.info1 = 'x1000000'
        } else if (_maxValue > 99999) {
            maxCeil *= 100;
            this._legendInfo.info1 = 'x1000'
        } else if (_maxValue > 9999) {
            maxCeil *= 10;
            this._legendInfo.info1 = 'x1000'
        } else if (_maxValue > 999) {
            maxCeil *= 1;
            this._legendInfo.info1 = 'x1000'
        } else if (_maxValue > 99) {
            maxCeil *= 100;
            this._legendInfo.info1 = 'x1'
        } else if (_maxValue > 9) {
            maxCeil *= 10;
            this._legendInfo.info1 = 'x1'
        } else {
            maxCeil *= 1;
            this._legendInfo.info1 = 'x1'
        }
    }
    let nextVal = maxCeil;
    for (let i = 1; i < 10; i++) {
        this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
        this._self._canvas.beginPath();
        this._self._canvas.moveTo(this._self._paddingYLeftLine - 5, i * (this._self._heightCanvas - this._self._paddingXBottomLine - this._self._paddingXTopLine) / 10 + this._self._paddingXTopLine)
        this._self._canvas.lineTo(this._self._widthCanvas - this._self._paddingYRightLine, i * (this._self._heightCanvas - this._self._paddingXBottomLine - this._self._paddingXTopLine) / 10 + this._self._paddingXTopLine)
        this._self._canvas.lineWidth = this._self._lineXWidthLine;
        if (this._self._borderColorLine instanceof Array) {
            this._self._canvas.strokeStyle = `rgba(${this._self._borderColorLine[0]}, ${this._self._borderColorLine[1]}, ${this._self._borderColorLine[2]}, ${this._self._borderOpacityLine})`
        } else {
            this._self._canvas.strokeStyle = this._self._borderColorLine
        }
        this._self._canvas.stroke();
        this._self._canvas.resetTransform();
        this._self._canvas.closePath();
        if (_displayY) {
            nextVal -= maxCeil/10;
            this._self._canvas.font = this._self._labelsYLine.fontSize + 'px Arial';
            this._self._canvas.textAlign = "right";
            this._self._canvas.fillStyle = this._self._labelsYLine.color;
            this._self._canvas.fillText((nextVal.toFixed(1).replace(/\.0+$/,'')).toString(), this._self._paddingYLeftLine - 7, i * (this._self._heightCanvas - this._self._paddingXBottomLine - this._self._paddingXTopLine) / 10 + this._self._paddingXTopLine + this._self._labelsYLine.fontSize / 3)
            this._self._canvas.clearColor;
        }
    }
    for (let i = 1; i < this._configuration.data.labels.length; i++) {
        this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
        this._self._canvas.beginPath();
        this._self._canvas.moveTo(this._self._paddingYLeftLine + i * (this._self._widthCanvas - this._self._paddingYRightLine - this._self._paddingYLeftLine) / this._configuration.data.labels.length, this._self._paddingXTopLine)
        this._self._canvas.lineTo(this._self._paddingYLeftLine + i * (this._self._widthCanvas - this._self._paddingYRightLine - this._self._paddingYLeftLine) / this._configuration.data.labels.length, this._self._heightCanvas - this._self._paddingXBottomLine)
        this._self._canvas.lineWidth = this._self._lineXWidthLine;
        if (this._self._borderColorLine instanceof Array) {
            this._self._canvas.strokeStyle = `rgba(${this._self._borderColorLine[0]}, ${this._self._borderColorLine[1]}, ${this._self._borderColorLine[2]}, ${this._self._borderOpacityLine})`
        } else {
            this._self._canvas.strokeStyle = this._self._borderColorLine
        }
        this._self._canvas.stroke();
        this._self._canvas.resetTransform();
        this._self._canvas.closePath();
    }
};
Line.prototype.__setAxisYLine = function (_displayX) {
    this._self._canvas.beginPath();
    this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
    let _heightAxis = null;
    if (this._self._labelsXLine.hasOwnProperty('fontSize') && _displayX) {
        _heightAxis = this._self._labelsXLine.fontSize * 2;
        this._self._paddingXBottomLine = _heightAxis
    } else _heightAxis = this._self._paddingXBottomLine;
    this._self._lineXWidthLine && (
        this._self._canvas.moveTo(this._self._paddingYLeftLine, this._self._heightCanvas - _heightAxis),
            this._self._canvas.lineTo(this._self._paddingYLeftLine, this._self._paddingXTopLine),
            this._self._canvas.lineWidth = this._self._lineYWidthLine
    );
    if (this._self._axisOpacityLine !== 1) {
        this._self._canvas.strokeStyle = this._self._axisColorLine.replace(')', ', ' + this._self._axisOpacityLine + ')').replace('rgb', 'rgba')
    } else {
        this._self._canvas.strokeStyle = this._self._axisColorLine
    }
    this._self._canvas.stroke();
    this._self._canvas.closePath();
    this._self._canvas.resetTransform()
};
Line.prototype.__setAxisXLine = function (_display) {
    this._self._canvas.beginPath();
    this._self._canvas.setTransform(1, 0, 0, 1, 0.5, 0.5);
    this._self._paddingXBottomLine = this._self._labelsXLine.display ? this._self._paddingXBottomLine: 10;
    let _heightAxis = null;
    if (this._self._labelsXLine.hasOwnProperty('fontSize') && _display) {
        _heightAxis = this._self._labelsXLine.fontSize * 2;
        this._self._paddingXBottomLine = _heightAxis
    } else _heightAxis = this._self._paddingXBottomLine;
    this._self._lineXWidthLine && (
        this._self._canvas.moveTo(this._self._paddingYLeftLine, this._self._heightCanvas - _heightAxis),
            this._self._canvas.lineTo(this._self._widthCanvas - this._self._paddingYRightLine, this._self._heightCanvas - _heightAxis),
            this._self._canvas.lineWidth = this._self._lineYWidthLine
    );
    if (this._self._axisOpacityLine !== 1) {
        this._self._canvas.strokeStyle = this._self._axisColorLine.replace(')', ', ' + this._self._axisOpacityLine + ')').replace('rgb', 'rgba')
    } else {
        this._self._canvas.strokeStyle = this._self._axisColorLine
    }
    this._self._canvas.stroke();
    this._self._canvas.closePath();
    this._self._canvas.resetTransform()
};
Line.prototype.__beforeChanging = function () {
    if (this._self._legendLine) {
        this._self._paddingXTopLine = 30
    } else {
        this._self._paddingXTopLine = 10
    }

    let [_maxValue] = [
        this._self._result.__max_min_values(this._data.flat(Infinity)).max
    ];
    // For Getting current Left Padding
    if (this._self._labelsYLine.display) {
        this._self._canvas.font = this._self._labelsYLine.fontSize + 'px Arial';
        if (_maxValue.toString().split('').length > 9) {
            this._self._paddingYLeftLine = this._self._canvas.measureText('0000').width + 10
        } else {
            this._self._paddingYLeftLine = this._self._canvas.measureText('000').width + 10
        }
    } else {
        this._self._paddingYLeftLine = 10
    }
    //_____________________
};
Line.prototype.__setAxisX = function (_display) {
    this.__setAxisXLine(_display);
    if (_display) {
        this._self._canvas.font = this._self._labelsXLine.fontSize + 'px Arial';
        let _heightAxis = null;
        if (this._self._labelsXLine.hasOwnProperty('fontSize')) {
            _heightAxis = this._self._labelsXLine.fontSize * 2;
            this._self._paddingXBottomLine = _heightAxis
        } else _heightAxis = this._self._paddingXBottomLine;
        let _canvasBadgeWidth = (this._self._widthCanvas - (this._self._paddingYLeftLine + this._self._paddingYRightLine)) / this._configuration.data.labels.length;
        this._configuration.data.labels.forEach((_, index) => {
            this._self._canvas.textAlign = "center";
            this._self._canvas.fillStyle = this._self._labelsXLine.color;
            this._self._canvas.fillText(this._self._result.__fittingString(this._self._canvas, _, _canvasBadgeWidth - 10), (index * _canvasBadgeWidth + this._self._paddingYLeftLine) + (_canvasBadgeWidth/2), this._self._heightCanvas - ((_heightAxis - _heightAxis / 3) / 2))
            this._self._canvas.clearColor;
        })
    }
};
Line.prototype.__setAxisY = function (_displayX, _displayY) {
    this.__setAxisYLine(_displayX);
    if (_displayY) {
        this._self._canvas.font = this._self._labelsYLine.fontSize + 'px Arial';
        this._self._canvas.textAlign = "right";
        this._self._canvas.fillStyle = this._self._labelsYLine.color;
        this._self._canvas.fillText('0', this._self._paddingYLeftLine - 7, this._self._heightCanvas - this._self._paddingXBottomLine);
        this._self._canvas.clearColor;
    }
};
Line.prototype.__getPositionPoints = function () {
    const _maxPoint = Math.max.apply(Math, this._data.flat(Infinity).map(function(o) { return o.value; }));
    this._data.map((elem, index) => {
        this._lineIndexes.push(0);
        if (this._clickedLegends[index]) {
            this._positionPoints[index] = [];
            for (let i = 0; i < elem.length; i++) {
                const _point = new Path2D();
                const _x = (i * this._canvasBadgeWidth + this._self._paddingYLeftLine) + (this._canvasBadgeWidth / 2);
                const _y = this._self._heightCanvas - this._self._paddingXBottomLine - ((this._self._heightCanvas - this._self._paddingXBottomLine - this._self._paddingXTopLine) * elem[i].value * 100 / _maxPoint) / 100;
                _point.arc(_x, _y, this._self._lineWidth * 1.5, 0, 2 * Math.PI);
                this._positionPoints[index].push({x: _x, y: _y});
                this._self._canvas.fillStyle = this._self._lineColors[index];
                this._self._canvas.fill(_point);
                this._points2D.push({
                    x: _x,
                    y: _y,
                    point: _point
                });
            }
        }
    })
};
Line.prototype.__drawLine = function (indexMain) {
    this._lineIndexes[indexMain]++;
    this._self._canvas.beginPath();
    this._self._canvas.lineWidth = this._self._lineWidth;
    this._self._canvas.moveTo(this._positionLine[indexMain].x[this._lineIndexes[indexMain] - 1], this._positionLine[indexMain].y[this._lineIndexes[indexMain] - 1]);
    this._self._canvas.lineTo(this._positionLine[indexMain].x[this._lineIndexes[indexMain]], this._positionLine[indexMain].y[this._lineIndexes[indexMain]]);
    this._self._canvas.strokeStyle = this._self._lineColors[indexMain];
    this._self._canvas.stroke();
    if (this._lineIndexes[indexMain] > this._positionLine[indexMain].x.length - 1) {
        cancelAnimationFrame(this.__drawLine.bind(this));
    } else {
        requestAnimationFrame(this.__drawLine.bind(this, indexMain));
    }

};
Line.prototype.__drawLegend = function () {
    if (this._self._legendLine) {
        this._self._canvas.font = '13px Arial';
        let _fakeIndex = -1;
        const _cx = (this._self._widthCanvas - this._self._paddingYLeftLine - this._self._paddingYRightLine) / 2 + this._self._paddingYLeftLine;
        let _mainRowWidth = 0;
        this._legendInfo['keys'].forEach((items, ind)=> {
            let _x = ind === 0 ? -10 : 25;
            _mainRowWidth += this._self._canvas.measureText(items.toString()).width + _x;
        });
        this._legendInfo['keys'].map((text, ind) => {
            _fakeIndex++;
            let _everyX = 0;
            let _everyItemX = 0;
            for (let i = 0; i < ind; i++) {
                _everyItemX+=this._self._canvas.measureText(this._legendInfo['keys'][i].toString()).width + 25;
            }
            _everyX = ind === 0 ? 0 : _everyItemX;

            const [_x, _y] = [_cx - (_mainRowWidth / 2 - _everyX ), this._self._paddingXTopLine - 10];
            let _legend2D = new Path2D();
            // Overline
            if (!this._clickedLegends[ind]) {
                this._self._canvas.beginPath();
                this._self._canvas.moveTo(_x, _y - 5);
                this._self._canvas.lineTo(_x + this._self._canvas.measureText(text.toString()).width, _y - 5);
                this._self._canvas.globalAlpha = 1;
                this._self._canvas.lineWidth = 2;
                this._self._canvas.strokeStyle = this._self._labelsX.color;
                this._self._canvas.stroke();
                this._self._canvas.closePath();
            }
            //~~~~~~~~~~

            this._self._canvas.beginPath();
            this._self._canvas.rect(_x - 15, _y - 10, 10, 10);
            this._self._canvas.fillStyle = this._self._lineColors[_fakeIndex];
            this._self._canvas.globalAlpha = 1;
            this._self._canvas.fill();
            this._self._canvas.clearColor;
            this._self._canvas.closePath();

            this._self._canvas.beginPath();
            this._self._canvas.fillStyle = this._self._labelsX.color;
            this._self._canvas.textAlign = 'left';
            this._self._canvas.fillText(text.toString(), _x, _y);
            this._self._canvas.closePath();

            this._self._canvas.beginPath();
            _legend2D.rect(_x - 15, _y - 10, this._self._canvas.measureText(text.toString()).width + 15, 10);
            this._self._canvas.strokeStyle = 'transparent';
            this._self._canvas.stroke(_legend2D);
            this._legends2D.push({
                x: _x - 15,
                y: _y - 10,
                key: ind,
                width: this._self._canvas.measureText(text.toString()).width + 15,
                point: _legend2D
            });
        });
    }
};
Line.prototype.__draw = function () {
    this._positionPoints = [];
    this._lineIndexes = [];
    this._legends2D = [];
    this._points2D = [];
    const _everyStep = this._animationDraw ? 20 : 1;
    this.__beforeChanging();
    this.__setAxisX(this._self._labelsXLine.display);
    this.__setAxisY(this._self._labelsXLine.display, this._self._labelsYLine.display);
    this.__getPositionPoints();
    this.__setCoordinatesNet(this._self._labelsYLine.display);
    this.__drawLegend();
    this._data.forEach((_, indexMain) => {
        if (this._clickedLegends[indexMain]) {
            this._positionLine[indexMain] = {
                x: [],
                y: []
            };
            this._positionPoints[indexMain].map((elem, index) => {
                if (index < this._positionPoints[indexMain].length - 1) {
                    const _height = this._positionPoints[indexMain][index + 1].y - elem.y;
                    const _width = this._positionPoints[indexMain][index + 1].x - elem.x;
                    let _heightLoop = elem.y - _height / _everyStep;
                    let _widthLoop = elem.x - _width / _everyStep;
                    for (let i = 0; i < _everyStep; i++) {
                        _heightLoop += _height / _everyStep;
                        _widthLoop += _width / _everyStep;
                        this._positionLine[indexMain].y.push(_heightLoop);
                        this._positionLine[indexMain].x.push(_widthLoop)
                    }
                } else {
                    this._positionLine[indexMain].y.push(this._positionPoints[indexMain][index].y);
                    this._positionLine[indexMain].x.push(this._positionPoints[indexMain][index].x)
                }
            });
            if (this._animationDraw) {
                this.__drawLine(indexMain);
            } else {
                this._positionPoints[indexMain].map((elem, index) => {
                    if (index < this._positionPoints[indexMain].length - 1) {
                        this._self._canvas.beginPath();
                        this._self._canvas.lineWidth = this._self._lineWidth;
                        this._self._canvas.moveTo(this._positionLine[indexMain].x[index], this._positionLine[indexMain].y[index]);
                        this._self._canvas.lineTo(this._positionLine[indexMain].x[index + 1], this._positionLine[indexMain].y[index + 1]);
                        this._self._canvas.strokeStyle = this._self._lineColors[indexMain];
                        this._self._canvas.stroke();
                    }
                });
            }
        }
    })
};
Line.prototype.__tooltip = function (x, y, data) {
    this._self._canvas.font = '13px Arial';
    const _width = this._self._canvas.measureText(data).width + 20;
    this._self._canvas.beginPath();
    this._self._canvas.rect(x - _width / 2, y - 28, _width, 20);
    this._self._canvas.fillStyle = 'rgb(20, 17, 17)';
    this._self._canvas.fill();
    this._self._canvas.clearColor;
    this._self._canvas.textAlign = "left";
    this._self._canvas.fillStyle = '#fff';
    this._self._canvas.fillText(data, x - _width / 2 + 10, y - 14);
    this._self._canvas.closePath();
};
Line.prototype.__update = function () {
    let years = this._data.map((year, index) => {
        return this._clickedLegends[index] ? this._legendInfo.keys[index] : ''
    });
    this._self._result.__setHeader(this._legendInfo.header + years.join(' '));
    this._self.constructor.__maxValueInit(this._configuration);
    this.__draw(this._data)
};
Line.prototype.__initL = async function () {
    setTimeout(() => {
        this._data.forEach(() => {
            this._self._lineColors.push(this._self._result.__getRandomColor())
        });
        this.__update();
        this._canvasElement.addEventListener('click', (event) => {
            this._legends2D.forEach((path2D, index) => {
                if (this._self._canvas.isPointInPath(path2D.point, event.offsetX, event.offsetY)) {
                    this._animationDraw = false;
                    this._clickedLegends[index] = !this._clickedLegends[index];
                    this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
                    this.__update();
                }
            })
        });
        let isPointAreaIndex = null;
        let isPointArea = false;
        this._canvasElement.addEventListener('mousemove', (event) => {
            // Legends hover pointer
            let isLegendPosition = true;
            this._legends2D.forEach((path2D, index) => {
                if (this._self._canvas.isPointInPath(path2D.point, event.offsetX, event.offsetY)) {
                    this._canvasElement.style.cursor = 'pointer';
                    isLegendPosition = false;
                }
                if (isLegendPosition) {
                    this._canvasElement.style.cursor = 'default';
                }
            });

            if (this._self._pointTooltip) {
                this._points2D.forEach((path2D, index) => {
                    if (this._self._canvas.isPointInPath(path2D.point, event.offsetX, event.offsetY)) {
                        this._canvasElement.style.cursor = 'pointer';
                        isPointArea = true;
                        this._animationDraw = false;
                        isPointAreaIndex = index;
                        this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
                        this.__draw();
                        this.__tooltip(event.offsetX, event.offsetY, this._data[~~(index / this._positionPoints[0].length)][index - (~~(index / this._positionPoints[0].length)) * this._positionPoints[0].length].value);
                        this._self._canvas.beginPath();
                        this._self._canvas.arc(path2D.x, path2D.y, 5, 0, 2 * Math.PI)
                        this._self._canvas.fillStyle = this._self._lineColors[~~(index / this._positionPoints[0].length)];
                        this._self._canvas.fill();
                        this._self._canvas.closePath();
                    }
                });
                if (isPointAreaIndex !== null && isPointArea && !this._self._canvas.isPointInPath(this._points2D[isPointAreaIndex].point, event.offsetX, event.offsetY)){
                    this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
                    this._animationDraw = false;
                    this.__draw();
                    isPointArea = false;
                    this._canvasElement.style.cursor = 'default';
                }
            }
        })
    }, 0)
};
const ParametersLine = (_dataChart, _legendInfo) => {
    const _dataLine = [];
    _legendInfo.keys.map(_ =>
        _dataLine.push(_dataChart[_]));
    return {
        type: 'line',
        data: {
            labels: _dataChart[_legendInfo.info2].map(_ => _.text),
            datasets: {
                data: _dataLine,
            }
        },
        options: {
            lineColors: [],
            legend: true,
            lineWidth: 1.5,
            points: {
                mouseMove: {
                    tooltip: true,
                    set callback (element) {}
                },
            },
            padding: {
                paddingLeft: 70,
                paddingRight: 30,
                paddingTop: 10,
                paddingBottom: 10
            },
            scales: {
                axisColor: 'rgb(85,72,72)',
                yAxis: {
                    lineWidth: 1,
                    tricks: {
                        labels: {
                            display: true,
                            fontSize: 14,
                            color: 'rgb(35,32,32)'
                        }
                    }
                },
                xAxis: {
                    lineWidth: 1,
                    tricks: {
                        labels: {
                            display: true,
                            fontSize: 14,
                            color: 'rgb(35,32,32)'
                        }
                    }
                }
            }
        }
    }
};

/***/ }),

/***/ "./src/scripts/Pie.js":
/*!****************************!*\
  !*** ./src/scripts/Pie.js ***!
  \****************************/
/*! exports provided: Pie, ParametersPie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pie", function() { return Pie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersPie", function() { return ParametersPie; });
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");


function Pie (canvas, self, _legendInfo, dataChart) {
    this._canvasElement  = canvas;
    this._dataChart      = dataChart;
    this._legendInfo     = _legendInfo;
    this._self           = self;
    this._gui            = new dat_gui__WEBPACK_IMPORTED_MODULE_0__["GUI"]({resizable : false});
    this._values         = [];
    this._radius         = 150;
    this._colors         = [];
    this._angles         = {
        begin:[],
        end:[]
    };
    this._betweenAngles  = [];
    this._totalValues    = 0;
    this._labels         = [];
    this._legendSize     = null;
    this._cx             = this._radius;
    this._cy             = this._radius;
    this._dataChart.map(_ => {
        this._labels.push(_.text);
        this._values.push(_.value);
        this._totalValues += _.value
    });
    [this._divider, this._dividerText] = this._self.constructor.__valuesIntegration(this._values);
    this._pieParts       = [];
    this._labelsPosition = [];
    this._prevId         = null;
    this._prevColor      = null;

    const _pieFolder     = this._gui.addFolder('Pie');
    _pieFolder.add(self, '_lineWidth_pie', 0.1, 3).name('Space of Pies')
        .onChange(() => {
            this._pieParts.map(_class => {
                _class.__draw()
            })
        });
    const _legends = _pieFolder.addFolder('Legends');
    _legends.add(this._self._legends_pie, 'display').name('Display')
        .onChange((e) => {
            _legendsPosition.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            this.__init()
        });
    let fakePosition = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };
    fakePosition[this._self._legends_position_pie] = true;
    const _legendsPosition = _legends.addFolder('Position');
    _legendsPosition.add(fakePosition, 'top').name('Top').listen()
        .onChange((e) => {
            setChecked("top");
            if (e) {
                this._self._legends_position_pie = 'top'
                this.__init()
            }
        });
    _legendsPosition.add(fakePosition, 'left').name('Left').listen()
        .onChange((e) => {
            setChecked("left");
            if (e) {
                this._self._legends_position_pie = 'left'
                this.__init()
            }
        });
    _legendsPosition.add(fakePosition, 'bottom').name('Bottom').listen()
        .onChange((e) => {
            setChecked("bottom");
            if (e) {
                this._self._legends_position_pie = 'bottom'
                this.__init()
            }
        });
    _legendsPosition.add(fakePosition, 'right').name('Right').listen()
        .onChange((e) => {
            setChecked("right");
            if (e) {
                this._self._legends_position_pie = 'right'
                this.__init()
            }
        });
    function setChecked( prop ){
        for (let param in fakePosition){
            fakePosition[param] = false;
        }
        fakePosition[prop] = true;
    }
    _pieFolder.add(self, '_onHover_pie').name('Hover Pie')
        .onChange(() => {
            this._pieParts.map(_class => {
                _class.__draw()
            })
        });
    _pieFolder.add(self, '_tooltip_pie').name('Hover Tooltip')
        .onChange(() => {
            this._pieParts.map(_class => {
                _class.__draw()
            })
        });
}
Pie.prototype.__findPointOnCircle = function (originX, originY , radius, angleRadians) {
    const destX = radius * Math.cos(angleRadians) + originX;
    const destY = radius * Math.sin(angleRadians) + originY;
    return {x : destX, y : destY}
};
Pie.prototype.__generatePieAngles = function (count) {
    if (count === 0) {
        this._angles.begin.push(0)
        this._angles.end.push(+(Math.PI * 2) * (this._values[0] / this._totalValues).toFixed(4))
    } else {
        this._angles.begin.push((() =>  {
            let a = 0;
            a += +(this._angles.begin[count - 1] + (Math.PI * 2) * (this._values[count - 1] / this._totalValues)).toFixed(4);
            return a
        })());
        this._angles.end.push((() =>  {
            let a = 0;
            a += +(this._angles.end[count -1] + (Math.PI * 2) * (this._values[count] / this._totalValues)).toFixed(4);
            return a
        })())
    }
};
/*****this one is one of the some animation examples (from arc to center)*****/
Pie.prototype.__movingPies = function () {
    const _newCoords = this.__findPointOnCircle(
        this._cx,
        this._cy,
        this._radius / 2, /*distance from center*/
        this._angles.begin[index]+(this._angles.end[index]-this._angles.begin[index])/2);
    const _everyX = Math.cos(this._angles.begin[index]+(this._angles.end[index]-this._angles.begin[index])/2);
    const _everyY = Math.sin(this._angles.begin[index]+(this._angles.end[index]-this._angles.begin[index])/2);
    let _movingX = _newCoords.x;
    let _movingY = _newCoords.y;

    /******this code should be only in the singlePie prototype***/
    // if (Math.round(this.movingX) === this._self._widthCanvas / 2 && Math.round(this.movingY) === this._self._heightCanvas / 2) {
    //     window.clearInterval($interval);
    // } else {
    //     this._opacity += this._opacity > 1 ? 0: 0.07;
    //     if (this.movingX < this._cx) {
    //         this.movingX+=Math.abs(this.everyX);
    //     } else {
    //         this.movingX-=this.everyX;
    //     }
    //     if (this.movingY < this._cy) {
    //         this.movingY+=Math.abs(this.everyY);
    //     } else {
    //         this.movingY-=this.everyY;
    //     }
    //     this.color = this._self._result.__convertHex(color, this._opacity);
    //     this.__draw()
    // }
};
Pie.prototype.__clearCircle = function (context, x, y, radius) {
    context.save();
    context.beginPath();
    context.arc(x, y, radius, 0, 2*Math.PI, true);
    context.clip();
    context.clearRect(x-radius,y-radius,radius*2,radius*2);
    context.restore();
};
function SinglePies (self, _x, _y, everyAngle, startAngle, endAngle, radius, color, index, hoverColor) {
    this._self          = self;
    this._everyAngle    = everyAngle;
    this._endAngle      = endAngle;
    this._x             = _x;
    this._y             = _y;
    this._startAngle    = startAngle;
    this._limitAngle    = startAngle;
    this._index         = index;
    this._radius        = radius;
    this._color         = color;
    this._leaveColor    = color;
    this._hoverColor    = hoverColor;
}
SinglePies.prototype.__update = function () {
    const $interval = window.setInterval(() => {
        this._limitAngle+= +this._everyAngle;
        if (+this._limitAngle.toFixed(4) >= +this._endAngle.toFixed(4)) {
            this._limitAngle = +this._endAngle.toFixed(4);
            window.clearInterval($interval);
            this.__draw();
        } else {
            this.__draw()
        }
    }, 30);
};
SinglePies.prototype.__tooltip = function (x, y, widthText, widthValue, text, values, quadroFill) {
    this._self._canvas.beginPath();
    this._self._canvas.rect(x, y, widthText + widthValue, 18);
    this._self._canvas.fillStyle = 'rgb(0,0,0)';
    this._self._canvas.globalAlpha = .8
    this._self._canvas.fill();
    this._self._canvas.strokeStyle = '#fff';
    this._self._canvas.fillStyle = '#fff';
    this._self._canvas.fillText(this._self._result.__fittingString(this._self._canvas, text + ' ' + values, widthText + widthValue), x + 20, y + 12);
    this._self._canvas.clearColor;
    this._self._canvas.stroke();
    this._self._canvas.closePath();

    this._self._canvas.beginPath();
    this._self._canvas.lineWidth = 2;
    this._self._canvas.rect(x + 5, y + 4, 10, 10);
    this._self._canvas.fillStyle = quadroFill;
    this._self._canvas.globalAlpha = 1;
    this._self._canvas.fill();
    this._self._canvas.closePath();
};
SinglePies.prototype.__draw = function () {
    this._self._canvas.fillStyle = this._color;
    this._self._canvas.lineWidth = this._self._lineWidth_pie;

    this._self._canvas.moveTo(this._x, this._y);
    this._self._canvas.arc(this._x, this._y, this._radius / 2, this._startAngle, this._limitAngle, false);
    this._self._canvas.lineTo(this._x, this._y);

    this._self._canvas.beginPath();
    this._self._canvas.moveTo(this._x, this._y);
    this._self._canvas.arc(this._x, this._y, this._radius, this._startAngle, this._limitAngle, false);
    this._self._canvas.lineTo(this._x, this._y);
    this._self._canvas.fill('evenodd');
    this._self._canvas.strokeStyle = '#fff';
    this._self._canvas.stroke();
    this._self._canvas.beginPath();
    this._self._canvas.save();
    this._self._canvas.translate(this._x, this._y);
    this._self._canvas.restore();
};
Pie.prototype.__pointInCircleSQRT = function (x, y, cx, cy, radius) {
    const distSq = Math.sqrt((x - cx) * (x - cx) + (y - cy) * (y - cy));
    return distSq <= radius;
};
Pie.prototype.__mouseEnterArea = function (realAngle, _index, _hint, _constructor, type, _condition, _legendsDisplay) {
    if (_constructor._prevId !== 'arc_' + _index) {
        _constructor._prevColor = _constructor[_hint][+('arc_' + _index).split('_')[1]]._color;
        if (this._self['_onHover_' + type]) {
            _constructor[_hint][+('arc_' + _index).split('_')[1]]._color = _constructor[_hint][+('arc_' + _index).split('_')[1]]._hoverColor;
            _constructor[_hint][+('arc_' + _index).split('_')[1]].__draw();
            if (_constructor._prevId) {
                _constructor[_hint][+_constructor._prevId.split('_')[1]]._color = _constructor[_hint][+_constructor._prevId.split('_')[1]]._leaveColor;
                _constructor[_hint][+_constructor._prevId.split('_')[1]].__draw();
            }
        }
        const MesureText = (arr, _index, type) => {
            if (type === 'integer') {
                let text = _constructor._divider ? Math.round(arr[_index] / _constructor._divider) + ' ' + _constructor._dividerText : arr[_index];
                return {
                    text: text,
                    width : this._self._canvas.measureText(text).width > (2 * _constructor._radius) - 40
                        ? (2 * _constructor._radius) - 40 : this._self._canvas.measureText(text).width
                }
            } else {
                return {
                    text: arr[_index],
                    width: this._self._canvas.measureText(arr[_index]).width > (2 * _constructor._radius) - 40
                        ? (2 * _constructor._radius) - 40 : this._self._canvas.measureText(arr[_index]).width + 30
                }
            }
        };
        //Rendering if tooltip is true
        if (this._self['_tooltip_' + type]) {
            let _angle = (_constructor._betweenAngles[_index][0] + _constructor._betweenAngles[_index][1]) / 2;
            this._self._canvas.font = '11px Arial';
            this._self._canvas.textAlign = 'left';
            const tooltipX = _constructor._cx + Math.cos(_angle) * _constructor[_hint][_index]._radius / 2 - MesureText(_constructor._labels, _index, 'string').width / 2;
            const tooltipY = _constructor._cy + Math.sin(_angle) * _constructor[_hint][_index]._radius / 2 - 10;
            this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
            type === 'polar' && _constructor.__drawNet();
            _constructor[_hint].map(_class => {
                _class.__draw()
            });
            this._self._canvas.save();
            _constructor[_hint][+('arc_' + _index).split('_')[1]].__tooltip(
                tooltipX,
                tooltipY,
                MesureText(_constructor._labels, _index, 'string').width,
                MesureText(_constructor._values, _index, 'integer').width,
                MesureText(_constructor._labels, _index, 'string').text,
                MesureText(_constructor._values, _index, 'integer').text,
                _constructor._prevColor
            );
            this._self._canvas.restore();
            _legendsDisplay.display && this.__generateLabelsAfterClearing(this, _condition);
        }
        //_____________
    }
    _constructor._prevId = 'arc_' + _index;
};
Pie.prototype.__mouseLeaveArea = function (_constructor, _hint, _condition, type, _legendsDisplay) {
    this._canvasElement.style.cursor = 'default';
    if (_constructor._prevId) {
        this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
        type === 'polar' && _constructor.__drawNet();
        _constructor[_hint][+_constructor._prevId.split('_')[1]]._color = _constructor._prevColor;
        _constructor[_hint].map(_class => {
            _class.__draw()
        });
        _legendsDisplay.display && this.__generateLabelsAfterClearing(this, _condition);
    }
    _constructor._prevId = null
};
Pie.prototype.__generateLabelsAfterClearing = function (_constructor, _condition) {
    _constructor._legendSize = 13;
    if (_condition === 'top') {
        this.__drawLegendsByPositionVertical(_constructor,'top');
    } else if (_condition === 'bottom') {
        this.__drawLegendsByPositionVertical(_constructor,'bottom');
    } else if (_condition === 'right') {
        this.__drawLegendsByPositionHorizontal(_constructor,'right');
    } else if (_condition === 'left') {
        this.__drawLegendsByPositionHorizontal(_constructor, 'left');
    }
};
Pie.prototype. __drawLegendsByPositionVertical = function (_constructor, position) {
    _constructor._labelsPosition = [];
    let _topCY = 0;
    _constructor._cx = this._self._widthCanvas / 2;
    this._self._canvas.font = this._legendSize + 'px Arial';
    let _levels = [[]];
    let _levelsCount = 0;
    let _mainRowWidth = [0];
    _constructor._labels.map((item, index) => {
        let _x = index === 0 ? 15 : 25;
        if (_constructor._labels[index + 1] && _mainRowWidth[_levelsCount] + this._self._canvas.measureText(_constructor._labels[index + 1]).width + _x > 2 * _constructor._radius) {
            _levelsCount++;
            _mainRowWidth[_levelsCount] = 0;
            _levels[_levelsCount] = [];
            _x = 15;
        }
        _mainRowWidth[_levelsCount]+=this._self._canvas.measureText(_constructor._labels[index]).width + _x;
        _levels[_levelsCount].push(item);
    });
    let _fakeIndex = -1;
    _levels.forEach((items, index) => {
        items.map((text, ind) => {
            _fakeIndex++;
            let _everyX = 0;
            for (let i = 0; i <= ind; i++) {
                let _x = i === 0 ? 15 : 25;
                _everyX+=this._self._canvas.measureText(items[i]).width + _x;
            }
            const [_x, _y] = [_constructor._cx - (_mainRowWidth[index] / 2 - (_everyX - this._self._canvas.measureText(text).width)),
                (25 * (index + 1) + _constructor._legendSize) +
                ((position === 'bottom') ? 2 * _constructor._radius + _constructor._legendSize : 0)];
            this._self._canvas.beginPath();
            this._self._canvas.lineWidth = 2;
            this._self._canvas.rect(_x - 15, _y - 10, 10, 10);
            this._self._canvas.fillStyle = _constructor._colors[_fakeIndex];
            this._self._canvas.globalAlpha = 1;
            this._self._canvas.fill();
            this._self._canvas.closePath();

            this._self._canvas.fillStyle = '#000';
            _constructor._labelsPosition.push({left: _x - 15, top: _y - _constructor._legendSize, width: this._self._canvas.measureText(text).width + 15});
            this._self._canvas.fillText(text, _x, _y);
        })
        if (position === 'top') _topCY = 25 * (index + 1) + _constructor._legendSize + 20/* just paddingTop 20px */
        else _topCY = 20/* just paddingTop 20px */
    });
    this._cy = _topCY + this._radius;
};
Pie.prototype.__drawLegendsByPositionHorizontal = function (_constructor, position) {
    _constructor._labelsPosition = [];
    _constructor._cy = this._self._heightCanvas / 2;
    this._self._canvas.font = _constructor._legendSize + 'px Arial';
    let _mainLabelsHeight = 0;
    let _widthTexts = [];
    let _cx = null;
    _constructor._labels.map(_ => {
        _mainLabelsHeight+=_constructor._legendSize + 10;
        _widthTexts.push(this._self._canvas.measureText(_).width + 15)
    });
    if (position === 'right') {
        _cx = this._self._widthCanvas / 2 - (25 + Math.max(..._widthTexts) / 2)
    } else if (position === 'left') {
        _cx = this._self._widthCanvas / 2 + (25 + Math.max(..._widthTexts) / 2)
    }
    const _beginY = this._self._heightCanvas / 2 - _mainLabelsHeight / 2;
    _constructor._labels.map((item, index) => {
        const [_x, _y] = [
            position === 'left' ? (_cx - (_constructor._radius + Math.max(..._widthTexts) + 30)) : _cx + (_constructor._radius + 60/* + 15 for square width */),
            _beginY + (index + 1) * (_constructor._legendSize + 10)];
        this._self._canvas.beginPath();
        this._self._canvas.lineWidth = 2;
        this._self._canvas.rect(_x - 15, _y - 10, 10, 10);
        this._self._canvas.fillStyle = _constructor._colors[index];
        this._self._canvas.globalAlpha = 1;
        this._self._canvas.fill();
        this._self._canvas.closePath();
        _constructor._labelsPosition.push({left: _x - 15, top: _y - _constructor._legendSize, width: this._self._canvas.measureText(item).width + 15});
        this._self._canvas.fillStyle = '#000';
        this._self._canvas.fillText(item, _x, _y);
    });
    _constructor._cx = _cx;
};
Pie.prototype.__init = async function () {
    this._pieParts = [];
    this._betweenAngles = [];
    this._labelsPosition = [];
    this._colors = [];
    this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
    await setTimeout(() => {
        this._self._result.__setHeader(this._legendInfo.header)
        this._labels.map(_j => this._colors.push(this._self._result.__getRandomColor()));
        (() => {
            if (this._self._legends_pie.display) {
                this.__generateLabelsAfterClearing(this, this._self._legends_position_pie);
            } else {
                this._cx = this._self._widthCanvas / 2;
                this._cy = this._self._heightCanvas / 2;
            }
        })();
        this._values.forEach((_, index)=> {
            this.__generatePieAngles(index);
            this._betweenAngles.push([this._angles.begin[index], this._angles.end[index]]);
            this._pieParts.push(new SinglePies(
                this._self,
                this._cx, this._cy,
                +((this._angles.end[index] - this._angles.begin[index]) / 30).toFixed(4),
                this._angles.begin[index],
                this._angles.end[index],
                this._radius,
                this._colors[index % this._colors.length],
                index,
                this._self._result.__colorLuminance(this._colors[index % this._colors.length], -0.2 /*[0] -- returns true color; [0.2] -- returns lighter; [-0.2] -- returns darker*/)
            ));
        });
        this._values.map((_, index)=>{
            this._pieParts[index].__update()
        })
    }, 0);
    await this._canvasElement.addEventListener('mousemove', (event) => {
        const pageY = event.pageY - this._canvasElement.offsetTop;
        const pageX = event.pageX - this._canvasElement.offsetLeft;
        const diffX = pageX - this._cx;
        const diffY = pageY - this._cy;
        let angle = Math.atan2(diffY, diffX);
        let _allowAreaForHover = false;
        let realAngle = angle;
        if (angle < 0) {
            realAngle = (Math.PI - Math.abs(angle)) + Math.PI
        }
        if (this._self._legends_pie.display) {
            for (let i = 0; i < this._labelsPosition.length; i++) {
                if (pageX >= this._labelsPosition[i].left && pageX <= this._labelsPosition[i].left + this._labelsPosition[i].width &&
                    pageY >= this._labelsPosition[i].top && pageY <= this._labelsPosition[i].top + 13
                ) {
                    _allowAreaForHover = true;
                    this._canvasElement.style.cursor = 'pointer';
                    this.__mouseEnterArea(realAngle, i, '_pieParts', this, 'pie', this._self._legends_position_pie, this._self._legends_pie);
                }
            }
        }
        if (this.__pointInCircleSQRT(pageX, pageY, this._cx, this._cy, this._radius)){
            this._betweenAngles.map((_angles, _index) => {
                if (realAngle >= _angles[0] && realAngle <= _angles[1]) {
                    _allowAreaForHover = true;
                    this._canvasElement.style.cursor = 'pointer';
                    this.__mouseEnterArea(realAngle, _index, '_pieParts', this, 'pie', this._self._legends_position_pie, this._self._legends_pie);
                }
            })
        } else if (this._self._onHover_pie || this._prevId) {
            !_allowAreaForHover && this.__mouseLeaveArea(this, '_pieParts', this._self._legends_position_pie, 'pie', this._self._legends_pie);
        }
    });
};

const ParametersPie = (_dataChart) => {
    return {
        type: 'pie',
        data: {
            labels: _dataChart.map(_ => _.text),
            datasets: {
                legends: {
                    display: true,
                    position: 'bottom'
                },
                data: _dataChart,
            }
        },
        options: {
            lineWidth: 1,
            onHover: {
                event: true,
                tooltip: true
            }
        }
    }
};

/***/ }),

/***/ "./src/scripts/Polar.js":
/*!******************************!*\
  !*** ./src/scripts/Polar.js ***!
  \******************************/
/*! exports provided: Polar, ParametersPolar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polar", function() { return Polar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersPolar", function() { return ParametersPolar; });
/* harmony import */ var dat_gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");


function Polar (canvas, self, _legendInfo, dataChart) {
    this._canvasElement  = canvas;
    this._dataChart      = dataChart;
    this._legendInfo     = _legendInfo;
    this._self           = self;
    this._gui            = new dat_gui__WEBPACK_IMPORTED_MODULE_0__["GUI"]({resizable : false});
    this._values         = [];
    this._radius         = 150;
    this._colors         = [];
    this._angles         = {
        begin:[],
        end:[]
    };
    this._betweenAngles  = [];
    this._countPolars    = -1;
    this._totalValues    = 0;
    this._labels         = [];
    this._legendSize     = null;
    this._cx             = this._radius;
    this._cy             = this._radius;
    this._dataChart.map(_ => {
        this._labels.push(_.text);
        this._values.push(_.value);
        this._totalValues += _.value
    });
    [this._divider, this._dividerText] = this._self.constructor.__valuesIntegration(this._values);
    this._polarParts     = [];
    this._labelsPosition = [];
    this._prevId         = null;
    this._prevColor      = null;

    const _polarFolder   = this._gui.addFolder('Polar');
    _polarFolder.add(self, '_lineWidth_polar', 0.1, 3).name('Space of Polars')
        .onChange(() => {
            this._polarParts.map(_class => {
                _class.__draw()
            })
        });
    const _legends = _polarFolder.addFolder('Legends');
    _legends.add(this._self._legends_polar, 'display').name('Display')
        .onChange((e) => {
            _legendsPosition.domElement.parentElement.setAttribute('style', `pointer-events: ${e ? 'auto' : 'none'}; opacity: ${e ? 1 : 0.5}`)
            this.__initP()
        });
    let fakePosition = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };
    fakePosition[this._self._legends_position_polar] = true;
    const _legendsPosition = _legends.addFolder('Position');
    _legendsPosition.add(fakePosition, 'top').name('Top').listen()
        .onChange((e) => {
            setChecked("top");
            if (e) {
                this._self._legends_position_polar = 'top';
                this.__initP()
            }
        });
    _legendsPosition.add(fakePosition, 'left').name('Left').listen()
        .onChange((e) => {
            setChecked("left");
            if (e) {
                this._self._legends_position_polar = 'left';
                this.__initP()
            }
        });
    _legendsPosition.add(fakePosition, 'bottom').name('Bottom').listen()
        .onChange((e) => {
            setChecked("bottom");
            if (e) {
                this._self._legends_position_polar = 'bottom';
                this.__initP()
            }
        });
    _legendsPosition.add(fakePosition, 'right').name('Right').listen()
        .onChange((e) => {
            setChecked("right");
            if (e) {
                this._self._legends_position_polar = 'right';
                this.__initP()
            }
        });
    function setChecked( prop ){
        for (let param in fakePosition){
            fakePosition[param] = false;
        }
        fakePosition[prop] = true;
    }
    _polarFolder.add(self, '_onHover_polar').name('Hover Polar')
        .onChange(() => {
            this._polarParts.map(_class => {
                _class.__draw()
            })
        });
    _polarFolder.add(self, '_tooltip_polar').name('Hover Tooltip')
        .onChange(() => {
            this._polarParts.map(_class => {
                _class.__draw()
            })
        });
}
function SinglePolars (self, movingX, movingY, startAngle, endAngle, radius, color, index, hoverColor, value) {
    this._self       = self;
    this._movingX    = movingX;
    this._movingY    = movingY;
    this._color      = color;
    this._leaveColor = color;
    this._hoverColor = hoverColor;
    this._startAngle = startAngle;
    this._endAngle   = endAngle;
    this._radius     = 0;
    this._index      = index;
    this._value      = value;
}
SinglePolars.prototype.__draw = function () {
    this._self._canvas.fillStyle = this._color;
    this._self._canvas.lineWidth = this._self._lineWidth_polar;
    this._self._canvas.beginPath();
    this._self._canvas.moveTo(this._movingX, this._movingY);
    this._self._canvas.arc(this._movingX, this._movingY, this._radius, this._startAngle, this._endAngle, false);
    this._self._canvas.lineTo(this._movingX, this._movingY);
    this._self._canvas.fill();
    this._self._canvas.strokeStyle = '#fff';
    this._self._canvas.stroke();
    this._self._canvas.beginPath();
    this._self._canvas.save();
    this._self._canvas.translate(this._movingX, this._movingY);
    this._self._canvas.restore();
};
SinglePolars.prototype.__tooltip = function (x, y, widthText, widthValue, text, values, quadroFill) {
    this._self._canvas.beginPath();
    this._self._canvas.rect(x, y, widthText +  widthValue, 18);
    this._self._canvas.fillStyle = 'rgb(0,0,0)';
    this._self._canvas.globalAlpha = .8
    this._self._canvas.fill();
    this._self._canvas.strokeStyle = '#fff';
    this._self._canvas.fillStyle = '#fff';
    this._self._canvas.fillText(this._self._result.__fittingString(this._self._canvas, text + ' ' + values, widthText + widthValue), x + 20, y + 12);
    this._self._canvas.clearColor;
    this._self._canvas.stroke();
    this._self._canvas.closePath();

    this._self._canvas.beginPath();
    this._self._canvas.lineWidth = 2;
    this._self._canvas.rect(x + 5, y + 4, 10, 10);
    this._self._canvas.fillStyle = quadroFill;
    this._self._canvas.globalAlpha = 1;
    this._self._canvas.fill();
    this._self._canvas.closePath();
};
SinglePolars.prototype.__update = function (_constructor) {
    const _maxPoint = (this._self._result.polar._radius * (_constructor._value * 100) / Math.max(...this._self._result.polar._values)) / 100;
    const $interval = window.setInterval(() => {
        if (this._radius + 2 >= _maxPoint) {
            this._radius = _maxPoint;
            this.__draw();
            window.clearInterval($interval);
        } else {
            this._radius+=2;
            this.__draw()
        }
    }, 10);
};
Polar.prototype.__polarAngles = function (count) {
    this._angles.begin.push(count * (Math.PI * 2) / this._values.length);
    this._angles.end.push((count * (Math.PI * 2) / this._values.length) + (Math.PI * 2) / this._values.length);
};
Polar.prototype.__animate = function () {
    this._countPolars++;
    this._polarParts[this._countPolars].__update(this._polarParts[this._countPolars]);
};
Polar.prototype.__drawNet = function () {
    for (let i = 0; i < 8; i++) {
        this._self._canvas.lineWidth = 1;
        this._self._canvas.beginPath();
        this._self._canvas.arc(this._cx, this._cy, this._radius - (i * (this._radius / 7)), 0, 2 * Math.PI, false);
        this._self._canvas.strokeStyle = this._self._colorAxis_polar;
        this._self._canvas.stroke();
        this._self._canvas.beginPath();
    }
};
Polar.prototype.__initP = async function () {
    this._polarParts = [];
    this._betweenAngles = [];
    this._labelsPosition = [];
    this._colors = [];
    this._countPolars = -1;
    this._self._canvas.clearRect(0, 0, this._self._widthCanvas, this._self._heightCanvas);
    await setTimeout(() => {
        this._self._result.__setHeader(this._legendInfo.header);
        this._labels.map(_j => this._colors.push(this._self._result.__getRandomColor()));
        (() => {
            if (this._self._legends_polar.display) {
                this.__generateLabelsAfterClearing(this, this._self._legends_position_polar);
            } else {
                this._cx = this._self._widthCanvas / 2;
                this._cy = this._self._heightCanvas / 2;
            }
        })();
        this.__drawNet();
        this._values.forEach((_value, index)=> {
            // Becomes from Pie Prototype ~~~~
            this.__polarAngles(index);
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~
            this._betweenAngles.push([this._angles.begin[index], this._angles.end[index]]);
            this._polarParts.push(new SinglePolars(
                this._self,
                this._cx, this._cy,
                this._angles.begin[index],
                this._angles.end[index],
                this._radius,
                this._colors[index % this._colors.length],
                index,
                this._self._result.__colorLuminance(this._colors[index % this._colors.length], -0.2 /*[0] -- returns true color; [0.2] -- returns lighter; [-0.2] -- returns darker*/),
                _value
            ));
        });
        const $syncInterval = setInterval(() => {
            if (this._countPolars < this._polarParts.length - 1) {
                this.__animate();
            } else {
                clearInterval($syncInterval);
                setTimeout(() => {
                    this._polarParts.map(_class => {
                        _class.__draw()
                    })
                }, 500)
            }
        }, 200)
    }, 0);
    await this._canvasElement.addEventListener('mousemove', (event) => {
        const pageY = event.pageY - this._canvasElement.offsetTop;
        const pageX = event.pageX - this._canvasElement.offsetLeft;
        const diffX = pageX - this._cx;
        const diffY = pageY - this._cy;
        let angle = Math.atan2(diffY, diffX);
        let _allowAreaForHover = false;
        let realAngle = angle;
        if (angle < 0) {
            realAngle = (Math.PI - Math.abs(angle)) + Math.PI
        }
        if (this._self._legends_polar.display) {
            for (let i = 0; i < this._labelsPosition.length; i++) {
                if (pageX >= this._labelsPosition[i].left && pageX <= this._labelsPosition[i].left + this._labelsPosition[i].width &&
                    pageY >= this._labelsPosition[i].top && pageY <= this._labelsPosition[i].top + 13
                ) {
                    _allowAreaForHover = true;
                    this._canvasElement.style.cursor = 'pointer';
                    this.__mouseEnterArea(realAngle, i, '_polarParts', this, 'polar', this._self._legends_position_polar, this._self._legends_polar);
                }
            }
        }
        if (this.__pointInCircleSQRT(pageX, pageY, this._cx, this._cy, this._radius)){
            for (let _index = 0; _index < this._betweenAngles.length; _index++) {
                if (realAngle >= this._betweenAngles[_index][0] && realAngle <= this._betweenAngles[_index][1] &&
                    this.__pointInCircleSQRT(pageX, pageY, this._cx, this._cy, this._polarParts[_index]._radius)) {
                    _allowAreaForHover = true;
                    this._canvasElement.style.cursor = 'pointer';
                    this.__mouseEnterArea(realAngle, _index, '_polarParts', this, 'polar', this._self._legends_position_polar, this._self._legends_polar);
                    break;
                } else if ((this._self._onHover_polar || this._prevId) &&
                    !this.__pointInCircleSQRT(pageX, pageY, this._cx, this._cy, this._polarParts[_index]._radius)) {
                    !_allowAreaForHover && this.__mouseLeaveArea(this, '_polarParts', this._self._legends_position_polar, 'polar', this._self._legends_polar);
                }
            }
        } else if (this._self._onHover_polar || this._prevId) {
            !_allowAreaForHover && this.__mouseLeaveArea(this, '_polarParts', this._self._legends_position_polar, 'polar', this._self._legends_polar);
        }
    })
};
const ParametersPolar = (_dataChart) => {
    return{
        type: 'polar',
        data: {
            labels: _dataChart.map(_ => _.text),
            datasets: {
                legends: {
                    display: true,
                    position: 'bottom'
                },
                data: _dataChart,
            }
        },
        options: {
            axisColor: '#ccc',
            lineWidth: 1,
            onHover: {
                event: true,
                tooltip: true
            }
        }
    }
};

/***/ }),

/***/ "./src/scripts/components/app.js":
/*!***************************************!*\
  !*** ./src/scripts/components/app.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./src/scripts/index.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/scripts/components/header.js");
/* harmony import */ var _toggleGUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleGUI */ "./src/scripts/components/toggleGUI.js");
/* harmony import */ var _toggleGUI__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toggleGUI__WEBPACK_IMPORTED_MODULE_2__);
__webpack_require__(/*! ../../styles/style.css */ "./src/styles/style.css");





/***/ }),

/***/ "./src/scripts/components/header.js":
/*!******************************************!*\
  !*** ./src/scripts/components/header.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/constants */ "./src/scripts/helpers/constants.js");


customElements.define('app-header',
    class AppHeader extends HTMLElement{
        constructor () {
            super();
            this._shadowRoot    = this.attachShadow({mode: 'open'});
            this._header        = document.createElement('HEADER');
            const style         = document.createElement('style');
            style.textContent = `
                header {     
                    display: flex;
                    background-color: #121212;
                    padding: 15px 7vw;
                    justify-content: space-between;
                    color: #fff;
                    position: relative;
                    z-index: 222;
                }
                header > img { width: 45px; height: 40px; }
                header nav {}
                header nav > ul { 
                    padding: 0px;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
                header nav > ul li{ 
                    margin: 0 10px;
                    letter-spacing: 1px;
                    cursor: pointer;
                    transition: .4s;
                    position: relative;
                }
                .active-chart { font-weight: 600 } 
                .active-chart:before {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -3px;
                    width: 100%;
                    height: 1px;
                    background-color: #fff;
                }
              `;
            this._shadowRoot.appendChild(style);
        }
        static get observedAttributes () {
            return ['active-chart'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'active-chart':
                    dispatchEvent(new CustomEvent("sendTab", {
                        detail: newValue
                    }));
                    console.log(`Value changed from ${oldValue} to ${newValue}`);
                    break;
            }
        }
        connectedCallback() {
            this.__setLogo(this._header);
            this.__drawTabs();
            this._shadowRoot.appendChild(this._header);
        }
        get activeChart () {
            return this.getAttribute('active-chart')
        }
        set activeChart (value) {
            this.setAttribute('active-chart', value);
        }

        __drawTabs () {
            const _nav = document.createElement("NAV");
            _nav.innerHTML = '<ul type="none"></ul>';
            _helpers_constants__WEBPACK_IMPORTED_MODULE_0__["tabCharts"].forEach(tab => {
                const _navItem = document.createElement('LI');
                _navItem.innerText = tab;
                if (this.activeChart === tab) {
                    _navItem.classList.add('active-chart')
                }
                _navItem.onclick = () => this.__changeChart(tab, _navItem);
                _nav.querySelector('ul').appendChild(_navItem);
            });
            this._header.appendChild(_nav);
        }

        __setLogo (ref) {
            const _logo = document.createElement('IMG');
            _logo.src = './images/logo.png';
            ref.appendChild(_logo);
        }

        __changeChart (tab, li) {
            if (this._header.querySelector('.active-chart')) {
                this._header.querySelector('.active-chart').classList.remove('active-chart');
            }
            li.classList.add('active-chart');
            this.activeChart = tab;
        }
    }
);


/***/ }),

/***/ "./src/scripts/components/toggleGUI.js":
/*!*********************************************!*\
  !*** ./src/scripts/components/toggleGUI.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

customElements.define('toggle-gui',
    class ToggleGUI extends HTMLElement {
        constructor () {
            super();
            this._shadowRoot    = this.attachShadow({mode: 'open'});
            this._button        = document.createElement('BUTTON');
            const style         = document.createElement('style');
            style.textContent = `
                button {
                    position: fixed;
                    right: 0;
                    background: #000;
                    border: 0;
                    color: #fff;
                    font-size: 19px;
                    padding: 5px;
                    outline: none;
                    cursor: pointer;
                    transition: .4s;
                }
            `;
            this._guiControl    = document.querySelector('.dg.ac');
            this._shadowRoot.appendChild(style);
            this._shadowRoot.innerHTML += '<link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css">';
        }
        static get observedAttributes () {
            return ['toggle-gui'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            switch (name) {
                case 'toggle-gui':
                    this._guiControl = document.querySelector('.dg.ac');
                    this._button.innerHTML = newValue === 'close' ? '<span class="lnr lnr-cross"></span>' : '<span class="lnr lnr-menu"></span>';
                    this._guiControl.style.right = this.toggleGuiAttr === 'open' ? '-245px' : '0';
                    break;
            }
        }
        connectedCallback () {
            this._guiControl.style.opacity = '0';
            this._guiControl.style.transitionProperty = 'opacity 0s';
            this._button.onclick = () => this._toggleGUI();
            this._shadowRoot.appendChild(this._button);
        }
        get toggleGuiAttr () {
            return this.getAttribute('toggle-gui')
        }
        set toggleGuiAttr (value) {
            this.setAttribute('toggle-gui', value);
        }
        _toggleGUI () {
            this._guiControl.style.opacity = '1';
            this.toggleGuiAttr = this.toggleGuiAttr === 'open' ? 'close' : 'open';
            this._button.style.right = this.toggleGuiAttr === 'close' ? '245px' : '0';
        }
    });

/***/ }),

/***/ "./src/scripts/dummyData.json":
/*!************************************!*\
  !*** ./src/scripts/dummyData.json ***!
  \************************************/
/*! exports provided: Line, Bar, Pie, Polar, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Line\":{\"header\":\"List of continents by population in \",\"data\":{\"1950\":[{\"value\":228902000,\"text\":\"Africa\"},{\"value\":226719000,\"text\":\"N. America\"},{\"value\":113739000,\"text\":\"S. America\"},{\"value\":0,\"text\":\"Antarctica\"},{\"value\":1394018000,\"text\":\"Asia\"},{\"value\":549089000,\"text\":\"Europa\"},{\"value\":12682000,\"text\":\"Australia\"}],\"1990\":[{\"value\":631614000,\"text\":\"Africa\"},{\"value\":429653000,\"text\":\"N. America\"},{\"value\":297869000,\"text\":\"S. America\"},{\"value\":0,\"text\":\"Antarctica\"},{\"value\":3202475000,\"text\":\"Asia\"},{\"value\":721086000,\"text\":\"Europa\"},{\"value\":26971000,\"text\":\"Australia\"}],\"2010\":[{\"value\":546867000,\"text\":\"Africa\"},{\"value\":578000000,\"text\":\"N. America\"},{\"value\":397085000,\"text\":\"S. America\"},{\"value\":0,\"text\":\"Antarctica\"},{\"value\":4169850000,\"text\":\"Asia\"},{\"value\":735395000,\"text\":\"Europa\"},{\"value\":36411000,\"text\":\"Australia\"}],\"2020\":[{\"value\":1275920972,\"text\":\"Africa\"},{\"value\":582931600,\"text\":\"N. America\"},{\"value\":423581078,\"text\":\"S. America\"},{\"value\":0,\"text\":\"Antarctica\"},{\"value\":4560667108,\"text\":\"Asia\"},{\"value\":746419440,\"text\":\"Europa\"},{\"value\":39901000,\"text\":\"Australia\"}]}},\"Bar\":{\"header\":\"List of highest mountains on Earth (m)\",\"data\":[{\"value\":8848,\"text\":\"Everest\"},{\"value\":8516,\"text\":\"Lhotse\"},{\"value\":8091,\"text\":\"Anapurna\"},{\"value\":8167,\"text\":\"Dhaulagiri\"},{\"value\":8188,\"text\":\"Cho Oyu\"},{\"value\":8611,\"text\":\"Chogori\"},{\"value\":8126,\"text\":\"Nanga Parbat\"},{\"value\":8611,\"text\":\"Chogori\"},{\"value\":8163,\"text\":\"Manaslu\"},{\"value\":8485,\"text\":\"Makalu\"}]},\"Pie\":{\"header\":\"Mountains of Armenia (m)\",\"data\":[{\"value\":1326093184,\"text\":\"India\"},{\"value\":336835520,\"text\":\"US\"},{\"value\":267532448,\"text\":\"Indonesia\"},{\"value\":222607504,\"text\":\"Brazil\"},{\"value\":213719472,\"text\":\"Pakistan\"},{\"value\":1384545280,\"text\":\"China\"},{\"value\":207698752,\"text\":\"Nigeria\"}]},\"Polar\":{\"header\":\"Administrative divisions of Armenia (population)\",\"data\":[{\"value\":129800,\"text\":\"Aragatsotn\"},{\"value\":258900,\"text\":\"Ararat\"},{\"value\":266600,\"text\":\"Armavir\"},{\"value\":231800,\"text\":\"Gegharkunik\"},{\"value\":253900,\"text\":\"Kotayk\"},{\"value\":50800,\"text\":\"Vayots Dzor\"},{\"value\":225000,\"text\":\"Lori\"},{\"value\":243200,\"text\":\"Shirak\"},{\"value\":139400,\"text\":\"Syunik\"},{\"value\":125500,\"text\":\"Tavush\"}]}}");

/***/ }),

/***/ "./src/scripts/helpers/constants.js":
/*!******************************************!*\
  !*** ./src/scripts/helpers/constants.js ***!
  \******************************************/
/*! exports provided: tabCharts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabCharts", function() { return tabCharts; });
const tabCharts = ['Line', 'Bar', 'Pie', 'Polar'];

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dummyData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummyData */ "./src/scripts/dummyData.json");
var _dummyData__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./dummyData */ "./src/scripts/dummyData.json", 1);
/* harmony import */ var _Line_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line.js */ "./src/scripts/Line.js");
/* harmony import */ var _Bar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bar.js */ "./src/scripts/Bar.js");
/* harmony import */ var _Pie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Pie.js */ "./src/scripts/Pie.js");
/* harmony import */ var _Polar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Polar.js */ "./src/scripts/Polar.js");





let canvas = document.querySelector('#chart');
const canvasParent = canvas.parentElement;

(async () => {
    let type = 'Line';
    let _legendInfo = {};
    await addEventListener('sendTab', (data) => {
        type = data.detail;
        const new_element = canvas.cloneNode(true);
        canvas.parentNode.replaceChild(new_element, canvas);
        if (document.querySelector('.dg.ac')) {
            document.querySelector('.main').remove()
        }
        canvas = new_element;
        if (type === 'Line') {
            _legendInfo = {
                header: _dummyData__WEBPACK_IMPORTED_MODULE_0__[type].header,
                info1: null,
                info2: Object.keys(_dummyData__WEBPACK_IMPORTED_MODULE_0__[type].data)[0],
                keys: [...Object.keys(_dummyData__WEBPACK_IMPORTED_MODULE_0__[type].data)]
            };
            new ChartArt(canvas).__init(Object(_Line_js__WEBPACK_IMPORTED_MODULE_1__["ParametersLine"])(_dummyData__WEBPACK_IMPORTED_MODULE_0__[type].data, _legendInfo));
        } else if (type === 'Bar') {
            _legendInfo = {
                header: _dummyData__WEBPACK_IMPORTED_MODULE_0__[type].header,
                info1: null,
                info2: _dummyData__WEBPACK_IMPORTED_MODULE_0__[type].data,
            };
            new ChartArt(canvas).__init(Object(_Bar_js__WEBPACK_IMPORTED_MODULE_2__["ParametersBar"])(_dummyData__WEBPACK_IMPORTED_MODULE_0__[type].data, _legendInfo));
        } else if (type === 'Pie') {
            _legendInfo = {
                header: _dummyData__WEBPACK_IMPORTED_MODULE_0__[type].header,
                info1: null,
                info2: _dummyData__WEBPACK_IMPORTED_MODULE_0__[type].data,
            };
            new ChartArt(canvas).__init(Object(_Pie_js__WEBPACK_IMPORTED_MODULE_3__["ParametersPie"])(_dummyData__WEBPACK_IMPORTED_MODULE_0__[type].data));
        } else if (type === 'Polar') {
            _legendInfo = {
                header: _dummyData__WEBPACK_IMPORTED_MODULE_0__[type].header,
                info1: null,
                info2: _dummyData__WEBPACK_IMPORTED_MODULE_0__[type].data,
            };
            new ChartArt(canvas).__init(Object(_Polar_js__WEBPACK_IMPORTED_MODULE_4__["ParametersPolar"])(_dummyData__WEBPACK_IMPORTED_MODULE_0__[type].data));
        }
    });

    function ChartArt (selector) {
        const self              = this;
        this._result            = null;
        this._canvas            = selector.getContext('2d');
        this._heightCanvas      = 500;
        this._widthCanvas       = 800;

        function Result (elem, options) {
            if (options) {
                if (type === 'Line') {
                    this.line = new _Line_js__WEBPACK_IMPORTED_MODULE_1__["Line"](options, canvas, self, _legendInfo);
                    this.line.__initL();
                } else if (type === 'Bar') {
                    this.bar = new _Bar_js__WEBPACK_IMPORTED_MODULE_2__["Bar"](options, canvas, self, _legendInfo, _dummyData__WEBPACK_IMPORTED_MODULE_0__[type].data);
                    this.bar.__init();
                } else if (type === 'Pie') {
                    this.pie = new _Pie_js__WEBPACK_IMPORTED_MODULE_3__["Pie"](canvas, self, _legendInfo, _dummyData__WEBPACK_IMPORTED_MODULE_0__[type].data);
                    this.pie.__init();
                } else if (type === 'Polar') {
                    this.polar = new _Polar_js__WEBPACK_IMPORTED_MODULE_4__["Polar"](canvas, self, _legendInfo, _dummyData__WEBPACK_IMPORTED_MODULE_0__[type].data);
                    Object.assign(this.polar.__proto__, _Pie_js__WEBPACK_IMPORTED_MODULE_3__["Pie"].prototype);
                    this.polar.__initP();
                }

            }
        }


        /******************HELPERS***********/
        this.constructor.__valuesIntegration = function(_values) {
            const [min, max] = [Math.min(..._values), Math.max(..._values)];
            if (max > 1000000) {
                return [1000000, 'M'];
            } else if (max > 10000 && max < 1000000) {
                return [1000, 'K'];
            } else {
                return [null, null]
            }
        };
        Result.prototype.__convertHex = function (hex,opacity){
            let hexCode = hex.replace('#',''),
            r = parseInt(hexCode.substring(0,2), 16),
            g = parseInt(hexCode.substring(2,4), 16),
            b = parseInt(hexCode.substring(4,6), 16);
            const result = 'rgba('+r+','+g+','+b+','+opacity+')';
            return result;
        };
        Result.prototype.__getRandomColor = function () {
            return '#'+Math.random().toString(16).substr(2,6);
        };
        /*___For some color to change more lighter or darker ____*/
        Result.prototype.__colorLuminance = function (hex, lum) {
            // validate hex string
            hex = String(hex).replace(/[^0-9a-f]/gi, '');
            if (hex.length < 6) {
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
            }
            lum = lum || 0;
            // convert to decimal and change luminosity
            let rgb = "#", c, i;
            for (i = 0; i < 3; i++) {
                c = parseInt(hex.substr(i*2,2), 16);
                c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
                rgb += ("00"+c).substr(c.length);
            }
            return rgb;
        };
        Result.prototype.__fittingString = function (c, str, maxWidth) {
            let width = c.measureText(str).width;
            let ellipsis = '…';
            let ellipsisWidth = c.measureText(ellipsis).width;
            if (width<=maxWidth || width<=ellipsisWidth) {
                return str;
            } else {
                let len = str.length;
                while (width>=maxWidth-ellipsisWidth && len-->0) {
                    str = str.substring(0, len);
                    width = c.measureText(str).width;
                }
                return str+ellipsis;
            }
        };
        Result.prototype.__max_min_values = function (arr) {
            let [max, min] = [Math.max(...arr.map(_ => _ instanceof Object ? _.value : _)),
                Math.min(...arr.map(_ => _ instanceof Object ? _.value : _))]
            return {
                max, min
            }
        };
        Result.prototype.__setHeader = function (text) {
            if (canvasParent.querySelector('h1')) {
                canvasParent.querySelector('h1').remove();
            }
            const label = document.createElement("H1");
            label.innerText = text;
            label.style.width = self._widthCanvas + 'px';
            label.style.textAlign = 'center';
            canvasParent.querySelector('canvas').insertAdjacentElement('beforeBegin', label)
        };
        this.constructor.__maxValue = function (nest, options) {
            let res;
            nest.nesting.forEach((_, index) => {
                if (index < nest.nesting.length - 1){
                    try {
                        res = options[_]
                        options = res
                    } catch (err) {
                        options = res
                    }
                } else {
                    let _last = nest.nesting.pop()
                    if (res && !res.hasOwnProperty(_)) {
                        res[_] = nest.emptyProperty
                    } else if (res instanceof Object) {
                        options[_last] = (options[_last] > nest.value) ? nest.value : res[_last]
                    }
                }
            })
        }
        /********** ONLY FOR TRANSPARENT COLOR************/
        this.constructor.__drawLineColor = function (xMoveTo, yMoveTo, xLineTo, yLineTo, dataColor) {
            const gradient = self._canvas.createLinearGradient(xMoveTo, yMoveTo, xLineTo, yLineTo);
            let grow = 1 / (dataColor.length - 1);
            dataColor.forEach((_, index)=> {
                gradient.addColorStop( grow * index, _);
            })
            return gradient
        };

        this.constructor.__maxValueInit = function (options) {
            self._canvas.clearRect(0, 0, self._widthCanvas, self._heightCanvas);
            if (options.type === 'bar' || options.type === 'line') {
                [{
                    nesting: ['options', 'scales', 'axisColor'],
                    value: 'rgb(85,72,72)',
                    emptyProperty: 'rgb(85,72,72)'
                }, {
                    nesting: ['options', 'bars', 'mouseMove', 'tooltip'],
                    value: true,
                    emptyProperty: true
                }, {
                    nesting: ['options', 'legend'],
                    value: true,
                    emptyProperty: true
                }, {
                    nesting: ['options', 'scales', 'yAxis', 'tricks', 'labels', 'fontSize'],
                    value: 16,
                    emptyProperty: 13
                }, {
                    nesting: ['options', 'scales', 'xAxis', 'tricks', 'labels', 'fontSize'],
                    value: 16,
                    emptyProperty: 13
                }, {
                    nesting: ['options', 'padding', 'paddingTop'],
                    value: 40,
                    emptyProperty: 10
                }, {
                    nesting: ['options', 'padding', 'paddingBottom'],
                    value: 30,
                    emptyProperty: 20
                }, {
                    nesting: ['options', 'padding', 'paddingLeft'],
                    value: 50,
                    emptyProperty: 10
                }, {
                    nesting: ['options', 'padding', 'paddingRight'],
                    value: 50,
                    emptyProperty: 10
                }, {
                    nesting: ['options', 'bars', 'width'],
                    value: 60,
                    emptyProperty: 40
                }, {
                    nesting: ['options', 'scales', 'yAxis', 'tricks', 'labels', 'display'],
                    value: true,
                    emptyProperty: true
                }, {
                    nesting: ['options', 'scales', 'xAxis', 'tricks', 'labels', 'display'],
                    value: true,
                    emptyProperty: true
                }].forEach(_ => self.constructor.__maxValue(_, options))
            } else if (options.type === 'pie' || options.type === 'polar') {
                [{
                    nesting: ['data', 'datasets', 'legends', 'display'],
                    value: true,
                    emptyProperty: true
                }, {
                    nesting: ['data', 'datasets', 'legends', 'position'],
                    value: 'top',
                    emptyProperty: 'top'
                }, {
                    nesting: ['options', 'onHover', 'tooltip'],
                    value: true,
                    emptyProperty: true
                }, {
                    nesting: ['options', 'onHover', 'event'],
                    value: true,
                    emptyProperty: true
                }, {
                    nesting: ['options', 'lineWidth'],
                    value: 3,
                    emptyProperty: 0.1
                }, {
                    nesting: ['options', 'axisColor'],
                    value: '#ccc',
                    emptyProperty: '#ccc'
                }].forEach(_ => self.constructor.__maxValue(_, options))
            }
        }
        /*_________________________________*/

        Result.prototype.__init = function (parameters) {
            selector.width                = self._widthCanvas;
            selector.height               = self._heightCanvas;
            self.constructor.__maxValueInit(parameters); /* Set Default Max Values */

            // For Bar Chart ~~~~~~~~~
            self._bars                    = parameters.options.bars;
            self._barsColors              = parameters.options.bars && parameters.options.bars.backgroundColors || { one: '#F21103', two: '#F86300', three: '#F7C601'};
            self._barTooltip              = (parameters.options.bars && parameters.options.bars.mouseMove && parameters.options.bars.mouseMove.hasOwnProperty('tooltip')) ? parameters.options.bars.mouseMove.tooltip : true;
            self._paddingYLeft            = parameters.options.padding && parameters.options.padding.paddingLeft || 10;
            self._paddingXBottom          = parameters.options.padding && parameters.options.padding.paddingBottom || 10;
            self._paddingYRight           = parameters.options.padding && parameters.options.padding.paddingRight || 10;
            self._paddingXTop             = parameters.options.padding && parameters.options.padding.paddingTop || 10;
            self._lineYWidth              = parameters.options.scales && parameters.options.scales.yAxis.lineWidth || null;
            self._lineXWidth              = parameters.options.scales && parameters.options.scales.xAxis.lineWidth || null;
            self._borderColor             = parameters.data.datasets.borderColor && parameters.data.datasets.borderColor || '#000';
            self._axisColor               = parameters.options.scales && parameters.options.scales.axisColor || 'rgb(85,72,72)';
            self._axisOpacity             = 1;
            self._borderOpacity           = parameters.data.datasets.borderOpacity && parameters.data.datasets.borderOpacity || 1;
            self._labelsX                 = (parameters.options.scales && parameters.options.scales.xAxis && parameters.options.scales.xAxis.tricks) && parameters.options.scales.xAxis.tricks.labels || {};
            self._labelsY                 = (parameters.options.scales && parameters.options.scales.yAxis && parameters.options.scales.yAxis.tricks) && parameters.options.scales.yAxis.tricks.labels || {};
            self._paddingXBottom          = self._labelsX.display ? self._paddingXBottom: 10;
            self._paddingYLeft            = self._labelsY.display ? self._paddingYLeft + (50 - self._paddingYLeft): 10;
            //~~~~~~~~~~~~~~~~~~~~~~

            // For Pie Chart ~~~~~~~~~~~~~~~~~~~
            self._lineWidth_pie           = parameters.options.lineWidth || 0.1;
            self._onHover_pie             = parameters.options.onHover && parameters.options.onHover.event;
            self._tooltip_pie             = parameters.options.onHover && parameters.options.onHover.tooltip;
            self._legends_pie             = parameters.data.datasets.legends;
            self._legends_position_pie    = parameters.data.datasets.legends && parameters.data.datasets.legends.position;
            //~~~~~~~~~~~~~~~~~~~~~~

            // For Polar Chart ~~~~~~~~~~~~~~~~~
            self._colorAxis_polar         = parameters.options.axisColor || '#ccc';
            self._lineWidth_polar         = parameters.options.lineWidth || 0.1;
            self._onHover_polar           = parameters.options.onHover && parameters.options.onHover.event;
            self._tooltip_polar           = parameters.options.onHover && parameters.options.onHover.tooltip;
            self._legends_polar           = parameters.data.datasets.legends;
            self._legends_position_polar  = parameters.data.datasets.legends && parameters.data.datasets.legends.position;
            // ~~~~~~~~~~~~~~~~~~~~~

            // For Line Chart ~~~~~~~~~~~~~~~~~~~~~~~
            self._pointTooltip            = (parameters.options.points && parameters.options.points.mouseMove && parameters.options.points.mouseMove.hasOwnProperty('tooltip')) ? parameters.options.points.mouseMove.tooltip : true;
            self._legendLine              = parameters.options.legend;
            self._paddingYLeftLine        = parameters.options.padding && parameters.options.padding.paddingLeft || 10;
            self._paddingXBottomLine      = parameters.options.padding && parameters.options.padding.paddingBottom || 10;
            self._paddingYRightLine       = parameters.options.padding && parameters.options.padding.paddingRight || 10;
            self._paddingXTopLine         = parameters.options.padding && parameters.options.padding.paddingTop || 10;
            self._lineYWidthLine          = parameters.options.scales && parameters.options.scales.yAxis.lineWidth || null;
            self._lineXWidthLine          = parameters.options.scales && parameters.options.scales.xAxis.lineWidth || null;
            self._borderColorLine         = parameters.data.datasets.borderColor && parameters.data.datasets.borderColor || [227, 225, 225];
            self._axisColorLine           = parameters.options.scales && parameters.options.scales.axisColor || 'rgb(85,72,72)';
            self._axisOpacityLine         = 1;
            self._lineColors              = parameters.options.lineColors || [];
            self._borderOpacityLine       = parameters.data.datasets.borderOpacity && parameters.data.datasets.borderOpacity || 1;
            self._labelsXLine             = (parameters.options.scales && parameters.options.scales.xAxis && parameters.options.scales.xAxis.tricks) && parameters.options.scales.xAxis.tricks.labels || {};
            self._labelsYLine             = (parameters.options.scales && parameters.options.scales.yAxis && parameters.options.scales.yAxis.tricks) && parameters.options.scales.yAxis.tricks.labels || {};
            self._paddingXBottomLine      = self._labelsXLine.display ? self._paddingXBottomLine: 10;
            self._paddingYLeftLine        = self._labelsYLine.display ? self._paddingYLeftLine + (50 - self._paddingYLeftLine): 10;
            self._lineWidth               = parameters.options.lineWidth || 1;
            //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            self._result = new Result(selector, parameters);

            return self._result[parameters.type]
        };
        return new Result(selector)
    }

})();

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/scripts/components/app.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/scripts/components/app.js */"./src/scripts/components/app.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map