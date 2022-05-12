// // Calculator.js
// get number btn
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let zero = document.getElementById("zero");

// get operator
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let multiply = document.getElementById("mult");
let divide = document.getElementById("divide");
let clear = document.getElementById("clear");
let equal = document.getElementById("equal");
let convert = document.getElementById("convert");

// get display
let display = document.getElementById("disp");
let previous = document.getElementById("prev");

let dispContainer = document.getElementById("disp-container");
let previ = document.createElement("div");
previ.setAttribute("class", "prev_equa");
dispContainer.appendChild(previ);

// display.innerHTML = "test";

// clear btn
clear.onclick = () => {
  previous.innerHTML = "";
  display.innerHTML = "0";
};

// all the numbers
one.onclick = (num) => {
  if (display.innerHTML == "0") {
    display.innerHTML = `1`;
  } else {
    display.innerHTML += "1";
  }
};
two.onclick = () => {
  display.innerHTML += "2";
};
three.onclick = () => {
  display.innerHTML += "3";
};
four.onclick = () => {
  display.innerHTML += "4";
};

// all the operator
plus.onclick = () => {
  previous.innerHTML += display.innerHTML + " +";
  display.innerHTML = "0";
};
minus.onclick = () => {
  previous.innerHTML += display.innerHTML + " -";
  display.innerHTML = "0";
};
multiply.onclick = () => {
  previous.innerHTML += display.innerHTML + " x";
  display.innerHTML = "0";
};
divide.onclick = () => {
  previous.innerHTML += display.innerHTML + " ÷";
  display.innerHTML = "0";
};

// calculate (click equal)
equal.onclick = () => {
  let number = previous.innerHTML.split(" ")[0];
  let op = previous.innerHTML.split(" ")[1];
  let result;
  switch (op) {
    case "+":
      result = Number(number) + Number(display.innerHTML);
      previous.innerHTML = `${number} ${op} ${display.innerHTML} =`;
      display.innerHTML = result;
      console.log(number, op, display.innerHTML, result);
      break;
    case "-":
      result = Number(number) - Number(display.innerHTML);
      previous.innerHTML = `${number} ${op} ${display.innerHTML} =`;
      display.innerHTML = result;
      console.log(number, op, display.innerHTML, result);
      break;
    case "x":
      result = Number(number) * Number(display.innerHTML);
      previous.innerHTML = `${number} ${op} ${display.innerHTML} =`;
      display.innerHTML = result;
      console.log(number, op, display.innerHTML, result);
      break;
    case "÷":
      result = Number(number) / Number(display.innerHTML);
      previous.innerHTML = `${number} ${op} ${display.innerHTML} =`;
      display.innerHTML = result;
      console.log(number, op, display.innerHTML, result);
      break;
    default:
      break;
  }
};

// let textDemo = document.getElementById("text-demo");

// textDemo.innerHTML = "new HTML content";
// textDemo.className = "text-2xl";
// // textDemo.setAttribute("class", "text-2xl");
// // textDemo.style.display = "none";
// // textDemo.style.fontSize = "2rem";
// console.log(textDemo.attributes);

// textDemo.addEventListener("click", onClickDemo);
// // textDemo.addEventListener("dblclick", () => {
// //   let newText = document.createElement("p");
// //   newText.innerHTML = "newly created text";
// //   let body = document.body;
// //   body.appendChild(newText);
// //   alert("hi");
// // });

// function onClickDemo() {
//   alert("Hi");
// }
