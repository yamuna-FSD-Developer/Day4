//Do the below programs in anonymous function & IIFE
//a. Print odd numbers in an array

////anonymous function
const printOddNumbers = function (arr) {
  arr.forEach(function (num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers([1, 2, 3, 4, 5]);

//IIFE

(function (arr) {
  arr.forEach(function (num) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})([1, 2, 3, 4, 5]);

//b. Convert all the strings to title caps in a string array 

//anonymous function

const convertToTitleCaps = function (arr) {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
};

console.log(convertToTitleCaps(["apple", "banana", "orange"]));

//IIFE

const titleCapsArray = (function (arr) {
  return arr.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  });
})(["apple", "banana", "orange"]);

console.log(titleCapsArray);

//c. Sum of all numbers in an array
//Anonymous Function:

const sumArray = function (arr) {
  return arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));

//IIFE:

const arraySum = (function (arr) {
  return arr.reduce(function (acc, num) {
    return acc + num;
  }, 0);
})([1, 2, 3, 4, 5]);

console.log(arraySum);

// d. Return all the prime numbers in an array
// Anonymous Function:

const getPrimeNumbers = function (arr) {
  return arr.filter(function (num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
};

console.log(getPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//IIFE

const primeNumbers = (function (arr) {
  return arr.filter(function (num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(primeNumbers);

// e. Return all the Palindromes in an array
// Anonymous Function:

const getPalindromes = function (arr) {
  return arr.filter(function (str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  });
};

console.log(getPalindromes(["level", "apple", "deed", "hello"]));

//IIFE:

const palindromes = (function (arr) {
  return arr.filter(function (str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  });
})(["level", "apple", "deed", "hello"]);

console.log(palindromes);

// f. Return median of two sorted arrays of the same size
// Anonymous Function:

const getMedian = function (arr1, arr2) {
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  const mid = Math.floor(mergedArray.length / 2);
  return mergedArray.length % 2 === 0
    ? (mergedArray[mid - 1] + mergedArray[mid]) / 2
    : mergedArray[mid];
};

console.log(getMedian([1, 2, 3], [4, 5, 6]));

//IIFE

const median = (function (arr1, arr2) {
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  const mid = Math.floor(mergedArray.length / 2);
  return mergedArray.length % 2 === 0
    ? (mergedArray[mid - 1] + mergedArray[mid]) / 2
    : mergedArray[mid];
})([1, 2, 3], [4, 5, 6]);

console.log(median);

// g. Remove duplicates from an array
// Anonymous Function:

const removeDuplicates = function (arr) {
  return arr.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//IIFE

const uniqueArray = (function (arr) {
  return arr.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
})([1, 2, 2, 3, 4, 4, 5]);

console.log(uniqueArray);

// h. Rotate an array by k times
// Anonymous Function:

const rotateArray = function (arr, k) {
  const len = arr.length;
  const rotations = k % len;
  return arr.slice(rotations).concat(arr.slice(0, rotations));
};

console.log(rotateArray([1, 2, 3, 4, 5], 2));

//IIFE

const rotatedArray = (function (arr, k) {
  const len = arr.length;
  const rotations = k % len;
  return arr.slice(rotations).concat(arr.slice(0, rotations));
})([1, 2, 3, 4, 5], 2);

console.log(rotatedArray);










