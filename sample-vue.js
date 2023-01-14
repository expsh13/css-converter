function anonymous() {
  with (this) {
    return _c("div", { attrs: { id: "app" } }, [
      _c("h1", [_v("一括pxからvw計算機")]),
      _v(" "),
      _m(0),
      _v(" "),
      _m(1),
      _v(" "),
      _c("div", { attrs: { id: "basePx" } }, [
        _v("\n        Base: "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: basepx,
              expression: "basepx",
            },
          ],
          attrs: { type: "number", min: "320", max: "2000" },
          domProps: { value: basepx },
          on: {
            input: function ($event) {
              if ($event.target.composing) return;
              basepx = $event.target.value;
            },
          },
        }),
        _v(" px\n      "),
      ]),
      _v(" "),
      _c("div", { attrs: { id: "convert" } }, [
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: inputCss,
              expression: "inputCss",
            },
          ],
          attrs: {
            placeholder:
              "CSSを入力して下さい\r\n以下のように入力できます！\r\n.sample{\r\n  width: calc(100% - 50px);\r\n  padding: 0 20px 0 10px;\r\n  font-size: 16px;\r\n}",
          },
          domProps: { value: inputCss },
          on: {
            input: function ($event) {
              if ($event.target.composing) return;
              inputCss = $event.target.value;
            },
          },
        }),
        _v(" "),
        _c("textarea", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: convertCss,
              expression: "convertCss",
            },
          ],
          attrs: {
            placeholder:
              "pxをvwに変換したCSSを出力します\r\n以下のように変換されます！\r\n.sample{\r\n  width: calc(100% - 13.333vw);\r\n  padding: 0 5.333vw 0 2.667vw;\r\n  font-size: 4.267vw;\r\n}",
            readonly: "",
          },
          domProps: { value: convertCss },
          on: {
            input: function ($event) {
              if ($event.target.composing) return;
              convertCss = $event.target.value;
            },
          },
        }),
      ]),
    ]);
  }
}
