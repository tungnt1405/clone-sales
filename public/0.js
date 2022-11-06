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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Day_Deal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/Day_Deal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "day-deal",
  data: function data() {
    return {
      countDownDate: new Date("Nov 7, 2022 00:00:00").getTime(),
      countDown: {
        countDays: 0,
        countHours: 0,
        countMinutes: 0,
        countSeconds: 0
      },
      slider_for: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        focusOnSelect: true,
        asNavFor: this.$refs.c2
      },
      slider_nav: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        focusOnSelect: true,
        asNavFor: this.$refs.c1,
        arrows: false,
        responsive: [{
          breakpoint: 991,
          settings: {
            centerMode: true,
            centerPadding: "70px",
            slidesToShow: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: "65px",
            slidesToShow: 1
          }
        }]
      }
    };
  },
  mounted: function mounted() {
    this.updateCountDown();
  },
  methods: {
    syncSliders: function syncSliders(currentPosition, nextPosition) {
      this.$refs.c1.goTo(nextPosition);
      this.$refs.c2.goTo(nextPosition);
    },
    handleCountDown: function handleCountDown() {
      var now = new Date().getTime();
      var distance = this.countDownDate - now;

      if (distance < 0) {
        return false;
      }

      this.countDown.countDays = Math.floor(distance / (1000 * 60 * 60 * 24)); // 1s = 100ms, 1m = 60s, 1h = 60m, 1d = 24h ==> s * m * h * d

      this.countDown.countHours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      this.countDown.countMinutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      this.countDown.countSeconds = Math.floor(distance % (1000 * 60) / 1000);
      return true;
    },
    updateCountDown: function updateCountDown() {
      var _this = this;

      var lastTime = false;
      var updateTime = setInterval(function () {
        if (!_this.handleCountDown()) {
          lastTime = true;
        }
      }, 1000);

      if (lastTime) {
        clearInterval(updateTime);
      }
    }
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
      slick: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 300,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      }
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
/* harmony import */ var _Day_Deal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Day_Deal.vue */ "./resources/js/components/layout/Day_Deal.vue");
/* harmony import */ var _Featured_Products_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Featured_Products.vue */ "./resources/js/components/layout/Featured_Products.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Featured_Products: _Featured_Products_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Day_Deal: _Day_Deal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Day_Deal.vue?vue&type=template&id=4b01e98e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/Day_Deal.vue?vue&type=template&id=4b01e98e&scoped=true& ***!
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

  return _c("div", {
    staticClass: "day-deal-wrap white section__gap"
  }, [_c("v-container", {
    staticClass: "grid-list-xl pb-0"
  }, [_c("v-row", {
    staticClass: "layout wrap"
  }, [_c("v-col", {
    staticClass: "galivery",
    attrs: {
      xs: "12",
      sm: "12",
      md: "6",
      lg: "6",
      xl: "6"
    }
  }, [_c("SlickCarousel", _vm._b({
    ref: "c1",
    staticClass: "slider-for",
    on: {
      beforeChange: _vm.syncSliders
    }
  }, "SlickCarousel", _vm.slider_for, false), [_c("router-link", {
    attrs: {
      to: "#"
    }
  }, [_c("v-img", {
    attrs: {
      src: "images/data/1-item-a.jpg",
      "max-width": "900px",
      "max-height": "800px"
    }
  })], 1), _vm._v(" "), _c("router-link", {
    attrs: {
      to: "#"
    }
  }, [_c("v-img", {
    attrs: {
      src: "images/data/2-item-a.jpg",
      "max-width": "900px",
      "max-height": "800px"
    }
  })], 1), _vm._v(" "), _c("router-link", {
    attrs: {
      to: "#"
    }
  }, [_c("v-img", {
    attrs: {
      src: "images/data/3-item-a.jpg",
      "max-width": "900px",
      "max-height": "800px"
    }
  })], 1), _vm._v(" "), _c("router-link", {
    attrs: {
      to: "#"
    }
  }, [_c("v-img", {
    attrs: {
      src: "images/data/4-item-a.jpg",
      "max-width": "900px",
      "max-height": "800px"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c("v-col", {
    attrs: {
      xs: "12",
      sm: "12",
      md: "6",
      lg: "6",
      xl: "6"
    }
  }, [_c("div", {
    staticClass: "day-deal__content"
  }, [_c("div", {
    staticClass: "mb-12"
  }, [_c("h2", {
    staticClass: "font-weight-regular mb-6"
  }, [_vm._v("\n                            Deal of the day\n                        ")]), _vm._v(" "), _c("h5", {
    staticClass: "font-weight-regular"
  }, [_vm._v("Denim Pullover")]), _vm._v(" "), _c("p", {
    staticClass: "d-inline-block mr-1"
  }, [_c("strike", {
    staticClass: "px-1"
  }, [_c("span", {
    staticClass: "font-color"
  }, [_vm._v("$")]), _vm._v("42.46")])], 1), _vm._v(" "), _c("p", {
    staticClass: "accent--text d-inline-block sec-content"
  }, [_vm._v("\n                            Now only\n                            "), _c("span", {
    staticClass: "accent--text"
  }, [_vm._v("$")]), _vm._v("36.00\n                        ")]), _vm._v(" "), _c("p", [_vm._v("\n                            Suspendisse porttitor ornare ligula. Nam massa\n                            erat,fermentum dolor quis, maximus ultrices\n                            diam. Aenean pellentesque auctor elementum. Nunc\n                            vitae tortor iaculis, mollis odio at, lacinia\n                            sapien. Mauris et leo sem. Curabitur sit amet\n                            enim nisi. Nunc placerat commodo sem, sed\n                            maximus purus\n                        ")]), _vm._v(" "), _c("div", {
    staticClass: "timer mb-6"
  }, [_c("div", {
    staticClass: "timer-wrap mb-4"
  }, [_c("div", [_vm.countDown.countDays > 0 ? _c("div", {
    staticClass: "counter-item"
  }, [_c("span", {
    staticClass: "counter-digit d-inline font-weight-regular"
  }, [_vm._v(_vm._s(_vm.countDown.countDays))]), _c("span", {
    staticClass: "counter-text d-inline font-weight-regular mx-2"
  }, [_vm._v("Days")])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "counter-item"
  }, [_c("span", {
    staticClass: "counter-digit d-inline font-weight-regular"
  }, [_vm._v(_vm._s(_vm.countDown.countHours))]), _c("span", {
    staticClass: "counter-text d-inline font-weight-regular mx-2"
  }, [_vm._v("Hours")])]), _vm._v(" "), _c("div", {
    staticClass: "counter-item"
  }, [_c("span", {
    staticClass: "counter-digit d-inline font-weight-regular"
  }, [_vm._v(_vm._s(_vm.countDown.countMinutes))]), _c("span", {
    staticClass: "counter-text d-inline font-weight-regular mx-2"
  }, [_vm._v("Minutes")])]), _vm._v(" "), _c("div", {
    staticClass: "counter-item"
  }, [_c("span", {
    staticClass: "counter-digit d-inline font-weight-regular"
  }, [_vm._v(_vm._s(_vm.countDown.countSeconds))]), _c("span", {
    staticClass: "counter-text d-inline font-weight-regular mx-2"
  }, [_vm._v("Seconds")])])])])]), _vm._v(" "), _c("v-btn", {
    staticClass: "btn-shop",
    attrs: {
      color: "accent",
      to: "#"
    }
  }, [_vm._v("Shop now")])], 1), _vm._v(" "), _c("SlickCarousel", _vm._b({
    ref: "c2",
    staticClass: "slider-nav",
    on: {
      beforeChange: _vm.syncSliders
    }
  }, "SlickCarousel", _vm.slider_nav, false), [_c("v-img", {
    staticClass: "emb-card img__list",
    attrs: {
      src: "images/data/1-item-a.jpg",
      "max-width": "217",
      "max-height": "217"
    }
  }), _vm._v(" "), _c("v-img", {
    staticClass: "emb-card img__list",
    attrs: {
      src: "images/data/2-item-a.jpg",
      "max-width": "217",
      "max-height": "217"
    }
  }), _vm._v(" "), _c("v-img", {
    staticClass: "emb-card img__list",
    attrs: {
      src: "images/data/3-item-a.jpg",
      "max-width": "217",
      "max-height": "217"
    }
  }), _vm._v(" "), _c("v-img", {
    staticClass: "emb-card img__list",
    attrs: {
      src: "images/data/4-item-a.jpg",
      "max-width": "217",
      "max-height": "217"
    }
  })], 1)], 1)])], 1)], 1)], 1);
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
    staticClass: "py-3"
  }, [_c("v-tabs", {
    attrs: {
      centered: ""
    },
    model: {
      value: _vm.tabs,
      callback: function callback($$v) {
        _vm.tabs = $$v;
      },
      expression: "tabs"
    }
  }, [_c("v-tab", [_vm._v("Men")]), _vm._v(" "), _c("v-tab", [_vm._v("Women")]), _vm._v(" "), _c("v-tab", [_vm._v("gadgets")]), _vm._v(" "), _c("v-tab", [_vm._v("accessories")])], 1)], 1)]), _vm._v(" "), _c("div", {
    staticClass: "tab-content"
  }, [_c("v-tabs-items", {
    model: {
      value: _vm.tabs,
      callback: function callback($$v) {
        _vm.tabs = $$v;
      },
      expression: "tabs"
    }
  }, _vm._l(4, function (n) {
    return _c("v-tab-item", {
      key: n
    }, [_c("SlickCarousel", _vm._b({
      staticClass: "slick__product"
    }, "SlickCarousel", _vm.slick, false), [_c("div", [_c("v-card", {
      staticClass: "my-3 mx-5 card__product",
      attrs: {
        "max-height": "100%"
      }
    }, [_c("v-img", {
      staticClass: "grey--text",
      attrs: {
        src: "images/data/1-item-a.jpg",
        "lazy-src": "images/data/4-item-a.jpg",
        "max-height": "800"
      }
    }, [_c("v-card-title", {
      staticClass: "d-flex justify-content-end"
    }, [_c("v-btn", {
      attrs: {
        icon: ""
      }
    }, [_c("v-icon", [_vm._v("mdi-heart")])], 1)], 1)], 1), _vm._v(" "), _c("div", {
      staticClass: "add__to-cart"
    }, [_c("v-btn", {
      attrs: {
        color: "accent",
        fab: "",
        depressed: "",
        small: ""
      }
    }, [_c("v-icon", [_vm._v("mdi-cart")])], 1)], 1), _vm._v(" "), _c("v-card-subtitle", {
      staticClass: "pb-0"
    }, [_c("h5", {
      staticClass: "h5__title"
    }, [_vm._v("Blue Jean")])]), _vm._v(" "), _c("v-card-text", {
      staticClass: "d-flex justify-content-between my-3 flex-sm-column flex-md-row flex-lg-row"
    }, [_c("div", {
      staticClass: "accent--text feature__product-price"
    }, [_vm._v("\n                                        $18.75\n                                    ")]), _vm._v(" "), _c("div", {
      staticClass: "orange--text"
    }, [_c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")])], 1)])], 1)], 1), _vm._v(" "), _c("div", [_c("v-card", {
      staticClass: "my-3 mx-5 card__product",
      attrs: {
        "max-height": "100%"
      }
    }, [_c("v-img", {
      staticClass: "grey--text",
      attrs: {
        src: "images/data/1-item-a.jpg",
        "lazy-src": "images/data/4-item-a.jpg",
        "max-height": "800"
      }
    }, [_c("v-card-title", {
      staticClass: "d-flex justify-content-end"
    }, [_c("v-btn", {
      attrs: {
        icon: ""
      }
    }, [_c("v-icon", [_vm._v("mdi-heart")])], 1)], 1)], 1), _vm._v(" "), _c("div", {
      staticClass: "add__to-cart"
    }, [_c("v-btn", {
      attrs: {
        color: "accent",
        fab: "",
        depressed: "",
        small: ""
      }
    }, [_c("v-icon", [_vm._v("mdi-cart")])], 1)], 1), _vm._v(" "), _c("v-card-subtitle", {
      staticClass: "pb-0"
    }, [_c("h5", {
      staticClass: "h5__title"
    }, [_vm._v("Blue Jean")])]), _vm._v(" "), _c("v-card-text", {
      staticClass: "d-flex justify-content-between my-3 flex-sm-column flex-md-row flex-lg-row"
    }, [_c("div", {
      staticClass: "accent--text feature__product-price"
    }, [_vm._v("\n                                        $18.75\n                                    ")]), _vm._v(" "), _c("div", {
      staticClass: "orange--text"
    }, [_c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")])], 1)])], 1)], 1), _vm._v(" "), _c("div", [_c("v-card", {
      staticClass: "my-3 mx-5 card__product",
      attrs: {
        "max-height": "100%"
      }
    }, [_c("v-img", {
      staticClass: "grey--text",
      attrs: {
        src: "images/data/1-item-a.jpg",
        "lazy-src": "images/data/4-item-a.jpg",
        "max-height": "800"
      }
    }, [_c("v-card-title", {
      staticClass: "d-flex justify-content-end"
    }, [_c("v-btn", {
      attrs: {
        icon: ""
      }
    }, [_c("v-icon", [_vm._v("mdi-heart")])], 1)], 1)], 1), _vm._v(" "), _c("div", {
      staticClass: "add__to-cart"
    }, [_c("v-btn", {
      attrs: {
        color: "accent",
        fab: "",
        depressed: "",
        small: ""
      }
    }, [_c("v-icon", [_vm._v("mdi-cart")])], 1)], 1), _vm._v(" "), _c("v-card-subtitle", {
      staticClass: "pb-0"
    }, [_c("h5", {
      staticClass: "h5__title"
    }, [_vm._v("Blue Jean")])]), _vm._v(" "), _c("v-card-text", {
      staticClass: "d-flex justify-content-between my-3 flex-sm-column flex-md-row flex-lg-row"
    }, [_c("div", {
      staticClass: "accent--text feature__product-price"
    }, [_vm._v("\n                                        $18.75\n                                    ")]), _vm._v(" "), _c("div", {
      staticClass: "orange--text"
    }, [_c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")])], 1)])], 1)], 1), _vm._v(" "), _c("div", [_c("v-card", {
      staticClass: "my-3 mx-5 card__product",
      attrs: {
        "max-height": "100%"
      }
    }, [_c("v-img", {
      staticClass: "grey--text",
      attrs: {
        src: "images/data/1-item-a.jpg",
        "lazy-src": "images/data/4-item-a.jpg",
        "max-height": "800"
      }
    }, [_c("v-card-title", {
      staticClass: "d-flex justify-content-end"
    }, [_c("v-btn", {
      attrs: {
        icon: ""
      }
    }, [_c("v-icon", [_vm._v("mdi-heart")])], 1)], 1)], 1), _vm._v(" "), _c("div", {
      staticClass: "add__to-cart"
    }, [_c("v-btn", {
      attrs: {
        color: "accent",
        fab: "",
        depressed: "",
        small: ""
      }
    }, [_c("v-icon", [_vm._v("mdi-cart")])], 1)], 1), _vm._v(" "), _c("v-card-subtitle", {
      staticClass: "pb-0"
    }, [_c("h5", {
      staticClass: "h5__title"
    }, [_vm._v("Blue Jean")])]), _vm._v(" "), _c("v-card-text", {
      staticClass: "d-flex justify-content-between my-3 flex-sm-column flex-md-row flex-lg-row"
    }, [_c("div", {
      staticClass: "accent--text feature__product-price"
    }, [_vm._v("\n                                        $18.75\n                                    ")]), _vm._v(" "), _c("div", {
      staticClass: "orange--text"
    }, [_c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")])], 1)])], 1)], 1), _vm._v(" "), _c("div", [_c("v-card", {
      staticClass: "my-3 mx-5 card__product",
      attrs: {
        "max-height": "100%"
      }
    }, [_c("v-img", {
      staticClass: "grey--text",
      attrs: {
        src: "images/data/1-item-a.jpg",
        "lazy-src": "images/data/4-item-a.jpg",
        "max-height": "800"
      }
    }, [_c("v-card-title", {
      staticClass: "d-flex justify-content-end"
    }, [_c("v-btn", {
      attrs: {
        icon: ""
      }
    }, [_c("v-icon", [_vm._v("mdi-heart")])], 1)], 1)], 1), _vm._v(" "), _c("div", {
      staticClass: "add__to-cart"
    }, [_c("v-btn", {
      attrs: {
        color: "accent",
        fab: "",
        depressed: "",
        small: ""
      }
    }, [_c("v-icon", [_vm._v("mdi-cart")])], 1)], 1), _vm._v(" "), _c("v-card-subtitle", {
      staticClass: "pb-0"
    }, [_c("h5", {
      staticClass: "h5__title"
    }, [_vm._v("Blue Jean")])]), _vm._v(" "), _c("v-card-text", {
      staticClass: "d-flex justify-content-between my-3 flex-sm-column flex-md-row flex-lg-row"
    }, [_c("div", {
      staticClass: "accent--text feature__product-price"
    }, [_vm._v("\n                                        $18.75\n                                    ")]), _vm._v(" "), _c("div", {
      staticClass: "orange--text"
    }, [_c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")]), _vm._v(" "), _c("v-icon", {
      attrs: {
        color: "orange",
        small: ""
      }
    }, [_vm._v("mdi-star")])], 1)])], 1)], 1)])], 1);
  }), 1)], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=template&id=38c05078&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/HomePage.vue?vue&type=template&id=38c05078& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
  }), _vm._v(" "), _c("Day_Deal"), _vm._v(" "), _c("div", {
    staticClass: "emb-detailOffer-wrap"
  }, [_c("div", {
    staticClass: "off-list"
  }, [_c("v-row", {
    staticClass: "layout wrap"
  }, [_c("v-col", {
    staticClass: "detailOffer",
    attrs: {
      sm: "12",
      md: "12",
      xs: "12",
      lg: "4",
      xl: "4"
    }
  }, [_c("router-link", {
    attrs: {
      to: "#"
    }
  }, [_c("div", {
    staticClass: "overlay-wrap position-relative"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("v-img", {
    staticClass: "w-100",
    attrs: {
      src: "images/data/3-item-a.jpg",
      "max-width": "100%",
      "max-height": "345"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "overlay-content primary-rgba"
  }, [_c("div", [_c("h2", [_vm._v("Sale")]), _vm._v(" "), _c("h5", [_vm._v("Women collection")]), _vm._v(" "), _c("h3", [_vm._v("50% Off")])])])], 1), _vm._v(" "), _c("v-col", {
    staticClass: "detailOffer",
    attrs: {
      sm: "12",
      md: "12",
      xs: "12",
      lg: "4",
      xl: "4"
    }
  }, [_c("router-link", {
    attrs: {
      to: "#"
    }
  }, [_c("div", {
    staticClass: "overlay-wrap position-relative"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("v-img", {
    staticClass: "w-100",
    attrs: {
      src: "images/data/4-item-a.jpg",
      "max-width": "100%",
      "max-height": "345"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "overlay-content primary-rgba"
  }, [_c("div", [_c("h2", [_vm._v("Sale")]), _vm._v(" "), _c("h5", [_vm._v("Women collection")]), _vm._v(" "), _c("h3", [_vm._v("50% Off")])])])], 1), _vm._v(" "), _c("v-col", {
    staticClass: "detailOffer",
    attrs: {
      sm: "12",
      md: "12",
      xs: "12",
      lg: "4",
      xl: "4"
    }
  }, [_c("router-link", {
    attrs: {
      to: "#"
    }
  }, [_c("div", {
    staticClass: "overlay-wrap position-relative"
  }, [_c("a", {
    attrs: {
      href: "#"
    }
  }, [_c("v-img", {
    staticClass: "w-100",
    attrs: {
      src: "images/data/2-item-a.jpg",
      "max-width": "100%",
      "max-height": "345"
    }
  })], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "overlay-content primary-rgba"
  }, [_c("div", [_c("h2", [_vm._v("Sale")]), _vm._v(" "), _c("h5", [_vm._v("Women collection")]), _vm._v(" "), _c("h3", [_vm._v("50% Off")])])])], 1)], 1)], 1)])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Day_Deal.vue?vue&type=style&index=0&id=4b01e98e&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/Day_Deal.vue?vue&type=style&index=0&id=4b01e98e&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.img__list[data-v-4b01e98e] {\r\n    cursor: pointer;\r\n    padding: 15px;\n}\n.day-deal-wrap .counter-item[data-v-4b01e98e] {\r\n    display: inline-block;\r\n    margin-right: 15px;\n}\n.day-deal-wrap span.counter-digit[data-v-4b01e98e] {\r\n    font-size: 3.25rem;\r\n    line-height: 1.5;\n}\n.btn-shop[data-v-4b01e98e] {\r\n    font-family: Roboto, sans-serif, sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n    text-transform: capitalize;\r\n    padding: 5px;\r\n    text-decoration: none;\n}\n.slider-for[data-v-4b01e98e] {\r\n    cursor: pointer;\r\n    pointer-events: none;\n}\n.galivery[data-v-4b01e98e] {\r\n    max-height: 900px;\n}\r\n", ""]);

// exports


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
exports.push([module.i, "\n.section__gap .section__gap-title[data-v-5aa8fc0a] {\r\n    margin-bottom: 3rem;\n}\n.tab-bar__wrap[data-v-5aa8fc0a] {\r\n    overflow-x: hidden;\r\n    display: flex;\r\n    padding: 0 20px 35px;\r\n    margin: auto;\r\n    justify-content: center;\n}\n.feature-product__wrap\r\n    .tab-bar__wrap\r\n    .theme--light.v-btn[data-v-5aa8fc0a]:not(.v-btn--icon):not(.v-btn--flat) {\r\n    background-color: transparent;\n}\n.feature-product__wrap .tab-bar__wrap .v-btn[data-v-5aa8fc0a] {\r\n    box-shadow: none;\r\n    border-radius: 5px;\n}\n.thumb-wrap[data-v-5aa8fc0a] {\r\n    position: relative;\n}\n.feature-product__wrap .emb-card .img[data-v-5aa8fc0a] {\r\n    border-radius: 5px 5px 0 0;\r\n    width: 100%;\n}\n.h5__title[data-v-5aa8fc0a] {\r\n    font-size: 1.25rem;\r\n    line-height: 1.4;\r\n    font-weight: 700;\r\n    color: rgba(0, 0, 0, 0.87);\n}\n.feature__product-price[data-v-5aa8fc0a] {\r\n    line-height: 1.4;\r\n    font-weight: 500;\r\n    font-size: 1rem;\n}\n.slick__product[data-v-5aa8fc0a] {\r\n    margin-bottom: 40px;\n}\n.card__product .v-image[data-v-5aa8fc0a] {\r\n    cursor: pointer;\n}\n.add__to-cart .v-btn[data-v-5aa8fc0a] {\r\n    position: absolute;\r\n    right: 10px;\r\n    bottom: 70px;\r\n    line-height: 5.125rem;\r\n    transition: 0.4s ease-in;\r\n    margin: 0;\r\n    height: 3.4rem;\r\n    width: 3.4rem;\r\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),\r\n        0 6px 10px 0 rgba(0, 0, 0, 0.1), 0 1px 8px 0 rgba(0, 0, 0, 0.12);\n}\n.card__product:hover .add__to-cart .v-btn[data-v-5aa8fc0a] {\r\n    transform: translateY(-20px);\n}\n[data-v-5aa8fc0a] ul.slick-dots li button:before {\r\n    font-size: 10px !important;\n}\n@media screen and (min-width: 600px) and (max-width: 959px) {\n.add__to-cart .v-btn[data-v-5aa8fc0a] {\r\n        bottom: 84px !important;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    margin-bottom: 0.5rem;\r\n    margin-top: 0;\n}\nh2,\r\nh2 a {\r\n    font-size: 2.813rem !important;\n}\nh5 {\r\n    line-height: 1.4;\n}\nh5,\r\nh5 a {\r\n    font-size: 1.25rem;\n}\n.container.grid-list-xl .layout:only-child,\r\n.container.grid-list-xl :not(:only-child) .layout:first-child {\r\n    margin: -15px;\n}\n.detailOffer {\r\n    padding: 0 0 12px 0;\n}\n.overlay-content {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\n}\n.overlay-wrap,\r\n.overlay-content * {\r\n    color: #fff;\n}\n.primary-rgba h2,\r\n.primary-rgba h5,\r\n.primary-rgba h3 {\r\n    line-height: 1;\n}\n.primary-rgba h2 {\r\n    font-weight: 900;\r\n    font-size: 6rem !important;\r\n    font-style: italic;\n}\n.primary-rgba h3 {\r\n    font-weight: bold;\n}\n.primary-rgba h5 {\r\n    letter-spacing: 2px;\r\n    font-weight: 500;\r\n    text-transform: uppercase;\n}\n@media only screen and (max-width: 78.9375em) {\n.banner .container.grid-list-xl .layout .d-flex {\r\n        padding: 15px !important;\n}\n.banner .container.grid-list-xl .layout .d-flex:first-child {\r\n        padding-left: 0px !important;\n}\n.banner .container.grid-list-xl .layout .d-flex:last-child {\r\n        padding-right: 0px !important;\n}\n.emb-card:first-child,\r\n    .emb-card:last-child {\r\n        margin-left: 0px !important;\n}\n.detailOffer {\r\n        padding: 0 !important;\n}\n}\n@media only screen and (max-width: 37.5em) {\n.banner .container.grid-list-xl .layout .d-flex {\r\n        padding: 15px 0 !important;\n}\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Day_Deal.vue?vue&type=style&index=0&id=4b01e98e&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/Day_Deal.vue?vue&type=style&index=0&id=4b01e98e&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Day_Deal.vue?vue&type=style&index=0&id=4b01e98e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Day_Deal.vue?vue&type=style&index=0&id=4b01e98e&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--8-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=style&index=0&id=38c05078&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&lang=css&");

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

/***/ "./resources/js/components/layout/Day_Deal.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/layout/Day_Deal.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Day_Deal_vue_vue_type_template_id_4b01e98e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Day_Deal.vue?vue&type=template&id=4b01e98e&scoped=true& */ "./resources/js/components/layout/Day_Deal.vue?vue&type=template&id=4b01e98e&scoped=true&");
/* harmony import */ var _Day_Deal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Day_Deal.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/Day_Deal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Day_Deal_vue_vue_type_style_index_0_id_4b01e98e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Day_Deal.vue?vue&type=style&index=0&id=4b01e98e&scoped=true&lang=css& */ "./resources/js/components/layout/Day_Deal.vue?vue&type=style&index=0&id=4b01e98e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Day_Deal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Day_Deal_vue_vue_type_template_id_4b01e98e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Day_Deal_vue_vue_type_template_id_4b01e98e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b01e98e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/Day_Deal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/Day_Deal.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/layout/Day_Deal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Day_Deal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Day_Deal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Day_Deal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Day_Deal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/Day_Deal.vue?vue&type=style&index=0&id=4b01e98e&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/layout/Day_Deal.vue?vue&type=style&index=0&id=4b01e98e&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Day_Deal_vue_vue_type_style_index_0_id_4b01e98e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Day_Deal.vue?vue&type=style&index=0&id=4b01e98e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Day_Deal.vue?vue&type=style&index=0&id=4b01e98e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Day_Deal_vue_vue_type_style_index_0_id_4b01e98e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Day_Deal_vue_vue_type_style_index_0_id_4b01e98e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Day_Deal_vue_vue_type_style_index_0_id_4b01e98e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Day_Deal_vue_vue_type_style_index_0_id_4b01e98e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/layout/Day_Deal.vue?vue&type=template&id=4b01e98e&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/layout/Day_Deal.vue?vue&type=template&id=4b01e98e&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Day_Deal_vue_vue_type_template_id_4b01e98e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Day_Deal.vue?vue&type=template&id=4b01e98e&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/Day_Deal.vue?vue&type=template&id=4b01e98e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Day_Deal_vue_vue_type_template_id_4b01e98e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Day_Deal_vue_vue_type_template_id_4b01e98e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _HomePage_vue_vue_type_template_id_38c05078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=38c05078& */ "./resources/js/components/layout/HomePage.vue?vue&type=template&id=38c05078&");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HomePage_vue_vue_type_style_index_0_id_38c05078_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage.vue?vue&type=style&index=0&id=38c05078&lang=css& */ "./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePage_vue_vue_type_template_id_38c05078___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomePage_vue_vue_type_template_id_38c05078___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_38c05078_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--8-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=style&index=0&id=38c05078&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=style&index=0&id=38c05078&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_38c05078_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_38c05078_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_38c05078_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_8_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_38c05078_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/layout/HomePage.vue?vue&type=template&id=38c05078&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/layout/HomePage.vue?vue&type=template&id=38c05078& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_38c05078___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=template&id=38c05078& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layout/HomePage.vue?vue&type=template&id=38c05078&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_38c05078___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_38c05078___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);