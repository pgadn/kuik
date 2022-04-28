import React, { useState, useEffect } from 'react';

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

var css_248z = ".Stepper-module_StepperWrapper__C4Prs{align-items:center;display:flex;flex-direction:column;justify-content:space-between;min-height:300px}.Stepper-module_StepIndicatorText__-gaHC{color:var(--qcuicq-color-textLight);font-size:.7rem;margin-top:15px;text-align:center}";
var styles = {"StepperWrapper":"Stepper-module_StepperWrapper__C4Prs","StepIndicatorText":"Stepper-module_StepIndicatorText__-gaHC"};
styleInject(css_248z);

var StepperContext = /*#__PURE__*/React.createContext({
  step: 1
});

var Stepper = function Stepper(props) {
  var children = props.children,
      steps = props.steps,
      move = props.move,
      getStep = props.getStep;

  var _useState = useState(1),
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
    className: styles.StepperWrapper
  }, children, /*#__PURE__*/React.createElement("span", {
    className: styles.StepIndicatorText
  }, step, " of ", steps.length, " ", /*#__PURE__*/React.createElement("br", null), steps[step - 1].label)));
};

export { StepperContext, Stepper as default };
