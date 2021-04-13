'use strict';
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,
  start = function () {
    do {
      money = prompt('Ваш месячный доход?', 50000);
    } while (!isNumber(money));
  };

start();
let appData = {
  income: {}, // допдоход
  addIncome: [],
  expenses: {}, // список обязательных статей расходов
  addExpenses: [], // строка с перечислением дополнительных расходов
  deposit: true, // наличие депозита в банке
  mission: 1000000, // желаемая цель
  period: 12,
  budget: +money, // Доход за месяц
  budgetDay: 0, // Дневной бюджет (доход за месяц / 30)
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function () {
    let addExpenses = prompt(
      'Перечислите возможные расходы за рассчитываемый период через запятую',
      'интернет, такси, коммуналка'
    );
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    // Функция считает сумму всех обязательных расходов за месяц
  },
  getExpensesMonth: function () {
    let sum = 0,
      question;
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.addExpenses = prompt('Введите обязательную статью расходов');
      } else {
        appData.addExpenses = prompt('Введите обязательную статью расходов');
      }
      do {
        question = prompt('Во сколько это обойдется');
      } while (!isNumber(sum));
      sum += +question;
    }
    return sum;
  },
  getBudget: function () {
    // Функция считает накопления за месяц (Доходы минус расходы)
    if (!appData.budget) {
      appData.budget = 0;
    }
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    // Подсчитывает за какой период будет достигнута цель
    return Math.ceil(appData.mission / appData.budgetMonth);
  },
  getStatusIncome: function () {
    // Уровень дохода
    return isNaN(appData.budget)
      ? 'бюджета нет'
      : appData.budget < 0
      ? 'Пора устроиться на работу'
      : appData.budget < 600
      ? 'Доход ниже среднего'
      : appData.budget === 600
      ? 'Выход на средний уровень дохода'
      : appData.budget < 1200
      ? 'Средний уровень дохода'
      : appData.budget === 1200
      ? 'Выход на высокий уровень дохода'
      : 'У вас высокий уровень дохода';
  },
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

const targetMonth = appData.getTargetMonth();

console.log('Расходы за месяц: ', appData.getExpensesMonth);
console.log(
  targetMonth >= 0
    ? 'Цель будет достигнута за:' + targetMonth + 'месяцев'
    : 'Цель не будет достигнута'
);
console.log('Уровень дохода: ', appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');
for (let elem in appData) {
  console.log(elem, appData[elem]);
}
