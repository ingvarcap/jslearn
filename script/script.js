'use strict';
let num = 266219;
// Вывести в консоль произведение цифр этого числа
const multiplyingDigitsNumber = (str) => {
  let res = 1;
  for (let i = 0; i < str.length; i++) {
    res *= str[i];
  }
  return res;
};

const multiplyingDigits = multiplyingDigitsNumber(num.toString());
console.log('1: ', multiplyingDigits);

// Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
const raising = multiplyingDigits ** 3;
console.log('2: ', raising);

// Вывести на экран первые 2 цифры полученного числа
console.log('3: ', raising.toString().substr(0, 2));
