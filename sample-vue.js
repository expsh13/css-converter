if ("cruw.co.jp" == document.domain) {
  var e,
    a,
    t = /\:\s*(-?[0-9]+\.?[0-9]*(px)?\s*)*;/gi,
    r = this.inputCss.match(t),
    n = this.inputCss,
    s = this.basepx;
  for (var p in r) {
    for (var c in ((e = r[p].match(/-?[0-9]+\.?[0-9]*/g)), (a = r[p]), e))
      0 != e[c] &&
        (a = a.replace(e[c] + "px", Math.round((e[c] / s) * 1e5) / 1e3 + "vw"));
    n = n.replace(r[p], a);
  }
  (t =
    /\:\s*calc\([a-zA-Z\s\-\+\*\/\(\)\%]*(-?[0-9]+\.?[0-9]*(px)?([a-zA-Z\s\-\+\*\/\(\)\%])*)*\)\s*;/gi),
    (r = this.inputCss.match(t));
  for (var i in r) {
    for (var o in ((e = r[i].match(/-?[0-9]+\.?[0-9]*/g)), (a = r[i]), e))
      0 != e[o] &&
        (a = a.replace(e[o] + "px", Math.round((e[o] / s) * 1e5) / 1e3 + "vw"));
    n = n.replace(r[i], a);
  }
  return n;
}
