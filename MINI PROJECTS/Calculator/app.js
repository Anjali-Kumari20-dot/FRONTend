const boxes = document.querySelectorAll(".boxes");
const print_values = document.querySelector("#values")
const result = document.querySelector("#result"); 
let string = "";

// let multiplybtn = document.querySelector(".mul");
//     multiplybtn.addEventListener('click', () => {
//     const currentVal = calculatorDisplay.innerText ;
//     calculatorDisplay.innerText  = currentVal + '*';
// });

Array.from(boxes).forEach(box => {
    box.addEventListener('click', (e) => {
        boxes.classList.add("onClick");
        if(e.target.innerHTML == '='){
            string = eval(string);
            result.innerText = string;
        }
        else if (e.target.innerHTML == 'X'){
            string += '*';
            print_values.innerHTML += 'x';
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            result.innerText = string;
            print_values.innerText = string;
        }
        else{
            print_values.classList.add("view");
            string += e.target.innerText;
            print_values.innerText = string;
        }
    })
}) 

// print_values.append(boxes);