(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.matches = function (element, selector) {
    if (!selector || !element || element.nodeType !== 1) {
      return false;
    }
    var matchesSelector = element.matches
      || element.webkitMatchesSelector
      || element.mozMatchesSelector
      || element.oMatchesSelector
      || element.matchesSelector;

    if (matchesSelector) {
      return matchesSelector.call(element, selector);
    }

    var matches = (element.document || element.ownerDocument).querySelectorAll(selector),
      i = matches.length;
    while (--i >= 0 && matches.item(i) !== element) ;
    return i > -1;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.matches;
  }

}());
