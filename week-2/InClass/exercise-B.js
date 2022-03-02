function boolChecker(bool) {
  if (typeof bool === false) {
    return "You've given me a bool, thanks!";
  }

  return "No bool, not cool.";
}

console.log(boolChecker(true));
