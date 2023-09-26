//Define a function logBetween(lowNum, highNum) that will return an array from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

//Examples:

//logBetween(-1, 2);  // => [-1, 0, 1, 2]
//logBetween(14, 6);  // => []
//logBetween(4, 6);  // => [4, 5, 6]

function logBetween(lowNum,highNum){
    let newArray = [];
    if(lowNum>highNum) return [];
    for(let i = lowNum; i<=highNum;i++){
        newArray.push(i);
    }
    return newArray;
}

//Write a function logBetweenStepper(min, max, step) that takes in three numbers as parameters. The function should return an array of numbers between min and max at step intervals.

//Examples:

//logBetweenStepper(5, 9, 1) // => [5, 6, 7, 8, 9]
//logBetweenStepper(-10, 15, 5) // => [-10, -5, 0, 5, 10, 15]

function logBetweenStepper(min,max,step){
    let newArray = [];
    for(let i = min; i<=max; i+=step){
        newArray.push(i);
    }
    return newArray;
}

//Write a function printReverse(min, max) that returns an array of all numbers from max to min (exclusive), in reverse order.

//Examples:

//printReverse(13, 18) // => [17, 16, 15, 14]
//printReverse(90, 94) // => [93, 92, 91]

function printReverse(min, max){
    let newArray = [];
    for(let i = max;i>=min;i--){
        newArray.push(i);
    }
    return newArray;
}

//Define a function fizzBuzz(max) that takes a number and returns an array of every number from 0 to max that is divisible by either 3 or 5, but not both.

function fizzBuzz(max) {
    let result = [];
  
    for (let i = 0; i <= max; i++) {
      if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
        result.push(i);
      }
    }
  
    return result;
  }
//Define a function isPrime(number) that returns true if number is prime. Otherwise, false. Assume number is a positive integer.

function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
//Write a function maxValue(array) that returns the largest value in array. Assume array is an array of numbers.
function maxValue(array) {
    if (array.length === 0) {
      return null;
    }
  
    let max = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
  
    return max;
  }
  //Write a function myIndexOf(array, target) that takes in an array of numbers and a target number as arguments. It should return the index value of the target if it is present in the array or -1 if it is not present.

  function myIndexOf(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }
  
    return -1;
  }
  //Write a function factorArray(array, number) that takes in an array of numbers and a number and returns an array of all the factors.

  function factorArray(array, number) {
    const factors = [];
  
    for (let i = 0; i < array.length; i++) {
      if (number % array[i] === 0) {
        factors.push(array[i]);
      }
    }
  
    return factors;
  }

  //Write a function oddRange(end) that takes in a number and returns an array containing all positive odd numbers up to end.

  function oddRange(end) {
    const result = [];
  
    for (let i = 1; i <= end; i += 2) {
      result.push(i);
    }
  
    return result;
  }
//Write a function reverseHyphenString(string) that takes in a hyphenated string and returns a the hyphenated string reversed.

function reverseHyphenString(string) {
    const words = string.split('-');
    const reversedWords = words.reverse();
    return reversedWords.join('-');
  }
//Write a function intersect(arr1, arr2) that takes in two arrays and returns a new array containing the elements common to both arr1 and arr2.

function intersect(arr1, arr2) {
    const commonElements = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        commonElements.push(arr1[i]);
      }
    }
  
    return commonElements;
  }
//Write a function mirrorArray(array) that takes in an array as an argument and returns a new array "mirrored" as shown in the examples:

function mirrorArray(array) {
    const reversedArray = array.slice().reverse();
    return array.concat(reversedArray);
  }

  //Write a function abbreviate(sentence) that takes in a sentence string and returns a new sentence where words longer than 4 characters have their vowels removed. Assume the sentence has all lowercase characters. Feel free to use the array below in your solution: const vowels = ['a', 'e', 'i', 'o', 'u'];

  function abbreviate(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const words = sentence.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 4) {
        const characters = words[i].split('');
        const abbreviated = characters.filter(char => !vowels.includes(char));
        words[i] = abbreviated.join('');
      }
    }
  
    return words.join(' ');
  }
//Write a function adults(people) that takes in an array of person objects. The function should return an array containing the names of those who have an age of 18 or higher.

