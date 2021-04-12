'use strict';

const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

const isNum = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

/*
Используйте функции alert, confirm, prompt для общения с пользователем.
Написать игровой бот.
"Загадывание случайного числа от 1 до 100"
Что должна делать программа:
+ спрашивает пользователя: "Угадай число от 1 до 100".
+ если пользовательское число больше, то бот выводит "Загаданное число меньше" 
    и предлагает ввести новый вариант;
+ если пользовательское число меньше, то бот выводит "Загаданное число больше" 
    и предлагает ввести новый вариант;
+ если пользователь ввел не число, то выводит сообщение "Введи число!" и предлагает ввести новый вариант;
+ если пользователь нажимает "Отмена", то игра заканчивается.
Программа должны быть выполнена с помощью рекурсии, без единого цикла.
Загаданное число должно храниться «в замыкании»
*/

const start = function () {
  let rNumber = getRandomInt(100);
  // console.log('rNumber: ', rNumber);
  const game = function () {
    const num = prompt('"Угадай число от 1 до 100"');
    if (num === null) {
      alert("'Игра окончена'");
      return;
    }
    if (isNum(num)) {
      const realNum = +num;
      if (realNum > rNumber) {
        alert("'Загаданное число меньше'");
        game();
      } else if (realNum < rNumber) {
        alert("'Загаданное число больше'");
        game();
      } else {
        if (confirm("'Поздравляю, Вы угадали!!!'")) {
          start();
        } else {
          alert("'Игра окончена'");
          return;
        }
      }
    } else {
      alert("'Введи число'");
      game();
    }
  };
  game();
};

start();
