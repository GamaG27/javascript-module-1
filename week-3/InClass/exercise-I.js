const itsmessy = [
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];

const cleaner = itsmessy
  .filter((mess) => typeof mess === "string")
  .map((element) => element.toUpperCase())
  .join("!, ");

console.log(cleaner);
