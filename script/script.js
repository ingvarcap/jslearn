'use strict';
//Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
let money = +prompt('Ваш месячный доход?', '50000');

//Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses (пример: "Квартплата, проездной, кредит")
let addExpenses = prompt(
  'Перечислите возможные расходы за рассчитываемый период через запятую',
  'интернет, такси, коммуналка'
);
console.log(addExpenses.toLowerCase().split(' '));
console.log('type addExpenses: ', typeof addExpenses);

//Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('type deposit: ', typeof deposit);

/*Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
“Введите обязательную статью расходов?” (например expenses1, expenses2)
“Во сколько это обойдется?” (например amount1, amount2)
в итоге 4 вопроса и 4 разные переменных*/
let expenses1 = prompt(
  'Введите обязательную статью расходов?',
  'продукты, вода'
);
console.log(expenses1);
let amount1 = +prompt('Во сколько это обойдется?', '10000');
let expenses2 = prompt(
  'Введите обязательную статью расходов?',
  'бензин, транспорт'
);
console.log(expenses2);
let amount2 = +prompt('Во сколько это обойдется?', '5000');

//Какую сумму хотите накопить?
let mission = 1000000;

//Дополнительная статья дохода
let income = 'Фриланс';

// Период накопления
let period = 12;
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
//сумма всех расходов
let getExpensesMonth = function (amount1, amount2) {
  return amount1 + amount2;
};
console.log('Сумма расходов: ' + getExpensesMonth(amount1, amount2));
//накопления за месяц
let getAccumulatedMonth = function (money, getExpensesMonth) {
  return money - getExpensesMonth;
};
console.log(
  'Разница доходов и расходов: ',
  getAccumulatedMonth(money, getExpensesMonth(amount1, amount2))
);

let accumulatedMonth = getAccumulatedMonth(
  money,
  getExpensesMonth(amount1, amount2)
);

//период накопления
let getTargetMonth = function (mission, accumulatedMonth) {
  return Math.ceil(mission / accumulatedMonth);
};
console.log(
  'Период накопления в месяцах: ' + getTargetMonth(mission, accumulatedMonth)
);

let budgetDay = accumulatedMonth / 30;
console.log('Бюджет на день: ', Math.floor(budgetDay));
let showTypeOf = function (data) {
  console.log(data, typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let getStatusIncome = function (budgetDay) {
  return budgetDay < 0
    ? 'Пора устроиться на работу'
    : budgetDay < 600
    ? 'Низкий уровень дохода'
    : budgetDay === 600
    ? 'Выход на средний уровень дохода'
    : budgetDay < 1200
    ? 'У вас средний уровень дохода'
    : budgetDay === 1200
    ? 'Выход на высокий уровень дохода'
    : budgetDay === 1200
    ? 'У вас почти получилось попасть в группу с высокий уровень дохода! Постарайтесь лучше!'
    : 'У вас высокий уровень дохода';
};
console.log('Ваш доход: ', getStatusIncome(budgetDay));
