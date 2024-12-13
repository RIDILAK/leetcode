var largestOddNumber = function (num) {
    return Math.max(...num.split('').filter(c=>c%2 !==0,null))
       
};
console.log(largestOddNumber("52"));
