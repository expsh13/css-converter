import { match } from "assert";
import React, { useState } from "react";

const CssArea: React.FC = () => {
  // 出力のcss
  const [css, setCss] = useState("");

  // cssの取得
  const getCss = (value: string): void => {
    // 入力データ
    const inputTxt = value;
    // マッチパターン
    // const pattern = /[0-9 .]+px*;/gi;
    const pattern = /(?<=\s|:)[0-9 .]+px/gi;
    // マッチcss
    const matchDatas = inputTxt.match(pattern);
    if (matchDatas == null) return;
    // console.log(matchDatas);

    matchDatas.map((matchData) => {
      const num = matchData.match(/[0-9 .](?=px)/g);
      console.log(matchData);
      console.log(num);
      const matchDataNum = Number(num) * 100;
      console.log(matchDataNum * 100);
      // pxをvwに変換
      // matchData = matchData.replace(
      //   `${matchDataNum} px`,
      //   `${Math.round(matchDataNum * 100)} vw`
      // );
      // setCss(inputTxt.replace(matchData, ""));
    });
  };

  // クリップボードにコピー
  const copyTextToClipboard = async () => {
    if (css) {
      await navigator.clipboard.writeText(css);
    }
  };

  return (
    <div>
      <textarea
        placeholder="CSSを入力してください。"
        onChange={(e) => getCss(e.target.value)}
      ></textarea>
      <textarea
        defaultValue={css}
        placeholder="ここに出力されます。"
      ></textarea>
      <button onClick={() => copyTextToClipboard()}>コピー</button>
    </div>
  );
};

export default CssArea;
