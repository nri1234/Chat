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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ ((function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(43);
} else {}

/***/ })),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(72);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(6)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Expose `Emitter`.
 */
if (true) {
  module.exports = Emitter;
}
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */


function Emitter(obj) {
  if (obj) return mixin(obj);
}

;
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {}; // all

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  } // specific event


  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this; // remove all handlers

  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  } // remove specific handler


  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */


Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */


Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */


Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var keys = __webpack_require__(60);

var hasBinary = __webpack_require__(28);

var sliceBuffer = __webpack_require__(61);

var after = __webpack_require__(62);

var utf8 = __webpack_require__(63);

var base64encoder;

if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = __webpack_require__(64);
}
/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */


var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */

var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);
/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */

var dontSendBlobs = isAndroid || isPhantomJS;
/**
 * Current protocol version.
 */

exports.protocol = 3;
/**
 * Packet types.
 */

var packets = exports.packets = {
  open: 0 // non-ws
  ,
  close: 1 // non-ws
  ,
  ping: 2,
  pong: 3,
  message: 4,
  upgrade: 5,
  noop: 6
};
var packetslist = keys(packets);
/**
 * Premade error packet.
 */

var err = {
  type: 'error',
  data: 'parser error'
};
/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(65);
/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */


exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  } // might be an object with { base64: true, data: dataAsBase64String }


  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  } // Sending data as a utf-8 string


  var encoded = packets[packet.type]; // data fragment is optional

  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), {
      strict: false
    }) : String(packet.data);
  }

  return callback('' + encoded);
};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}
/**
 * Encode packet helpers for binary types
 */


function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);
  resultBuffer[0] = packets[packet.type];

  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i + 1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();

  fr.onload = function () {
    exports.encodePacket({
      type: packet.type,
      data: fr.result
    }, supportsBinary, true, callback);
  };

  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);
  return callback(blob);
}
/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */


exports.encodeBase64Packet = function (packet, callback) {
  var message = 'b' + exports.packets[packet.type];

  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();

    fr.onload = function () {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };

    return fr.readAsDataURL(packet.data);
  }

  var b64data;

  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);

    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }

    b64data = String.fromCharCode.apply(null, basic);
  }

  message += btoa(b64data);
  return callback(message);
};
/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */


exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  } // String data


  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);

      if (data === false) {
        return err;
      }
    }

    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return {
        type: packetslist[type],
        data: data.substring(1)
      };
    } else {
      return {
        type: packetslist[type]
      };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);

  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }

  return {
    type: packetslist[type],
    data: rest
  };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, {
      strict: false
    });
  } catch (e) {
    return false;
  }

  return data;
}
/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */


exports.decodeBase64Packet = function (msg, binaryType) {
  var type = packetslist[msg.charAt(0)];

  if (!base64encoder) {
    return {
      type: type,
      data: {
        base64: true,
        data: msg.substr(1)
      }
    };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return {
    type: type,
    data: data
  };
};
/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */


exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, (function (message) {
      doneCallback(null, setLengthHeader(message));
    }));
  }

  map(packets, encodeOne, (function (err, results) {
    return callback(results.join(''));
  }));
};
/**
 * Async array map using after
 */


function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function (i, el, cb) {
    each(el, (function (error, msg) {
      result[i] = msg;
      cb(error, result);
    }));
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}
/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */


exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;

  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '',
      n,
      msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || length != (n = Number(length))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    } // advance cursor


    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }
};
/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */


exports.encodePayloadAsArrayBuffer = function (packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, (function (data) {
      return doneCallback(null, data);
    }));
  }

  map(packets, encodeOne, (function (err, encodedPackets) {
    var totalLength = encodedPackets.reduce((function (acc, p) {
      var len;

      if (typeof p === 'string') {
        len = p.length;
      } else {
        len = p.byteLength;
      }

      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }), 0);
    var resultArray = new Uint8Array(totalLength);
    var bufferIndex = 0;
    encodedPackets.forEach((function (p) {
      var isString = typeof p === 'string';
      var ab = p;

      if (isString) {
        var view = new Uint8Array(p.length);

        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }

        ab = view.buffer;
      }

      if (isString) {
        // not true binary
        resultArray[bufferIndex++] = 0;
      } else {
        // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();

      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }

      resultArray[bufferIndex++] = 255;
      var view = new Uint8Array(ab);

      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    }));
    return callback(resultArray.buffer);
  }));
};
/**
 * Encode as Blob
 */


exports.encodePayloadAsBlob = function (packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, (function (encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;

      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);

        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }

        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;
      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);

      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }

      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    }));
  }

  map(packets, encodeOne, (function (err, results) {
    return callback(new Blob(results));
  }));
};
/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */


exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1;; i++) {
      if (tailArray[i] === 255) break; // 310 = char length of Number.MAX_VALUE

      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);
    var msg = sliceBuffer(bufferTail, 0, msgLength);

    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';

        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach((function (buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  }));
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(74);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(6)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 5 */
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
    return this.map((function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    })).join('');
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
    var sourceURLs = cssMapping.sources.map((function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    }));
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = (function isOldIE() {
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
})();

var getTarget = (function getTarget() {
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
})();

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

  Object.keys(options.attributes).forEach((function (key) {
    style.setAttribute(key, options.attributes[key]);
  }));

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


var replaceText = (function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
})();

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(75);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(6)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = __webpack_require__(49);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, (function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  }));
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */


exports.decode = function (qs) {
  var qry = {};
  var pairs = qs.split('&');

  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return qry;
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (a, b) {
  var fn = function () {};

  fn.prototype = b.prototype;
  a.prototype = new fn();
  a.prototype.constructor = a;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = __webpack_require__(66);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, (function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  }));
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, n, name) {
  if (ms < n) {
    return;
  }

  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }

  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var debug = __webpack_require__(50)('socket.io-parser');

var Emitter = __webpack_require__(2);

var binary = __webpack_require__(52);

var isArray = __webpack_require__(15);

var isBuf = __webpack_require__(23);
/**
 * Protocol version.
 *
 * @api public
 */


exports.protocol = 4;
/**
 * Packet types.
 *
 * @api public
 */

exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'];
/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;
/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;
/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;
/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;
/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;
/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;
/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;
/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;
/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;
/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';
/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function (obj, callback) {
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};
/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */


function encodeAsString(obj) {
  // first is type
  var str = '' + obj.type; // attachments if we have them

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  } // if we have a namespace other than `/`
  // we append it followed by a comma `,`


  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  } // immediately followed by the id


  if (null != obj.id) {
    str += obj.id;
  } // json data


  if (null != obj.data) {
    var payload = tryStringify(obj.data);

    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch (e) {
    return false;
  }
}
/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */


function encodeAsBinary(obj, callback) {
  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;
    buffers.unshift(pack); // add packet info to beginning of data list

    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */


function Decoder() {
  this.reconstructor = null;
}
/**
 * Mix in `Emitter` with Decoder.
 */


Emitter(Decoder.prototype);
/**
 * Decodes an encoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function (obj) {
  var packet;

  if (typeof obj === 'string') {
    packet = decodeString(obj);

    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) {
      // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else {
      // non-binary full packet
      this.emit('decoded', packet);
    }
  } else if (isBuf(obj) || obj.base64) {
    // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);

      if (packet) {
        // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};
/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */


function decodeString(str) {
  var i = 0; // look up type

  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  } // look up attachments if type binary


  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';

    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }

    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }

    p.attachments = Number(buf);
  } // look up namespace (if any)


  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';

    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  } // look up id


  var next = str.charAt(i + 1);

  if ('' !== next && Number(next) == next) {
    p.id = '';

    while (++i) {
      var c = str.charAt(i);

      if (null == c || Number(c) != c) {
        --i;
        break;
      }

      p.id += str.charAt(i);
      if (i === str.length) break;
    }

    p.id = Number(p.id);
  } // look up json data


  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));

    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}
/**
 * Deallocates a parser's resources
 *
 * @api public
 */


Decoder.prototype.destroy = function () {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */


function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}
/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */


BinaryReconstructor.prototype.takeBinaryData = function (binData) {
  this.buffers.push(binData);

  if (this.buffers.length === this.reconPack.attachments) {
    // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }

  return null;
};
/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */


BinaryReconstructor.prototype.finishedReconstruction = function () {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__(53);

var ieee754 = __webpack_require__(54);

var isArray = __webpack_require__(55);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function () {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// browser shim for xmlhttprequest module
var hasCORS = __webpack_require__(58);

module.exports = function (opts) {
  var xdomain = opts.xdomain; // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx

  var xscheme = opts.xscheme; // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217

  var enablesXDR = opts.enablesXDR; // XMLHttpRequest can be disabled on IE

  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {} // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example


  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new self[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) {}
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var parser = __webpack_require__(3);

var Emitter = __webpack_require__(2);
/**
 * Module exports.
 */


module.exports = Transport;
/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport(opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR; // SSL options for Node.js client

  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode; // results of ReactNative environment detection

  this.isReactNative = opts.isReactNative; // other options for Node.js client

  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}
/**
 * Mix in `Emitter`.
 */


Emitter(Transport.prototype);
/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};
/**
 * Opens the transport.
 *
 * @api public
 */


Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};
/**
 * Closes the transport.
 *
 * @api private
 */


Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};
/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */


Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};
/**
 * Called upon open
 *
 * @api private
 */


Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};
/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */


Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};
/**
 * Called with a decoded packet.
 */


Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};
/**
 * Called upon close.
 *
 * @api private
 */


Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(73);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(6)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(76);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(6)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map((function (n) {
      return test2[n];
    }));

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach((function (letter) {
      test3[letter] = letter;
    }));

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

module.exports = function parseuri(str) {
  var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');

  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }

  var m = re.exec(str || ''),
      uri = {},
      i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }

  return uri;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = isBuf;
var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function (obj) {
  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */


function isBuf(obj) {
  return withNativeBuffer && Buffer.isBuffer(obj) || withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16).Buffer))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = (function () {
  return this;
})();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var eio = __webpack_require__(56);

var Socket = __webpack_require__(31);

var Emitter = __webpack_require__(2);

var parser = __webpack_require__(14);

var on = __webpack_require__(32);

var bind = __webpack_require__(33);

var debug = __webpack_require__(8)('socket.io-client:manager');

var indexOf = __webpack_require__(30);

var Backoff = __webpack_require__(71);
/**
 * IE6+ hasOwnProperty
 */


var has = Object.prototype.hasOwnProperty;
/**
 * Module exports
 */

module.exports = Manager;
/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];

  var _parser = opts.parser || parser;

  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}
/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */


Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);

  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};
/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */


Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};
/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */


Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : nsp + '#') + this.engine.id;
};
/**
 * Mix in `Emitter`.
 */


Emitter(Manager.prototype);
/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};
/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};
/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};
/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};
/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};
/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */


Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};
/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */


Manager.prototype.open = Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;
  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false; // emit `open`

  var openSub = on(socket, 'open', (function () {
    self.onopen();
    fn && fn();
  })); // emit `connect_error`

  var errorSub = on(socket, 'error', (function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);

    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  })); // emit `connect_timeout`

  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout); // set timer

    var timer = setTimeout((function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }), timeout);
    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);
  return this;
};
/**
 * Called upon transport open.
 *
 * @api private
 */


Manager.prototype.onopen = function () {
  debug('open'); // clear old subs

  this.cleanup(); // mark as open

  this.readyState = 'open';
  this.emit('open'); // add new subs

  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};
/**
 * Called upon a ping.
 *
 * @api private
 */


Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};
/**
 * Called upon a packet.
 *
 * @api private
 */


Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};
/**
 * Called with data.
 *
 * @api private
 */


Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};
/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */


Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};
/**
 * Called upon socket error.
 *
 * @api private
 */


Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};
/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */


Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];

  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', (function () {
      socket.id = self.generateId(nsp);
    }));

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting() {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};
/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */


Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;
  this.close();
};
/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */


Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, (function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }

      self.encoding = false;
      self.processPacketQueue();
    }));
  } else {
    // add packet to the queue
    self.packetBuffer.push(packet);
  }
};
/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */


Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};
/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */


Manager.prototype.cleanup = function () {
  debug('cleanup');
  var subsLength = this.subs.length;

  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;
  this.decoder.destroy();
};
/**
 * Close the current socket.
 *
 * @api private
 */


Manager.prototype.close = Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;

  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }

  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};
/**
 * Called upon engine close.
 *
 * @api private
 */


Manager.prototype.onclose = function (reason) {
  debug('onclose');
  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};
/**
 * Attempt a reconnection.
 *
 * @api private
 */


Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;
  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);
    this.reconnecting = true;
    var timer = setTimeout((function () {
      if (self.skipReconnect) return;
      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts); // check again for the case socket closed in above events

      if (self.skipReconnect) return;
      self.open((function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      }));
    }), delay);
    this.subs.push({
      destroy: function () {
        clearTimeout(timer);
      }
    });
  }
};
/**
 * Called upon successful reconnect.
 *
 * @api private
 */


Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */
var XMLHttpRequest = __webpack_require__(17);

var XHR = __webpack_require__(59);

var JSONP = __webpack_require__(67);

var websocket = __webpack_require__(68);
/**
 * Export transports.
 */


exports.polling = polling;
exports.websocket = websocket;
/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var Transport = __webpack_require__(18);

var parseqs = __webpack_require__(9);

var parser = __webpack_require__(3);

var inherit = __webpack_require__(10);

var yeast = __webpack_require__(29);

var debug = __webpack_require__(11)('engine.io-client:polling');
/**
 * Module exports.
 */


module.exports = Polling;
/**
 * Is XHR2 supported?
 */

var hasXHR2 = (function () {
  var XMLHttpRequest = __webpack_require__(17);

  var xhr = new XMLHttpRequest({
    xdomain: false
  });
  return null != xhr.responseType;
})();
/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */


function Polling(opts) {
  var forceBase64 = opts && opts.forceBase64;

  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }

  Transport.call(this, opts);
}
/**
 * Inherits from Transport.
 */


inherit(Polling, Transport);
/**
 * Transport name.
 */

Polling.prototype.name = 'polling';
/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};
/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */


Polling.prototype.pause = function (onPause) {
  var self = this;
  this.readyState = 'pausing';

  function pause() {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', (function () {
        debug('pre-pause polling complete');
        --total || pause();
      }));
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', (function () {
        debug('pre-pause writing complete');
        --total || pause();
      }));
    }
  } else {
    pause();
  }
};
/**
 * Starts polling cycle.
 *
 * @api public
 */


Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};
/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */


Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);

  var callback = function (packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    } // if its a close packet, we close the ongoing requests


    if ('close' === packet.type) {
      self.onClose();
      return false;
    } // otherwise bypass onData and handle the message


    self.onPacket(packet);
  }; // decode payload


  parser.decodePayload(data, this.socket.binaryType, callback); // if an event did not trigger closing

  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};
/**
 * For polling, send a close packet.
 *
 * @api private
 */


Polling.prototype.doClose = function () {
  var self = this;

  function close() {
    debug('writing close packet');
    self.write([{
      type: 'close'
    }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};
/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */


Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  var callbackfn = function () {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, (function (data) {
    self.doWrite(data, callbackfn);
  }));
};
/**
 * Generates uri for connection.
 *
 * @api private
 */


Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = ''; // cache busting is forced

  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query); // avoid port if default for schema

  if (this.port && ('https' === schema && Number(this.port) !== 443 || 'http' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  } // prepend ? to query


  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/* global Blob File */

/*
 * Module requirements.
 */
var isArray = __webpack_require__(15);

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';
/**
 * Module exports.
 */

module.exports = hasBinary;
/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(obj) {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }

    return false;
  }

  if (typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj) || typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
    return true;
  } // see: https://github.com/Automattic/has-binary/pull/4


  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16).Buffer))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    length = 64,
    map = {},
    seed = 0,
    i = 0,
    prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */

function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */


function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */


function yeast() {
  var now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + '.' + encode(seed++);
} //
// Map each character to its index.
//


for (; i < length; i++) map[alphabet[i]] = i; //
// Expose the `yeast`, `encode` and `decode` functions.
//


yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var indexOf = [].indexOf;

module.exports = function (arr, obj) {
  if (indexOf) return arr.indexOf(obj);

  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }

  return -1;
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var parser = __webpack_require__(14);

var Emitter = __webpack_require__(2);

var toArray = __webpack_require__(70);

var on = __webpack_require__(32);

var bind = __webpack_require__(33);

var debug = __webpack_require__(8)('socket.io-client:socket');

var parseqs = __webpack_require__(9);

var hasBin = __webpack_require__(28);
/**
 * Module exports.
 */


module.exports = exports = Socket;
/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};
/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;
/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat

  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};

  if (opts && opts.query) {
    this.query = opts.query;
  }

  if (this.io.autoConnect) this.open();
}
/**
 * Mix in `Emitter`.
 */


Emitter(Socket.prototype);
/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;
  var io = this.io;
  this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
};
/**
 * "Opens" the socket.
 *
 * @api public
 */


Socket.prototype.open = Socket.prototype.connect = function () {
  if (this.connected) return this;
  this.subEvents();
  this.io.open(); // ensure open

  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};
/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */


Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};
/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */


Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };
  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress; // event ack callback

  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};
  return this;
};
/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};
/**
 * Called upon engine `open`.
 *
 * @api private
 */


Socket.prototype.onopen = function () {
  debug('transport is open - connecting'); // write connect packet if necessary

  if ('/' !== this.nsp) {
    if (this.query) {
      var query = typeof this.query === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({
        type: parser.CONNECT,
        query: query
      });
    } else {
      this.packet({
        type: parser.CONNECT
      });
    }
  }
};
/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */


Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};
/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';
  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};
/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};
/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */


Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);
    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};
/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];

  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};
/**
 * Called upon server connect.
 *
 * @api private
 */


Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};
/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */


Socket.prototype.emitBuffered = function () {
  var i;

  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }

  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }

  this.sendBuffer = [];
};
/**
 * Called upon server disconnect.
 *
 * @api private
 */


Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};
/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */


Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }

    this.subs = null;
  }

  this.io.destroy(this);
};
/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */


Socket.prototype.close = Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({
      type: parser.DISCONNECT
    });
  } // remove socket from pool


  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }

  return this;
};
/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */


Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};
/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */


Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

/**
 * Module exports.
 */
module.exports = on;
/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function () {
      obj.removeListener(ev, fn);
    }
  };
}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * Slice reference.
 */
var slice = [].slice;
/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function (obj, fn) {
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function () {
    return fn.apply(obj, args.concat(slice.call(arguments)));
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }

  if (false) {}

  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(44);
} else {}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MessageForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/* harmony import */ var _MessageList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var _UsersList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

//layout








var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()("/");

var App =
/*#__PURE__*/
(function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      users: [],
      messages: [],
      text: "",
      name: ""
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      socket.on("message", (function (message) {
        return _this2.messageReceive(message);
      }));
      socket.on("update", (function (_ref) {
        var users = _ref.users;
        return _this2.chatUpdate(users);
      }));
    }
  }, {
    key: "messageReceive",
    value: function messageReceive(message) {
      var messages = [message].concat(_toConsumableArray(this.state.messages));
      this.setState({
        messages: messages
      });
    }
  }, {
    key: "chatUpdate",
    value: function chatUpdate(users) {
      this.setState({
        users: users
      });
    }
  }, {
    key: "handleMessageSubmit",
    value: function handleMessageSubmit(message) {
      var messages = [message].concat(_toConsumableArray(this.state.messages));
      this.setState({
        messages: messages
      });
      socket.emit("message", message);
    }
  }, {
    key: "handleUserSubmit",
    value: function handleUserSubmit(name) {
      this.setState({
        name: name
      });
      socket.emit("join", name);
    }
  }, {
    key: "render",
    value: function render() {
      return this.state.name !== "" ? this.renderLayout() : this.renderUserForm();
    }
  }, {
    key: "renderLayout",
    value: function renderLayout() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _App_css__WEBPACK_IMPORTED_MODULE_3___default.a.App
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _App_css__WEBPACK_IMPORTED_MODULE_3___default.a.AppHeader
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _App_css__WEBPACK_IMPORTED_MODULE_3___default.a.AppTitle
      }, "Chat App"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _App_css__WEBPACK_IMPORTED_MODULE_3___default.a.AppRoom
      }, "App Room")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _App_css__WEBPACK_IMPORTED_MODULE_3___default.a.AppBody
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UsersList__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
        users: this.state.users
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _App_css__WEBPACK_IMPORTED_MODULE_3___default.a.MessageWrapper
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageList__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
        messages: this.state.messages
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageForm__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
        onMessageSubmit: function onMessageSubmit(message) {
          return _this3.handleMessageSubmit(message);
        },
        name: this.state.name
      }))));
    }
  }, {
    key: "renderUserForm",
    value: function renderUserForm() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserForm__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
        onUserSubmit: function onUserSubmit(name) {
          return _this4.handleUserSubmit(name);
        }
      });
    }
  }]);

  return App;
})(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__["hot"])(module)(App));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(47)(module)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var url = __webpack_require__(48);

var parser = __webpack_require__(14);

var Manager = __webpack_require__(25);

var debug = __webpack_require__(8)('socket.io-client');
/**
 * Module exports.
 */


module.exports = exports = lookup;
/**
 * Managers cache.
 */

var cache = exports.managers = {};
/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if (typeof uri === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;
  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }

    io = cache[id];
  }

  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }

  return io.socket(parsed.path, opts);
}
/**
 * Protocol version.
 *
 * @api public
 */


exports.protocol = parser.protocol;
/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;
/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(25);
exports.Socket = __webpack_require__(31);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MessageForm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _MessageForm_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MessageForm_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var MessageForm =
/*#__PURE__*/
(function (_Component) {
  _inherits(MessageForm, _Component);

  function MessageForm(props) {
    var _this;

    _classCallCheck(this, MessageForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MessageForm).call(this, props));
    _this.state = {
      text: ""
    };
    return _this;
  }

  _createClass(MessageForm, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var message = {
        from: this.props.name,
        text: this.state.text
      };
      this.props.onMessageSubmit(message);
      this.setState({
        text: ""
      });
    }
  }, {
    key: "changeHandler",
    value: function changeHandler(e) {
      this.setState({
        text: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: _MessageForm_css__WEBPACK_IMPORTED_MODULE_1___default.a.MessageForm,
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: _MessageForm_css__WEBPACK_IMPORTED_MODULE_1___default.a.MessageInput,
        onChange: function onChange(e) {
          return _this2.changeHandler(e);
        },
        value: this.state.text,
        placeholder: "Message"
      }));
    }
  }]);

  return MessageForm;
})(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MessageForm);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MessageList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _MessageList_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MessageList_css__WEBPACK_IMPORTED_MODULE_1__);



var Message = function Message(props) {
  var style = _MessageList_css__WEBPACK_IMPORTED_MODULE_1___default.a.Message + ' ';

  if (props.from === 'System') {
    style += _MessageList_css__WEBPACK_IMPORTED_MODULE_1___default.a.SystemMessage;
  } else if (props.from === 'Server message') {
    style += _MessageList_css__WEBPACK_IMPORTED_MODULE_1___default.a.ServerMessage;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, props.from, ": "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, props.text));
};

var MessageList = function MessageList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MessageList_css__WEBPACK_IMPORTED_MODULE_1___default.a.MessageList
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _MessageList_css__WEBPACK_IMPORTED_MODULE_1___default.a.MessageWrapper
  }, props.messages.map((function (message, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Message, {
      key: i,
      from: message.from,
      text: message.text
    });
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (MessageList);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UsersList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _UsersList_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UsersList_css__WEBPACK_IMPORTED_MODULE_1__);



var UsersList = function UsersList(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _UsersList_css__WEBPACK_IMPORTED_MODULE_1___default.a.Users
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _UsersList_css__WEBPACK_IMPORTED_MODULE_1___default.a.UsersOnline
  }, props.users.length, " people online"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _UsersList_css__WEBPACK_IMPORTED_MODULE_1___default.a.UsersList
  }, props.users.map((function (user) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: user.id,
      className: _UsersList_css__WEBPACK_IMPORTED_MODULE_1___default.a.UserItem
    }, user.name);
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (UsersList);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserForm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _UserForm_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UserForm_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var UserForm =
/*#__PURE__*/
(function (_Component) {
  _inherits(UserForm, _Component);

  function UserForm(props) {
    var _this;

    _classCallCheck(this, UserForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UserForm).call(this, props));
    _this.state = {
      name: ""
    };
    return _this;
  }

  _createClass(UserForm, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      this.props.onUserSubmit(this.state.name);
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        name: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: _UserForm_css__WEBPACK_IMPORTED_MODULE_1___default.a.UserForm,
        onSubmit: function onSubmit(e) {
          return _this2.handleSubmit(e);
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: _UserForm_css__WEBPACK_IMPORTED_MODULE_1___default.a.UserInput,
        placeholder: "Write your nickname and press enter",
        onChange: function onChange(e) {
          return _this2.handleChange(e);
        },
        value: this.state.name
      }));
    }
  }]);

  return UserForm;
})(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (UserForm);

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(77);
} else { var jsFeaturesPresent, evalAllowed; }

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), document.getElementById('app'));

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var h = __webpack_require__(21),
    n = "function" === typeof Symbol && Symbol.for,
    p = n ? Symbol.for("react.element") : 60103,
    q = n ? Symbol.for("react.portal") : 60106,
    r = n ? Symbol.for("react.fragment") : 60107,
    t = n ? Symbol.for("react.strict_mode") : 60108,
    u = n ? Symbol.for("react.profiler") : 60114,
    v = n ? Symbol.for("react.provider") : 60109,
    w = n ? Symbol.for("react.context") : 60110,
    x = n ? Symbol.for("react.forward_ref") : 60112,
    y = n ? Symbol.for("react.suspense") : 60113,
    aa = n ? Symbol.for("react.suspense_list") : 60120,
    ba = n ? Symbol.for("react.memo") : 60115,
    ca = n ? Symbol.for("react.lazy") : 60116;

n && Symbol.for("react.fundamental");
n && Symbol.for("react.responder");
var z = "function" === typeof Symbol && Symbol.iterator;

function A(a) {
  for (var b = a.message, d = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, c = 1; c < arguments.length; c++) d += "&args[]=" + encodeURIComponent(arguments[c]);

  a.message = "Minified React error #" + b + "; visit " + d + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";
  return a;
}

var B = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    C = {};

function D(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = C;
  this.updater = d || B;
}

D.prototype.isReactComponent = {};

