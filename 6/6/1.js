"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/
const linkId = document.getElementById("super_link");
console.log(linkId);

/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/
const card_linkl = document.querySelectorAll(".card-link");
card_linkl.forEach((element) => {
  element.textContent = "ссылка";
});
/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/
const card_bodyl = document.querySelectorAll(".card-body .card-link ");
const card_Set = new Set(card_bodyl);
console.log(card_Set);
/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/
const firstEl = document.querySelector('[data-number="50"]');
console.log(firstEl);
/*
5. Выведите содержимое title страницы в консоль.
*/
console.log(document.querySelector("title").outerText);
/*
6. Получите элемент с классом "card-title" и выведите его родительский узел
в консоль.
*/
const titleL = document.querySelector(".card-title");
console.log(titleL.parentNode);
/*
7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/
const new_p = document.createElement("p");
new_p.textContent = "Привет";
const cardl = document.querySelector(".card");
cardl.prepend(new_p);
/*
8. Удалите тег h6 на странице.
*/
const headingH6 = document.querySelector("h6");
headingH6.remove();
