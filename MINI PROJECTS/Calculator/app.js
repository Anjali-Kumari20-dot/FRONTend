const boxes = document.querySelectorAll(".boxes");
const print_values = document.querySelector("#values") 
let string = "";

Array.from(boxes).forEach(box => {
    box.addEventListener('click', (e) => {
        console.log(e);
        print_values.classList.add("view");
        string += e.target.innerText;
        // print_values.value = string;
        print_values.innerText = string;
    })
}) 

// print_values.append(boxes);