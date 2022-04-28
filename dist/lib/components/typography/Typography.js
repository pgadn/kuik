import React from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Typography-module_TypographyWrapper__Pi0la{color:var(--qcuicq-color-textPrimary)}.Typography-module_Typography_Align__left__yDY1r{text-align:left}.Typography-module_Typography_Align__center__irnyL{text-align:center}.Typography-module_Typography_Align__right__S-VLP{text-align:right}.Typography-module_Typography_Align__justify__THeS8{text-align:justify}.Typography-module_Typography_Variant__h3__Nmf7Q{color:var(--qcuicq-color-textDark);font-size:1.3rem;font-weight:600;margin:0}.Typography-module_Typography_Variant__h3__Nmf7Q.Typography-module_Typography_FontColor__textPrimary__TdNpm{color:var(--qcuicq-color-textPrimary)}.Typography-module_Typography_Variant__h3__Nmf7Q.Typography-module_Typography_FontColor__textSecondary__c5l6a{color:var(--qcuicq-color-textSecondary)}.Typography-module_Typography_Variant__h3__Nmf7Q.Typography-module_Typography_FontColor__textDark__SWfUz{color:var(--qcuicq-color-textDark)}.Typography-module_Typography_Variant__h3__Nmf7Q.Typography-module_Typography_FontColor__textLight__QUDyI{color:var(--qcuicq-color-textLight)}.Typography-module_Typography_Variant__h3__Nmf7Q.Typography-module_Typography_FontColor__textDefault__7zSbv{color:var(--qcuicq-color-textDefault)}.Typography-module_Typography_Variant__caption__lfGtU{color:var(--qcuicq-color-textDefault);font-size:.8rem;font-weight:300;margin:0;padding:0}";
var styles = {"TypographyWrapper":"Typography-module_TypographyWrapper__Pi0la","Typography_Align__left":"Typography-module_Typography_Align__left__yDY1r","Typography_Align__center":"Typography-module_Typography_Align__center__irnyL","Typography_Align__right":"Typography-module_Typography_Align__right__S-VLP","Typography_Align__justify":"Typography-module_Typography_Align__justify__THeS8","Typography_Variant__h3":"Typography-module_Typography_Variant__h3__Nmf7Q","Typography_FontColor__textPrimary":"Typography-module_Typography_FontColor__textPrimary__TdNpm","Typography_FontColor__textSecondary":"Typography-module_Typography_FontColor__textSecondary__c5l6a","Typography_FontColor__textDark":"Typography-module_Typography_FontColor__textDark__SWfUz","Typography_FontColor__textLight":"Typography-module_Typography_FontColor__textLight__QUDyI","Typography_FontColor__textDefault":"Typography-module_Typography_FontColor__textDefault__7zSbv","Typography_Variant__caption":"Typography-module_Typography_Variant__caption__lfGtU"};
styleInject(css_248z);

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});
classnames.classNames;

var Typography = function Typography(props) {
  var variant = props.variant,
      text = props.text,
      color = props.color,
      align = props.align;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.TypographyWrapper
  }, /*#__PURE__*/React.createElement("p", {
    className: classnames(variant ? styles["Typography_Variant__".concat(variant)] : "Typography_Variant__p", color && styles["Typography_FontColor__".concat(color)], align && styles["Typography_Align__".concat(align)])
  }, text !== null && text !== void 0 ? text : ""));
};

export { Typography as default };
