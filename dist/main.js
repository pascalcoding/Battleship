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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yCAAyC;EACzC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,uCAAuC;AACzC;;AAEA;EACE,qBAAqB;EACrB,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,kBAAkB;AACpB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  gap: 20px;\n}\n\n#player-board {\n  display: flex;\n  flex-direction: column;\n}\n\n.row {\n  display: flex;\n}\n\n#computer-board {\n  display: flex;\n  flex-direction: column;\n}\n\n#ship-selector {\n  display: flex;\n  flex-direction: column;\n}\n\n.gameboard-cell {\n  border: 1px solid black;\n  padding: 10px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ship {\n  border: 1px solid blue;\n  background-color: rgba(0, 0, 255, 0.05);\n}\n\n.hit {\n  border: 1px solid red;\n  color: red;\n}\n\n.hit:after {\n  content: '\\d7';\n  font-size: 35px;\n}\n\n.miss {\n  height: 10px;\n  width: 10px;\n  background-color: black;\n  border-radius: 50%;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLGlEQUFVOztBQUV2QjtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHNEQUFlO0FBQy9COztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsb0JBQW9COztBQUUzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7O1VDMUMxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNlOztBQUVwQyxrREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9jb21wdXRlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVMb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZ2FwOiAyMHB4O1xufVxuXG4jcGxheWVyLWJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNjb21wdXRlci1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNzaGlwLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmdhbWVib2FyZC1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2hpcCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjA1KTtcbn1cblxuLmhpdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmhpdDphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXFxcZDcnO1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5taXNzIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNwbGF5ZXItYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI2NvbXB1dGVyLWJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc2hpcC1zZWxlY3RvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmdhbWVib2FyZC1jZWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjA1KTtcXG59XFxuXFxuLmhpdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uaGl0OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdcXFxcZDcnO1xcbiAgZm9udC1zaXplOiAzNXB4O1xcbn1cXG5cXG4ubWlzcyB7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGdhbWVMb2dpYyBmcm9tICcuL2dhbWVMb2dpYyc7XG5pbXBvcnQgY3JlYXRlR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNvbnN0IGNyZWF0ZVNoaXBzID0gKCkgPT4ge1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMjsgaSA8IDY7IGkrKykge1xuICAgIHNoaXBzLnB1c2goY3JlYXRlU2hpcChpKSk7XG4gIH1cbiAgc2hpcHMucHVzaChjcmVhdGVTaGlwKDIpKTtcblxuICByZXR1cm4gc2hpcHM7XG59O1xuXG5jb25zdCBjcmVhdGVDb21wdXRlclBsYXllciA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQoKTtcbiAgY29uc3Qgc2hpcHMgPSBjcmVhdGVTaGlwcygpO1xuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuXG4gIGNvbnN0IGdldFJhbmRvbUNvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgIHJldHVybiB7IHgsIHkgfTtcbiAgfTtcblxuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgbGV0IHsgeCwgeSB9ID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZXMoKTtcbiAgICB3aGlsZSAoIWdhbWVMb2dpYy5pc0xlZ2FsU2hpcFBsYWNlbWVudCh4LCB5LCBzaGlwLCBib2FyZCkpIHtcbiAgICAgICh7IHgsIHkgfSA9IGdldFJhbmRvbUNvb3JkaW5hdGVzKCkpO1xuICAgIH1cbiAgICBib2FyZC5wbGFjZVNoaXAoc2hpcCwgeCwgeSk7XG4gIH0pO1xuXG4gIGNvbnN0IHRha2VUdXJuID0gKGVuZW15Qm9hcmQpID0+IHtcbiAgICBsZXQgbGVnYWxNb3ZlRm91bmQgPSBmYWxzZTtcbiAgICB3aGlsZSAoIWxlZ2FsTW92ZUZvdW5kKSB7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IGdldFJhbmRvbUNvb3JkaW5hdGVzKCk7XG4gICAgICBjb25zdCBjZWxsID0gZW5lbXlCb2FyZC5nZXRCb2FyZCgpW3hdW3ldO1xuICAgICAgaWYgKGNlbGwgIT09ICdIJyAmJiBjZWxsICE9PSAnTScpIHtcbiAgICAgICAgbGVnYWxNb3ZlRm91bmQgPSB0cnVlO1xuICAgICAgICBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQsXG4gICAgdGFrZVR1cm4sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb21wdXRlclBsYXllcjtcbiIsImNvbnN0IGRvbU1hbmlwdWxhdGlvbiA9ICgoKSA9PiB7XG4gIGNvbnN0IGRyYXdQbGF5ZXJCb2FyZCA9IChib2FyZCkgPT4ge1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICAgIGNvbnN0IGJvYXJkQXJyID0gYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtY2VsbCcpO1xuICAgICAgICBjZWxsLmRhdGFzZXQucm93ID0gaTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGo7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICAgIHBsYXllckJvYXJkLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYXdDb21wdXRlckJvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1ib2FyZCcpO1xuICAgIGNvbnN0IGJvYXJkQXJyID0gYm9hcmQuZ2V0Qm9hcmQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ3JvdycpO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdnYW1lYm9hcmQtY2VsbCcpO1xuICAgICAgICBjZWxsLmRhdGFzZXQucm93ID0gaTtcbiAgICAgICAgY2VsbC5kYXRhc2V0LmNvbCA9IGo7XG4gICAgICAgIGlmIChib2FyZEFycltpXVtqXSA9PSAnSCcgfHwgYm9hcmRBcnJbaV1bal0gPT0gJ00nKSB7XG4gICAgICAgICAgY2VsbC50ZXh0Q29udGVudCA9IGJvYXJkQXJyW2ldW2pdO1xuICAgICAgICB9XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICAgIGNvbXB1dGVyQm9hcmQuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlQ2VsbCA9IChib2FyZCwgeCwgeSwgY29tcHV0ZXIpID0+IHtcbiAgICBjb25zdCBib2FyZEFyciA9IGJvYXJkLmdldEJvYXJkKCk7XG4gICAgbGV0IGNlbGxzO1xuICAgIGlmIChjb21wdXRlcikge1xuICAgICAgY2VsbHMgPSBBcnJheS5mcm9tKFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY29tcHV0ZXItYm9hcmQgPiAqID4gLmdhbWVib2FyZC1jZWxsJylcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNlbGxzID0gQXJyYXkuZnJvbShcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3BsYXllci1ib2FyZCA+ICogPiAuZ2FtZWJvYXJkLWNlbGwnKVxuICAgICAgKTtcbiAgICB9XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBwYXJzZUludChjZWxsLmRhdGFzZXQucm93KSA9PT0geCAmJlxuICAgICAgICBwYXJzZUludChjZWxsLmRhdGFzZXQuY29sKSA9PT0geVxuICAgICAgKSB7XG4gICAgICAgIGlmIChib2FyZEFyclt4XVt5XSA9PT0gJ00nKSB7XG4gICAgICAgICAgY29uc3QgbWlzc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICBtaXNzRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgY2VsbC5hcHBlbmRDaGlsZChtaXNzRWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRBcnJbeF1beV0gPT09ICdTJykge1xuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkQXJyW3hdW3ldID09PSAnSCcpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZHJhd1NoaXBTZWxlY3RvciA9IChwbGF5ZXIpID0+IHtcbiAgICBjb25zdCBzaGlwU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1zZWxlY3RvcicpO1xuXG4gICAgY29uc3Qgc2hpcENvb3JkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHNoaXBDb29yZElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc2hpcC1jb29yZC1pbnB1dCcpO1xuICAgIHNoaXBDb29yZElucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgc2hpcENvb3JkSW5wdXQucGxhY2Vob2xkZXIgPSAnSW5wdXQgY29vcmRpbmF0ZSAoZS5nLiBBMTApJztcblxuICAgIGNvbnN0IHNoaXBUeXBlU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2hpcFR5cGVTZWxlY3Quc2V0QXR0cmlidXRlKCdpZCcsICdzaGlwLXR5cGUtc2VsZWN0Jyk7XG4gICAgcGxheWVyLmdldFNoaXBzKCkuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHQudmFsdWUgPSBzaGlwLmdldE5hbWUoKTtcbiAgICAgIG9wdC50ZXh0Q29udGVudCA9IHNoaXAuZ2V0TmFtZSgpO1xuICAgICAgc2hpcFR5cGVTZWxlY3QuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhvcml6b250YWxSYWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvcml6b250YWxSYWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaG9yaXpvbnRhbFJhZGlvLnR5cGUgPSAncmFkaW8nO1xuICAgIGhvcml6b250YWxSYWRpby5uYW1lID0gJ2RpcmVjdGlvbic7XG4gICAgaG9yaXpvbnRhbFJhZGlvLnZhbHVlID0gJ2hvcml6b250YWwnO1xuICAgIGNvbnN0IGhvcml6b250YWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgaG9yaXpvbnRhbExhYmVsLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnO1xuICAgIGhvcml6b250YWxSYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Jpem9udGFsUmFkaW8pO1xuICAgIGhvcml6b250YWxSYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZChob3Jpem9udGFsTGFiZWwpO1xuXG4gICAgY29uc3QgdmVydGljYWxSYWRpb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHZlcnRpY2FsUmFkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHZlcnRpY2FsUmFkaW8udHlwZSA9ICdyYWRpbyc7XG4gICAgdmVydGljYWxSYWRpby5uYW1lID0gJ2RpcmVjdGlvbic7XG4gICAgdmVydGljYWxSYWRpby52YWx1ZSA9ICd2ZXJ0aWNhbCc7XG4gICAgY29uc3QgdmVydGljYWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdmVydGljYWxMYWJlbC50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgdmVydGljYWxSYWRpb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh2ZXJ0aWNhbFJhZGlvKTtcbiAgICB2ZXJ0aWNhbFJhZGlvQ29udGFpbmVyLmFwcGVuZENoaWxkKHZlcnRpY2FsTGFiZWwpO1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LXNoaXAtYnV0dG9uJyk7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gJ1BsYWNlIFNoaXAhJztcblxuICAgIHNoaXBTZWxlY3Rvci5hcHBlbmRDaGlsZChzaGlwQ29vcmRJbnB1dCk7XG4gICAgc2hpcFNlbGVjdG9yLmFwcGVuZENoaWxkKHNoaXBUeXBlU2VsZWN0KTtcbiAgICBzaGlwU2VsZWN0b3IuYXBwZW5kQ2hpbGQoaG9yaXpvbnRhbFJhZGlvQ29udGFpbmVyKTtcbiAgICBzaGlwU2VsZWN0b3IuYXBwZW5kQ2hpbGQodmVydGljYWxSYWRpb0NvbnRhaW5lcik7XG4gICAgc2hpcFNlbGVjdG9yLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG4gIH07XG5cbiAgY29uc3QgZHJhd0F0dGFja0Nvb3JkaW5hdGVTZWxlY3RvciA9ICgpID0+IHtcbiAgICBjb25zdCBhdHRhY2tTZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2stY29vcmQtc2VsZWN0b3InKTtcblxuICAgIGNvbnN0IGF0dGFja0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBhdHRhY2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2F0dGFjay1pbnB1dCcpO1xuICAgIGF0dGFja0lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgYXR0YWNrSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgYXR0YWNrIGNvb3JkaW5hdGUgKGUuZy4gQTEwKSc7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtYXR0YWNrLWJ1dHRvbicpO1xuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdBdHRhY2sgYSBzcXVhcmUhJztcblxuICAgIGF0dGFja1NlbGVjdG9yLmFwcGVuZENoaWxkKGF0dGFja0lucHV0KTtcbiAgICBhdHRhY2tTZWxlY3Rvci5hcHBlbmRDaGlsZChzdWJtaXRCdXR0b24pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZHJhd1BsYXllckJvYXJkLFxuICAgIGRyYXdDb21wdXRlckJvYXJkLFxuICAgIGRyYXdTaGlwU2VsZWN0b3IsXG4gICAgZHJhd0F0dGFja0Nvb3JkaW5hdGVTZWxlY3RvcixcbiAgICB1cGRhdGVDZWxsLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tTWFuaXB1bGF0aW9uO1xuIiwiaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tICcuL3BsYXllcic7XG5pbXBvcnQgY3JlYXRlQ29tcHV0ZXJQbGF5ZXIgZnJvbSAnLi9jb21wdXRlcic7XG5pbXBvcnQgZG9tTWFuaXB1bGF0aW9uIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJztcblxuY29uc3QgZ2FtZUxvZ2ljID0gKCgpID0+IHtcbiAgbGV0IHBsYXllcjtcbiAgbGV0IGNvbXB1dGVyO1xuICBsZXQgY3VycmVudFBsYXllcjtcblxuICBjb25zdCBjb252ZXJ0Q2hhclRvTnVtID0gKGNoYXIpID0+IHtcbiAgICByZXR1cm4gY2hhci50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCkgLSAnQScuY2hhckNvZGVBdCgwKTtcbiAgfTtcblxuICBjb25zdCBpc0xlZ2FsU2hpcFBsYWNlbWVudCA9ICh4LCB5LCBzaGlwLCBib2FyZCkgPT4ge1xuICAgIGNvbnN0IGJvYXJkQXJyID0gYm9hcmQuZ2V0Qm9hcmQoKTtcblxuICAgIGlmICghKHggPD0gOSAmJiB4ID49IDApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghKHkgPD0gOSAmJiB5ID49IDApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHNoaXAuZ2V0RGlyZWN0aW9uKCkgPT09ICd4Jykge1xuICAgICAgLy9DaGVjayBvd24gc3F1YXJlc1xuICAgICAgaWYgKHggKyBzaGlwLmdldExlbmd0aCgpID4gOSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGFydFBvcyA9IHggPj0gMSA/IHggLSAxIDogeDtcbiAgICAgIGNvbnN0IGVuZFBvcyA9XG4gICAgICAgIHggKyBzaGlwLmdldExlbmd0aCgpIDw9IDhcbiAgICAgICAgICA/IHggKyBzaGlwLmdldExlbmd0aCgpICsgMVxuICAgICAgICAgIDogeCArIHNoaXAuZ2V0TGVuZ3RoKCk7XG4gICAgICAvL0NoZWNrIG93biByb3dcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFBvczsgaSA8IGVuZFBvczsgaSsrKSB7XG4gICAgICAgIGlmIChib2FyZEFycltpXVt5XSAhPSAnRScpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vQ2hlY2sgcm93IGFib3ZlXG4gICAgICBpZiAoeSA+IDApIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0UG9zOyBpIDwgZW5kUG9zOyBpKyspIHtcbiAgICAgICAgICBpZiAoYm9hcmRBcnJbaV1beSAtIDFdICE9ICdFJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9DaGVjayByb3cgYmVsb3dcbiAgICAgIGlmICh5IDwgOSkge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRQb3M7IGkgPCBlbmRQb3M7IGkrKykge1xuICAgICAgICAgIGlmIChib2FyZEFycltpXVt5ICsgMV0gIT0gJ0UnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh5ICsgc2hpcC5nZXRMZW5ndGgoKSA+IDkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3Qgc3RhcnRQb3MgPSB5ID49IDEgPyB5IC0gMSA6IHk7XG4gICAgICBjb25zdCBlbmRQb3MgPVxuICAgICAgICB5ICsgc2hpcC5nZXRMZW5ndGgoKSA8PSA4XG4gICAgICAgICAgPyB5ICsgc2hpcC5nZXRMZW5ndGgoKSArIDFcbiAgICAgICAgICA6IHkgKyBzaGlwLmdldExlbmd0aCgpO1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0UG9zOyBpIDwgZW5kUG9zOyBpKyspIHtcbiAgICAgICAgaWYgKGJvYXJkQXJyW3hdW2ldICE9ICdFJykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHggPiAwKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFBvczsgaSA8IGVuZFBvczsgaSsrKSB7XG4gICAgICAgICAgaWYgKGJvYXJkQXJyW3ggLSAxXVtpXSAhPSAnRScpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHggPCA5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydFBvczsgaSA8IGVuZFBvczsgaSsrKSB7XG4gICAgICAgICAgaWYgKGJvYXJkQXJyW3ggKyAxXVtpXSAhPSAnRScpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIGNvbnN0IGlzTGVnYWxBdHRhY2sgPSAoeCwgeSwgYm9hcmQpID0+IHtcbiAgICBpZiAoISh4IDw9IDkgJiYgeCA+PSAwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoISh5IDw9IDkgJiYgeSA+PSAwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGNlbGwgPSBib2FyZC5nZXRCb2FyZCgpW3hdW3ldO1xuXG4gICAgaWYgKGNlbGwgPT09ICdNJyB8fCBjZWxsID09PSAnSCcpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBhZGRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hpcC1jb29yZC1pbnB1dCcpO1xuICAgIGNvbnN0IHZlcnRpY2FsUmFkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJ2lucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiZGlyZWN0aW9uXCJdW3ZhbHVlPVwidmVydGljYWxcIl0nXG4gICAgKTtcbiAgICBjb25zdCBhdHRhY2tJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdHRhY2staW5wdXQnKTtcbiAgICBjb25zdCBzdWJtaXRTaGlwQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1zaGlwLWJ1dHRvbicpO1xuICAgIGNvbnN0IHN1Ym1pdEF0dGFja0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtYXR0YWNrLWJ1dHRvbicpO1xuXG4gICAgc3VibWl0U2hpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NoaXAtdHlwZS1zZWxlY3QnKS52YWx1ZTtcbiAgICAgIGxldCBjdXJyZW50U2hpcDtcbiAgICAgIHBsYXllci5nZXRTaGlwcygpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgaWYgKHNoaXAuZ2V0TmFtZSgpID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIGN1cnJlbnRTaGlwID0gc2hpcDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBjb25zdCB2ZXJ0aWNhbCA9IHZlcnRpY2FsUmFkaW8uY2hlY2tlZDtcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xuICAgICAgICBjdXJyZW50U2hpcC5jaGFuZ2VEaXJlY3Rpb24oKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGNvb3JkID0gc2hpcElucHV0LnZhbHVlO1xuICAgICAgY29uc3QgeSA9IGNvbnZlcnRDaGFyVG9OdW0oY29vcmQuc2xpY2UoMCwgMSkpO1xuICAgICAgY29uc3QgeCA9IE51bWJlcihjb29yZC5zbGljZSgxLCBjb29yZC5sZW5ndGgpKTtcbiAgICAgIGlmIChcbiAgICAgICAgZ2FtZUxvZ2ljLmlzTGVnYWxTaGlwUGxhY2VtZW50KHgsIHksIGN1cnJlbnRTaGlwLCBwbGF5ZXIuZ2V0Qm9hcmQoKSlcbiAgICAgICkge1xuICAgICAgICBwbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoY3VycmVudFNoaXAsIHgsIHkpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbShcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjc2hpcC10eXBlLXNlbGVjdCA+IG9wdGlvbicpXG4gICAgICAgICk7XG4gICAgICAgIG9wdGlvbnMuZXZlcnkoKG9wdCkgPT4ge1xuICAgICAgICAgIGlmIChvcHQudmFsdWUgPT09IGN1cnJlbnRTaGlwLmdldE5hbWUoKSkge1xuICAgICAgICAgICAgb3B0LnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChjdXJyZW50U2hpcC5nZXREaXJlY3Rpb24oKSA9PT0gJ3gnKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IHk7IGkgPCB5ICsgY3VycmVudFNoaXAuZ2V0TGVuZ3RoKCk7IGkrKykge1xuICAgICAgICAgICAgZG9tTWFuaXB1bGF0aW9uLnVwZGF0ZUNlbGwocGxheWVyLmdldEJvYXJkKCksIHgsIGkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0geDsgaSA8IHggKyBjdXJyZW50U2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgICAgICBkb21NYW5pcHVsYXRpb24udXBkYXRlQ2VsbChwbGF5ZXIuZ2V0Qm9hcmQoKSwgaSwgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdWJtaXRBdHRhY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBjb29yZCA9IGF0dGFja0lucHV0LnZhbHVlO1xuICAgICAgY29uc3QgeSA9IGNvbnZlcnRDaGFyVG9OdW0oY29vcmQuc2xpY2UoMCwgMSkpO1xuICAgICAgY29uc3QgeCA9IE51bWJlcihjb29yZC5zbGljZSgxLCBjb29yZC5sZW5ndGgpKTtcblxuICAgICAgaWYgKGlzTGVnYWxBdHRhY2soeCwgeSwgY29tcHV0ZXIuZ2V0Qm9hcmQoKSkpIHtcbiAgICAgICAgcGxheWVyLnRha2VUdXJuKGNvbXB1dGVyLmdldEJvYXJkKCksIHgsIHkpO1xuICAgICAgICBkb21NYW5pcHVsYXRpb24udXBkYXRlQ2VsbChjb21wdXRlci5nZXRCb2FyZCgpLCB4LCB5LCB0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpbml0R2FtZSA9ICgpID0+IHtcbiAgICBwbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoKTtcbiAgICBjb21wdXRlciA9IGNyZWF0ZUNvbXB1dGVyUGxheWVyKCk7XG5cbiAgICBkb21NYW5pcHVsYXRpb24uZHJhd1BsYXllckJvYXJkKHBsYXllci5nZXRCb2FyZCgpKTtcbiAgICBkb21NYW5pcHVsYXRpb24uZHJhd0NvbXB1dGVyQm9hcmQoY29tcHV0ZXIuZ2V0Qm9hcmQoKSk7XG5cbiAgICBkb21NYW5pcHVsYXRpb24uZHJhd1NoaXBTZWxlY3RvcihwbGF5ZXIpO1xuICAgIGRvbU1hbmlwdWxhdGlvbi5kcmF3QXR0YWNrQ29vcmRpbmF0ZVNlbGVjdG9yKCk7XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xuICB9O1xuXG4gIGNvbnN0IGdldFdpbm5lciA9ICgpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZEFyciA9IHBsYXllci5nZXRCb2FyZCgpLmdldEJvYXJkKCk7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZEFyciA9IGNvbXB1dGVyLmdldEJvYXJkKCkuZ2V0Qm9hcmQoKTtcbiAgICBsZXQgcGxheWVyV29uID0gdHJ1ZTtcbiAgICBsZXQgY29tcHV0ZXJXb24gPSB0cnVlO1xuICAgIHBsYXllcjogZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgaWYgKHBsYXllckJvYXJkQXJyW2ldW2pdID09PSAnUycpIHtcbiAgICAgICAgICBwbGF5ZXJXb24gPSBmYWxzZTtcbiAgICAgICAgICBicmVhayBwbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY29tcHV0ZXI6IGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgIGlmIChjb21wdXRlckJvYXJkQXJyW2ldW2pdID09PSAnUycpIHtcbiAgICAgICAgICBjb21wdXRlcldvbiA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrIGNvbXB1dGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjb21wdXRlcldvbikge1xuICAgICAgcmV0dXJuICdjb21wdXRlcic7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXJXb24pIHtcbiAgICAgIHJldHVybiAncGxheWVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGluaXRHYW1lLFxuICAgIGlzTGVnYWxBdHRhY2ssXG4gICAgaXNMZWdhbFNoaXBQbGFjZW1lbnQsXG4gICAgZ2V0V2lubmVyLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUxvZ2ljO1xuIiwiY29uc3QgY3JlYXRlVHdvRGltZW5zaW9uYWxBcnJheSA9IChyb3dzLCBjb2xscywgZmlsbFZhbHVlKSA9PiB7XG4gIGNvbnN0IGFyciA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xuICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sbHM7IGorKykge1xuICAgICAgcm93LnB1c2goZmlsbFZhbHVlKTtcbiAgICB9XG4gICAgYXJyLnB1c2gocm93KTtcbiAgfVxuICByZXR1cm4gYXJyO1xufTtcblxuY29uc3QgY3JlYXRlR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGNyZWF0ZVR3b0RpbWVuc2lvbmFsQXJyYXkoMTAsIDEwLCAnRScpOyAvLyBFIC0+IEVtcHR5OyBTIC0+IFNoaXA7IE0gLT4gTWlzc2VkOyBIIC0+IEhpdDtcbiAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGJvYXJkO1xuICBjb25zdCBwbGFjZVNoaXAgPSAoc2hpcCwgeCwgeSkgPT4ge1xuICAgIGlmIChzaGlwLmdldERpcmVjdGlvbigpID09PSAneCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5nZXRMZW5ndGgoKTsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3hdW3kgKyBpXSA9ICdTJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgYm9hcmRbeCArIGldW3ldID0gJ1MnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHNoaXBzLnB1c2goeyBzaGlwLCB4LCB5IH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuICAgIGlmIChib2FyZFt4XVt5XSA9PT0gJ0UnKSB7XG4gICAgICBib2FyZFt4XVt5XSA9ICdNJztcbiAgICB9IGVsc2Uge1xuICAgICAgYm9hcmRbeF1beV0gPSAnSCc7XG5cbiAgICAgIGNvbnN0IHNoaXBJbmZvID0gc2hpcHMuZmluZCgoc2hpcEluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBzaGlwLCB4OiBzaGlwWCwgeTogc2hpcFkgfSA9IHNoaXBJbmZvO1xuICAgICAgICBpZiAoc2hpcC5nZXREaXJlY3Rpb24oKSA9PT0gJ3gnKSB7XG4gICAgICAgICAgcmV0dXJuIHggPT09IHNoaXBYICYmIHkgPj0gc2hpcFkgJiYgeSA8IHNoaXBZICsgc2hpcC5nZXRMZW5ndGgoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4geSA9PT0gc2hpcFkgJiYgeCA+PSBzaGlwWCAmJiB4IDwgc2hpcFggKyBzaGlwLmdldExlbmd0aCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHNoaXBJbmZvKSB7XG4gICAgICAgIHNoaXBJbmZvLnNoaXAuaGl0KCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0Qm9hcmQsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHYW1lYm9hcmQ7XG4iLCJpbXBvcnQgY3JlYXRlR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJztcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNvbnN0IGNyZWF0ZVNoaXBzID0gKCkgPT4ge1xuICBjb25zdCBzaGlwcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMjsgaSA8IDY7IGkrKykge1xuICAgIHNoaXBzLnB1c2goY3JlYXRlU2hpcChpKSk7XG4gIH1cbiAgc2hpcHMucHVzaChjcmVhdGVTaGlwKDIpKTtcblxuICByZXR1cm4gc2hpcHM7XG59O1xuXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHNoaXBzID0gY3JlYXRlU2hpcHMoKTtcblxuICBjb25zdCBnZXRTaGlwcyA9ICgpID0+IHNoaXBzO1xuXG4gIGNvbnN0IGdldEJvYXJkID0gKCkgPT4gYm9hcmQ7XG5cbiAgY29uc3QgdGFrZVR1cm4gPSAoZW5lbXlCb2FyZCwgeCwgeSkgPT4ge1xuICAgIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGdldFNoaXBzLFxuICAgIGdldEJvYXJkLFxuICAgIHRha2VUdXJuLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVyO1xuIiwiY29uc3QgbmFtZXMgPSBuZXcgQXJyYXkoNikuZmlsbCgnJyk7XG5uYW1lc1syXSA9ICdQYXRyb2wgQm9hdCc7XG5uYW1lc1szXSA9ICdTdWJtYXJpbmUnO1xubmFtZXNbNF0gPSAnQmF0dGxlc2hpcCc7XG5uYW1lc1s1XSA9ICdDYXJyaWVyJztcblxuY29uc3QgY3JlYXRlU2hpcCA9IChsZW5ndGgpID0+IHtcbiAgY29uc3QgbmFtZSA9IG5hbWVzW2xlbmd0aF07XG4gIGxldCBzdW5rID0gZmFsc2U7XG4gIGxldCBoaXRzID0gMDtcbiAgbGV0IGRpcmVjdGlvbiA9ICd4JzsgLy8geCAtPiBob3Jpem9udGFsOyB5IC0+IHZlcnRpY2FsO1xuXG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzICs9IDE7XG4gICAgc3VuayA9IGhpdHMgPT09IGxlbmd0aDtcbiAgfTtcblxuICBjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBsZW5ndGg7XG5cbiAgY29uc3QgZ2V0RGlyZWN0aW9uID0gKCkgPT4gZGlyZWN0aW9uO1xuXG4gIGNvbnN0IGNoYW5nZURpcmVjdGlvbiA9ICgpID0+IHtcbiAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICd4JyA/ICd5JyA6ICd4JztcbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzdW5rO1xuXG4gIGNvbnN0IGdldEhpdHMgPSAoKSA9PiBoaXRzO1xuXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuXG4gIHJldHVybiB7XG4gICAgaXNTdW5rLFxuICAgIGdldEhpdHMsXG4gICAgaGl0LFxuICAgIGdldExlbmd0aCxcbiAgICBjaGFuZ2VEaXJlY3Rpb24sXG4gICAgZ2V0RGlyZWN0aW9uLFxuICAgIGdldE5hbWUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGlwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgZ2FtZUxvZ2ljIGZyb20gJy4vZ2FtZUxvZ2ljJztcblxuZ2FtZUxvZ2ljLmluaXRHYW1lKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=