'use strict';
//через if
let lang = 'en';
if (lang === 'ru') {
  console.log(
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  );
} else if (lang === 'en') {
  console.log(
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  );
}
//через switch-case
switch (lang) {
  case 'ru':
    console.log(
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
      'Воскресенье'
    );
    break;
  case 'en':
    console.log(
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    );
    break;
}
//многомерный массив

let langArray = {
  ru: [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ],
  en: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
};
console.log(langArray[lang]);

let namePerson = 'Максим';
console.log(
  namePerson === 'Артем'
    ? 'директор'
    : namePerson === 'Максим'
    ? 'преподаватель'
    : 'студент'
);
