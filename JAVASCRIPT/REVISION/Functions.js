// QUESTION 1
// let arr = [12, 34, 24, 12, 23];
// let n = 15;
// function greaterThan(n, arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > n)  return arr[i];
//     }
// }

// console.log(`${greaterThan(n, arr)}`);


// QUESTION 2
// let str = "abcdabcdefgggh";

// function extractUnique(str){
//     let ans = "";
//     for(let i = 0; i < str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1)
//             ans += currChar;
//     }
//     return ans;
// }

// console.log(`${extractUnique(str)}`);

// QUESTION 3
let country = ["Australia", "Germany", "United States of America"];

function longestName(arr){
    let ansIdx = 0;
    for(let i = 0; i < arr.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}

console.log(`${longestName(country)}`);

// QUESTION 4
let str = "australia";

function countVowels(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == 'a' || str[i] == 'e' ||str[i] == 'i' ||str[i] == 'o' ||str[i] == 'u' )
            count++;
    }
    console.log(`${count}`);
}

countVowels(str);

// QUESTION 5
function generateRandomNumber(start, end){
    let diff = end - start;
    let rand = Math.floor(Math.random() * diff) + start;
    console.log(`${rand}`);
}

generateRandomNumber(1, 10);