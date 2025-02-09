const random = Math.floor(Math.random() * 6) + 1;
let guess = prompt("Enter a number: ");
while(true){
    if(guess == "quit"){
        console.log("You quitted");
        break;
    }
    if(guess == random) {
        guess = prompt("Congratulations, You guessed it right , the dice roll is ",random);
        break;
    }
}