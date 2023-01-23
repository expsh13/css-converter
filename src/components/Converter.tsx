import { useCopyText } from "../hooks/useCopyText";
import { useConvert } from "../hooks/useConvert";
import "./Converter.css";
import { MdContentCopy } from "react-icons/md";

const Converter = () => {
  // 最初に実行されると空になる
  const { getCss, getBase, getUnit, convertCss } = useConvert();

  const copyText = useCopyText;

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
        <div className="converter__unit">
          <div className="converter__unit-item">
            <p className="converter__unit-item-txt">変換単位：px</p>
          </div>
          <div className="converter__unit-item">
            <p className="converter__unit-item-txt">変換後単位：</p>
            <select
              className="converter__unit-item-input"
              onChange={(e) => getUnit(e.target.value)}
            >
              <option value={"vw"}>vw</option>
              <option value={"%"}>%</option>
            </select>
          </div>
        </div>
        <div className="converter__css">
          <div className="converter__css-item">
            <textarea
              className="converter__css-area converter__css-area--input"
              placeholder="CSSを入力してください。"
              onChange={(e) => getCss(e.target.value)}
            ></textarea>
          </div>
          <div className="converter__css-item">
            <textarea
              className="converter__css-area"
              readOnly={true}
              defaultValue={convertCss}
              placeholder="ここに出力されます。"
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