D.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw A(Error(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

D.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function E() {}

E.prototype = D.prototype;

function F(a, b, d) {
  this.props = a;
  this.context = b;
  this.refs = C;
  this.updater = d || B;
}

var G = F.prototype = new E();
G.constructor = F;
h(G, D.prototype);
G.isPureReactComponent = !0;
var H = {
  current: null
},
    I = {
  suspense: null
},
    J = {
  current: null
},
    K = Object.prototype.hasOwnProperty,
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, d) {
  var c = void 0,
      e = {},
      g = null,
      k = null;
  if (null != b) for (c in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = b[c]);
  var f = arguments.length - 2;
  if (1 === f) e.children = d;else if (1 < f) {
    for (var l = Array(f), m = 0; m < f; m++) l[m] = arguments[m + 2];

    e.children = l;
  }
  if (a && a.defaultProps) for (c in f = a.defaultProps, f) void 0 === e[c] && (e[c] = f[c]);
  return {
    $$typeof: p,
    type: a,
    key: g,
    ref: k,
    props: e,
    _owner: J.current
  };
}

function da(a, b) {
  return {
    $$typeof: p,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function N(a) {
  return "object" === typeof a && null !== a && a.$$typeof === p;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + ("" + a).replace(/[=:]/g, (function (a) {
    return b[a];
  }));
}

var O = /\/+/g,
    P = [];

function Q(a, b, d, c) {
  if (P.length) {
    var e = P.pop();
    e.result = a;
    e.keyPrefix = b;
    e.func = d;
    e.context = c;
    e.count = 0;
    return e;
  }

  return {
    result: a,
    keyPrefix: b,
    func: d,
    context: c,
    count: 0
  };
}

function R(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > P.length && P.push(a);
}

function S(a, b, d, c) {
  var e = typeof a;
  if ("undefined" === e || "boolean" === e) a = null;
  var g = !1;
  if (null === a) g = !0;else switch (e) {
    case "string":
    case "number":
      g = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case p:
        case q:
          g = !0;
      }

  }
  if (g) return d(c, a, "" === b ? "." + T(a, 0) : b), 1;
  g = 0;
  b = "" === b ? "." : b + ":";
  if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    e = a[k];
    var f = b + T(e, k);
    g += S(e, f, d, c);
  } else if (null === a || "object" !== typeof a ? f = null : (f = z && a[z] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(e = a.next()).done;) e = e.value, f = b + T(e, k++), g += S(e, f, d, c);else if ("object" === e) throw d = "" + a, A(Error(31), "[object Object]" === d ? "object with keys {" + Object.keys(a).join(", ") + "}" : d, "");
  return g;
}

function U(a, b, d) {
  return null == a ? 0 : S(a, "", b, d);
}

function T(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}

function ea(a, b) {
  a.func.call(a.context, b, a.count++);
}

function fa(a, b, d) {
  var c = a.result,
      e = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? V(a, c, d, (function (a) {
    return a;
  })) : null != a && (N(a) && (a = da(a, e + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(O, "$&/") + "/") + d)), c.push(a));
}

function V(a, b, d, c, e) {
  var g = "";
  null != d && (g = ("" + d).replace(O, "$&/") + "/");
  b = Q(b, g, c, e);
  U(a, fa, b);
  R(b);
}

function W() {
  var a = H.current;
  if (null === a) throw A(Error(321));
  return a;
}

var X = {
  Children: {
    map: function (a, b, d) {
      if (null == a) return a;
      var c = [];
      V(a, c, null, b, d);
      return c;
    },
    forEach: function (a, b, d) {
      if (null == a) return a;
      b = Q(null, null, b, d);
      U(a, ea, b);
      R(b);
    },
    count: function (a) {
      return U(a, (function () {
        return null;
      }), null);
    },
    toArray: function (a) {
      var b = [];
      V(a, b, null, (function (a) {
        return a;
      }));
      return b;
    },
    only: function (a) {
      if (!N(a)) throw A(Error(143));
      return a;
    }
  },
  createRef: function () {
    return {
      current: null
    };
  },
  Component: D,
  PureComponent: F,
  createContext: function (a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: w,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    a.Provider = {
      $$typeof: v,
      _context: a
    };
    return a.Consumer = a;
  },
  forwardRef: function (a) {
    return {
      $$typeof: x,
      render: a
    };
  },
  lazy: function (a) {
    return {
      $$typeof: ca,
      _ctor: a,
      _status: -1,
      _result: null
    };
  },
  memo: function (a, b) {
    return {
      $$typeof: ba,
      type: a,
      compare: void 0 === b ? null : b
    };
  },
  useCallback: function (a, b) {
    return W().useCallback(a, b);
  },
  useContext: function (a, b) {
    return W().useContext(a, b);
  },
  useEffect: function (a, b) {
    return W().useEffect(a, b);
  },
  useImperativeHandle: function (a, b, d) {
    return W().useImperativeHandle(a, b, d);
  },
  useDebugValue: function () {},
  useLayoutEffect: function (a, b) {
    return W().useLayoutEffect(a, b);
  },
  useMemo: function (a, b) {
    return W().useMemo(a, b);
  },
  useReducer: function (a, b, d) {
    return W().useReducer(a, b, d);
  },
  useRef: function (a) {
    return W().useRef(a);
  },
  useState: function (a) {
    return W().useState(a);
  },
  Fragment: r,
  Profiler: u,
  StrictMode: t,
  Suspense: y,
  unstable_SuspenseList: aa,
  createElement: M,
  cloneElement: function (a, b, d) {
    if (null === a || void 0 === a) throw A(Error(267), a);
    var c = void 0,
        e = h({}, a.props),
        g = a.key,
        k = a.ref,
        f = a._owner;

    if (null != b) {
      void 0 !== b.ref && (k = b.ref, f = J.current);
      void 0 !== b.key && (g = "" + b.key);
      var l = void 0;
      a.type && a.type.defaultProps && (l = a.type.defaultProps);

      for (c in b) K.call(b, c) && !L.hasOwnProperty(c) && (e[c] = void 0 === b[c] && void 0 !== l ? l[c] : b[c]);
    }

    c = arguments.length - 2;
    if (1 === c) e.children = d;else if (1 < c) {
      l = Array(c);

      for (var m = 0; m < c; m++) l[m] = arguments[m + 2];

      e.children = l;
    }
    return {
      $$typeof: p,
      type: a.type,
      key: g,
      ref: k,
      props: e,
      _owner: f
    };
  },
  createFactory: function (a) {
    var b = M.bind(null, a);
    b.type = a;
    return b;
  },
  isValidElement: N,
  version: "16.9.0",
  unstable_withSuspenseConfig: function (a, b) {
    var d = I.suspense;
    I.suspense = void 0 === b ? null : b;

    try {
      a();
    } finally {
      I.suspense = d;
    }
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentDispatcher: H,
    ReactCurrentBatchConfig: I,
    ReactCurrentOwner: J,
    IsSomeRendererActing: {
      current: !1
    },
    assign: h
  }
},
    Y = {
  default: X
},
    Z = Y && X || Y;
module.exports = Z.default || Z;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/


var aa = __webpack_require__(0),
    m = __webpack_require__(21),
    q = __webpack_require__(45);

function t(a) {
  for (var b = a.message, c = "https://reactjs.org/docs/error-decoder.html?invariant=" + b, d = 1; d < arguments.length; d++) c += "&args[]=" + encodeURIComponent(arguments[d]);

  a.message = "Minified React error #" + b + "; visit " + c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ";
  return a;
}

if (!aa) throw t(Error(227));
var ba = null,
    ca = {};

function da() {
  if (ba) for (var a in ca) {
    var b = ca[a],
        c = ba.indexOf(a);
    if (!(-1 < c)) throw t(Error(96), a);

    if (!ea[c]) {
      if (!b.extractEvents) throw t(Error(97), a);
      ea[c] = b;
      c = b.eventTypes;

      for (var d in c) {
        var e = void 0;
        var f = c[d],
            h = b,
            g = d;
        if (fa.hasOwnProperty(g)) throw t(Error(99), g);
        fa[g] = f;
        var k = f.phasedRegistrationNames;

        if (k) {
          for (e in k) k.hasOwnProperty(e) && ha(k[e], h, g);

          e = !0;
        } else f.registrationName ? (ha(f.registrationName, h, g), e = !0) : e = !1;

        if (!e) throw t(Error(98), d, a);
      }
    }
  }
}

function ha(a, b, c) {
  if (ia[a]) throw t(Error(100), a);
  ia[a] = b;
  ja[a] = b.eventTypes[c].dependencies;
}

var ea = [],
    fa = {},
    ia = {},
    ja = {};

function ka(a, b, c, d, e, f, h, g, k) {
  var l = Array.prototype.slice.call(arguments, 3);

  try {
    b.apply(c, l);
  } catch (n) {
    this.onError(n);
  }
}

var la = !1,
    ma = null,
    na = !1,
    oa = null,
    pa = {
  onError: function (a) {
    la = !0;
    ma = a;
  }
};

function qa(a, b, c, d, e, f, h, g, k) {
  la = !1;
  ma = null;
  ka.apply(pa, arguments);
}

function ra(a, b, c, d, e, f, h, g, k) {
  qa.apply(this, arguments);

  if (la) {
    if (la) {
      var l = ma;
      la = !1;
      ma = null;
    } else throw t(Error(198));

    na || (na = !0, oa = l);
  }
}

var sa = null,
    ta = null,
    va = null;

function wa(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = va(c);
  ra(d, b, void 0, a);
  a.currentTarget = null;
}

function xa(a, b) {
  if (null == b) throw t(Error(30));
  if (null == a) return b;

  if (Array.isArray(a)) {
    if (Array.isArray(b)) return a.push.apply(a, b), a;
    a.push(b);
    return a;
  }

  return Array.isArray(b) ? [a].concat(b) : [a, b];
}

function ya(a, b, c) {
  Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
}

var za = null;

function Aa(a) {
  if (a) {
    var b = a._dispatchListeners,
        c = a._dispatchInstances;
    if (Array.isArray(b)) for (var d = 0; d < b.length && !a.isPropagationStopped(); d++) wa(a, b[d], c[d]);else b && wa(a, b, c);
    a._dispatchListeners = null;
    a._dispatchInstances = null;
    a.isPersistent() || a.constructor.release(a);
  }
}

function Ba(a) {
  null !== a && (za = xa(za, a));
  a = za;
  za = null;

  if (a) {
    ya(a, Aa);
    if (za) throw t(Error(95));
    if (na) throw a = oa, na = !1, oa = null, a;
  }
}

var Ca = {
  injectEventPluginOrder: function (a) {
    if (ba) throw t(Error(101));
    ba = Array.prototype.slice.call(a);
    da();
  },
  injectEventPluginsByName: function (a) {
    var b = !1,
        c;

    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];

      if (!ca.hasOwnProperty(c) || ca[c] !== d) {
        if (ca[c]) throw t(Error(102), c);
        ca[c] = d;
        b = !0;
      }
    }

    b && da();
  }
};

function Da(a, b) {
  var c = a.stateNode;
  if (!c) return null;
  var d = sa(c);
  if (!d) return null;
  c = d[b];

  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;

    default:
      a = !1;
  }

  if (a) return null;
  if (c && "function" !== typeof c) throw t(Error(231), b, typeof c);
  return c;
}

var Ea = Math.random().toString(36).slice(2),
    Fa = "__reactInternalInstance$" + Ea,
    Ga = "__reactEventHandlers$" + Ea;

function Ha(a) {
  if (a[Fa]) return a[Fa];

  for (; !a[Fa];) if (a.parentNode) a = a.parentNode;else return null;

  a = a[Fa];
  return 5 === a.tag || 6 === a.tag ? a : null;
}

function Ia(a) {
  a = a[Fa];
  return !a || 5 !== a.tag && 6 !== a.tag ? null : a;
}

function Ja(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw t(Error(33));
}

function Ka(a) {
  return a[Ga] || null;
}

function La(a) {
  do a = a.return; while (a && 5 !== a.tag);

  return a ? a : null;
}

function Ma(a, b, c) {
  if (b = Da(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = xa(c._dispatchListeners, b), c._dispatchInstances = xa(c._dispatchInstances, a);
}

function Na(a) {
  if (a && a.dispatchConfig.phasedRegistrationNames) {
    for (var b = a._targetInst, c = []; b;) c.push(b), b = La(b);

    for (b = c.length; 0 < b--;) Ma(c[b], "captured", a);

    for (b = 0; b < c.length; b++) Ma(c[b], "bubbled", a);
  }
}

function Oa(a, b, c) {
  a && c && c.dispatchConfig.registrationName && (b = Da(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = xa(c._dispatchListeners, b), c._dispatchInstances = xa(c._dispatchInstances, a));
}

function Pa(a) {
  a && a.dispatchConfig.registrationName && Oa(a._targetInst, null, a);
}

function Qa(a) {
  ya(a, Na);
}

var Ra = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);

function Sa(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}

var Ta = {
  animationend: Sa("Animation", "AnimationEnd"),
  animationiteration: Sa("Animation", "AnimationIteration"),
  animationstart: Sa("Animation", "AnimationStart"),
  transitionend: Sa("Transition", "TransitionEnd")
},
    Ua = {},
    Va = {};
Ra && (Va = document.createElement("div").style, "AnimationEvent" in window || (delete Ta.animationend.animation, delete Ta.animationiteration.animation, delete Ta.animationstart.animation), "TransitionEvent" in window || delete Ta.transitionend.transition);

function Wa(a) {
  if (Ua[a]) return Ua[a];
  if (!Ta[a]) return a;
  var b = Ta[a],
      c;

  for (c in b) if (b.hasOwnProperty(c) && c in Va) return Ua[a] = b[c];

  return a;
}

var Xa = Wa("animationend"),
    Ya = Wa("animationiteration"),
    Za = Wa("animationstart"),
    ab = Wa("transitionend"),
    bb = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    cb = null,
    db = null,
    eb = null;

function fb() {
  if (eb) return eb;
  var a,
      b = db,
      c = b.length,
      d,
      e = "value" in cb ? cb.value : cb.textContent,
      f = e.length;

  for (a = 0; a < c && b[a] === e[a]; a++);

  var h = c - a;

  for (d = 1; d <= h && b[c - d] === e[f - d]; d++);

  return eb = e.slice(a, 1 < d ? 1 - d : void 0);
}

function gb() {
  return !0;
}

function hb() {
  return !1;
}

function y(a, b, c, d) {
  this.dispatchConfig = a;
  this._targetInst = b;
  this.nativeEvent = c;
  a = this.constructor.Interface;

  for (var e in a) a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);

  this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? gb : hb;
  this.isPropagationStopped = hb;
  return this;
}

m(y.prototype, {
  preventDefault: function () {
    this.defaultPrevented = !0;
    var a = this.nativeEvent;
    a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = gb);
  },
  stopPropagation: function () {
    var a = this.nativeEvent;
    a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = gb);
  },
  persist: function () {
    this.isPersistent = gb;
  },
  isPersistent: hb,
  destructor: function () {
    var a = this.constructor.Interface,
        b;

    for (b in a) this[b] = null;

    this.nativeEvent = this._targetInst = this.dispatchConfig = null;
    this.isPropagationStopped = this.isDefaultPrevented = hb;
    this._dispatchInstances = this._dispatchListeners = null;
  }
});
y.Interface = {
  type: null,
  target: null,
  currentTarget: function () {
    return null;
  },
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function (a) {
    return a.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

y.extend = function (a) {
  function b() {}

  function c() {
    return d.apply(this, arguments);
  }

  var d = this;
  b.prototype = d.prototype;
  var e = new b();
  m(e, c.prototype);
  c.prototype = e;
  c.prototype.constructor = c;
  c.Interface = m({}, d.Interface, a);
  c.extend = d.extend;
  ib(c);
  return c;
};

ib(y);

function jb(a, b, c, d) {
  if (this.eventPool.length) {
    var e = this.eventPool.pop();
    this.call(e, a, b, c, d);
    return e;
  }

  return new this(a, b, c, d);
}

function kb(a) {
  if (!(a instanceof this)) throw t(Error(279));
  a.destructor();
  10 > this.eventPool.length && this.eventPool.push(a);
}

function ib(a) {
  a.eventPool = [];
  a.getPooled = jb;
  a.release = kb;
}

var lb = y.extend({
  data: null
}),
    mb = y.extend({
  data: null
}),
    nb = [9, 13, 27, 32],
    ob = Ra && "CompositionEvent" in window,
    pb = null;
Ra && "documentMode" in document && (pb = document.documentMode);
var qb = Ra && "TextEvent" in window && !pb,
    sb = Ra && (!ob || pb && 8 < pb && 11 >= pb),
    tb = String.fromCharCode(32),
    ub = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: "onBeforeInput",
      captured: "onBeforeInputCapture"
    },
    dependencies: ["compositionend", "keypress", "textInput", "paste"]
  },
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: "onCompositionEnd",
      captured: "onCompositionEndCapture"
    },
    dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: "onCompositionStart",
      captured: "onCompositionStartCapture"
    },
    dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: "onCompositionUpdate",
      captured: "onCompositionUpdateCapture"
    },
    dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
  }
},
    vb = !1;

function wb(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== nb.indexOf(b.keyCode);

    case "keydown":
      return 229 !== b.keyCode;

    case "keypress":
    case "mousedown":
    case "blur":
      return !0;

    default:
      return !1;
  }
}

function xb(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}

var yb = !1;

function Ab(a, b) {
  switch (a) {
    case "compositionend":
      return xb(b);

    case "keypress":
      if (32 !== b.which) return null;
      vb = !0;
      return tb;

    case "textInput":
      return a = b.data, a === tb && vb ? null : a;

    default:
      return null;
  }
}

function Bb(a, b) {
  if (yb) return "compositionend" === a || !ob && wb(a, b) ? (a = fb(), eb = db = cb = null, yb = !1, a) : null;

  switch (a) {
    case "paste":
      return null;

    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }

      return null;

    case "compositionend":
      return sb && "ko" !== b.locale ? null : b.data;

    default:
      return null;
  }
}

var Cb = {
  eventTypes: ub,
  extractEvents: function (a, b, c, d) {
    var e = void 0;
    var f = void 0;
    if (ob) b: {
      switch (a) {
        case "compositionstart":
          e = ub.compositionStart;
          break b;

        case "compositionend":
          e = ub.compositionEnd;
          break b;

        case "compositionupdate":
          e = ub.compositionUpdate;
          break b;
      }

      e = void 0;
    } else yb ? wb(a, c) && (e = ub.compositionEnd) : "keydown" === a && 229 === c.keyCode && (e = ub.compositionStart);
    e ? (sb && "ko" !== c.locale && (yb || e !== ub.compositionStart ? e === ub.compositionEnd && yb && (f = fb()) : (cb = d, db = "value" in cb ? cb.value : cb.textContent, yb = !0)), e = lb.getPooled(e, b, c, d), f ? e.data = f : (f = xb(c), null !== f && (e.data = f)), Qa(e), f = e) : f = null;
    (a = qb ? Ab(a, c) : Bb(a, c)) ? (b = mb.getPooled(ub.beforeInput, b, c, d), b.data = a, Qa(b)) : b = null;
    return null === f ? b : null === b ? f : [f, b];
  }
},
    Db = null,
    Eb = null,
    Fb = null;

function Gb(a) {
  if (a = ta(a)) {
    if ("function" !== typeof Db) throw t(Error(280));
    var b = sa(a.stateNode);
    Db(a.stateNode, a.type, b);
  }
}

function Hb(a) {
  Eb ? Fb ? Fb.push(a) : Fb = [a] : Eb = a;
}

function Ib() {
  if (Eb) {
    var a = Eb,
        b = Fb;
    Fb = Eb = null;
    Gb(a);
    if (b) for (a = 0; a < b.length; a++) Gb(b[a]);
  }
}

function Jb(a, b) {
  return a(b);
}

function Kb(a, b, c, d) {
  return a(b, c, d);
}

function Lb() {}

var Mb = Jb,
    Nb = !1;

function Ob() {
  if (null !== Eb || null !== Fb) Lb(), Ib();
}

var Pb = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0
};

function Qb(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!Pb[a.type] : "textarea" === b ? !0 : !1;
}

function Rb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}

function Sb(a) {
  if (!Ra) return !1;
  a = "on" + a;
  var b = a in document;
  b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = "function" === typeof b[a]);
  return b;
}

function Tb(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}

function Ub(a) {
  var b = Tb(a) ? "checked" : "value",
      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
      d = "" + a[b];

  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get,
        f = c.set;
    Object.defineProperty(a, b, {
      configurable: !0,
      get: function () {
        return e.call(this);
      },
      set: function (a) {
        d = "" + a;
        f.call(this, a);
      }
    });
    Object.defineProperty(a, b, {
      enumerable: c.enumerable
    });
    return {
      getValue: function () {
        return d;
      },
      setValue: function (a) {
        d = "" + a;
      },
      stopTracking: function () {
        a._valueTracker = null;
        delete a[b];
      }
    };
  }
}

function Vb(a) {
  a._valueTracker || (a._valueTracker = Ub(a));
}

function Wb(a) {
  if (!a) return !1;
  var b = a._valueTracker;
  if (!b) return !0;
  var c = b.getValue();
  var d = "";
  a && (d = Tb(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), !0) : !1;
}

var Xb = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
Xb.hasOwnProperty("ReactCurrentDispatcher") || (Xb.ReactCurrentDispatcher = {
  current: null
});
Xb.hasOwnProperty("ReactCurrentBatchConfig") || (Xb.ReactCurrentBatchConfig = {
  suspense: null
});
var Yb = /^(.*)[\\\/]/,
    B = "function" === typeof Symbol && Symbol.for,
    Zb = B ? Symbol.for("react.element") : 60103,
    $b = B ? Symbol.for("react.portal") : 60106,
    ac = B ? Symbol.for("react.fragment") : 60107,
    bc = B ? Symbol.for("react.strict_mode") : 60108,
    cc = B ? Symbol.for("react.profiler") : 60114,
    dc = B ? Symbol.for("react.provider") : 60109,
    ec = B ? Symbol.for("react.context") : 60110,
    fc = B ? Symbol.for("react.concurrent_mode") : 60111,
    gc = B ? Symbol.for("react.forward_ref") : 60112,
    hc = B ? Symbol.for("react.suspense") : 60113,
    ic = B ? Symbol.for("react.suspense_list") : 60120,
    jc = B ? Symbol.for("react.memo") : 60115,
    kc = B ? Symbol.for("react.lazy") : 60116;
B && Symbol.for("react.fundamental");
B && Symbol.for("react.responder");
var lc = "function" === typeof Symbol && Symbol.iterator;

function mc(a) {
  if (null === a || "object" !== typeof a) return null;
  a = lc && a[lc] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

function oc(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;

  switch (a) {
    case ac:
      return "Fragment";

    case $b:
      return "Portal";

    case cc:
      return "Profiler";

    case bc:
      return "StrictMode";

    case hc:
      return "Suspense";

    case ic:
      return "SuspenseList";
  }

  if ("object" === typeof a) switch (a.$$typeof) {
    case ec:
      return "Context.Consumer";

    case dc:
      return "Context.Provider";

    case gc:
      var b = a.render;
      b = b.displayName || b.name || "";
      return a.displayName || ("" !== b ? "ForwardRef(" + b + ")" : "ForwardRef");

    case jc:
      return oc(a.type);

    case kc:
      if (a = 1 === a._status ? a._result : null) return oc(a);
  }
  return null;
}

function pc(a) {
  var b = "";

  do {
    a: switch (a.tag) {
      case 3:
      case 4:
      case 6:
      case 7:
      case 10:
      case 9:
        var c = "";
        break a;

      default:
        var d = a._debugOwner,
            e = a._debugSource,
            f = oc(a.type);
        c = null;
        d && (c = oc(d.type));
        d = f;
        f = "";
        e ? f = " (at " + e.fileName.replace(Yb, "") + ":" + e.lineNumber + ")" : c && (f = " (created by " + c + ")");
        c = "\n    in " + (d || "Unknown") + f;
    }

    b += c;
    a = a.return;
  } while (a);

  return b;
}

var qc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    rc = Object.prototype.hasOwnProperty,
    sc = {},
    tc = {};

function uc(a) {
  if (rc.call(tc, a)) return !0;
  if (rc.call(sc, a)) return !1;
  if (qc.test(a)) return tc[a] = !0;
  sc[a] = !0;
  return !1;
}

function vc(a, b, c, d) {
  if (null !== c && 0 === c.type) return !1;

  switch (typeof b) {
    case "function":
    case "symbol":
      return !0;

    case "boolean":
      if (d) return !1;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;

    default:
      return !1;
  }
}

function wc(a, b, c, d) {
  if (null === b || "undefined" === typeof b || vc(a, b, c, d)) return !0;
  if (d) return !1;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;

    case 4:
      return !1 === b;

    case 5:
      return isNaN(b);

    case 6:
      return isNaN(b) || 1 > b;
  }
  return !1;
}

function D(a, b, c, d, e, f) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
}

var F = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (a) {
  F[a] = new D(a, 0, !1, a, null, !1);
}));
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (a) {
  var b = a[0];
  F[b] = new D(b, 1, !1, a[1], null, !1);
}));
["contentEditable", "draggable", "spellCheck", "value"].forEach((function (a) {
  F[a] = new D(a, 2, !1, a.toLowerCase(), null, !1);
}));
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (a) {
  F[a] = new D(a, 2, !1, a, null, !1);
}));
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (a) {
  F[a] = new D(a, 3, !1, a.toLowerCase(), null, !1);
}));
["checked", "multiple", "muted", "selected"].forEach((function (a) {
  F[a] = new D(a, 3, !0, a, null, !1);
}));
["capture", "download"].forEach((function (a) {
  F[a] = new D(a, 4, !1, a, null, !1);
}));
["cols", "rows", "size", "span"].forEach((function (a) {
  F[a] = new D(a, 6, !1, a, null, !1);
}));
["rowSpan", "start"].forEach((function (a) {
  F[a] = new D(a, 5, !1, a.toLowerCase(), null, !1);
}));
var xc = /[\-:]([a-z])/g;

function yc(a) {
  return a[1].toUpperCase();
}

"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (a) {
  var b = a.replace(xc, yc);
  F[b] = new D(b, 1, !1, a, null, !1);
}));
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (a) {
  var b = a.replace(xc, yc);
  F[b] = new D(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1);
}));
["xml:base", "xml:lang", "xml:space"].forEach((function (a) {
  var b = a.replace(xc, yc);
  F[b] = new D(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1);
}));
["tabIndex", "crossOrigin"].forEach((function (a) {
  F[a] = new D(a, 1, !1, a.toLowerCase(), null, !1);
}));
F.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0);
["src", "href", "action", "formAction"].forEach((function (a) {
  F[a] = new D(a, 1, !1, a.toLowerCase(), null, !0);
}));

function zc(a, b, c, d) {
  var e = F.hasOwnProperty(b) ? F[b] : null;
  var f = null !== e ? 0 === e.type : d ? !1 : !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1] ? !1 : !0;
  f || (wc(b, c, e, d) && (c = null), d || null === e ? uc(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? !1 : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && !0 === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
}

function Ac(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;

    default:
      return "";
  }
}

function Bc(a, b) {
  var c = b.checked;
  return m({}, b, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: null != c ? c : a._wrapperState.initialChecked
  });
}

function Cc(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue,
      d = null != b.checked ? b.checked : b.defaultChecked;
  c = Ac(null != b.value ? b.value : c);
  a._wrapperState = {
    initialChecked: d,
    initialValue: c,
    controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value
  };
}

function Dc(a, b) {
  b = b.checked;
  null != b && zc(a, "checked", b, !1);
}

