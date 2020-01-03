"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forceComponentsUpdate = exports.l = exports.t = exports.setHandleMissingTranslation = exports.setTranslationsGetter = exports.setLocaleGetter = exports.setTranslations = exports.getTranslations = exports.addLocales = exports.addLocale = exports.setLocale = exports.getLocale = exports.settings = void 0;

var _intl = _interopRequireDefault(require("intl"));

var _parse = _interopRequireDefault(require("date-fns/parse"));

var _format = _interopRequireDefault(require("date-fns/format"));

var _enUS = _interopRequireDefault(require("date-fns/locale/en-US"));

var _Base = _interopRequireDefault(require("./Base"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var settings = {
  availableLocales: {
    'en-US': _enUS.default
  },
  localeKey: 'en',
  localeObject: _enUS.default,
  translationsObject: {},
  getTranslations: null,
  getLocale: null,
  handleMissingTranslation: function handleMissingTranslation(text) {
    return text.split('.').pop();
  },

  get translations() {
    return this.getTranslations ? this.getTranslations() : this.translationsObject;
  },

  set translations(translations) {
    this.translationsObject = translations;
  },

  get locale() {
    return this.getLocale ? this.getLocale() : this.localeKey;
  },

  set locale(locale) {
    this.localeKey = locale;
    this.localeObject = this.availableLocales[locale] || this.availableLocales[locale.split('-')[0]] || _enUS.default;
  }

};
exports.settings = settings;

var getLocale = function getLocale() {
  return settings.locale;
};

exports.getLocale = getLocale;

var setLocale = function setLocale(locale) {
  var rerenderComponents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  settings.locale = locale;
  settings.getLocale = null;

  if (rerenderComponents) {
    _Base.default.rerenderAll();
  }
};

exports.setLocale = setLocale;

var addLocale = function addLocale(name, locale) {
  settings.availableLocales[name] = locale;
};

exports.addLocale = addLocale;

var addLocales = function addLocales(locales) {
  settings.availableLocales = _objectSpread({}, settings.availableLocales, {}, locales);
};

exports.addLocales = addLocales;

var getTranslations = function getTranslations() {
  return settings.translations;
};

exports.getTranslations = getTranslations;

var setTranslations = function setTranslations(translations) {
  var rerenderComponents = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  settings.translations = translations;
  settings.getTranslations = null;

  if (rerenderComponents) {
    _Base.default.rerenderAll();
  }
};

exports.setTranslations = setTranslations;

var setLocaleGetter = function setLocaleGetter(fn) {
  if (typeof fn !== 'function') {
    throw new Error('Locale getter must be a function');
  }

  settings.getLocale = fn;
};

exports.setLocaleGetter = setLocaleGetter;

var setTranslationsGetter = function setTranslationsGetter(fn) {
  if (typeof fn !== 'function') {
    throw new Error('Translations getter must be a function');
  }

  settings.getTranslations = fn;
};

exports.setTranslationsGetter = setTranslationsGetter;

var setHandleMissingTranslation = function setHandleMissingTranslation(fn) {
  if (typeof fn !== 'function') {
    throw new Error('Handle missing translation must be a function');
  }

  settings.handleMissingTranslation = fn;
};

exports.setHandleMissingTranslation = setHandleMissingTranslation;

var t = function t(key) {
  var replacements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var translation = '';

  try {
    var translationLocale = settings.translations[settings.locale] ? settings.locale : settings.locale.split('-')[0];
    translation = (0, _utils.fetchTranslation)(settings.translations, "".concat(translationLocale, ".").concat(key), replacements.count);
  } catch (err) {
    return settings.handleMissingTranslation(key, replacements);
  }

  return (0, _utils.replace)(translation, replacements);
};

exports.t = t;

var l = function l(value, options) {
  if (options.dateFormat) {
    var parsedDate = options.parseFormat ? (0, _parse.default)(value, options.parseFormat, new Date(), {
      locale: settings.localeObject
    }) : new Date(value);
    return (0, _format.default)(parsedDate, t(options.dateFormat), {
      locale: settings.localeObject
    });
  }

  if (typeof value === 'number') {
    if (global.Intl) {
      if (!(Intl.NumberFormat && Intl.NumberFormat.supportedLocalesOf(settings.locale).length === 1)) {
        Intl.NumberFormat = _intl.default.NumberFormat;
      }
    } else {
      global.Intl = _intl.default;
    }

    return new Intl.NumberFormat(settings.locale, options).format(value);
  }

  return value;
};

exports.l = l;

var forceComponentsUpdate = function forceComponentsUpdate() {
  _Base.default.rerenderAll();
};

exports.forceComponentsUpdate = forceComponentsUpdate;