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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! mainapp */ \"./node_modules/mainapp/index.js\");\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-plain-object <https://github.com/jonschlinkert/is-plain-object>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nvar isObject = __webpack_require__(/*! isobject */ \"./node_modules/isobject/index.js\");\n\nfunction isObjectObject(o) {\n  return isObject(o) === true\n    && Object.prototype.toString.call(o) === '[object Object]';\n}\n\nmodule.exports = function isPlainObject(o) {\n  var ctor,prot;\n\n  if (isObjectObject(o) === false) return false;\n\n  // If has modified constructor\n  ctor = o.constructor;\n  if (typeof ctor !== 'function') return false;\n\n  // If has modified prototype\n  prot = ctor.prototype;\n  if (isObjectObject(prot) === false) return false;\n\n  // If constructor does not have an Object-specific method\n  if (prot.hasOwnProperty('isPrototypeOf') === false) {\n    return false;\n  }\n\n  // Most likely a plain Object\n  return true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-plain-object/index.js?");

/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * isobject <https://github.com/jonschlinkert/isobject>\n *\n * Copyright (c) 2014-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nmodule.exports = function isObject(val) {\n  return val != null && typeof val === 'object' && Array.isArray(val) === false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/isobject/index.js?");

/***/ }),

/***/ "./node_modules/mainapp/app-factory.js":
/*!*********************************************!*\
  !*** ./node_modules/mainapp/app-factory.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Component = __webpack_require__(/*! ./component */ \"./node_modules/mainapp/component.js\")\n\nmodule.exports = (renderFactory) => (mainComponent, container) => {\n  let mainComponentInstance\n  const render = renderFactory(() => mainComponentInstance.view(), container)\n  mainComponentInstance = Component(render, mainComponent)\n  render()\n  return mainComponentInstance\n}\n\n\n//# sourceURL=webpack:///./node_modules/mainapp/app-factory.js?");

/***/ }),

/***/ "./node_modules/mainapp/component.js":
/*!*******************************************!*\
  !*** ./node_modules/mainapp/component.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const isPlainObject = __webpack_require__(/*! is-plain-object */ \"./node_modules/is-plain-object/index.js\")\n\nasync function unmount (state, key) {\n  const child = state[key]\n  if (isPlainObject(child)) {\n    if (child.willUnmount) {\n      await child.willUnmount(key)\n      delete child.willUnmount\n    }\n    for (let childKey in child) {\n      await unmount(child, childKey)\n    }\n  }\n}\nmodule.exports = (onStateUpdate, mainSpecification) => {\n  const $global = {}\n  function wireSpecification (specification, state) {\n    for (const key in specification) {\n      const value = specification[key]\n      if (value === undefined) {\n        unmount(state, key)\n        delete state[key]\n      } else if (key === 'view') {\n        state[key] = (attributes, children) => value(state, attributes, children)\n      } else if (typeof value === 'function') {\n        state[key] = async (...parameters) => {\n          const update = await value(state, ...parameters)\n          if (!update) {\n            return\n          }\n          const parentUpdate = update.$parent\n          delete update.$parent\n          const globalUpdate = update.$global\n          delete update.$global\n\n          wireSpecification(update, state)\n          if (parentUpdate && state.$parent) {\n            wireSpecification(parentUpdate, state.$parent)\n          }\n          if (globalUpdate) {\n            wireSpecification(globalUpdate, $global)\n          }\n          onStateUpdate()\n        }\n      } else if (isPlainObject(value)) {\n        if (isPlainObject(state[key])) {\n          wireSpecification(value, state[key])\n        } else {\n          const childState = {}\n          Object.defineProperty(childState, '$global', {\n            value: $global,\n            enumerable: false,\n            writeable: false,\n            configurable: false\n          })\n          Object.defineProperty(childState, '$parent', {\n            value: state,\n            enumerable: false,\n            writeable: false,\n            configurable: false\n          })\n          state[key] = wireSpecification(value, childState)\n          const child = state[key]\n          if (child.didMount) {\n            child.didMount(key)\n            delete child.didMount\n          }\n        }\n      } else { // data\n        state[key] = value\n      }\n    }\n    return state\n  }\n  return wireSpecification(mainSpecification, $global)\n}\n\n\n//# sourceURL=webpack:///./node_modules/mainapp/component.js?");

/***/ }),

/***/ "./node_modules/mainapp/h.js":
/*!***********************************!*\
  !*** ./node_modules/mainapp/h.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {h} = __webpack_require__(/*! ultradom */ \"./node_modules/ultradom/src/index.js\")\n\nmodule.exports = (name, attributes = {}, ...children) => {\n  if (typeof name === 'function') {\n    return {\n      view: name,\n      attributes,\n      children\n    }\n  }\n  if (name.view) {\n    return {\n      view: name.view,\n      attributes,\n      children\n    }\n  }\n  return h(name, attributes, children)\n}\n\n\n//# sourceURL=webpack:///./node_modules/mainapp/h.js?");

