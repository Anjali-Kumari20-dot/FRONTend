function hello() {
    console.log("Inside hello function");
    console.log("Hello");
}

function demo(){
    console.log("Calling hello function");
   hello(); 
}

console.log("Calling demo function");
demo();

console.log("Done, bye!");