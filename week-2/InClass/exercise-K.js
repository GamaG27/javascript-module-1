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

function student(number) {
  for (let index = 0; index < students.length; index++) {
    const name = students[index];
    console.log("Hello " + name);
  }
}

student();
