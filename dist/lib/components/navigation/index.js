import React, { useState, useEffect, useContext } from 'react';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

var css_248z$3 = ".Stepper-module_StepperWrapper__C4Prs{align-items:center;display:flex;flex-direction:column;justify-content:space-between;min-height:300px}.Stepper-module_StepIndicatorText__-gaHC{color:var(--qcuicq-color-textLight);font-size:.7rem;margin-top:15px;text-align:center}";
var styles$3 = {"StepperWrapper":"Stepper-module_StepperWrapper__C4Prs","StepIndicatorText":"Stepper-module_StepIndicatorText__-gaHC"};
styleInject(css_248z$3);

var StepperContext = /*#__PURE__*/React.createContext({
  step: 1
});

var Stepper = function Stepper(props) {
  var children = props.children,
      steps = props.steps,
      move = props.move,
      getStep = props.getStep;

  var _useState = useState(move !== null && move !== void 0 ? move : 1),
      _useState2 = _slicedToArray(_useState, 2),
      step = _useState2[0],
      setStep = _useState2[1];

  useEffect(function () {
    if (typeof move !== 'number') {
      throw new Error('Unhandled value for `move`');
    }

    if (steps && move <= steps.length) {
      setStep(move);
    }
  }, [steps, move]);
  useEffect(function () {
    getStep(function () {
      return step;
    });
  }, [step]);

  if (!steps || steps && steps.length <= 0) {
    return null;
  }

  return /*#__PURE__*/React.createElement(StepperContext.Provider, {
    value: {
      step: step
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$3.StepperWrapper
  }, children, /*#__PURE__*/React.createElement("span", {
    className: styles$3.StepIndicatorText
  }, step, " of ", steps.length, " ", /*#__PURE__*/React.createElement("br", null), steps[step - 1].label)));
};

var css_248z$2 = ".Step-module_StepWrapper__qjMSm{margin-right:calc(100% + 1000px);max-height:0;opacity:0;overflow-x:hidden;position:absolute;width:100%}.Step-module_ActiveStep__SZDLu,.Step-module_StepWrapper__qjMSm{transition:overflow-x 1s ease-out,margin-right .8s ease-out,opacity 1s ease-out}.Step-module_ActiveStep__SZDLu{margin-right:0;max-height:100%;opacity:1;overflow-x:visible;position:relative}";
var styles$2 = {"StepWrapper":"Step-module_StepWrapper__qjMSm","ActiveStep":"Step-module_ActiveStep__SZDLu"};
styleInject(css_248z$2);

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

var Step = function Step(props) {
  var children = props.children,
      stepNum = props.stepNum;
  var stepperContext = useContext(StepperContext);
  useEffect(function () {
    console.log(stepperContext);
  }, [stepperContext]);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(styles$2.StepWrapper, stepperContext && stepperContext.step === stepNum ? styles$2.ActiveStep : "")
  }, children);
};

var css_248z$1 = ".StepContent-module_StepContentWrapper__sveNh{display:flex;flex-direction:column;width:100%}";
var styles$1 = {"StepContentWrapper":"StepContent-module_StepContentWrapper__sveNh"};
styleInject(css_248z$1);

var StepContent = function StepContent(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$1.StepContentWrapper
  }, children);
};

var css_248z = ".StepLabel-module_StepLabelWrapper__ZxEy7{align-items:center;display:flex;justify-content:center}";
var styles = {"StepLabelWrapper":"StepLabel-module_StepLabelWrapper__ZxEy7"};
styleInject(css_248z);

var StepLabel = function StepLabel(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.StepLabelWrapper
  }, children);
};

export { Step, StepContent, StepLabel, Stepper, StepperContext };
