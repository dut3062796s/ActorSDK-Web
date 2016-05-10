"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2016 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var icons = {
  back: _react2.default.createElement("path", { d: "M7.8 11l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2H7.8z" }),
  cog: _react2.default.createElement("path", { d: "M21 11.906l-.858-3.76-2.272-.252-.578-.725.26-2.272-3.475-1.672-1.613 1.618h-.928L9.922 3.226 6.448 4.9l.26 2.27-.578.724-2.272.253L3 11.907l1.937 1.212.206.903-1.22 1.933L6.33 18.97l2.155-.757.836.403.752 2.158h3.856l.75-2.158.837-.403 2.156.758 2.406-3.014-1.22-1.933.207-.904L21 11.905zm-3.797 5.437l-1.77-.623-1.87.9-.617 1.773h-1.892l-.617-1.773-1.87-.9-1.77.623-1.18-1.48 1-1.588-.462-2.022-1.59-.996.42-1.846 1.868-.206 1.293-1.622-.214-1.865 1.705-.82 1.326 1.328h2.074l1.325-1.33 1.706.822-.214 1.865 1.293 1.622 1.867.207.42 1.846-1.59.997-.462 2.022 1.002 1.588-1.18 1.48zm-8.93-5.235c0 2.092 1.67 3.786 3.727 3.786 2.06 0 3.726-1.694 3.726-3.786 0-2.09-1.667-3.785-3.726-3.785-2.058 0-3.726 1.694-3.726 3.785zM12 14.525a2.42 2.42 0 0 1-2.417-2.417A2.42 2.42 0 0 1 12 9.69a2.42 2.42 0 0 1 2.417 2.418A2.42 2.42 0 0 1 12 14.525z" }),
  envelope: _react2.default.createElement("path", { d: "M22 5.83v12.38c0 .503-.17.928-.508 1.273-.34.345-.768.517-1.29.517H3.798c-.52 0-.95-.172-1.29-.517A1.746 1.746 0 0 1 2 18.21V5.83c0-.503.17-.928.508-1.273.364-.37.794-.557 1.29-.557h16.405c.495 0 .924.186 1.29.557.337.345.507.77.507 1.274zm-1.445.4v-.4c0-.105-.014-.158-.04-.158-.026-.027-.038-.053-.038-.08-.027-.08-.066-.12-.118-.12-.027.027-.08.027-.157 0H3.797a.622.622 0 0 0-.274.08c-.052.054-.078.146-.078.28 0 1.272.547 2.347 1.64 3.223.34.265 1.023.816 2.052 1.65 1.028.837 1.83 1.494 2.402 1.972l.116.12c.104.052.196.118.274.198.312.266.48.412.507.438.13.053.3.173.508.358.26.16.443.267.547.32.26.053.43.08.508.08.078 0 .247-.027.508-.08.103-.053.286-.16.546-.32.21-.184.378-.304.508-.357.026-.026.196-.172.508-.438.078-.08.17-.146.273-.2l.118-.118c.573-.478 1.374-1.135 2.403-1.97a187.862 187.862 0 0 1 2.05-1.652c.39-.292.77-.73 1.134-1.314.338-.53.508-1.034.508-1.51zm0 11.98V9.452c-.235.265-.483.517-.742.756a146.46 146.46 0 0 0-4.766 3.86c-.104.08-.267.205-.488.378-.223.173-.372.298-.45.378a8.63 8.63 0 0 1-.938.557c-.495.186-.886.28-1.172.28-.287 0-.677-.094-1.172-.28a8.63 8.63 0 0 1-.937-.557 5.313 5.313 0 0 0-.45-.378c-.22-.172-.383-.3-.487-.378a147.38 147.38 0 0 0-4.765-3.86c-.26-.24-.508-.492-.743-.757v8.756c0 .105.026.185.078.238.08.08.17.12.274.12h16.406c.104 0 .195-.04.274-.12.05-.053.078-.133.078-.24z" }),
  integration: _react2.default.createElement("path", { d: "M8.6 16.7c3.4-.7 5.2-3.8 5.2-6.2V7.4H11V3.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v3.7H5.7V3.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v3.7H1.1v3.1c0 2.5 1.7 5.7 5.2 6.2h.1c.4 3.1 2.4 4.5 5.4 4.5 2.9 0 4.9-1.8 5.5-4.8.6-3.2 1.7-4.4 4.3-3.7.5.1 1.1-.2 1.2-.7s-.2-1.1-.7-1.2c-4.1-1-5.9 1.1-6.7 5.3-.4 2.1-1.6 3.2-3.5 3.2-1.9-.1-3-.7-3.3-2.6z" }),
  members: [_react2.default.createElement("path", { key: 0, d: "M12 13c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z" }), _react2.default.createElement("path", { key: 1, d: "M19 20H5c-.6 0-1-.4-1-1v-2.5c0-3 5.3-5.5 8-5.5s8 2.5 8 5.5V19c0 .6-.4 1-1 1zM6 18h12v-1.5c0-1.4-3.9-3.5-6-3.5s-6 2.1-6 3.5V18z" })],
  star: _react2.default.createElement("path", { d: "M268.396 134.178c10.82-9.13 8.05-17.518-6.157-18.65l-73.8-5.863-9.968-23.537-.003-.002-18.5-43.682c-5.484-12.947-14.45-12.947-19.94-.003l-28.47 67.225-73.796 5.862c-14.21 1.133-16.982 9.522-6.16 18.65l18.262 15.404 37.938 32.003-6 24.802v.008l-11.14 46.036c-3.3 13.642 3.96 18.83 16.132 11.525l20.537-12.322L150 226.03l42.67 25.603 20.532 12.322c12.17 7.304 19.433 2.114 16.133-11.526l-3.755-15.516-7.383-30.52v-.006l-6-24.805 19.676-16.598.003-.002 36.52-30.805z" }),
  twitter: _react2.default.createElement("path", { d: "M21.9 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.6 1C18 4.5 17 4 15.8 4c-2.2 0-4.1 1.8-4.1 4 0 .3 0 .6.1.9-3.3-.1-6.3-1.7-8.3-4.2C3.2 5.3 3 6 3 6.8c0 1.4.7 2.6 1.8 3.4-.7 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.2 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.1 1.7-5 1.7-.3 0-.6 0-1-.1 1.8 1.2 4 1.8 6.2 1.8 7.4 0 11.5-6.2 11.5-11.5V8c.8-.6 1.5-1.3 2.1-2.1z" }),
  username: _react2.default.createElement("path", { d: "M11.7 8.8c1.6 0 2.6 1.2 2.6 3.2s-1 3.2-2.6 3.2c-1.5 0-2.4-1.2-2.4-3.2s.9-3.2 2.4-3.2zm.4-6.4c-5.6 0-9.5 3.9-9.5 9.6 0 5.9 3.8 9.6 9.7 9.6 1.5 0 2.8-.2 3.9-.6v-1.5c-.7.3-2.3.6-3.9.6-4.9 0-8.1-3.2-8.1-8.1 0-4.8 3.2-8.2 7.7-8.2 4.6 0 7.8 2.8 7.8 7 0 2.8-.9 4.7-2.4 4.7-.8 0-1.3-.5-1.3-1.3V7.4h-1.7v1.4h-.2c-.4-1-1.5-1.6-2.7-1.6-2.4 0-4 2-4 4.8 0 2.9 1.6 4.9 4 4.9 1.3 0 2.4-.7 2.9-1.8h.2c.1 1.1 1.2 1.9 2.5 1.9 2.6 0 4.3-2.4 4.3-6.1.1-5-3.7-8.5-9.2-8.5z" }),
  facebook: _react2.default.createElement(
    "g",
    { transform: "translate(2.000000, 2.000000)" },
    _react2.default.createElement("path", { d: "M18.7899123,0.0761403509 L1.21026316,0.0761403509 C0.586754386,0.0761403509 0.0760526316,0.586754386 0.0760526316,1.2104386 L0.0760526316,18.79 C0.0760526316,19.4134211 0.586666667,19.9240351 1.21026316,19.9240351 L18.7899123,19.9240351 C19.4131579,19.9240351 19.9239473,19.4135088 19.9239473,18.79 L19.9239473,1.21035088 C19.9239473,0.586754386 19.4132456,0.0761403509 18.7899123,0.0761403509 L18.7899123,0.0761403509 Z M14.1954386,11.2095614 L14.1954386,19.9122807 L11.4177193,19.9122807 L11.4177193,11.2095614 L9.48824558,11.2095614 L9.48824558,8.58228067 L11.4177193,8.58228067 L11.4177193,6.33842105 C11.4177193,4.57508772 12.557193,2.95578948 15.1833333,2.95578948 C16.2467544,2.95578948 17.0329824,3.05763158 17.0329824,3.05763158 L16.9709649,5.51096491 C16.9709649,5.51096491 16.1691228,5.50315789 15.294386,5.50315789 C14.3472807,5.50315789 14.1955263,5.93964913 14.1955263,6.66394737 L14.1955263,6.78692983 L14.1955263,8.582193 L17.0465789,8.582193 L16.9222807,11.2095614 L14.1954386,11.2095614 L14.1954386,11.2095614 Z" })
  )
};

var defaultViewBox = '0 0 24 24';
var viewBoxes = {
  star: '0 0 300 300'
};

var SvgIcon = function (_Component) {
  _inherits(SvgIcon, _Component);

  function SvgIcon() {
    _classCallCheck(this, SvgIcon);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  SvgIcon.prototype.render = function render() {
    var _props = this.props;
    var glyph = _props.glyph;

    var props = _objectWithoutProperties(_props, ["glyph"]);

    var path = icons[glyph];
    var viewBox = viewBoxes[glyph] || defaultViewBox;

    return _react2.default.createElement(
      "svg",
      _extends({}, props, { viewBox: viewBox }),
      path
    );
  };

  return SvgIcon;
}(_react.Component);

SvgIcon.propTypes = {
  className: _react.PropTypes.string,
  glyph: _react.PropTypes.oneOf(Object.keys(icons)).isRequired
};
exports.default = SvgIcon;
//# sourceMappingURL=SvgIcon.react.js.map