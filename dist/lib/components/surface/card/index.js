import 'react';

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
styleInject(css_248z$4);

var css_248z$3 = ".CardContent-module_CardContentWrapper__QZHEh{background-color:#fff;border-radius:20px 20px 0 0;margin-top:-30px;padding:20px}";
styleInject(css_248z$3);

var css_248z$2 = ".CardFooter-module_CardFooterWrapper__QiqiP{background-color:var(--qcuicq-color-light);border-radius:0 0 20px 20px;padding:20px}";
styleInject(css_248z$2);

var css_248z$1 = ".CardHeader-module_CardHeaderWrapper__vDhvO{background-color:var(--qcuicq-color-primary);border-radius:20px 20px 0 0;padding:20px 20px 45px}";
styleInject(css_248z$1);

var css_248z = "";
styleInject(css_248z);
