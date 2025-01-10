
var wordSubsets = function(words1) {
    return words1.toLowerCase()===words1.split("").reverse().join('').toLowerCase() 
    
};
console.log(wordSubsets("madam"));
