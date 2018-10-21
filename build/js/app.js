/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./client/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/components/Container.jsx":
/*!*****************************************!*\
  !*** ./client/components/Container.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n      background-image: url(\'build/', '\');\n      background-repeat: no-repeat;\n      background-position: center;\n      background-attachment: fixed;\n      background-size: cover;\n    '], ['\n      background-image: url(\'build/', '\');\n      background-repeat: no-repeat;\n      background-position: center;\n      background-attachment: fixed;\n      background-size: cover;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n      color: white !important;\n    '], ['\n      color: white !important;\n    ']);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/Table/index.js");

var _Table2 = _interopRequireDefault(_Table);

var _TableHead = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/TableHead/index.js");

var _TableHead2 = _interopRequireDefault(_TableHead);

var _TableBody = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/TableBody/index.js");

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableRow = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/TableRow/index.js");

var _TableRow2 = _interopRequireDefault(_TableRow);

var _TableCell = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/TableCell/index.js");

var _TableCell2 = _interopRequireDefault(_TableCell);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _styledComponents = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
//import { withStyles } from '@material-ui/core/styles';

var Container = function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    var _this = _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this));

    _this.state = {
      footballData: ''
    };
    return _this;
  }

  _createClass(Container, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // 2000 is the World Cup ID
      $.ajax({
        url: 'http://api.football-data.org/v2/competitions/2000/matches',
        method: 'GET',
        beforeSend: function beforeSend(xhr) {
          xhr.setRequestHeader('X-Auth-Token', '18531bdfdc0b4ba9a732ebf5e62abf4f');
        },
        success: function success(data) {
          _this2.setState({
            footballData: data
          });
        }
      });
    }
  }, {
    key: 'renderTable',
    value: function renderTable() {
      var backgroundImage = __webpack_require__(/*! ../img/logo.jpg */ "./client/img/logo.jpg");

      var StyledPaper = (0, _styledComponents2.default)(_Paper2.default)(_templateObject, backgroundImage);

      var StyledTableCell = (0, _styledComponents2.default)(_TableCell2.default)(_templateObject2);

      var matches = this.state.footballData.matches;
      return _react2.default.createElement(
        StyledPaper,
        null,
        _react2.default.createElement(
          _Table2.default,
          null,
          _react2.default.createElement(
            _TableHead2.default,
            null,
            _react2.default.createElement(
              _TableRow2.default,
              null,
              _react2.default.createElement(
                StyledTableCell,
                null,
                'Date'
              ),
              _react2.default.createElement(
                StyledTableCell,
                null,
                'Stage'
              ),
              _react2.default.createElement(
                StyledTableCell,
                null,
                'Group'
              ),
              _react2.default.createElement(
                StyledTableCell,
                null,
                'Team 1'
              ),
              _react2.default.createElement(
                StyledTableCell,
                null,
                'Team 2'
              ),
              _react2.default.createElement(
                StyledTableCell,
                null,
                'Winner'
              ),
              _react2.default.createElement(
                StyledTableCell,
                null,
                'Score'
              )
            )
          ),
          _react2.default.createElement(
            _TableBody2.default,
            null,
            matches.map(function (match) {
              var id = match.id,
                  homeTeam = match.homeTeam,
                  awayTeam = match.awayTeam,
                  utcDate = match.utcDate,
                  stage = match.stage,
                  group = match.group,
                  score = match.score;


              return _react2.default.createElement(
                _TableRow2.default,
                { key: id },
                _react2.default.createElement(
                  StyledTableCell,
                  null,
                  utcDate
                ),
                _react2.default.createElement(
                  StyledTableCell,
                  null,
                  stage
                ),
                _react2.default.createElement(
                  StyledTableCell,
                  null,
                  group
                ),
                _react2.default.createElement(
                  StyledTableCell,
                  null,
                  homeTeam.name
                ),
                _react2.default.createElement(
                  StyledTableCell,
                  null,
                  awayTeam.name
                ),
                function () {
                  if (score.winner === 'HOME_TEAM') {
                    return _react2.default.createElement(
                      StyledTableCell,
                      null,
                      homeTeam.name
                    );
                  } else {
                    return _react2.default.createElement(
                      StyledTableCell,
                      null,
                      awayTeam.name
                    );
                  }
                }(),
                _react2.default.createElement(
                  StyledTableCell,
                  null,
                  score.fullTime.homeTeam,
                  '-',
                  score.fullTime.awayTeam
                )
              );
            })
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.footballData) {
        return this.renderTable();
      }
      return null;
    }
  }]);

  return Container;
}(_react2.default.Component);

exports.default = Container;

/***/ }),

/***/ "./client/img/logo.jpg":
/*!*****************************!*\
  !*** ./client/img/logo.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/static/logo.jpg";

/***/ }),

/***/ "./client/index.js":
/*!*************************!*\
  !*** ./client/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Container = __webpack_require__(/*! ./components/Container.jsx */ "./client/components/Container.jsx");

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_Container2.default, null), document.getElementById('app'));

/***/ })

/******/ });
//# sourceMappingURL=app.js.map