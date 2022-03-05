/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function StartT(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i][0] === "T") {
      console.log(a[i]);
    }
  }
}

StartT(daysOfWeek);
