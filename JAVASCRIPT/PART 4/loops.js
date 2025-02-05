// for(let i = 1; i <= 5; i++){
//     console.log(i);
// }
// for(let i = 2; i <= 10 ; i++){
//     if(i % 2 == 0) console.log(i) ;
// }
// let n = prompt("Write your number: "); 
// for(let i = 1; i <= 10; i++){
//     console.log(n*i);
// }
// for(let i = 1; i <= 3; i++){
//     for(let j = 1; j <= 3; j++){
//         console.log(j);
//     }
// }
// let i = 1;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// let guess = prompt("Enter your guess movie: ");
// let favMovie = "Avatar";
// while((guess != favMovie) && (guess != 'quit')){
//         console.log("Wrong");
//         guess = prompt("Try again: ");
// }

// if(guess == favMovie) {
//     console.log("Congrats 😁, you guessed right")
// }else{
//     console.log("Quit");
// }

// let fruits = ["mango", "Litchi", "Apple", "Banana", "Orange"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(i, fruits[i]);
// }

// let heroes = [["Ironman", "Spiderman", "Thor"], ["Superman", "Wonder woman", "Flash"]];

// for(let i = 0; i < heroes.length; i++){
//     console.log(`Heroes #${i}`);
//     for(let j = 0; j < heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

// let fruits = ["mango", "Litchi", "Apple", "Banana", "Orange"];
// for(fruit of fruits){
//     console.log(fruit);
// }

// for(char of "Anjali Kumari"){
//     console.log(char);
// }

let heroes = [["Ironman", "Spiderman", "Thor"], ["Superman", "Wonder woman", "Flash"]];
for(list of heroes){
    for(hero of list){
        console.log(hero);
    }
}