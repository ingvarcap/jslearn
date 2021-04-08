'use strict';
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
console.log(langArray);

//через if
let lang = 'en';
if (lang === 'ru') {
  console.log(langArray);
} else if (lang === 'en') {
  console.log(langArray);
}
//через switch-case
switch (lang) {
  case 'ru':
    console.log(langArray);
    break;
  case 'en':
    console.log(langArray);
    break;
}

let namePerson = 'Максим';
console.log(
  namePerson === 'Артем'
    ? 'директор'
    : namePerson === 'Максим'
    ? 'преподаватель'
    : 'студент'
);
