webpackHotUpdate_N_E("pages/workspace",{

/***/ "./components/Workspace/TabSwitch/index.js":
/*!*************************************************!*\
  !*** ./components/Workspace/TabSwitch/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"./components/Workspace/TabSwitch/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TodoList */ \"./components/Workspace/TodoList/index.js\");\n/* harmony import */ var _Pomodoro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Pomodoro */ \"./components/Workspace/Pomodoro/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/anysh/UniDrive/Course/Year-2/Term-2/CS4005 - UI Design/CS4005/react/pulse/components/Workspace/TabSwitch/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar DATA = [];\n\nvar TabSwitch = /*#__PURE__*/function (_React$Component) {\n  Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(TabSwitch, _React$Component);\n\n  var _super = _createSuper(TabSwitch);\n\n  function TabSwitch(props) {\n    var _this;\n\n    Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, TabSwitch);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      pomodoro: false\n    };\n    return _this;\n  }\n\n  Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(TabSwitch, [{\n    key: \"ShowFn\",\n    value: function ShowFn() {\n      this.setState({\n        pomodoro: !this.state.pomodoro\n      });\n    }\n  }, {\n    key: \"HideFn\",\n    value: function HideFn() {\n      this.setState({\n        pomodoro: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"d-flex justify-content-center text-center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.mainContainer,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"d-flex justify-content-center text-center\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.tabBox,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                onClick: function onClick() {\n                  return _this2.ShowFn();\n                },\n                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.pomodoroTab,\n                children: \"Pomodoro\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 29\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"d-flex justify-content-center\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  onClick: function onClick() {\n                    return _this2.HideFn();\n                  },\n                  className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.todolistTab,\n                  children: \"To-do List\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 29\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 25\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.trackerTab,\n                children: \"Tracker\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 44,\n                columnNumber: 25\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 21\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.tool1,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_TodoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                tasks: DATA\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 21\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.tool2,\n                children: this.state.pomodoro ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Pomodoro__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 42\n                }, this) : null\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 21\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 21\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 17\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this);\n    }\n  }]);\n\n  return TabSwitch;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabSwitch);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Xb3Jrc3BhY2UvVGFiU3dpdGNoL2luZGV4LmpzPzdjN2QiXSwibmFtZXMiOlsiREFUQSIsIlRhYlN3aXRjaCIsInByb3BzIiwic3RhdGUiLCJwb21vZG9ybyIsInNldFN0YXRlIiwic3R5bGVzIiwibWFpbkNvbnRhaW5lciIsInRhYkJveCIsIlNob3dGbiIsInBvbW9kb3JvVGFiIiwiSGlkZUZuIiwidG9kb2xpc3RUYWIiLCJ0cmFja2VyVGFiIiwidG9vbDEiLCJ0b29sMiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLEVBQWI7O0lBRU1DLFM7Ozs7O0FBRUYscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBVztBQUNUQyxjQUFRLEVBQUM7QUFEQSxLQUFYO0FBRmU7QUFLaEI7Ozs7NkJBRVE7QUFDUCxXQUFLQyxRQUFMLENBQWM7QUFDVkQsZ0JBQVEsRUFBQyxDQUFDLEtBQUtELEtBQUwsQ0FBV0M7QUFEWCxPQUFkO0FBR0Q7Ozs2QkFFUTtBQUNQLFdBQUtDLFFBQUwsQ0FBYztBQUNWRCxnQkFBUSxFQUFDO0FBREMsT0FBZDtBQUdEOzs7NkJBR0U7QUFBQTs7QUFDTCwwQkFDSTtBQUFLLGlCQUFTLEVBQUMsMkNBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUVFLHlEQUFNLENBQUNDLGFBQXZCO0FBQUEsaUNBQ0k7QUFBTSxxQkFBUyxFQUFDLDJDQUFoQjtBQUFBLG9DQUNJO0FBQUssdUJBQVMsRUFBRUQseURBQU0sQ0FBQ0UsTUFBdkI7QUFBQSxzQ0FDUTtBQUFLLHVCQUFPLEVBQUU7QUFBQSx5QkFBTSxNQUFJLENBQUNDLE1BQUwsRUFBTjtBQUFBLGlCQUFkO0FBQW1DLHlCQUFTLEVBQUVILHlEQUFNLENBQUNJLFdBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURSLGVBSUk7QUFBSyx5QkFBUyxFQUFDLCtCQUFmO0FBQUEsdUNBQ0k7QUFBSyx5QkFBTyxFQUFFO0FBQUEsMkJBQU0sTUFBSSxDQUFDQyxNQUFMLEVBQU47QUFBQSxtQkFBZDtBQUFtQywyQkFBUyxFQUFFTCx5REFBTSxDQUFDTSxXQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSkosZUFTSTtBQUFLLHlCQUFTLEVBQUVOLHlEQUFNLENBQUNPLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQWVJO0FBQUssdUJBQVMsRUFBRVAseURBQU0sQ0FBQ1EsS0FBdkI7QUFBQSxzQ0FDQSxxRUFBQyxpREFBRDtBQUFVLHFCQUFLLEVBQUVkO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREEsZUFHQTtBQUFLLHlCQUFTLEVBQUVNLHlEQUFNLENBQUNTLEtBQXZCO0FBQUEsMEJBQ0MsS0FBS1osS0FBTCxDQUFXQyxRQUFYLGdCQUFvQixxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFwQixHQUEwQztBQUQzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBOEJIOzs7O0VBckR1QlksNENBQUssQ0FBQ0MsUzs7QUF3RGZoQix3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvV29ya3NwYWNlL1RhYlN3aXRjaC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcydcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuLi9Ub2RvTGlzdCdcbmltcG9ydCBQb21vZG9ybyBmcm9tICcuLi9Qb21vZG9ybydcbmltcG9ydCBSZWFjdCwge3NldFN0YXRlfSBmcm9tICdyZWFjdCdcblxuY29uc3QgREFUQSA9IFtdO1xuXG5jbGFzcyBUYWJTd2l0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgIHBvbW9kb3JvOmZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgU2hvd0ZuKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBvbW9kb3JvOiF0aGlzLnN0YXRlLnBvbW9kb3JvXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgXG4gICAgICBIaWRlRm4oKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcG9tb2Rvcm86ZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgXG5yZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYkJveH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLlNob3dGbigpfSBjbGFzc05hbWU9e3N0eWxlcy5wb21vZG9yb1RhYn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb21vZG9yb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5IaWRlRm4oKX0gY2xhc3NOYW1lPXtzdHlsZXMudG9kb2xpc3RUYWJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvLWRvIExpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmFja2VyVGFifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRyYWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvb2wxfT5cbiAgICAgICAgICAgICAgICAgICAgPFRvZG9MaXN0IHRhc2tzPXtEQVRBfT48L1RvZG9MaXN0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9vbDJ9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wb21vZG9ybz88UG9tb2Rvcm8+PC9Qb21vZG9ybz46bnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJTd2l0Y2g7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Workspace/TabSwitch/index.js\n");

/***/ })

})