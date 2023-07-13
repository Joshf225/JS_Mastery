const display = document.getElementById("display");
const acEl = document.getElementById("ac");
const minEl = document.getElementById("minus");
const percentEl = document.getElementById("percent");
const divideEl = document.getElementById("divide");
const oneEl = document.getElementById("num-one");
const twoEl = document.getElementById("num-two");
const threeEl = document.getElementById("num-three");
const multiplyEl = document.getElementById("multiply");
const fourEl = document.getElementById("num-four");
const fiveEl = document.getElementById("num-five");
const sixEl = document.getElementById("num-six");
const minusEl = document.getElementById("minus");
const sevEl = document.getElementById("num-sev");
const eightEl = document.getElementById("num-eight");
const nineEl = document.getElementById("num-nine");
const plusEl = document.getElementById("plus");
const zeroEl = document.getElementById("zero");
const commaEl = document.getElementById("comma");
const equalsEl = document.getElementById("equals");

const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;
const zero = 0;

const plus = "+";
const minus = "-";
const percent = "%";
const divide = "/";
const multiply = "*";
const equals = "=";
const comma = ",";

let mathOp = "";

let num1 = 0;
let num2 = 0;

const numList = [];

function buttonSelect() {
  acEl.addEventListener("click", () => {
    numList.length = 0;
    display.innerHTML = numList;
    console.log(numList);
  });
  percentEl.addEventListener("click", () => {
    numList.push(percent);
    display.innerHTML = numList;
  });
  minusEl.addEventListener("click", () => {
    numList.push(minus);
    display.innerHTML = numList;
  });
  divideEl.addEventListener("click", () => {
    numList.push(divide);
    display.innerHTML = numList;
  });
  multiplyEl.addEventListener("click", () => {
    numList.push(multiply);
    display.innerHTML = numList;
  });
  oneEl.addEventListener("click", () => {
    numList.push(one);
    display.innerHTML = numList;
  });
  twoEl.addEventListener("click", () => {
    numList.push(two);
    display.innerHTML = numList;
  });
  threeEl.addEventListener("click", () => {
    numList.push(three);
    display.innerHTML = numList;
  });
  fourEl.addEventListener("click", () => {
    numList.push(four);
    display.innerHTML = numList;
  });
  fiveEl.addEventListener("click", () => {
    numList.push(five);
    display.innerHTML = numList;
  });
  sixEl.addEventListener("click", () => {
    numList.push(six);
    display.innerHTML = numList;
  });
  minusEl.addEventListener("click", () => {
    numList.push(minus);
    display.innerHTML = numList;
  });
  sevEl.addEventListener("click", () => {
    numList.push(seven);
    display.innerHTML = numList;
  });
  eightEl.addEventListener("click", () => {
    numList.push(eight);
    display.innerHTML = numList;
  });
  nineEl.addEventListener("click", () => {
    numList.push(nine);
    display.innerHTML = numList;
  });
  plusEl.addEventListener("click", () => {
    numList.push(plus);
    display.innerHTML = numList;
  });
  zeroEl.addEventListener("click", () => {
    numList.push(zero);
    display.innerHTML = numList;
  });
  commaEl.addEventListener("click", () => {
    numList.push(comma);
    display.innerHTML = numList;
  });
  equalsEl.addEventListener("click", () => {
    numList.push(equals);
    display.innerHTML = numList;
  });
}

function mathOperation() {}

function addToDisplay(number) {}

buttonSelect();
