// let btn = document.querySelector("button");

// btn.addEventListener("click", function(event) {
//     console.log(event);
//     console.log("button clicked");
// })

// btn.addEventListener("dblclick", function(event) {
//     console.log(event);
//     console.log("button clicked");
// })

let input = document.querySelector("input");

input.addEventListener("keydown", function(event){
    console.log("Code = ", event.code); //ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    if(event.code == "KeyU") {
        console.log("Character moves up");
    } else if (event.code == "KeyD") {
        console.log("Character moves down");
    } else if(event.code == "KeyL") {
        console.log("Character moves left");
    } else if(event.code == "KeyR") {
        console.log("Character moves Right");
    }
});