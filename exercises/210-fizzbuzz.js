// Write a function "fizzbuzz" that returns the fizzbuzz string for an input number.
// A fizzbuzz string is defined as the following:
// For every number from 1 to the input number
// - if that number is not a multiple of 3 or 5, add a period "." to the fizzbuzz string
// - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
// - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
// - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
//
// Examples:
// fizzbuzz(3) --> '..fizz'
// fizzbuzz(15) --> '..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz'

function fizzbuzz(stopIt)
{
var addToIt = "" 
for (num = 1; num <= stopIt ; num++) {
if (num % 3 !== 0 && num % 5 !== 0) {addToIt = addToIt + "." }
if (num % 3 === 0 && num % 5 !== 0) {addToIt = addToIt + "fizz"}
if (num % 5 === 0 && num % 3 !== 0) {addToIt = addToIt + "buzz"}
if (num % 3 === 0 && num % 5 === 0) {addToIt = addToIt + "fizzbuzz"}
}
return addToIt
}

console.log(fizzbuzz(3))

    // if (condition) {
    //     //  block of code to be executed if the condition is true
    //   }


// function countToStopIt(stopIt) {
//     var finalCount = ""
  
//     for(var i = 1; i <= stopIt; i ++) {
//       finalCount = finalCount + i
//       console.log('this is the num ', i)
//       console.log('this final count: ', finalCount)
//     }
//     return finalCount
//   }
  
//   countToStopIt(3)


function test37(x) 
{
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log()
//     let countString = '';
// let i = 0;

// do 
//   countString = countString + i;
//   i++;
// } while (i < 5);

