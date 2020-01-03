"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchTranslation = exports.replace = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var replace = function replace(translation, replacements) {
  if (typeof translation === 'string') {
    var result = translation;
    Object.keys(replacements).forEach(function (replacement) {
      result = result.split("%{".concat(replacement, "}")).join(replacements[replacement]);
    });
    return result;
  }

  if (_react.default.isValidElement(translation)) {
    return translation;
  }

  if (_typeof(translation) === 'object') {
    var _result = {};
    Object.keys(translation).forEach(function (translationKey) {
      _result[translationKey] = replace(translation[translationKey], replacements);
    });
    return _result;
  }

  return null;
};

exports.replace = replace;

var fetchTranslation = function fetchTranslation(translations, key) {
  var count = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var _index = key.indexOf('.');

  if (typeof translations === 'undefined') {
    throw new Error('not found');
  }

  if (_index > -1) {
    return fetchTranslation(translations[key.substring(0, _index)], key.substr(_index + 1), count);
  }

  if (count !== null) {
    if (translations["".concat(key, "_").concat(count)]) {
      // when key = 'items_3' if count is 3
      return translations["".concat(key, "_").concat(count)];
    }

    if (count !== 1 && translations["".concat(key, "_plural")]) {
      // when count is not simply singular, return _plural
      return translations["".concat(key, "_plural")];
    }
  }

  if (translations[key] != null) {
    return translations[key];
  }

  throw new Error('not found');
};

exports.fetchTranslation = fetchTranslation;