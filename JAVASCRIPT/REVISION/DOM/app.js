// QUESTION1 - a <p> with red that says "Hey I'm red!"
let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector('body').append(para1);
para1.classList.add("red");

// QUESTION2 - an <h3> with blue text that says "I'm a blue h3!"
let heading = document.createElement('h3');
heading.innerText = "I'm a blue h3!";
document.querySelector('body').append(heading);
heading.classList.add('blue');

// QUESTION3 - a <div> with a black border and pink background color with the following elements inside of it:
// another <h1> that says "I'm in a div"
// a <p> that says "ME TOO!"

let div = document.createElement('div');
let h1 = document.createElement("h1");
let para2 = document.createElement('p');
h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";
document.querySelector('body').prepend(div);
div.append(h1);
div.append(para2);
div.classList.add("box");

// QUESTION4 
let input = document.createElement('input');
let btn = document.createElement('button');

btn.innerText = "Click me!";

document.querySelector("body").append(input);
document.querySelector("body").append(btn);

// QUESTION 5
input.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");

// QUESTION 6
document.querySelector('#btn');
btn.classList.add("btn-style");

// QUESTION 7
let heading2 = document.createElement('h1');
heading2.innerHTML = "<u>DOM Practice</u>";
heading2.classList.add("purple");
document.querySelector("body").append(heading2);

// QUESTION 8
let para3 = document.createElement('p');
para3.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector('body').append(para3);