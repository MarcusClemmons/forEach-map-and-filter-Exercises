//forEach

//1) doubleValues
//Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

//Did on my own.


function doubleValues(arr){
    let newArr =[];
    arr.forEach(function(val){
        newArr.push(val * 2);
    });
    return newArr;
}


//2)Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

//Did on my own.

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val){
        if (val % 2 === 0){
            newArr.push(val);
        }
    });
    return newArr;
}

//3) Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

//Had to look at solution

function showFirstAndLast(arr){
    let newArr =[];
    arr.forEach(function(val){
   newArr.push(val[0] + val[val.length -1] );
    });
    return newArr;
}


//4) Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object

//Did on my own.


function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
  }



//5)Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

//Had to look at solution

function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
  

//Map

//1)doubleValuesWithMap
//Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

//Did on my own.


function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }



//2)valTimesIndex
//Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

//Did on my own.

function valTimesIndex(arr){
    return arr.map(function(val, idx){
return val * idx
    });
}



//3)extractKey
// Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

//Did on my own.


function extractKey(arr, key){
    return arr.map(function(val){
    return val[key]
    });

}
     


//4)extractFullName
//Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of “first” and the value of a key with the name of “last” in each object, concatenated together with a space.

//Did on my own.

function extractFullName(arr) {
    return arr.map(function(val) {
      return val.first + " " + val.last;
    });
  }
  





//filter

//1)filterByValue
//Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

//Had to look at solution

function filterByValue(arr,key){
return arr.filter(function(val){
return val[key]  !== undefined;
});
}

//2) find
//Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

//Did on my own.


function find(arr, value) {
    return arr.filter(function(val) {
      return val === value;
    });
  }



//3)findInObj
//Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

//Did on my own.


function findInObj(arr, key, value){
    return arr.filter(function(val){
        return val[key] === value;
    });
    
}



//4)removeVowels
//Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

//Had to look at solution

function removeVowels(str) {
    const vowels = "aeiou";
    return str.toLowerCase().split("").filter(function(val) {
        return vowels.indexOf(val) === -1;
      }).join("");
  }





//5)doubleOddNumbers
//Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

//Had to look at solution


function doubleOddNumbers(arr){
    return arr.filter(function(val) {
            return val % 2 !== 0;
          })
          .map(function(val) {
            return val * 2;
          });
        }
