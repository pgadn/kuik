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

var css_248z = ".CardFooter-module_CardFooterWrapper__QiqiP{background-color:var(--qcuicq-color-light);border-radius:0 0 20px 20px;padding:20px}";
var styles = {"CardFooterWrapper":"CardFooter-module_CardFooterWrapper__QiqiP"};
styleInject(css_248z);

var CardFooter = function CardFooter(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.CardFooterWrapper
  }, children);
};

export { CardFooter as default };
