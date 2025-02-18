// Qs1. Create a new input and button element on the page using javaScript only. Set the text of button to "Click me";

let button = document.createElement("button");
let input = document.createElement("input");
button.innertext = "Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Qs2. Add following attribute to the element:          
//      - change placeholder value of input to "username"
//      - change the id of button to "btn"

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// Qs3. Access the btn using the querySelector and button id. Change the button background color to blue text color to white.

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// Qs4. Create an h1 element on the page and set its text to "DOM Practice" undelined. Change its color to purple.

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);

// Qs5. Create a p tag on the page and set its text to "Apna College delta Practice", where Delta is bold.

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);