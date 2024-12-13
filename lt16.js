function largestOddInteger(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (parseInt(num[i]) % 2 !== 0) { 
            return num.slice(0, i + 1);  
        }
    }
    return "";
}

console.log(largestOddInteger("52"));      
console.log(largestOddInteger("4206"));     
console.log(largestOddInteger("35427"));    
console.log(largestOddInteger("123456789")); 
