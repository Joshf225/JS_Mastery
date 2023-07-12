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
const percent = "%";
const divide = "/";
const multiply = "*";

let mathOp = "";

function buttonSelect() {
  acEl.addEventListener("click", () => {
    display.innerHTML = "";
    mathOp = "";
  });
  percentEl.addEventListener("click", () => {
    mathOp += percent;
    console.log(mathOp);
  });
  minusEl.addEventListener("click", () => {
    mathOp += plus;
    console.log(mathOp);
  });
  divideEl.addEventListener("click", () => {
    mathOp += divide;
    console.log(mathOp);
  });
  multiplyEl.addEventListener("click", () => {
    mathOp += multiply;
    console.log(mathOp);
  });
  oneEl.addEventListener("click", () => {
    display.innerHTML = one;
    mathOp += one;
    console.log(mathOp);
  });
  twoEl.addEventListener("click", () => {
    display.innerHTML = two;
    mathOp += two;
    console.log(mathOp);
  });
  threeEl.addEventListener("click", () => {
    display.innerHTML = three;
    mathOp += three;
    console.log(mathOp);
  });
  multiplyEl.addEventListener("click", () => {});
  fourEl.addEventListener("click", () => {
    display.innerHTML = four;
    mathOp += four;
    console.log(mathOp);
  });
  fiveEl.addEventListener("click", () => {
    display.innerHTML = five;
    mathOp += five;
    console.log(mathOp);
  });
  sixEl.addEventListener("click", () => {
    display.innerHTML = six;
    mathOp += six;
    console.log(mathOp);
  });
  minusEl.addEventListener("click", () => {});
  sevEl.addEventListener("click", () => {
    display.innerHTML = seven;
    mathOp += seven;
    console.log(mathOp);
  });
  eightEl.addEventListener("click", () => {
    display.innerHTML = eight;
    mathOp += eight;
    console.log(mathOp);
  });
  nineEl.addEventListener("click", () => {
    display.innerHTML = nine;
    mathOp += nine;
    console.log(mathOp);
  });
  plusEl.addEventListener("click", () => {});
  zeroEl.addEventListener("click", () => {
    display.innerHTML = zero;
    mathOp += zero;
    console.log(mathOp);
  });
  commaEl.addEventListener("click", () => {});
  equalsEl.addEventListener("click", () => {
    let answer = parseInt(mathOp);
    console.log(mathOp);
  });
}

function mathOperation() {}

function addToDisplay(number) {}

console.log(mathOp);
buttonSelect();
