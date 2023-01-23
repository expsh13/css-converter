// クリップボードにコピー
export const useCopyText = async (value: string) => {
  if (value) {
    await navigator.clipboard.writeText(value);
  }
};
