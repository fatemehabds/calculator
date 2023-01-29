debugger;
let num1 = document.querySelector("input#num1");
let num2 = document.querySelector("input#num2");
let plus = document.querySelector("button#plus");
plus.addEventListener("click", function () {
  document.querySelector("h1").innerHTML =
    Number(num1.value) + Number(num2.value);
});
