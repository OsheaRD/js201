// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

function numberJoinerWhile(start, end)
{
let myArray = [];
while (start <= end) {
  myArray.push(start);
  start++;}
  console.log(myArray.join('_'))
}
numberJoinerWhile(1, 5)

// >>>>  The join() method also joins all array elements into a string.

// >>>> It behaves just like toString(), but in addition you can specify the separator:

// >>>> var fruits = ["Banana", "Orange", "Apple", "Mango"];
// >>>> document.getElementById("demo").innerHTML = fruits.join(" * ");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
// for (i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }

function numberJoinerFor (firstNumber, secondNumber)
{
let dosArray = [];
for (num= firstNumber; num <= secondNumber; num++){
  dosArray.push(num)
}
console.log(dosArray.join('_'))
}
numberJoinerFor(1, 9)



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3

function numberJoinerFancy (first, second, third)
{
// let tresArray =[];
let stringIt = "";
for (num= first; num <= second; num++){
  stringIt+= num + third;
}
  console.log(stringIt)
}
numberJoinerFancy(3, 6, '***BANANAS***')