let string = prompt("Enter a string value : ");
if(string.length > 5 && (string[0] == 'A' || string[0] == 'a')){
    console.log(`Golden`);
}else {
    console.log(`Not Golden`);
}