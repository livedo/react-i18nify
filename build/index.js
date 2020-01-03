"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Translate", {
  enumerable: true,
  get: function get() {
    return _Translate.default;
  }
});
Object.defineProperty(exports, "Localize", {
  enumerable: true,
  get: function get() {
    return _Localize.default;
  }
});
Object.defineProperty(exports, "I18n", {
  enumerable: true,
  get: function get() {
    return _I18n.default;
  }
});
Object.defineProperty(exports, "addLocale", {
  enumerable: true,
  get: function get() {
    return _core.addLocale;
  }
});
Object.defineProperty(exports, "addLocales", {
  enumerable: true,
  get: function get() {
    return _core.addLocales;
  }
});
Object.defineProperty(exports, "getLocale", {
  enumerable: true,
  get: function get() {
    return _core.getLocale;
  }
});
Object.defineProperty(exports, "setLocale", {
  enumerable: true,
  get: function get() {
    return _core.setLocale;
  }
});
Object.defineProperty(exports, "setLocaleGetter", {
  enumerable: true,
  get: function get() {
    return _core.setLocaleGetter;
  }
});
Object.defineProperty(exports, "getTranslations", {
  enumerable: true,
  get: function get() {
    return _core.getTranslations;
  }
});
Object.defineProperty(exports, "setTranslations", {
  enumerable: true,
  get: function get() {
    return _core.setTranslations;
  }
});
Object.defineProperty(exports, "setTranslationsGetter", {
  enumerable: true,
  get: function get() {
    return _core.setTranslationsGetter;
  }
});
Object.defineProperty(exports, "setHandleMissingTranslation", {
  enumerable: true,
  get: function get() {
    return _core.setHandleMissingTranslation;
  }
});
Object.defineProperty(exports, "t", {
  enumerable: true,
  get: function get() {
    return _core.t;
  }
});
Object.defineProperty(exports, "l", {
  enumerable: true,
  get: function get() {
    return _core.l;
  }
});
Object.defineProperty(exports, "forceComponentsUpdate", {
  enumerable: true,
  get: function get() {
    return _core.forceComponentsUpdate;
  }
});

var _Translate = _interopRequireDefault(require("./lib/Translate"));

var _Localize = _interopRequireDefault(require("./lib/Localize"));

var _I18n = _interopRequireDefault(require("./lib/I18n"));

var _core = require("./lib/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }