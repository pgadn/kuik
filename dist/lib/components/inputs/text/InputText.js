import React from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

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

var css_248z = ".InputText-module_InputTextWrapper__KNWl-{padding:0 0 10px;width:100%}.InputText-module_InputText__85-mX{border:1px solid transparent;border-radius:6px;box-shadow:0 0 10px var(--qcuicq-color-light);color:var(--qcuicq-color-textDark);font-size:.8rem;font-weight:600;height:48px;letter-spacing:.5px;margin-bottom:10px;outline:0;text-indent:10px;transition:all .5s ease-out;-webkit-transition:all .5s ease-out;-moz-transition:all .5s ease-out;-o-transition:all .5s ease-out;width:100%}.InputText-module_InputText__85-mX::placeholder{color:var(--qcuicq-color-textSecondary)}.InputText-module_InputText__85-mX:focus{border-color:var(--qcuicq-color-primary);transition:all .5s ease-out;-webkit-transition:all .5s ease-out;-moz-transition:all .5s ease-out;-o-transition:all .5s ease-out}.InputText-module_InputError__UZhFM{border:1px solid var(--qcuicq-color-error)}.InputText-module_HelperMessage__pYl7q{color:var(--qcuicq-color-textLight);font-size:.8rem}.InputText-module_ErrorMessage__8xdb2{color:var(--qcuicq-color-textError);font-size:.8rem}";
var styles = {"InputTextWrapper":"InputText-module_InputTextWrapper__KNWl-","InputText":"InputText-module_InputText__85-mX","InputError":"InputText-module_InputError__UZhFM","HelperMessage":"InputText-module_HelperMessage__pYl7q","ErrorMessage":"InputText-module_ErrorMessage__8xdb2"};
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

var _excluded = ["type", "name", "placeholder", "inputRef", "errorMsg", "helperMsg", "InputTextStyles"];

var InputText = function InputText(props) {
  var type = props.type,
      name = props.name,
      placeholder = props.placeholder,
      inputRef = props.inputRef,
      errorMsg = props.errorMsg,
      helperMsg = props.helperMsg,
      InputTextStyles = props.InputTextStyles,
      other = _objectWithoutProperties(props, _excluded); // console.log(inputRef)


  return /*#__PURE__*/React.createElement("div", {
    className: styles.InputTextWrapper
  }, /*#__PURE__*/React.createElement("input", _extends({
    className: classnames(styles.InputText, errorMsg && styles.InputError, InputTextStyles !== null && InputTextStyles !== void 0 ? InputTextStyles : ""),
    type: type !== null && type !== void 0 ? type : "text",
    name: name,
    placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : ""
  }, inputRef, other)), errorMsg && /*#__PURE__*/React.createElement("span", {
    className: styles.ErrorMessage
  }, errorMsg), !errorMsg && helperMsg && /*#__PURE__*/React.createElement("span", {
    className: styles.HelperMessage
  }, helperMsg));
};

export { InputText as default };
