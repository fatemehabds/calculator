debugger;
let num1 = document.querySelector("input#num1");
let num2 = document.querySelector("input#num2");
let plus = document.querySelector("button#plus");
plus.addEventListener("click", function () {
  document.querySelector("h2").innerHTML =
    Number(num1.value) + Number(num2.value);
});
let div = document.querySelector("button#div");
div.addEventListener("click", function () {
  document.querySelector("h2").innerHTML =
    Number(num1.value) / Number(num2.value);
});
let minus = document.querySelector("button#minus");
minus.addEventListener("click", function () {
  document.querySelector("h2").innerHTML =
    Number(num1.value) - Number(num2.value);
});
let mul = document.querySelector("button#mul");
mul.addEventListener("click", function () {
  document.querySelector("h2").innerHTML =
    Number(num1.value) * Number(num2.value);
});
