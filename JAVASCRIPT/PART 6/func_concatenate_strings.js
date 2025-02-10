// create a function that returns the concatenation of all strings in an array.

let str = ["hi ", "hello ", "Anjali ", "bye ", "!"];
function concat_strings(str){
    let result = "";
    for(let i = 0; i < str.length; i++){
        result += str[i];
    }
    return result;
}
console.log(concat_strings(str));