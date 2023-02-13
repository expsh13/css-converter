import { useCopyText } from "../hooks/useCopyText";
import { useConvert } from "../hooks/useConvert";
import "./Converter.css";
import { MdContentCopy } from "react-icons/md";

const Converter = () => {
  const { getCss, getBase, getUnit, convertCss } = useConvert();

  const copyText = useCopyText;

  const inputPlace = `ここにCSSを入力してください。
  @media (min-width: 769px) {
    .example {
      padding: 40px 60px;
    }
  }`;

  const outputPlace = `ここにCSSが出力されます。
  @media (min-width: 769px) {
    .example {
      padding: 3.2vw 16vw;
    }
  }`;

  return (
    <div className="converter">
      <div className="converter__item">
        <div className="converter__base">
          <p className="converter__base-txt">基準値：</p>
          <input
            className="converter__base-input"
            type="number"
            defaultValue={"375"}
            onChange={(e) => getBase(e.target.value)}
          />
          <p className="converter__base-txt">px</p>
        </div>
        <div className="converter__css">
          <div className="converter__css-item">
            <div className="converter__css-unit">
              <p className="converter__css-unit-txt">変換単位：px</p>
            </div>
            <textarea
              className="converter__css-area converter__css-area--input"
              placeholder={inputPlace}
              onChange={(e) => getCss(e.target.value)}
            ></textarea>
          </div>
          <div className="converter__css-item">
            <div className="converter__css-unit">
              <p className="converter__css-unit-txt">変換後単位：</p>
              <select
                className="converter__css-unit-input"
                onChange={(e) => getUnit(e.target.value)}
              >
                <option value={"vw"}>vw</option>
                <option value={"%"}>%</option>
              </select>
            </div>
            <textarea
              className="converter__css-area"
              readOnly={true}
              defaultValue={convertCss}
              placeholder={outputPlace}
            ></textarea>
            <div className="converter__css-icon-wrap">
              <button
                className="converter__css-copy"
                onClick={() => copyText(convertCss)}
              >
                <MdContentCopy />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
