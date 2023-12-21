
// Функция ради функции для проверки подключения js
const getFunction = (arg1, arg2) => { return arg1.length <= arg2;
}
//eslint-disable-next-line;
console.log (someFunction('1234567',8));
//eslint-disable-next-line;
console.log (someFunction('1234567890',8));

function getSum (a,b) {
  return a+b;
}
console.log(sum(1,2));

// Палиндром
function getPalindrome (str) {
  return str === str.split('').reverse().join('');

console.log(Palindrome('racecar'));

function palindromeTwo (str) {
  str =str.toLowerCase().replace(/\s/g,'');
  return str===str.split('').reverse().join('');
}

/*Функция, которая принимает строку, извлекает содержащиеся в ней цифры
от 0 до 9 и возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN*/


function extractDigits(str) {
  const digits = str.match(/\d/g);

  if (digits === null) {
    return NaN;
  }
    const number = parseInt(digits.join(''), 10);
   return number;
}

//  вторая функция с возможным числом
/eslint-disable-next-line;
function extractDigits(input) {
  const str = String(input);
  const digits = str.match(/\d/g);

  if (digits === null) {
    return NaN;
  }
    const number = parseInt(digits.join(''), 10);
    return number;
}

// Функция, которая принимает три параметра: исходную строку, минимальную
// длину и строку с добавочными символами — и возвращает исходную строку,
// дополненную указанными символами до заданной длины. Символы добавляются
// в начало строки. Если исходная строка превышает заданную длину, она
// не должна обрезаться. Если «добивка» слишком длинная,
//  она обрезается с конца.

function padString(inputString, minLength, padding) {
    if (inputString.length >= minLength) {
      return inputString;
    }

    const paddingLength = minLength - inputString.length;
    const paddedString = padding.slice(-paddingLength) + inputString;

    return paddedString;
  }



  function padStart(inputString, minLength, padding) {
    if (inputString.length >= minLength) {
      return inputString;
    }

    const paddingLength = minLength - inputString.length;
    const repeatCount = Math.ceil(paddingLength / padding.length);
    const paddedString = padding.repeat(repeatCount).slice(0, paddingLength) + inputString;

    return paddedString;
  }



// function checkStringLength(inputString, maxLength) {
//   if (inputString.length <= maxLength) {
//     return true;
//   } else {
//     return false;
//   }
// }

// 1. Проверка длины строки в сокращении
const checkStringLength = (inputString, maxLength)=>inputString.length <= maxLength;

// 2.Палиндром из ретроспективы
const isPalindrom =(String)=>{
  const tempString = String
  .toLowerCase();
  .replaceALL(' ','');
  let reverseString = ('');
  for (let i=tempString.length-1; i>=0; i--){
    reverseString += tempString[i];
  }
 return tempString === reverseString;
}

// 3. Функция, которая принимает строку, извлекает содержащиеся в ней цифры
const extractNumber = (str)=>{
  let result = '';
  if ()typeof String === 'number'){
    result = String;
    for (let i = 0; i < result.length; i++){
      if (Number.isParseInt(String.at (i), 10)){
        result +String.at(i);
      }
    }
    return parseInt(result, 10);
}

const myPadStart = (inputString, minLength, padding) => {
  const actualPadding = minLength - inputString.length;

  if (actualPadding <= 0) {
    return inputString;
  }
  return padding.slice (0, actualPadding%padding.length) + padding.repeat(actualPadding/paddingLength) + string;
}

//Используем тернанрную функцию
const myPadStart = (inputString, minLength, padding) => {
  const actualPadding = minLength - inputString.length;

  return actualPadding <= 0 ? inputString : padding.slice (0, actualPadding%padding.length) + padding.repeat(actualPadding/paddingLength) + string;
}

