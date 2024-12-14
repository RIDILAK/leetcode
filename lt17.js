let numbers=[1,1,1,1,1];
let result=[...new Set(numbers)];
let sum=result.reduce((acc,curr)=>acc+curr)

console.log(sum);
