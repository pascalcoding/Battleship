/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
}

#player-board {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
}

#computer-board {
  display: flex;
  flex-direction: column;
}

#ship-selector {
  display: flex;
  flex-direction: column;
}

.gameboard-cell {
  border: 1px solid black;
  padding: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ship {
  border: 1px solid blue;
  background-color: rgba(0, 0, 255, 0.05);
}

.invisible {
  visibility: hidden;
}

.hit {
  border: 1px solid red;
  color: red;
}

.hit:after {
  content: '\\d7';
  font-size: 35px;
}

.miss {
  height: 10px;
  width: 10px;
  background-color: black;
  border-radius: 50%;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yCAAyC;EACzC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;AACpB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  gap: 20px;\n}\n\n#player-board {\n  display: flex;\n  flex-direction: column;\n}\n\n.row {\n  display: flex;\n}\n\n#computer-board {\n  display: flex;\n  flex-direction: column;\n}\n\n#ship-selector {\n  display: flex;\n  flex-direction: column;\n}\n\n.gameboard-cell {\n  border: 1px solid black;\n  padding: 10px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ship {\n  border: 1px solid blue;\n  background-color: rgba(0, 0, 255, 0.05);\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.hit {\n  border: 1px solid red;\n  color: red;\n}\n\n.hit:after {\n  content: '\\d7';\n  font-size: 35px;\n}\n\n.miss {\n  height: 10px;\n  width: 10px;\n  background-color: black;\n  border-radius: 50%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/computer.js":
/*!*************************!*\
  !*** ./src/computer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameLogic */ "./src/gameLogic.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");




const createShips = () => {
  const ships = [];
  for (let i = 2; i < 6; i++) {
    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(i));
  }
  ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(2));

  return ships;
};

const createComputerPlayer = () => {
  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const ships = createShips();
  const getBoard = () => board;

  const getRandomCoordinates = () => {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    return { x, y };
  };

  ships.forEach((ship) => {
    let { x, y } = getRandomCoordinates();
    while (!_gameLogic__WEBPACK_IMPORTED_MODULE_0__["default"].isLegalShipPlacement(x, y, ship, board)) {
      ({ x, y } = getRandomCoordinates());
    }
    board.placeShip(ship, x, y);
  });

  const takeTurn = (enemyBoard) => {
    let legalMoveFound = false;
    while (!legalMoveFound) {
      const { x, y } = getRandomCoordinates();
      const cell = enemyBoard.getBoard()[x][y];
      if (cell !== 'H' && cell !== 'M') {
        legalMoveFound = true;
        enemyBoard.receiveAttack(x, y);
      }
    }
  };

  return {
    getBoard,
    takeTurn,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createComputerPlayer);


/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const domManipulation = (() => {
  const drawPlayerBoard = (board) => {
    const playerBoard = document.getElementById('player-board');
    const boardArr = board.getBoard();
    for (let i = 0; i < 10; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.classList.add('gameboard-cell');
        cell.dataset.row = i;
        cell.dataset.col = j;
        row.appendChild(cell);
      }
      playerBoard.appendChild(row);
    }
  };

  const drawComputerBoard = (board) => {
    const computerBoard = document.getElementById('computer-board');
    const boardArr = board.getBoard();
    for (let i = 0; i < 10; i++) {
      const row = document.createElement('div');
      row.classList.add('row');
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.classList.add('gameboard-cell');
        cell.dataset.row = i;
        cell.dataset.col = j;
        if (boardArr[i][j] == 'H' || boardArr[i][j] == 'M') {
          cell.textContent = boardArr[i][j];
        }
        row.appendChild(cell);
      }
      computerBoard.appendChild(row);
    }
  };

  const updateCell = (board, x, y, computer) => {
    const boardArr = board.getBoard();
    let cells;
    if (computer) {
      cells = Array.from(
        document.querySelectorAll('#computer-board > * > .gameboard-cell')
      );
    } else {
      cells = Array.from(
        document.querySelectorAll('#player-board > * > .gameboard-cell')
      );
    }
    cells.forEach((cell) => {
      if (
        parseInt(cell.dataset.row) === x &&
        parseInt(cell.dataset.col) === y
      ) {
        if (boardArr[x][y] === 'M') {
          const missElement = document.createElement('div');
          missElement.classList.add('miss');
          cell.appendChild(missElement);
        } else if (boardArr[x][y] === 'S') {
          cell.classList.add('ship');
        } else if (boardArr[x][y] === 'H') {
          cell.classList.add('hit');
        }
      }
    });
  };

  const drawShipSelector = (player) => {
    const shipSelector = document.getElementById('ship-selector');

    const shipCoordInput = document.createElement('input');
    shipCoordInput.setAttribute('id', 'ship-coord-input');
    shipCoordInput.type = 'text';
    shipCoordInput.placeholder = 'Input coordinate (e.g. A10)';

    const shipTypeSelect = document.createElement('select');
    shipTypeSelect.setAttribute('id', 'ship-type-select');
    player.getShips().forEach((ship) => {
      const opt = document.createElement('option');
      opt.value = ship.getName();
      opt.textContent = ship.getName();
      shipTypeSelect.appendChild(opt);
    });

    const horizontalRadioContainer = document.createElement('div');
    const horizontalRadio = document.createElement('input');
    horizontalRadio.type = 'radio';
    horizontalRadio.name = 'direction';
    horizontalRadio.value = 'horizontal';
    const horizontalLabel = document.createElement('label');
    horizontalLabel.textContent = 'Horizontal';
    horizontalRadioContainer.appendChild(horizontalRadio);
    horizontalRadioContainer.appendChild(horizontalLabel);

    const verticalRadioContainer = document.createElement('div');
    const verticalRadio = document.createElement('input');
    verticalRadio.type = 'radio';
    verticalRadio.name = 'direction';
    verticalRadio.value = 'vertical';
    const verticalLabel = document.createElement('label');
    verticalLabel.textContent = 'Vertical';
    verticalRadioContainer.appendChild(verticalRadio);
    verticalRadioContainer.appendChild(verticalLabel);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submit-ship-button');
    submitButton.textContent = 'Place Ship!';

    shipSelector.appendChild(shipCoordInput);
    shipSelector.appendChild(shipTypeSelect);
    shipSelector.appendChild(horizontalRadioContainer);
    shipSelector.appendChild(verticalRadioContainer);
    shipSelector.appendChild(submitButton);
  };

  const drawAttackCoordinateSelector = () => {
    const attackSelector = document.getElementById('attack-coord-selector');

    const attackInput = document.createElement('input');
    attackInput.setAttribute('id', 'attack-input');
    attackInput.type = 'text';
    attackInput.placeholder = 'Enter attack coordinate (e.g. A10)';

    const submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submit-attack-button');
    submitButton.textContent = 'Attack a square!';

    attackSelector.appendChild(attackInput);
    attackSelector.appendChild(submitButton);
  };

  return {
    drawPlayerBoard,
    drawComputerBoard,
    drawShipSelector,
    drawAttackCoordinateSelector,
    updateCell,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domManipulation);


/***/ }),

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _computer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./computer */ "./src/computer.js");
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");




