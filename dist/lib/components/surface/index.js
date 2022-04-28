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

var css_248z$4 = ".Card-module_CardWrapper__JmcJs{display:flex;flex-direction:column}";
var styles$4 = {"CardWrapper":"Card-module_CardWrapper__JmcJs"};
styleInject(css_248z$4);

var Card = function Card(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$4.CardWrapper
  }, children);
};

var css_248z$3 = ".CardHeader-module_CardHeaderWrapper__vDhvO{background-color:var(--qcuicq-color-primary);border-radius:20px 20px 0 0;padding:20px 20px 45px}";
var styles$3 = {"CardHeaderWrapper":"CardHeader-module_CardHeaderWrapper__vDhvO"};
styleInject(css_248z$3);

var CardHeader = function CardHeader(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$3.CardHeaderWrapper
  }, children);
};

var css_248z$2 = ".CardContent-module_CardContentWrapper__QZHEh{background-color:#fff;border-radius:20px 20px 0 0;margin-top:-30px;padding:20px}";
var styles$2 = {"CardContentWrapper":"CardContent-module_CardContentWrapper__QZHEh"};
styleInject(css_248z$2);

var CardContent = function CardContent(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$2.CardContentWrapper
  }, children);
};

var css_248z$1 = ".CardFooter-module_CardFooterWrapper__QiqiP{background-color:var(--qcuicq-color-light);border-radius:0 0 20px 20px;padding:20px}";
var styles$1 = {"CardFooterWrapper":"CardFooter-module_CardFooterWrapper__QiqiP"};
styleInject(css_248z$1);

var CardFooter = function CardFooter(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: styles$1.CardFooterWrapper
  }, children);
};

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

export { Card, CardContent, CardFooter, CardHeader, CardImage };
