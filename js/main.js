// Variables
let toggle = document.querySelector(".c-theme__interruptor");
let ball = document.querySelector(".c-theme__bolita");
let screen = document.querySelector(".c-calculadora__pantalla");
let inputs = document.querySelectorAll(".c-calculadora__input");
let operators = [...document.querySelectorAll(".c-calculadora__input--operacion")];
let delBtn = document.querySelector(".c-calculadora__del");
let resetBtn = document.querySelector(".c-calculadora__reset");
let equal = document.querySelector(".c-calculadora__igual");

// Toggle Theme
toggle.onclick = () => {
  let left = parseFloat(getComputedStyle(ball).getPropertyValue("left"));
  let toggleWidth = toggle.offsetWidth;
  let ballWidth = ball.offsetWidth;
  let offset = toggleWidth - ballWidth - 3;

  if (left === 3) {
    ball.style.left = `${toggleWidth / 2 - ballWidth / 2}px`;
    document.body.classList.remove("c-theme-3");
    document.body.classList.add("c-theme-2");
    localStorage.setItem("theme", "theme-2");
  } else if (left === toggleWidth / 2 - ballWidth / 2) {
    ball.style.left = `${offset}px`;
    document.body.classList.remove("c-theme-2");
    document.body.classList.add("c-theme-3");
    localStorage.setItem("theme", "theme-3");
  } else {
    ball.style.left = "3px";
    document.body.classList.remove("c-theme-3");
    localStorage.setItem("theme", "theme-1");
  }
};

// Theme Initialization
let currentTheme = localStorage.getItem("theme");
if (currentTheme === "theme-2") {
  ball.style.left = `${toggle.offsetWidth / 2 - ball.offsetWidth / 2}px`;
  document.body.classList.add("c-theme-2");
} else if (currentTheme === "theme-3") {
  let offset = toggle.offsetWidth - ball.offsetWidth - 3;
  ball.style.left = `${offset}px`;
  document.body.classList.add("c-theme-3");
} else {
  ball.style.left = "3px";
}

// Calculator Logic
inputs.forEach((input) => {
  input.addEventListener("click", () => {
    screen.textContent += input.textContent;
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    screen.textContent += ` ${operator.textContent} `;
  });
});

delBtn.addEventListener("click", () => {
  screen.textContent = screen.textContent.slice(0, -1);
});

resetBtn.addEventListener("click", () => {
  screen.textContent = "";
});

equal.addEventListener("click", () => {
  try {
    screen.textContent = eval(screen.textContent);
  } catch (error) {
    screen.textContent = "Error";
  }
});
