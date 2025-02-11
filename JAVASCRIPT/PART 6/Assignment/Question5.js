// Write a JavaScript function to generate a random number within a range (start, end).

function random(start, end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}

console.log(random(100,200));