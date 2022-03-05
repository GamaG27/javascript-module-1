function secondMatchesAmy(array) {
  if (array[2] === "Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
}

console.log(secondMatchesAmy(["Bob", "Amy", "alice"]));
console.log(secondMatchesAmy(["Alice", "Bob", "Amy"]));