function Ec(a, b) {
  Dc(a, b);
  var c = Ac(b.value),
      d = b.type;
  if (null != c) {
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
  } else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? Fc(a, b.type, c) : b.hasOwnProperty("defaultValue") && Fc(a, b.type, Ac(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}

function Gc(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }

  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !a.defaultChecked;
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}

function Fc(a, b, c) {
  if ("number" !== b || a.ownerDocument.activeElement !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}

var Hc = {
  change: {
    phasedRegistrationNames: {
      bubbled: "onChange",
      captured: "onChangeCapture"
    },
    dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
  }
};

function Ic(a, b, c) {
  a = y.getPooled(Hc.change, a, b, c);
  a.type = "change";
  Hb(c);
  Qa(a);
  return a;
}

var Jc = null,
    Kc = null;

function Lc(a) {
  Ba(a);
}

function Mc(a) {
  var b = Ja(a);
  if (Wb(b)) return a;
}

function Nc(a, b) {
  if ("change" === a) return b;
}

var Oc = !1;
Ra && (Oc = Sb("input") && (!document.documentMode || 9 < document.documentMode));

function Pc() {
  Jc && (Jc.detachEvent("onpropertychange", Qc), Kc = Jc = null);
}

function Qc(a) {
  if ("value" === a.propertyName && Mc(Kc)) if (a = Ic(Kc, a, Rb(a)), Nb) Ba(a);else {
    Nb = !0;

    try {
      Jb(Lc, a);
    } finally {
      Nb = !1, Ob();
    }
  }
}

function Rc(a, b, c) {
  "focus" === a ? (Pc(), Jc = b, Kc = c, Jc.attachEvent("onpropertychange", Qc)) : "blur" === a && Pc();
}

function Sc(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return Mc(Kc);
}

function Tc(a, b) {
  if ("click" === a) return Mc(b);
}

function Uc(a, b) {
  if ("input" === a || "change" === a) return Mc(b);
}

var Vc = {
  eventTypes: Hc,
  _isInputEventSupported: Oc,
  extractEvents: function (a, b, c, d) {
    var e = b ? Ja(b) : window,
        f = void 0,
        h = void 0,
        g = e.nodeName && e.nodeName.toLowerCase();
    "select" === g || "input" === g && "file" === e.type ? f = Nc : Qb(e) ? Oc ? f = Uc : (f = Sc, h = Rc) : (g = e.nodeName) && "input" === g.toLowerCase() && ("checkbox" === e.type || "radio" === e.type) && (f = Tc);
    if (f && (f = f(a, b))) return Ic(f, c, d);
    h && h(a, e, b);
    "blur" === a && (a = e._wrapperState) && a.controlled && "number" === e.type && Fc(e, "number", e.value);
  }
},
    Wc = y.extend({
  view: null,
  detail: null
}),
    Xc = {
  Alt: "altKey",
  Control: "ctrlKey",
  Meta: "metaKey",
  Shift: "shiftKey"
};

function Yc(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Xc[a]) ? !!b[a] : !1;
}

function Zc() {
  return Yc;
}

var $c = 0,
    ad = 0,
    bd = !1,
    cd = !1,
    dd = Wc.extend({
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  pageX: null,
  pageY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: Zc,
  button: null,
  buttons: null,
  relatedTarget: function (a) {
    return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
  },
  movementX: function (a) {
    if ("movementX" in a) return a.movementX;
    var b = $c;
    $c = a.screenX;
    return bd ? "mousemove" === a.type ? a.screenX - b : 0 : (bd = !0, 0);
  },
  movementY: function (a) {
    if ("movementY" in a) return a.movementY;
    var b = ad;
    ad = a.screenY;
    return cd ? "mousemove" === a.type ? a.screenY - b : 0 : (cd = !0, 0);
  }
}),
    ed = dd.extend({
  pointerId: null,
  width: null,
  height: null,
  pressure: null,
  tangentialPressure: null,
  tiltX: null,
  tiltY: null,
  twist: null,
  pointerType: null,
  isPrimary: null
}),
    fd = {
  mouseEnter: {
    registrationName: "onMouseEnter",
    dependencies: ["mouseout", "mouseover"]
  },
  mouseLeave: {
    registrationName: "onMouseLeave",
    dependencies: ["mouseout", "mouseover"]
  },
  pointerEnter: {
    registrationName: "onPointerEnter",
    dependencies: ["pointerout", "pointerover"]
  },
  pointerLeave: {
    registrationName: "onPointerLeave",
    dependencies: ["pointerout", "pointerover"]
  }
},
    gd = {
  eventTypes: fd,
  extractEvents: function (a, b, c, d) {
    var e = "mouseover" === a || "pointerover" === a,
        f = "mouseout" === a || "pointerout" === a;
    if (e && (c.relatedTarget || c.fromElement) || !f && !e) return null;
    e = d.window === d ? d : (e = d.ownerDocument) ? e.defaultView || e.parentWindow : window;
    f ? (f = b, b = (b = c.relatedTarget || c.toElement) ? Ha(b) : null) : f = null;
    if (f === b) return null;
    var h = void 0,
        g = void 0,
        k = void 0,
        l = void 0;
    if ("mouseout" === a || "mouseover" === a) h = dd, g = fd.mouseLeave, k = fd.mouseEnter, l = "mouse";else if ("pointerout" === a || "pointerover" === a) h = ed, g = fd.pointerLeave, k = fd.pointerEnter, l = "pointer";
    var n = null == f ? e : Ja(f);
    e = null == b ? e : Ja(b);
    a = h.getPooled(g, f, c, d);
    a.type = l + "leave";
    a.target = n;
    a.relatedTarget = e;
    c = h.getPooled(k, b, c, d);
    c.type = l + "enter";
    c.target = e;
    c.relatedTarget = n;
    d = b;
    if (f && d) a: {
      b = f;
      e = d;
      l = 0;

      for (h = b; h; h = La(h)) l++;

      h = 0;

      for (k = e; k; k = La(k)) h++;

      for (; 0 < l - h;) b = La(b), l--;

      for (; 0 < h - l;) e = La(e), h--;

      for (; l--;) {
        if (b === e || b === e.alternate) break a;
        b = La(b);
        e = La(e);
      }

      b = null;
    } else b = null;
    e = b;

    for (b = []; f && f !== e;) {
      l = f.alternate;
      if (null !== l && l === e) break;
      b.push(f);
      f = La(f);
    }

    for (f = []; d && d !== e;) {
      l = d.alternate;
      if (null !== l && l === e) break;
      f.push(d);
      d = La(d);
    }

    for (d = 0; d < b.length; d++) Oa(b[d], "bubbled", a);

    for (d = f.length; 0 < d--;) Oa(f[d], "captured", c);

    return [a, c];
  }
};

function hd(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}

var id = Object.prototype.hasOwnProperty;

function jd(a, b) {
  if (hd(a, b)) return !0;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
  var c = Object.keys(a),
      d = Object.keys(b);
  if (c.length !== d.length) return !1;

  for (d = 0; d < c.length; d++) if (!id.call(b, c[d]) || !hd(a[c[d]], b[c[d]])) return !1;

  return !0;
}

function kd(a, b) {
  return {
    responder: a,
    props: b
  };
}

new Map();
new Map();
new Set();
new Map();

function ld(a) {
  var b = a;
  if (a.alternate) for (; b.return;) b = b.return;else {
    if (0 !== (b.effectTag & 2)) return 1;

    for (; b.return;) if (b = b.return, 0 !== (b.effectTag & 2)) return 1;
  }
  return 3 === b.tag ? 2 : 3;
}

function od(a) {
  if (2 !== ld(a)) throw t(Error(188));
}

function pd(a) {
  var b = a.alternate;

  if (!b) {
    b = ld(a);
    if (3 === b) throw t(Error(188));
    return 1 === b ? null : a;
  }

  for (var c = a, d = b;;) {
    var e = c.return;
    if (null === e) break;
    var f = e.alternate;

    if (null === f) {
      d = e.return;

      if (null !== d) {
        c = d;
        continue;
      }

      break;
    }

    if (e.child === f.child) {
      for (f = e.child; f;) {
        if (f === c) return od(e), a;
        if (f === d) return od(e), b;
        f = f.sibling;
      }

      throw t(Error(188));
    }

    if (c.return !== d.return) c = e, d = f;else {
      for (var h = !1, g = e.child; g;) {
        if (g === c) {
          h = !0;
          c = e;
          d = f;
          break;
        }

        if (g === d) {
          h = !0;
          d = e;
          c = f;
          break;
        }

        g = g.sibling;
      }

      if (!h) {
        for (g = f.child; g;) {
          if (g === c) {
            h = !0;
            c = f;
            d = e;
            break;
          }

          if (g === d) {
            h = !0;
            d = f;
            c = e;
            break;
          }

          g = g.sibling;
        }

        if (!h) throw t(Error(189));
      }
    }
    if (c.alternate !== d) throw t(Error(190));
  }

  if (3 !== c.tag) throw t(Error(188));
  return c.stateNode.current === c ? a : b;
}

function qd(a) {
  a = pd(a);
  if (!a) return null;

  for (var b = a;;) {
    if (5 === b.tag || 6 === b.tag) return b;
    if (b.child) b.child.return = b, b = b.child;else {
      if (b === a) break;

      for (; !b.sibling;) {
        if (!b.return || b.return === a) return null;
        b = b.return;
      }

      b.sibling.return = b.return;
      b = b.sibling;
    }
  }

  return null;
}

var rd = y.extend({
  animationName: null,
  elapsedTime: null,
  pseudoElement: null
}),
    sd = y.extend({
  clipboardData: function (a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  }
}),
    td = Wc.extend({
  relatedTarget: null
});

function ud(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}

var vd = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
},
    wd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
},
    xd = Wc.extend({
  key: function (a) {
    if (a.key) {
      var b = vd[a.key] || a.key;
      if ("Unidentified" !== b) return b;
    }

    return "keypress" === a.type ? (a = ud(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? wd[a.keyCode] || "Unidentified" : "";
  },
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: Zc,
  charCode: function (a) {
    return "keypress" === a.type ? ud(a) : 0;
  },
  keyCode: function (a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  },
  which: function (a) {
    return "keypress" === a.type ? ud(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }
}),
    yd = dd.extend({
  dataTransfer: null
}),
    zd = Wc.extend({
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: Zc
}),
    Ad = y.extend({
  propertyName: null,
  elapsedTime: null,
  pseudoElement: null
}),
    Bd = dd.extend({
  deltaX: function (a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function (a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: null,
  deltaMode: null
}),
    Cd = [["blur", "blur", 0], ["cancel", "cancel", 0], ["click", "click", 0], ["close", "close", 0], ["contextmenu", "contextMenu", 0], ["copy", "copy", 0], ["cut", "cut", 0], ["auxclick", "auxClick", 0], ["dblclick", "doubleClick", 0], ["dragend", "dragEnd", 0], ["dragstart", "dragStart", 0], ["drop", "drop", 0], ["focus", "focus", 0], ["input", "input", 0], ["invalid", "invalid", 0], ["keydown", "keyDown", 0], ["keypress", "keyPress", 0], ["keyup", "keyUp", 0], ["mousedown", "mouseDown", 0], ["mouseup", "mouseUp", 0], ["paste", "paste", 0], ["pause", "pause", 0], ["play", "play", 0], ["pointercancel", "pointerCancel", 0], ["pointerdown", "pointerDown", 0], ["pointerup", "pointerUp", 0], ["ratechange", "rateChange", 0], ["reset", "reset", 0], ["seeked", "seeked", 0], ["submit", "submit", 0], ["touchcancel", "touchCancel", 0], ["touchend", "touchEnd", 0], ["touchstart", "touchStart", 0], ["volumechange", "volumeChange", 0], ["drag", "drag", 1], ["dragenter", "dragEnter", 1], ["dragexit", "dragExit", 1], ["dragleave", "dragLeave", 1], ["dragover", "dragOver", 1], ["mousemove", "mouseMove", 1], ["mouseout", "mouseOut", 1], ["mouseover", "mouseOver", 1], ["pointermove", "pointerMove", 1], ["pointerout", "pointerOut", 1], ["pointerover", "pointerOver", 1], ["scroll", "scroll", 1], ["toggle", "toggle", 1], ["touchmove", "touchMove", 1], ["wheel", "wheel", 1], ["abort", "abort", 2], [Xa, "animationEnd", 2], [Ya, "animationIteration", 2], [Za, "animationStart", 2], ["canplay", "canPlay", 2], ["canplaythrough", "canPlayThrough", 2], ["durationchange", "durationChange", 2], ["emptied", "emptied", 2], ["encrypted", "encrypted", 2], ["ended", "ended", 2], ["error", "error", 2], ["gotpointercapture", "gotPointerCapture", 2], ["load", "load", 2], ["loadeddata", "loadedData", 2], ["loadedmetadata", "loadedMetadata", 2], ["loadstart", "loadStart", 2], ["lostpointercapture", "lostPointerCapture", 2], ["playing", "playing", 2], ["progress", "progress", 2], ["seeking", "seeking", 2], ["stalled", "stalled", 2], ["suspend", "suspend", 2], ["timeupdate", "timeUpdate", 2], [ab, "transitionEnd", 2], ["waiting", "waiting", 2]],
    Dd = {},
    Ed = {},
    Fd = 0;

for (; Fd < Cd.length; Fd++) {
  var Gd = Cd[Fd],
      Hd = Gd[0],
      Id = Gd[1],
      Jd = Gd[2],
      Kd = "on" + (Id[0].toUpperCase() + Id.slice(1)),
      Ld = {
    phasedRegistrationNames: {
      bubbled: Kd,
      captured: Kd + "Capture"
    },
    dependencies: [Hd],
    eventPriority: Jd
  };
  Dd[Id] = Ld;
  Ed[Hd] = Ld;
}

var Md = {
  eventTypes: Dd,
  getEventPriority: function (a) {
    a = Ed[a];
    return void 0 !== a ? a.eventPriority : 2;
  },
  extractEvents: function (a, b, c, d) {
    var e = Ed[a];
    if (!e) return null;

    switch (a) {
      case "keypress":
        if (0 === ud(c)) return null;

      case "keydown":
      case "keyup":
        a = xd;
        break;

      case "blur":
      case "focus":
        a = td;
        break;

      case "click":
        if (2 === c.button) return null;

      case "auxclick":
      case "dblclick":
      case "mousedown":
      case "mousemove":
      case "mouseup":
      case "mouseout":
      case "mouseover":
      case "contextmenu":
        a = dd;
        break;

      case "drag":
      case "dragend":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "dragstart":
      case "drop":
        a = yd;
        break;

      case "touchcancel":
      case "touchend":
      case "touchmove":
      case "touchstart":
        a = zd;
        break;

      case Xa:
      case Ya:
      case Za:
        a = rd;
        break;

      case ab:
        a = Ad;
        break;

      case "scroll":
        a = Wc;
        break;

      case "wheel":
        a = Bd;
        break;

      case "copy":
      case "cut":
      case "paste":
        a = sd;
        break;

      case "gotpointercapture":
      case "lostpointercapture":
      case "pointercancel":
      case "pointerdown":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "pointerup":
        a = ed;
        break;

      default:
        a = y;
    }

    b = a.getPooled(e, b, c, d);
    Qa(b);
    return b;
  }
},
    Nd = Md.getEventPriority,
    Od = [];

function Pd(a) {
  var b = a.targetInst,
      c = b;

  do {
    if (!c) {
      a.ancestors.push(c);
      break;
    }

    var d;

    for (d = c; d.return;) d = d.return;

    d = 3 !== d.tag ? null : d.stateNode.containerInfo;
    if (!d) break;
    a.ancestors.push(c);
    c = Ha(d);
  } while (c);

  for (c = 0; c < a.ancestors.length; c++) {
    b = a.ancestors[c];
    var e = Rb(a.nativeEvent);
    d = a.topLevelType;

    for (var f = a.nativeEvent, h = null, g = 0; g < ea.length; g++) {
      var k = ea[g];
      k && (k = k.extractEvents(d, b, f, e)) && (h = xa(h, k));
    }

    Ba(h);
  }
}

var Qd = !0;

function G(a, b) {
  Rd(b, a, !1);
}

function Rd(a, b, c) {
  switch (Nd(b)) {
    case 0:
      var d = Sd.bind(null, b, 1);
      break;

    case 1:
      d = Td.bind(null, b, 1);
      break;

    default:
      d = Ud.bind(null, b, 1);
  }

  c ? a.addEventListener(b, d, !0) : a.addEventListener(b, d, !1);
}

function Sd(a, b, c) {
  Nb || Lb();
  var d = Ud,
      e = Nb;
  Nb = !0;

  try {
    Kb(d, a, b, c);
  } finally {
    (Nb = e) || Ob();
  }
}

function Td(a, b, c) {
  Ud(a, b, c);
}

function Ud(a, b, c) {
  if (Qd) {
    b = Rb(c);
    b = Ha(b);
    null === b || "number" !== typeof b.tag || 2 === ld(b) || (b = null);

    if (Od.length) {
      var d = Od.pop();
      d.topLevelType = a;
      d.nativeEvent = c;
      d.targetInst = b;
      a = d;
    } else a = {
      topLevelType: a,
      nativeEvent: c,
      targetInst: b,
      ancestors: []
    };

    try {
      if (c = a, Nb) Pd(c, void 0);else {
        Nb = !0;

        try {
          Mb(Pd, c, void 0);
        } finally {
          Nb = !1, Ob();
        }
      }
    } finally {
      a.topLevelType = null, a.nativeEvent = null, a.targetInst = null, a.ancestors.length = 0, 10 > Od.length && Od.push(a);
    }
  }
}

var Vd = new ("function" === typeof WeakMap ? WeakMap : Map)();

function Wd(a) {
  var b = Vd.get(a);
  void 0 === b && (b = new Set(), Vd.set(a, b));
  return b;
}

function Xd(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;

  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}

function Yd(a) {
  for (; a && a.firstChild;) a = a.firstChild;

  return a;
}

function Zd(a, b) {
  var c = Yd(a);
  a = 0;

  for (var d; c;) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return {
        node: c,
        offset: b - a
      };
      a = d;
    }

    a: {
      for (; c;) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }

        c = c.parentNode;
      }

      c = void 0;
    }

    c = Yd(c);
  }
}

function $d(a, b) {
  return a && b ? a === b ? !0 : a && 3 === a.nodeType ? !1 : b && 3 === b.nodeType ? $d(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : !1 : !1;
}

function ae() {
  for (var a = window, b = Xd(); b instanceof a.HTMLIFrameElement;) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = !1;
    }

    if (c) a = b.contentWindow;else break;
    b = Xd(a.document);
  }

  return b;
}

function be(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}

var ce = Ra && "documentMode" in document && 11 >= document.documentMode,
    de = {
  select: {
    phasedRegistrationNames: {
      bubbled: "onSelect",
      captured: "onSelectCapture"
    },
    dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
  }
},
    ee = null,
    fe = null,
    ge = null,
    he = !1;

function ie(a, b) {
  var c = b.window === b ? b.document : 9 === b.nodeType ? b : b.ownerDocument;
  if (he || null == ee || ee !== Xd(c)) return null;
  c = ee;
  "selectionStart" in c && be(c) ? c = {
    start: c.selectionStart,
    end: c.selectionEnd
  } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
    anchorNode: c.anchorNode,
    anchorOffset: c.anchorOffset,
    focusNode: c.focusNode,
    focusOffset: c.focusOffset
  });
  return ge && jd(ge, c) ? null : (ge = c, a = y.getPooled(de.select, fe, a, b), a.type = "select", a.target = ee, Qa(a), a);
}

var je = {
  eventTypes: de,
  extractEvents: function (a, b, c, d) {
    var e = d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument,
        f;

    if (!(f = !e)) {
      a: {
        e = Wd(e);
        f = ja.onSelect;

        for (var h = 0; h < f.length; h++) if (!e.has(f[h])) {
          e = !1;
          break a;
        }

        e = !0;
      }

      f = !e;
    }

    if (f) return null;
    e = b ? Ja(b) : window;

    switch (a) {
      case "focus":
        if (Qb(e) || "true" === e.contentEditable) ee = e, fe = b, ge = null;
        break;

      case "blur":
        ge = fe = ee = null;
        break;

      case "mousedown":
        he = !0;
        break;

      case "contextmenu":
      case "mouseup":
      case "dragend":
        return he = !1, ie(c, d);

      case "selectionchange":
        if (ce) break;

      case "keydown":
      case "keyup":
        return ie(c, d);
    }

    return null;
  }
};
Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
sa = Ka;
ta = Ia;
va = Ja;
Ca.injectEventPluginsByName({
  SimpleEventPlugin: Md,
  EnterLeaveEventPlugin: gd,
  ChangeEventPlugin: Vc,
  SelectEventPlugin: je,
  BeforeInputEventPlugin: Cb
});

function ke(a) {
  var b = "";
  aa.Children.forEach(a, (function (a) {
    null != a && (b += a);
  }));
  return b;
}

function le(a, b) {
  a = m({
    children: void 0
  }, b);
  if (b = ke(b.children)) a.children = b;
  return a;
}

function me(a, b, c, d) {
  a = a.options;

  if (b) {
    b = {};

    for (var e = 0; e < c.length; e++) b["$" + c[e]] = !0;

    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
  } else {
    c = "" + Ac(c);
    b = null;

    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = !0;
        d && (a[e].defaultSelected = !0);
        return;
      }

      null !== b || a[e].disabled || (b = a[e]);
    }

    null !== b && (b.selected = !0);
  }
}

function ne(a, b) {
  if (null != b.dangerouslySetInnerHTML) throw t(Error(91));
  return m({}, b, {
    value: void 0,
    defaultValue: void 0,
    children: "" + a._wrapperState.initialValue
  });
}

function oe(a, b) {
  var c = b.value;

  if (null == c) {
    c = b.defaultValue;
    b = b.children;

    if (null != b) {
      if (null != c) throw t(Error(92));

      if (Array.isArray(b)) {
        if (!(1 >= b.length)) throw t(Error(93));
        b = b[0];
      }

      c = b;
    }

    null == c && (c = "");
  }

  a._wrapperState = {
    initialValue: Ac(c)
  };
}

function pe(a, b) {
  var c = Ac(b.value),
      d = Ac(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}

function qe(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && (a.value = b);
}

var re = {
  html: "http://www.w3.org/1999/xhtml",
  mathml: "http://www.w3.org/1998/Math/MathML",
  svg: "http://www.w3.org/2000/svg"
};

function se(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";

    case "math":
      return "http://www.w3.org/1998/Math/MathML";

    default:
      return "http://www.w3.org/1999/xhtml";
  }
}

function te(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? se(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}

var ue = void 0,
    ve = (function (a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
    MSApp.execUnsafeLocalFunction((function () {
      return a(b, c, d, e);
    }));
  } : a;
})((function (a, b) {
  if (a.namespaceURI !== re.svg || "innerHTML" in a) a.innerHTML = b;else {
    ue = ue || document.createElement("div");
    ue.innerHTML = "<svg>" + b + "</svg>";

    for (b = ue.firstChild; a.firstChild;) a.removeChild(a.firstChild);

    for (; b.firstChild;) a.appendChild(b.firstChild);
  }
}));

function we(a, b) {
  if (b) {
    var c = a.firstChild;

    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }

  a.textContent = b;
}

var xe = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
},
    ye = ["Webkit", "ms", "Moz", "O"];
Object.keys(xe).forEach((function (a) {
  ye.forEach((function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    xe[b] = xe[a];
  }));
}));

function ze(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || xe.hasOwnProperty(a) && xe[a] ? ("" + b).trim() : b + "px";
}

function Ae(a, b) {
  a = a.style;

  for (var c in b) if (b.hasOwnProperty(c)) {
    var d = 0 === c.indexOf("--"),
        e = ze(c, b[c], d);
    "float" === c && (c = "cssFloat");
    d ? a.setProperty(c, e) : a[c] = e;
  }
}

var Ce = m({
  menuitem: !0
}, {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
});

function De(a, b) {
  if (b) {
    if (Ce[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw t(Error(137), a, "");

    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw t(Error(60));
      if (!("object" === typeof b.dangerouslySetInnerHTML && "__html" in b.dangerouslySetInnerHTML)) throw t(Error(61));
    }

    if (null != b.style && "object" !== typeof b.style) throw t(Error(62), "");
  }
}

function Ee(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;

  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;

    default:
      return !0;
  }
}

function Fe(a, b) {
  a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;
  var c = Wd(a);
  b = ja[b];

  for (var d = 0; d < b.length; d++) {
    var e = b[d];

    if (!c.has(e)) {
      switch (e) {
        case "scroll":
          Rd(a, "scroll", !0);
          break;

        case "focus":
        case "blur":
          Rd(a, "focus", !0);
          Rd(a, "blur", !0);
          c.add("blur");
          c.add("focus");
          break;

        case "cancel":
        case "close":
          Sb(e) && Rd(a, e, !0);
          break;

        case "invalid":
        case "submit":
        case "reset":
          break;

        default:
          -1 === bb.indexOf(e) && G(e, a);
      }

      c.add(e);
    }
  }
}

function Ge() {}

var He = null,
    Ie = null;

function Je(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }

  return !1;
}

function Ke(a, b) {
  return "textarea" === a || "option" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}

var Le = "function" === typeof setTimeout ? setTimeout : void 0,
    Me = "function" === typeof clearTimeout ? clearTimeout : void 0;

function Ne(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b) break;
  }

  return a;
}

new Set();
var Oe = [],
    Pe = -1;

function H(a) {
  0 > Pe || (a.current = Oe[Pe], Oe[Pe] = null, Pe--);
}

function J(a, b) {
  Pe++;
  Oe[Pe] = a.current;
  a.current = b;
}

var Qe = {},
    L = {
  current: Qe
},
    M = {
  current: !1
},
    Re = Qe;

function Se(a, b) {
  var c = a.type.contextTypes;
  if (!c) return Qe;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {},
      f;

  for (f in c) e[f] = b[f];

  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}

function N(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}

function Te(a) {
  H(M, a);
  H(L, a);
}

function Ue(a) {
  H(M, a);
  H(L, a);
}

function Ve(a, b, c) {
  if (L.current !== Qe) throw t(Error(168));
  J(L, b, a);
  J(M, c, a);
}

function We(a, b, c) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();

  for (var e in d) if (!(e in a)) throw t(Error(108), oc(b) || "Unknown", e);

  return m({}, c, d);
}

function Xe(a) {
  var b = a.stateNode;
  b = b && b.__reactInternalMemoizedMergedChildContext || Qe;
  Re = L.current;
  J(L, b, a);
  J(M, M.current, a);
  return !0;
}

function Ye(a, b, c) {
  var d = a.stateNode;
  if (!d) throw t(Error(169));
  c ? (b = We(a, b, Re), d.__reactInternalMemoizedMergedChildContext = b, H(M, a), H(L, a), J(L, b, a)) : H(M, a);
  J(M, c, a);
}

var Ze = q.unstable_runWithPriority,
    $e = q.unstable_scheduleCallback,
    af = q.unstable_cancelCallback,
    bf = q.unstable_shouldYield,
    cf = q.unstable_requestPaint,
    df = q.unstable_now,
    ef = q.unstable_getCurrentPriorityLevel,
    ff = q.unstable_ImmediatePriority,
    hf = q.unstable_UserBlockingPriority,
    jf = q.unstable_NormalPriority,
    kf = q.unstable_LowPriority,
    lf = q.unstable_IdlePriority,
    mf = {},
    nf = void 0 !== cf ? cf : function () {},
    of = null,
    pf = null,
    qf = !1,
    rf = df(),
    sf = 1E4 > rf ? df : function () {
  return df() - rf;
};

function tf() {
  switch (ef()) {
    case ff:
      return 99;

    case hf:
      return 98;

    case jf:
      return 97;

    case kf:
      return 96;

    case lf:
      return 95;

    default:
      throw t(Error(332));
  }
}

function uf(a) {
  switch (a) {
    case 99:
      return ff;

    case 98:
      return hf;

    case 97:
      return jf;

    case 96:
      return kf;

    case 95:
      return lf;

    default:
      throw t(Error(332));
  }
}

function vf(a, b) {
  a = uf(a);
  return Ze(a, b);
}

function wf(a, b, c) {
  a = uf(a);
  return $e(a, b, c);
}

function xf(a) {
  null === of ? (of = [a], pf = $e(ff, yf)) : of.push(a);
  return mf;
}

function O() {
  null !== pf && af(pf);
  yf();
}

function yf() {
  if (!qf && null !== of) {
    qf = !0;
    var a = 0;

    try {
      var b = of;
      vf(99, (function () {
        for (; a < b.length; a++) {
          var c = b[a];

          do c = c(!0); while (null !== c);
        }
      }));
      of = null;
    } catch (c) {
      throw null !== of && (of = of.slice(a + 1)), $e(ff, O), c;
    } finally {
      qf = !1;
    }
  }
}

function zf(a, b) {
  if (1073741823 === b) return 99;
  if (1 === b) return 95;
  a = 10 * (1073741821 - b) - 10 * (1073741821 - a);
  return 0 >= a ? 99 : 250 >= a ? 98 : 5250 >= a ? 97 : 95;
}

function Af(a, b) {
  if (a && a.defaultProps) {
    b = m({}, b);
    a = a.defaultProps;

    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
  }

  return b;
}

function Bf(a) {
  var b = a._result;

  switch (a._status) {
    case 1:
      return b;

    case 2:
      throw b;

    case 0:
      throw b;

    default:
      a._status = 0;
      b = a._ctor;
      b = b();
      b.then((function (b) {
        0 === a._status && (b = b.default, a._status = 1, a._result = b);
      }), (function (b) {
        0 === a._status && (a._status = 2, a._result = b);
      }));

      switch (a._status) {
        case 1:
          return a._result;

        case 2:
          throw a._result;
      }

      a._result = b;
      throw b;
  }
}

var Cf = {
  current: null
},
    Df = null,
    Ef = null,
    Ff = null;

function Gf() {
  Ff = Ef = Df = null;
}

function Hf(a, b) {
  var c = a.type._context;
  J(Cf, c._currentValue, a);
  c._currentValue = b;
}

function If(a) {
  var b = Cf.current;
  H(Cf, a);
  a.type._context._currentValue = b;
}

function Jf(a, b) {
  for (; null !== a;) {
    var c = a.alternate;
    if (a.childExpirationTime < b) a.childExpirationTime = b, null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);else if (null !== c && c.childExpirationTime < b) c.childExpirationTime = b;else break;
    a = a.return;
  }
}

function Kf(a, b) {
  Df = a;
  Ff = Ef = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (a.expirationTime >= b && (Lf = !0), a.firstContext = null);
}

function Mf(a, b) {
  if (Ff !== a && !1 !== b && 0 !== b) {
    if ("number" !== typeof b || 1073741823 === b) Ff = a, b = 1073741823;
    b = {
      context: a,
      observedBits: b,
      next: null
    };

    if (null === Ef) {
      if (null === Df) throw t(Error(308));
      Ef = b;
      Df.dependencies = {
        expirationTime: 0,
        firstContext: b,
        responders: null
      };
    } else Ef = Ef.next = b;
  }

  return a._currentValue;
}

var Nf = !1;

