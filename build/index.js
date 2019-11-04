'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function useWindowSize() {
  var isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  var _useState = React.useState(getSize),
      _useState2 = _slicedToArray(_useState, 2),
      windowSize = _useState2[0],
      setWindowSize = _useState2[1];

  var handleResize = function handleResize() {
    setWindowSize(getSize());
  };

  React.useEffect(function () {
    if (!isClient) {
      return false;
    }

    window.addEventListener("resize", handleResize);
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowSize;
}

var PageScaler = function PageScaler(_ref) {
  var children = _ref.children,
      contentWidth = _ref.contentWidth,
      contentHeight = _ref.contentHeight,
      _ref$color = _ref.color1,
      color1 = _ref$color === void 0 ? "black" : _ref$color,
      _ref$color2 = _ref.color2,
      color2 = _ref$color2 === void 0 ? "darkslategray" : _ref$color2,
      _ref$noStripes = _ref.noStripes,
      noStripes = _ref$noStripes === void 0 ? false : _ref$noStripes;
  var size = useWindowSize();

  var _useState3 = React.useState(1),
      _useState4 = _slicedToArray(_useState3, 2),
      scale = _useState4[0],
      setScale = _useState4[1]; // set the scale whenever the window resizes


  React.useEffect(function () {
    setScale(Math.min(size.width / contentWidth, size.height / contentHeight));
  }, [size]); // if window is perfectly sized, don't rescale

  if (size.width === contentWidth && size.height === contentHeight) return React__default.createElement(React__default.Fragment, null, children); // render

  return React__default.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden",
      background: noStripes ? color1 : "repeating-radial-gradient(circle at bottom right,".concat(color1, ",").concat(color1, " 5px,").concat(color2, " 5px,").concat(color2, " 10px)")
    }
  }, React__default.createElement("div", {
    style: {
      transformOrigin: "top left",
      transform: "scale(".concat(scale, ")")
    }
  }, children));
};

module.exports = PageScaler;
