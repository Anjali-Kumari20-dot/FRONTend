// let p = document.querySelector("p");

// p.addEventListener("click", function() {
//     console.log("Paragraph was clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("Mouse inside box");
// })

let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor = "pink";
}

btn.addEventListener("click", changeColor);

p.addEventListener("click", changeColor);

h1.addEventListener("click", changeColor);

h3.addEventListener("click", changeColor);

