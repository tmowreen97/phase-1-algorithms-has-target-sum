function hasTargetSum(array , target) {
  for (let i =0 ; i< array.length ; i++){
      console.log(`we're starting with i position ${i} and value ${array[i]}`)
      if (array.length<2){
          return false
      } else if (array[i] > target){
          return false
      }
      else if (array[i] === target){
          for (let j = i+1 ; j <array.length ; j++){
              if (array[j] === 0) {
                  console.log(`we're looking for a value of 0`)
                  return true
              } else { 
                  console.log('no 0!')
                  return false
              }
          }
      }
      else if (array[i]<target) {
          for (let k =i+1 ; k< array.length; k++){
              let diff = target - array[i]
              console.log(`the diff is equal to ${diff} so we are looking for that array value. currently k is ${k} and value is ${array[k]}`)
              if (array[k] === diff){
                  return true
              } else if (array[k]!==diff) {
                  k++
                  console.log(`the diff should be the same ${diff}, but k is ${k} array value is ${array[k]}`)
                  if (k === array.length){
                      return false
                  }
                  else if (array[k] === diff){
                      return true
                  }
              }
              
          }
      }
  }
}

/* 
  Write the Big O time complexity of your function here
  NEED TO CLEAN UP!!!
*/

/* 
  Add your pseudocode here
  function takes two arguments, array and target.
  first we have to iterate through the array
  We are adding pairs together and obtaining the value.
    We can iterate through array, grab the first index, subtract that from the target value and see if the difference is a number also in the array. 
  compare each value to the target. 
  at the end we get either true or false.
  return true if we have a pair that adds up to the target. 
    WE ONLY NEED ONE PAIR!
  return false if we do not.
*/

/*
  Add written explanation of your solution here

  First, make a for loop starting with grabbing the first value of the array.
    If that selection totals to GREATER THAN OR EQUAL TO the target, move on to the next value.
    Else (if) subtract that value from the target value. 
      If the difference is a value within the array return TRUE
      Else move onto the next value
  ELSE Return false.


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
}

module.exports = hasTargetSum;
