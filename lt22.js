function canAliceWin(nums) {
    let singleDigitSum = 0, doubleDigitSum = 0, totalSum = 0;
  
    for (const num of nums) {
      totalSum += num; 
      if (num < 10) {
        singleDigitSum += num; 
      } else if (num < 100) {
        doubleDigitSum += num;
      }
    }
  
    const bobIfAliceTakesSingle = totalSum - singleDigitSum;
    const bobIfAliceTakesDouble = totalSum - doubleDigitSum;
  
    return singleDigitSum > bobIfAliceTakesSingle || doubleDigitSum > bobIfAliceTakesDouble;
  }
  
  
  console.log(canAliceWin([1, 2, 3, 4, 10])); 