function Of(a) {
  return {
    baseState: a,
    firstUpdate: null,
    lastUpdate: null,
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,
    firstEffect: null,
    lastEffect: null,
    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
}

function Pf(a) {
  return {
    baseState: a.baseState,
    firstUpdate: a.firstUpdate,
    lastUpdate: a.lastUpdate,
    firstCapturedUpdate: null,
    lastCapturedUpdate: null,
    firstEffect: null,
    lastEffect: null,
    firstCapturedEffect: null,
    lastCapturedEffect: null
  };
}

function Qf(a, b) {
  return {
    expirationTime: a,
    suspenseConfig: b,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
    nextEffect: null
  };
}

function Rf(a, b) {
  null === a.lastUpdate ? a.firstUpdate = a.lastUpdate = b : (a.lastUpdate.next = b, a.lastUpdate = b);
}

function Sf(a, b) {
  var c = a.alternate;

  if (null === c) {
    var d = a.updateQueue;
    var e = null;
    null === d && (d = a.updateQueue = Of(a.memoizedState));
  } else d = a.updateQueue, e = c.updateQueue, null === d ? null === e ? (d = a.updateQueue = Of(a.memoizedState), e = c.updateQueue = Of(c.memoizedState)) : d = a.updateQueue = Pf(e) : null === e && (e = c.updateQueue = Pf(d));

  null === e || d === e ? Rf(d, b) : null === d.lastUpdate || null === e.lastUpdate ? (Rf(d, b), Rf(e, b)) : (Rf(d, b), e.lastUpdate = b);
}

function Tf(a, b) {
  var c = a.updateQueue;
  c = null === c ? a.updateQueue = Of(a.memoizedState) : Uf(a, c);
  null === c.lastCapturedUpdate ? c.firstCapturedUpdate = c.lastCapturedUpdate = b : (c.lastCapturedUpdate.next = b, c.lastCapturedUpdate = b);
}

function Uf(a, b) {
  var c = a.alternate;
  null !== c && b === c.updateQueue && (b = a.updateQueue = Pf(b));
  return b;
}

function Vf(a, b, c, d, e, f) {
  switch (c.tag) {
    case 1:
      return a = c.payload, "function" === typeof a ? a.call(f, d, e) : a;

    case 3:
      a.effectTag = a.effectTag & -2049 | 64;

    case 0:
      a = c.payload;
      e = "function" === typeof a ? a.call(f, d, e) : a;
      if (null === e || void 0 === e) break;
      return m({}, d, e);

    case 2:
      Nf = !0;
  }

  return d;
}

function Wf(a, b, c, d, e) {
  Nf = !1;
  b = Uf(a, b);

  for (var f = b.baseState, h = null, g = 0, k = b.firstUpdate, l = f; null !== k;) {
    var n = k.expirationTime;
    n < e ? (null === h && (h = k, f = l), g < n && (g = n)) : (Xf(n, k.suspenseConfig), l = Vf(a, b, k, l, c, d), null !== k.callback && (a.effectTag |= 32, k.nextEffect = null, null === b.lastEffect ? b.firstEffect = b.lastEffect = k : (b.lastEffect.nextEffect = k, b.lastEffect = k)));
    k = k.next;
  }

  n = null;

  for (k = b.firstCapturedUpdate; null !== k;) {
    var z = k.expirationTime;
    z < e ? (null === n && (n = k, null === h && (f = l)), g < z && (g = z)) : (l = Vf(a, b, k, l, c, d), null !== k.callback && (a.effectTag |= 32, k.nextEffect = null, null === b.lastCapturedEffect ? b.firstCapturedEffect = b.lastCapturedEffect = k : (b.lastCapturedEffect.nextEffect = k, b.lastCapturedEffect = k)));
    k = k.next;
  }

  null === h && (b.lastUpdate = null);
  null === n ? b.lastCapturedUpdate = null : a.effectTag |= 32;
  null === h && null === n && (f = l);
  b.baseState = f;
  b.firstUpdate = h;
  b.firstCapturedUpdate = n;
  a.expirationTime = g;
  a.memoizedState = l;
}

function Yf(a, b, c) {
  null !== b.firstCapturedUpdate && (null !== b.lastUpdate && (b.lastUpdate.next = b.firstCapturedUpdate, b.lastUpdate = b.lastCapturedUpdate), b.firstCapturedUpdate = b.lastCapturedUpdate = null);
  Zf(b.firstEffect, c);
  b.firstEffect = b.lastEffect = null;
  Zf(b.firstCapturedEffect, c);
  b.firstCapturedEffect = b.lastCapturedEffect = null;
}

function Zf(a, b) {
  for (; null !== a;) {
    var c = a.callback;

    if (null !== c) {
      a.callback = null;
      var d = b;
      if ("function" !== typeof c) throw t(Error(191), c);
      c.call(d);
    }

    a = a.nextEffect;
  }
}

var $f = Xb.ReactCurrentBatchConfig,
    ag = new aa.Component().refs;

function bg(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : m({}, b, c);
  a.memoizedState = c;
  d = a.updateQueue;
  null !== d && 0 === a.expirationTime && (d.baseState = c);
}

var fg = {
  isMounted: function (a) {
    return (a = a._reactInternalFiber) ? 2 === ld(a) : !1;
  },
  enqueueSetState: function (a, b, c) {
    a = a._reactInternalFiber;
    var d = cg(),
        e = $f.suspense;
    d = dg(d, a, e);
    e = Qf(d, e);
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    Sf(a, e);
    eg(a, d);
  },
  enqueueReplaceState: function (a, b, c) {
    a = a._reactInternalFiber;
    var d = cg(),
        e = $f.suspense;
    d = dg(d, a, e);
    e = Qf(d, e);
    e.tag = 1;
    e.payload = b;
    void 0 !== c && null !== c && (e.callback = c);
    Sf(a, e);
    eg(a, d);
  },
  enqueueForceUpdate: function (a, b) {
    a = a._reactInternalFiber;
    var c = cg(),
        d = $f.suspense;
    c = dg(c, a, d);
    d = Qf(c, d);
    d.tag = 2;
    void 0 !== b && null !== b && (d.callback = b);
    Sf(a, d);
    eg(a, c);
  }
};

function gg(a, b, c, d, e, f, h) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, h) : b.prototype && b.prototype.isPureReactComponent ? !jd(c, d) || !jd(e, f) : !0;
}

function hg(a, b, c) {
  var d = !1,
      e = Qe;
  var f = b.contextType;
  "object" === typeof f && null !== f ? f = Mf(f) : (e = N(b) ? Re : L.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? Se(a, e) : Qe);
  b = new b(c, f);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = fg;
  a.stateNode = b;
  b._reactInternalFiber = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}

function ig(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && fg.enqueueReplaceState(b, b.state, null);
}

function jg(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = ag;
  var f = b.contextType;
  "object" === typeof f && null !== f ? e.context = Mf(f) : (f = N(b) ? Re : L.current, e.context = Se(a, f));
  f = a.updateQueue;
  null !== f && (Wf(a, f, c, e, d), e.state = a.memoizedState);
  f = b.getDerivedStateFromProps;
  "function" === typeof f && (bg(a, b, f, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && fg.enqueueReplaceState(e, e.state, null), f = a.updateQueue, null !== f && (Wf(a, f, c, e, d), e.state = a.memoizedState));
  "function" === typeof e.componentDidMount && (a.effectTag |= 4);
}

var kg = Array.isArray;

function lg(a, b, c) {
  a = c.ref;

  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      var d = void 0;

      if (c) {
        if (1 !== c.tag) throw t(Error(309));
        d = c.stateNode;
      }

      if (!d) throw t(Error(147), a);
      var e = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === e) return b.ref;

      b = function (a) {
        var b = d.refs;
        b === ag && (b = d.refs = {});
        null === a ? delete b[e] : b[e] = a;
      };

      b._stringRef = e;
      return b;
    }

    if ("string" !== typeof a) throw t(Error(284));
    if (!c._owner) throw t(Error(290), a);
  }

  return a;
}

function mg(a, b) {
  if ("textarea" !== a.type) throw t(Error(31), "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, "");
}

function ng(a) {
  function b(b, c) {
    if (a) {
      var d = b.lastEffect;
      null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;
      c.nextEffect = null;
      c.effectTag = 8;
    }
  }

  function c(c, d) {
    if (!a) return null;

    for (; null !== d;) b(c, d), d = d.sibling;

    return null;
  }

  function d(a, b) {
    for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;

    return a;
  }

  function e(a, b, c) {
    a = og(a, b, c);
    a.index = 0;
    a.sibling = null;
    return a;
  }

  function f(b, c, d) {
    b.index = d;
    if (!a) return c;
    d = b.alternate;
    if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;
    b.effectTag = 2;
    return c;
  }

  function h(b) {
    a && null === b.alternate && (b.effectTag = 2);
    return b;
  }

  function g(a, b, c, d) {
    if (null === b || 6 !== b.tag) return b = pg(c, a.mode, d), b.return = a, b;
    b = e(b, c, d);
    b.return = a;
    return b;
  }

  function k(a, b, c, d) {
    if (null !== b && b.elementType === c.type) return d = e(b, c.props, d), d.ref = lg(a, b, c), d.return = a, d;
    d = qg(c.type, c.key, c.props, null, a.mode, d);
    d.ref = lg(a, b, c);
    d.return = a;
    return d;
  }

  function l(a, b, c, d) {
    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = rg(c, a.mode, d), b.return = a, b;
    b = e(b, c.children || [], d);
    b.return = a;
    return b;
  }

  function n(a, b, c, d, f) {
    if (null === b || 7 !== b.tag) return b = sg(c, a.mode, d, f), b.return = a, b;
    b = e(b, c, d);
    b.return = a;
    return b;
  }

  function z(a, b, c) {
    if ("string" === typeof b || "number" === typeof b) return b = pg("" + b, a.mode, c), b.return = a, b;

    if ("object" === typeof b && null !== b) {
      switch (b.$$typeof) {
        case Zb:
          return c = qg(b.type, b.key, b.props, null, a.mode, c), c.ref = lg(a, null, b), c.return = a, c;

        case $b:
          return b = rg(b, a.mode, c), b.return = a, b;
      }

      if (kg(b) || mc(b)) return b = sg(b, a.mode, c, null), b.return = a, b;
      mg(a, b);
    }

    return null;
  }

  function x(a, b, c, d) {
    var e = null !== b ? b.key : null;
    if ("string" === typeof c || "number" === typeof c) return null !== e ? null : g(a, b, "" + c, d);

    if ("object" === typeof c && null !== c) {
      switch (c.$$typeof) {
        case Zb:
          return c.key === e ? c.type === ac ? n(a, b, c.props.children, d, e) : k(a, b, c, d) : null;

        case $b:
          return c.key === e ? l(a, b, c, d) : null;
      }

      if (kg(c) || mc(c)) return null !== e ? null : n(a, b, c, d, null);
      mg(a, c);
    }

    return null;
  }

  function v(a, b, c, d, e) {
    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, g(b, a, "" + d, e);

    if ("object" === typeof d && null !== d) {
      switch (d.$$typeof) {
        case Zb:
          return a = a.get(null === d.key ? c : d.key) || null, d.type === ac ? n(b, a, d.props.children, e, d.key) : k(b, a, d, e);

        case $b:
          return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);
      }

      if (kg(d) || mc(d)) return a = a.get(c) || null, n(b, a, d, e, null);
      mg(b, d);
    }

    return null;
  }

  function rb(e, h, g, k) {
    for (var l = null, u = null, n = h, w = h = 0, C = null; null !== n && w < g.length; w++) {
      n.index > w ? (C = n, n = null) : C = n.sibling;
      var p = x(e, n, g[w], k);

      if (null === p) {
        null === n && (n = C);
        break;
      }

      a && n && null === p.alternate && b(e, n);
      h = f(p, h, w);
      null === u ? l = p : u.sibling = p;
      u = p;
      n = C;
    }

    if (w === g.length) return c(e, n), l;

    if (null === n) {
      for (; w < g.length; w++) n = z(e, g[w], k), null !== n && (h = f(n, h, w), null === u ? l = n : u.sibling = n, u = n);

      return l;
    }

    for (n = d(e, n); w < g.length; w++) C = v(n, e, w, g[w], k), null !== C && (a && null !== C.alternate && n.delete(null === C.key ? w : C.key), h = f(C, h, w), null === u ? l = C : u.sibling = C, u = C);

    a && n.forEach((function (a) {
      return b(e, a);
    }));
    return l;
  }

  function Be(e, h, g, k) {
    var l = mc(g);
    if ("function" !== typeof l) throw t(Error(150));
    g = l.call(g);
    if (null == g) throw t(Error(151));

    for (var n = l = null, u = h, w = h = 0, C = null, p = g.next(); null !== u && !p.done; w++, p = g.next()) {
      u.index > w ? (C = u, u = null) : C = u.sibling;
      var r = x(e, u, p.value, k);

      if (null === r) {
        null === u && (u = C);
        break;
      }

      a && u && null === r.alternate && b(e, u);
      h = f(r, h, w);
      null === n ? l = r : n.sibling = r;
      n = r;
      u = C;
    }

    if (p.done) return c(e, u), l;

    if (null === u) {
      for (; !p.done; w++, p = g.next()) p = z(e, p.value, k), null !== p && (h = f(p, h, w), null === n ? l = p : n.sibling = p, n = p);

      return l;
    }

    for (u = d(e, u); !p.done; w++, p = g.next()) p = v(u, e, w, p.value, k), null !== p && (a && null !== p.alternate && u.delete(null === p.key ? w : p.key), h = f(p, h, w), null === n ? l = p : n.sibling = p, n = p);

    a && u.forEach((function (a) {
      return b(e, a);
    }));
    return l;
  }

  return function (a, d, f, g) {
    var k = "object" === typeof f && null !== f && f.type === ac && null === f.key;
    k && (f = f.props.children);
    var l = "object" === typeof f && null !== f;
    if (l) switch (f.$$typeof) {
      case Zb:
        a: {
          l = f.key;

          for (k = d; null !== k;) {
            if (k.key === l) {
              if (7 === k.tag ? f.type === ac : k.elementType === f.type) {
                c(a, k.sibling);
                d = e(k, f.type === ac ? f.props.children : f.props, g);
                d.ref = lg(a, k, f);
                d.return = a;
                a = d;
                break a;
              }

              c(a, k);
              break;
            } else b(a, k);

            k = k.sibling;
          }

          f.type === ac ? (d = sg(f.props.children, a.mode, g, f.key), d.return = a, a = d) : (g = qg(f.type, f.key, f.props, null, a.mode, g), g.ref = lg(a, d, f), g.return = a, a = g);
        }

        return h(a);

      case $b:
        a: {
          for (k = f.key; null !== d;) {
            if (d.key === k) {
              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                c(a, d.sibling);
                d = e(d, f.children || [], g);
                d.return = a;
                a = d;
                break a;
              }

              c(a, d);
              break;
            } else b(a, d);

            d = d.sibling;
          }

          d = rg(f, a.mode, g);
          d.return = a;
          a = d;
        }

        return h(a);
    }
    if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f, g), d.return = a, a = d) : (c(a, d), d = pg(f, a.mode, g), d.return = a, a = d), h(a);
    if (kg(f)) return rb(a, d, f, g);
    if (mc(f)) return Be(a, d, f, g);
    l && mg(a, f);
    if ("undefined" === typeof f && !k) switch (a.tag) {
      case 1:
      case 0:
        throw a = a.type, t(Error(152), a.displayName || a.name || "Component");
    }
    return c(a, d);
  };
}

var tg = ng(!0),
    ug = ng(!1),
    vg = {},
    wg = {
  current: vg
},
    xg = {
  current: vg
},
    yg = {
  current: vg
};

function zg(a) {
  if (a === vg) throw t(Error(174));
  return a;
}

function Ag(a, b) {
  J(yg, b, a);
  J(xg, a, a);
  J(wg, vg, a);
  var c = b.nodeType;

  switch (c) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : te(null, "");
      break;

    default:
      c = 8 === c ? b.parentNode : b, b = c.namespaceURI || null, c = c.tagName, b = te(b, c);
  }

  H(wg, a);
  J(wg, b, a);
}

function Bg(a) {
  H(wg, a);
  H(xg, a);
  H(yg, a);
}

function Cg(a) {
  zg(yg.current);
  var b = zg(wg.current);
  var c = te(b, a.type);
  b !== c && (J(xg, a, a), J(wg, c, a));
}

function Dg(a) {
  xg.current === a && (H(wg, a), H(xg, a));
}

var Eg = 1,
    Fg = 1,
    Gg = 2,
    P = {
  current: 0
};

function Hg(a) {
  for (var b = a; null !== b;) {
    if (13 === b.tag) {
      if (null !== b.memoizedState) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.effectTag & 64)) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }

    if (b === a) break;

    for (; null === b.sibling;) {
      if (null === b.return || b.return === a) return null;
      b = b.return;
    }

    b.sibling.return = b.return;
    b = b.sibling;
  }

  return null;
}

var Ig = 0,
    Jg = 2,
    Kg = 4,
    Lg = 8,
    Mg = 16,
    Ng = 32,
    Og = 64,
    Pg = 128,
    Qg = Xb.ReactCurrentDispatcher,
    Rg = 0,
    Sg = null,
    Q = null,
    Tg = null,
    Ug = null,
    R = null,
    Vg = null,
    Wg = 0,
    Xg = null,
    Yg = 0,
    Zg = !1,
    $g = null,
    ah = 0;

function bh() {
  throw t(Error(321));
}

function ch(a, b) {
  if (null === b) return !1;

  for (var c = 0; c < b.length && c < a.length; c++) if (!hd(a[c], b[c])) return !1;

  return !0;
}

function dh(a, b, c, d, e, f) {
  Rg = f;
  Sg = b;
  Tg = null !== a ? a.memoizedState : null;
  Qg.current = null === Tg ? eh : fh;
  b = c(d, e);

  if (Zg) {
    do Zg = !1, ah += 1, Tg = null !== a ? a.memoizedState : null, Vg = Ug, Xg = R = Q = null, Qg.current = fh, b = c(d, e); while (Zg);

    $g = null;
    ah = 0;
  }

  Qg.current = hh;
  a = Sg;
  a.memoizedState = Ug;
  a.expirationTime = Wg;
  a.updateQueue = Xg;
  a.effectTag |= Yg;
  a = null !== Q && null !== Q.next;
  Rg = 0;
  Vg = R = Ug = Tg = Q = Sg = null;
  Wg = 0;
  Xg = null;
  Yg = 0;
  if (a) throw t(Error(300));
  return b;
}

function ih() {
  Qg.current = hh;
  Rg = 0;
  Vg = R = Ug = Tg = Q = Sg = null;
  Wg = 0;
  Xg = null;
  Yg = 0;
  Zg = !1;
  $g = null;
  ah = 0;
}

function jh() {
  var a = {
    memoizedState: null,
    baseState: null,
    queue: null,
    baseUpdate: null,
    next: null
  };
  null === R ? Ug = R = a : R = R.next = a;
  return R;
}

function kh() {
  if (null !== Vg) R = Vg, Vg = R.next, Q = Tg, Tg = null !== Q ? Q.next : null;else {
    if (null === Tg) throw t(Error(310));
    Q = Tg;
    var a = {
      memoizedState: Q.memoizedState,
      baseState: Q.baseState,
      queue: Q.queue,
      baseUpdate: Q.baseUpdate,
      next: null
    };
    R = null === R ? Ug = a : R.next = a;
    Tg = Q.next;
  }
  return R;
}

function lh(a, b) {
  return "function" === typeof b ? b(a) : b;
}

function mh(a) {
  var b = kh(),
      c = b.queue;
  if (null === c) throw t(Error(311));
  c.lastRenderedReducer = a;

  if (0 < ah) {
    var d = c.dispatch;

    if (null !== $g) {
      var e = $g.get(c);

      if (void 0 !== e) {
        $g.delete(c);
        var f = b.memoizedState;

        do f = a(f, e.action), e = e.next; while (null !== e);

        hd(f, b.memoizedState) || (Lf = !0);
        b.memoizedState = f;
        b.baseUpdate === c.last && (b.baseState = f);
        c.lastRenderedState = f;
        return [f, d];
      }
    }

    return [b.memoizedState, d];
  }

  d = c.last;
  var h = b.baseUpdate;
  f = b.baseState;
  null !== h ? (null !== d && (d.next = null), d = h.next) : d = null !== d ? d.next : null;

  if (null !== d) {
    var g = e = null,
        k = d,
        l = !1;

    do {
      var n = k.expirationTime;
      n < Rg ? (l || (l = !0, g = h, e = f), n > Wg && (Wg = n)) : (Xf(n, k.suspenseConfig), f = k.eagerReducer === a ? k.eagerState : a(f, k.action));
      h = k;
      k = k.next;
    } while (null !== k && k !== d);

    l || (g = h, e = f);
    hd(f, b.memoizedState) || (Lf = !0);
    b.memoizedState = f;
    b.baseUpdate = g;
    b.baseState = e;
    c.lastRenderedState = f;
  }

  return [b.memoizedState, c.dispatch];
}

function nh(a, b, c, d) {
  a = {
    tag: a,
    create: b,
    destroy: c,
    deps: d,
    next: null
  };
  null === Xg ? (Xg = {
    lastEffect: null
  }, Xg.lastEffect = a.next = a) : (b = Xg.lastEffect, null === b ? Xg.lastEffect = a.next = a : (c = b.next, b.next = a, a.next = c, Xg.lastEffect = a));
  return a;
}

function oh(a, b, c, d) {
  var e = jh();
  Yg |= a;
  e.memoizedState = nh(b, c, void 0, void 0 === d ? null : d);
}

function ph(a, b, c, d) {
  var e = kh();
  d = void 0 === d ? null : d;
  var f = void 0;

  if (null !== Q) {
    var h = Q.memoizedState;
    f = h.destroy;

    if (null !== d && ch(d, h.deps)) {
      nh(Ig, c, f, d);
      return;
    }
  }

  Yg |= a;
  e.memoizedState = nh(b, c, f, d);
}

function qh(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function () {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
    b.current = null;
  };
}

function rh() {}

function sh(a, b, c) {
  if (!(25 > ah)) throw t(Error(301));
  var d = a.alternate;
  if (a === Sg || null !== d && d === Sg) {
    if (Zg = !0, a = {
      expirationTime: Rg,
      suspenseConfig: null,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    }, null === $g && ($g = new Map()), c = $g.get(b), void 0 === c) $g.set(b, a);else {
      for (b = c; null !== b.next;) b = b.next;

      b.next = a;
    }
  } else {
    var e = cg(),
        f = $f.suspense;
    e = dg(e, a, f);
    f = {
      expirationTime: e,
      suspenseConfig: f,
      action: c,
      eagerReducer: null,
      eagerState: null,
      next: null
    };
    var h = b.last;
    if (null === h) f.next = f;else {
      var g = h.next;
      null !== g && (f.next = g);
      h.next = f;
    }
    b.last = f;
    if (0 === a.expirationTime && (null === d || 0 === d.expirationTime) && (d = b.lastRenderedReducer, null !== d)) try {
      var k = b.lastRenderedState,
          l = d(k, c);
      f.eagerReducer = d;
      f.eagerState = l;
      if (hd(l, k)) return;
    } catch (n) {} finally {}
    eg(a, e);
  }
}

var hh = {
  readContext: Mf,
  useCallback: bh,
  useContext: bh,
  useEffect: bh,
  useImperativeHandle: bh,
  useLayoutEffect: bh,
  useMemo: bh,
  useReducer: bh,
  useRef: bh,
  useState: bh,
  useDebugValue: bh,
  useResponder: bh
},
    eh = {
  readContext: Mf,
  useCallback: function (a, b) {
    jh().memoizedState = [a, void 0 === b ? null : b];
    return a;
  },
  useContext: Mf,
  useEffect: function (a, b) {
    return oh(516, Pg | Og, a, b);
  },
  useImperativeHandle: function (a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return oh(4, Kg | Ng, qh.bind(null, b, a), c);
  },
  useLayoutEffect: function (a, b) {
    return oh(4, Kg | Ng, a, b);
  },
  useMemo: function (a, b) {
    var c = jh();
    b = void 0 === b ? null : b;
    a = a();
    c.memoizedState = [a, b];
    return a;
  },
  useReducer: function (a, b, c) {
    var d = jh();
    b = void 0 !== c ? c(b) : b;
    d.memoizedState = d.baseState = b;
    a = d.queue = {
      last: null,
      dispatch: null,
      lastRenderedReducer: a,
      lastRenderedState: b
    };
    a = a.dispatch = sh.bind(null, Sg, a);
    return [d.memoizedState, a];
  },
  useRef: function (a) {
    var b = jh();
    a = {
      current: a
    };
    return b.memoizedState = a;
  },
  useState: function (a) {
    var b = jh();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      last: null,
      dispatch: null,
      lastRenderedReducer: lh,
      lastRenderedState: a
    };
    a = a.dispatch = sh.bind(null, Sg, a);
    return [b.memoizedState, a];
  },
  useDebugValue: rh,
  useResponder: kd
},
    fh = {
  readContext: Mf,
  useCallback: function (a, b) {
    var c = kh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && ch(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  },
  useContext: Mf,
  useEffect: function (a, b) {
    return ph(516, Pg | Og, a, b);
  },
  useImperativeHandle: function (a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return ph(4, Kg | Ng, qh.bind(null, b, a), c);
  },
  useLayoutEffect: function (a, b) {
    return ph(4, Kg | Ng, a, b);
  },
  useMemo: function (a, b) {
    var c = kh();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && ch(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  },
  useReducer: mh,
  useRef: function () {
    return kh().memoizedState;
  },
  useState: function (a) {
    return mh(lh, a);
  },
  useDebugValue: rh,
  useResponder: kd
},
    th = null,
    uh = null,
    vh = !1;

function wh(a, b) {
  var c = xh(5, null, null, 0);
  c.elementType = "DELETED";
  c.type = "DELETED";
  c.stateNode = b;
  c.return = a;
  c.effectTag = 8;
  null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
}

function yh(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, !0) : !1;

    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, !0) : !1;

    case 13:
      return !1;

    default:
      return !1;
  }
}

function zh(a) {
  if (vh) {
    var b = uh;

    if (b) {
      var c = b;

      if (!yh(a, b)) {
        b = Ne(c.nextSibling);

        if (!b || !yh(a, b)) {
          a.effectTag |= 2;
          vh = !1;
          th = a;
          return;
        }

        wh(th, c);
      }

      th = a;
      uh = Ne(b.firstChild);
    } else a.effectTag |= 2, vh = !1, th = a;
  }
}

function Ah(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 18 !== a.tag;) a = a.return;

  th = a;
}

function Bh(a) {
  if (a !== th) return !1;
  if (!vh) return Ah(a), vh = !0, !1;
  var b = a.type;
  if (5 !== a.tag || "head" !== b && "body" !== b && !Ke(b, a.memoizedProps)) for (b = uh; b;) wh(a, b), b = Ne(b.nextSibling);
  Ah(a);
  uh = th ? Ne(a.stateNode.nextSibling) : null;
  return !0;
}

function Ch() {
  uh = th = null;
  vh = !1;
}

var Dh = Xb.ReactCurrentOwner,
    Lf = !1;

function S(a, b, c, d) {
  b.child = null === a ? ug(b, null, c, d) : tg(b, a.child, c, d);
}

function Eh(a, b, c, d, e) {
  c = c.render;
  var f = b.ref;
  Kf(b, e);
  d = dh(a, b, c, d, f, e);
  if (null !== a && !Lf) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), Fh(a, b, e);
  b.effectTag |= 1;
  S(a, b, d, e);
  return b.child;
}

