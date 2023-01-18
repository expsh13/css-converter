import React, { useState } from "react";

const CssArea: React.FC = () => {
  const getBase = (value: string): number => {
    console.log(value);
    return Number(value);
  };

  // 出力のcss
  const [convertCss, setConvertCss] = useState("");

  // cssの取得
  const getCss = (value: string): void => {
    // 入力データ
    let inputData = value;
    // console.log(inputData);
    setConvertCss(inputData);
    // マッチパターン
    const pattern = /(?<=\s|calc\(|:)[0-9.]+px/gi;
    // マッチcss
    const matchDatas = inputData.match(pattern);
    console.log(matchDatas);
    if (matchDatas == null) return;

    console.log("koko");

    matchDatas.map((matchData) => {
      const num = matchData.match(/[0-9.]+(?=px)/g);
      // console.log("num");
      // pxをvwに変換
      // この変換で半角空白が消えている
      const convertData = `${String(Number(num) * 100)}vw`;
      setConvertCss((inputData = inputData.replace(matchData, convertData)));
    });
  };

  // クリップボードにコピー
  const copyTextToClipboard = async () => {
    if (convertCss) {
      await navigator.clipboard.writeText(convertCss);
    }
  };

  return (
    <div>
      <textarea
        placeholder="CSSを入力してください。"
        onChange={(e) => getCss(e.target.value)}
      ></textarea>
      <textarea
        readOnly={true}
        defaultValue={convertCss}
        placeholder="ここに出力されます。"
      ></textarea>
      <button onClick={() => copyTextToClipboard()}>コピー</button>
      <input
        type="text"
        defaultValue={"375"}
        onChange={(e) => getBase(e.target.value)}
      />
      <p className="">px</p>
      <select name="example">
        <option>vw</option>
        <option>%</option>
      </select>
    </div>
  );
};

export default CssArea;
