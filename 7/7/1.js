"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс
"super-dropdown", необходимо использовать методы forEach, querySelectorAll и
свойство classList у элементов.
*/
const itemEl = document.querySelectorAll(".dropdown-item");
itemEl.forEach((element) => {
  element.classList.toggle("super-dropdown");
});

/*
2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он
присутствует у этого элемента, либо добавить, если такого класса у элемента
не было.
*/
const btnE = document.querySelectorAll(".btn");
btnE.forEach((element) => {
  element.classList.toggle("super-dropdown");
});
/*
3. Необходимо удалить класс "dropdown-menu" у элемента, у которого
присутствует класс "menu".
*/
const menuEl = document.querySelectorAll(".menu");
menuEl.forEach((element) => {
  if (element.classList.contains("dropdown-menu")) {
    element.classList.remove("dropdown-menu");
  }
});
/*
4. Используя метод insertAdjacentHTML добавьте после div'a с классом
"dropdown" следующую разметку:
  <a href="#">link</a>
*/
const dropE = document.querySelector("div.dropdown");
dropE.insertAdjacentHTML("afterend", `<a href="#">link</a>`);
/*
5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
*/
const menuBtnEl = document.getElementById("dropdownMenuButton");
menuBtnEl.id = "superDropdown";
/*
6. Добавьте атрибут data-dd со значением 3 элементу у которого существует
атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
*/
const att = document.querySelectorAll('[aria-labelledby="dropdownMenuButton"]');
att.forEach((element) => {
  element.dataset.add = "3";
});
/*
7. Удалите атрибут type у элемента с классом "dropdown-toggle".
*/
const toggleEl = document.querySelector(".dropdown-toggle");
console.log(toggleEl);
toggleEl.removeAttribute("type");
