import React$1, { createContext, useContext } from 'react';
import MaskedInput from 'react-text-mask';
import { Controller } from 'react-hook-form';

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

var css_248z$e = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");";
styleInject(css_248z$e);

var css_248z$d = "";
styleInject(css_248z$d);

var css_248z$c = "";
styleInject(css_248z$c);

var css_248z$b = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");:root{--color-primary:#294197;--color-primary-light:#435bb3;--color-primary-lighter:#768ee2;--color-secondary:#d81d0d;--color-secondary-light:#f05c5c;--color-secondary-lighter:#e9a39d;--color-tertiary:#318c56;--color-tertiary-light:#54a776;--color-tertiary-lighter:#81d2a2;--color-light:#ececec;--color-lighter:#f6f6f6;--color-error:#f05c5c;--color-textPrimary:#6b6b6b;--color-textSecondary:#bababa;--color-textDark:#242424;--color-textLight:#c8c8c8;--color-textError:#f05c5c;--color-textDefault:#fff;--btn-size-sm-padding:15px 18px;--btn-size-sm-height:25px;--btn-size-sm-font:.7rem;--btn-size-md-padding:18px 23px;--btn-size-md-height:28px;--btn-size-md-font:.8rem;--btn-size-lg-padding:21px 26px;--btn-size-lg-height:31px;--btn-size-lg-font:.9rem}body{font-family:Roboto,sans-serif}";
styleInject(css_248z$b);

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

var css_248z$a = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");.Button-module_ButtonWrapper__o4uiV{font-family:Roboto,sans-serif}.Button-module_Button__opsxV{align-items:center;background-color:transparent;border:0;border-radius:4px;color:var(--color-textDark);cursor:pointer;display:flex;font-size:var(--btn-size-md-font);height:var(--btn-size-md-height);outline:0;padding:var(--btn-size-md-padding);transition:.8s;-webkit-transition:.8s;-moz-transition:.8s;-o-transition:.8s}.Button-module_Button__opsxV:hover{background-color:var(--color-light);transition:.5s;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s}.Button-module_Button__opsxV:active{background-color:var(--color-primary-lighter);color:var(--color-textDark);transition:.4s;-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s}.Button-module_Button_Variant__contained__kZGvt{background-color:var(--color-primary);color:#fff}.Button-module_Button_Variant__contained__kZGvt:hover{background-color:var(--color-primary-light);transition:.5s;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s}.Button-module_Button_Size__sm__dpYgQ{font-size:var(--btn-size-sm-font);height:var(--btn-size-sm-height);padding:var(--btn-size-sm-padding)}.Button-module_Button_Size__lg__J6EcY{font-size:var(--btn-size-lg-font);height:var(--btn-size-lg-height);padding:var(--btn-size-lg-padding)}.Button-module_Button_Disabled__wlGig{cursor:auto}.Button-module_Button_Disabled__wlGig,.Button-module_Button_Disabled__wlGig:hover{background-color:transparent;color:var(--color-textLight)}";
var styles$a = {"ButtonWrapper":"Button-module_ButtonWrapper__o4uiV","Button":"Button-module_Button__opsxV","Button_Variant__contained":"Button-module_Button_Variant__contained__kZGvt","Button_Size__sm":"Button-module_Button_Size__sm__dpYgQ","Button_Size__lg":"Button-module_Button_Size__lg__J6EcY","Button_Disabled":"Button-module_Button_Disabled__wlGig"};
styleInject(css_248z$a);

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
    className: styles$a.ButtonWrapper
  }, /*#__PURE__*/React.createElement("button", _extends({
    className: classnames(styles$a.Button, variant && styles$a["Button_Variant__".concat(variant)], size && styles$a["Button_Size__".concat(size)], disabled && styles$a.Button_Disabled, ButtonStyles !== null && ButtonStyles !== void 0 ? ButtonStyles : ""),
    type: type !== null && type !== void 0 ? type : "button",
    name: name,
    disabled: disabled,
    onClick: onClick
  }, props), text));
};