const gameLogic = (() => {
  let player;
  let computer;
  let currentPlayer;
  let countPlaced = 0;

  const convertCharToNum = (char) => {
    return char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
  };

  const isLegalShipPlacement = (x, y, ship, board) => {
    const boardArr = board.getBoard();

    if (!(x <= 9 && x >= 0)) {
      return false;
    }
    if (!(y <= 9 && y >= 0)) {
      return false;
    }

    if (ship.getDirection() === 'x') {
      //Check own squares
      if (x + ship.getLength() > 9) {
        return false;
      }
      const startPos = x >= 1 ? x - 1 : x;
      const endPos =
        x + ship.getLength() <= 8
          ? x + ship.getLength() + 1
          : x + ship.getLength();
      //Check own row
      for (let i = startPos; i < endPos; i++) {
        if (boardArr[i][y] != 'E') {
          return false;
        }
      }
      //Check row above
      if (y > 0) {
        for (let i = startPos; i < endPos; i++) {
          if (boardArr[i][y - 1] != 'E') {
            return false;
          }
        }
      }
      //Check row below
      if (y < 9) {
        for (let i = startPos; i < endPos; i++) {
          if (boardArr[i][y + 1] != 'E') {
            return false;
          }
        }
      }
    } else {
      if (y + ship.getLength() > 9) {
        return false;
      }
      const startPos = y >= 1 ? y - 1 : y;
      const endPos =
        y + ship.getLength() <= 8
          ? y + ship.getLength() + 1
          : y + ship.getLength();
      for (let i = startPos; i < endPos; i++) {
        if (boardArr[x][i] != 'E') {
          return false;
        }
      }
      if (x > 0) {
        for (let i = startPos; i < endPos; i++) {
          if (boardArr[x - 1][i] != 'E') {
            return false;
          }
        }
      }

      if (x < 9) {
        for (let i = startPos; i < endPos; i++) {
          if (boardArr[x + 1][i] != 'E') {
            return false;
          }
        }
      }
    }
    return true;
  };
  const isLegalAttack = (x, y, board) => {
    if (!(x <= 9 && x >= 0)) {
      return false;
    }
    if (!(y <= 9 && y >= 0)) {
      return false;
    }

    const cell = board.getBoard()[x][y];

    if (cell === 'M' || cell === 'H') {
      return false;
    }

    return true;
  };

  const addEventListeners = () => {
    const shipInput = document.getElementById('ship-coord-input');
    const verticalRadio = document.querySelector(
      'input[type="radio"][name="direction"][value="vertical"]'
    );
    const attackInput = document.getElementById('attack-input');
    const submitShipButton = document.getElementById('submit-ship-button');
    const submitAttackButton = document.getElementById('submit-attack-button');

    submitShipButton.addEventListener('click', () => {
      const shipName = document.getElementById('ship-type-select').value;
      let currentShip;
      player.getShips().forEach((ship) => {
        if (ship.getName() === shipName) {
          currentShip = ship;
        }
      });
      const vertical = verticalRadio.checked;
      if (vertical) {
        currentShip.changeDirection();
      }
      const coord = shipInput.value;
      const y = convertCharToNum(coord.slice(0, 1));
      const x = Number(coord.slice(1, coord.length));
      if (
        gameLogic.isLegalShipPlacement(x, y, currentShip, player.getBoard())
      ) {
        countPlaced++;
        player.getBoard().placeShip(currentShip, x, y);
        const options = Array.from(
          document.querySelectorAll('#ship-type-select > option')
        );
        options.every((opt) => {
          if (opt.value === currentShip.getName()) {
            opt.remove();
            return false;
          }
        });
        if (currentShip.getDirection() === 'x') {
          for (let i = y; i < y + currentShip.getLength(); i++) {
            _domManipulation__WEBPACK_IMPORTED_MODULE_2__["default"].updateCell(player.getBoard(), x, i);
          }
        } else {
          for (let i = x; i < x + currentShip.getLength(); i++) {
            _domManipulation__WEBPACK_IMPORTED_MODULE_2__["default"].updateCell(player.getBoard(), i, y);
          }
        }
      }
      if (countPlaced >= 5) {
        document.getElementById('ship-selector').classList.add('invisible');
        document
          .getElementById('attack-coord-selector')
          .classList.remove('invisible');
      }
    });

    submitAttackButton.addEventListener('click', () => {
      const coord = attackInput.value;
      const y = convertCharToNum(coord.slice(0, 1));
      const x = Number(coord.slice(1, coord.length));

      if (isLegalAttack(x, y, computer.getBoard())) {
        player.takeTurn(computer.getBoard(), x, y);
        _domManipulation__WEBPACK_IMPORTED_MODULE_2__["default"].updateCell(computer.getBoard(), x, y, true);
      }
    });
  };

  const initGame = () => {
    player = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])();
    computer = (0,_computer__WEBPACK_IMPORTED_MODULE_1__["default"])();

    _domManipulation__WEBPACK_IMPORTED_MODULE_2__["default"].drawPlayerBoard(player.getBoard());
    _domManipulation__WEBPACK_IMPORTED_MODULE_2__["default"].drawComputerBoard(computer.getBoard());

    _domManipulation__WEBPACK_IMPORTED_MODULE_2__["default"].drawShipSelector(player);
    _domManipulation__WEBPACK_IMPORTED_MODULE_2__["default"].drawAttackCoordinateSelector();

    addEventListeners();
  };

  const getWinner = () => {
    const playerBoardArr = player.getBoard().getBoard();
    const computerBoardArr = computer.getBoard().getBoard();
    let playerWon = true;
    let computerWon = true;
    player: for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (playerBoardArr[i][j] === 'S') {
          playerWon = false;
          break player;
        }
      }
    }
    computer: for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (computerBoardArr[i][j] === 'S') {
          computerWon = false;
          break computer;
        }
      }
    }
    if (computerWon) {
      return 'computer';
    } else if (playerWon) {
      return 'player';
    } else {
      return '';
    }
  };

  return {
    initGame,
    isLegalAttack,
    isLegalShipPlacement,
    getWinner,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLogic);


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createTwoDimensionalArray = (rows, colls, fillValue) => {
  const arr = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < colls; j++) {
      row.push(fillValue);
    }
    arr.push(row);
  }
  return arr;
};

