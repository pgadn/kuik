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

var css_248z = ".CardHeader-module_CardHeaderWrapper__vDhvO{background-color:var(--qcuicq-color-primary);border-radius:20px 20px 0 0;padding:20px 20px 45px}";
var styles = {"CardHeaderWrapper":"CardHeader-module_CardHeaderWrapper__vDhvO"};
styleInject(css_248z);

var CardHeader = function CardHeader(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.CardHeaderWrapper
  }, children);
};

export { CardHeader as default };
