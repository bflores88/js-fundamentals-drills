/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray;

//Using for loop - THIS WORKS
// function doubleArray(arr){
//   var doubleArr = [];
  
//   for(let i = 0; i<arr.length; i++){
//     doubleArr.push(arr[i]*2);
//   }
  
//   return doubleArr;
// }

//Using for in loop - THIS ALSO WORKS
// function doubleArray(arr){
//   var doubleArr = [];
  
//   for(var i in arr){
//     doubleArr.push(arr[i]*2);
//   }
  
//   return doubleArr;
// }

//Using forEach method - THIS WORKS, TOO
function doubleArray(arr){
  var doubleArr = [];
  
  function double(elem){
    doubleArr.push(elem*2);
  }
  
  arr.forEach(double);
  
  return doubleArr;
  
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays;

//Using concat and for loop - THIS WORKS
// function sumArrays(arr1, arr2){
//   var sumArrs = 0;
//   var concatArr = arr2.concat(arr1);
  
//   for(var i=0; i<concatArr.length; i++){
//     sumArrs+=concatArr[i];
//   }
//   return sumArrs;
// }

//Using forEach and for loop - THIS ALSO WORKS
function sumArrays(arr1, arr2){
  var sumArrs = 0;
  
  arr1.forEach(function(elem){
    arr2.push(elem);
  })
  
  for(let i=0; i<arr2.length; i++){
    sumArrs+=arr2[i];
  }
  return sumArrs;
}

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount;

function stringCount(str){
  return str.length;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength;

function arrayLength(arr){
  return arr.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll;

//Using for loop - THIS WORKS
// function countAll(arr){
//   var arrCount = 0;
  
//    for(var i=0; i<arr.length; i++){
//     arrCount+=arr[i]; 
//    }
//   return arrCount;
// }

//Using forEach - THIS ALSO WORKS
function countAll(arr){
  var arrCount = 0;
  
  arr.forEach(function(elem){
    arrCount+=elem;
  })
  return arrCount;
}


/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings;

//Using for loop - THIS WORKS
// function countStrings(arr){
//   var strLengths = [];
  
//   for(var i=0; i<arr.length; i++){
//     strLengths.push(arr[i].length);
//   }
//   return strLengths;
// }

//Using forEach method
function countStrings(arr){
  var strLengths = [];
  
  arr.forEach(function(elem){
    strLengths.push(elem.length);
  })
  return strLengths;
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings;

//Using for loop - THIS WORKS
// function countAllStrings(arr){
//   var sumLengths = 0;
  
//   for(var i=0; i<arr.length; i++){
//     sumLengths+=arr[i].length;
//   }
//   return sumLengths;
// }

//Using forEach method - THIS ALSO WORKS
function countAllStrings(arr){
  var sumLengths = 0;
  
  arr.forEach(function(elem){
    sumLengths+=elem.length;
  })
  return sumLengths;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray;

//Using for in loop and for loop - THIS WORKS
// function convertToArray(obj){
//   var propArr = [];
//   var objSize = Object.keys(obj).length;
  
//   for(var i=0; i<objSize; i++){
//     propArr.push(Object.values(obj)[i]);
//   }
//   return propArr;
// }

//Using object values method - THIS ALSO WORKS
function convertToArray(obj){
  return Object.values(obj);
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize;

function objectSize(obj){
  var objSize = 0;
  for(var key in obj){
    objSize++;
  }
  return objSize;
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray;

function createZeroFilledArray(num){
  var zeroArr = [];

  for(var i=0; i<num; i++){
    zeroArr.push(0);
  }
  return zeroArr;
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray;

function poppedArray(arr){
  var arrLength = arr.length;
  var newArrLength = arrLength-1;
  
  arr.splice(newArrLength);
  
  return arr;
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString;

function splitString(str){
  return str.split('');
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast;

function lengthOfLast(arr){
  return arr.pop().length;
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen;

//Using for loop - THIS WORKS
// function sumBelowTen(arr){
//   var ttl = 0;
//   for (var i=0; i<arr.length; i++){
//     if(arr[i] < 10){
//       ttl+= arr[i];
//     }
//   }
//   return ttl;
// }

//Using forEach - THIS ALSO WORKS
function sumBelowTen(arr){
  var ttl = 0;
  arr.forEach(function(elem){
    if(elem < 10){
      ttl+=elem;
    }
  })
  return ttl;
}


/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters;

//Using for loop - THIS WORKS
// function moreThanTenLetters(arr){
//   var sumOverTen = 0;
//   for (var i=0; i<arr.length; i++){
//     if(arr[i].length > 10){
//     sumOverTen += 1;
//     }
//   }
//   return sumOverTen;
// }

//Using forEach method
function moreThanTenLetters(arr){
  var sumOverTen = 0;
  for(var elem in arr){
    if(arr[elem].length > 10){
      sumOverTen+=1;
    }
  }
  return sumOverTen;
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll;

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive;

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree;

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects;

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys;

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues;

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject;

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse;

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject;

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse;

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys;

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues;

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys;

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray;

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject;

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject;

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples;

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues;

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts;

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums;

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Object}
 */
var frequencyMap;

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
var tupleConvertToObject;


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: null,
  sumAllPositive: null,
  stringCountBelowThree: null,
  countObjects: null,
  getObjectKeys: null,
  getObjectValues: null,
  makeObject: null,
  makeObjectReverse: null,
  tupleToObject: null,
  tupleToObjectReverse: null,
  strToKeys: null,
  getValues: null,
  getKeys: null,
  objectToArray: null,
  arrayToObject: null,
  arraysToObject: null,
  objectsToTuples: null,
  mapArrayValues: null,
  mapStringCounts: null,
  arrayToObjectNums: null,
  stringToKeys: null,
  charCountMap: null,
  frequencyMap: null,
  tupleConvertToObject: null
}