var css_248z$9 = ".InputText-module_InputTextWrapper__KNWl-{padding:0 0 10px;width:100%}.InputText-module_InputText__85-mX{border:1px solid transparent;border-radius:6px;box-shadow:0 0 10px 1px var(--color-light);color:var(--color-textDark);font-size:.8rem;font-weight:600;height:48px;letter-spacing:.5px;outline:0;text-indent:10px;transition:all .5s ease-out;-webkit-transition:all .5s ease-out;-moz-transition:all .5s ease-out;-o-transition:all .5s ease-out;width:100%}.InputText-module_InputText__85-mX::placeholder{color:var(--color-textSecondary)}.InputText-module_InputText__85-mX:focus{border-color:var(--color-primary);transition:all .5s ease-out;-webkit-transition:all .5s ease-out;-moz-transition:all .5s ease-out;-o-transition:all .5s ease-out}.InputText-module_InputError__UZhFM{border:1px solid var(--color-error)}.InputText-module_HelperMessage__pYl7q{color:var(--color-textLight);font-size:.8rem}.InputText-module_ErrorMessage__8xdb2{color:var(--color-textError);font-size:.8rem}";
var styles$9 = {"InputTextWrapper":"InputText-module_InputTextWrapper__KNWl-","InputText":"InputText-module_InputText__85-mX","InputError":"InputText-module_InputError__UZhFM","HelperMessage":"InputText-module_HelperMessage__pYl7q","ErrorMessage":"InputText-module_ErrorMessage__8xdb2"};
styleInject(css_248z$9);

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


  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$9.InputTextWrapper
  }, /*#__PURE__*/React$1.createElement("input", _extends({
    className: classnames(styles$9.InputText, errorMsg && styles$9.InputError, InputTextStyles !== null && InputTextStyles !== void 0 ? InputTextStyles : ""),
    type: type !== null && type !== void 0 ? type : "text",
    name: name,
    placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : ""
  }, inputRef, other)), errorMsg && /*#__PURE__*/React$1.createElement("span", {
    className: styles$9.ErrorMessage
  }, errorMsg), !errorMsg && helperMsg && /*#__PURE__*/React$1.createElement("span", {
    className: styles$9.HelperMessage
  }, helperMsg));
};

var _excluded2 = ["type", "name", "placeholder", "placeholderChar", "inputRef", "errorMsg", "helperMsg", "InputTextStyles", "mask", "control", "validation"];
//     inputRef: PropTypes.func.isRequired,
// }


var InputMask = function InputMask(props) {
  props.type;
      var name = props.name,
      placeholder = props.placeholder,
      placeholderChar = props.placeholderChar;
      props.inputRef;
      var errorMsg = props.errorMsg,
      helperMsg = props.helperMsg,
      InputTextStyles = props.InputTextStyles,
      mask = props.mask,
      control = props.control;
      props.validation;
      _objectWithoutProperties(props, _excluded2); // console.log(ref)


  return /*#__PURE__*/React.createElement("div", {
    className: styles$9.InputTextWrapper
  }, /*#__PURE__*/React.createElement(Controller, {
    control: control,
    name: name,
    render: function render(_ref) {
      var field = _ref.field;
      return /*#__PURE__*/React.createElement(MaskedInput, _extends({}, field, {
        className: classnames(styles$9.InputText, errorMsg && styles$9.InputError, InputTextStyles !== null && InputTextStyles !== void 0 ? InputTextStyles : ""),
        mask: mask,
        placeholder: placeholder,
        placeholderChar: placeholderChar
      }));
    }
  }), errorMsg && /*#__PURE__*/React.createElement("span", {
    className: styles$9.ErrorMessage
  }, errorMsg), !errorMsg && helperMsg && /*#__PURE__*/React.createElement("span", {
    className: styles$9.HelperMessage
  }, helperMsg));
};

