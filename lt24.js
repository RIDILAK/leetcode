function findWordsContaining(words, x) {
     indices = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            indices.push(i);
        }
    }
    return indices;
}

