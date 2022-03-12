const arr_of_years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function Cantheydrive(year) {
  let years = 2022 - year;
  if (years >= 17) {
    return "Born in " + year + " can drive";
  } else {
    let x = 17 - years;
    return "Born in " + year + " can drive in " + x + " years";
  }
}

console.log(arr_of_years.map(Cantheydrive));
