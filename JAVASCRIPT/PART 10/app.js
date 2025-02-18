let btns = document.querySelectorAll("button");
// console.dir(btn);

// btn.onclick = function(){
//     console.log("Button was clicked");
// }

// function sayhello(){
//     alert("Hello!");
// }
// btn.onclick = sayhello;

for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
    // btn.onmouseenter = function(){
    //     console.log("You tapped a button 😊")
    // }

    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function (){
        console.log("You double clicked me");
    });
}

function sayHello(){
    alert("Hello");
}

function sayName(){
    alert("Apna College");
}