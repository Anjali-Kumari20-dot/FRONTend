let body = document.querySelector("body");
let div = document.querySelector("div");
body.append(div);
div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "";
});
div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "pink";
});