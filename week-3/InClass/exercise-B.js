const students = [
  "Akram Almehanni",
  "Alissa Nishihara",
  "Asaad Ben Ahmed",
  "burçak",
  "Deniz Burcay",
  "Ethan Carlsson",
  "Gloria Kwofie",
  "Isha Waheed",
  "javi varela",
  "Juan Amesty",
  "Kostiantyn Borodach",
  "Mehtap Parkinson",
  "Rachid Essantouh",
  "Shaminderjeet Kaur",
  "usman sahi",
  "Yuxuan Peng",
];
const otherstudents = ["Daniel", "Irini", "Ashleigh", "Rob", "Etzali"];

const combine = students.concat(otherstudents);

const orderer = combine.sort();

function Class(name, arr) {
  if (arr.includes(name)) {
    return name + " is in the class with " + arr;
  } else {
    return name + " is not at the class with " + arr;
  }
}

console.log(Class("Daniel", otherstudents));
