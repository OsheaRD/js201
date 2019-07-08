// TIP:
// A predicate function is a function that returns boolean true or false
// They are useful for improving the semantics of checking for conditions.
// Examples:
// - isUserLoggedIn(user)
// - isString(s)
// - isValidZipCode(code)
// etc

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false

const myArray = ['A','E','I','O','U','Y']
function isVowel (letter) {
    if (myArray.includes(letter)){
        return true 
    } else {
        return false
    }
}

//   CLASS FINAL Example
// function isVowel (char){
//     return (typeof char === 'string') &&
//     (char.length === 1) &&
//     'aeiou'.indexOf(char.toLowerCase()) !== -1
// }




/* chris's explanation
// function isVowel (char) {
//     if (typeOf char !== 'string') return false
//     if (char.length !== 1) return false

//     const vowels = ['A','E','I','O','U','Y']
//     return vowels.includes (char.toLowerCasse())
*/

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write two functions: "isEven" and "isOdd" that take a number argument and
// return true or false if the number is even or odd, respectively.
// The functions should return "false" if the number passed in is not an integer.
//
// Examples:
// isEven(100) --> true
// isEven(1) --> false
// isEven(-2) --> true
// isEven('banana') --> false
// isOdd(5) --> true
// isOdd('7') --> false
// isOdd(3.14) --> false

function isOdd (num {
 return typeof n === 'number' &&
 (n % 2 ===1 || n % 2 === -1)
}



// function isEven(num1) {
//     if (num1 % 2 === 0)
//     return true
// }

// function isOdd(num2) {
//     if (num2 % 2 !== 0)
//     return false
// }



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isCapitalCity" that takes two arguments: a US state and a city name
// and returns true or false if the city name is the capital of the state.
// The function should return false if the state name is not a valid US state.
//
// Hint 1: What is the best data structure to store this information? Object? Array? etc.
// Hint 2: This problem can be solved without using a "for" or "while" loop.
//
// Examples:
// isCapitalCity('Texas', 'Austin') --> true
// isCapitalCity('Texas', 'Houston') --> false
// isCapitalCity('Alaska', 'Juneau') --> true
// isCapitalCity('Strawberry', 'Mango') --> false


let statesAndCapitals = {
    Alabama: 'Montgomery',
    Montana: 'Helena',
    Alaska:    'Juneau',    
    Nebraska: 'Lincoln',
    Arizona: 'Phoenix',    
    Nevada:    'Carson City',
    Arkansas: 'Little Rock',    
    'New Hampshire': 'Concord',
    California:    'Sacramento',    
    'New Jersey': 'Trenton',
}


// const keys= object.keys(statesAndCapitals).array.forEach(element => {
//     (key=> { let value= statesAndCapitals[key]})
// });

// function isStateCapital(state, capital){
//     if (key= return true)}else{
//         return false
//     }






let isCapitalCity


    // let returnIsCapitalCity = (state, cityName) => 
    // objectName[propName];
    



    returnIsCapitalCity('Alabama', 'Montgomery')
    
    
    {
        if (state MATCHES cityName) {
        return true} 
    }else{ return false
    }
    
    isCapitalCity('Alabama', 'Montgomery') 






    Colorado: 'Denver',    
    'New Mexico': 'Santa Fe',
    Connecticut: 'Hartford',    
    'New York': 'Albany',
    Delaware: 'Dover',    
    'North Carolina': 'Raleigh',
    Florida: 'Tallahassee',    
    'North Dakota': 'Bismarck',
    Georgia: 'Atlanta',    
    Ohio: 'Columbus',
    Hawaii:    'Honolulu',    
    Oklahoma: 'Oklahoma City',
    Idaho: 'Boise',    
    Oregon:    'Salem',
    Illinois: 'Springfield',    
    Pennsylvania: 'Harrisburg',
    Indiana: 'Indianapolis',    
    'Rhode Island': 'Providence',
    Iowa: 'Des Moines',    
    'South Carolina': 'Columbia',
    Kansas:    'Topeka',    
    'South Dakota': 'Pierre',
    Kentucky: 'Frankfort',    
    Tennessee: 'Nashville',
    Louisiana: 'Baton Rouge',
    Texas: 'Austin',
    Maine: 'Augusta',
    Utah: 'Salt Lake City',
    Maryland: 'Annapolis',    
    Vermont: 'Montpelier',
    Massachusetts: 'Boston',    
    Virginia: 'Richmond',
    Michigan: 'Lansing',    
    Washington:    'Olympia',
    Minnesota:    'St. Paul',    
    'West Virginia': 'Charleston',
    Mississippi: 'Jackson',    
    Wisconsin: 'Madison',
    Missouri: 'Jefferson City',    
    Wyoming: 'Cheyenne'
};



// isCapitalCity('Texas', 'Houston') --> false

// const keys = Object.keys(statesAndCapitals);

// console.log(keys);

// const values = Object.values(statesAndCapitals);

// console.log(values);