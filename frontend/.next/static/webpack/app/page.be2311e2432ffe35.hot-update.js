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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"(app-client)/./node_modules/chart.js/dist/Chart.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction Home() {\n    let cards = [\n        {\n            bg: \"primary\"\n        },\n        {\n            bg: \"primary\"\n        },\n        {\n            bg: \"primary\"\n        },\n        {\n            bg: \"primary\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LineChart, {}, void 0, false, {\n                fileName: \"/Users/buyanaa/Desktop/frontend_cl/frontend/app/page.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PieChart, {}, void 0, false, {\n                fileName: \"/Users/buyanaa/Desktop/frontend_cl/frontend/app/page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: cards.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-40 h-32\",\n                        style: {\n                            backgroundColor: row\n                        }\n                    }, index, false, {\n                        fileName: \"/Users/buyanaa/Desktop/frontend_cl/frontend/app/page.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/buyanaa/Desktop/frontend_cl/frontend/app/page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/buyanaa/Desktop/frontend_cl/frontend/app/page.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nconst LineChart = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let ctx = document.getElementById(\"myLineChart\").getContext(\"2d\");\n        let myChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(ctx, {\n            type: \"line\",\n            data: {\n                labels: [\n                    \"Sunday\",\n                    \"Monday\",\n                    \"Tuesday\",\n                    \"Wednesday\",\n                    \"Thursday\",\n                    \"Friday\",\n                    \"Saturday\"\n                ],\n                datasets: [\n                    {\n                        data: [\n                            86,\n                            114,\n                            106,\n                            106,\n                            107,\n                            111,\n                            133\n                        ],\n                        label: \"Applied\",\n                        borderColor: \"#3e95cd\",\n                        backgroundColor: \"#7bb6dd\",\n                        fill: false\n                    },\n                    {\n                        data: [\n                            70,\n                            90,\n                            44,\n                            60,\n                            83,\n                            90,\n                            100\n                        ],\n                        label: \"Accepted\",\n                        borderColor: \"#3cba9f\",\n                        backgroundColor: \"#71d1bd\",\n                        fill: false\n                    },\n                    {\n                        data: [\n                            10,\n                            21,\n                            60,\n                            44,\n                            17,\n                            21,\n                            17\n                        ],\n                        label: \"Pending\",\n                        borderColor: \"#ffa500\",\n                        backgroundColor: \"#ffc04d\",\n                        fill: false\n                    },\n                    {\n                        data: [\n                            6,\n                            3,\n                            2,\n                            2,\n                            7,\n                            0,\n                            16\n                        ],\n                        label: \"Rejected\",\n                        borderColor: \"#c45850\",\n                        backgroundColor: \"#d78f89\",\n                        fill: false\n                    }\n                ]\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-2/3 h-auto flex mx-auto my-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                    id: \"myLineChart\"\n                }, void 0, false, {\n                    fileName: \"/Users/buyanaa/Desktop/frontend_cl/frontend/app/page.js\",\n                    lineNumber: 78,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/buyanaa/Desktop/frontend_cl/frontend/app/page.js\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/buyanaa/Desktop/frontend_cl/frontend/app/page.js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(LineChart, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c1 = LineChart;\nconst PieChart = ()=>{\n    _s1();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let ctx = document.getElementById(\"myPieChart\").getContext(\"2d\");\n        let myChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(ctx, {\n            type: \"pie\",\n            data: {\n                labels: [\n                    \"Red\",\n                    \"Blue\",\n                    \"Yellow\"\n                ],\n                datasets: [\n                    {\n                        data: [\n                            300,\n                            50,\n                            100\n                        ],\n                        backgroundColor: [\n                            \"#FF6384\",\n                            \"#36A2EB\",\n                            \"#FFCE56\"\n                        ],\n                        hoverBackgroundColor: [\n                            \"#FF6384\",\n                            \"#36A2EB\",\n                            \"#FFCE56\"\n                        ]\n                    }\n                ]\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-2/3 h-auto flex mx-auto my-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                        id: \"myPieChart\"\n                    }, void 0, false, {\n                        fileName: \"/Users/buyanaa/Desktop/frontend_cl/frontend/app/page.js\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/buyanaa/Desktop/frontend_cl/frontend/app/page.js\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/buyanaa/Desktop/frontend_cl/frontend/app/page.js\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/buyanaa/Desktop/frontend_cl/frontend/app/page.js\",\n            lineNumber: 114,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s1(PieChart, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c2 = PieChart;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c1, \"LineChart\");\n$RefreshReg$(_c2, \"PieChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cz9iZTY3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGFydCB9IGZyb20gXCJjaGFydC5qc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGxldCBjYXJkcyA9IFtcbiAgICB7XG4gICAgICBiZzogXCJwcmltYXJ5XCJcbiAgICB9LFxuICAgICAgICB7XG4gICAgICBiZzogXCJwcmltYXJ5XCJcbiAgICB9LFxuICAgICAgICB7XG4gICAgICBiZzogXCJwcmltYXJ5XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGJnOiBcInByaW1hcnlcIlxuICAgIH1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cbiAgICAgIDxMaW5lQ2hhcnQgLz5cbiAgICAgIDxQaWVDaGFydCAvPlxuICAgICAgPGRpdj5cbiAgICAgICAge2NhcmRzLm1hcCgocm93LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00MCBoLTMyXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IHJvd319IGtleT17aW5kZXh9PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IExpbmVDaGFydCA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TGluZUNoYXJ0JykuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBsZXQgbXlDaGFydCA9IG5ldyBDaGFydChjdHgsIHtcbiAgICAgIHR5cGU6ICdsaW5lJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUdWVzZGF5XCIsIFwiV2VkbmVzZGF5XCIsIFwiVGh1cnNkYXlcIiwgXCJGcmlkYXlcIiwgXCJTYXR1cmRheVwiXSxcbiAgICAgICAgZGF0YXNldHM6IFt7XG4gICAgICAgICAgZGF0YTogWzg2LCAxMTQsIDEwNiwgMTA2LCAxMDcsIDExMSwgMTMzXSxcbiAgICAgICAgICBsYWJlbDogXCJBcHBsaWVkXCIsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwiIzNlOTVjZFwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjN2JiNmRkXCIsXG4gICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkYXRhOiBbNzAsIDkwLCA0NCwgNjAsIDgzLCA5MCwgMTAwXSxcbiAgICAgICAgICBsYWJlbDogXCJBY2NlcHRlZFwiLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiBcIiMzY2JhOWZcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzcxZDFiZFwiLFxuICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGF0YTogWzEwLCAyMSwgNjAsIDQ0LCAxNywgMjEsIDE3XSxcbiAgICAgICAgICBsYWJlbDogXCJQZW5kaW5nXCIsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2ZmYTUwMFwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZjMDRkXCIsXG4gICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkYXRhOiBbNiwgMywgMiwgMiwgNywgMCwgMTZdLFxuICAgICAgICAgIGxhYmVsOiBcIlJlamVjdGVkXCIsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IFwiI2M0NTg1MFwiLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZDc4Zjg5XCIsXG4gICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICB9KTtcbiAgfSwgW10pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzMgaC1hdXRvIGZsZXggbXgtYXV0byBteS1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3JkZXIgYm9yZGVyLWdyYXktNDAwIHB0LTAgcm91bmRlZC14bCAgdy1mdWxsIGgtZml0IG15LWF1dG8gIHNoYWRvdy14bCc+XG4gICAgICAgICAgPGNhbnZhcyBpZD0nbXlMaW5lQ2hhcnQnPjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IFBpZUNoYXJ0ID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlQaWVDaGFydCcpLmdldENvbnRleHQoJzJkJyk7XG4gICAgbGV0IG15Q2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XG4gICAgICB0eXBlOiAncGllJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbGFiZWxzOiBbXG4gICAgICAgICAgJ1JlZCcsXG4gICAgICAgICAgJ0JsdWUnLFxuICAgICAgICAgICdZZWxsb3cnXG4gICAgICAgIF0sXG4gICAgICAgIGRhdGFzZXRzOiBbe1xuICAgICAgICAgIGRhdGE6IFszMDAsIDUwLCAxMDBdLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICcjRkY2Mzg0JyxcbiAgICAgICAgICAnIzM2QTJFQicsXG4gICAgICAgICAgJyNGRkNFNTYnXG4gICAgICAgICAgXSxcbiAgICAgICAgICBob3ZlckJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICcjRkY2Mzg0JyxcbiAgICAgICAgICAnIzM2QTJFQicsXG4gICAgICAgICAgJyNGRkNFNTYnXG4gICAgICAgICAgXVxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICB9KTtcbiAgfSwgW10pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIGgtYXV0byBmbGV4IG14LWF1dG8gbXktYXV0b1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBwdC0wIHJvdW5kZWQteGwgIHctZnVsbCBoLWZpdCBteS1hdXRvICBzaGFkb3cteGwnPlxuICAgICAgICAgIDxjYW52YXMgaWQ9J215UGllQ2hhcnQnPjwvY2FudmFzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDaGFydCIsIkhvbWUiLCJjYXJkcyIsImJnIiwiZGl2IiwiY2xhc3NOYW1lIiwiTGluZUNoYXJ0IiwiUGllQ2hhcnQiLCJtYXAiLCJyb3ciLCJpbmRleCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY3R4IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJteUNoYXJ0IiwidHlwZSIsImRhdGEiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImxhYmVsIiwiYm9yZGVyQ29sb3IiLCJmaWxsIiwiY2FudmFzIiwiaWQiLCJob3ZlckJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});