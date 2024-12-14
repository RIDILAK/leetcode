function sumOfUnique(nums) {
    return nums.filter((num, index, self) => self.indexOf(num) === self.lastIndexOf(num))
               .reduce((sum, num) => sum + num, 0);
}


let nums = [1, 2, 3, 2, 3, 4, 5];
console.log(sumOfUnique(nums)); 

