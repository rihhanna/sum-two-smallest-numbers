// Good Luck 💪🏾
function sumTwoSmallestNums(arr) {
    // check if the array has at least two elements
    if (arr.length < 2) {
      return null;
    }
    // sort the array in ascending order
    arr.sort((a, b) => a - b);
    // get the first and second elements
    let first = arr[0];
    let second = arr[1];
    // return their sum
    return first + second;
  }
  console.log(sumTwoSmallestNums([12, 5, 24, 55, 18]))
  console.log(sumTwoSmallestNums([190, 300, 230, 800]))
  
