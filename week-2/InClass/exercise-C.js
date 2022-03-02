function numberChecker(num) {
  if (num > 20) {
    return `${num} is greater than 20`;
    // Checks if num is greater than 20, if true sends message "(num) is greater than 20"
  } else if (num === 20) {
    return `${num} is equal to 20`;
    // Checks if (num) is equal in type and value to 20, if true sends message "(num) is equal to 20"
  } else if (num < 20) {
    return `${num} is less than 20`;
    // Checks if (num) is less than 20, if true sends message "(num) is less than 20"
  } else {
    return `${num} isn't even a number :(`;
    // Checks if (num) fails the prior "if's", if true sends message "(num) isn't even a number :( "
  }
}
