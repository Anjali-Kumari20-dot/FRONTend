// Destructuring
// Storing values of array into multiple variables

let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup, ...others] = names;
console.log(winner, runnerup, ...others); // "tony" "bruce"

// OBJECTS

const student = {
    name: "Anjali",
    class: 10,
    age: 16,
    subjects: ["Hindi", "English", "Math", "Science", "Social Studies"],
    username: "Anjali123@...",
    password: 1234,
};

const{username: user, password: pass } = student;

console.log(user);  //"Anjali123@..."