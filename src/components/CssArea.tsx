import React, { useState } from "react";

const CssArea: React.FC = () => {
  const [css, setCss] = useState("");

  // cssの取得
  const getCss = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputTxt = e.target.value;
    setCss(inputTxt.replace(/([0-9 .]+px)/g, changeCss));
    console.log(css);
    // setCss(() => e.target.value);
  };

  const changeCss = (): string => {
    return "a";
  };

  // クリップボードにコピー
  const copyTextToClipboard = async () => {
    if (css) {
      console.log("koko");
      await navigator.clipboard.writeText(css);
    }
  };

  return (
    <div>
      <textarea
        placeholder="CSSを入力してください。"
        onChange={getCss}
      ></textarea>
      <textarea name="output" id="" value={css}></textarea>
      <button onClick={() => copyTextToClipboard()}>コピー</button>
    </div>
  );
};

export default CssArea;
