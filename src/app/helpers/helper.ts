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

export const truncateText = (text: string) => {
  const maxLength = 150;

  let res: string = text;
  if (text.length > maxLength) {
    res = text.substring(0, maxLength - 3) + "...";
  }
  
  return res;
};
