// 1-masala

// let arr = ['olma', 'anor', 'shaftoli', 'nok', 'behi'];

// const reverseLength = (arr) => {
//     let newArr = [];
//     arr.sort((a, b) => a.length - b.length);
//     for (const iterator of arr) {
//         newArr.push(iterator.split('').reverse().join(''));
//     }
//     return newArr;
// }

// console.log(reverseLength(arr));

// 2-masala

// let arr = 'olma anor shaftoli nok behi';

// function toCapitalize(str) {
//     let arr = str.split(' ');
//     let newStr = [];
//     for (const iterator of arr) {
//         newStr.push(iterator[0].toUpperCase() + iterator.slice(1));
//     }
//     return newStr.join(' ');
// }
// console.log(toCapitalize(arr));

// 3-masala

// let str = 'salom mening tel nomerim: +998904087803';

// function removeDigitsWithRegex(inputString) {
//     return inputString.replace(/\d/g, '');
// }
// console.log(removeDigitsWithRegex(str));

// 4-masala

// function filterStrings(arr) {
//     return arr.filter(item => typeof item === 'string');
// }
// console.log(filterStrings([1, 'salom', true, 'men', 42, null, 'funksiya', undefined, 'yaratdim']));

// 5-masala

// let str = 'salom mening tel nomerim: +998904087803';

// function counterWords(str) {
//     return str.split(' ').length;
// }
// console.log(counterWords(str));

// 6-masala

// function sortByLength(arr) {
//     return arr.sort((a, b) => a.length - b.length);
// }

// const strings = ['apple', 'banana', 'kiwi', 'mango', 'cherry'];
// const sortedStrings = sortByLength(strings);
// console.log(sortedStrings); 

// 7-masala

// function removeVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     return str.split('').filter(char => !vowels.includes(char)).join('');
// }

// const stringWithVowels = "Hello, World!";
// const stringWithoutVowels = removeVowels(stringWithVowels);
// console.log(stringWithoutVowels); 

// 8-masala

// function findLongestString(arr) {
//     return arr.sort((a, b) => b.length - a.length)[0];
// }

// const strings = ['apple', 'banana', 'kiwi', 'strawberry', 'cherry'];
// const longestString = findLongestString(strings);
// console.log(longestString);

// 9-masala

// function reverseWords(str) {
//     return str.split(' ').reverse().join(' ');
// }

// const sentence = "salom dunyo";
// const reversedSentence = reverseWords(sentence);
// console.log(reversedSentence);

// 10-masala

// function countOccurrences(arr, str) {
//     return arr.filter(item => item === str).length;
// }

// const strings = ['apple', 'banana', 'apple', 'cherry', 'apple'];
// const count = countOccurrences(strings, 'apple');
// console.log(count); 