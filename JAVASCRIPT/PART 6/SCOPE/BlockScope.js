// BLOCK SCOPE :- Variables declared inside a {} block cannot be accessed from outside the block

{
    var b = 34;
    const a = 25;
}

console.log(b);
console.log(a);