// EVERY
// Returns true if every element of array gives true for some function. Else returns false.
// arr.every(some function defination or name);
[1, 2, 3, 4].every((el) => (el % 2 == 0)); // logical "AND"

[1, 3, 8].some((el) => (el % 2 == 0)); // TRUE -> logical "OR"