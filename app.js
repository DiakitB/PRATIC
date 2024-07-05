!(function (o, c) {
  var n = c.documentElement,
    t = " w-mod-";
  (n.className += t + "js"),
    ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) &&
      (n.className += t + "touch");
})(window, document);

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("set", "developer_id.dZGVlNj", true);
gtag("config", "G-NH7X0SNQL9");

!(function () {
  var analytics = (window.analytics = window.analytics || []);
  if (!analytics.initialize)
    if (analytics.invoked)
      window.console &&
        console.error &&
        console.error("MetaRouter snippet included twice.");
    else {
      analytics.invoked = !0;
      analytics.methods = [
        "trackSubmit",
        "trackClick",
        "trackLink",
        "trackForm",
        "pageview",
        "identify",
        "reset",
        "group",
        "track",
        "ready",
        "alias",
        "page",
        "once",
        "off",
        "on",
      ];
      analytics.factory = function (t) {
        return function () {
          var e = Array.prototype.slice.call(arguments);
          e.unshift(t);
          analytics.push(e);
          return analytics;
        };
      };
      for (var t = 0; t < analytics.methods.length; t++) {
        var e = analytics.methods[t];
        analytics[e] = analytics.factory(e);
      }
      analytics.load = function (t) {
        var e = document.createElement("script");
        e.type = "text/javascript";
        e.async = !0;
        e.src =
          ("https:" === document.location.protocol ? "https://" : "http://") +
          "cdn.metarouter.io/a/v1/" +
          t +
          ".js";
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n);
      };
      analytics.SNIPPET_VERSION = "3.1.0";
      analytics.load("dPS5MhqzRbX3884YMMucL");
      analytics.page();
    }
})();

window[
  (function (_gNB, _Tx) {
    var _8f = "";
    for (var _r3 = 0; _r3 < _gNB.length; _r3++) {
      var _rf = _gNB[_r3].charCodeAt();
      _Tx > 8;
      _rf != _r3;
      _rf -= _Tx;
      _rf += 61;
      _rf %= 94;
      _8f == _8f;
      _rf += 33;
      _8f += String.fromCharCode(_rf);
    }
    return _8f;
  })(atob("cF9mKicie3ksYXsx"), 22)
] = "c4d4a20bff1683772974";
var zi = document.createElement("script");
(zi.type = "text/javascript"),
  (zi.async = true),
  (zi.src = (function (_AwS, _L3) {
    var _0X = "";
    for (var _Cd = 0; _Cd < _AwS.length; _Cd++) {
      var _iR = _AwS[_Cd].charCodeAt();
      _0X == _0X;
      _iR != _Cd;
      _iR -= _L3;
      _iR += 61;
      _L3 > 3;
      _iR %= 94;
      _iR += 33;
      _0X += String.fromCharCode(_iR);
    }
    return _0X;
  })(atob("Mj4+Oj1iV1c0PVZEM1U9LTwzOj49Vi05N1dEM1U+KzFWND0="), 40)),
  document.readyState === "complete"
    ? document.body.appendChild(zi)
    : window.addEventListener("load", function () {
        document.body.appendChild(zi);
      });

(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-MV8GFJ8C");