function adults(people) {
    const adultsArray = [];
  
    for (let i = 0; i < people.length; i++) {
      if (people[i].age >= 18) {
        adultsArray.push(people[i].name);
      }
    }
  
    return adultsArray;
  }
  
  //Write a function countScores(people) that takes in an array of score objects, people, as its input. A score object, people, has two key-value pairs: a name (string) and a score (number). countScores(people) should return an object that has key-value pairs where each name is a key and the value is their total score.

  function countScores(people){
    let newObj = {};
    for(let i = 0; i<people.length;i++){
        let name = people[i].name;
        let score = people[i].score;

        if(newObj.hasOwnProperty(name)){
            scores[name] += score;
        }else{
            scores[name] = score;
        }

    }
    return scores;
  }
  
  //Using the isPrime function you made, write a function firstNPrimes(n) that returns an array of the first n prime numbers.

  
  function firstNPrimes(n) {
    const primes = [];
    
    for (let num = 2; primes.length < n; num++) {
      if (isPrime(num)) {
        primes.push(num);
      }
    }
    
    return primes;
  }

  //Write a function peakFinder(array) that takes in an array of numbers. It should return an array containing the indices of all the peaks. A peak is an element that is greater than both of its neighbors. If it is the first or last element, it is a peak if it is greater than its one neighbor. Assume the array has a length of at least 2.

  function peakFinder(array) {
    const peaks = [];
  
    for (let i = 0; i < array.length; i++) {
      if (i === 0 && array[i] > array[i + 1]) {
        peaks.push(i);
      } else if (i === array.length - 1 && array[i] > array[i - 1]) {
        peaks.push(i);
      } else if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
        peaks.push(i);
      }
    }
  
    return peaks;
  }
//Write a function divisibleByThreePairSum(array) that takes an array of numbers. It should return an array of all the pairs of indices, whose elements sum to a multiple of three.

function divisibleByThreePairSum(array) {
    const pairs = [];
  
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if ((array[i] + array[j]) % 3 === 0) {
          pairs.push([i, j]);
        }
      }
    }
  
    return pairs;
  }

  
  //Write a function zipArray(arr1, arr2) that takes in two arrays and "zips" them together by returning a single 2D-array. Assume that both input arrays have the same length.


  function zipArray(arr1, arr2) {
    const zippedArray = [];
  
    for (let i = 0; i < arr1.length; i++) {
      zippedArray.push([arr1[i], arr2[i]]);
    }
  
    return zippedArray;
  }
//Write a function twoDimensionalTotal(array) that takes in a 2D array of numbers and returns the total sum of all elements. Examples:

function twoDimensionalTotal(array) {
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        sum += array[i][j];
      }
    }
  
    return sum;
  }
//Write a function twoDiff(array), given an array of numbers, return a 2-D array, where each of the sub array are indices of the two numbers such that their difference is 2. If there are no such numbers, return an empty array.

//NOTE: The pairs are unique. HINT: Account for negative difference too!  

function twoDiff(array) {
    const result = [];
  
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if ((array[i] - array[j] === 2) || (array[j] - array[i] === 2)) {
          result.push([i, j]);
        }
      }
    }
  
    return result;
  }
//Write a function arrayDiff(arr1, arr2) that takes in two arrays. The function should return a new array, containing the elements of arr1 that are not also in arr2.

function arrayDiff(arr1, arr2) {
    const result = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (!arr2.includes(arr1[i])) {
        result.push(arr1[i]);
      }
    }
  
    return result;
  }
//Write a function valueCounter(obj, val) that takes in an object and a value, the function should return the number of times val repeats as a value in obj.

function valueCounter(obj, val) {
    let count = 0;
  
    for (let key in obj) {
      if (obj[key] === val) {
        count++;
      }
    }
  
    return count;
  }

  //Write a function elementCount(array) that returns a object. Each key corresponds to an element in the array and the value corresponds to how many times that element appears in the array.

  function elementCount(array) {
    const count = {};
  
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (count.hasOwnProperty(element)) {
        count[element]++;
      } else {
        count[element] = 1;
      }
    }
  
    return count;
  }

  //Write a function nextTwoPrimes(num) that takes in a number num and returns the next two prime numbers greater than num.

  function nextTwoPrimes(num) {
    const primes = [];
  
    while (primes.length < 2) {
      num++;
      if (isPrime(num)) {
        primes.push(num);
      }
    }
  
    return primes;
  }
//Write a function pairProduct(arr, num) that accepts an array of numbers, arr, and a target number, num. It should return pairs of indices whose elements multiply to num. No pair should appear twice in the result.

