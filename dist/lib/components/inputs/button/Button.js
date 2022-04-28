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

var css_248z = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.Button-module_ButtonWrapper__o4uiV{font-family:Roboto,sans-serif}.Button-module_Button__opsxV{align-items:center;background-color:transparent;border:0;border-radius:4px;color:var(--qcuicq-color-textDark);cursor:pointer;display:flex;font-size:var(--qcuicq-btn-size-md-font);height:var(--qcuicq-btn-size-md-height);outline:0;padding:var(--qcuicq-btn-size-md-padding);transition:.8s;-webkit-transition:.8s;-moz-transition:.8s;-o-transition:.8s}.Button-module_Button__opsxV:hover{background-color:var(--qcuicq-color-light);transition:.5s;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s}.Button-module_Button__opsxV:active{background-color:var(--qcuicq-color-primary-lighter);color:var(--qcuicq-color-textDark);transition:.4s;-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s}.Button-module_Button_Variant__contained__kZGvt{background-color:var(--qcuicq-color-primary);color:#fff}.Button-module_Button_Variant__contained__kZGvt:hover{background-color:var(--qcuicq-color-primary-light);transition:.5s;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s}.Button-module_Button_Size__sm__dpYgQ{font-size:var(--qcuicq-btn-size-sm-font);height:var(--qcuicq-btn-size-sm-height);padding:var(--qcuicq-btn-size-sm-padding)}.Button-module_Button_Size__lg__J6EcY{font-size:var(--qcuicq-btn-size-lg-font);height:var(--qcuicq-btn-size-lg-height);padding:var(--qcuicq-btn-size-lg-padding)}.Button-module_Button_Disabled__wlGig{cursor:auto}.Button-module_Button_Disabled__wlGig,.Button-module_Button_Disabled__wlGig:hover{background-color:transparent;color:var(--qcuicq-color-textLight)}";
var styles = {"ButtonWrapper":"Button-module_ButtonWrapper__o4uiV","Button":"Button-module_Button__opsxV","Button_Variant__contained":"Button-module_Button_Variant__contained__kZGvt","Button_Size__sm":"Button-module_Button_Size__sm__dpYgQ","Button_Size__lg":"Button-module_Button_Size__lg__J6EcY","Button_Disabled":"Button-module_Button_Disabled__wlGig"};
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

var Button = function Button(props) {
  var ButtonStyles = props.ButtonStyles,
      type = props.type,
      name = props.name,
      text = props.text,
      size = props.size,
      variant = props.variant,
      disabled = props.disabled,
      onClick = props.onClick;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.ButtonWrapper
  }, /*#__PURE__*/React.createElement("button", _extends({
    className: classnames(styles.Button, variant && styles["Button_Variant__".concat(variant)], size && styles["Button_Size__".concat(size)], disabled && styles.Button_Disabled, ButtonStyles !== null && ButtonStyles !== void 0 ? ButtonStyles : ""),
    type: type !== null && type !== void 0 ? type : "button",
    name: name,
    disabled: disabled,
    onClick: onClick
  }, props), text));
};

export { Button as default };
