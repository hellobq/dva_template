webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/components/home/store/reducer.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./src/components/home/store/types.js");


var defaultState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  count: 0
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["COUNT_ADD"]:
      return state;

    default:
  }

  return state;
});

/***/ })

})
//# sourceMappingURL=_app.js.566d54132ff04814a26d.hot-update.js.map