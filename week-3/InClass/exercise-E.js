const years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

function birthyear(year) {
  let birth = year - 2022;
  console.log(year, birth);
}

years.forEach(birthyear);