/***/ }),

/***/ "./node_modules/mainapp/index.js":
/*!***************************************!*\
  !*** ./node_modules/mainapp/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {render} = __webpack_require__(/*! ultradom */ \"./node_modules/ultradom/src/index.js\")\nconst h = __webpack_require__(/*! ./h */ \"./node_modules/mainapp/h.js\")\nconst materialize = __webpack_require__(/*! ./materialize */ \"./node_modules/mainapp/materialize.js\")\nconst AppFactory = __webpack_require__(/*! ./app-factory */ \"./node_modules/mainapp/app-factory.js\")\n\nmodule.exports = {\n  h,\n  materialize,\n  App: AppFactory((view, container) => () => requestAnimationFrame(() => render(materialize(view()), container)))\n}\n\n\n//# sourceURL=webpack:///./node_modules/mainapp/index.js?");

/***/ }),

/***/ "./node_modules/mainapp/materialize.js":
/*!*********************************************!*\
  !*** ./node_modules/mainapp/materialize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function materialize (node) {\n  if (!node) {\n    return node\n  }\n  if (node.view) {\n    return materialize(node.view(node.attributes, node.children))\n  }\n  if (node.children) {\n    node.children = node.children.map(materialize).filter((child) => child !== undefined && child !== null)\n  }\n  return node\n}\n\n\n//# sourceURL=webpack:///./node_modules/mainapp/materialize.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/clone.js":
/*!********************************************!*\
  !*** ./node_modules/ultradom/src/clone.js ***!
  \********************************************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clone\", function() { return clone; });\nfunction clone(target, source) {\n  var obj = {}\n\n  for (var i in target) obj[i] = target[i]\n  for (var i in source) obj[i] = source[i]\n\n  return obj\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/clone.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/createElement.js":
/*!****************************************************!*\
  !*** ./node_modules/ultradom/src/createElement.js ***!
  \****************************************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\n/* harmony import */ var _updateAttribute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateAttribute */ \"./node_modules/ultradom/src/updateAttribute.js\");\n\n\nfunction createElement(node, lifecycle, isSVG) {\n  var element =\n    typeof node === \"string\" || typeof node === \"number\"\n      ? document.createTextNode(node)\n      : (isSVG = isSVG || node.name === \"svg\")\n        ? document.createElementNS(\"http://www.w3.org/2000/svg\", node.name)\n        : document.createElement(node.name)\n\n  var attributes = node.attributes\n  if (attributes) {\n    if (attributes.oncreate) {\n      lifecycle.push(function() {\n        attributes.oncreate(element)\n      })\n    }\n\n    for (var i = 0; i < node.children.length; i++) {\n      element.appendChild(createElement(node.children[i], lifecycle, isSVG))\n    }\n\n    for (var name in attributes) {\n      Object(_updateAttribute__WEBPACK_IMPORTED_MODULE_0__[\"updateAttribute\"])(element, name, attributes[name], null, isSVG)\n    }\n  }\n\n  return element\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/createElement.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/eventListener.js":
/*!****************************************************!*\
  !*** ./node_modules/ultradom/src/eventListener.js ***!
  \****************************************************/
/*! exports provided: eventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventListener\", function() { return eventListener; });\nfunction eventListener(event) {\n  return event.currentTarget.events[event.type](event)\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/eventListener.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/getKey.js":
/*!*********************************************!*\
  !*** ./node_modules/ultradom/src/getKey.js ***!
  \*********************************************/
/*! exports provided: getKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getKey\", function() { return getKey; });\nfunction getKey(node) {\n  return node ? node.key : null\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/getKey.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/h.js":
/*!****************************************!*\
  !*** ./node_modules/ultradom/src/h.js ***!
  \****************************************/
/*! exports provided: h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return h; });\nfunction h(name, attributes) {\n  var rest = []\n  var children = []\n  var length = arguments.length\n\n  while (length-- > 2) rest.push(arguments[length])\n\n  while (rest.length) {\n    var node = rest.pop()\n    if (node && node.pop) {\n      for (length = node.length; length--; ) {\n        rest.push(node[length])\n      }\n    } else if (node != null && node !== true && node !== false) {\n      children.push(node)\n    }\n  }\n\n  return {\n    name: name,\n    attributes: attributes || {},\n    children: children,\n    key: attributes && attributes.key\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/h.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/ultradom/src/index.js ***!
  \********************************************/
/*! exports provided: h, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _h__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./h */ \"./node_modules/ultradom/src/h.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return _h__WEBPACK_IMPORTED_MODULE_0__[\"h\"]; });\n\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./node_modules/ultradom/src/render.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _render__WEBPACK_IMPORTED_MODULE_1__[\"render\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/index.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/patch.js":
/*!********************************************!*\
  !*** ./node_modules/ultradom/src/patch.js ***!
  \********************************************/