function Gh(a, b, c, d, e, f) {
  if (null === a) {
    var h = c.type;
    if ("function" === typeof h && !Hh(h) && void 0 === h.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = h, Ih(a, b, h, d, e, f);
    a = qg(c.type, null, d, null, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }

  h = a.child;
  if (e < f && (e = h.memoizedProps, c = c.compare, c = null !== c ? c : jd, c(e, d) && a.ref === b.ref)) return Fh(a, b, f);
  b.effectTag |= 1;
  a = og(h, d, f);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}

function Ih(a, b, c, d, e, f) {
  return null !== a && jd(a.memoizedProps, d) && a.ref === b.ref && (Lf = !1, e < f) ? Fh(a, b, f) : Jh(a, b, c, d, f);
}

function Kh(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.effectTag |= 128;
}

function Jh(a, b, c, d, e) {
  var f = N(c) ? Re : L.current;
  f = Se(b, f);
  Kf(b, e);
  c = dh(a, b, c, d, f, e);
  if (null !== a && !Lf) return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), Fh(a, b, e);
  b.effectTag |= 1;
  S(a, b, c, e);
  return b.child;
}

function Lh(a, b, c, d, e) {
  if (N(c)) {
    var f = !0;
    Xe(b);
  } else f = !1;

  Kf(b, e);
  if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), hg(b, c, d, e), jg(b, c, d, e), d = !0;else if (null === a) {
    var h = b.stateNode,
        g = b.memoizedProps;
    h.props = g;
    var k = h.context,
        l = c.contextType;
    "object" === typeof l && null !== l ? l = Mf(l) : (l = N(c) ? Re : L.current, l = Se(b, l));
    var n = c.getDerivedStateFromProps,
        z = "function" === typeof n || "function" === typeof h.getSnapshotBeforeUpdate;
    z || "function" !== typeof h.UNSAFE_componentWillReceiveProps && "function" !== typeof h.componentWillReceiveProps || (g !== d || k !== l) && ig(b, h, d, l);
    Nf = !1;
    var x = b.memoizedState;
    k = h.state = x;
    var v = b.updateQueue;
    null !== v && (Wf(b, v, d, h, e), k = b.memoizedState);
    g !== d || x !== k || M.current || Nf ? ("function" === typeof n && (bg(b, c, n, d), k = b.memoizedState), (g = Nf || gg(b, c, g, d, x, k, l)) ? (z || "function" !== typeof h.UNSAFE_componentWillMount && "function" !== typeof h.componentWillMount || ("function" === typeof h.componentWillMount && h.componentWillMount(), "function" === typeof h.UNSAFE_componentWillMount && h.UNSAFE_componentWillMount()), "function" === typeof h.componentDidMount && (b.effectTag |= 4)) : ("function" === typeof h.componentDidMount && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), h.props = d, h.state = k, h.context = l, d = g) : ("function" === typeof h.componentDidMount && (b.effectTag |= 4), d = !1);
  } else h = b.stateNode, g = b.memoizedProps, h.props = b.type === b.elementType ? g : Af(b.type, g), k = h.context, l = c.contextType, "object" === typeof l && null !== l ? l = Mf(l) : (l = N(c) ? Re : L.current, l = Se(b, l)), n = c.getDerivedStateFromProps, (z = "function" === typeof n || "function" === typeof h.getSnapshotBeforeUpdate) || "function" !== typeof h.UNSAFE_componentWillReceiveProps && "function" !== typeof h.componentWillReceiveProps || (g !== d || k !== l) && ig(b, h, d, l), Nf = !1, k = b.memoizedState, x = h.state = k, v = b.updateQueue, null !== v && (Wf(b, v, d, h, e), x = b.memoizedState), g !== d || k !== x || M.current || Nf ? ("function" === typeof n && (bg(b, c, n, d), x = b.memoizedState), (n = Nf || gg(b, c, g, d, k, x, l)) ? (z || "function" !== typeof h.UNSAFE_componentWillUpdate && "function" !== typeof h.componentWillUpdate || ("function" === typeof h.componentWillUpdate && h.componentWillUpdate(d, x, l), "function" === typeof h.UNSAFE_componentWillUpdate && h.UNSAFE_componentWillUpdate(d, x, l)), "function" === typeof h.componentDidUpdate && (b.effectTag |= 4), "function" === typeof h.getSnapshotBeforeUpdate && (b.effectTag |= 256)) : ("function" !== typeof h.componentDidUpdate || g === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof h.getSnapshotBeforeUpdate || g === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x), h.props = d, h.state = x, h.context = l, d = n) : ("function" !== typeof h.componentDidUpdate || g === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), "function" !== typeof h.getSnapshotBeforeUpdate || g === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = !1);
  return Mh(a, b, c, d, f, e);
}

function Mh(a, b, c, d, e, f) {
  Kh(a, b);
  var h = 0 !== (b.effectTag & 64);
  if (!d && !h) return e && Ye(b, c, !1), Fh(a, b, f);
  d = b.stateNode;
  Dh.current = b;
  var g = h && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.effectTag |= 1;
  null !== a && h ? (b.child = tg(b, a.child, null, f), b.child = tg(b, null, g, f)) : S(a, b, g, f);
  b.memoizedState = d.state;
  e && Ye(b, c, !0);
  return b.child;
}

function Nh(a) {
  var b = a.stateNode;
  b.pendingContext ? Ve(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Ve(a, b.context, !1);
  Ag(a, b.containerInfo);
}

var Oh = {};

function Ph(a, b, c) {
  var d = b.mode,
      e = b.pendingProps,
      f = P.current,
      h = null,
      g = !1,
      k;
  (k = 0 !== (b.effectTag & 64)) || (k = 0 !== (f & Gg) && (null === a || null !== a.memoizedState));
  k ? (h = Oh, g = !0, b.effectTag &= -65) : null !== a && null === a.memoizedState || void 0 === e.fallback || !0 === e.unstable_avoidThisFallback || (f |= Fg);
  f &= Eg;
  J(P, f, b);
  if (null === a) {
    if (g) {
      e = e.fallback;
      a = sg(null, d, 0, null);
      a.return = b;
      if (0 === (b.mode & 2)) for (g = null !== b.memoizedState ? b.child.child : b.child, a.child = g; null !== g;) g.return = a, g = g.sibling;
      c = sg(e, d, c, null);
      c.return = b;
      a.sibling = c;
      d = a;
    } else d = c = ug(b, null, e.children, c);
  } else {
    if (null !== a.memoizedState) {
      if (f = a.child, d = f.sibling, g) {
        e = e.fallback;
        c = og(f, f.pendingProps, 0);
        c.return = b;
        if (0 === (b.mode & 2) && (g = null !== b.memoizedState ? b.child.child : b.child, g !== f.child)) for (c.child = g; null !== g;) g.return = c, g = g.sibling;
        e = og(d, e, d.expirationTime);
        e.return = b;
        c.sibling = e;
        d = c;
        c.childExpirationTime = 0;
        c = e;
      } else d = c = tg(b, f.child, e.children, c);
    } else if (f = a.child, g) {
      g = e.fallback;
      e = sg(null, d, 0, null);
      e.return = b;
      e.child = f;
      null !== f && (f.return = e);
      if (0 === (b.mode & 2)) for (f = null !== b.memoizedState ? b.child.child : b.child, e.child = f; null !== f;) f.return = e, f = f.sibling;
      c = sg(g, d, c, null);
      c.return = b;
      e.sibling = c;
      c.effectTag |= 2;
      d = e;
      e.childExpirationTime = 0;
    } else c = d = tg(b, f, e.children, c);
    b.stateNode = a.stateNode;
  }
  b.memoizedState = h;
  b.child = d;
  return c;
}

function Qh(a, b, c, d, e) {
  var f = a.memoizedState;
  null === f ? a.memoizedState = {
    isBackwards: b,
    rendering: null,
    last: d,
    tail: c,
    tailExpiration: 0,
    tailMode: e
  } : (f.isBackwards = b, f.rendering = null, f.last = d, f.tail = c, f.tailExpiration = 0, f.tailMode = e);
}

function Rh(a, b, c) {
  var d = b.pendingProps,
      e = d.revealOrder,
      f = d.tail;
  S(a, b, d.children, c);
  d = P.current;
  if (0 !== (d & Gg)) d = d & Eg | Gg, b.effectTag |= 64;else {
    if (null !== a && 0 !== (a.effectTag & 64)) a: for (a = b.child; null !== a;) {
      if (13 === a.tag) {
        if (null !== a.memoizedState) {
          a.expirationTime < c && (a.expirationTime = c);
          var h = a.alternate;
          null !== h && h.expirationTime < c && (h.expirationTime = c);
          Jf(a.return, c);
        }
      } else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }

      if (a === b) break a;

      for (; null === a.sibling;) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }

      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= Eg;
  }
  J(P, d, b);
  if (0 === (b.mode & 2)) b.memoizedState = null;else switch (e) {
    case "forwards":
      c = b.child;

      for (e = null; null !== c;) d = c.alternate, null !== d && null === Hg(d) && (e = c), c = c.sibling;

      c = e;
      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
      Qh(b, !1, e, c, f);
      break;

    case "backwards":
      c = null;
      e = b.child;

      for (b.child = null; null !== e;) {
        d = e.alternate;

        if (null !== d && null === Hg(d)) {
          b.child = e;
          break;
        }

        d = e.sibling;
        e.sibling = c;
        c = e;
        e = d;
      }

      Qh(b, !0, c, null, f);
      break;

    case "together":
      Qh(b, !1, null, null, void 0);
      break;

    default:
      b.memoizedState = null;
  }
  return b.child;
}

function Fh(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  if (b.childExpirationTime < c) return null;
  if (null !== a && b.child !== a.child) throw t(Error(153));

  if (null !== b.child) {
    a = b.child;
    c = og(a, a.pendingProps, a.expirationTime);
    b.child = c;

    for (c.return = b; null !== a.sibling;) a = a.sibling, c = c.sibling = og(a, a.pendingProps, a.expirationTime), c.return = b;

    c.sibling = null;
  }

  return b.child;
}

function Sh(a) {
  a.effectTag |= 4;
}

var Th = void 0,
    Uh = void 0,
    Vh = void 0,
    Wh = void 0;

Th = function (a, b) {
  for (var c = b.child; null !== c;) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);else if (20 === c.tag) a.appendChild(c.stateNode.instance);else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;

    for (; null === c.sibling;) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }

    c.sibling.return = c.return;
    c = c.sibling;
  }
};

Uh = function () {};

Vh = function (a, b, c, d, e) {
  var f = a.memoizedProps;

  if (f !== d) {
    var h = b.stateNode;
    zg(wg.current);
    a = null;

    switch (c) {
      case "input":
        f = Bc(h, f);
        d = Bc(h, d);
        a = [];
        break;

      case "option":
        f = le(h, f);
        d = le(h, d);
        a = [];
        break;

      case "select":
        f = m({}, f, {
          value: void 0
        });
        d = m({}, d, {
          value: void 0
        });
        a = [];
        break;

      case "textarea":
        f = ne(h, f);
        d = ne(h, d);
        a = [];
        break;

      default:
        "function" !== typeof f.onClick && "function" === typeof d.onClick && (h.onclick = Ge);
    }

    De(c, d);
    h = c = void 0;
    var g = null;

    for (c in f) if (!d.hasOwnProperty(c) && f.hasOwnProperty(c) && null != f[c]) if ("style" === c) {
      var k = f[c];

      for (h in k) k.hasOwnProperty(h) && (g || (g = {}), g[h] = "");
    } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (ia.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));

    for (c in d) {
      var l = d[c];
      k = null != f ? f[c] : void 0;
      if (d.hasOwnProperty(c) && l !== k && (null != l || null != k)) if ("style" === c) {
        if (k) {
          for (h in k) !k.hasOwnProperty(h) || l && l.hasOwnProperty(h) || (g || (g = {}), g[h] = "");

          for (h in l) l.hasOwnProperty(h) && k[h] !== l[h] && (g || (g = {}), g[h] = l[h]);
        } else g || (a || (a = []), a.push(c, g)), g = l;
      } else "dangerouslySetInnerHTML" === c ? (l = l ? l.__html : void 0, k = k ? k.__html : void 0, null != l && k !== l && (a = a || []).push(c, "" + l)) : "children" === c ? k === l || "string" !== typeof l && "number" !== typeof l || (a = a || []).push(c, "" + l) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (ia.hasOwnProperty(c) ? (null != l && Fe(e, c), a || k === l || (a = [])) : (a = a || []).push(c, l));
    }

    g && (a = a || []).push("style", g);
    e = a;
    (b.updateQueue = e) && Sh(b);
  }
};

Wh = function (a, b, c, d) {
  c !== d && Sh(b);
};

function $h(a, b) {
  switch (a.tailMode) {
    case "hidden":
      b = a.tail;

      for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;

      null === c ? a.tail = null : c.sibling = null;
      break;

    case "collapsed":
      c = a.tail;

      for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;

      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}

function ai(a) {
  switch (a.tag) {
    case 1:
      N(a.type) && Te(a);
      var b = a.effectTag;
      return b & 2048 ? (a.effectTag = b & -2049 | 64, a) : null;

    case 3:
      Bg(a);
      Ue(a);
      b = a.effectTag;
      if (0 !== (b & 64)) throw t(Error(285));
      a.effectTag = b & -2049 | 64;
      return a;

    case 5:
      return Dg(a), null;

    case 13:
      return H(P, a), b = a.effectTag, b & 2048 ? (a.effectTag = b & -2049 | 64, a) : null;

    case 18:
      return null;

    case 19:
      return H(P, a), null;

    case 4:
      return Bg(a), null;

    case 10:
      return If(a), null;

    default:
      return null;
  }
}

function bi(a, b) {
  return {
    value: a,
    source: b,
    stack: pc(b)
  };
}

var ci = "function" === typeof WeakSet ? WeakSet : Set;

function di(a, b) {
  var c = b.source,
      d = b.stack;
  null === d && null !== c && (d = pc(c));
  null !== c && oc(c.type);
  b = b.value;
  null !== a && 1 === a.tag && oc(a.type);

  try {
    console.error(b);
  } catch (e) {
    setTimeout((function () {
      throw e;
    }));
  }
}

function ei(a, b) {
  try {
    b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
  } catch (c) {
    fi(a, c);
  }
}

function gi(a) {
  var b = a.ref;
  if (null !== b) if ("function" === typeof b) try {
    b(null);
  } catch (c) {
    fi(a, c);
  } else b.current = null;
}

function hi(a, b, c) {
  c = c.updateQueue;
  c = null !== c ? c.lastEffect : null;

  if (null !== c) {
    var d = c = c.next;

    do {
      if ((d.tag & a) !== Ig) {
        var e = d.destroy;
        d.destroy = void 0;
        void 0 !== e && e();
      }

      (d.tag & b) !== Ig && (e = d.create, d.destroy = e());
      d = d.next;
    } while (d !== c);
  }
}

function ii(a, b) {
  "function" === typeof ji && ji(a);

  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      var c = a.updateQueue;

      if (null !== c && (c = c.lastEffect, null !== c)) {
        var d = c.next;
        vf(97 < b ? 97 : b, (function () {
          var b = d;

          do {
            var c = b.destroy;

            if (void 0 !== c) {
              var h = a;

              try {
                c();
              } catch (g) {
                fi(h, g);
              }
            }

            b = b.next;
          } while (b !== d);
        }));
      }

      break;

    case 1:
      gi(a);
      b = a.stateNode;
      "function" === typeof b.componentWillUnmount && ei(a, b);
      break;

    case 5:
      gi(a);
      break;

    case 4:
      ki(a, b);
  }
}

function li(a, b) {
  for (var c = a;;) if (ii(c, b), null !== c.child && 4 !== c.tag) c.child.return = c, c = c.child;else {
    if (c === a) break;

    for (; null === c.sibling;) {
      if (null === c.return || c.return === a) return;
      c = c.return;
    }

    c.sibling.return = c.return;
    c = c.sibling;
  }
}

function mi(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}

function ni(a) {
  a: {
    for (var b = a.return; null !== b;) {
      if (mi(b)) {
        var c = b;
        break a;
      }

      b = b.return;
    }

    throw t(Error(160));
  }

  b = c.stateNode;

  switch (c.tag) {
    case 5:
      var d = !1;
      break;

    case 3:
      b = b.containerInfo;
      d = !0;
      break;

    case 4:
      b = b.containerInfo;
      d = !0;
      break;

    default:
      throw t(Error(161));
  }

  c.effectTag & 16 && (we(b, ""), c.effectTag &= -17);

  a: b: for (c = a;;) {
    for (; null === c.sibling;) {
      if (null === c.return || mi(c.return)) {
        c = null;
        break a;
      }

      c = c.return;
    }

    c.sibling.return = c.return;

    for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag;) {
      if (c.effectTag & 2) continue b;
      if (null === c.child || 4 === c.tag) continue b;else c.child.return = c, c = c.child;
    }

    if (!(c.effectTag & 2)) {
      c = c.stateNode;
      break a;
    }
  }

  for (var e = a;;) {
    var f = 5 === e.tag || 6 === e.tag;

    if (f || 20 === e.tag) {
      var h = f ? e.stateNode : e.stateNode.instance;
      if (c) {
        if (d) {
          f = b;
          var g = h;
          h = c;
          8 === f.nodeType ? f.parentNode.insertBefore(g, h) : f.insertBefore(g, h);
        } else b.insertBefore(h, c);
      } else d ? (g = b, 8 === g.nodeType ? (f = g.parentNode, f.insertBefore(h, g)) : (f = g, f.appendChild(h)), g = g._reactRootContainer, null !== g && void 0 !== g || null !== f.onclick || (f.onclick = Ge)) : b.appendChild(h);
    } else if (4 !== e.tag && null !== e.child) {
      e.child.return = e;
      e = e.child;
      continue;
    }

    if (e === a) break;

    for (; null === e.sibling;) {
      if (null === e.return || e.return === a) return;
      e = e.return;
    }

    e.sibling.return = e.return;
    e = e.sibling;
  }
}

function ki(a, b) {
  for (var c = a, d = !1, e = void 0, f = void 0;;) {
    if (!d) {
      d = c.return;

      a: for (;;) {
        if (null === d) throw t(Error(160));
        e = d.stateNode;

        switch (d.tag) {
          case 5:
            f = !1;
            break a;

          case 3:
            e = e.containerInfo;
            f = !0;
            break a;

          case 4:
            e = e.containerInfo;
            f = !0;
            break a;
        }

        d = d.return;
      }

      d = !0;
    }

    if (5 === c.tag || 6 === c.tag) {
      if (li(c, b), f) {
        var h = e,
            g = c.stateNode;
        8 === h.nodeType ? h.parentNode.removeChild(g) : h.removeChild(g);
      } else e.removeChild(c.stateNode);
    } else if (20 === c.tag) g = c.stateNode.instance, li(c, b), f ? (h = e, 8 === h.nodeType ? h.parentNode.removeChild(g) : h.removeChild(g)) : e.removeChild(g);else if (4 === c.tag) {
      if (null !== c.child) {
        e = c.stateNode.containerInfo;
        f = !0;
        c.child.return = c;
        c = c.child;
        continue;
      }
    } else if (ii(c, b), null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === a) break;

    for (; null === c.sibling;) {
      if (null === c.return || c.return === a) return;
      c = c.return;
      4 === c.tag && (d = !1);
    }

    c.sibling.return = c.return;
    c = c.sibling;
  }
}

function oi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      hi(Kg, Lg, b);
      break;

    case 1:
      break;

    case 5:
      var c = b.stateNode;

      if (null != c) {
        var d = b.memoizedProps,
            e = null !== a ? a.memoizedProps : d;
        a = b.type;
        var f = b.updateQueue;
        b.updateQueue = null;

        if (null !== f) {
          c[Ga] = d;
          "input" === a && "radio" === d.type && null != d.name && Dc(c, d);
          Ee(a, e);
          b = Ee(a, d);

          for (e = 0; e < f.length; e += 2) {
            var h = f[e],
                g = f[e + 1];
            "style" === h ? Ae(c, g) : "dangerouslySetInnerHTML" === h ? ve(c, g) : "children" === h ? we(c, g) : zc(c, h, g, b);
          }

          switch (a) {
            case "input":
              Ec(c, d);
              break;

            case "textarea":
              pe(c, d);
              break;

            case "select":
              b = c._wrapperState.wasMultiple, c._wrapperState.wasMultiple = !!d.multiple, a = d.value, null != a ? me(c, !!d.multiple, a, !1) : b !== !!d.multiple && (null != d.defaultValue ? me(c, !!d.multiple, d.defaultValue, !0) : me(c, !!d.multiple, d.multiple ? [] : "", !1));
          }
        }
      }

      break;

    case 6:
      if (null === b.stateNode) throw t(Error(162));
      b.stateNode.nodeValue = b.memoizedProps;
      break;

    case 3:
      break;

    case 12:
      break;

    case 13:
      c = b;
      null === b.memoizedState ? d = !1 : (d = !0, c = b.child, pi = sf());
      if (null !== c) a: for (a = c;;) {
        if (5 === a.tag) f = a.stateNode, d ? (f = f.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (f = a.stateNode, e = a.memoizedProps.style, e = void 0 !== e && null !== e && e.hasOwnProperty("display") ? e.display : null, f.style.display = ze("display", e));else if (6 === a.tag) a.stateNode.nodeValue = d ? "" : a.memoizedProps;else if (13 === a.tag && null !== a.memoizedState) {
          f = a.child.sibling;
          f.return = a;
          a = f;
          continue;
        } else if (null !== a.child) {
          a.child.return = a;
          a = a.child;
          continue;
        }
        if (a === c) break a;

        for (; null === a.sibling;) {
          if (null === a.return || a.return === c) break a;
          a = a.return;
        }

        a.sibling.return = a.return;
        a = a.sibling;
      }
      qi(b);
      break;

    case 19:
      qi(b);
      break;

    case 17:
      break;

    case 20:
      break;

    default:
      throw t(Error(163));
  }
}

function qi(a) {
  var b = a.updateQueue;

  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new ci());
    b.forEach((function (b) {
      var d = ri.bind(null, a, b);
      c.has(b) || (c.add(b), b.then(d, d));
    }));
  }
}

var si = "function" === typeof WeakMap ? WeakMap : Map;

function ti(a, b, c) {
  c = Qf(c, null);
  c.tag = 3;
  c.payload = {
    element: null
  };
  var d = b.value;

  c.callback = function () {
    ui || (ui = !0, vi = d);
    di(a, b);
  };

  return c;
}

function wi(a, b, c) {
  c = Qf(c, null);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;

  if ("function" === typeof d) {
    var e = b.value;

    c.payload = function () {
      di(a, b);
      return d(e);
    };
  }

  var f = a.stateNode;
  null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
    "function" !== typeof d && (null === xi ? xi = new Set([this]) : xi.add(this), di(a, b));
    var c = b.stack;
    this.componentDidCatch(b.value, {
      componentStack: null !== c ? c : ""
    });
  });
  return c;
}

var yi = Math.ceil,
    zi = Xb.ReactCurrentDispatcher,
    Ai = Xb.ReactCurrentOwner,
    T = 0,
    Bi = 8,
    Ci = 16,
    Di = 32,
    Ei = 0,
    Fi = 1,
    Gi = 2,
    Hi = 3,
    Ii = 4,
    U = T,
    Ji = null,
    V = null,
    W = 0,
    X = Ei,
    Ki = 1073741823,
    Li = 1073741823,
    Mi = null,
    Ni = !1,
    pi = 0,
    Oi = 500,
    Y = null,
    ui = !1,
    vi = null,
    xi = null,
    Pi = !1,
    Qi = null,
    Ri = 90,
    Si = 0,
    Ti = null,
    Ui = 0,
    Vi = null,
    Wi = 0;

function cg() {
  return (U & (Ci | Di)) !== T ? 1073741821 - (sf() / 10 | 0) : 0 !== Wi ? Wi : Wi = 1073741821 - (sf() / 10 | 0);
}

function dg(a, b, c) {
  b = b.mode;
  if (0 === (b & 2)) return 1073741823;
  var d = tf();
  if (0 === (b & 4)) return 99 === d ? 1073741823 : 1073741822;
  if ((U & Ci) !== T) return W;
  if (null !== c) a = 1073741821 - 25 * (((1073741821 - a + (c.timeoutMs | 0 || 5E3) / 10) / 25 | 0) + 1);else switch (d) {
    case 99:
      a = 1073741823;
      break;

    case 98:
      a = 1073741821 - 10 * (((1073741821 - a + 15) / 10 | 0) + 1);
      break;

    case 97:
    case 96:
      a = 1073741821 - 25 * (((1073741821 - a + 500) / 25 | 0) + 1);
      break;

    case 95:
      a = 1;
      break;

    default:
      throw t(Error(326));
  }
  null !== Ji && a === W && --a;
  return a;
}

var Xi = 0;

function eg(a, b) {
  if (50 < Ui) throw Ui = 0, Vi = null, t(Error(185));
  a = Yi(a, b);

  if (null !== a) {
    a.pingTime = 0;
    var c = tf();
    if (1073741823 === b) {
      if ((U & Bi) !== T && (U & (Ci | Di)) === T) for (var d = Z(a, 1073741823, !0); null !== d;) d = d(!0);else Zi(a, 99, 1073741823), U === T && O();
    } else Zi(a, c, b);
    (U & 4) === T || 98 !== c && 99 !== c || (null === Ti ? Ti = new Map([[a, b]]) : (c = Ti.get(a), (void 0 === c || c > b) && Ti.set(a, b)));
  }
}

function Yi(a, b) {
  a.expirationTime < b && (a.expirationTime = b);
  var c = a.alternate;
  null !== c && c.expirationTime < b && (c.expirationTime = b);
  var d = a.return,
      e = null;
  if (null === d && 3 === a.tag) e = a.stateNode;else for (; null !== d;) {
    c = d.alternate;
    d.childExpirationTime < b && (d.childExpirationTime = b);
    null !== c && c.childExpirationTime < b && (c.childExpirationTime = b);

    if (null === d.return && 3 === d.tag) {
      e = d.stateNode;
      break;
    }

    d = d.return;
  }
  null !== e && (b > e.firstPendingTime && (e.firstPendingTime = b), a = e.lastPendingTime, 0 === a || b < a) && (e.lastPendingTime = b);
  return e;
}

function Zi(a, b, c) {
  if (a.callbackExpirationTime < c) {
    var d = a.callbackNode;
    null !== d && d !== mf && af(d);
    a.callbackExpirationTime = c;
    1073741823 === c ? a.callbackNode = xf($i.bind(null, a, Z.bind(null, a, c))) : (d = null, 1 !== c && (d = {
      timeout: 10 * (1073741821 - c) - sf()
    }), a.callbackNode = wf(b, $i.bind(null, a, Z.bind(null, a, c)), d));
  }
}

function $i(a, b, c) {
  var d = a.callbackNode,
      e = null;

  try {
    return e = b(c), null !== e ? $i.bind(null, a, e) : null;
  } finally {
    null === e && d === a.callbackNode && (a.callbackNode = null, a.callbackExpirationTime = 0);
  }
}

function aj() {
  (U & (1 | Ci | Di)) === T && (bj(), cj());
}

function dj(a, b) {
  var c = a.firstBatch;
  return null !== c && c._defer && c._expirationTime >= b ? (wf(97, (function () {
    c._onComplete();

    return null;
  })), !0) : !1;
}

function bj() {
  if (null !== Ti) {
    var a = Ti;
    Ti = null;
    a.forEach((function (a, c) {
      xf(Z.bind(null, c, a));
    }));
    O();
  }
}

function ej(a, b) {
  var c = U;
  U |= 1;

  try {
    return a(b);
  } finally {
    U = c, U === T && O();
  }
}

function fj(a, b, c, d) {
  var e = U;
  U |= 4;

  try {
    return vf(98, a.bind(null, b, c, d));
  } finally {
    U = e, U === T && O();
  }
}

function gj(a, b) {
  var c = U;
  U &= -2;
  U |= Bi;

  try {
    return a(b);
  } finally {
    U = c, U === T && O();
  }
}

function hj(a, b) {
  a.finishedWork = null;
  a.finishedExpirationTime = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Me(c));
  if (null !== V) for (c = V.return; null !== c;) {
    var d = c;

    switch (d.tag) {
      case 1:
        var e = d.type.childContextTypes;
        null !== e && void 0 !== e && Te(d);
        break;

      case 3:
        Bg(d);
        Ue(d);
        break;

      case 5:
        Dg(d);
        break;

      case 4:
        Bg(d);
        break;

      case 13:
        H(P, d);
        break;

      case 19:
        H(P, d);
        break;

      case 10:
        If(d);
    }

    c = c.return;
  }
  Ji = a;
  V = og(a.current, null, b);
  W = b;
  X = Ei;
  Li = Ki = 1073741823;
  Mi = null;
  Ni = !1;
}

