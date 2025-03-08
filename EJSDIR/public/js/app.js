document.querySelectorAll("btn");

for(btn of btns) {
    btn.addEventListener("click", () => {
        console.log("Button was clicked");
    });
}