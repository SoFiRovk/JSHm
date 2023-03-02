"use strict";

/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
};
function getKey(numbers) {
  const arr = [];
  Object.keys(numbers).forEach(function (item) {
    if (numbers[item] >= 3) arr.push(item);
  });
  return arr;
}
console.log(getKey(numbers));
