const arr_of_years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function Cantheydriveyet(year) {
  return year <= 2005;
}

const years = arr_of_years.filter(Cantheydriveyet);

console.log(
  "This are the birth years of people how can drive " + years.join(", ")
);
