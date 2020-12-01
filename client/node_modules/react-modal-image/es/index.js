function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import Lightbox from "./Lightbox";
export { default as Lightbox } from "./Lightbox";

var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      modalOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggleModal", function () {
      _this.setState(function (prev) {
        return {
          modalOpen: !prev.modalOpen
        };
      });
    });

    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          small = _this$props.small,
          smallSrcSet = _this$props.smallSrcSet,
          medium = _this$props.medium,
          large = _this$props.large,
          alt = _this$props.alt,
          hideDownload = _this$props.hideDownload,
          hideZoom = _this$props.hideZoom,
          showRotate = _this$props.showRotate,
          imageBackgroundColor = _this$props.imageBackgroundColor;
      var modalOpen = this.state.modalOpen;
      return React.createElement("div", null, React.createElement("img", {
        className: className,
        style: {
          cursor: "pointer",
          maxWidth: "100%",
          maxHeight: "100%"
        },
        onClick: this.toggleModal,
        src: small,
        srcSet: smallSrcSet,
        alt: alt
      }), modalOpen && React.createElement(Lightbox, {
        medium: medium,
        large: large,
        alt: alt,
        onClose: this.toggleModal,
        hideDownload: hideDownload,
        hideZoom: hideZoom,
        showRotate: showRotate,
        imageBackgroundColor: imageBackgroundColor
      }));
    }
  }]);

  return _default;
}(Component);

export { _default as default };