webpackHotUpdate_N_E("pages/workspace",{

/***/ "./components/Workspace/TabSwitch/index.js":
/*!*************************************************!*\
  !*** ./components/Workspace/TabSwitch/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.module.css */ \"./components/Workspace/TabSwitch/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../TodoList */ \"./components/Workspace/TodoList/index.js\");\n/* harmony import */ var _Pomodoro__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Pomodoro */ \"./components/Workspace/Pomodoro/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/anysh/UniDrive/Course/Year-2/Term-2/CS4005 - UI Design/CS4005/react/pulse/components/Workspace/TabSwitch/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar DATA = [];\n\nvar TabSwitch = /*#__PURE__*/function (_React$Component) {\n  Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(TabSwitch, _React$Component);\n\n  var _super = _createSuper(TabSwitch);\n\n  function TabSwitch(props) {\n    var _this;\n\n    Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, TabSwitch);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      pomodoro: false,\n      todolist: true\n    };\n    return _this;\n  }\n\n  Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(TabSwitch, [{\n    key: \"ShowFn\",\n    value: function ShowFn() {\n      this.setState({\n        pomodoro: true\n      });\n    }\n  }, {\n    key: \"HideFn\",\n    value: function HideFn() {\n      this.setState({\n        pomodoro: false\n      });\n    }\n  }, {\n    key: \"ShowTodo\",\n    value: function ShowTodo() {\n      this.setState({\n        todolist: true\n      });\n    }\n  }, {\n    key: \"HideTodo\",\n    value: function HideTodo() {\n      this.setState({\n        todolist: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this,\n          _jsxDEV2,\n          _jsxDEV3;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"d-flex justify-content-center text-center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.mainContainer,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"d-flex justify-content-center text-center\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.tabBox,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", (_jsxDEV2 = {\n                onClick: function onClick() {\n                  return _this2.ShowFn();\n                }\n              }, Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"onClick\", function onClick() {\n                return _this2.HideTodo();\n              }), Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"className\", _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.pomodoroTab), Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV2, \"children\", \"Pomodoro\"), _jsxDEV2), void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"d-flex justify-content-center\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", (_jsxDEV3 = {\n                  onClick: function onClick() {\n                    return _this2.HideFn();\n                  }\n                }, Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV3, \"onClick\", function onClick() {\n                  return _this2.ShowTodo();\n                }), Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV3, \"className\", _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.todolistTab), Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsxDEV3, \"children\", \"To-do List\"), _jsxDEV3), void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 51,\n                  columnNumber: 17\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.trackerTab,\n                children: \"Tracker\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 59,\n                columnNumber: 15\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.tool1,\n              children: [this.state.todolist ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_TodoList__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                tasks: DATA\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 63,\n                columnNumber: 35\n              }, this) : null, this.state.pomodoro ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.tool2,\n                children: this.state.pomodoro ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_Pomodoro__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 40\n                }, this) : null\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 65,\n                columnNumber: 37\n              }, this) : null]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return TabSwitch;\n}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabSwitch);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Xb3Jrc3BhY2UvVGFiU3dpdGNoL2luZGV4LmpzPzdjN2QiXSwibmFtZXMiOlsiREFUQSIsIlRhYlN3aXRjaCIsInByb3BzIiwic3RhdGUiLCJwb21vZG9ybyIsInRvZG9saXN0Iiwic2V0U3RhdGUiLCJzdHlsZXMiLCJtYWluQ29udGFpbmVyIiwidGFiQm94IiwiU2hvd0ZuIiwiSGlkZVRvZG8iLCJwb21vZG9yb1RhYiIsIkhpZGVGbiIsIlNob3dUb2RvIiwidG9kb2xpc3RUYWIiLCJ0cmFja2VyVGFiIiwidG9vbDEiLCJ0b29sMiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsRUFBYjs7SUFFTUMsUzs7Ozs7QUFDSixxQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLEVBQUUsS0FEQztBQUVYQyxjQUFRLEVBQUM7QUFGRSxLQUFiO0FBRmlCO0FBTWxCOzs7OzZCQUVRO0FBQ1AsV0FBS0MsUUFBTCxDQUFjO0FBQ1pGLGdCQUFRLEVBQUU7QUFERSxPQUFkO0FBR0Q7Ozs2QkFFUTtBQUNQLFdBQUtFLFFBQUwsQ0FBYztBQUNaRixnQkFBUSxFQUFFO0FBREUsT0FBZDtBQUdEOzs7K0JBRVU7QUFDVCxXQUFLRSxRQUFMLENBQWM7QUFDWkQsZ0JBQVEsRUFBRTtBQURFLE9BQWQ7QUFHRDs7OytCQUVVO0FBQ1QsV0FBS0MsUUFBTCxDQUFjO0FBQ1ZELGdCQUFRLEVBQUU7QUFEQSxPQUFkO0FBR0Q7Ozs2QkFFUTtBQUFBO0FBQUE7QUFBQTs7QUFDUCwwQkFDRTtBQUFLLGlCQUFTLEVBQUMsMkNBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUVFLHlEQUFNLENBQUNDLGFBQXZCO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFDLDJDQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFFRCx5REFBTSxDQUFDRSxNQUF2QjtBQUFBLHNDQUNFO0FBQUssdUJBQU8sRUFBRTtBQUFBLHlCQUFNLE1BQUksQ0FBQ0MsTUFBTCxFQUFOO0FBQUE7QUFBZCwyTkFBNEM7QUFBQSx1QkFBTSxNQUFJLENBQUNDLFFBQUwsRUFBTjtBQUFBLGVBQTVDLCtNQUE4RUoseURBQU0sQ0FBQ0ssV0FBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERixlQUlFO0FBQUsseUJBQVMsRUFBQywrQkFBZjtBQUFBLHVDQUNFO0FBQ0UseUJBQU8sRUFBRTtBQUFBLDJCQUFNLE1BQUksQ0FBQ0MsTUFBTCxFQUFOO0FBQUE7QUFEWCw2TkFFVztBQUFBLHlCQUFNLE1BQUksQ0FBQ0MsUUFBTCxFQUFOO0FBQUEsaUJBRlgsK01BR2FQLHlEQUFNLENBQUNRLFdBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpGLGVBYUU7QUFBSyx5QkFBUyxFQUFFUix5REFBTSxDQUFDUyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFpQkU7QUFBSyx1QkFBUyxFQUFFVCx5REFBTSxDQUFDVSxLQUF2QjtBQUFBLHlCQUNDLEtBQUtkLEtBQUwsQ0FBV0UsUUFBWCxnQkFBcUIscUVBQUMsaURBQUQ7QUFBVSxxQkFBSyxFQUFFTDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFyQixHQUF5RCxJQUQxRCxFQUdHLEtBQUtHLEtBQUwsQ0FBV0MsUUFBWCxnQkFBcUI7QUFBSyx5QkFBUyxFQUFFRyx5REFBTSxDQUFDVyxLQUF2QjtBQUFBLDBCQUNuQixLQUFLZixLQUFMLENBQVdDLFFBQVgsZ0JBQXNCLHFFQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQXRCLEdBQThDO0FBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXJCLEdBRU8sSUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUErQkQ7Ozs7RUFqRXFCZSw2Q0FBSyxDQUFDQyxTOztBQW9FZm5CLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Xb3Jrc3BhY2UvVGFiU3dpdGNoL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuLi9Ub2RvTGlzdFwiO1xuaW1wb3J0IFBvbW9kb3JvIGZyb20gXCIuLi9Qb21vZG9yb1wiO1xuaW1wb3J0IFJlYWN0LCB7IHNldFN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IERBVEEgPSBbXTtcblxuY2xhc3MgVGFiU3dpdGNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBvbW9kb3JvOiBmYWxzZSxcbiAgICAgIHRvZG9saXN0OnRydWVcbiAgICB9O1xuICB9XG5cbiAgU2hvd0ZuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcG9tb2Rvcm86IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBIaWRlRm4oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwb21vZG9ybzogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBTaG93VG9kbygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHRvZG9saXN0OiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgSGlkZVRvZG8oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHRvZG9saXN0OiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5Db250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFiQm94fT5cbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLlNob3dGbigpfSBvbkNsaWNrPXsoKSA9PiB0aGlzLkhpZGVUb2RvKCl9IGNsYXNzTmFtZT17c3R5bGVzLnBvbW9kb3JvVGFifT5cbiAgICAgICAgICAgICAgICBQb21vZG9yb1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuSGlkZUZuKCl9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLlNob3dUb2RvKCl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50b2RvbGlzdFRhYn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBUby1kbyBMaXN0XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyYWNrZXJUYWJ9PlRyYWNrZXI8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvb2wxfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRvZG9saXN0ID88VG9kb0xpc3QgdGFza3M9e0RBVEF9PjwvVG9kb0xpc3Q+OiBudWxsfVxuXG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnBvbW9kb3JvID88ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvb2wyfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wb21vZG9ybyA/IDxQb21vZG9ybz48L1BvbW9kb3JvPiA6IG51bGx9XG4gICAgICAgICAgICAgIDwvZGl2PjogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiU3dpdGNoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Workspace/TabSwitch/index.js\n");

/***/ })

})