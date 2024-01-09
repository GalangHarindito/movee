export const defineYear = (val: string) => {
  const newVal = val.split("-");
  return newVal[0];
};

export const defineLanguage = (val: string) => {
  let language = "";
  switch (val) {
    case "en":
      language = "English";
      break;
    case "ja":
      language = "Japan";
      break;
    default:
  }
  return language;
};
