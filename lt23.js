function findIndicesWithCharacter(words, x) {
    return words.map((word, index) => (word.includes(x) ? index : -1)).filter(index => index !== -1);
}

// Example 1
const words1 = ["leet", "code"];
const x1 = "e";
console.log(findIndicesWithCharacter(words1, x1)); // Output: [0, 1]

// Example 2
const words2 = ["abc", "bcd", "aaaa", "cbc"];
const x2 = "a";
console.log(findIndicesWithCharacter(words2, x2)); // Output: [0, 2]

// Example 3
const words3 = ["abc", "bcd", "aaaa", "cbc"];
const x3 = "z";
console.log(findIndicesWithCharacter(words3, x3)); // Output: []
