"use strict";

/*
Необязательное задание. 
Необходимо вывести горку в консоль (используя цикл for), как показано на
рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

for (let i = 1; i < 21; i++) {
  let stroka = "";
  for (let j = 1; j <= i; j++) {
    stroka += "x";
  }
  console.log(stroka);
}