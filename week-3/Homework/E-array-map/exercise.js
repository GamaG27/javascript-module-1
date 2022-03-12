// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function times100(number) {
  return number * 100;
}

const case1 = numbers.map(times100);

const case2 = numbers.map(function ttimes100(n) {
  return n * 100;
});

const case3 = numbers.map(function (n) {
  return n * 100;
});

const case4 = numbers.map((n) => {
  return n * 100;
});

const case5 = numbers.map((n) => n * 100);
