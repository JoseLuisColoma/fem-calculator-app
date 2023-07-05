// Variables

let toggle = document.querySelector("header .toggle");
let ball = document.querySelector("header .ball");
let screen = document.querySelector("main .screen");
let inputs = document.querySelectorAll("main .c-input");
let operators = [...document.querySelectorAll("main .oper")];
let delBtn = document.querySelector("main .del");
let resetBtn = document.querySelector("main .reset");
let equal = document.querySelector("main .equal");

// Toggle Theme

toggle.onclick = () => {
  let left = getComputedStyle(ball).getPropertyValue("left");
  switch (left) {
    case "3px":
      ball.style.left = `${toggle.offsetWidth / 2 - ball.offsetWidth / 2}px`;
      document.body.classList.add("theme-2");
      break;
    case `${toggle.offsetWidth / 2 - ball.offsetWidth / 2}px`:
      ball.style.left = `${toggle.offsetWidth - ball.offsetWidth - 3}px`;
      document.body.classList.remove("theme-2");
      document.body.classList.add("theme-3");
      break;
    case `${toggle.offsetWidth - ball.offsetWidth - 3}px`:
      ball.style.left = "3px";
      document.body.classList.remove("theme-3");
  }
};

// Events

inputs.forEach((i) => {
  i.onclick = () => {
    let lastI = screen.textContent.slice(-1);
    let opera = operators.map((e) => e.innerHTML);
    if (
      !(opera.includes(lastI) && opera.includes(i.innerHTML)) &&
      !(opera.includes(i.innerHTML) && i.innerHTML !== "-" && screen.innerHTML == "")
    ) {
      screen.innerHTML += i.innerHTML;
    }
  };
});

delBtn.onclick = () => (screen.innerHTML = screen.innerHTML.slice(0, -1));

resetBtn.onclick = () => (screen.innerHTML = "");

equal.onclick = () => {
  let equation = screen.innerHTML.replace(/x/g, "*");
  if (eval(equation) != "Infinity") screen.innerHTML = eval(equation);
};