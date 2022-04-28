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

var css_248z = ".StepContent-module_StepContentWrapper__sveNh{align-items:center;display:flex;justify-content:center}";
var styles = {"StepContentWrapper":"StepContent-module_StepContentWrapper__sveNh"};
styleInject(css_248z);

var StepContent = function StepContent(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.StepContentWrapper
  }, children);
};

export { StepContent as default };
