function hello() {
    console.log("Hello");
}

// hello();

function print1TO5(){
    for(let i = 1; i <= 5; i++){
        console.log(i);
    }
}

// print1TO5();

function print_Poem(){
    console.log("Hope is the thing with feathers That perches in our Soul— And sings the Tune without the Words— And never stops—at all— ");
}

print_Poem();

// Dice game

function diceGame(){
    const random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

diceGame();