var css_248z$8 = ".Step-module_StepWrapper__qjMSm{margin-right:calc(100% + 1000px);max-height:0;opacity:0;overflow-x:hidden;position:absolute;transition:margin-right .8s ease-out,opacity 1s ease-out;width:100%}.Step-module_ActiveStep__SZDLu{margin-right:0;max-height:100%;opacity:1;position:relative;transition:margin-right .8s ease-out,opacity 1s ease-out}";
var styles$8 = {"StepWrapper":"Step-module_StepWrapper__qjMSm","ActiveStep":"Step-module_ActiveStep__SZDLu"};
styleInject(css_248z$8);

var StepperContext = /*#__PURE__*/createContext();

var Step = function Step(props) {
  var children = props.children,
      stepNum = props.stepNum;
      props.currentStep;
  var stepperContext = useContext(StepperContext);
  return /*#__PURE__*/React.createElement("div", {
    className: classnames(styles$8.StepWrapper, stepperContext.currentStep === stepNum ? styles$8.ActiveStep : "")
  }, children);
};

var css_248z$7 = ".Stepper-module_StepperWrapper__C4Prs{align-items:center;display:flex;flex-direction:column;justify-content:space-between;min-height:300px}.Stepper-module_StepIndicatorText__-gaHC{color:var(--color-textLight);font-size:.7rem;margin-top:15px;text-align:center}";
var styles$7 = {"StepperWrapper":"Stepper-module_StepperWrapper__C4Prs","StepIndicatorText":"Stepper-module_StepIndicatorText__-gaHC"};
styleInject(css_248z$7);

var Stepper = function Stepper(props) {
  var children = props.children,
      steps = props.steps,
      stepperLength = props.stepperLength,
      currentStep = props.currentStep,
      handleMovement = props.handleMovement;
  return /*#__PURE__*/React.createElement(StepperContext.Provider, {
    value: {
      stepperLength: stepperLength,
      currentStep: currentStep,
      handleMovement: handleMovement
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$7.StepperWrapper
  }, children, /*#__PURE__*/React.createElement("span", {
    className: styles$7.StepIndicatorText
  }, currentStep, " of ", stepperLength, " ", /*#__PURE__*/React.createElement("br", null), steps[currentStep - 1].label)));
};

var css_248z$6 = ".StepLabel-module_StepLabelWrapper__ZxEy7{align-items:center;display:flex;justify-content:center}";
var styles$6 = {"StepLabelWrapper":"StepLabel-module_StepLabelWrapper__ZxEy7"};
styleInject(css_248z$6);

var StepLabel = function StepLabel(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$6.StepLabelWrapper
  }, children);
};

var css_248z$5 = ".StepContent-module_StepContentWrapper__sveNh{align-items:center;display:flex;justify-content:center}";
var styles$5 = {"StepContentWrapper":"StepContent-module_StepContentWrapper__sveNh"};
styleInject(css_248z$5);

var StepContent = function StepContent(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$5.StepContentWrapper
  }, children);
};

var css_248z$4 = "";
var styles$4 = {};
styleInject(css_248z$4);

var Card = function Card(props) {
  var children = props.children;
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$4.Card
  }, children);
};

var css_248z$3 = ".CardHeader-module_CardHeaderWrapper__vDhvO{background-color:var(--color-primary);border-radius:20px 20px 0 0;padding:20px 20px 45px}";
var styles$3 = {"CardHeaderWrapper":"CardHeader-module_CardHeaderWrapper__vDhvO"};
styleInject(css_248z$3);

var CardHeader = function CardHeader(props) {
  var children = props.children;
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$3.CardHeaderWrapper
  }, children);
};

var css_248z$2 = ".CardContent-module_CardContentWrapper__QZHEh{background-color:#fff;border-radius:20px 20px 0 0;margin-top:-30px;padding:20px}";
var styles$2 = {"CardContentWrapper":"CardContent-module_CardContentWrapper__QZHEh"};
styleInject(css_248z$2);