//CONSTRAINT: Use only while loops. No for loops.  

function pairProduct(arr, num) {
    const result = [];
    let i = 0;
  
    while (i < arr.length) {
      let j = i + 1;
      while (j < arr.length) {
        if (arr[i] * arr[j] === num) {
          result.push([i, j]);
        }
        j++;
      }
      i++;
    }
  
    return result;
  }
  
  //Write a function twoDimensionalSize(array) that takes in a 2D-array as an argument. The function should return the total number of elements in the 2D-array.

  function twoDimensionalSize(array){
    let count = 0;
    for(let i = 0 ; i<array.length; i++){
        for(let j= 0 ; j<array[i].length; j++){
            if(array[i][j]){
                count++
            }
        }
    }
    return count;
  }
//Write a function longWordCount(string) that takes in a string and returns the number of words longer than 7 characters.


  function longWordCount(string) {
    const words = string.split(' ');
    let count = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 7) {
        count++;
      }
    }
  
    return count;
  }
  
  //Write a function factorial(n), that returns the factorial of the number n. For example, the factorial of 4 is 4 * 3 * 2 * 1 = 24.

  function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

//Write a function lcm(num1, num2) that returns the lowest number which is a multiple of both num1 and num2.


function lcm(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let lcm = max;
  
    while (lcm % min !== 0) {
      lcm += max;
    }
  
    return lcm;
  }
  
  

//Write a function hipsterfyWord(word) that takes takes in a string and returns the string with the last vowel removed. 'y' is not a vowel.

function hipsterfyWord(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let i = word.length - 1; i >= 0; i--) {
      if (vowels.includes(word[i])) {
        return word.slice(0, i) + word.slice(i + 1);
      }
    }
  
    return word;
  }

  //Write a function objectToString(count) that takes in a char count object and returns a string representing the counts of each character.

//Examples:

//objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
//objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'
function objectToString(count) {
    let str = '';
  
    for (let char in count) {
      for (let i = 0; i < count[char]; i++) {
        str += char;
      }
    }
  
    return str;
  }
//Write a function shortestWord(sentence) that returns the shortest word of a sentence. You can assume that the words of the sentence all have different lengths.
  
  function shortestWord(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');
  
    // Initialize the shortest word variable
    let shortest = words[0];
  
    // Iterate over the words and update the shortest word
    for (let i = 1; i < words.length; i++) {
      if (words[i].length < shortest.length) {
        shortest = words[i];
      }
    }
  
    return shortest;
  }
  //Write a function greatestCommonFactor(num1, num2) that returns the largest number that is divides both num1 and num2.

  function greatestCommonFactor(num1, num2) {
    // Ensure num1 is greater than or equal to num2
    if (num1 < num2) {
      const temp = num1;
      num1 = num2;
      num2 = temp;
    }
  
    // Find the remainder using the Euclidean algorithm
    let remainder = num1 % num2;
  
    // Keep dividing until the remainder becomes zero
    while (remainder !== 0) {
      num1 = num2;
      num2 = remainder;
      remainder = num1 % num2;
    }
  
    // The GCF is the last non-zero remainder
    return num2;
  }

  //Write a function isPassing(assessments) that takes in an array of assessment objects. The function should return true if the average assessment score is at least 70. It should return false otherwise.

  function isPassing(assessments) {
    if (assessments.length === 0) {
      return false;
    }
  
    let totalScore = 0;
    for (let i = 0; i < assessments.length; i++) {
      totalScore += assessments[i].score;
    }
  
    const averageScore = totalScore / assessments.length;
    return averageScore >= 70;
  }

  //Write a function valueConcat(array, obj) that takes in an array and object The function should return a new array where each element is concatenated with it's corresponding value from the object.

  function valueConcat(array, obj) {
    const result = [];
  
    for (let i = 0; i < array.length; i++) {
      const key = array[i];
  
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        result.push(array[i] + value);
      }
    }
  
    return result;
  }
//Write a function threeInARow(arr) that takes in an array of numbers and returns true if the array contains 3 of the same number consecutively. The function should return false otherwise.

