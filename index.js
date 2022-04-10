function hasTargetSum(array , target) {
  for (let i =0 ; i< array.length ; i++){
      if (array.length<2){
          return false
      } else if (array[i] > target){
          i++
      }
      else if (array[i] === target){
          for (const number of array){
            isItZero(number)
          }
      }
      else {
          for (let j =i+1 ; j< array.length; j++){
              let diff = target - array[i]
              if (array[j] === diff){
                  return true
              } else {
                  j++
                  if (j === array.length){
                      return false
                  }
                  else if (array[j] === diff){
                      return true
                  }
              } 
          }
      }
  }
}

function isItZero(number){
  if (number===0) {
    return true
  } else {
    return false
  }
}
/* 
  Write the Big O time complexity of your function here
  NEED TO CLEAN UP!!!
*/

/* 
  Add your pseudocode here

  With constant i, for each element i in array,
  if the length of the array is less than 2, return false.
  else if the i element of the array is greater than the target, 
    add 1 to i and move on to the next element.
  else if the i element is equal to the target, 
    define a function to find if anyother element in the array is equal to 0. if not, add 1 to i and move onto the next element.
  else loop another constant j right ahead of the i element. 
    with j we can check the remaining elements in the array while keeping the array[i] value intact. 
    calculate the difference between the target and array[i]. 
    we need to find this difference value among the remaining elements in the array using j. 
    if the j element does not equal the difference, 
      add 1 to j. 
    else if j is equal to the length of the array,
      return false because we haven't found it. 
    else if array[j] is equal to the difference,
      return true because we found it. 



*/

/*
  Add written explanation of your solution here

  For this problem we need to keep in mind, we only need ONE PAIR. Once we find this pair, we return true.
  Calculate the current difference with the current element and the target. 
  Use another constant to iterate through the array looking for the difference. 
  if we don't find the current difference, move onto the next element and find the new difference.
  continue like this until we reach the last element in the array. 
  Remember to start by showing what will falsify the function, if there is less than 2 elements in the array, if the element is equal to the target and there isn't a '0' in the array (target + 0 = target).


*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting:true ")
  console.log("=>", hasTargetSum([30,2,6,7,1], 13));
}

module.exports = hasTargetSum;
