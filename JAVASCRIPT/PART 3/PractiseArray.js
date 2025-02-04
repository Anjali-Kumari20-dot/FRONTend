let month = ["January", "July", "March", "August"];
let lang = ["C", "C++", "html", "JavaScript", "Python", "Java", "C#", "SQL"]
let tic_tac_toe = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];
// month.shift();
// month.shift();
// month.unshift("June");
// month.unshift("July");

month.splice(0, 1);
month.splice(1, 0, "June");
lang.reverse().indexOf("JavaScript");