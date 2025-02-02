let num1 = prompt("Enter first number : ");
let num2 = prompt("Enter Second number : ");
let num3 = prompt("Enter Third number : ");
if(num1 > num2 && num1 > num3){
    console.log(`${num1} is greatest among ${num1}, ${num2}, ${num3}.`)
}else if(num2 > num1 && num2 > num3){
    console.log(`${num2} is greatest among ${num1}, ${num2}, ${num3}.`)
} else{
    console.log(`${num3} is greatest among ${num1}, ${num2}, ${num3}.`)
}