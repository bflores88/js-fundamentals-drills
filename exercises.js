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

//Using for in loop - THIS WORKS
// function convertToArray(obj){
//   var propArr = [];
//   for (var key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       var value = obj[key];
//       propArr.push(value);
//     }
//   }
//   return propArr;


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

//Using forEach method - THIS ALSO WORKS
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


//Using for loop - THIS DEFINITELY WORKS
// function multiplyAll(arr){
//   var productArr = 1;
//   for (var i=0; i<arr.length; i++){
//     productArr*=arr[i];
//     }
//   return productArr;
// }

//Using for in loop - THIS WORKS
// function multiplyAll(arr){
//   var productArr = 1;
//   for (var i in arr){
//     if(typeof arr[i] !== 'number'){
//       return null;
//     }
//     productArr *= arr[i];
//   }
//   return productArr;
// }

//Using forEach method - THIS ALSO WORKS
function multiplyAll(arr){
  var productArr = 1;
  arr.forEach(function(num){
    if(typeof num === 'number'){
      productArr*=num;
    }
  })
  return productArr;
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive;

function sumAllPositive(arr){
  var sumPos = 0;
  for (var i=0; i<arr.length; i++){
    if(arr[i]>0){
      sumPos+=arr[i];
    }
  }
  return sumPos;
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree;

function stringCountBelowThree(arr){
  var threeChar = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i].length <= 3){
      threeChar++;
    }
  }
  return threeChar;
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects;

function countObjects(arr){
  var objCount = 0;
  for(var i=0; i<arr.length; i++){
    if(typeof arr[i] === 'object'){
      objCount++;
    }
  }
  return objCount;
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys;

//Using keys method - THIS WORKS
// function getObjectKeys(obj){
//   var objKeys = Object.keys(obj);
//   return objKeys;
// }

//Using for in loop - THIS ALSO WORKS
function getObjectKeys(obj){
  var objKeys = [];
  for(var key in obj ){
    if(obj.hasOwnProperty(key)){
      objKeys.push(key);
    }
  }
  return objKeys;
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues;

//Using values method - THIS WORKS
// function getObjectValues(obj){
//   var objValues = Object.values(obj);
//   return objValues;
// }

//Using for in loop - THIS ALSO WORKS
function getObjectValues(obj){
  var objValues = [];
  for (var key in obj){
    if(obj.hasOwnProperty(key)){ //check if property values exists
      objValues.push(obj[key]);
    }
  }
  return objValues;
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject;

function makeObject(objKey, objValue){
  var newObj = {};
  newObj[objKey] = objValue;
  return newObj;
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse;

function makeObjectReverse(objValue, objKey){
  var newObj = {};
  newObj[objKey] = objValue;
  return newObj;
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject;

function tupleToObject(arr){
  var newObj = {};
  for(var i=0; i<arr.length; i++){
    if(i%2 === 0){
      newObj[arr[i]] = arr[i+1];
    }
    return newObj;
  }
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse;

function tupleToObjectReverse(arr){
  var newObj = {};
  for(var i=0; i<arr.length; i++){
    if(i%2 === 1){
      newObj[arr[i]] = arr[i-1];
    }
  }
  return newObj;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys;

function strToKeys(arr){
  var newObj = {};
  for(var i=0; i<arr.length; i++){
    newObj[arr[i]] = 0;
  }
  return newObj;
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues;

function getValues(obj){
  return Object.values(obj);
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys;

function getKeys(obj){
  return Object.keys(obj);
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray;

function objectToArray(obj){
  var objArr = [];
  for(var key in obj){
    if(obj.hasOwnProperty(key)){
      var anArr = [];
      anArr.push(key);
      anArr.push(obj[key]);
      objArr.push(anArr);
    }
  }
  return objArr;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject;

function arrayToObject(arr){
  var newObj = {};
  for(var i=0; i<arr.length; i++){
    newObj[arr[i]] = false;
  }
  return newObj;
}

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

function arraysToObject(arr1, arr2){
  var newObj = {};
  for(var i=0; i<arr1.length; i++){
    newObj[arr1[i]] = arr2[i];
    }
  return newObj;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples;

function objectsToTuples(obj1, obj2){
  var tupleArr = [];
  Object.assign(obj1, obj2);

  for(var key in obj1){
    if(obj1.hasOwnProperty(key)){
      var newArr1 = [];
      newArr1.push(key);
      newArr1.push(obj1[key]);
      tupleArr.push(newArr1);
    }
  }
  return tupleArr;
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues;

function mapArrayValues(arr){
  var newObj = {};
  for(var i=0; i<arr.length; i++){
    newObj[arr[i]] = true;
  }
  return newObj;
}

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

function mapStringCounts(arr){
  var newObj = {};
  for(var i=0; i<arr.length; i++){
    if(arr[i].length >= 5){
      newObj[arr[i]] = true;
    } else {
      newObj[arr[i]] = false;
    }
  }
  return newObj;
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums;

function arrayToObjectNums(arr){
  var newObj = {};
  for(var i = 0; i<arr.length; i++){
    newObj[arr[i]] = true;
  }
  return newObj;
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;

function stringToKeys(str){
  var newObj = {};
  for(var i=0; i<str.length; i++){
    newObj[str[i]] = true;
  }
  return newObj;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;

function charCountMap(arr){
  var newObj = {};
  for(var i=0; i<arr.length; i++){
    newObj[arr[i]] = arr[i].length;
  }
  return newObj;
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Object}
 */
var frequencyMap;

function frequencyMap(arr){
  var newObj = {};
  arr.sort();
  console.log(arr);
  for(var i=0; i<arr.length; i++){
    if(arr[i] !== arr[i-1]){
      var value = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1;
      newObj[arr[i]] = value;
    }
  }
  return newObj;
}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
var tupleConvertToObject;

function tupleConvertToObject(arr){
  var newObj = {};
  for(var i=0; i<arr.length; i++){
    for(var a=0; a<arr[i].length; a++){
      if(a%2 === 0){
        newObj[arr[i][a]] = arr[i][a+1];
      }
    }
  }
  return newObj;
}


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
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
