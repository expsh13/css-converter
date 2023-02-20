import React, { useEffect, useState } from "react";

export const useConvert = () => {
  // 入力データ
  const [inputCss, setInputCss] = useState<string>("");
  const [inputBase, setInputBase] = useState<number>(375);
  const [inputUnit, setInputUnit] = useState<string>("vw");
  // 出力のデータ
  const [convertCss, setConvertCss] = useState<string>("");

  // 基準値の取得
  const getBase = (value: string) => {
    setInputBase(Number(value));
  };

  // cssの取得
  const getCss = (value: string) => {
    setInputCss(value);
  };

  // 単位の取得
  const getUnit = (value: string) => {
    setInputUnit(value);
  };

  useEffect(() => {
    // マッチパターン
    const pattern = /(?<=\s|calc\(|:)-*[0-9.]+px(?=.*;)/gi;
    // マッチcss
    let inputData = inputCss;
    const matchDatas = inputData.match(pattern);

    matchDatas?.map((matchData) => {
      const num = matchData.match(/-*[0-9.]+(?=px)/g);
      // pxをvwに変換
      const convertData = `${String(
        Number(((Number(num) / inputBase) * 100).toFixed(4))
      )}${inputUnit}`;
      setConvertCss((inputData = inputData.replace(matchData, convertData)));
    });
  }, [inputCss, inputBase, inputUnit]);

  return { getCss, getBase, getUnit, convertCss };
};
