let greet = "hello";
function changeGreet(){
    let greet = "Namaste";
    console.log(greet);
    function innerGreet(){
        console.log(greet);
    }
}

console.log(greet);
changeGreet();