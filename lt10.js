Array.prototype.last = function () {
    return this.length === 0 ? -1 : this[this.length - 1];
};


const arr1 = [];
console.log(arr1.last()); 