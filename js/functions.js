
// Функция ради функции для проверки подключения js
function someFunction(arg1='', arg2=0) {
  if (arg1.length<=arg2){
    return true;
  } else {
    return false;
  }
}
//eslint-disable-next-line;
console.log (someFunction('1234567',8));
//eslint-disable-next-line;
console.log (someFunction('1234567890',8));

function sum (a,b) {
  return a+b;
}
console.log(sum(1,2));

// Палиндром
function Palindrome (str) {
  if (str === str.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}
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

// Функция padString работает следующим образом:
// Сначала функция проверяет длину исходной строки (inputString)
// с минимальной длиной (minLength). Если длина исходной строки больше или
// равна минимальной длине, функция просто возвращает исходную строку без изменений.
//  Если длина исходной строки меньше минимальной длины, вычисляется длина
// "добивки" (paddingLength) путем вычитания длины исходной строки из минимальной
// длины.
//   Затем функция использует метод slice() для обрезания строки с добавочными
// символами (padding) таким образом, чтобы оставить только последние paddingLength
// символов.
//   Далее функция объединяет обрезанную строку с добавочными символами
// со строкой (inputString) и возвращает полученную дополненную строку.
//   Таким образом, функция padString добавляет символы в начало исходной
// строки до достижения заданной минимальной длины. Если исходная строка уже
// имеет достаточную длину, функция возвращает ее без изменений. Если "добивка"
// слишком длинная, она обрезается, чтобы соответствовать заданной длине.

  function padStart(inputString, minLength, padding) {
    if (inputString.length >= minLength) {
      return inputString;
    }

    const paddingLength = minLength - inputString.length;
    const repeatCount = Math.ceil(paddingLength / padding.length);
    const paddedString = padding.repeat(repeatCount).slice(0, paddingLength) + inputString;

    return paddedString;
  }

// Функция padStart работает следующим образом:

// Сначала функция проверяет длину исходной строки (inputString)
// с минимальной длиной (minLength). Если длина исходной строки больше или
// равна минимальной длине, функция просто возвращает исходную строку без изменений.
// Если длина исходной строки меньше минимальной длины, вычисляется длина "добивки"
// (paddingLength) путем вычитания длины исходной строки из минимальной длины.
// Затем функция вычисляет количество повторений "добивки" (repeatCount) путем деления
// длины "добивки" на длину строки с добавочными символами (padding) и округления вверх
//  до ближайшего целого числа. Это позволяет определить, сколько раз нужно повторить
//  "добивку", чтобы достичь нужной длины.
// Далее функция использует метод repeat() для повторения строки с добавочными символами
//  (padding) нужное количество раз (repeatCount). Затем с помощью метода slice()
//  обрезает повторенную "добивку" до нужной длины (paddingLength).
// Наконец, функция объединяет обрезанную "добивку" со строкой (inputString) и
// возвращает полученную дополненную строку.
// Таким образом, функция padStart добавляет символы в начало исходной строки до
//  достижения заданной минимальной длины. Если исходная строка уже имеет достаточную
//   длину, функция возвращает ее без изменений. Если "добивка" слишком длинная, она
//    обрезается для соответствия заданной длине.


// function checkStringLength(inputString, maxLength) {
//   if (inputString.length <= maxLength) {
//     return true;
//   } else {
//     return false;
//   }
// }

function checkStringLength(inputString, maxLength) {
  return inputString.length <= maxLength;
}