var CardContent = function CardContent(props) {
  var children = props.children;
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$2.CardContentWrapper
  }, children);
};

var css_248z$1 = ".CardFooter-module_CardFooterWrapper__QiqiP{background-color:var(--color-light);border-radius:0 0 20px 20px;padding:20px}";
var styles$1 = {"CardFooterWrapper":"CardFooter-module_CardFooterWrapper__QiqiP"};
styleInject(css_248z$1);

var CardFooter = function CardFooter(props) {
  var children = props.children;
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles$1.CardFooterWrapper
  }, children);
};

var css_248z = ".Typography-module_TypographyWrapper__Pi0la{color:var(--color-textPrimary)}.Typography-module_Typography_Align__left__yDY1r{text-align:left}.Typography-module_Typography_Align__center__irnyL{text-align:center}.Typography-module_Typography_Align__right__S-VLP{text-align:right}.Typography-module_Typography_Align__justify__THeS8{text-align:justify}.Typography-module_Typography_Variant__h3__Nmf7Q{color:var(--color-textDark);font-size:1.3rem;font-weight:600;margin:0}.Typography-module_Typography_Variant__h3__Nmf7Q.Typography-module_Typography_FontColor__textPrimary__TdNpm{color:var(--color-textPrimary)}.Typography-module_Typography_Variant__h3__Nmf7Q.Typography-module_Typography_FontColor__textSecondary__c5l6a{color:var(--color-textSecondary)}.Typography-module_Typography_Variant__h3__Nmf7Q.Typography-module_Typography_FontColor__textDark__SWfUz{color:var(--color-textDark)}.Typography-module_Typography_Variant__h3__Nmf7Q.Typography-module_Typography_FontColor__textLight__QUDyI{color:var(--color-textLight)}.Typography-module_Typography_Variant__h3__Nmf7Q.Typography-module_Typography_FontColor__textDefault__7zSbv{color:var(--color-textDefault)}.Typography-module_Typography_Variant__caption__lfGtU{color:var(--color-textDefault);font-size:.8rem;font-weight:300;margin:0;padding:0}";
var styles = {"TypographyWrapper":"Typography-module_TypographyWrapper__Pi0la","Typography_Align__left":"Typography-module_Typography_Align__left__yDY1r","Typography_Align__center":"Typography-module_Typography_Align__center__irnyL","Typography_Align__right":"Typography-module_Typography_Align__right__S-VLP","Typography_Align__justify":"Typography-module_Typography_Align__justify__THeS8","Typography_Variant__h3":"Typography-module_Typography_Variant__h3__Nmf7Q","Typography_FontColor__textPrimary":"Typography-module_Typography_FontColor__textPrimary__TdNpm","Typography_FontColor__textSecondary":"Typography-module_Typography_FontColor__textSecondary__c5l6a","Typography_FontColor__textDark":"Typography-module_Typography_FontColor__textDark__SWfUz","Typography_FontColor__textLight":"Typography-module_Typography_FontColor__textLight__QUDyI","Typography_FontColor__textDefault":"Typography-module_Typography_FontColor__textDefault__7zSbv","Typography_Variant__caption":"Typography-module_Typography_Variant__caption__lfGtU"};
styleInject(css_248z);

var Typography = function Typography(props) {
  var variant = props.variant,
      text = props.text,
      color = props.color,
      align = props.align;
  return /*#__PURE__*/React$1.createElement("div", {
    className: styles.TypographyWrapper
  }, /*#__PURE__*/React$1.createElement("p", {
    className: classnames(variant ? styles["Typography_Variant__".concat(variant)] : "Typography_Variant__p", color && styles["Typography_FontColor__".concat(color)], align && styles["Typography_Align__".concat(align)])
  }, text !== null && text !== void 0 ? text : ""));
};

export { Button, Card, CardContent, CardFooter, CardHeader, InputMask, InputText, Step, StepContent, StepLabel, Stepper, Typography };
//# sourceMappingURL=index.esm.js.map
