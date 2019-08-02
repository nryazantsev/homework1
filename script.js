"use strict";

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let expenses1 = prompt("Введите обязательную статью расходов в этом месяце");
let expenses2 = prompt("Во сколько обойдётся?");
let expenses1$1 = prompt("Введите обязательную статью расходов в этом месяце");
let expenses2$2 = prompt("Во сколько обойдётся?");

let appData = {
    money: money,
    timeData: time,
    expenses: {
        [expenses1]: expenses2,
        [expenses1$1]: expenses2$2,
    },
    optionalExpenses: {
    },
    income:[],
    savings: false,
};

console.log(appData);

alert((money/30) + "руб. бюджет на 1 день");


/* Вопросы к заданию:
1. Сколько типов данных существует в JS? 
Ответ: Существует 7 типов данных.

2. Как вывести информацию в консоль?
Ответ: console.log(значение);

3. Какая функция операторов || и &&?
Ответ: || - обычно используется для проверки истинности любого из заданных условий.
&& - возвращает true, если оба аргумента истинны а иначе - false. */