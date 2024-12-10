let numbers=[1,2,3,4];
let targetIndex=3;

let updatedNumbers = numbers.map((value, index) => 
  index === targetIndex ? value + 1 : value
);

console.log(updatedNumbers)