/*! exports provided: patch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"patch\", function() { return patch; });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./node_modules/ultradom/src/createElement.js\");\n/* harmony import */ var _updateElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateElement */ \"./node_modules/ultradom/src/updateElement.js\");\n/* harmony import */ var _removeElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeElement */ \"./node_modules/ultradom/src/removeElement.js\");\n/* harmony import */ var _getKey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getKey */ \"./node_modules/ultradom/src/getKey.js\");\n\n\n\n\n\nfunction patch(parent, element, oldNode, node, lifecycle, isSVG) {\n  if (node === oldNode) {\n  } else if (oldNode == null || oldNode.name !== node.name) {\n    var newElement = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(node, lifecycle, isSVG)\n\n    parent.insertBefore(newElement, element)\n    if (oldNode != null) {\n      Object(_removeElement__WEBPACK_IMPORTED_MODULE_2__[\"removeElement\"])(parent, element, oldNode)\n    }\n\n    element = newElement\n  } else if (oldNode.name == null) {\n    element.nodeValue = node\n  } else {\n    Object(_updateElement__WEBPACK_IMPORTED_MODULE_1__[\"updateElement\"])(\n      element,\n      oldNode.attributes,\n      node.attributes,\n      lifecycle,\n      (isSVG = isSVG || node.name === \"svg\")\n    )\n\n    var oldKeyed = {}\n    var newKeyed = {}\n    var oldElements = []\n    var oldChildren = oldNode.children\n    var children = node.children\n\n    for (var i = 0; i < oldChildren.length; i++) {\n      oldElements[i] = element.childNodes[i]\n\n      var oldKey = Object(_getKey__WEBPACK_IMPORTED_MODULE_3__[\"getKey\"])(oldChildren[i])\n      if (oldKey != null) {\n        oldKeyed[oldKey] = [oldElements[i], oldChildren[i]]\n      }\n    }\n\n    var i = 0\n    var k = 0\n\n    while (k < children.length) {\n      var oldKey = Object(_getKey__WEBPACK_IMPORTED_MODULE_3__[\"getKey\"])(oldChildren[i])\n      var newKey = Object(_getKey__WEBPACK_IMPORTED_MODULE_3__[\"getKey\"])(children[k])\n\n      if (newKeyed[oldKey]) {\n        i++\n        continue\n      }\n\n      if (newKey != null && newKey === Object(_getKey__WEBPACK_IMPORTED_MODULE_3__[\"getKey\"])(oldChildren[i + 1])) {\n        if (oldKey == null) {\n          Object(_removeElement__WEBPACK_IMPORTED_MODULE_2__[\"removeElement\"])(element, oldElements[i], oldChildren[i])\n        }\n        i++\n        continue\n      }\n\n      if (newKey == null || oldNode.recycled) {\n        if (oldKey == null) {\n          patch(\n            element,\n            oldElements[i],\n            oldChildren[i],\n            children[k],\n            lifecycle,\n            isSVG\n          )\n          k++\n        }\n        i++\n      } else {\n        var keyedNode = oldKeyed[newKey] || []\n\n        if (oldKey === newKey) {\n          patch(\n            element,\n            keyedNode[0],\n            keyedNode[1],\n            children[k],\n            lifecycle,\n            isSVG\n          )\n          i++\n        } else if (keyedNode[0]) {\n          patch(\n            element,\n            element.insertBefore(keyedNode[0], oldElements[i]),\n            keyedNode[1],\n            children[k],\n            lifecycle,\n            isSVG\n          )\n        } else {\n          patch(element, oldElements[i], null, children[k], lifecycle, isSVG)\n        }\n\n        newKeyed[newKey] = children[k]\n        k++\n      }\n    }\n\n    while (i < oldChildren.length) {\n      if (Object(_getKey__WEBPACK_IMPORTED_MODULE_3__[\"getKey\"])(oldChildren[i]) == null) {\n        Object(_removeElement__WEBPACK_IMPORTED_MODULE_2__[\"removeElement\"])(element, oldElements[i], oldChildren[i])\n      }\n      i++\n    }\n\n    for (var i in oldKeyed) {\n      if (!newKeyed[i]) {\n        Object(_removeElement__WEBPACK_IMPORTED_MODULE_2__[\"removeElement\"])(element, oldKeyed[i][0], oldKeyed[i][1])\n      }\n    }\n  }\n  return element\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/patch.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/removeChildren.js":
/*!*****************************************************!*\
  !*** ./node_modules/ultradom/src/removeChildren.js ***!
  \*****************************************************/
