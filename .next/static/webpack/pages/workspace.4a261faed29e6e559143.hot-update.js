webpackHotUpdate_N_E("pages/workspace",{

/***/ "./components/Workspace/TabSwitch/index.js":
/*!*************************************************!*\
  !*** ./components/Workspace/TabSwitch/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"./components/Workspace/TabSwitch/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../TodoList */ \"./components/Workspace/TodoList/index.js\");\n/* harmony import */ var _Pomodoro__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Pomodoro */ \"./components/Workspace/Pomodoro/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/anysh/UniDrive/Course/Year-2/Term-2/CS4005 - UI Design/CS4005/react/pulse/components/Workspace/TabSwitch/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar DATA = [];\n\nvar TabSwitch = /*#__PURE__*/function (_React$Component) {\n  Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(TabSwitch, _React$Component);\n\n  var _super = _createSuper(TabSwitch);\n\n  function TabSwitch(props) {\n    var _this;\n\n    Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, TabSwitch);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      pomodoro: false,\n      todolist: true\n    };\n    return _this;\n  }\n\n  Object(_Users_anysh_UniDrive_Course_Year_2_Term_2_CS4005_UI_Design_CS4005_react_pulse_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(TabSwitch, [{\n    key: \"ShowFn\",\n    value: function ShowFn() {\n      this.setState({\n        pomodoro: true\n      });\n    }\n  }, {\n    key: \"HideFn\",\n    value: function HideFn() {\n      this.setState({\n        pomodoro: false\n      });\n    }\n  }, {\n    key: \"ShowTodo\",\n    value: function ShowTodo() {\n      this.setState({\n        todolist: true\n      });\n    }\n  }, {\n    key: \"HideTodo\",\n    value: function HideTodo() {\n      this.setState({\n        todolist: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"d-flex justify-content-center text-center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.mainContainer,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"d-flex justify-content-center text-center\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.tabBox,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                onClick: function onClick() {\n                  return _this2.HideTodo();\n                },\n                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.pomodoroTab,\n                children: \"Pomodoro\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"d-flex justify-content-center\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  onClick: function onClick() {\n                    return _this2.HideFn();\n                  },\n                  className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.todolistTab,\n                  children: \"To-do List\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 51,\n                  columnNumber: 17\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 15\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.trackerTab,\n                children: \"Tracker\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 15\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 13\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.tool1,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_TodoList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                tasks: DATA\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 15\n              }, this), this.state.pomodoro ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.tool2,\n                children: this.state.pomodoro ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Pomodoro__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 40\n                }, this) : null\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 64,\n                columnNumber: 37\n              }, this) : null]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 13\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return TabSwitch;\n}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabSwitch);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Xb3Jrc3BhY2UvVGFiU3dpdGNoL2luZGV4LmpzPzdjN2QiXSwibmFtZXMiOlsiREFUQSIsIlRhYlN3aXRjaCIsInByb3BzIiwic3RhdGUiLCJwb21vZG9ybyIsInRvZG9saXN0Iiwic2V0U3RhdGUiLCJzdHlsZXMiLCJtYWluQ29udGFpbmVyIiwidGFiQm94IiwiSGlkZVRvZG8iLCJwb21vZG9yb1RhYiIsIkhpZGVGbiIsInRvZG9saXN0VGFiIiwidHJhY2tlclRhYiIsInRvb2wxIiwidG9vbDIiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxFQUFiOztJQUVNQyxTOzs7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFBRSxLQURDO0FBRVhDLGNBQVEsRUFBQztBQUZFLEtBQWI7QUFGaUI7QUFNbEI7Ozs7NkJBRVE7QUFDUCxXQUFLQyxRQUFMLENBQWM7QUFDWkYsZ0JBQVEsRUFBRTtBQURFLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsV0FBS0UsUUFBTCxDQUFjO0FBQ1pGLGdCQUFRLEVBQUU7QUFERSxPQUFkO0FBR0Q7OzsrQkFFVTtBQUNULFdBQUtFLFFBQUwsQ0FBYztBQUNaRCxnQkFBUSxFQUFFO0FBREUsT0FBZDtBQUdEOzs7K0JBRVU7QUFDVCxXQUFLQyxRQUFMLENBQWM7QUFDVkQsZ0JBQVEsRUFBRTtBQURBLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQUE7O0FBQ1AsMEJBQ0U7QUFBSyxpQkFBUyxFQUFDLDJDQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFRSx5REFBTSxDQUFDQyxhQUF2QjtBQUFBLGlDQUNFO0FBQUsscUJBQVMsRUFBQywyQ0FBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBRUQseURBQU0sQ0FBQ0UsTUFBdkI7QUFBQSxzQ0FDRTtBQUFLLHVCQUFPLEVBQUU7QUFBQSx5QkFBTSxNQUFJLENBQUNDLFFBQUwsRUFBTjtBQUFBLGlCQUFkO0FBQXFDLHlCQUFTLEVBQUVILHlEQUFNLENBQUNJLFdBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBSUU7QUFBSyx5QkFBUyxFQUFDLCtCQUFmO0FBQUEsdUNBQ0U7QUFDRSx5QkFBTyxFQUFFO0FBQUEsMkJBQU0sTUFBSSxDQUFDQyxNQUFMLEVBQU47QUFBQSxtQkFEWDtBQUVFLDJCQUFTLEVBQUVMLHlEQUFNLENBQUNNLFdBRnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFKRixlQVlFO0FBQUsseUJBQVMsRUFBRU4seURBQU0sQ0FBQ08sVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBZ0JFO0FBQUssdUJBQVMsRUFBRVAseURBQU0sQ0FBQ1EsS0FBdkI7QUFBQSxzQ0FDRSxxRUFBQyxpREFBRDtBQUFVLHFCQUFLLEVBQUVmO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFHRyxLQUFLRyxLQUFMLENBQVdDLFFBQVgsZ0JBQXFCO0FBQUsseUJBQVMsRUFBRUcseURBQU0sQ0FBQ1MsS0FBdkI7QUFBQSwwQkFDbkIsS0FBS2IsS0FBTCxDQUFXQyxRQUFYLGdCQUFzQixxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUF0QixHQUE4QztBQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFyQixHQUVPLElBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBOEJEOzs7O0VBaEVxQmEsNENBQUssQ0FBQ0MsUzs7QUFtRWZqQix3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvV29ya3NwYWNlL1RhYlN3aXRjaC9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi4vVG9kb0xpc3RcIjtcbmltcG9ydCBQb21vZG9ybyBmcm9tIFwiLi4vUG9tb2Rvcm9cIjtcbmltcG9ydCBSZWFjdCwgeyBzZXRTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBEQVRBID0gW107XG5cbmNsYXNzIFRhYlN3aXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwb21vZG9ybzogZmFsc2UsXG4gICAgICB0b2RvbGlzdDp0cnVlXG4gICAgfTtcbiAgfVxuXG4gIFNob3dGbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBvbW9kb3JvOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgSGlkZUZuKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcG9tb2Rvcm86IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgU2hvd1RvZG8oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0b2RvbGlzdDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIEhpZGVUb2RvKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0b2RvbGlzdDogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYkJveH0+XG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5IaWRlVG9kbygpfSBjbGFzc05hbWU9e3N0eWxlcy5wb21vZG9yb1RhYn0+XG4gICAgICAgICAgICAgICAgUG9tb2Rvcm9cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLkhpZGVGbigpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudG9kb2xpc3RUYWJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgVG8tZG8gTGlzdFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmFja2VyVGFifT5UcmFja2VyPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b29sMX0+XG4gICAgICAgICAgICAgIDxUb2RvTGlzdCB0YXNrcz17REFUQX0+PC9Ub2RvTGlzdD5cblxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5wb21vZG9ybyA/PGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b29sMn0+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucG9tb2Rvcm8gPyA8UG9tb2Rvcm8+PC9Qb21vZG9ybz4gOiBudWxsfVxuICAgICAgICAgICAgICA8L2Rpdj46IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYlN3aXRjaDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Workspace/TabSwitch/index.js\n");

/***/ })

})