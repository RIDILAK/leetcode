function plusOne(digits) {
    let n = digits.length;
  
    for (let i = n - 1; i >= 0; i--) {
     
      digits[i] += 1;
  
      
      if (digits[i] === 10) {
        digits[i] = 0;
      } else {
        
        return digits;
      }
    }
  
   
    digits.unshift(1);
    return digits;
  }
  
  
  console.log(plusOne([1, 2, 3])); 
  console.log(plusOne([9, 9, 9]));
  console.log(plusOne([0]));      
  