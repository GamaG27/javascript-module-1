const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh", "Damian"];

function myname(name) {
  return name === "Damian";
}

const find_my_name = names.find(myname);

function itsname(n) {
  if (find_my_name === "Damian") {
    return "Found me!";
  } else {
    return "Haven't found me 😞";
  }
}

console.log(itsname());
