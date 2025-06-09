/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/homePage */ \"./src/pages/homePage.js\");\n/* harmony import */ var _pages_menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menuPage */ \"./src/pages/menuPage.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router.js\");\n\r\n\r\n\r\n\r\n\r\nconst load = () => {\r\n    const rootElement = document.querySelector('#root');\r\n    const router = new _router__WEBPACK_IMPORTED_MODULE_2__.Router(rootElement);\r\n}\r\n\r\n\r\n\r\nload();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE0QztBQUNBO0FBQ1Y7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMkNBQU07QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSBcIi4vcGFnZXMvaG9tZVBhZ2VcIjtcclxuaW1wb3J0IHsgTWVudVBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9tZW51UGFnZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiLi9yb3V0ZXJcIjtcclxuXHJcblxyXG5jb25zdCBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpO1xyXG4gICAgY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcihyb290RWxlbWVudCk7XHJcbn1cclxuXHJcblxyXG5cclxubG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/pages/aboutPage.js":
/*!********************************!*\
  !*** ./src/pages/aboutPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AboutPage: () => (/* binding */ AboutPage)\n/* harmony export */ });\nclass AboutPage {\r\n    #rootElement;\r\n    #titleElement;\r\n\r\n    constructor(rootElement = document.querySelector('#root')) {\r\n        this.#rootElement = rootElement;\r\n    }\r\n\r\n    #createElements() {\r\n        this.#titleElement = document.createElement('h1');\r\n        this.#titleElement.innerHTML = 'About Page';\r\n    }\r\n    \r\n    loadPage() {\r\n        this.#rootElement.innerHTML = '';\r\n        this.#createElements();\r\n        this.#rootElement.appendChild(this.#titleElement);\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWJvdXRQYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlcy9hYm91dFBhZ2UuanM/MDljMyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQWJvdXRQYWdlIHtcclxuICAgICNyb290RWxlbWVudDtcclxuICAgICN0aXRsZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3Iocm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpKSB7XHJcbiAgICAgICAgdGhpcy4jcm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAjY3JlYXRlRWxlbWVudHMoKSB7XHJcbiAgICAgICAgdGhpcy4jdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICB0aGlzLiN0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gJ0Fib3V0IFBhZ2UnO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsb2FkUGFnZSgpIHtcclxuICAgICAgICB0aGlzLiNyb290RWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0aGlzLiNjcmVhdGVFbGVtZW50cygpO1xyXG4gICAgICAgIHRoaXMuI3Jvb3RFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuI3RpdGxlRWxlbWVudCk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/aboutPage.js\n");

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HomePage: () => (/* binding */ HomePage)\n/* harmony export */ });\nclass HomePage {\r\n    #rootElement;\r\n    #titleElement;\r\n    #paragraphElement;\r\n    #pictureElement;\r\n    constructor(rootElement = document.querySelector('#root')) {\r\n        this.#rootElement = rootElement;\r\n    }\r\n\r\n    #createElements() {\r\n        this.#titleElement = document.createElement('h1');\r\n        this.#titleElement.innerHTML = 'Amo Restaurant';\r\n        this.#paragraphElement = document.createElement('p');\r\n        this.#paragraphElement.innerHTML = `\r\n            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi facilis consequatur aliquid enim illum architecto quos blanditiis libero cupiditate non! Voluptates laborum accusamus minus nisi quisquam, pariatur iste autem atque.\r\n            Adipisci id ad quidem neque in fugiat accusantium optio deleniti libero repellat sint doloremque magni, sapiente possimus. Quae atque totam magnam! Nisi minima dolorem consequatur sunt possimus, perspiciatis iusto expedita.\r\n            Exercitationem molestiae est ad asperiores. Magnam sunt sapiente totam, illo quod eveniet quia blanditiis accusamus laudantium error cumque sequi, similique quo! Dignissimos reprehenderit necessitatibus, assumenda nisi nam odit itaque corporis?\r\n        `;\r\n        this.#pictureElement = document.createElement('img');\r\n        this.#pictureElement.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg';\r\n\r\n    }\r\n\r\n    loadPage() {\r\n        this.#rootElement.innerHTML = '';\r\n        this.#createElements();\r\n        this.#rootElement.appendChild(this.#titleElement);\r\n        this.#rootElement.appendChild(this.#paragraphElement);\r\n        this.#rootElement.appendChild(this.#pictureElement);\r\n    } \r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZVBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL2hvbWVQYWdlLmpzPzU2MjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhvbWVQYWdlIHtcclxuICAgICNyb290RWxlbWVudDtcclxuICAgICN0aXRsZUVsZW1lbnQ7XHJcbiAgICAjcGFyYWdyYXBoRWxlbWVudDtcclxuICAgICNwaWN0dXJlRWxlbWVudDtcclxuICAgIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb3QnKSkge1xyXG4gICAgICAgIHRoaXMuI3Jvb3RFbGVtZW50ID0gcm9vdEVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgI2NyZWF0ZUVsZW1lbnRzKCkge1xyXG4gICAgICAgIHRoaXMuI3RpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICAgICAgdGhpcy4jdGl0bGVFbGVtZW50LmlubmVySFRNTCA9ICdBbW8gUmVzdGF1cmFudCc7XHJcbiAgICAgICAgdGhpcy4jcGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0aGlzLiNwYXJhZ3JhcGhFbGVtZW50LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIsIGFkaXBpc2ljaW5nIGVsaXQuIFNlcXVpIGZhY2lsaXMgY29uc2VxdWF0dXIgYWxpcXVpZCBlbmltIGlsbHVtIGFyY2hpdGVjdG8gcXVvcyBibGFuZGl0aWlzIGxpYmVybyBjdXBpZGl0YXRlIG5vbiEgVm9sdXB0YXRlcyBsYWJvcnVtIGFjY3VzYW11cyBtaW51cyBuaXNpIHF1aXNxdWFtLCBwYXJpYXR1ciBpc3RlIGF1dGVtIGF0cXVlLlxyXG4gICAgICAgICAgICBBZGlwaXNjaSBpZCBhZCBxdWlkZW0gbmVxdWUgaW4gZnVnaWF0IGFjY3VzYW50aXVtIG9wdGlvIGRlbGVuaXRpIGxpYmVybyByZXBlbGxhdCBzaW50IGRvbG9yZW1xdWUgbWFnbmksIHNhcGllbnRlIHBvc3NpbXVzLiBRdWFlIGF0cXVlIHRvdGFtIG1hZ25hbSEgTmlzaSBtaW5pbWEgZG9sb3JlbSBjb25zZXF1YXR1ciBzdW50IHBvc3NpbXVzLCBwZXJzcGljaWF0aXMgaXVzdG8gZXhwZWRpdGEuXHJcbiAgICAgICAgICAgIEV4ZXJjaXRhdGlvbmVtIG1vbGVzdGlhZSBlc3QgYWQgYXNwZXJpb3Jlcy4gTWFnbmFtIHN1bnQgc2FwaWVudGUgdG90YW0sIGlsbG8gcXVvZCBldmVuaWV0IHF1aWEgYmxhbmRpdGlpcyBhY2N1c2FtdXMgbGF1ZGFudGl1bSBlcnJvciBjdW1xdWUgc2VxdWksIHNpbWlsaXF1ZSBxdW8hIERpZ25pc3NpbW9zIHJlcHJlaGVuZGVyaXQgbmVjZXNzaXRhdGlidXMsIGFzc3VtZW5kYSBuaXNpIG5hbSBvZGl0IGl0YXF1ZSBjb3Jwb3Jpcz9cclxuICAgICAgICBgO1xyXG4gICAgICAgIHRoaXMuI3BpY3R1cmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgdGhpcy4jcGljdHVyZUVsZW1lbnQuc3JjID0gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvNi82ZC9Hb29kX0Zvb2RfRGlzcGxheV8tX05DSV9WaXN1YWxzX09ubGluZS5qcGcvMTIwMHB4LUdvb2RfRm9vZF9EaXNwbGF5Xy1fTkNJX1Zpc3VhbHNfT25saW5lLmpwZyc7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMuI3Jvb3RFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuI2NyZWF0ZUVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy4jcm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4jdGl0bGVFbGVtZW50KTtcclxuICAgICAgICB0aGlzLiNyb290RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiNwYXJhZ3JhcGhFbGVtZW50KTtcclxuICAgICAgICB0aGlzLiNyb290RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiNwaWN0dXJlRWxlbWVudCk7XHJcbiAgICB9IFxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/homePage.js\n");

/***/ }),

