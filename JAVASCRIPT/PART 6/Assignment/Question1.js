// Write a javaScript function that returns array elements larger than a number.
let arr = [12, 23, 34, 33, 22];

function identify_Larger(arr, n) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > n){
            console.log(arr[i]);
            break;
        }
    }
};

identify_Larger(arr, 21);