/*! exports provided: removeChildren */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeChildren\", function() { return removeChildren; });\nfunction removeChildren(element, node) {\n  var attributes = node.attributes\n  if (attributes) {\n    for (var i = 0; i < node.children.length; i++) {\n      removeChildren(element.childNodes[i], node.children[i])\n    }\n\n    if (attributes.ondestroy) {\n      attributes.ondestroy(element)\n    }\n  }\n  return element\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/removeChildren.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/removeElement.js":
/*!****************************************************!*\
  !*** ./node_modules/ultradom/src/removeElement.js ***!
  \****************************************************/
/*! exports provided: removeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeElement\", function() { return removeElement; });\n/* harmony import */ var _removeChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeChildren */ \"./node_modules/ultradom/src/removeChildren.js\");\n\n\nfunction removeElement(parent, element, node) {\n  function done() {\n    parent.removeChild(Object(_removeChildren__WEBPACK_IMPORTED_MODULE_0__[\"removeChildren\"])(element, node))\n  }\n\n  var cb = node.attributes && node.attributes.onremove\n  if (cb) {\n    cb(element, done)\n  } else {\n    done()\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/removeElement.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/render.js":
/*!*********************************************!*\
  !*** ./node_modules/ultradom/src/render.js ***!
  \*********************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patch */ \"./node_modules/ultradom/src/patch.js\");\n\n\nfunction render(node, container) {\n  var lifecycle = []\n  var element = container.children[0]\n\n  Object(_patch__WEBPACK_IMPORTED_MODULE_0__[\"patch\"])(\n    container,\n    element,\n    element && element.node,\n    node,\n    lifecycle\n  ).node = node\n\n  while (lifecycle.length) lifecycle.pop()()\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/render.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/updateAttribute.js":
/*!******************************************************!*\
  !*** ./node_modules/ultradom/src/updateAttribute.js ***!
  \******************************************************/
/*! exports provided: updateAttribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateAttribute\", function() { return updateAttribute; });\n/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone */ \"./node_modules/ultradom/src/clone.js\");\n/* harmony import */ var _eventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListener */ \"./node_modules/ultradom/src/eventListener.js\");\n\n\n\nfunction updateAttribute(element, name, value, oldValue, isSVG) {\n  if (name === \"key\") {\n  } else if (name === \"style\") {\n    for (var i in Object(_clone__WEBPACK_IMPORTED_MODULE_0__[\"clone\"])(oldValue, value)) {\n      var style = value == null || value[i] == null ? \"\" : value[i]\n      if (i[0] === \"-\") {\n        element[name].setProperty(i, style)\n      } else {\n        element[name][i] = style\n      }\n    }\n  } else {\n    if (name[0] === \"o\" && name[1] === \"n\") {\n      if (!element.events) {\n        element.events = {}\n      }\n      element.events[(name = name.slice(2))] = value\n\n      if (value) {\n        if (!oldValue) {\n          element.addEventListener(name, _eventListener__WEBPACK_IMPORTED_MODULE_1__[\"eventListener\"])\n        }\n      } else {\n        element.removeEventListener(name, _eventListener__WEBPACK_IMPORTED_MODULE_1__[\"eventListener\"])\n      }\n    } else if (name in element && name !== \"list\" && !isSVG) {\n      element[name] = value == null ? \"\" : value\n    } else if (value != null && value !== false) {\n      element.setAttribute(name, value)\n    }\n\n    if (value == null || value === false) {\n      element.removeAttribute(name)\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/updateAttribute.js?");

/***/ }),

/***/ "./node_modules/ultradom/src/updateElement.js":
/*!****************************************************!*\
  !*** ./node_modules/ultradom/src/updateElement.js ***!
  \****************************************************/
/*! exports provided: updateElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateElement\", function() { return updateElement; });\n/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clone */ \"./node_modules/ultradom/src/clone.js\");\n/* harmony import */ var _updateAttribute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateAttribute */ \"./node_modules/ultradom/src/updateAttribute.js\");\n\n\n\nfunction updateElement(\n  element,\n  oldAttributes,\n  attributes,\n  lifecycle,\n  isSVG\n) {\n  for (var name in Object(_clone__WEBPACK_IMPORTED_MODULE_0__[\"clone\"])(oldAttributes, attributes)) {\n    if (\n      attributes[name] !==\n      (name === \"value\" || name === \"checked\"\n        ? element[name]\n        : oldAttributes[name])\n    ) {\n      Object(_updateAttribute__WEBPACK_IMPORTED_MODULE_1__[\"updateAttribute\"])(\n        element,\n        name,\n        attributes[name],\n        oldAttributes[name],\n        isSVG\n      )\n    }\n  }\n\n  if (attributes.onupdate) {\n    lifecycle.push(function() {\n      attributes.onupdate(element, oldAttributes)\n    })\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/ultradom/src/updateElement.js?");

/***/ })

/******/ });