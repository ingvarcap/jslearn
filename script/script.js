'use strict';

let isNumber = function (n) {
  console.log('n: ', n);
  console.log(parseFloat(n));
  console.log(isFinite(n));
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
do {
  money = prompt('Ваш месячный доход?');
} while (!isNumber(money));

let addExpenses = prompt(
  'Перечислите возможные расходы за рассчитываемый период через запятую',
  'интернет, такси, коммуналка'
);
console.log(addExpenses.toLowerCase().split(' '));
console.log('type addExpenses: ', typeof addExpenses);

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('type deposit: ', typeof deposit);

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

let mission = 1000000;
let income = 'Фриланс';

// Период накопления
let period = 12;
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей');
//сумма всех расходов
let expenses = [];
let getExpensesMonth = function () {
  let sum = 0;
  for (let i = 0; i < 4; i++) {
    expenses[i] = prompt('Введите обязательную статью расходов');
    sum += (() => {
      let n = 0;
      do {
        n = prompt('Во сколько это обойдется?');
      } while (!isNumber(n));
      return +n;
    })();
  }
  return sum;
};

let expensesAmount = getExpensesMonth();

const getAccumulatedMonth = (moneyMonth, expensesMonth) => {
  if (!moneyMonth) {
    moneyMonth = 0;
  }
  return moneyMonth - expensesMonth;
};

const accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
//период накопления
let getTargetMonth = function (mission, accumulatedMonth) {
  return Math.ceil(mission / accumulatedMonth);
};

let targetMonth = getTargetMonth;
targetMonth >= 0
  ? console.log('Цель будет достигнута за:' + targetMonth + 'месяцев')
  : console.log('Цель не будет достигнута');

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
