var subtractProductAndSum = function(n) {

   const b=n.toString().split('').reduce((acc,curr)=>acc * +curr,1)
   const a= n.toString().split('').reduce((acc,curr)=>acc+ +curr,0)
   return b-a
};
const result=subtractProductAndSum(234)
console.log(result);
