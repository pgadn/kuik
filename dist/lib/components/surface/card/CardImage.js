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

var css_248z = "";
var styles = {};
styleInject(css_248z);

var CardImage = function CardImage(props) {
  props.component;
      var height = props.height,
      image = props.image,
      alt = props.alt;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.CardImageWrapper
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    height: height !== null && height !== void 0 ? height : "",
    alt: alt !== null && alt !== void 0 ? alt : ""
  }));
};

export { CardImage as default };
