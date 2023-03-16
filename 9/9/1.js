"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. При изменении значения в input с id="from", значение содержащееся в нем
должно моментально отображаться в span. То есть при печати в input'е тег span
также должен меняться.
*/
const fromEl = document.getElementById("from");
const spanEl = document.querySelector("span");

console.log(fromEl, spanEl);
const fromElValue = fromEl.value;

fromEl.oninput = () => {
  spanEl.textContent = fromEl.value;
};
/*
2. При клике на кнопку с классом messageBtn необходимо элементу с классом
message:
1) добавить два класса: animate__animated и animate__fadeInLeftBig
2) поставить данному элементу стиль visibility в значение 'visible'.
*/
const msEl = document.querySelector(".message");
const msBtn = document.querySelector(".messageBtn");
msBtn.onclick = () => {
  btnPress(msEl);
};
function btnPress(msEl) {
  msEl.classList.toggle("animate_animated");
  msEl.classList.toggle("animate_fadeInLeftBig");
  msEl.style.visibility = "visible";
}
/*
3. Необходимо при отправке формы проверить, заполнены ли все поля в этой
форме. Если какое-либо поле не заполнено, форма не должна отправляться, также
должны быть подсвечены незаполненные поля (необходимо поставить класс error
незаполненным полям).
Как только пользователь начинает заполнять какое-либо поле, необходимо,
при вводе в данное поле, произвести проверку:
Если поле пустое, необходимо данное поле подсветить (поставить класс error
данному полю).
Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.
*/
const formEls = document.querySelectorAll("form");
const inputEls = document.querySelectorAll("form input");
const selectEls = document.querySelectorAll("form select");
const submitBtn = document.querySelector("form button");
submitBtn.onclick = () => {
  checkInput(inputEls);
  checkInput(selectEls);
  let flag = document.querySelector(".error");
  if (typeof flag !== "undefined") donotSubmit();
};
function checkInput(inputEls) {
  inputEls.forEach((element) => {
    if (element.value === "") {
      element.classList.toggle("error");
    } else {
      if (element.classList.contains("error")) {
        element.classList.remove("error");
      }
    }
  });
}
function donotSubmit() {
  e.preventDefault();
}