function Z(a, b, c) {
  if ((U & (Ci | Di)) !== T) throw t(Error(327));
  if (a.firstPendingTime < b) return null;
  if (c && a.finishedExpirationTime === b) return ij.bind(null, a);
  cj();
  if (a !== Ji || b !== W) hj(a, b);else if (X === Hi) if (Ni) hj(a, b);else {
    var d = a.lastPendingTime;
    if (d < b) return Z.bind(null, a, d);
  }

  if (null !== V) {
    d = U;
    U |= Ci;
    var e = zi.current;
    null === e && (e = hh);
    zi.current = hh;

    if (c) {
      if (1073741823 !== b) {
        var f = cg();
        if (f < b) return U = d, Gf(), zi.current = e, Z.bind(null, a, f);
      }
    } else Wi = 0;

    do try {
      if (c) for (; null !== V;) V = jj(V);else for (; null !== V && !bf();) V = jj(V);
      break;
    } catch (rb) {
      Gf();
      ih();
      f = V;
      if (null === f || null === f.return) throw hj(a, b), U = d, rb;

      a: {
        var h = a,
            g = f.return,
            k = f,
            l = rb,
            n = W;
        k.effectTag |= 1024;
        k.firstEffect = k.lastEffect = null;

        if (null !== l && "object" === typeof l && "function" === typeof l.then) {
          var z = l,
              x = 0 !== (P.current & Fg);
          l = g;

          do {
            var v;
            if (v = 13 === l.tag) null !== l.memoizedState ? v = !1 : (v = l.memoizedProps, v = void 0 === v.fallback ? !1 : !0 !== v.unstable_avoidThisFallback ? !0 : x ? !1 : !0);

            if (v) {
              g = l.updateQueue;
              null === g ? (g = new Set(), g.add(z), l.updateQueue = g) : g.add(z);

              if (0 === (l.mode & 2)) {
                l.effectTag |= 64;
                k.effectTag &= -1957;
                1 === k.tag && (null === k.alternate ? k.tag = 17 : (n = Qf(1073741823, null), n.tag = 2, Sf(k, n)));
                k.expirationTime = 1073741823;
                break a;
              }

              k = h;
              h = n;
              x = k.pingCache;
              null === x ? (x = k.pingCache = new si(), g = new Set(), x.set(z, g)) : (g = x.get(z), void 0 === g && (g = new Set(), x.set(z, g)));
              g.has(h) || (g.add(h), k = kj.bind(null, k, z, h), z.then(k, k));
              l.effectTag |= 2048;
              l.expirationTime = n;
              break a;
            }

            l = l.return;
          } while (null !== l);

          l = Error((oc(k.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + pc(k));
        }

        X !== Ii && (X = Fi);
        l = bi(l, k);
        k = g;

        do {
          switch (k.tag) {
            case 3:
              k.effectTag |= 2048;
              k.expirationTime = n;
              n = ti(k, l, n);
              Tf(k, n);
              break a;

            case 1:
              if (z = l, h = k.type, g = k.stateNode, 0 === (k.effectTag & 64) && ("function" === typeof h.getDerivedStateFromError || null !== g && "function" === typeof g.componentDidCatch && (null === xi || !xi.has(g)))) {
                k.effectTag |= 2048;
                k.expirationTime = n;
                n = wi(k, z, n);
                Tf(k, n);
                break a;
              }

          }

          k = k.return;
        } while (null !== k);
      }

      V = lj(f);
    } while (1);

    U = d;
    Gf();
    zi.current = e;
    if (null !== V) return Z.bind(null, a, b);
  }

  a.finishedWork = a.current.alternate;
  a.finishedExpirationTime = b;
  if (dj(a, b)) return null;
  Ji = null;

  switch (X) {
    case Ei:
      throw t(Error(328));

    case Fi:
      return d = a.lastPendingTime, d < b ? Z.bind(null, a, d) : c ? ij.bind(null, a) : (hj(a, b), xf(Z.bind(null, a, b)), null);

    case Gi:
      if (1073741823 === Ki && !c && (c = pi + Oi - sf(), 10 < c)) {
        if (Ni) return hj(a, b), Z.bind(null, a, b);
        d = a.lastPendingTime;
        if (d < b) return Z.bind(null, a, d);
        a.timeoutHandle = Le(ij.bind(null, a), c);
        return null;
      }

      return ij.bind(null, a);

    case Hi:
      if (!c) {
        if (Ni) return hj(a, b), Z.bind(null, a, b);
        c = a.lastPendingTime;
        if (c < b) return Z.bind(null, a, c);
        1073741823 !== Li ? c = 10 * (1073741821 - Li) - sf() : 1073741823 === Ki ? c = 0 : (c = 10 * (1073741821 - Ki) - 5E3, d = sf(), b = 10 * (1073741821 - b) - d, c = d - c, 0 > c && (c = 0), c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3E3 > c ? 3E3 : 4320 > c ? 4320 : 1960 * yi(c / 1960)) - c, b < c && (c = b));
        if (10 < c) return a.timeoutHandle = Le(ij.bind(null, a), c), null;
      }

      return ij.bind(null, a);

    case Ii:
      return !c && 1073741823 !== Ki && null !== Mi && (d = Ki, e = Mi, b = e.busyMinDurationMs | 0, 0 >= b ? b = 0 : (c = e.busyDelayMs | 0, d = sf() - (10 * (1073741821 - d) - (e.timeoutMs | 0 || 5E3)), b = d <= c ? 0 : c + b - d), 10 < b) ? (a.timeoutHandle = Le(ij.bind(null, a), b), null) : ij.bind(null, a);

    default:
      throw t(Error(329));
  }
}

function Xf(a, b) {
  a < Ki && 1 < a && (Ki = a);
  null !== b && a < Li && 1 < a && (Li = a, Mi = b);
}

function jj(a) {
  var b = mj(a.alternate, a, W);
  a.memoizedProps = a.pendingProps;
  null === b && (b = lj(a));
  Ai.current = null;
  return b;
}

function lj(a) {
  V = a;

  do {
    var b = V.alternate;
    a = V.return;

    if (0 === (V.effectTag & 1024)) {
      a: {
        var c = b;
        b = V;
        var d = W,
            e = b.pendingProps;

        switch (b.tag) {
          case 2:
            break;

          case 16:
            break;

          case 15:
          case 0:
            break;

          case 1:
            N(b.type) && Te(b);
            break;

          case 3:
            Bg(b);
            Ue(b);
            d = b.stateNode;
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === c || null === c.child) Bh(b), b.effectTag &= -3;
            Uh(b);
            break;

          case 5:
            Dg(b);
            d = zg(yg.current);
            var f = b.type;
            if (null !== c && null != b.stateNode) Vh(c, b, f, e, d), c.ref !== b.ref && (b.effectTag |= 128);else if (e) {
              var h = zg(wg.current);

              if (Bh(b)) {
                c = b;
                e = void 0;
                f = c.stateNode;
                var g = c.type,
                    k = c.memoizedProps;
                f[Fa] = c;
                f[Ga] = k;

                switch (g) {
                  case "iframe":
                  case "object":
                  case "embed":
                    G("load", f);
                    break;

                  case "video":
                  case "audio":
                    for (var l = 0; l < bb.length; l++) G(bb[l], f);

                    break;

                  case "source":
                    G("error", f);
                    break;

                  case "img":
                  case "image":
                  case "link":
                    G("error", f);
                    G("load", f);
                    break;

                  case "form":
                    G("reset", f);
                    G("submit", f);
                    break;

                  case "details":
                    G("toggle", f);
                    break;

                  case "input":
                    Cc(f, k);
                    G("invalid", f);
                    Fe(d, "onChange");
                    break;

                  case "select":
                    f._wrapperState = {
                      wasMultiple: !!k.multiple
                    };
                    G("invalid", f);
                    Fe(d, "onChange");
                    break;

                  case "textarea":
                    oe(f, k), G("invalid", f), Fe(d, "onChange");
                }

                De(g, k);
                l = null;

                for (e in k) k.hasOwnProperty(e) && (h = k[e], "children" === e ? "string" === typeof h ? f.textContent !== h && (l = ["children", h]) : "number" === typeof h && f.textContent !== "" + h && (l = ["children", "" + h]) : ia.hasOwnProperty(e) && null != h && Fe(d, e));

                switch (g) {
                  case "input":
                    Vb(f);
                    Gc(f, k, !0);
                    break;

                  case "textarea":
                    Vb(f);
                    qe(f, k);
                    break;

                  case "select":
                  case "option":
                    break;

                  default:
                    "function" === typeof k.onClick && (f.onclick = Ge);
                }

                d = l;
                c.updateQueue = d;
                null !== d && Sh(b);
              } else {
                k = f;
                c = e;
                g = b;
                l = 9 === d.nodeType ? d : d.ownerDocument;
                h === re.html && (h = se(k));
                h === re.html ? "script" === k ? (k = l.createElement("div"), k.innerHTML = "<script>\x3c/script>", l = k.removeChild(k.firstChild)) : "string" === typeof c.is ? l = l.createElement(k, {
                  is: c.is
                }) : (l = l.createElement(k), "select" === k && (k = l, c.multiple ? k.multiple = !0 : c.size && (k.size = c.size))) : l = l.createElementNS(h, k);
                k = l;
                k[Fa] = g;
                k[Ga] = c;
                c = k;
                Th(c, b, !1, !1);
                g = c;
                var n = d,
                    z = Ee(f, e);

                switch (f) {
                  case "iframe":
                  case "object":
                  case "embed":
                    G("load", g);
                    d = e;
                    break;

                  case "video":
                  case "audio":
                    for (d = 0; d < bb.length; d++) G(bb[d], g);

                    d = e;
                    break;

                  case "source":
                    G("error", g);
                    d = e;
                    break;

                  case "img":
                  case "image":
                  case "link":
                    G("error", g);
                    G("load", g);
                    d = e;
                    break;

                  case "form":
                    G("reset", g);
                    G("submit", g);
                    d = e;
                    break;

                  case "details":
                    G("toggle", g);
                    d = e;
                    break;

                  case "input":
                    Cc(g, e);
                    d = Bc(g, e);
                    G("invalid", g);
                    Fe(n, "onChange");
                    break;

                  case "option":
                    d = le(g, e);
                    break;

                  case "select":
                    g._wrapperState = {
                      wasMultiple: !!e.multiple
                    };
                    d = m({}, e, {
                      value: void 0
                    });
                    G("invalid", g);
                    Fe(n, "onChange");
                    break;

                  case "textarea":
                    oe(g, e);
                    d = ne(g, e);
                    G("invalid", g);
                    Fe(n, "onChange");
                    break;

                  default:
                    d = e;
                }

                De(f, d);
                k = void 0;
                l = f;
                h = g;
                var x = d;

                for (k in x) if (x.hasOwnProperty(k)) {
                  var v = x[k];
                  "style" === k ? Ae(h, v) : "dangerouslySetInnerHTML" === k ? (v = v ? v.__html : void 0, null != v && ve(h, v)) : "children" === k ? "string" === typeof v ? ("textarea" !== l || "" !== v) && we(h, v) : "number" === typeof v && we(h, "" + v) : "suppressContentEditableWarning" !== k && "suppressHydrationWarning" !== k && "autoFocus" !== k && (ia.hasOwnProperty(k) ? null != v && Fe(n, k) : null != v && zc(h, k, v, z));
                }

                switch (f) {
                  case "input":
                    Vb(g);
                    Gc(g, e, !1);
                    break;

                  case "textarea":
                    Vb(g);
                    qe(g, e);
                    break;

                  case "option":
                    null != e.value && g.setAttribute("value", "" + Ac(e.value));
                    break;

                  case "select":
                    d = g;
                    g = e;
                    d.multiple = !!g.multiple;
                    k = g.value;
                    null != k ? me(d, !!g.multiple, k, !1) : null != g.defaultValue && me(d, !!g.multiple, g.defaultValue, !0);
                    break;

                  default:
                    "function" === typeof d.onClick && (g.onclick = Ge);
                }

                Je(f, e) && Sh(b);
                b.stateNode = c;
              }

              null !== b.ref && (b.effectTag |= 128);
            } else if (null === b.stateNode) throw t(Error(166));
            break;

          case 6:
            if (c && null != b.stateNode) Wh(c, b, c.memoizedProps, e);else {
              if ("string" !== typeof e && null === b.stateNode) throw t(Error(166));
              c = zg(yg.current);
              zg(wg.current);
              Bh(b) ? (d = b.stateNode, c = b.memoizedProps, d[Fa] = b, d.nodeValue !== c && Sh(b)) : (d = b, c = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(e), c[Fa] = b, d.stateNode = c);
            }
            break;

          case 11:
            break;

          case 13:
            H(P, b);
            e = b.memoizedState;

            if (0 !== (b.effectTag & 64)) {
              b.expirationTime = d;
              break a;
            }

            d = null !== e;
            e = !1;
            null === c ? Bh(b) : (f = c.memoizedState, e = null !== f, d || null === f || (f = c.child.sibling, null !== f && (g = b.firstEffect, null !== g ? (b.firstEffect = f, f.nextEffect = g) : (b.firstEffect = b.lastEffect = f, f.nextEffect = null), f.effectTag = 8)));
            if (d && !e && 0 !== (b.mode & 2)) if (null === c && !0 !== b.memoizedProps.unstable_avoidThisFallback || 0 !== (P.current & Fg)) X === Ei && (X = Gi);else if (X === Ei || X === Gi) X = Hi;
            if (d || e) b.effectTag |= 4;
            break;

          case 7:
            break;

          case 8:
            break;

          case 12:
            break;

          case 4:
            Bg(b);
            Uh(b);
            break;

          case 10:
            If(b);
            break;

          case 9:
            break;

          case 14:
            break;

          case 17:
            N(b.type) && Te(b);
            break;

          case 18:
            break;

          case 19:
            H(P, b);
            e = b.memoizedState;
            if (null === e) break;
            f = 0 !== (b.effectTag & 64);
            g = e.rendering;
            if (null === g) {
              if (f) $h(e, !1);else {
                if (X !== Ei || null !== c && 0 !== (c.effectTag & 64)) for (c = b.child; null !== c;) {
                  g = Hg(c);

                  if (null !== g) {
                    b.effectTag |= 64;
                    $h(e, !1);
                    c = g.updateQueue;
                    null !== c && (b.updateQueue = c, b.effectTag |= 4);
                    b.firstEffect = b.lastEffect = null;

                    for (c = b.child; null !== c;) e = c, f = d, e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, g = e.alternate, null === g ? (e.childExpirationTime = 0, e.expirationTime = f, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null) : (e.childExpirationTime = g.childExpirationTime, e.expirationTime = g.expirationTime, e.child = g.child, e.memoizedProps = g.memoizedProps, e.memoizedState = g.memoizedState, e.updateQueue = g.updateQueue, f = g.dependencies, e.dependencies = null === f ? null : {
                      expirationTime: f.expirationTime,
                      firstContext: f.firstContext,
                      responders: f.responders
                    }), c = c.sibling;

                    J(P, P.current & Eg | Gg, b);
                    b = b.child;
                    break a;
                  }

                  c = c.sibling;
                }
              }
            } else {
              if (!f) if (c = Hg(g), null !== c) {
                if (b.effectTag |= 64, f = !0, $h(e, !0), null === e.tail && "hidden" === e.tailMode) {
                  d = c.updateQueue;
                  null !== d && (b.updateQueue = d, b.effectTag |= 4);
                  b = b.lastEffect = e.lastEffect;
                  null !== b && (b.nextEffect = null);
                  break;
                }
              } else sf() > e.tailExpiration && 1 < d && (b.effectTag |= 64, f = !0, $h(e, !1), b.expirationTime = b.childExpirationTime = d - 1);
              e.isBackwards ? (g.sibling = b.child, b.child = g) : (d = e.last, null !== d ? d.sibling = g : b.child = g, e.last = g);
            }

            if (null !== e.tail) {
              0 === e.tailExpiration && (e.tailExpiration = sf() + 500);
              d = e.tail;
              e.rendering = d;
              e.tail = d.sibling;
              e.lastEffect = b.lastEffect;
              d.sibling = null;
              c = P.current;
              c = f ? c & Eg | Gg : c & Eg;
              J(P, c, b);
              b = d;
              break a;
            }

            break;

          case 20:
            break;

          default:
            throw t(Error(156));
        }

        b = null;
      }

      d = V;

      if (1 === W || 1 !== d.childExpirationTime) {
        c = 0;

        for (e = d.child; null !== e;) f = e.expirationTime, g = e.childExpirationTime, f > c && (c = f), g > c && (c = g), e = e.sibling;

        d.childExpirationTime = c;
      }

      if (null !== b) return b;
      null !== a && 0 === (a.effectTag & 1024) && (null === a.firstEffect && (a.firstEffect = V.firstEffect), null !== V.lastEffect && (null !== a.lastEffect && (a.lastEffect.nextEffect = V.firstEffect), a.lastEffect = V.lastEffect), 1 < V.effectTag && (null !== a.lastEffect ? a.lastEffect.nextEffect = V : a.firstEffect = V, a.lastEffect = V));
    } else {
      b = ai(V, W);
      if (null !== b) return b.effectTag &= 1023, b;
      null !== a && (a.firstEffect = a.lastEffect = null, a.effectTag |= 1024);
    }

    b = V.sibling;
    if (null !== b) return b;
    V = a;
  } while (null !== V);

  X === Ei && (X = Ii);
  return null;
}

function ij(a) {
  var b = tf();
  vf(99, nj.bind(null, a, b));
  null !== Qi && wf(97, (function () {
    cj();
    return null;
  }));
  return null;
}

function nj(a, b) {
  cj();
  if ((U & (Ci | Di)) !== T) throw t(Error(327));
  var c = a.finishedWork,
      d = a.finishedExpirationTime;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedExpirationTime = 0;
  if (c === a.current) throw t(Error(177));
  a.callbackNode = null;
  a.callbackExpirationTime = 0;
  var e = c.expirationTime,
      f = c.childExpirationTime;
  e = f > e ? f : e;
  a.firstPendingTime = e;
  e < a.lastPendingTime && (a.lastPendingTime = e);
  a === Ji && (V = Ji = null, W = 0);
  1 < c.effectTag ? null !== c.lastEffect ? (c.lastEffect.nextEffect = c, e = c.firstEffect) : e = c : e = c.firstEffect;

  if (null !== e) {
    f = U;
    U |= Di;
    Ai.current = null;
    He = Qd;
    var h = ae();

    if (be(h)) {
      if ("selectionStart" in h) var g = {
        start: h.selectionStart,
        end: h.selectionEnd
      };else a: {
        g = (g = h.ownerDocument) && g.defaultView || window;
        var k = g.getSelection && g.getSelection();

        if (k && 0 !== k.rangeCount) {
          g = k.anchorNode;
          var l = k.anchorOffset,
              n = k.focusNode;
          k = k.focusOffset;

          try {
            g.nodeType, n.nodeType;
          } catch (zb) {
            g = null;
            break a;
          }

          var z = 0,
              x = -1,
              v = -1,
              rb = 0,
              Be = 0,
              u = h,
              w = null;

          b: for (;;) {
            for (var C;;) {
              u !== g || 0 !== l && 3 !== u.nodeType || (x = z + l);
              u !== n || 0 !== k && 3 !== u.nodeType || (v = z + k);
              3 === u.nodeType && (z += u.nodeValue.length);
              if (null === (C = u.firstChild)) break;
              w = u;
              u = C;
            }

            for (;;) {
              if (u === h) break b;
              w === g && ++rb === l && (x = z);
              w === n && ++Be === k && (v = z);
              if (null !== (C = u.nextSibling)) break;
              u = w;
              w = u.parentNode;
            }

            u = C;
          }

          g = -1 === x || -1 === v ? null : {
            start: x,
            end: v
          };
        } else g = null;
      }
      g = g || {
        start: 0,
        end: 0
      };
    } else g = null;

    Ie = {
      focusedElem: h,
      selectionRange: g
    };
    Qd = !1;
    Y = e;

    do try {
      for (; null !== Y;) {
        if (0 !== (Y.effectTag & 256)) {
          var I = Y.alternate;
          h = Y;

          switch (h.tag) {
            case 0:
            case 11:
            case 15:
              hi(Jg, Ig, h);
              break;

            case 1:
              if (h.effectTag & 256 && null !== I) {
                var E = I.memoizedProps,
                    ua = I.memoizedState,
                    gh = h.stateNode,
                    oj = gh.getSnapshotBeforeUpdate(h.elementType === h.type ? E : Af(h.type, E), ua);
                gh.__reactInternalSnapshotBeforeUpdate = oj;
              }

              break;

            case 3:
            case 5:
            case 6:
            case 4:
            case 17:
              break;

            default:
              throw t(Error(163));
          }
        }

        Y = Y.nextEffect;
      }
    } catch (zb) {
      if (null === Y) throw t(Error(330));
      fi(Y, zb);
      Y = Y.nextEffect;
    } while (null !== Y);

    Y = e;

    do try {
      for (I = b; null !== Y;) {
        var A = Y.effectTag;
        A & 16 && we(Y.stateNode, "");

        if (A & 128) {
          var p = Y.alternate;

          if (null !== p) {
            var r = p.ref;
            null !== r && ("function" === typeof r ? r(null) : r.current = null);
          }
        }

        switch (A & 14) {
          case 2:
            ni(Y);
            Y.effectTag &= -3;
            break;

          case 6:
            ni(Y);
            Y.effectTag &= -3;
            oi(Y.alternate, Y);
            break;

          case 4:
            oi(Y.alternate, Y);
            break;

          case 8:
            E = Y;
            ki(E, I);
            E.return = null;
            E.child = null;
            E.memoizedState = null;
            E.updateQueue = null;
            E.dependencies = null;
            var K = E.alternate;
            null !== K && (K.return = null, K.child = null, K.memoizedState = null, K.updateQueue = null, K.dependencies = null);
        }

        Y = Y.nextEffect;
      }
    } catch (zb) {
      if (null === Y) throw t(Error(330));
      fi(Y, zb);
      Y = Y.nextEffect;
    } while (null !== Y);

    r = Ie;
    p = ae();
    A = r.focusedElem;
    I = r.selectionRange;

    if (p !== A && A && A.ownerDocument && $d(A.ownerDocument.documentElement, A)) {
      null !== I && be(A) && (p = I.start, r = I.end, void 0 === r && (r = p), "selectionStart" in A ? (A.selectionStart = p, A.selectionEnd = Math.min(r, A.value.length)) : (r = (p = A.ownerDocument || document) && p.defaultView || window, r.getSelection && (r = r.getSelection(), E = A.textContent.length, K = Math.min(I.start, E), I = void 0 === I.end ? K : Math.min(I.end, E), !r.extend && K > I && (E = I, I = K, K = E), E = Zd(A, K), ua = Zd(A, I), E && ua && (1 !== r.rangeCount || r.anchorNode !== E.node || r.anchorOffset !== E.offset || r.focusNode !== ua.node || r.focusOffset !== ua.offset) && (p = p.createRange(), p.setStart(E.node, E.offset), r.removeAllRanges(), K > I ? (r.addRange(p), r.extend(ua.node, ua.offset)) : (p.setEnd(ua.node, ua.offset), r.addRange(p))))));
      p = [];

      for (r = A; r = r.parentNode;) 1 === r.nodeType && p.push({
        element: r,
        left: r.scrollLeft,
        top: r.scrollTop
      });

      "function" === typeof A.focus && A.focus();

      for (A = 0; A < p.length; A++) r = p[A], r.element.scrollLeft = r.left, r.element.scrollTop = r.top;
    }

    Ie = null;
    Qd = !!He;
    He = null;
    a.current = c;
    Y = e;

    do try {
      for (A = d; null !== Y;) {
        var $a = Y.effectTag;

        if ($a & 36) {
          var nc = Y.alternate;
          p = Y;
          r = A;

          switch (p.tag) {
            case 0:
            case 11:
            case 15:
              hi(Mg, Ng, p);
              break;

            case 1:
              var md = p.stateNode;
              if (p.effectTag & 4) if (null === nc) md.componentDidMount();else {
                var Fj = p.elementType === p.type ? nc.memoizedProps : Af(p.type, nc.memoizedProps);
                md.componentDidUpdate(Fj, nc.memoizedState, md.__reactInternalSnapshotBeforeUpdate);
              }
              var Xh = p.updateQueue;
              null !== Xh && Yf(p, Xh, md, r);
              break;

            case 3:
              var Yh = p.updateQueue;

              if (null !== Yh) {
                K = null;
                if (null !== p.child) switch (p.child.tag) {
                  case 5:
                    K = p.child.stateNode;
                    break;

                  case 1:
                    K = p.child.stateNode;
                }
                Yf(p, Yh, K, r);
              }

              break;

            case 5:
              var Gj = p.stateNode;
              null === nc && p.effectTag & 4 && (r = Gj, Je(p.type, p.memoizedProps) && r.focus());
              break;

            case 6:
              break;

            case 4:
              break;

            case 12:
              break;

            case 13:
            case 19:
            case 17:
            case 20:
              break;

            default:
              throw t(Error(163));
          }
        }

        if ($a & 128) {
          var nd = Y.ref;

          if (null !== nd) {
            var Zh = Y.stateNode;

            switch (Y.tag) {
              case 5:
                var gf = Zh;
                break;

              default:
                gf = Zh;
            }

            "function" === typeof nd ? nd(gf) : nd.current = gf;
          }
        }

        $a & 512 && (Pi = !0);
        Y = Y.nextEffect;
      }
    } catch (zb) {
      if (null === Y) throw t(Error(330));
      fi(Y, zb);
      Y = Y.nextEffect;
    } while (null !== Y);

    Y = null;
    nf();
    U = f;
  } else a.current = c;

  if (Pi) Pi = !1, Qi = a, Si = d, Ri = b;else for (Y = e; null !== Y;) b = Y.nextEffect, Y.nextEffect = null, Y = b;
  b = a.firstPendingTime;
  0 !== b ? ($a = cg(), $a = zf($a, b), Zi(a, $a, b)) : xi = null;
  "function" === typeof pj && pj(c.stateNode, d);
  1073741823 === b ? a === Vi ? Ui++ : (Ui = 0, Vi = a) : Ui = 0;
  if (ui) throw ui = !1, a = vi, vi = null, a;
  if ((U & Bi) !== T) return null;
  O();
  return null;
}

function cj() {
  if (null === Qi) return !1;
  var a = Qi,
      b = Si,
      c = Ri;
  Qi = null;
  Si = 0;
  Ri = 90;
  return vf(97 < c ? 97 : c, qj.bind(null, a, b));
}

function qj(a) {
  if ((U & (Ci | Di)) !== T) throw t(Error(331));
  var b = U;
  U |= Di;

  for (a = a.current.firstEffect; null !== a;) {
    try {
      var c = a;
      if (0 !== (c.effectTag & 512)) switch (c.tag) {
        case 0:
        case 11:
        case 15:
          hi(Pg, Ig, c), hi(Ig, Og, c);
      }
    } catch (d) {
      if (null === a) throw t(Error(330));
      fi(a, d);
    }

    c = a.nextEffect;
    a.nextEffect = null;
    a = c;
  }

  U = b;
  O();
  return !0;
}

function rj(a, b, c) {
  b = bi(c, b);
  b = ti(a, b, 1073741823);
  Sf(a, b);
  a = Yi(a, 1073741823);
  null !== a && Zi(a, 99, 1073741823);
}

function fi(a, b) {
  if (3 === a.tag) rj(a, a, b);else for (var c = a.return; null !== c;) {
    if (3 === c.tag) {
      rj(c, a, b);
      break;
    } else if (1 === c.tag) {
      var d = c.stateNode;

      if ("function" === typeof c.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === xi || !xi.has(d))) {
        a = bi(b, a);
        a = wi(c, a, 1073741823);
        Sf(c, a);
        c = Yi(c, 1073741823);
        null !== c && Zi(c, 99, 1073741823);
        break;
      }
    }

    c = c.return;
  }
}

function kj(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  Ji === a && W === c ? X === Hi || X === Gi && 1073741823 === Ki && sf() - pi < Oi ? hj(a, W) : Ni = !0 : a.lastPendingTime < c || (b = a.pingTime, 0 !== b && b < c || (a.pingTime = c, a.finishedExpirationTime === c && (a.finishedExpirationTime = 0, a.finishedWork = null), b = cg(), b = zf(b, c), Zi(a, b, c)));
}

function ri(a, b) {
  var c = a.stateNode;
  null !== c && c.delete(b);
  c = cg();
  b = dg(c, a, null);
  c = zf(c, b);
  a = Yi(a, b);
  null !== a && Zi(a, c, b);
}

var mj = void 0;