function threeInARow(arr) {
    for (let i = 0; i <= arr.length - 3; i++) {
      if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) {
        return true;
      }
    }
    
    return false;
  }

  //Write a function variableNameify(words) that takes in an array of words. The function should return a string representing the variable name obtained by combining the words and captitalizing them in mixCased style.

  function variableNameify(words) {
    let variableName = "";
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      variableName += capitalized;
    }
  
    return variableName;
  }

  //Write a function threeIncreasing(arr) that takes in an array of numbers and returns true if the array contains 3 consecutive numbers in increasing order. The function should return false otherwise. Note that the 3 consecutive numbers should be increasing by 1, so the the second number is 1 greater than the first, and the third number is 1 greater than the second.

  function countRepeats(string) {
    let count = 0;
    const characters = string.split('');
  
    for (let i = 0; i < characters.length; i++) {
      let isRepeated = false;
  
      for (let j = i + 1; j < characters.length; j++) {
        if (characters[i] === characters[j]) {
          isRepeated = true;
          break;
        }
      }
  
      if (isRepeated) {
        count++;
      }
    }
  
    return count;
  }

  //Write a function pairsToString(arr) that takes in an array of pairs. The function should return a string corresponding to the pairs.

  function pairsToString(arr) {
    let result = '';
  
    for (let i = 0; i < arr.length; i++) {
      const pair = arr[i];
      const char = pair[0];
      const count = pair[1];
  
      result += char.repeat(count);
    }
  
    return result;
  }

  //Write the function countAdjacentSums(arr, n) that takes an array and number. It should count the number of times that two adjacent numbers in an array add up to n.

  function countAdjacentSums(arr, n) {
    let count = 0;
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] + arr[i + 1] === n) {
        count++;
      }
    }
  
    return count;
  }

  //Write a function signFlipCount(nums) that takes in an array of numbers as arguments. The function should return the number of times adjacent numbers in the array switch signs from positive to negative or vice versa. The number 0 is neither positive nor negative.

  function signFlipCount(nums) {
    let count = 0;
  
    for (let i = 1; i < nums.length; i++) {
      if ((nums[i - 1] < 0 && nums[i] >= 0) || (nums[i - 1] >= 0 && nums[i] < 0)) {
        count++;
      }
    }
  
    return count;
  }

  //Write a function powerSequence(base, length) that takes in two numbers, base and length. The function should return an array containing a power sequence with the given length. Assume that the length is at least 1.

//The first number of a power sequence begins with base. The second number of the sequence is the product between the first number and the base. The third number of the sequence is the product between the second number and the base...

function powerSequence(base, length) {
    const sequence = [];
    let currentNum = base;
  
    for (let i = 0; i < length; i++) {
      sequence.push(currentNum);
      currentNum *= base;
    }
  
    return sequence;
  }

  //Write a function collapseString(str) that takes in a string as an argument. The function should return the string where 'streaks' of consecutive characters are collapsed to a single character.

  function collapseString(str) {
    let collapsedStr = '';
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        continue;
      }
      
      collapsedStr += str[i];
    }
    
    return collapsedStr;
  }

  //Write a function oddWordsOut(sentence) that takes in a sentence string and returns the sentence where words with an odd number of characters are removed.

  function oddWordsOut(sentence) {
    const words = sentence.split(' ');
    const filteredWords = words.filter(word => word.length % 2 === 0);
    return filteredWords.join(' ');
  }

  //Write a function mindPsAndQs(str) that accepts a string of uppercase letters. The function should return the length of the longest consecutive streak of the letters 'P' and 'Q'.

//Hint: Use two variables. One to track the length of the current streak and another to track the length of the longest streak so far. Think of using a strategy similar to maxValue. This can also be solved using a single loop!

