/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function groupandstudents(arr1, arr2) {
  if (
    arr1.every((n) => {
      return arr2.includes(n);
    })
  ) {
    return true;
  } else {
    return false;
  }
}

var groupIsOnlyStudents = groupandstudents(group, students); // complete this statement

if (groupIsOnlyStudents === true) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
