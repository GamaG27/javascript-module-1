function State_of_mind(Felling) {
  if (Felling === "happy") {
    return "Good job you are doing GREAT!";
  }
  if (Felling === "sad") {
    return "Every cloud 🌧️ has a silver lining ⛅";
  }
  if (typeof Felling === Number) {
    return "Beep beep boop 🤖";
  } else {
    return "Sorry, I am still learning emotions";
  }
}
console.log(State_of_mind("sad"));
