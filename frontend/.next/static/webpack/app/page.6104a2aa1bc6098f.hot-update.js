"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Sidebar */ \"(app-client)/./components/Sidebar.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Header */ \"(app-client)/./components/Header.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Header__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Footer */ \"(app-client)/./components/Footer.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Footer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ \"(app-client)/./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/iredui.b/Desktop/frontend_cl/frontend/app/page.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-72 h-screen bg-white\"\n                    }, void 0, false, {\n                        fileName: \"/Users/iredui.b/Desktop/frontend_cl/frontend/app/page.js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen h-screen bg-white\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LineChart, {}, void 0, false, {\n                                fileName: \"/Users/iredui.b/Desktop/frontend_cl/frontend/app/page.js\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PieChart, {}, void 0, false, {\n                                fileName: \"/Users/iredui.b/Desktop/frontend_cl/frontend/app/page.js\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/iredui.b/Desktop/frontend_cl/frontend/app/page.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/iredui.b/Desktop/frontend_cl/frontend/app/page.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nconst LineChart = ()=>{\n    _s1();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let ctx = document.getElementById(\"myLineChart\").getContext(\"2d\");\n        let myChart = new chart_js__WEBPACK_IMPORTED_MODULE_5__.Chart(ctx, {\n            type: \"line\",\n            data: {\n                labels: [\n                    \"Sunday\",\n                    \"Monday\",\n                    \"Tuesday\",\n                    \"Wednesday\",\n                    \"Thursday\",\n                    \"Friday\",\n                    \"Saturday\"\n                ],\n                datasets: [\n                    {\n                        data: [\n                            86,\n                            114,\n                            106,\n                            106,\n                            107,\n                            111,\n                            133\n                        ],\n                        label: \"Applied\",\n                        borderColor: \"#3e95cd\",\n                        backgroundColor: \"#7bb6dd\",\n                        fill: false\n                    },\n                    {\n                        data: [\n                            70,\n                            90,\n                            44,\n                            60,\n                            83,\n                            90,\n                            100\n                        ],\n                        label: \"Accepted\",\n                        borderColor: \"#3cba9f\",\n                        backgroundColor: \"#71d1bd\",\n                        fill: false\n                    },\n                    {\n                        data: [\n                            10,\n                            21,\n                            60,\n                            44,\n                            17,\n                            21,\n                            17\n                        ],\n                        label: \"Pending\",\n                        borderColor: \"#ffa500\",\n                        backgroundColor: \"#ffc04d\",\n                        fill: false\n                    },\n                    {\n                        data: [\n                            6,\n                            3,\n                            2,\n                            2,\n                            7,\n                            0,\n                            16\n                        ],\n                        label: \"Rejected\",\n                        borderColor: \"#c45850\",\n                        backgroundColor: \"#d78f89\",\n                        fill: false\n                    }\n                ]\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-2/3 h-auto flex mx-auto my-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                    id: \"myLineChart\"\n                }, void 0, false, {\n                    fileName: \"/Users/iredui.b/Desktop/frontend_cl/frontend/app/page.js\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/iredui.b/Desktop/frontend_cl/frontend/app/page.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/iredui.b/Desktop/frontend_cl/frontend/app/page.js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s1(LineChart, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c1 = LineChart;\nconst PieChart = ()=>{\n    _s2();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let ctx = document.getElementById(\"myPieChart\").getContext(\"2d\");\n        let myChart = new chart_js__WEBPACK_IMPORTED_MODULE_5__.Chart(ctx, {\n            type: \"pie\",\n            data: {\n                labels: [\n                    \"Red\",\n                    \"Blue\",\n                    \"Yellow\"\n                ],\n                datasets: [\n                    {\n                        data: [\n                            300,\n                            50,\n                            100\n                        ],\n                        backgroundColor: [\n                            \"#FF6384\",\n                            \"#36A2EB\",\n                            \"#FFCE56\"\n                        ],\n                        hoverBackgroundColor: [\n                            \"#FF6384\",\n                            \"#36A2EB\",\n                            \"#FFCE56\"\n                        ]\n                    }\n                ]\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-2/3 h-auto flex mx-auto my-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                        id: \"myPieChart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/iredui.b/Desktop/frontend_cl/frontend/app/page.js\",\n                        lineNumber: 107,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/iredui.b/Desktop/frontend_cl/frontend/app/page.js\",\n                    lineNumber: 106,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/iredui.b/Desktop/frontend_cl/frontend/app/page.js\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/iredui.b/Desktop/frontend_cl/frontend/app/page.js\",\n            lineNumber: 104,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s2(PieChart, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c2 = PieChart;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"LineChart\");\n$RefreshReg$(_c2, \"PieChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3BhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUUwQjtBQUNpQjtBQUNGO0FBQ0E7QUFDUDtBQUNEO0FBRWxCLFNBQVNNOztJQUN0QkYsZ0RBQVNBLENBQUMsS0FBTztJQUNqQixxQkFDRTs7MEJBQ0UsOERBQUNILDJEQUFPQTs7Ozs7MEJBQ1IsOERBQUNNO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDQzs7Ozs7MENBQ0QsOERBQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS1g7R0Fkd0JKO0tBQUFBO0FBZ0J4QixNQUFNRyxZQUFZOztJQUNoQkwsZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxNQUFNQyxTQUFTQyxlQUFlLGVBQWVDLFdBQVc7UUFDNUQsSUFBSUMsVUFBVSxJQUFJViwyQ0FBS0EsQ0FBQ00sS0FBSztZQUMzQkssTUFBTTtZQUNOQyxNQUFNO2dCQUNKQyxRQUFRO29CQUNOO29CQUNBO29CQUNBO29CQUNBO29CQUNBO29CQUNBO29CQUNBO2lCQUNEO2dCQUNEQyxVQUFVO29CQUNSO3dCQUNFRixNQUFNOzRCQUFDOzRCQUFJOzRCQUFLOzRCQUFLOzRCQUFLOzRCQUFLOzRCQUFLO3lCQUFJO3dCQUN4Q0csT0FBTzt3QkFDUEMsYUFBYTt3QkFDYkMsaUJBQWlCO3dCQUNqQkMsTUFBTTtvQkFDUjtvQkFDQTt3QkFDRU4sTUFBTTs0QkFBQzs0QkFBSTs0QkFBSTs0QkFBSTs0QkFBSTs0QkFBSTs0QkFBSTt5QkFBSTt3QkFDbkNHLE9BQU87d0JBQ1BDLGFBQWE7d0JBQ2JDLGlCQUFpQjt3QkFDakJDLE1BQU07b0JBQ1I7b0JBQ0E7d0JBQ0VOLE1BQU07NEJBQUM7NEJBQUk7NEJBQUk7NEJBQUk7NEJBQUk7NEJBQUk7NEJBQUk7eUJBQUc7d0JBQ2xDRyxPQUFPO3dCQUNQQyxhQUFhO3dCQUNiQyxpQkFBaUI7d0JBQ2pCQyxNQUFNO29CQUNSO29CQUNBO3dCQUNFTixNQUFNOzRCQUFDOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHOzRCQUFHO3lCQUFHO3dCQUM1QkcsT0FBTzt3QkFDUEMsYUFBYTt3QkFDYkMsaUJBQWlCO3dCQUNqQkMsTUFBTTtvQkFDUjtpQkFDRDtZQUNIO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRTtrQkFDRSw0RUFBQ2hCO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDZ0I7b0JBQU9DLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0lBekRNaEI7TUFBQUE7QUEyRE4sTUFBTUMsV0FBVzs7SUFDZk4sZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxNQUFNQyxTQUFTQyxlQUFlLGNBQWNDLFdBQVc7UUFDM0QsSUFBSUMsVUFBVSxJQUFJViwyQ0FBS0EsQ0FBQ00sS0FBSztZQUMzQkssTUFBTTtZQUNOQyxNQUFNO2dCQUNKQyxRQUFRO29CQUFDO29CQUFPO29CQUFRO2lCQUFTO2dCQUNqQ0MsVUFBVTtvQkFDUjt3QkFDRUYsTUFBTTs0QkFBQzs0QkFBSzs0QkFBSTt5QkFBSTt3QkFDcEJLLGlCQUFpQjs0QkFBQzs0QkFBVzs0QkFBVzt5QkFBVTt3QkFDbERJLHNCQUFzQjs0QkFBQzs0QkFBVzs0QkFBVzt5QkFBVTtvQkFDekQ7aUJBQ0Q7WUFDSDtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0U7a0JBQ0UsNEVBQUNuQjtzQkFDQyw0RUFBQ0E7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDZ0I7d0JBQU9DLElBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkI7SUE1Qk1mO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCJAL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGFydCB9IGZyb20gXCJjaGFydC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge30pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2lkZWJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy03MiBoLXNjcmVlbiBiZy13aGl0ZVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGJnLXdoaXRlXCI+XG4gICAgICAgICAgPExpbmVDaGFydCAvPlxuICAgICAgICAgIDxQaWVDaGFydCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuXG5jb25zdCBMaW5lQ2hhcnQgPSAoKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibXlMaW5lQ2hhcnRcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgdHlwZTogXCJsaW5lXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogW1xuICAgICAgICAgIFwiU3VuZGF5XCIsXG4gICAgICAgICAgXCJNb25kYXlcIixcbiAgICAgICAgICBcIlR1ZXNkYXlcIixcbiAgICAgICAgICBcIldlZG5lc2RheVwiLFxuICAgICAgICAgIFwiVGh1cnNkYXlcIixcbiAgICAgICAgICBcIkZyaWRheVwiLFxuICAgICAgICAgIFwiU2F0dXJkYXlcIixcbiAgICAgICAgXSxcbiAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhOiBbODYsIDExNCwgMTA2LCAxMDYsIDEwNywgMTExLCAxMzNdLFxuICAgICAgICAgICAgbGFiZWw6IFwiQXBwbGllZFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzNlOTVjZFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM3YmI2ZGRcIixcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YTogWzcwLCA5MCwgNDQsIDYwLCA4MywgOTAsIDEwMF0sXG4gICAgICAgICAgICBsYWJlbDogXCJBY2NlcHRlZFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzNjYmE5ZlwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM3MWQxYmRcIixcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YTogWzEwLCAyMSwgNjAsIDQ0LCAxNywgMjEsIDE3XSxcbiAgICAgICAgICAgIGxhYmVsOiBcIlBlbmRpbmdcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiNmZmE1MDBcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZjMDRkXCIsXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGE6IFs2LCAzLCAyLCAyLCA3LCAwLCAxNl0sXG4gICAgICAgICAgICBsYWJlbDogXCJSZWplY3RlZFwiLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2M0NTg1MFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNkNzhmODlcIixcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgaC1hdXRvIGZsZXggbXgtYXV0byBteS1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBwdC0wIHJvdW5kZWQteGwgIHctZnVsbCBoLWZpdCBteS1hdXRvICBzaGFkb3cteGxcIj5cbiAgICAgICAgICA8Y2FudmFzIGlkPVwibXlMaW5lQ2hhcnRcIj48L2NhbnZhcz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFBpZUNoYXJ0ID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15UGllQ2hhcnRcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCBteUNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xuICAgICAgdHlwZTogXCJwaWVcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBbXCJSZWRcIiwgXCJCbHVlXCIsIFwiWWVsbG93XCJdLFxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGE6IFszMDAsIDUwLCAxMDBdLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXCIjRkY2Mzg0XCIsIFwiIzM2QTJFQlwiLCBcIiNGRkNFNTZcIl0sXG4gICAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogW1wiI0ZGNjM4NFwiLCBcIiMzNkEyRUJcIiwgXCIjRkZDRTU2XCJdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgaC1hdXRvIGZsZXggbXgtYXV0byBteS1hdXRvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB0LTAgcm91bmRlZC14bCAgdy1mdWxsIGgtZml0IG15LWF1dG8gIHNoYWRvdy14bFwiPlxuICAgICAgICAgICAgPGNhbnZhcyBpZD1cIm15UGllQ2hhcnRcIj48L2NhbnZhcz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTaWRlYmFyIiwiSGVhZGVyIiwiRm9vdGVyIiwidXNlRWZmZWN0IiwiQ2hhcnQiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwiTGluZUNoYXJ0IiwiUGllQ2hhcnQiLCJjdHgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsIm15Q2hhcnQiLCJ0eXBlIiwiZGF0YSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsImZpbGwiLCJjYW52YXMiLCJpZCIsImhvdmVyQmFja2dyb3VuZENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});