const createGameboard = () => {
  const board = createTwoDimensionalArray(10, 10, 'E'); // E -> Empty; S -> Ship; M -> Missed; H -> Hit;
  const ships = [];

  const getBoard = () => board;
  const placeShip = (ship, x, y) => {
    if (ship.getDirection() === 'x') {
      for (let i = 0; i < ship.getLength(); i++) {
        board[x][y + i] = 'S';
      }
    } else {
      for (let i = 0; i < ship.getLength(); i++) {
        board[x + i][y] = 'S';
      }
    }

    ships.push({ ship, x, y });
  };

  const receiveAttack = (x, y) => {
    if (board[x][y] === 'E') {
      board[x][y] = 'M';
    } else {
      board[x][y] = 'H';

      const shipInfo = ships.find((shipInfo) => {
        const { ship, x: shipX, y: shipY } = shipInfo;
        if (ship.getDirection() === 'x') {
          return x === shipX && y >= shipY && y < shipY + ship.getLength();
        } else {
          return y === shipY && x >= shipX && x < shipX + ship.getLength();
        }
      });

      if (shipInfo) {
        shipInfo.ship.hit();
      }
    }
  };

  return {
    getBoard,
    placeShip,
    receiveAttack,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameboard);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



const createShips = () => {
  const ships = [];
  for (let i = 2; i < 6; i++) {
    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(i));
  }
  ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(2));

  return ships;
};