mj = function (a, b, c) {
  var d = b.expirationTime;

  if (null !== a) {
    var e = b.pendingProps;
    if (a.memoizedProps !== e || M.current) Lf = !0;else if (d < c) {
      Lf = !1;

      switch (b.tag) {
        case 3:
          Nh(b);
          Ch();
          break;

        case 5:
          Cg(b);
          if (b.mode & 4 && 1 !== c && e.hidden) return b.expirationTime = b.childExpirationTime = 1, null;
          break;

        case 1:
          N(b.type) && Xe(b);
          break;

        case 4:
          Ag(b, b.stateNode.containerInfo);
          break;

        case 10:
          Hf(b, b.memoizedProps.value);
          break;

        case 13:
          if (null !== b.memoizedState) {
            d = b.child.childExpirationTime;
            if (0 !== d && d >= c) return Ph(a, b, c);
            J(P, P.current & Eg, b);
            b = Fh(a, b, c);
            return null !== b ? b.sibling : null;
          }

          J(P, P.current & Eg, b);
          break;

        case 19:
          d = b.childExpirationTime >= c;

          if (0 !== (a.effectTag & 64)) {
            if (d) return Rh(a, b, c);
            b.effectTag |= 64;
          }

          e = b.memoizedState;
          null !== e && (e.rendering = null, e.tail = null);
          J(P, P.current, b);
          if (!d) return null;
      }

      return Fh(a, b, c);
    }
  } else Lf = !1;

  b.expirationTime = 0;

  switch (b.tag) {
    case 2:
      d = b.type;
      null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
      a = b.pendingProps;
      e = Se(b, L.current);
      Kf(b, c);
      e = dh(null, b, d, a, e, c);
      b.effectTag |= 1;

      if ("object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof) {
        b.tag = 1;
        ih();

        if (N(d)) {
          var f = !0;
          Xe(b);
        } else f = !1;

        b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null;
        var h = d.getDerivedStateFromProps;
        "function" === typeof h && bg(b, d, h, a);
        e.updater = fg;
        b.stateNode = e;
        e._reactInternalFiber = b;
        jg(b, d, a, c);
        b = Mh(null, b, d, !0, f, c);
      } else b.tag = 0, S(null, b, e, c), b = b.child;

      return b;

    case 16:
      e = b.elementType;
      null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
      a = b.pendingProps;
      e = Bf(e);
      b.type = e;
      f = b.tag = sj(e);
      a = Af(e, a);

      switch (f) {
        case 0:
          b = Jh(null, b, e, a, c);
          break;

        case 1:
          b = Lh(null, b, e, a, c);
          break;

        case 11:
          b = Eh(null, b, e, a, c);
          break;

        case 14:
          b = Gh(null, b, e, Af(e.type, a), d, c);
          break;

        default:
          throw t(Error(306), e, "");
      }

      return b;

    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Af(d, e), Jh(a, b, d, e, c);

    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Af(d, e), Lh(a, b, d, e, c);

    case 3:
      Nh(b);
      d = b.updateQueue;
      if (null === d) throw t(Error(282));
      e = b.memoizedState;
      e = null !== e ? e.element : null;
      Wf(b, d, b.pendingProps, null, c);
      d = b.memoizedState.element;
      if (d === e) Ch(), b = Fh(a, b, c);else {
        e = b.stateNode;
        if (e = (null === a || null === a.child) && e.hydrate) uh = Ne(b.stateNode.containerInfo.firstChild), th = b, e = vh = !0;
        e ? (b.effectTag |= 2, b.child = ug(b, null, d, c)) : (S(a, b, d, c), Ch());
        b = b.child;
      }
      return b;

    case 5:
      return Cg(b), null === a && zh(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, h = e.children, Ke(d, e) ? h = null : null !== f && Ke(d, f) && (b.effectTag |= 16), Kh(a, b), b.mode & 4 && 1 !== c && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (S(a, b, h, c), b = b.child), b;

    case 6:
      return null === a && zh(b), null;

    case 13:
      return Ph(a, b, c);

    case 4:
      return Ag(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = tg(b, null, d, c) : S(a, b, d, c), b.child;

    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Af(d, e), Eh(a, b, d, e, c);

    case 7:
      return S(a, b, b.pendingProps, c), b.child;

    case 8:
      return S(a, b, b.pendingProps.children, c), b.child;

    case 12:
      return S(a, b, b.pendingProps.children, c), b.child;

    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        h = b.memoizedProps;
        f = e.value;
        Hf(b, f);

        if (null !== h) {
          var g = h.value;
          f = hd(g, f) ? 0 : ("function" === typeof d._calculateChangedBits ? d._calculateChangedBits(g, f) : 1073741823) | 0;

          if (0 === f) {
            if (h.children === e.children && !M.current) {
              b = Fh(a, b, c);
              break a;
            }
          } else for (g = b.child, null !== g && (g.return = b); null !== g;) {
            var k = g.dependencies;

            if (null !== k) {
              h = g.child;

              for (var l = k.firstContext; null !== l;) {
                if (l.context === d && 0 !== (l.observedBits & f)) {
                  1 === g.tag && (l = Qf(c, null), l.tag = 2, Sf(g, l));
                  g.expirationTime < c && (g.expirationTime = c);
                  l = g.alternate;
                  null !== l && l.expirationTime < c && (l.expirationTime = c);
                  Jf(g.return, c);
                  k.expirationTime < c && (k.expirationTime = c);
                  break;
                }

                l = l.next;
              }
            } else h = 10 === g.tag ? g.type === b.type ? null : g.child : g.child;

            if (null !== h) h.return = g;else for (h = g; null !== h;) {
              if (h === b) {
                h = null;
                break;
              }

              g = h.sibling;

              if (null !== g) {
                g.return = h.return;
                h = g;
                break;
              }

              h = h.return;
            }
            g = h;
          }
        }

        S(a, b, e.children, c);
        b = b.child;
      }

      return b;

    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, Kf(b, c), e = Mf(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, S(a, b, d, c), b.child;

    case 14:
      return e = b.type, f = Af(e, b.pendingProps), f = Af(e.type, f), Gh(a, b, e, f, d, c);

    case 15:
      return Ih(a, b, b.type, b.pendingProps, d, c);

    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Af(d, e), null !== a && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, N(d) ? (a = !0, Xe(b)) : a = !1, Kf(b, c), hg(b, d, e, c), jg(b, d, e, c), Mh(null, b, d, !0, a, c);

    case 19:
      return Rh(a, b, c);
  }

  throw t(Error(156));
};

var pj = null,
    ji = null;

function tj(a) {
  if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
  var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (b.isDisabled || !b.supportsFiber) return !0;

  try {
    var c = b.inject(a);

    pj = function (a) {
      try {
        b.onCommitFiberRoot(c, a, void 0, 64 === (a.current.effectTag & 64));
      } catch (e) {}
    };

    ji = function (a) {
      try {
        b.onCommitFiberUnmount(c, a);
      } catch (e) {}
    };
  } catch (d) {}

  return !0;
}

function uj(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.effectTag = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childExpirationTime = this.expirationTime = 0;
  this.alternate = null;
}

function xh(a, b, c, d) {
  return new uj(a, b, c, d);
}

function Hh(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}

function sj(a) {
  if ("function" === typeof a) return Hh(a) ? 1 : 0;

  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === gc) return 11;
    if (a === jc) return 14;
  }

  return 2;
}

function og(a, b) {
  var c = a.alternate;
  null === c ? (c = xh(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.effectTag = 0, c.nextEffect = null, c.firstEffect = null, c.lastEffect = null);
  c.childExpirationTime = a.childExpirationTime;
  c.expirationTime = a.expirationTime;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : {
    expirationTime: b.expirationTime,
    firstContext: b.firstContext,
    responders: b.responders
  };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}

function qg(a, b, c, d, e, f) {
  var h = 2;
  d = a;
  if ("function" === typeof a) Hh(a) && (h = 1);else if ("string" === typeof a) h = 5;else a: switch (a) {
    case ac:
      return sg(c.children, e, f, b);

    case fc:
      h = 8;
      e |= 7;
      break;

    case bc:
      h = 8;
      e |= 1;
      break;

    case cc:
      return a = xh(12, c, b, e | 8), a.elementType = cc, a.type = cc, a.expirationTime = f, a;

    case hc:
      return a = xh(13, c, b, e), a.type = hc, a.elementType = hc, a.expirationTime = f, a;

    case ic:
      return a = xh(19, c, b, e), a.elementType = ic, a.expirationTime = f, a;

    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case dc:
          h = 10;
          break a;

        case ec:
          h = 9;
          break a;

        case gc:
          h = 11;
          break a;

        case jc:
          h = 14;
          break a;

        case kc:
          h = 16;
          d = null;
          break a;
      }
      throw t(Error(130), null == a ? a : typeof a, "");
  }
  b = xh(h, c, b, e);
  b.elementType = a;
  b.type = d;
  b.expirationTime = f;
  return b;
}

function sg(a, b, c, d) {
  a = xh(7, a, d, b);
  a.expirationTime = c;
  return a;
}

function pg(a, b, c) {
  a = xh(6, a, null, b);
  a.expirationTime = c;
  return a;
}

function rg(a, b, c) {
  b = xh(4, null !== a.children ? a.children : [], a.key, b);
  b.expirationTime = c;
  b.stateNode = {
    containerInfo: a.containerInfo,
    pendingChildren: null,
    implementation: a.implementation
  };
  return b;
}

function vj(a, b, c) {
  this.tag = b;
  this.current = null;
  this.containerInfo = a;
  this.pingCache = this.pendingChildren = null;
  this.finishedExpirationTime = 0;
  this.finishedWork = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c;
  this.callbackNode = this.firstBatch = null;
  this.pingTime = this.lastPendingTime = this.firstPendingTime = this.callbackExpirationTime = 0;
}

function wj(a, b, c) {
  a = new vj(a, b, c);
  b = xh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
  a.current = b;
  return b.stateNode = a;
}

function xj(a, b, c, d, e, f) {
  var h = b.current;

  a: if (c) {
    c = c._reactInternalFiber;

    b: {
      if (2 !== ld(c) || 1 !== c.tag) throw t(Error(170));
      var g = c;

      do {
        switch (g.tag) {
          case 3:
            g = g.stateNode.context;
            break b;

          case 1:
            if (N(g.type)) {
              g = g.stateNode.__reactInternalMemoizedMergedChildContext;
              break b;
            }

        }

        g = g.return;
      } while (null !== g);

      throw t(Error(171));
    }

    if (1 === c.tag) {
      var k = c.type;

      if (N(k)) {
        c = We(c, k, g);
        break a;
      }
    }

    c = g;
  } else c = Qe;

  null === b.context ? b.context = c : b.pendingContext = c;
  b = f;
  e = Qf(d, e);
  e.payload = {
    element: a
  };
  b = void 0 === b ? null : b;
  null !== b && (e.callback = b);
  Sf(h, e);
  eg(h, d);
  return d;
}

function yj(a, b, c, d) {
  var e = b.current,
      f = cg(),
      h = $f.suspense;
  e = dg(f, e, h);
  return xj(a, b, c, e, h, d);
}

function zj(a) {
  a = a.current;
  if (!a.child) return null;

  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;

    default:
      return a.child.stateNode;
  }
}

function Aj(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return {
    $$typeof: $b,
    key: null == d ? null : "" + d,
    children: a,
    containerInfo: b,
    implementation: c
  };
}

Db = function (a, b, c) {
  switch (b) {
    case "input":
      Ec(a, c);
      b = c.name;

      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode;) c = c.parentNode;

        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');

        for (b = 0; b < c.length; b++) {
          var d = c[b];

          if (d !== a && d.form === a.form) {
            var e = Ka(d);
            if (!e) throw t(Error(90));
            Wb(d);
            Ec(d, e);
          }
        }
      }

      break;

    case "textarea":
      pe(a, c);
      break;

    case "select":
      b = c.value, null != b && me(a, !!c.multiple, b, !1);
  }
};

function Bj(a) {
  var b = 1073741821 - 25 * (((1073741821 - cg() + 500) / 25 | 0) + 1);
  b <= Xi && --b;
  this._expirationTime = Xi = b;
  this._root = a;
  this._callbacks = this._next = null;
  this._hasChildren = this._didComplete = !1;
  this._children = null;
  this._defer = !0;
}

Bj.prototype.render = function (a) {
  if (!this._defer) throw t(Error(250));
  this._hasChildren = !0;
  this._children = a;
  var b = this._root._internalRoot,
      c = this._expirationTime,
      d = new Cj();
  xj(a, b, null, c, null, d._onCommit);
  return d;
};

Bj.prototype.then = function (a) {
  if (this._didComplete) a();else {
    var b = this._callbacks;
    null === b && (b = this._callbacks = []);
    b.push(a);
  }
};

Bj.prototype.commit = function () {
  var a = this._root._internalRoot,
      b = a.firstBatch;
  if (!this._defer || null === b) throw t(Error(251));

  if (this._hasChildren) {
    var c = this._expirationTime;

    if (b !== this) {
      this._hasChildren && (c = this._expirationTime = b._expirationTime, this.render(this._children));

      for (var d = null, e = b; e !== this;) d = e, e = e._next;

      if (null === d) throw t(Error(251));
      d._next = e._next;
      this._next = b;
      a.firstBatch = this;
    }

    this._defer = !1;
    b = c;
    if ((U & (Ci | Di)) !== T) throw t(Error(253));
    xf(Z.bind(null, a, b));
    O();
    b = this._next;
    this._next = null;
    b = a.firstBatch = b;
    null !== b && b._hasChildren && b.render(b._children);
  } else this._next = null, this._defer = !1;
};

Bj.prototype._onComplete = function () {
  if (!this._didComplete) {
    this._didComplete = !0;
    var a = this._callbacks;
    if (null !== a) for (var b = 0; b < a.length; b++) (0, a[b])();
  }
};

function Cj() {
  this._callbacks = null;
  this._didCommit = !1;
  this._onCommit = this._onCommit.bind(this);
}

Cj.prototype.then = function (a) {
  if (this._didCommit) a();else {
    var b = this._callbacks;
    null === b && (b = this._callbacks = []);
    b.push(a);
  }
};

Cj.prototype._onCommit = function () {
  if (!this._didCommit) {
    this._didCommit = !0;
    var a = this._callbacks;
    if (null !== a) for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if ("function" !== typeof c) throw t(Error(191), c);
      c();
    }
  }
};

function Dj(a, b, c) {
  this._internalRoot = wj(a, b, c);
}

function Ej(a, b) {
  this._internalRoot = wj(a, 2, b);
}

Ej.prototype.render = Dj.prototype.render = function (a, b) {
  var c = this._internalRoot,
      d = new Cj();
  b = void 0 === b ? null : b;
  null !== b && d.then(b);
  yj(a, c, null, d._onCommit);
  return d;
};

Ej.prototype.unmount = Dj.prototype.unmount = function (a) {
  var b = this._internalRoot,
      c = new Cj();
  a = void 0 === a ? null : a;
  null !== a && c.then(a);
  yj(null, b, null, c._onCommit);
  return c;
};

Ej.prototype.createBatch = function () {
  var a = new Bj(this),
      b = a._expirationTime,
      c = this._internalRoot,
      d = c.firstBatch;
  if (null === d) c.firstBatch = a, a._next = null;else {
    for (c = null; null !== d && d._expirationTime >= b;) c = d, d = d._next;

    a._next = d;
    null !== c && (c._next = a);
  }
  return a;
};

function Hj(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}

Jb = ej;
Kb = fj;
Lb = aj;

Mb = function (a, b) {
  var c = U;
  U |= 2;

  try {
    return a(b);
  } finally {
    U = c, U === T && O();
  }
};

function Ij(a, b) {
  b || (b = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null, b = !(!b || 1 !== b.nodeType || !b.hasAttribute("data-reactroot")));
  if (!b) for (var c; c = a.lastChild;) a.removeChild(c);
  return new Dj(a, 0, b);
}

function Jj(a, b, c, d, e) {
  var f = c._reactRootContainer,
      h = void 0;

  if (f) {
    h = f._internalRoot;

    if ("function" === typeof e) {
      var g = e;

      e = function () {
        var a = zj(h);
        g.call(a);
      };
    }

    yj(b, h, a, e);
  } else {
    f = c._reactRootContainer = Ij(c, d);
    h = f._internalRoot;

    if ("function" === typeof e) {
      var k = e;

      e = function () {
        var a = zj(h);
        k.call(a);
      };
    }

    gj((function () {
      yj(b, h, a, e);
    }));
  }

  return zj(h);
}

function Kj(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!Hj(b)) throw t(Error(200));
  return Aj(a, b, null, c);
}

var Nj = {
  createPortal: Kj,
  findDOMNode: function (a) {
    if (null == a) a = null;else if (1 !== a.nodeType) {
      var b = a._reactInternalFiber;

      if (void 0 === b) {
        if ("function" === typeof a.render) throw t(Error(188));
        throw t(Error(268), Object.keys(a));
      }

      a = qd(b);
      a = null === a ? null : a.stateNode;
    }
    return a;
  },
  hydrate: function (a, b, c) {
    if (!Hj(b)) throw t(Error(200));
    return Jj(null, a, b, !0, c);
  },
  render: function (a, b, c) {
    if (!Hj(b)) throw t(Error(200));
    return Jj(null, a, b, !1, c);
  },
  unstable_renderSubtreeIntoContainer: function (a, b, c, d) {
    if (!Hj(c)) throw t(Error(200));
    if (null == a || void 0 === a._reactInternalFiber) throw t(Error(38));
    return Jj(a, b, c, !1, d);
  },
  unmountComponentAtNode: function (a) {
    if (!Hj(a)) throw t(Error(40));
    return a._reactRootContainer ? (gj((function () {
      Jj(null, null, a, !1, (function () {
        a._reactRootContainer = null;
      }));
    })), !0) : !1;
  },
  unstable_createPortal: function () {
    return Kj.apply(void 0, arguments);
  },
  unstable_batchedUpdates: ej,
  unstable_interactiveUpdates: function (a, b, c, d) {
    aj();
    return fj(a, b, c, d);
  },
  unstable_discreteUpdates: fj,
  unstable_flushDiscreteUpdates: aj,
  flushSync: function (a, b) {
    if ((U & (Ci | Di)) !== T) throw t(Error(187));
    var c = U;
    U |= 1;

    try {
      return vf(99, a.bind(null, b));
    } finally {
      U = c, O();
    }
  },
  unstable_createRoot: Lj,
  unstable_createSyncRoot: Mj,
  unstable_flushControlled: function (a) {
    var b = U;
    U |= 1;

    try {
      vf(99, a);
    } finally {
      U = b, U === T && O();
    }
  },
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    Events: [Ia, Ja, Ka, Ca.injectEventPluginsByName, fa, Qa, function (a) {
      ya(a, Pa);
    }, Hb, Ib, Ud, Ba, cj, {
      current: !1
    }]
  }
};

function Lj(a, b) {
  if (!Hj(a)) throw t(Error(299), "unstable_createRoot");
  return new Ej(a, null != b && !0 === b.hydrate);
}

function Mj(a, b) {
  if (!Hj(a)) throw t(Error(299), "unstable_createRoot");
  return new Dj(a, 1, null != b && !0 === b.hydrate);
}

(function (a) {
  var b = a.findFiberByHostInstance;
  return tj(m({}, a, {
    overrideHookState: null,
    overrideProps: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xb.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (a) {
      a = qd(a);
      return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: function (a) {
      return b ? b(a) : null;
    },
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null
  }));
})({
  findFiberByHostInstance: Ha,
  bundleType: 0,
  version: "16.9.0",
  rendererPackageName: "react-dom"
});

var Oj = {
  default: Nj
},
    Pj = Oj && Nj || Oj;
module.exports = Pj.default || Pj;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(46);
} else {}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.15.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


Object.defineProperty(exports, "__esModule", {
  value: !0
});
var d = void 0,
    e = void 0,
    g = void 0,
    m = void 0,
    n = void 0;
exports.unstable_now = void 0;
exports.unstable_forceFrameRate = void 0;

if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
  var p = null,
      q = null,
      r = function () {
    if (null !== p) try {
      var a = exports.unstable_now();
      p(!0, a);
      p = null;
    } catch (b) {
      throw setTimeout(r, 0), b;
    }
  };

  exports.unstable_now = function () {
    return Date.now();
  };

  d = function (a) {
    null !== p ? setTimeout(d, 0, a) : (p = a, setTimeout(r, 0));
  };

  e = function (a, b) {
    q = setTimeout(a, b);
  };

  g = function () {
    clearTimeout(q);
  };

  m = function () {
    return !1;
  };

  n = exports.unstable_forceFrameRate = function () {};
} else {
  var t = window.performance,
      u = window.Date,
      v = window.setTimeout,
      w = window.clearTimeout,
      x = window.requestAnimationFrame,
      y = window.cancelAnimationFrame;
  "undefined" !== typeof console && ("function" !== typeof x && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof y && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
  exports.unstable_now = "object" === typeof t && "function" === typeof t.now ? function () {
    return t.now();
  } : function () {
    return u.now();
  };
  var z = !1,
      A = null,
      B = -1,
      C = -1,
      D = 33.33,
      E = -1,
      F = -1,
      G = 0,
      H = !1;

  m = function () {
    return exports.unstable_now() >= G;
  };

  n = function () {};

  exports.unstable_forceFrameRate = function (a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : 0 < a ? (D = Math.floor(1E3 / a), H = !0) : (D = 33.33, H = !1);
  };

  var J = function () {
    if (null !== A) {
      var a = exports.unstable_now(),
          b = 0 < G - a;

      try {
        A(b, a) || (A = null);
      } catch (c) {
        throw I.postMessage(null), c;
      }
    }
  },
      K = new MessageChannel(),
      I = K.port2;

  K.port1.onmessage = J;

  var L = function (a) {
    if (null === A) F = E = -1, z = !1;else {
      z = !0;
      x((function (a) {
        w(B);
        L(a);
      }));

      var b = function () {
        G = exports.unstable_now() + D / 2;
        J();
        B = v(b, 3 * D);
      };

      B = v(b, 3 * D);

      if (-1 !== E && .1 < a - E) {
        var c = a - E;
        !H && -1 !== F && c < D && F < D && (D = c < F ? F : c, 8.33 > D && (D = 8.33));
        F = c;
      }

      E = a;
      G = a + D;
      I.postMessage(null);
    }
  };

  d = function (a) {
    A = a;
    z || (z = !0, x((function (a) {
      L(a);
    })));
  };

  e = function (a, b) {
    C = v((function () {
      a(exports.unstable_now());
    }), b);
  };

  g = function () {
    w(C);
    C = -1;
  };
}

var M = null,
    N = null,
    O = null,
    P = 3,
    Q = !1,
    R = !1,
    S = !1;

function T(a, b) {
  var c = a.next;
  if (c === a) M = null;else {
    a === M && (M = c);
    var f = a.previous;
    f.next = c;
    c.previous = f;
  }
  a.next = a.previous = null;
  c = a.callback;
  f = P;
  var l = O;
  P = a.priorityLevel;
  O = a;

  try {
    var h = a.expirationTime <= b;

    switch (P) {
      case 1:
        var k = c(h);
        break;

      case 2:
        k = c(h);
        break;

      case 3:
        k = c(h);
        break;

      case 4:
        k = c(h);
        break;

      case 5:
        k = c(h);
    }
  } catch (Z) {
    throw Z;
  } finally {
    P = f, O = l;
  }

  if ("function" === typeof k) if (b = a.expirationTime, a.callback = k, null === M) M = a.next = a.previous = a;else {
    k = null;
    h = M;

    do {
      if (b <= h.expirationTime) {
        k = h;
        break;
      }

      h = h.next;
    } while (h !== M);

    null === k ? k = M : k === M && (M = a);
    b = k.previous;
    b.next = k.previous = a;
    a.next = k;
    a.previous = b;
  }
}

function U(a) {
  if (null !== N && N.startTime <= a) {
    do {
      var b = N,
          c = b.next;
      if (b === c) N = null;else {
        N = c;
        var f = b.previous;
        f.next = c;
        c.previous = f;
      }
      b.next = b.previous = null;
      V(b, b.expirationTime);
    } while (null !== N && N.startTime <= a);
  }
}

function W(a) {
  S = !1;
  U(a);
  R || (null !== M ? (R = !0, d(X)) : null !== N && e(W, N.startTime - a));
}

function X(a, b) {
  R = !1;
  S && (S = !1, g());
  U(b);
  Q = !0;

  try {
    if (!a) for (; null !== M && M.expirationTime <= b;) T(M, b), b = exports.unstable_now(), U(b);else if (null !== M) {
      do T(M, b), b = exports.unstable_now(), U(b); while (null !== M && !m());
    }
    if (null !== M) return !0;
    null !== N && e(W, N.startTime - b);
    return !1;
  } finally {
    Q = !1;
  }
}

function Y(a) {
  switch (a) {
    case 1:
      return -1;

    case 2:
      return 250;

    case 5:
      return 1073741823;

    case 4:
      return 1E4;

    default:
      return 5E3;
  }
}

function V(a, b) {
  if (null === M) M = a.next = a.previous = a;else {
    var c = null,
        f = M;

    do {
      if (b < f.expirationTime) {
        c = f;
        break;
      }

      f = f.next;
    } while (f !== M);

    null === c ? c = M : c === M && (M = a);
    b = c.previous;
    b.next = c.previous = a;
    a.next = c;
    a.previous = b;
  }
}

var aa = n;
exports.unstable_ImmediatePriority = 1;
exports.unstable_UserBlockingPriority = 2;
exports.unstable_NormalPriority = 3;
exports.unstable_IdlePriority = 5;
exports.unstable_LowPriority = 4;

exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;

    default:
      a = 3;
  }

  var c = P;
  P = a;

  try {
    return b();
  } finally {
    P = c;
  }
};

exports.unstable_next = function (a) {
  switch (P) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;

    default:
      b = P;
  }

  var c = P;
  P = b;

  try {
    return a();
  } finally {
    P = c;
  }
};

exports.unstable_scheduleCallback = function (a, b, c) {
  var f = exports.unstable_now();

  if ("object" === typeof c && null !== c) {
    var l = c.delay;
    l = "number" === typeof l && 0 < l ? f + l : f;
    c = "number" === typeof c.timeout ? c.timeout : Y(a);
  } else c = Y(a), l = f;

  c = l + c;
  a = {
    callback: b,
    priorityLevel: a,
    startTime: l,
    expirationTime: c,
    next: null,
    previous: null
  };

  if (l > f) {
    c = l;
    if (null === N) N = a.next = a.previous = a;else {
      b = null;
      var h = N;

      do {
        if (c < h.startTime) {
          b = h;
          break;
        }

        h = h.next;
      } while (h !== N);

      null === b ? b = N : b === N && (N = a);
      c = b.previous;
      c.next = b.previous = a;
      a.next = b;
      a.previous = c;
    }
    null === M && N === a && (S ? g() : S = !0, e(W, l - f));
  } else V(a, c), R || Q || (R = !0, d(X));

  return a;
};

exports.unstable_cancelCallback = function (a) {
  var b = a.next;

  if (null !== b) {
    if (a === b) a === M ? M = null : a === N && (N = null);else {
      a === M ? M = b : a === N && (N = b);
      var c = a.previous;
      c.next = b;
      b.previous = c;
    }
    a.next = a.previous = null;
  }
};

exports.unstable_wrapCallback = function (a) {
  var b = P;
  return function () {
    var c = P;
    P = b;

    try {
      return a.apply(this, arguments);
    } finally {
      P = c;
    }
  };
};

exports.unstable_getCurrentPriorityLevel = function () {
  return P;
};

exports.unstable_shouldYield = function () {
  var a = exports.unstable_now();
  U(a);
  return null !== O && null !== M && M.startTime <= a && M.expirationTime < O.expirationTime || m();
};

exports.unstable_requestPaint = aa;

exports.unstable_continueExecution = function () {
  R || Q || (R = !0, d(X));
};

exports.unstable_pauseExecution = function () {};

exports.unstable_getFirstCallbackNode = function () {
  return M;
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var parseuri = __webpack_require__(22);

var debug = __webpack_require__(8)('socket.io-client:url');
/**
 * Module exports.
 */


module.exports = url;
/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc) {
  var obj = uri; // default to window.location

  loc = loc || typeof location !== 'undefined' && location;
  if (null == uri) uri = loc.protocol + '//' + loc.host; // relative path support

  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);

      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    } // parse


    debug('parse %s', uri);
    obj = parseuri(uri);
  } // make sure we treat `localhost:80` and `localhost` equally


  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';
  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host; // define unique id

  obj.id = obj.protocol + '://' + host + ':' + obj.port; // define href

  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : ':' + obj.port);
  return obj;
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(13);
/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];
/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};
/**
 * Previous log timestamp.
 */

var prevTime;
/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}
/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */


