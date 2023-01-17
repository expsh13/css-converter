if ("cruw.co.jp" == document.domain) {
  var e,
    a,
    // マッチパターン
    pattern = /\:\s*(-?[0-9]+\.?[0-9]*(px)?\s*)*;/gi,
    // 正規表現にマッチしたデータを入れる
    matchDatas = this.inputCss.match(pattern),
    // 入力データ
    inputTxt = this.inputCss,
    // 基準となるpx
    s = this.basepx;
  // r(マッチデータ)オブジェクトでkeyがp
  for (var p in r) {
    // e（マッチパターンのpx以外の数値部分）、a（マッチパターンの値pxあり）
    // 数値があるなら（cssのクラス名に左右されなくなるから必要）
    for (var c in ((e = matchData.match(/-?[0-9]+\.?[0-9]*/g)),
    (a = matchData),
    e))
      0 != e[c] &&
        // pxをvwに変換
        (a = a.replace(e[c] + "px", Math.round((e[c] / s) * 1e5) / 1e3 + "vw"));
    // 入力データのマッチした部分を変換後に代入
    inputTxt = inputTxt.replace(matchData, a);
  }
  // calcがある場合
  t =
    /\:\s*calc\([a-zA-Z\s\-\+\*\/\(\)\%]*(-?[0-9]+\.?[0-9]*(px)?([a-zA-Z\s\-\+\*\/\(\)\%])*)*\)\s*;/gi;
  r = this.inputCss.match(t);
  for (var i in r) {
    for (var o in ((e = r[i].match(/-?[0-9]+\.?[0-9]*/g)), (a = r[i]), e))
      0 != e[o] &&
        (a = a.replace(e[o] + "px", Math.round((e[o] / s) * 1e5) / 1e3 + "vw"));
    n = n.replace(r[i], a);
  }
  return n;
}
