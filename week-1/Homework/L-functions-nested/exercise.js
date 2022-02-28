const { Console } = require("console");

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function Upercase (A , B , C , D , E) {
  const A_UP = A.toUpperCase() 
  const B_UP = B.toUpperCase()
  const C_UP = D.toUpperCase()
  const D_UP = C.toUpperCase()
  const E_UP = E.toUpperCase()
  let H = "HELLO "
  let N = "\n"
 return H + A_UP + N + H + B_UP + N + H + C_UP + N + H + D_UP + N + H + E_UP 
}

console.log(Upercase(mentor1 , mentor2 , mentor3 , mentor4 , mentor5));