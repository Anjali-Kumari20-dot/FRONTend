// Arithmetic Operators
let a = 10;
let b = 5;
console.log("Arithmetic Operators : ")
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Unary Operators
console.log("Unary Operators : ")
console.log(a++);
console.log(++a);
console.log(b--);
console.log(--b);

b = a;
console.log(b);

// Comparison Operators
console.log("Comparison Operators : ");
console.log("5 == 5 : ",5 == 5);
console.log("5 != 5 : ",5 != 5);
console.log("5 >= 0 : ",5 >= 0);
console.log(" '==' compares value, not type: ");
console.log("5 == '5' : ",5 == '5');
console.log("0 == '' : ",0 == '');
console.log("0 == false : ",0 == false);
console.log("null == undefined : ", null == undefined);
console.log(" '===' compares value and type: ");
console.log("'123' === 123 : ",'123' === 123);
console.log("0 === '' : ",0 === '');
console.log("0 === false : ",0 === false);
console.log("null === undefined : ", null === undefined);

// Comparison for non-numbers
console.log("Comparison for non-numbers : ");
console.log("'a' > 'A' : ", 'a' > 'A');
console.log("'a' > 'b' : ", 'a' > 'b');
console.log("'b' < 'c' : ", 'b' < 'c');
console.log("'B' < 'C' : ", 'B' < 'C');
console.log("'*' < '&' : ", '*' < '&');