const createPlayer = () => {
  const board = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const ships = createShips();

  const getShips = () => ships;

  const getBoard = () => board;

  const takeTurn = (enemyBoard, x, y) => {
    enemyBoard.receiveAttack(x, y);
  };

  return {
    getShips,
    getBoard,
    takeTurn,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const names = new Array(6).fill('');
names[2] = 'Patrol Boat';
names[3] = 'Submarine';
names[4] = 'Battleship';
names[5] = 'Carrier';

const createShip = (length) => {
  const name = names[length];
  let sunk = false;
  let hits = 0;
  let direction = 'x'; // x -> horizontal; y -> vertical;

  const hit = () => {
    hits += 1;
    sunk = hits === length;
  };

  const getLength = () => length;

  const getDirection = () => direction;

  const changeDirection = () => {
    direction = direction === 'x' ? 'y' : 'x';
  };

  const isSunk = () => sunk;

  const getHits = () => hits;

  const getName = () => name;

  return {
    isSunk,
    getHits,
    hit,
    getLength,
    changeDirection,
    getDirection,
    getName,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLogic */ "./src/gameLogic.js");



_gameLogic__WEBPACK_IMPORTED_MODULE_1__["default"].initGame();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRFc7QUFDVjs7QUFFaEM7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCLGVBQWUsaURBQVU7QUFDekI7QUFDQSxhQUFhLGlEQUFVOztBQUV2QjtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHNEQUFlO0FBQy9COztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9COztBQUUzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDMUMxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNlOztBQUVwQyxrREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVMb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4jcGxheWVyLWJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNjb21wdXRlci1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNzaGlwLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmdhbWVib2FyZC1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2hpcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjA1KTtcbn1cblxuLmludmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmhpdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmhpdDphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXFxcZDcnO1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5taXNzIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2NvbXB1dGVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc2hpcC1zZWxlY3RvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmdhbWVib2FyZC1jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjA1KTtcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5oaXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmhpdDphZnRlciB7XFxuICBjb250ZW50OiAnXFxcXGQ3JztcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG59XFxuXFxuLm1pc3Mge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgd2lkdGg6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBnYW1lTG9naWMgZnJvbSAnLi9nYW1lTG9naWMnO1xuaW1wb3J0IGNyZWF0ZUdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgY3JlYXRlU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBjcmVhdGVTaGlwcyA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDI7IGkgPCA2OyBpKyspIHtcbiAgICBzaGlwcy5wdXNoKGNyZWF0ZVNoaXAoaSkpO1xuICB9XG4gIHNoaXBzLnB1c2goY3JlYXRlU2hpcCgyKSk7XG5cbiAgcmV0dXJuIHNoaXBzO1xufTtcblxuY29uc3QgY3JlYXRlQ29tcHV0ZXJQbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHNoaXBzID0gY3JlYXRlU2hpcHMoKTtcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcblxuICBjb25zdCBnZXRSYW5kb21Db29yZGluYXRlcyA9ICgpID0+IHtcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICByZXR1cm4geyB4LCB5IH07XG4gIH07XG5cbiAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGxldCB7IHgsIHkgfSA9IGdldFJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgd2hpbGUgKCFnYW1lTG9naWMuaXNMZWdhbFNoaXBQbGFjZW1lbnQoeCwgeSwgc2hpcCwgYm9hcmQpKSB7XG4gICAgICAoeyB4LCB5IH0gPSBnZXRSYW5kb21Db29yZGluYXRlcygpKTtcbiAgICB9XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXAsIHgsIHkpO1xuICB9KTtcblxuICBjb25zdCB0YWtlVHVybiA9IChlbmVteUJvYXJkKSA9PiB7XG4gICAgbGV0IGxlZ2FsTW92ZUZvdW5kID0gZmFsc2U7XG4gICAgd2hpbGUgKCFsZWdhbE1vdmVGb3VuZCkge1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSBnZXRSYW5kb21Db29yZGluYXRlcygpO1xuICAgICAgY29uc3QgY2VsbCA9IGVuZW15Qm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XTtcbiAgICAgIGlmIChjZWxsICE9PSAnSCcgJiYgY2VsbCAhPT0gJ00nKSB7XG4gICAgICAgIGxlZ2FsTW92ZUZvdW5kID0gdHJ1ZTtcbiAgICAgICAgZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldEJvYXJkLFxuICAgIHRha2VUdXJuLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29tcHV0ZXJQbGF5ZXI7XG4iLCJjb25zdCBkb21NYW5pcHVsYXRpb24gPSAoKCkgPT4ge1xuICBjb25zdCBkcmF3UGxheWVyQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItYm9hcmQnKTtcbiAgICBjb25zdCBib2FyZEFyciA9IGJvYXJkLmdldEJvYXJkKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLWNlbGwnKTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IGk7XG4gICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBqO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgICBwbGF5ZXJCb2FyZC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkcmF3Q29tcHV0ZXJCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItYm9hcmQnKTtcbiAgICBjb25zdCBib2FyZEFyciA9IGJvYXJkLmdldEJvYXJkKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKCdyb3cnKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnZ2FtZWJvYXJkLWNlbGwnKTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LnJvdyA9IGk7XG4gICAgICAgIGNlbGwuZGF0YXNldC5jb2wgPSBqO1xuICAgICAgICBpZiAoYm9hcmRBcnJbaV1bal0gPT0gJ0gnIHx8IGJvYXJkQXJyW2ldW2pdID09ICdNJykge1xuICAgICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSBib2FyZEFycltpXVtqXTtcbiAgICAgICAgfVxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICB9XG4gICAgICBjb21wdXRlckJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUNlbGwgPSAoYm9hcmQsIHgsIHksIGNvbXB1dGVyKSA9PiB7XG4gICAgY29uc3QgYm9hcmRBcnIgPSBib2FyZC5nZXRCb2FyZCgpO1xuICAgIGxldCBjZWxscztcbiAgICBpZiAoY29tcHV0ZXIpIHtcbiAgICAgIGNlbGxzID0gQXJyYXkuZnJvbShcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2NvbXB1dGVyLWJvYXJkID4gKiA+IC5nYW1lYm9hcmQtY2VsbCcpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjZWxscyA9IEFycmF5LmZyb20oXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNwbGF5ZXItYm9hcmQgPiAqID4gLmdhbWVib2FyZC1jZWxsJylcbiAgICAgICk7XG4gICAgfVxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnJvdykgPT09IHggJiZcbiAgICAgICAgcGFyc2VJbnQoY2VsbC5kYXRhc2V0LmNvbCkgPT09IHlcbiAgICAgICkge1xuICAgICAgICBpZiAoYm9hcmRBcnJbeF1beV0gPT09ICdNJykge1xuICAgICAgICAgIGNvbnN0IG1pc3NFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgbWlzc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICAgIGNlbGwuYXBwZW5kQ2hpbGQobWlzc0VsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkQXJyW3hdW3ldID09PSAnUycpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZEFyclt4XVt5XSA9PT0gJ0gnKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRyYXdTaGlwU2VsZWN0b3IgPSAocGxheWVyKSA9PiB7XG4gICAgY29uc3Qgc2hpcFNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtc2VsZWN0b3InKTtcblxuICAgIGNvbnN0IHNoaXBDb29yZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzaGlwQ29vcmRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NoaXAtY29vcmQtaW5wdXQnKTtcbiAgICBzaGlwQ29vcmRJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIHNoaXBDb29yZElucHV0LnBsYWNlaG9sZGVyID0gJ0lucHV0IGNvb3JkaW5hdGUgKGUuZy4gQTEwKSc7XG5cbiAgICBjb25zdCBzaGlwVHlwZVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIHNoaXBUeXBlU2VsZWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcC10eXBlLXNlbGVjdCcpO1xuICAgIHBsYXllci5nZXRTaGlwcygpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0LnZhbHVlID0gc2hpcC5nZXROYW1lKCk7XG4gICAgICBvcHQudGV4dENvbnRlbnQgPSBzaGlwLmdldE5hbWUoKTtcbiAgICAgIHNoaXBUeXBlU2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBob3Jpem9udGFsUmFkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBob3Jpem9udGFsUmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGhvcml6b250YWxSYWRpby50eXBlID0gJ3JhZGlvJztcbiAgICBob3Jpem9udGFsUmFkaW8ubmFtZSA9ICdkaXJlY3Rpb24nO1xuICAgIGhvcml6b250YWxSYWRpby52YWx1ZSA9ICdob3Jpem9udGFsJztcbiAgICBjb25zdCBob3Jpem9udGFsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGhvcml6b250YWxMYWJlbC50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgICBob3Jpem9udGFsUmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbFJhZGlvKTtcbiAgICBob3Jpem9udGFsUmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbExhYmVsKTtcblxuICAgIGNvbnN0IHZlcnRpY2FsUmFkaW9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB2ZXJ0aWNhbFJhZGlvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB2ZXJ0aWNhbFJhZGlvLnR5cGUgPSAncmFkaW8nO1xuICAgIHZlcnRpY2FsUmFkaW8ubmFtZSA9ICdkaXJlY3Rpb24nO1xuICAgIHZlcnRpY2FsUmFkaW8udmFsdWUgPSAndmVydGljYWwnO1xuICAgIGNvbnN0IHZlcnRpY2FsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHZlcnRpY2FsTGFiZWwudGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xuICAgIHZlcnRpY2FsUmFkaW9Db250YWluZXIuYXBwZW5kQ2hpbGQodmVydGljYWxSYWRpbyk7XG4gICAgdmVydGljYWxSYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh2ZXJ0aWNhbExhYmVsKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdC1zaGlwLWJ1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdQbGFjZSBTaGlwISc7XG5cbiAgICBzaGlwU2VsZWN0b3IuYXBwZW5kQ2hpbGQoc2hpcENvb3JkSW5wdXQpO1xuICAgIHNoaXBTZWxlY3Rvci5hcHBlbmRDaGlsZChzaGlwVHlwZVNlbGVjdCk7XG4gICAgc2hpcFNlbGVjdG9yLmFwcGVuZENoaWxkKGhvcml6b250YWxSYWRpb0NvbnRhaW5lcik7XG4gICAgc2hpcFNlbGVjdG9yLmFwcGVuZENoaWxkKHZlcnRpY2FsUmFkaW9Db250YWluZXIpO1xuICAgIHNoaXBTZWxlY3Rvci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICB9O1xuXG4gIGNvbnN0IGRyYXdBdHRhY2tDb29yZGluYXRlU2VsZWN0b3IgPSAoKSA9PiB7XG4gICAgY29uc3QgYXR0YWNrU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrLWNvb3JkLXNlbGVjdG9yJyk7XG5cbiAgICBjb25zdCBhdHRhY2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgYXR0YWNrSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdhdHRhY2staW5wdXQnKTtcbiAgICBhdHRhY2tJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGF0dGFja0lucHV0LnBsYWNlaG9sZGVyID0gJ0VudGVyIGF0dGFjayBjb29yZGluYXRlIChlLmcuIEExMCknO1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LWF0dGFjay1idXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnQXR0YWNrIGEgc3F1YXJlISc7XG5cbiAgICBhdHRhY2tTZWxlY3Rvci5hcHBlbmRDaGlsZChhdHRhY2tJbnB1dCk7XG4gICAgYXR0YWNrU2VsZWN0b3IuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGRyYXdQbGF5ZXJCb2FyZCxcbiAgICBkcmF3Q29tcHV0ZXJCb2FyZCxcbiAgICBkcmF3U2hpcFNlbGVjdG9yLFxuICAgIGRyYXdBdHRhY2tDb29yZGluYXRlU2VsZWN0b3IsXG4gICAgdXBkYXRlQ2VsbCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbU1hbmlwdWxhdGlvbjtcbiIsImltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IGNyZWF0ZUNvbXB1dGVyUGxheWVyIGZyb20gJy4vY29tcHV0ZXInO1xuaW1wb3J0IGRvbU1hbmlwdWxhdGlvbiBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbic7XG5cbmNvbnN0IGdhbWVMb2dpYyA9ICgoKSA9PiB7XG4gIGxldCBwbGF5ZXI7XG4gIGxldCBjb21wdXRlcjtcbiAgbGV0IGN1cnJlbnRQbGF5ZXI7XG4gIGxldCBjb3VudFBsYWNlZCA9IDA7XG5cbiAgY29uc3QgY29udmVydENoYXJUb051bSA9IChjaGFyKSA9PiB7XG4gICAgcmV0dXJuIGNoYXIudG9VcHBlckNhc2UoKS5jaGFyQ29kZUF0KDApIC0gJ0EnLmNoYXJDb2RlQXQoMCk7XG4gIH07XG5cbiAgY29uc3QgaXNMZWdhbFNoaXBQbGFjZW1lbnQgPSAoeCwgeSwgc2hpcCwgYm9hcmQpID0+IHtcbiAgICBjb25zdCBib2FyZEFyciA9IGJvYXJkLmdldEJvYXJkKCk7XG5cbiAgICBpZiAoISh4IDw9IDkgJiYgeCA+PSAwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoISh5IDw9IDkgJiYgeSA+PSAwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChzaGlwLmdldERpcmVjdGlvbigpID09PSAneCcpIHtcbiAgICAgIC8vQ2hlY2sgb3duIHNxdWFyZXNcbiAgICAgIGlmICh4ICsgc2hpcC5nZXRMZW5ndGgoKSA+IDkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhcnRQb3MgPSB4ID49IDEgPyB4IC0gMSA6IHg7XG4gICAgICBjb25zdCBlbmRQb3MgPVxuICAgICAgICB4ICsgc2hpcC5nZXRMZW5ndGgoKSA8PSA4XG4gICAgICAgICAgPyB4ICsgc2hpcC5nZXRMZW5ndGgoKSArIDFcbiAgICAgICAgICA6IHggKyBzaGlwLmdldExlbmd0aCgpO1xuICAgICAgLy9DaGVjayBvd24gcm93XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRQb3M7IGkgPCBlbmRQb3M7IGkrKykge1xuICAgICAgICBpZiAoYm9hcmRBcnJbaV1beV0gIT0gJ0UnKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvL0NoZWNrIHJvdyBhYm92ZVxuICAgICAgaWYgKHkgPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFBvczsgaSA8IGVuZFBvczsgaSsrKSB7XG4gICAgICAgICAgaWYgKGJvYXJkQXJyW2ldW3kgLSAxXSAhPSAnRScpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vQ2hlY2sgcm93IGJlbG93XG4gICAgICBpZiAoeSA8IDkpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0UG9zOyBpIDwgZW5kUG9zOyBpKyspIHtcbiAgICAgICAgICBpZiAoYm9hcmRBcnJbaV1beSArIDFdICE9ICdFJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoeSArIHNoaXAuZ2V0TGVuZ3RoKCkgPiA5KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0YXJ0UG9zID0geSA+PSAxID8geSAtIDEgOiB5O1xuICAgICAgY29uc3QgZW5kUG9zID1cbiAgICAgICAgeSArIHNoaXAuZ2V0TGVuZ3RoKCkgPD0gOFxuICAgICAgICAgID8geSArIHNoaXAuZ2V0TGVuZ3RoKCkgKyAxXG4gICAgICAgICAgOiB5ICsgc2hpcC5nZXRMZW5ndGgoKTtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFBvczsgaSA8IGVuZFBvczsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZEFyclt4XVtpXSAhPSAnRScpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh4ID4gMCkge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRQb3M7IGkgPCBlbmRQb3M7IGkrKykge1xuICAgICAgICAgIGlmIChib2FyZEFyclt4IC0gMV1baV0gIT0gJ0UnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh4IDwgOSkge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRQb3M7IGkgPCBlbmRQb3M7IGkrKykge1xuICAgICAgICAgIGlmIChib2FyZEFyclt4ICsgMV1baV0gIT0gJ0UnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICBjb25zdCBpc0xlZ2FsQXR0YWNrID0gKHgsIHksIGJvYXJkKSA9PiB7XG4gICAgaWYgKCEoeCA8PSA5ICYmIHggPj0gMCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCEoeSA8PSA5ICYmIHkgPj0gMCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBjZWxsID0gYm9hcmQuZ2V0Qm9hcmQoKVt4XVt5XTtcblxuICAgIGlmIChjZWxsID09PSAnTScgfHwgY2VsbCA9PT0gJ0gnKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgYWRkRXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtY29vcmQtaW5wdXQnKTtcbiAgICBjb25zdCB2ZXJ0aWNhbFJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICdpbnB1dFt0eXBlPVwicmFkaW9cIl1bbmFtZT1cImRpcmVjdGlvblwiXVt2YWx1ZT1cInZlcnRpY2FsXCJdJ1xuICAgICk7XG4gICAgY29uc3QgYXR0YWNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXR0YWNrLWlucHV0Jyk7XG4gICAgY29uc3Qgc3VibWl0U2hpcEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtc2hpcC1idXR0b24nKTtcbiAgICBjb25zdCBzdWJtaXRBdHRhY2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWF0dGFjay1idXR0b24nKTtcblxuICAgIHN1Ym1pdFNoaXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBzaGlwTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGlwLXR5cGUtc2VsZWN0JykudmFsdWU7XG4gICAgICBsZXQgY3VycmVudFNoaXA7XG4gICAgICBwbGF5ZXIuZ2V0U2hpcHMoKS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgIGlmIChzaGlwLmdldE5hbWUoKSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBjdXJyZW50U2hpcCA9IHNoaXA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3QgdmVydGljYWwgPSB2ZXJ0aWNhbFJhZGlvLmNoZWNrZWQ7XG4gICAgICBpZiAodmVydGljYWwpIHtcbiAgICAgICAgY3VycmVudFNoaXAuY2hhbmdlRGlyZWN0aW9uKCk7XG4gICAgICB9XG4gICAgICBjb25zdCBjb29yZCA9IHNoaXBJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IHkgPSBjb252ZXJ0Q2hhclRvTnVtKGNvb3JkLnNsaWNlKDAsIDEpKTtcbiAgICAgIGNvbnN0IHggPSBOdW1iZXIoY29vcmQuc2xpY2UoMSwgY29vcmQubGVuZ3RoKSk7XG4gICAgICBpZiAoXG4gICAgICAgIGdhbWVMb2dpYy5pc0xlZ2FsU2hpcFBsYWNlbWVudCh4LCB5LCBjdXJyZW50U2hpcCwgcGxheWVyLmdldEJvYXJkKCkpXG4gICAgICApIHtcbiAgICAgICAgY291bnRQbGFjZWQrKztcbiAgICAgICAgcGxheWVyLmdldEJvYXJkKCkucGxhY2VTaGlwKGN1cnJlbnRTaGlwLCB4LCB5KTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3NoaXAtdHlwZS1zZWxlY3QgPiBvcHRpb24nKVxuICAgICAgICApO1xuICAgICAgICBvcHRpb25zLmV2ZXJ5KChvcHQpID0+IHtcbiAgICAgICAgICBpZiAob3B0LnZhbHVlID09PSBjdXJyZW50U2hpcC5nZXROYW1lKCkpIHtcbiAgICAgICAgICAgIG9wdC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoY3VycmVudFNoaXAuZ2V0RGlyZWN0aW9uKCkgPT09ICd4Jykge1xuICAgICAgICAgIGZvciAobGV0IGkgPSB5OyBpIDwgeSArIGN1cnJlbnRTaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICAgIGRvbU1hbmlwdWxhdGlvbi51cGRhdGVDZWxsKHBsYXllci5nZXRCb2FyZCgpLCB4LCBpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IHg7IGkgPCB4ICsgY3VycmVudFNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgZG9tTWFuaXB1bGF0aW9uLnVwZGF0ZUNlbGwocGxheWVyLmdldEJvYXJkKCksIGksIHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvdW50UGxhY2VkID49IDUpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtc2VsZWN0b3InKS5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAuZ2V0RWxlbWVudEJ5SWQoJ2F0dGFjay1jb29yZC1zZWxlY3RvcicpXG4gICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3VibWl0QXR0YWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY29vcmQgPSBhdHRhY2tJbnB1dC52YWx1ZTtcbiAgICAgIGNvbnN0IHkgPSBjb252ZXJ0Q2hhclRvTnVtKGNvb3JkLnNsaWNlKDAsIDEpKTtcbiAgICAgIGNvbnN0IHggPSBOdW1iZXIoY29vcmQuc2xpY2UoMSwgY29vcmQubGVuZ3RoKSk7XG5cbiAgICAgIGlmIChpc0xlZ2FsQXR0YWNrKHgsIHksIGNvbXB1dGVyLmdldEJvYXJkKCkpKSB7XG4gICAgICAgIHBsYXllci50YWtlVHVybihjb21wdXRlci5nZXRCb2FyZCgpLCB4LCB5KTtcbiAgICAgICAgZG9tTWFuaXB1bGF0aW9uLnVwZGF0ZUNlbGwoY29tcHV0ZXIuZ2V0Qm9hcmQoKSwgeCwgeSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdEdhbWUgPSAoKSA9PiB7XG4gICAgcGxheWVyID0gY3JlYXRlUGxheWVyKCk7XG4gICAgY29tcHV0ZXIgPSBjcmVhdGVDb21wdXRlclBsYXllcigpO1xuXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRyYXdQbGF5ZXJCb2FyZChwbGF5ZXIuZ2V0Qm9hcmQoKSk7XG4gICAgZG9tTWFuaXB1bGF0aW9uLmRyYXdDb21wdXRlckJvYXJkKGNvbXB1dGVyLmdldEJvYXJkKCkpO1xuXG4gICAgZG9tTWFuaXB1bGF0aW9uLmRyYXdTaGlwU2VsZWN0b3IocGxheWVyKTtcbiAgICBkb21NYW5pcHVsYXRpb24uZHJhd0F0dGFja0Nvb3JkaW5hdGVTZWxlY3RvcigpO1xuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfTtcblxuICBjb25zdCBnZXRXaW5uZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxheWVyQm9hcmRBcnIgPSBwbGF5ZXIuZ2V0Qm9hcmQoKS5nZXRCb2FyZCgpO1xuICAgIGNvbnN0IGNvbXB1dGVyQm9hcmRBcnIgPSBjb21wdXRlci5nZXRCb2FyZCgpLmdldEJvYXJkKCk7XG4gICAgbGV0IHBsYXllcldvbiA9IHRydWU7XG4gICAgbGV0IGNvbXB1dGVyV29uID0gdHJ1ZTtcbiAgICBwbGF5ZXI6IGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGlmIChwbGF5ZXJCb2FyZEFycltpXVtqXSA9PT0gJ1MnKSB7XG4gICAgICAgICAgcGxheWVyV29uID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWsgcGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNvbXB1dGVyOiBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBpZiAoY29tcHV0ZXJCb2FyZEFycltpXVtqXSA9PT0gJ1MnKSB7XG4gICAgICAgICAgY29tcHV0ZXJXb24gPSBmYWxzZTtcbiAgICAgICAgICBicmVhayBjb21wdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29tcHV0ZXJXb24pIHtcbiAgICAgIHJldHVybiAnY29tcHV0ZXInO1xuICAgIH0gZWxzZSBpZiAocGxheWVyV29uKSB7XG4gICAgICByZXR1cm4gJ3BsYXllcic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpbml0R2FtZSxcbiAgICBpc0xlZ2FsQXR0YWNrLFxuICAgIGlzTGVnYWxTaGlwUGxhY2VtZW50LFxuICAgIGdldFdpbm5lcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVMb2dpYztcbiIsImNvbnN0IGNyZWF0ZVR3b0RpbWVuc2lvbmFsQXJyYXkgPSAocm93cywgY29sbHMsIGZpbGxWYWx1ZSkgPT4ge1xuICBjb25zdCBhcnIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICBjb25zdCByb3cgPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbGxzOyBqKyspIHtcbiAgICAgIHJvdy5wdXNoKGZpbGxWYWx1ZSk7XG4gICAgfVxuICAgIGFyci5wdXNoKHJvdyk7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG5cbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGVUd29EaW1lbnNpb25hbEFycmF5KDEwLCAxMCwgJ0UnKTsgLy8gRSAtPiBFbXB0eTsgUyAtPiBTaGlwOyBNIC0+IE1pc3NlZDsgSCAtPiBIaXQ7XG4gIGNvbnN0IHNoaXBzID0gW107XG5cbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBib2FyZDtcbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHkpID0+IHtcbiAgICBpZiAoc2hpcC5nZXREaXJlY3Rpb24oKSA9PT0gJ3gnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICBib2FyZFt4XVt5ICsgaV0gPSAnUyc7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3ggKyBpXVt5XSA9ICdTJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzaGlwcy5wdXNoKHsgc2hpcCwgeCwgeSB9KTtcbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoYm9hcmRbeF1beV0gPT09ICdFJykge1xuICAgICAgYm9hcmRbeF1beV0gPSAnTSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJvYXJkW3hdW3ldID0gJ0gnO1xuXG4gICAgICBjb25zdCBzaGlwSW5mbyA9IHNoaXBzLmZpbmQoKHNoaXBJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc2hpcCwgeDogc2hpcFgsIHk6IHNoaXBZIH0gPSBzaGlwSW5mbztcbiAgICAgICAgaWYgKHNoaXAuZ2V0RGlyZWN0aW9uKCkgPT09ICd4Jykge1xuICAgICAgICAgIHJldHVybiB4ID09PSBzaGlwWCAmJiB5ID49IHNoaXBZICYmIHkgPCBzaGlwWSArIHNoaXAuZ2V0TGVuZ3RoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHkgPT09IHNoaXBZICYmIHggPj0gc2hpcFggJiYgeCA8IHNoaXBYICsgc2hpcC5nZXRMZW5ndGgoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChzaGlwSW5mbykge1xuICAgICAgICBzaGlwSW5mby5zaGlwLmhpdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldEJvYXJkLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2FtZWJvYXJkO1xuIiwiaW1wb3J0IGNyZWF0ZUdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgY3JlYXRlU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jb25zdCBjcmVhdGVTaGlwcyA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDI7IGkgPCA2OyBpKyspIHtcbiAgICBzaGlwcy5wdXNoKGNyZWF0ZVNoaXAoaSkpO1xuICB9XG4gIHNoaXBzLnB1c2goY3JlYXRlU2hpcCgyKSk7XG5cbiAgcmV0dXJuIHNoaXBzO1xufTtcblxuY29uc3QgY3JlYXRlUGxheWVyID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuICBjb25zdCBzaGlwcyA9IGNyZWF0ZVNoaXBzKCk7XG5cbiAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiBzaGlwcztcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gIGNvbnN0IHRha2VUdXJuID0gKGVuZW15Qm9hcmQsIHgsIHkpID0+IHtcbiAgICBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRTaGlwcyxcbiAgICBnZXRCb2FyZCxcbiAgICB0YWtlVHVybixcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllcjtcbiIsImNvbnN0IG5hbWVzID0gbmV3IEFycmF5KDYpLmZpbGwoJycpO1xubmFtZXNbMl0gPSAnUGF0cm9sIEJvYXQnO1xubmFtZXNbM10gPSAnU3VibWFyaW5lJztcbm5hbWVzWzRdID0gJ0JhdHRsZXNoaXAnO1xubmFtZXNbNV0gPSAnQ2Fycmllcic7XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSAobGVuZ3RoKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBuYW1lc1tsZW5ndGhdO1xuICBsZXQgc3VuayA9IGZhbHNlO1xuICBsZXQgaGl0cyA9IDA7XG4gIGxldCBkaXJlY3Rpb24gPSAneCc7IC8vIHggLT4gaG9yaXpvbnRhbDsgeSAtPiB2ZXJ0aWNhbDtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgaGl0cyArPSAxO1xuICAgIHN1bmsgPSBoaXRzID09PSBsZW5ndGg7XG4gIH07XG5cbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuXG4gIGNvbnN0IGdldERpcmVjdGlvbiA9ICgpID0+IGRpcmVjdGlvbjtcblxuICBjb25zdCBjaGFuZ2VEaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSAneCcgPyAneScgOiAneCc7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc3VuaztcblxuICBjb25zdCBnZXRIaXRzID0gKCkgPT4gaGl0cztcblxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcblxuICByZXR1cm4ge1xuICAgIGlzU3VuayxcbiAgICBnZXRIaXRzLFxuICAgIGhpdCxcbiAgICBnZXRMZW5ndGgsXG4gICAgY2hhbmdlRGlyZWN0aW9uLFxuICAgIGdldERpcmVjdGlvbixcbiAgICBnZXROYW1lLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGdhbWVMb2dpYyBmcm9tICcuL2dhbWVMb2dpYyc7XG5cbmdhbWVMb2dpYy5pbml0R2FtZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9