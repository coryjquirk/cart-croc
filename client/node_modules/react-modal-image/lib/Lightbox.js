"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styles = _interopRequireWildcard(require("./styles"));

var _Header = _interopRequireDefault(require("./Header"));

var _Image = _interopRequireDefault(require("./Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Lightbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Lightbox, _Component);

  function Lightbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Lightbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Lightbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      move: {
        x: 0,
        y: 0
      },
      moveStart: undefined,
      zoomed: false,
      rotationDeg: 0
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      // ESC or ENTER closes the modal
      if (event.keyCode === 27 || event.keyCode === 13) {
        _this.props.onClose();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getCoordinatesIfOverImg", function (event) {
      var point = event.changedTouches ? event.changedTouches[0] : event;

      if (point.target.id !== "react-modal-image-img") {
        // the img was not a target of the coordinates
        return;
      }

      var dim = _this.contentEl.getBoundingClientRect();

      var x = point.clientX - dim.left;
      var y = point.clientY - dim.top;
      return {
        x: x,
        y: y
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDownOrTouchStart", function (event) {
      event.preventDefault();

      if (event.touches && event.touches.length > 1) {
        // more than one finger, ignored
        return;
      }

      var coords = _this.getCoordinatesIfOverImg(event);

      if (!coords) {
        // click outside the img => close modal
        _this.props.onClose();
      }

      if (!_this.state.zoomed) {
        // do not allow drag'n'drop if zoom has not been applied
        return;
      }

      _this.setState(function (prev) {
        return {
          moveStart: {
            x: coords.x - prev.move.x,
            y: coords.y - prev.move.y
          }
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMoveOrTouchMove", function (event) {
      event.preventDefault();

      if (!_this.state.zoomed || !_this.state.moveStart) {
        // do not allow drag'n'drop if zoom has not been applied
        // or if there has not been a click
        return;
      }

      if (event.touches && event.touches.length > 1) {
        // more than one finger, ignored
        return;
      }

      var coords = _this.getCoordinatesIfOverImg(event);

      if (!coords) {
        return;
      }

      _this.setState(function (prev) {
        return {
          move: {
            x: coords.x - prev.moveStart.x,
            y: coords.y - prev.moveStart.y
          }
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUpOrTouchEnd", function (event) {
      _this.setState({
        moveStart: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleZoom", function (event) {
      event.preventDefault();

      _this.setState(function (prev) {
        return {
          zoomed: !prev.zoomed,
          // reset position if zoomed out
          move: prev.zoomed ? {
            x: 0,
            y: 0
          } : prev.move
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleRotate", function (event) {
      event.preventDefault();
      var rotationDeg = _this.state.rotationDeg;

      if (rotationDeg === 360) {
        _this.setState({
          rotationDeg: 90
        });

        return;
      }

      _this.setState(function (prevState) {
        return {
          rotationDeg: prevState.rotationDeg += 90
        };
      });
    });

    return _this;
  }

  _createClass(Lightbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.handleKeyDown, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          medium = _this$props.medium,
          large = _this$props.large,
          alt = _this$props.alt,
          onClose = _this$props.onClose,
          hideDownload = _this$props.hideDownload,
          hideZoom = _this$props.hideZoom,
          showRotate = _this$props.showRotate,
          _this$props$imageBack = _this$props.imageBackgroundColor,
          imageBackgroundColor = _this$props$imageBack === void 0 ? "black" : _this$props$imageBack;
      var _this$state = this.state,
          move = _this$state.move,
          zoomed = _this$state.zoomed,
          rotationDeg = _this$state.rotationDeg;
      return _react["default"].createElement("div", null, _react["default"].createElement(_styles["default"], {
        name: "__react_modal_image__lightbox",
        css: (0, _styles.lightboxStyles)({
          imageBackgroundColor: imageBackgroundColor
        })
      }), _react["default"].createElement("div", {
        className: "__react_modal_image__modal_container"
      }, _react["default"].createElement("div", {
        className: "__react_modal_image__modal_content",
        onMouseDown: this.handleMouseDownOrTouchStart,
        onMouseUp: this.handleMouseUpOrTouchEnd,
        onMouseMove: this.handleMouseMoveOrTouchMove,
        onTouchStart: this.handleMouseDownOrTouchStart,
        onTouchEnd: this.handleMouseUpOrTouchEnd,
        onTouchMove: this.handleMouseMoveOrTouchMove,
        ref: function ref(el) {
          _this2.contentEl = el;
        }
      }, zoomed && _react["default"].createElement(_Image["default"], {
        id: "react-modal-image-img",
        className: "__react_modal_image__large_img",
        src: large || medium,
        style: {
          transform: "translate3d(-50%, -50%, 0) translate3d(".concat(move.x, "px, ").concat(move.y, "px, 0) rotate(").concat(rotationDeg, "deg)"),
          WebkitTransform: "translate3d(-50%, -50%, 0) translate3d(".concat(move.x, "px, ").concat(move.y, "px, 0) rotate(").concat(rotationDeg, "deg)"),
          MsTransform: "translate3d(-50%, -50%, 0) translate3d(".concat(move.x, "px, ").concat(move.y, "px, 0) rotate(").concat(rotationDeg, "deg)")
        },
        handleDoubleClick: this.toggleZoom
      }), !zoomed && _react["default"].createElement(_Image["default"], {
        id: "react-modal-image-img",
        className: "__react_modal_image__medium_img",
        src: medium || large,
        handleDoubleClick: this.toggleZoom,
        contextMenu: !medium,
        style: {
          transform: "translate3d(-50%, -50%, 0) rotate(".concat(rotationDeg, "deg)"),
          WebkitTransform: "translate3d(-50%, -50%, 0) rotate(".concat(rotationDeg, "deg)"),
          MsTransform: "translate3d(-50%, -50%, 0) rotate(".concat(rotationDeg, "deg)")
        }
      })), _react["default"].createElement(_Header["default"], {
        image: large || medium,
        alt: alt,
        zoomed: zoomed,
        toggleZoom: this.toggleZoom,
        toggleRotate: this.toggleRotate,
        onClose: onClose,
        enableDownload: !hideDownload,
        enableZoom: !hideZoom,
        enableRotate: !!showRotate
      })));
    }
  }]);

  return Lightbox;
}(_react.Component);

exports["default"] = Lightbox;