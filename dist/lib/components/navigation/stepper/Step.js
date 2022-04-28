import React, { useContext, useEffect } from 'react';

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

var css_248z = ".Step-module_StepWrapper__qjMSm{margin-right:calc(100% + 1000px);max-height:0;opacity:0;overflow-x:hidden;position:absolute;transition:margin-right .8s ease-out,opacity 1s ease-out;width:100%}.Step-module_ActiveStep__SZDLu{margin-right:0;max-height:100%;opacity:1;position:relative;transition:margin-right .8s ease-out,opacity 1s ease-out}";
var styles = {"StepWrapper":"Step-module_StepWrapper__qjMSm","ActiveStep":"Step-module_ActiveStep__SZDLu"};
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

var StepperContext = /*#__PURE__*/React.createContext({
  step: 1
});

var Step = function Step(props) {
  var children = props.children,
      stepNum = props.stepNum;
  var stepperContext = useContext(StepperContext);
  useEffect(function () {
    console.log(stepperContext);
  }, [stepperContext]);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(styles.StepWrapper, stepperContext && stepperContext.step === stepNum ? styles.ActiveStep : "")
  }, children);
};

export { Step as default };
