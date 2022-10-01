const getNthElement = (index, array) => {
  return array[index % array.length];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  const array2 = [...array];
  array2.push(element);
  return array2;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  numbers = numbers.map(number => String(number));
  return numbers;
};

const uppercaseWordsInArray = strings => {
  strings = strings.map((string) => string.toUpperCase());
  return strings;
};

const reverseWordsInArray = strings => {
  strings = strings.map((string) => string.split('').reverse().join(''));
  return strings
};

const onlyEven = numbers => {
  return numbers.filter((number) => number % 2 == 0);
};

const removeNthElement2 = (index, array) => {
  let nthArray = array.filter((el) => array.indexOf(el) != index);
  return nthArray;
};

const elementsStartingWithAVowel = strings => {
  let vowelWords = strings.filter((string) => string.match(/^[aeiou]/i));
  return vowelWords;
};

const removeSpaces = string => {
  return string.replace(/ /g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce ((previous, current) => previous + current);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