function createDebug(namespace) {
  function debug() {
    // disabled?
    if (!debug.enabled) return;
    var self = debug; // set `diff` timestamp

    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr; // turn the `arguments` into a proper Array

    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    } // apply any `formatters` transformations


    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, (function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];

      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

        args.splice(index, 1);
        index--;
      }

      return match;
    })); // apply env-specific formatting (colors, etc.)

    exports.formatArgs.call(self, args);
    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace); // env-specific initialization logic for debug instances

  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */


function enable(namespaces) {
  exports.save(namespaces);
  exports.names = [];
  exports.skips = [];
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings

    namespaces = split[i].replace(/\*/g, '.*?');

    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}
/**
 * Disable debug output.
 *
 * @api public
 */


function disable() {
  exports.enable('');
}
/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */


function enabled(name) {
  var i, len;

  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }

  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }

  return false;
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */


function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = __webpack_require__(51);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, (function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  }));
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(13);
/**
 * Active `debug` instances.
 */

exports.instances = [];
/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];
/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};
/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}
/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */


function createDebug(namespace) {
  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;
    var self = debug; // set `diff` timestamp

    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr; // turn the `arguments` into a proper Array

    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    } // apply any `formatters` transformations


    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, (function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];

      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

        args.splice(index, 1);
        index--;
      }

      return match;
    })); // apply env-specific formatting (colors, etc.)

    exports.formatArgs.call(self, args);
    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy; // env-specific initialization logic for debug instances

  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);
  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);

  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */


function enable(namespaces) {
  exports.save(namespaces);
  exports.names = [];
  exports.skips = [];
  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings

    namespaces = split[i].replace(/\*/g, '.*?');

    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}
/**
 * Disable debug output.
 *
 * @api public
 */


function disable() {
  exports.enable('');
}
/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */


function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }

  var i, len;

  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }

  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }

  return false;
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */


function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

/*global Blob,File*/

/**
 * Module requirements
 */
var isArray = __webpack_require__(15);

var isBuf = __webpack_require__(23);

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';
/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function (packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'

  return {
    packet: pack,
    buffers: buffers
  };
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);

    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }

    return newData;
  } else if (typeof data === 'object' && !(data instanceof Date)) {
    var newData = {};

    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }

    return newData;
  }

  return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */


exports.reconstructPacket = function (packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful

  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (typeof data === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}
/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */


exports.removeBlobs = function (data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj; // convert any blob

    if (withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
      pendingBlobs++; // async filereader

      var fileReader = new FileReader();

      fileReader.onload = function () {
        // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        } else {
          bloblessData = this.result;
        } // if nothing pending its callback time


        if (! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) {
      // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (typeof obj === 'object' && !isBuf(obj)) {
      // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;

  _removeBlobs(bloblessData);

  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);
/**
 * Exports parser
 *
 * @api public
 *
 */

module.exports.parser = __webpack_require__(3);

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var transports = __webpack_require__(26);

var Emitter = __webpack_require__(2);

var debug = __webpack_require__(11)('engine.io-client:socket');

var index = __webpack_require__(30);

var parser = __webpack_require__(3);

var parseuri = __webpack_require__(22);

var parseqs = __webpack_require__(9);
/**
 * Module exports.
 */


module.exports = Socket;
/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);
  opts = opts || {};

  if (uri && 'object' === typeof uri) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure : typeof location !== 'undefined' && 'https:' === location.protocol;

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname || (typeof location !== 'undefined' ? location.hostname : 'localhost');
  this.port = opts.port || (typeof location !== 'undefined' && location.port ? location.port : this.secure ? 443 : 80);
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;
  if (true === this.perMessageDeflate) this.perMessageDeflate = {};

  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  } // SSL options for Node.js client


  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode; // detect ReactNative environment

  this.isReactNative = typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative'; // other options for Node.js or ReactNative client

  if (typeof self === 'undefined' || this.isReactNative) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  } // set on handshake


  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null; // set on heartbeat

  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;
  this.open();
}

Socket.priorWebsocketSuccess = false;
/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);
/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(18);
Socket.transports = __webpack_require__(26);
Socket.parser = __webpack_require__(3);
/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query); // append engine.io protocol identifier

  query.EIO = parser.protocol; // transport name

  query.transport = name; // per-transport options

  var options = this.transportOptions[name] || {}; // session id if we already have one

  if (this.id) query.sid = this.id;
  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void 0,
    isReactNative: this.isReactNative
  });
  return transport;
};

function clone(obj) {
  var o = {};

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }

  return o;
}
/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */


Socket.prototype.open = function () {
  var transport;

  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout((function () {
      self.emit('error', 'No transports available');
    }), 0);
    return;
  } else {
    transport = this.transports[0];
  }

  this.readyState = 'opening'; // Retry with the next transport if the transport is disabled (jsonp: false)

  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};
/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */


Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  } // set up transport


  this.transport = transport; // set up transport listeners

  transport.on('drain', (function () {
    self.onDrain();
  })).on('packet', (function (packet) {
    self.onPacket(packet);
  })).on('error', (function (e) {
    self.onError(e);
  })).on('close', (function () {
    self.onClose('transport close');
  }));
};
/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */


Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, {
    probe: 1
  });
  var failed = false;
  var self = this;
  Socket.priorWebsocketSuccess = false;

  function onTransportOpen() {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }

    if (failed) return;
    debug('probe transport "%s" opened', name);
    transport.send([{
      type: 'ping',
      data: 'probe'
    }]);
    transport.once('packet', (function (msg) {
      if (failed) return;

      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;
        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause((function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');
          cleanup();
          self.setTransport(transport);
          transport.send([{
            type: 'upgrade'
          }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        }));
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    }));
  }

  function freezeTransport() {
    if (failed) return; // Any callback called by transport should be ignored since now

    failed = true;
    cleanup();
    transport.close();
    transport = null;
  } // Handle any error that happens while probing


  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;
    freezeTransport();
    debug('probe transport "%s" failed because of error: %s', name, err);
    self.emit('upgradeError', error);
  }

  function onTransportClose() {
    onerror('transport closed');
  } // When the socket is closed while we're probing


  function onclose() {
    onerror('socket closed');
  } // When the socket is upgraded while we're probing


  function onupgrade(to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  } // Remove all listeners on the transport and on self


  function cleanup() {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);
  this.once('close', onclose);
  this.once('upgrading', onupgrade);
  transport.open();
};
/**
 * Called when connection is deemed open.
 *
 * @api public
 */


Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush(); // we check for `readyState` in case an `open`
  // listener already closed the socket

  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');

    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};
/**
 * Handles a packet.
 *
 * @api private
 */


Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
    this.emit('packet', packet); // Socket is live - any packet counts

    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};
/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */


Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen(); // In case open handler closes socket

  if ('closed' === this.readyState) return;
  this.setPing(); // Prolong liveness of socket on heartbeat

  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};
/**
 * Resets ping timeout.
 *
 * @api private
 */


Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout((function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }), timeout || self.pingInterval + self.pingTimeout);
};
/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */


Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout((function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }), self.pingInterval);
};
/**
* Sends a ping packet.
*
* @api private
*/


Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', (function () {
    self.emit('ping');
  }));
};
/**
 * Called on `drain` event
 *
 * @api private
 */


Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`

  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};
/**
 * Flush write buffers.
 *
 * @api private
 */


Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`

    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};
/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */


Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};
/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */


Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;
  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};
/**
 * Closes the connection.
 *
 * @api private
 */


Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';
    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', (function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      }));
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close() {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose() {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade() {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};
/**
 * Called upon transport error
 *
 * @api private
 */


Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};
/**
 * Called upon transport close.
 *
 * @api private
 */


Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this; // clear timers

    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer); // stop event from firing again for transport

    this.transport.removeAllListeners('close'); // ensure transport won't stay open

    this.transport.close(); // ignore further transport communication

    this.transport.removeAllListeners(); // set ready state

    this.readyState = 'closed'; // clear session id

    this.id = null; // emit close event

    this.emit('close', reason, desc); // clean buffers after, so users can still
    // grab the buffers on `close` event

    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};
/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */


Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];

  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }

  return filteredUpgrades;
};

/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */
try {
  module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* global attachEvent */

/**
 * Module requirements.
 */
var XMLHttpRequest = __webpack_require__(17);

var Polling = __webpack_require__(27);

var Emitter = __webpack_require__(2);

var inherit = __webpack_require__(10);

var debug = __webpack_require__(11)('engine.io-client:polling-xhr');
/**
 * Module exports.
 */


module.exports = XHR;
module.exports.Request = Request;
/**
 * Empty function
 */

function empty() {}
/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */


function XHR(opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = typeof location !== 'undefined' && opts.hostname !== location.hostname || port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}
/**
 * Inherits from Polling.
 */


inherit(XHR, Polling);
/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;
/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout; // other options for Node.js client

  opts.extraHeaders = this.extraHeaders;
  return new Request(opts);
};
/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */


XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({
    method: 'POST',
    data: data,
    isBinary: isBinary
  });
  var self = this;
  req.on('success', fn);
  req.on('error', (function (err) {
    self.onError('xhr post error', err);
  }));
  this.sendXhr = req;
};
/**
 * Starts a poll cycle.
 *
 * @api private
 */


XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', (function (data) {
    self.onData(data);
  }));
  req.on('error', (function (err) {
    self.onError('xhr poll error', err);
  }));
  this.pollXhr = req;
};
/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */


function Request(opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.requestTimeout = opts.requestTimeout; // SSL options for Node.js client

  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized; // other options for Node.js client

  this.extraHeaders = opts.extraHeaders;
  this.create();
}
/**
 * Mix in `Emitter`.
 */


Emitter(Request.prototype);
/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = {
    agent: this.agent,
    xdomain: this.xd,
    xscheme: this.xs,
    enablesXDR: this.enablesXDR
  }; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);

    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {} // ie6 check


    if ('withCredentials' in xhr) {
      xhr.withCredentials = true;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };

      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');

            if (self.supportsBinary && contentType === 'application/octet-stream') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }

        if (4 !== xhr.readyState) return;

        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout((function () {
            self.onError(xhr.status);
          }), 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout((function () {
      self.onError(e);
    }), 0);
    return;
  }

  if (typeof document !== 'undefined') {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};
/**
 * Called upon successful response.
 *
 * @api private
 */


Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};
/**
 * Called if we have data.
 *
 * @api private
 */


Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};
/**
 * Called upon error.
 *
 * @api private
 */


Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};
/**
 * Cleans up house.
 *
 * @api private
 */


Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  } // xmlhttprequest


  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (typeof document !== 'undefined') {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};
/**
 * Called upon load.
 *
 * @api private
 */


Request.prototype.onLoad = function () {
  var data;

  try {
    var contentType;

    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}

    if (contentType === 'application/octet-stream') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }

  if (null != data) {
    this.onData(data);
  }
};
/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */


Request.prototype.hasXDR = function () {
  return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
};
/**
 * Aborts the request.
 *
 * @api public
 */


Request.prototype.abort = function () {
  this.cleanup();
};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */


Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== 'undefined') {
  if (typeof attachEvent === 'function') {
    attachEvent('onunload', unloadHandler);
  } else if (typeof addEventListener === 'function') {
    var terminationEvent = 'onpagehide' in self ? 'pagehide' : 'unload';
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

/***/ }),
/* 60 */
/***/ (function(module, exports) {

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */
module.exports = Object.keys || function keys(obj) {
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }

  return arr;
};

/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */
module.exports = function (arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) {
    return arraybuffer.slice(start, end);
  }

  if (start < 0) {
    start += bytes;
  }

  if (end < 0) {
    end += bytes;
  }

  if (end > bytes) {
    end = bytes;
  }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);

  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }

  return result.buffer;
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = after;

function after(count, callback, err_cb) {
  var bail = false;
  err_cb = err_cb || noop;
  proxy.count = count;
  return count === 0 ? callback() : proxy;

  function proxy(err, result) {
    if (proxy.count <= 0) {
      throw new Error('after called too many times');
    }

    --proxy.count; // after first error, rest are passed to err_cb

    if (err) {
      bail = true;
      callback(err); // future error callbacks will go to error handler

      callback = err_cb;
    } else if (proxy.count === 0 && !bail) {
      callback(null, result);
    }
  }
}

function noop() {}

/***/ }),
/* 63 */
/***/ (function(module, exports) {

/*! https://mths.be/utf8js v2.1.2 by @mathias */
var stringFromCharCode = String.fromCharCode; // Taken from https://mths.be/punycode

function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  var value;
  var extra;

  while (counter < length) {
    value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // high surrogate, and there is a next character
      extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // low surrogate
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // unmatched surrogate; only append this code unit, in case the next
        // code unit is the high surrogate of a surrogate pair
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
} // Taken from https://mths.be/punycode


function ucs2encode(array) {
  var length = array.length;
  var index = -1;
  var value;
  var output = '';

  while (++index < length) {
    value = array[index];

    if (value > 0xFFFF) {
      value -= 0x10000;
      output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
      value = 0xDC00 | value & 0x3FF;
    }

    output += stringFromCharCode(value);
  }

  return output;
}

function checkScalarValue(codePoint, strict) {
  if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
    if (strict) {
      throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
    }

    return false;
  }

  return true;
}
/*--------------------------------------------------------------------------*/


function createByte(codePoint, shift) {
  return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
}

function encodeCodePoint(codePoint, strict) {
  if ((codePoint & 0xFFFFFF80) == 0) {
    // 1-byte sequence
    return stringFromCharCode(codePoint);
  }

  var symbol = '';

  if ((codePoint & 0xFFFFF800) == 0) {
    // 2-byte sequence
    symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
  } else if ((codePoint & 0xFFFF0000) == 0) {
    // 3-byte sequence
    if (!checkScalarValue(codePoint, strict)) {
      codePoint = 0xFFFD;
    }

    symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
    symbol += createByte(codePoint, 6);
  } else if ((codePoint & 0xFFE00000) == 0) {
    // 4-byte sequence
    symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
    symbol += createByte(codePoint, 12);
    symbol += createByte(codePoint, 6);
  }

  symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
  return symbol;
}

function utf8encode(string, opts) {
  opts = opts || {};
  var strict = false !== opts.strict;
  var codePoints = ucs2decode(string);
  var length = codePoints.length;
  var index = -1;
  var codePoint;
  var byteString = '';

  while (++index < length) {
    codePoint = codePoints[index];
    byteString += encodeCodePoint(codePoint, strict);
  }

  return byteString;
}
/*--------------------------------------------------------------------------*/


function readContinuationByte() {
  if (byteIndex >= byteCount) {
    throw Error('Invalid byte index');
  }

  var continuationByte = byteArray[byteIndex] & 0xFF;
  byteIndex++;

  if ((continuationByte & 0xC0) == 0x80) {
    return continuationByte & 0x3F;
  } // If we end up here, it’s not a continuation byte


  throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
  var byte1;
  var byte2;
  var byte3;
  var byte4;
  var codePoint;

  if (byteIndex > byteCount) {
    throw Error('Invalid byte index');
  }

  if (byteIndex == byteCount) {
    return false;
  } // Read first byte


  byte1 = byteArray[byteIndex] & 0xFF;
  byteIndex++; // 1-byte sequence (no continuation bytes)

  if ((byte1 & 0x80) == 0) {
    return byte1;
  } // 2-byte sequence


  if ((byte1 & 0xE0) == 0xC0) {
    byte2 = readContinuationByte();
    codePoint = (byte1 & 0x1F) << 6 | byte2;

    if (codePoint >= 0x80) {
      return codePoint;
    } else {
      throw Error('Invalid continuation byte');
    }
  } // 3-byte sequence (may include unpaired surrogates)


  if ((byte1 & 0xF0) == 0xE0) {
    byte2 = readContinuationByte();
    byte3 = readContinuationByte();
    codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;

    if (codePoint >= 0x0800) {
      return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
    } else {
      throw Error('Invalid continuation byte');
    }
  } // 4-byte sequence


  if ((byte1 & 0xF8) == 0xF0) {
    byte2 = readContinuationByte();
    byte3 = readContinuationByte();
    byte4 = readContinuationByte();
    codePoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;

    if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
      return codePoint;
    }
  }

  throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;

function utf8decode(byteString, opts) {
  opts = opts || {};
  var strict = false !== opts.strict;
  byteArray = ucs2decode(byteString);
  byteCount = byteArray.length;
  byteIndex = 0;
  var codePoints = [];
  var tmp;

  while ((tmp = decodeSymbol(strict)) !== false) {
    codePoints.push(tmp);
  }

  return ucs2encode(codePoints);
}

module.exports = {
  version: '2.1.2',
  encode: utf8encode,
  decode: utf8decode
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function () {
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; // Use a lookup table to find the index.

  var lookup = new Uint8Array(256);

  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;

      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i + 1)];
      encoded3 = lookup[base64.charCodeAt(i + 2)];
      encoded4 = lookup[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})();

/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * Create a blob builder even when vendor prefixes exist
 */
var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : false;
/**
 * Check if Blob constructor is supported
 */

var blobSupported = (function () {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch (e) {
    return false;
  }
})();
/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */


var blobSupportsArrayBufferView = blobSupported && (function () {
  try {
    var b = new Blob([new Uint8Array([1, 2])]);
    return b.size === 2;
  } catch (e) {
    return false;
  }
})();
/**
 * Check if BlobBuilder is supported
 */


var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map((function (chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer; // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer

      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  }));
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};
  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach((function (part) {
    bb.append(part);
  }));
  return options.type ? bb.getBlob(options.type) : bb.getBlob();
}

;

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
}

;

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = (function () {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
})();

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(13);
/**
 * Active `debug` instances.
 */

exports.instances = [];
/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];
/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};
/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}
/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */


function createDebug(namespace) {
  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;
    var self = debug; // set `diff` timestamp

    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr; // turn the `arguments` into a proper Array

    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    } // apply any `formatters` transformations


    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, (function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];

      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

        args.splice(index, 1);
        index--;
      }

      return match;
    })); // apply env-specific formatting (colors, etc.)

    exports.formatArgs.call(self, args);
    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy; // env-specific initialization logic for debug instances

  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);
  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);

  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */


function enable(namespaces) {
  exports.save(namespaces);
  exports.names = [];
  exports.skips = [];
  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings

    namespaces = split[i].replace(/\*/g, '.*?');

    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}
/**
 * Disable debug output.
 *
 * @api public
 */


function disable() {
  exports.enable('');
}
/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */


function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }

  var i, len;

  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }

  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }

  return false;
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */


function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Module requirements.
 */
var Polling = __webpack_require__(27);

var inherit = __webpack_require__(10);
/**
 * Module exports.
 */


module.exports = JSONPPolling;
/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;
/**
 * Global JSONP callbacks.
 */

var callbacks;
/**
 * Noop.
 */

function empty() {}
/**
 * Until https://github.com/tc39/proposal-global is shipped.
 */


function glob() {
  return typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};
}
/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */


function JSONPPolling(opts) {
  Polling.call(this, opts);
  this.query = this.query || {}; // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution

  if (!callbacks) {
    // we need to consider multiple engines in the same page
    var global = glob();
    callbacks = global.___eio = global.___eio || [];
  } // callback identifier


  this.index = callbacks.length; // add callback to jsonp global

  var self = this;
  callbacks.push((function (msg) {
    self.onData(msg);
  })); // append to query string

  this.query.j = this.index; // prevent spurious errors from being emitted when the window is unloaded

  if (typeof addEventListener === 'function') {
    addEventListener('beforeunload', (function () {
      if (self.script) self.script.onerror = empty;
    }), false);
  }
}
/**
 * Inherits from Polling.
 */


inherit(JSONPPolling, Polling);
/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;
/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};
/**
 * Starts a poll cycle.
 *
 * @api private
 */


JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();

  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];

  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }

  this.script = script;
  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout((function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }), 100);
  }
};
/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */


JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;
    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);
    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete() {
    initIframe();
    fn();
  }

  function initIframe() {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;
    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe(); // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side

  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(24)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Module dependencies.
 */
var Transport = __webpack_require__(18);

var parser = __webpack_require__(3);

var parseqs = __webpack_require__(9);

var inherit = __webpack_require__(10);

var yeast = __webpack_require__(29);

var debug = __webpack_require__(11)('engine.io-client:websocket');

var BrowserWebSocket, NodeWebSocket;

if (typeof WebSocket !== 'undefined') {
  BrowserWebSocket = WebSocket;
} else if (typeof self !== 'undefined') {
  BrowserWebSocket = self.WebSocket || self.MozWebSocket;
} else {
  try {
    NodeWebSocket = __webpack_require__(69);
  } catch (e) {}
}
/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */


var WebSocketImpl = BrowserWebSocket || NodeWebSocket;
/**
 * Module exports.
 */

module.exports = WS;
/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts) {
  var forceBase64 = opts && opts.forceBase64;

  if (forceBase64) {
    this.supportsBinary = false;
  }

  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;

  if (!this.usingBrowserWebSocket) {
    WebSocketImpl = NodeWebSocket;
  }

  Transport.call(this, opts);
}
/**
 * Inherits from Transport.
 */


inherit(WS, Transport);
/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';
/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;
/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {
    agent: this.agent,
    perMessageDeflate: this.perMessageDeflate
  }; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;

  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }

  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket && !this.isReactNative ? protocols ? new WebSocketImpl(uri, protocols) : new WebSocketImpl(uri) : new WebSocketImpl(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};
/**
 * Adds event listeners to the socket
 *
 * @api private
 */


WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };

  this.ws.onclose = function () {
    self.onClose();
  };

  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };

  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};
/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */


WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false; // encodePacket efficient as it uses WS framing
  // no need for encodePayload

  var total = packets.length;

  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, (function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};

          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? Buffer.byteLength(data) : data.length;

            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        } // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error


        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      }));
    })(packets[i]);
  }

  function done() {
    self.emit('flush'); // fake drain
    // defer to next tick to allow Socket to clear writeBuffer

    setTimeout((function () {
      self.writable = true;
      self.emit('drain');
    }), 0);
  }
};
/**
 * Called upon close
 *
 * @api private
 */


WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};
/**
 * Closes socket.
 *
 * @api private
 */


WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};
/**
 * Generates uri for connection.
 *
 * @api private
 */


WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = ''; // avoid port if default for schema

  if (this.port && ('wss' === schema && Number(this.port) !== 443 || 'ws' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  } // append timestamp to URI


  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  } // communicate binary support capabilities


  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query); // prepend ? to query

  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};
/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */


WS.prototype.check = function () {
  return !!WebSocketImpl && !('__initialize' in WebSocketImpl && this.name === WS.prototype.name);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16).Buffer))

/***/ }),
/* 69 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = toArray;

function toArray(list, index) {
  var array = [];
  index = index || 0;

  for (var i = index || 0; i < list.length; i++) {
    array[i - index] = list[i];
  }

  return array;
}

/***/ }),
/* 71 */
/***/ (function(module, exports) {

/**
 * Expose `Backoff`.
 */
module.exports = Backoff;
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */


Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */


Backoff.prototype.reset = function () {
  this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */


Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */


Backoff.prototype.setMax = function (max) {
  this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */


Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, "body {\n    margin: 0;\n}\n\n._1aOUYWHb1xWxyf55itOXwd {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n}\n\n._22GEnjbFn-ft-XKd37JsiZ {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    border-bottom: 1px solid #ccc;\n    width: 100%;\n}\n\n.x_tmP-3OGubtGvF1OFb4h {\n    display: flex;\n    width: 25vw;\n    border-right: 1px solid #ccc;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 20px;\n    font-size: 1.2em;\n    color: black;\n}\n\n.Zks7gB-JpVMIQfDX7kTgh {\n    display: flex;\n    width: 75vw;\n    justify-content: center;\n    box-sizing: border-box;\n    padding: 20px;\n    font-size: 1.2em;\n    color: black;\n}\n\n._1ENM9KYSohM689Y5JUCRgH {\n    display: flex;\n    flex-direction: row;\n    flex: 1;\n    width: 100vw;\n    box-sizing: border-box;\n}\n\n._1Lr2m3YB6Y9F2OvvDCTAaC {\n    display: flex;\n    flex-direction: column;\n    width: 75vw;\n    flex: 1;\n}\n", ""]);
// Exports
exports.locals = {
	"App": "_1aOUYWHb1xWxyf55itOXwd",
	"AppHeader": "_22GEnjbFn-ft-XKd37JsiZ",
	"AppTitle": "x_tmP-3OGubtGvF1OFb4h",
	"AppRoom": "Zks7gB-JpVMIQfDX7kTgh",
	"AppBody": "_1ENM9KYSohM689Y5JUCRgH",
	"MessageWrapper": "_1Lr2m3YB6Y9F2OvvDCTAaC"
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, ".aE-TcArMGIkIXDhQFgDKU {\n    display: flex;\n    flex-direction: row;\n}\n\n._3RWTJd8FS-N4rIafsJDyZH {\n    flex: 1;\n    padding: 20px;\n    border: 0;\n    border-top: 1px solid #ccc;\n}\n", ""]);
// Exports
exports.locals = {
	"MessageForm": "aE-TcArMGIkIXDhQFgDKU",
	"MessageInput": "_3RWTJd8FS-N4rIafsJDyZH"
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, ".vQ5aJsvnLIxRLM8c6p3i2 {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    width: 75vw;\n    padding: 20px;\n}\n._3hmt1UkMiD01P3i4SuoZ6S {\n    display: flex;\n    width: 35%;\n    border: 1px solid black;\n    padding: 35px;\n    border-radius: 20px 0px 20px 0px;\n    background: lightblue;\n    font-size: 1.2em;\n    margin: 10px;\n}\n", ""]);
// Exports
exports.locals = {
	"MessageList": "vQ5aJsvnLIxRLM8c6p3i2",
	"Message": "_3hmt1UkMiD01P3i4SuoZ6S"
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, "._2UULi6FAZEMuEc22uAbQyF {\n    display: flex;\n    flex: 1;\n    width: 25vw;\n    justify-content: flex-start;\n    flex-direction: column;\n    border-right: 1px solid #ccc;\n}\n\n.dkLMq8enzMciibhHGBA1U {\n    padding: 20px;\n    text-align: center;\n    background: #ccc;\n    font-size: 1.2em;\n}\n\n\n\n._28WHGmgRsA__7KtxQOgIvZ {\n    list-style: none;\n    border-bottom: 1px solid #ccc;\n    padding: 20px;\n    margin: 0 0 0 20px;\n}\n", ""]);
// Exports
exports.locals = {
	"Users": "_2UULi6FAZEMuEc22uAbQyF",
	"UsersOnline": "dkLMq8enzMciibhHGBA1U",
	"UserItem": "_28WHGmgRsA__7KtxQOgIvZ"
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, "._2UG4ude1ZEYdaWWKC6v2if {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100vw;\n    height: 100vh;\n}\n\n._126lw-i40tJiicwxVt1OBG {\n    padding: 20px;\n    font-size: 1.5em;\n    border: 0;\n    border-bottom: 1px solid #ccc;\n    width: 510px;\n    text-align: center;\n}\n", ""]);
// Exports
exports.locals = {
	"UserForm": "_2UG4ude1ZEYdaWWKC6v2if",
	"UserInput": "_126lw-i40tJiicwxVt1OBG"
};

/***/ }),
/* 77 */
/***/ ((function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault(e) {
  return e && "object" == typeof e && "default" in e ? e.default : e;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var React = _interopDefault(__webpack_require__(0));

function AppContainer(e) {
  return AppContainer.warnAboutHMRDisabled && (AppContainer.warnAboutHMRDisabled = !0, console.error("React-Hot-Loader: misconfiguration detected, using production version in non-production environment."), console.error("React-Hot-Loader: Hot Module Replacement is not enabled.")), React.Children.only(e.children);
}

AppContainer.warnAboutHMRDisabled = !1;

var hot = function e() {
  return e.shouldWrapWithAppContainer ? function (e) {
    return function (n) {
      return React.createElement(AppContainer, null, React.createElement(e, n));
    };
  } : function (e) {
    return e;
  };
};

hot.shouldWrapWithAppContainer = !1;

var areComponentsEqual = function (e, n) {
  return e === n;
},
    setConfig = function () {},
    cold = function (e) {
  return e;
},
    configureComponent = function () {};

exports.AppContainer = AppContainer, exports.hot = hot, exports.areComponentsEqual = areComponentsEqual, exports.setConfig = setConfig, exports.cold = cold, exports.configureComponent = configureComponent;

/***/ }))
/******/ ]);