/***/ "./src/pages/menuPage.js":
/*!*******************************!*\
  !*** ./src/pages/menuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuPage: () => (/* binding */ MenuPage)\n/* harmony export */ });\nclass MenuPage {\r\n    #rootElement;\r\n    #titleElement;\r\n\r\n    constructor(rootElement = document.querySelector('#root')) {\r\n        this.#rootElement = rootElement;\r\n    }\r\n\r\n    #createElements() {\r\n        this.#titleElement = document.createElement('h1');\r\n        this.#titleElement.innerHTML = 'Menu Page';\r\n    }\r\n    \r\n    loadPage() {\r\n        this.#rootElement.innerHTML = '';\r\n        this.#createElements();\r\n        this.#rootElement.appendChild(this.#titleElement);\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVudVBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VzL21lbnVQYWdlLmpzPzcxMGEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE1lbnVQYWdlIHtcclxuICAgICNyb290RWxlbWVudDtcclxuICAgICN0aXRsZUVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3Iocm9vdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpKSB7XHJcbiAgICAgICAgdGhpcy4jcm9vdEVsZW1lbnQgPSByb290RWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAjY3JlYXRlRWxlbWVudHMoKSB7XHJcbiAgICAgICAgdGhpcy4jdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICB0aGlzLiN0aXRsZUVsZW1lbnQuaW5uZXJIVE1MID0gJ01lbnUgUGFnZSc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxvYWRQYWdlKCkge1xyXG4gICAgICAgIHRoaXMuI3Jvb3RFbGVtZW50LmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRoaXMuI2NyZWF0ZUVsZW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy4jcm9vdEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4jdGl0bGVFbGVtZW50KTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/menuPage.js\n");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Router: () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _pages_aboutPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/aboutPage */ \"./src/pages/aboutPage.js\");\n/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/homePage */ \"./src/pages/homePage.js\");\n/* harmony import */ var _pages_menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menuPage */ \"./src/pages/menuPage.js\");\n\r\n\r\n\r\n\r\nclass Router {\r\n    #routerElement;\r\n    #homePage;\r\n    #menuPage;\r\n    #aboutPage;\r\n    constructor(rootElement) {\r\n        this.#homePage = new _pages_homePage__WEBPACK_IMPORTED_MODULE_1__.HomePage(rootElement);\r\n        this.#homePage.loadPage();\r\n        this.#menuPage = new _pages_menuPage__WEBPACK_IMPORTED_MODULE_2__.MenuPage(rootElement);\r\n        this.#aboutPage = new _pages_aboutPage__WEBPACK_IMPORTED_MODULE_0__.AboutPage(rootElement);\r\n        this.#routerElement = document.querySelector('#router');\r\n        this.#initializeRoutesEvents();\r\n    }\r\n\r\n    #initializeRoutesEvents() {\r\n        this.#routerElement.childNodes.forEach((route) => {\r\n            route.addEventListener('click', () => {\r\n                if (route.id == 'home-page') {\r\n                    this.#homePage.loadPage();\r\n                } else if (route.id == 'menu-page') {\r\n                    this.#menuPage.loadPage();\r\n                } else if (route.id == 'about-page') {\r\n                    this.#aboutPage.loadPage();\r\n                }\r\n            });\r\n        });\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFDRjtBQUNBO0FBQzVDO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHFEQUFRO0FBQ3JDO0FBQ0EsNkJBQTZCLHFEQUFRO0FBQ3JDLDhCQUE4Qix1REFBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9yb3V0ZXIuanM/NDFjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYm91dFBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9hYm91dFBhZ2VcIjtcclxuaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tIFwiLi9wYWdlcy9ob21lUGFnZVwiO1xyXG5pbXBvcnQgeyBNZW51UGFnZSB9IGZyb20gXCIuL3BhZ2VzL21lbnVQYWdlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUm91dGVyIHtcclxuICAgICNyb3V0ZXJFbGVtZW50O1xyXG4gICAgI2hvbWVQYWdlO1xyXG4gICAgI21lbnVQYWdlO1xyXG4gICAgI2Fib3V0UGFnZTtcclxuICAgIGNvbnN0cnVjdG9yKHJvb3RFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy4jaG9tZVBhZ2UgPSBuZXcgSG9tZVBhZ2Uocm9vdEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuI2hvbWVQYWdlLmxvYWRQYWdlKCk7XHJcbiAgICAgICAgdGhpcy4jbWVudVBhZ2UgPSBuZXcgTWVudVBhZ2Uocm9vdEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuI2Fib3V0UGFnZSA9IG5ldyBBYm91dFBhZ2Uocm9vdEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuI3JvdXRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm91dGVyJyk7XHJcbiAgICAgICAgdGhpcy4jaW5pdGlhbGl6ZVJvdXRlc0V2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgICNpbml0aWFsaXplUm91dGVzRXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMuI3JvdXRlckVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChyb3V0ZSkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3V0ZS5pZCA9PSAnaG9tZS1wYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2hvbWVQYWdlLmxvYWRQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJvdXRlLmlkID09ICdtZW51LXBhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jbWVudVBhZ2UubG9hZFBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocm91dGUuaWQgPT0gJ2Fib3V0LXBhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jYWJvdXRQYWdlLmxvYWRQYWdlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/router.js\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;