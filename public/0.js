(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/HomeView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/HomeView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layout_HomePage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout/HomePage.vue */ "./resources/js/components/layout/HomePage.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    HomePage: _components_layout_HomePage_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Featured_Products.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/Featured_Products.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "featured-products",
  props: ["bar_wrap"],
  data: function data() {
    return {
      tabs: null,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/HomePage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Featured_Products_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Featured_Products.vue */ "./resources/js/components/layout/Featured_Products.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Featured_Products: _Featured_Products_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  name: "HomeComponent",
  data: function data() {
    return {
      slick: {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
      },
      bar_wrap: ["Men", "Women", "gadgets", "accessories"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/HomeView.vue?vue&type=template&id=35972a63&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Views/HomeView.vue?vue&type=template&id=35972a63& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("HomePage");
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Featured_Products.vue?vue&type=template&id=5aa8fc0a&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/Featured_Products.vue?vue&type=template&id=5aa8fc0a&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "feature-product__wrap section__gap title__gap"
  }, [_c("v-container", [_c("div", {
    staticClass: "section__gap-title"
  }, [_c("h2", {
    staticClass: "text-center font-weight-bold"
  }, [_vm._v("Featured Products")])]), _vm._v(" "), _c("div", {
    staticClass: "tab-bar__wrap text-center flex-column"
  }, [_c("div", {
    staticClass: "py-5"
  }, [_c("v-tabs", {
    attrs: {
      "fixed-tabs": ""
    },
    model: {
      value: _vm.tabs,
      callback: function callback($$v) {
        _vm.tabs = $$v;
      },
      expression: "tabs"
    }
  }, [_c("v-tabs-slider"), _vm._v(" "), _vm._l(_vm.bar_wrap, function (val, index) {
    return _c("v-tab", {
      key: index,
      attrs: {
        href: "#mobile-tabs-5-" + (index + 1)
      }
    }, [_c("v-btn", {
      staticClass: "d-inline-block"
    }, [_vm._v("\n                            " + _vm._s(val) + "\n                        ")])], 1);
  })], 2)], 1), _vm._v(" "), _c("div", [_c("v-tabs-items", {
    model: {
      value: _vm.tabs,
      callback: function callback($$v) {
        _vm.tabs = $$v;
      },
      expression: "tabs"
    }
  }, _vm._l(4, function (i) {
    return _c("v-tab-item", {
      key: i,
      attrs: {
        value: "mobile-tabs-5-" + i
      }
    }, [_c("v-card", {
      attrs: {
        flat: ""
      }
    }, [_c("v-card-text", {
      domProps: {
        textContent: _vm._s(_vm.text)
      }
    })], 1)], 1);
  }), 1)], 1)])])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=template&id=38c05078&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/HomePage.vue?vue&type=template&id=38c05078&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("div", {
    staticClass: "banner"
  }, [_c("v-container", {
    staticClass: "grid-list-xl"
  }, [_c("v-row", {
    staticClass: "wrap layout"
  }, [_c("v-col", {
    attrs: {
      xs: "12",
      sm: "12",
      md: "12",
      xl: "8",
      lg: "8"
    }
  }, [_c("div", {
    staticClass: "home-banner-wrap"
  }, [_c("SlickCarousel", _vm._b({}, "SlickCarousel", _vm.slick, false), [_c("div", [_c("div", {
    staticClass: "d-inline-block w-100"
  }, [_c("div", {
    staticClass: "banner__slide"
  }, [_c("router-link", {
    attrs: {
      to: "#"
    }
  }, [_c("v-img", {
    attrs: {
      src: "images/data/slider-1.jpg",
      "lazy-src": "images/data/slider-1.jpg"
    }
  })], 1)], 1)])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-inline-block w-100"
  }, [_c("div", {
    staticClass: "banner__slide"
  }, [_c("router-link", {
    attrs: {
      to: "#"
    }
  }, [_c("v-img", {
    attrs: {
      src: "images/data/slider-3.jpg",
      "lazy-src": "images/data/slider-3.jpg"
    }
  })], 1)], 1)])])])], 1)]), _vm._v(" "), _c("v-col", {
    attrs: {
      xs: "12",
      sm: "12",
      md: "12",
      xl: "4",
      lg: "4"
    }
  }, [_c("v-row", {
    staticClass: "wrap layout text-center mx-0"
  }, [_c("v-col", {
    staticClass: "d-flex px-0",
    attrs: {
      xs: "12",
      sm: "6",
      md: "6",
      lg: "12",
      xl: "12"
    }
  }, [_c("div", {
    staticClass: "emb-aside-banner"
  }, [_c("router-link", {
    attrs: {
      to: "#"
    }
  }, [_c("v-img", {
    staticClass: "emb-card d-inline-block",
    attrs: {
      src: "images/data/aside-1.jpg",
      "lazy-src": "images/data/aside-1.jpg"
    }
  })], 1)], 1)]), _vm._v(" "), _c("v-col", {
    staticClass: "d-flex px-0",
    attrs: {
      xs: "12",
      sm: "6",
      md: "6",
      lg: "12",
      xl: "12"
    }
  }, [_c("div", {
    staticClass: "emb-aside-banner"
  }, [_c("router-link", {
    attrs: {
      to: "#"
    }
  }, [_c("v-img", {
    staticClass: "emb-card d-inline-block",
    attrs: {
      src: "images/data/aside-2.jpg",
      "lazy-src": "images/data/aside-2.jpg"
    }
  })], 1)], 1)])], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c("div", {
    staticClass: "emb-feature__wrap"
  }, [_c("v-container", [_c("v-row", {
    staticClass: "layout wrap bg bg-white ma-1 emb-card"
  }, [_c("v-col", {
    staticClass: "d-flex feature-item pa-6",
    attrs: {
      sm: "12",
      md: "4",
      lg: "4"
    }
  }, [_c("div", {
    staticClass: "emb-feature__content d-flex layout align-center pa-md-4"
  }, [_c("div", {
    staticClass: "thumb-wrap mb-4 mb-md-0"
  }, [_c("v-img", {
    attrs: {
      src: "images/data/free-delivery.png",
      "lazy-src": "images/data/free-delivery.png",
      "max-height": "50px",
      "max-width": "50px"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "features"
  }, [_c("h6", {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                                FREE SHIPPINGS\n                            ")]), _vm._v(" "), _c("h5", [_vm._v("Every Day, Every Order")]), _vm._v(" "), _c("span", {
    staticClass: "grey--text"
  }, [_vm._v("*All order over $100")])])])]), _vm._v(" "), _c("v-col", {
    staticClass: "d-flex feature-item pa-6",
    attrs: {
      sm: "12",
      md: "4",
      lg: "4"
    }
  }, [_c("div", {
    staticClass: "emb-feature__content d-flex layout align-center pa-md-4"
  }, [_c("div", {
    staticClass: "thumb-wrap mb-4 mb-md-0"
  }, [_c("v-img", {
    attrs: {
      src: "images/data/customer-support.png",
      "lazy-src": "images/data/customer-support.png",
      "max-height": "50px",
      "max-width": "50px"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "features"
  }, [_c("h6", {
    staticClass: "font-weight-medium"
  }, [_vm._v("\n                                FRIENDLY SUPPORT\n                            ")]), _vm._v(" "), _c("h5", [_vm._v("24/7 Dedicated Support")]), _vm._v(" "), _c("span", {
    staticClass: "grey--text"
  }, [_vm._v("*Only In USA")])])])]), _vm._v(" "), _c("v-col", {
    staticClass: "d-flex feature-item pa-6",
    attrs: {
      sm: "12",
      md: "4",
      lg: "4"
    }
  }, [_c("div", {
    staticClass: "emb-feature__content d-flex layout align-center pa-md-4"
  }, [_c("div", {
    staticClass: "thumb-wrap mb-4 mb-md-0"
  }, [_c("v-img", {
    attrs: {
      src: "images/data/money-back.png",
      "lazy-src": "images/data/money-back.png",
      "max-height": "50px",
      "max-width": "50px"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "features"
  }, [_c("h6", {
    staticClass: "font-weight-medium"
  }, [_vm._v("SECURE")]), _vm._v(" "), _c("h5", [_vm._v("Money Back Guranteed")]), _vm._v(" "), _c("span", {
    staticClass: "grey--text"
  }, [_vm._v("*Conditions Apply")])])])])], 1)], 1)], 1), _vm._v(" "), _c("Featured_Products", {
    attrs: {
      bar_wrap: _vm.bar_wrap
    }
  })], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Featured_Products.vue?vue&type=style&index=0&id=5aa8fc0a&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/Featured_Products.vue?vue&type=style&index=0&id=5aa8fc0a&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh2[data-v-5aa8fc0a],\r\nh2 a[data-v-5aa8fc0a] {\r\n    font-size: 2.813rem !important;\n}\n.section__gap .section__gap-title[data-v-5aa8fc0a] {\r\n    margin-bottom: 3rem;\n}\n.tab-bar__wrap[data-v-5aa8fc0a] {\r\n    overflow-x: hidden;\r\n    display: flex;\r\n    padding: 0 20px 35px;\r\n    margin: auto;\r\n    justify-content: center;\n}\n.feature-product__wrap\r\n    .tab-bar__wrap\r\n    .theme--light.v-btn[data-v-5aa8fc0a]:not(.v-btn--icon):not(.v-btn--flat) {\r\n    background-color: transparent;\n}\n.feature-product__wrap .tab-bar__wrap .v-btn[data-v-5aa8fc0a] {\r\n    box-shadow: none;\r\n    border-radius: 5px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.banner[data-v-38c05078] {\r\n    padding-top: 6rem;\r\n    padding-bottom: 6rem;\n}\n.container.grid-list-xl .layout[data-v-38c05078]:only-child,\r\n.container.grid-list-xl :not(:only-child) .layout[data-v-38c05078]:first-child {\r\n    margin: -15px;\n}\n.banner__slide[data-v-38c05078] {\r\n    margin-left: 1px;\r\n    margin-top: 1px;\r\n    margin-right: 1px;\r\n    position: relative;\r\n    border-radius: 5px;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 10%),\r\n        0 1px 5px 0 rgb(0 0 0 / 10%);\r\n    overflow: hidden;\n}\n.emb-aside-banner[data-v-38c05078] {\r\n    max-width: 100%;\n}\n.emb-card[data-v-38c05078] {\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),\r\n        0 1px 5px 0 rgb(0 0 0 / 12%);\r\n    transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.emb-feature__wrap[data-v-38c05078] {\r\n    overflow: hidden;\n}\n.emb-feature__wrap .feature-item[data-v-38c05078] {\r\n    border-right: 2px solid #eee;\n}\n.emb-feature__wrap .emb-feature__content .thumb-wrap[data-v-38c05078] {\r\n    margin-right: 1.25rem;\n}\nh1[data-v-38c05078],\r\nh2[data-v-38c05078],\r\nh3[data-v-38c05078],\r\nh4[data-v-38c05078],\r\nh5[data-v-38c05078],\r\nh6[data-v-38c05078] {\r\n    list-style: 1.4;\n}\n.emb-feature__wrap .emb-feature__content .features h6[data-v-38c05078] {\r\n    font-size: 11px;\n}\n.emb-feature__wrap .emb-feature__content .features h5[data-v-38c05078] {\r\n    font-size: 15px;\n}\n.emb-feature__wrap .emb-feature__content .features span[data-v-38c05078] {\r\n    font-size: 0.725rem;\n}\n@media only screen and (max-width: 78.9375em) {\n.banner .container.grid-list-xl .layout .d-flex[data-v-38c05078] {\r\n        padding: 15px !important;\n}\n.banner .container.grid-list-xl .layout .d-flex[data-v-38c05078]:first-child {\r\n        padding-left: 0px !important;\n}\n.banner .container.grid-list-xl .layout .d-flex[data-v-38c05078]:last-child {\r\n        padding-right: 0px !important;\n}\n.emb-card[data-v-38c05078]:first-child,\r\n    .emb-card[data-v-38c05078]:last-child {\r\n        margin-left: 0px !important;\n}\n}\n@media only screen and (max-width: 37.5em) {\n.banner .container.grid-list-xl .layout .d-flex[data-v-38c05078] {\r\n        padding: 15px 0 !important;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Featured_Products.vue?vue&type=style&index=0&id=5aa8fc0a&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/Featured_Products.vue?vue&type=style&index=0&id=5aa8fc0a&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Featured_Products.vue?vue&type=style&index=0&id=5aa8fc0a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Featured_Products.vue?vue&type=style&index=0&id=5aa8fc0a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=style&index=0&id=38c05078&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/Views/HomeView.vue":
/*!*****************************************!*\
  !*** ./resources/js/Views/HomeView.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeView_vue_vue_type_template_id_35972a63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeView.vue?vue&type=template&id=35972a63& */ "./resources/js/Views/HomeView.vue?vue&type=template&id=35972a63&");
/* harmony import */ var _HomeView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeView.vue?vue&type=script&lang=js& */ "./resources/js/Views/HomeView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HomeView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeView_vue_vue_type_template_id_35972a63___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeView_vue_vue_type_template_id_35972a63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/HomeView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Views/HomeView.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Views/HomeView.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/HomeView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/HomeView.vue?vue&type=template&id=35972a63&":
/*!************************************************************************!*\
  !*** ./resources/js/Views/HomeView.vue?vue&type=template&id=35972a63& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_template_id_35972a63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeView.vue?vue&type=template&id=35972a63& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Views/HomeView.vue?vue&type=template&id=35972a63&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_template_id_35972a63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeView_vue_vue_type_template_id_35972a63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layout/Featured_Products.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/layout/Featured_Products.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Featured_Products_vue_vue_type_template_id_5aa8fc0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Featured_Products.vue?vue&type=template&id=5aa8fc0a&scoped=true& */ "./resources/js/components/layout/Featured_Products.vue?vue&type=template&id=5aa8fc0a&scoped=true&");
/* harmony import */ var _Featured_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Featured_Products.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/Featured_Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Featured_Products_vue_vue_type_style_index_0_id_5aa8fc0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Featured_Products.vue?vue&type=style&index=0&id=5aa8fc0a&scoped=true&lang=css& */ "./resources/js/components/layout/Featured_Products.vue?vue&type=style&index=0&id=5aa8fc0a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Featured_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Featured_Products_vue_vue_type_template_id_5aa8fc0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Featured_Products_vue_vue_type_template_id_5aa8fc0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5aa8fc0a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/Featured_Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/Featured_Products.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/layout/Featured_Products.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Featured_Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Featured_Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/Featured_Products.vue?vue&type=style&index=0&id=5aa8fc0a&scoped=true&lang=css&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/layout/Featured_Products.vue?vue&type=style&index=0&id=5aa8fc0a&scoped=true&lang=css& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_Products_vue_vue_type_style_index_0_id_5aa8fc0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Featured_Products.vue?vue&type=style&index=0&id=5aa8fc0a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Featured_Products.vue?vue&type=style&index=0&id=5aa8fc0a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_Products_vue_vue_type_style_index_0_id_5aa8fc0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_Products_vue_vue_type_style_index_0_id_5aa8fc0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_Products_vue_vue_type_style_index_0_id_5aa8fc0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_Products_vue_vue_type_style_index_0_id_5aa8fc0a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/layout/Featured_Products.vue?vue&type=template&id=5aa8fc0a&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/layout/Featured_Products.vue?vue&type=template&id=5aa8fc0a&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_Products_vue_vue_type_template_id_5aa8fc0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Featured_Products.vue?vue&type=template&id=5aa8fc0a&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Featured_Products.vue?vue&type=template&id=5aa8fc0a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_Products_vue_vue_type_template_id_5aa8fc0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Featured_Products_vue_vue_type_template_id_5aa8fc0a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layout/HomePage.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/layout/HomePage.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage_vue_vue_type_template_id_38c05078_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=38c05078&scoped=true& */ "./resources/js/components/layout/HomePage.vue?vue&type=template&id=38c05078&scoped=true&");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HomePage_vue_vue_type_style_index_0_id_38c05078_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage.vue?vue&type=style&index=0&id=38c05078&scoped=true&lang=css& */ "./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePage_vue_vue_type_template_id_38c05078_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomePage_vue_vue_type_template_id_38c05078_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38c05078",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/HomePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/HomePage.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/layout/HomePage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_38c05078_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=style&index=0&id=38c05078&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_38c05078_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_38c05078_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_38c05078_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_38c05078_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/layout/HomePage.vue?vue&type=template&id=38c05078&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/layout/HomePage.vue?vue&type=template&id=38c05078&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_38c05078_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=template&id=38c05078&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=template&id=38c05078&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_38c05078_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_38c05078_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);