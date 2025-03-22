let btns = document.querySelectorAll(".color-btn");
let body = document.querySelector("body");
let div = document.querySelector("div");

for (let btn of btns) {
  let handleEvent = () => {
    let color = btn.id;
    body.classList.remove("pink", "blue", "purple", "orange", "green");
    body.classList.add(color);
    body.append(div);
  };

  // ------------ MOUSE/ POINTER EVENTS -------------
  //   btn.onclick = handleEvent;
  //   btn.onmouseenter = handleEvent;

  // ------------- AddEventListener ------------------
  btn.addEventListener("click", handleEvent);
  btn.addEventListener("mouseenter", handleEvent);
}

// ------------- ACTIVITY ---------------
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let box = document.querySelector(".container");
let p = document.querySelector(".container p");

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

btn.addEventListener("click", () => {
  let randomColor = getRandomColor();
  p.innerText = randomColor;

  box.style.backgroundColor = randomColor;
});

// --------------------- this in event listeners -----------------
let btn2 = document.querySelectorAll("button");

function changeColor() {
  this.style.backgroundColor = "pink";
}

// MOUSE EVENT
btn.addEventListener("dblclick", function (event) {
  console.log(event);
  console.log("Button Clicked");
});
// KEYBOARD EVENTS

let inp = document.createElement("input");
let para = document.createElement("p");
document.querySelector("body").append(para);
inp.addEventListener("keydown", (event) => {
  console.log(event);
  console.log(`key: ${event.key}`);
  console.log(`code: ${event.code}`);
  console.log("Well done key is pressed");
  para.innerText = inp.value;
  // Game
  console.log("Code = ", event.code);
  if (event.code == "ArrowUp" || event.code == "KeyU") {
    console.log("Character moves Up");
  } else if (event.code == "ArrowDown" || event.code == "KeyD") {
    console.log("Character moves Down");
  } else if (event.code == "ArrowLeft" || event.code == "KeyL") {
    console.log("Character moves Left");
  } else if (event.code == "ArrowRight" || event.code == "KeyR") {
    console.log("Character moves Right");
  }
});
document.querySelector("body").append(inp);