function mindPsAndQs(str) {
    let currentStreak = 0;
    let longestStreak = 0;
  
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
  
      if (letter === 'P' || letter === 'Q') {
        currentStreak++;
      } else {
        currentStreak = 0;
      }
  
      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    }
  
    return longestStreak;
  }

  //Write a function commonFactors(num1, num2) that returns an array that contains the common factors between both numbers. A factor is a number that divides another number with no remainder.

  function commonFactors(num1, num2) {
    const factors = [];
  
    // Find the smaller number between num1 and num2
    const smallerNum = Math.min(num1, num2);
  
    // Check each number from 1 up to the smaller number
    for (let i = 1; i <= smallerNum; i++) {
      // If both numbers are divisible by i, it is a common factor
      if (num1 % i === 0 && num2 % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }
  
  //Write a function commonPrimeFactors(num1, num2) that takes in two numbers as arguments and returns an array of all prime factors that are common between the two numbers. A factor is a number that divides another number without resulting in a remainder.
  
  // Helper function to find the prime factors of a number
  function findPrimeFactors(num) {
    const factors = [];
  
    // Divide the number by 2 until it is no longer divisible
    while (num % 2 === 0) {
      factors.push(2);
      num /= 2;
    }
  
    // Check for prime factors starting from 3
    let divisor = 3;
    while (divisor <= Math.sqrt(num)) {
      if (num % divisor === 0) {
        factors.push(divisor);
        num /= divisor;
      } else {
        divisor += 2; // Skip even numbers
      }
    }
  
    // If num is still greater than 1, it is a prime factor
    if (num > 1) {
      factors.push(num);
    }
  
    return factors;
  }
  function commonPrimeFactors(num1, num2) {
    const primeFactors1 = findPrimeFactors(num1);
    const primeFactors2 = findPrimeFactors(num2);
    const commonFactors = [];
  
    // Iterate over the prime factors of num1
    for (const factor of primeFactors1) {
      // Check if the factor is a prime factor of num2
      if (primeFactors2.includes(factor)) {
        commonFactors.push(factor);
      }
    }
  
    return commonFactors;
  }

  
  // Example usage
  console.log(commonPrimeFactors(12, 50));  // Output: [2]
  console.log(commonPrimeFactors(6, 24));  // Output: [2, 3]
  console.log(commonPrimeFactors(11, 22));  // Output: [11]
  
  //Write a function splitHalfArray(array) that takes in an array as an argument and returns two halves of that array split in the middle. If the array has an odd number of elements, then the middle element should be excluded.

  function splitHalfArray(array) {
    const length = array.length;
    const middleIndex = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      return [array.slice(0, middleIndex), array.slice(middleIndex)];
    } else {
      return [array.slice(0, middleIndex), array.slice(middleIndex + 1)];
    }
  }

  //Write a function threeUniqueVowels(string) that takes in a string and returns true if the string contains at least three different vowels.

  function threeUniqueVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
  
    for (let i = 0; i < string.length; i++) {
      const char = string[i].toLowerCase();
  
      if (vowels.includes(char)) {
        vowelCount++;
        
        if (vowelCount >= 3) {
          return true;
        }
      }
    }
  
    return false;
  }

  //Write a function vowelShift(sentence) that takes in a sentence string. The function should return a new sentence, where every vowel is replaced with the next vowel in the alphabet.

  function vowelShift(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let shiftedSentence = '';
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toLowerCase();
  
      if (vowels.includes(char)) {
        const vowelIndex = vowels.indexOf(char);
        const nextVowel = vowels[(vowelIndex + 1) % vowels.length];
        shiftedSentence += char === sentence[i] ? nextVowel : nextVowel.toUpperCase();
      } else {
        shiftedSentence += sentence[i];
      }
    }
  
    return shiftedSentence;
  }  
 //Write a function hasSymmetry(array) that takes in an array. The function should return true if the array has symmetry, false otherwise. For an array to have symmetry, it should be the same forwards and backwards.


  function hasSymmetry(array) {
    const reversedArray = array.slice().reverse(); // Create a reversed copy of the array
    return array.join("") === reversedArray.join(""); // Compare the arrays as strings
  }
  
  //Write a function evenSumArray(array) that takes in an array of numbers and returns a new array where each num is replaced with the sum of all even numbers less than or equal to that num.

  function evenSumArray(array) {
    const result = [];
  
    for (let num of array) {
      let sum = 0;
      for (let i = 0; i <= num; i += 2) {
        sum += i;
      }
      result.push(sum);
    }
  
    return result;
  }

  //Write a function numsToWords(numString) that takes in a string representing a number. The function should return a new string where each digit character is replaced with it's "word" representation. Assume the input string only contains numeric characters.

  function numsToWords(numString) {
    const digitToWord = {
      '0': 'zero',
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine',
    };
  
    let result = '';
  
    for (let char of numString) {
      result += digitToWord[char];
    }
  
    return result;
  }

  //Write a function moreDotLessDash(str) that takes in a string and returns the true if the string contains more dots ('.') than dashes ('-'), false otherwise.

  function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;
  
    for (let char of str) {
      if (char === '.') {
        dotCount++;
      } else if (char === '-') {
        dashCount++;
      }
    }
  
    return dotCount > dashCount;
  }
  
  
  
  
  
  
  
  
  
  