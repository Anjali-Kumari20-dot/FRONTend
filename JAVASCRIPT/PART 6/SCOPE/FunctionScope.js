let sum = 54; // global function

function clac_sum(a, b){
    let sum = a + b; // function scope
    console.log(sum);
}

clac_sum(3452, 76859);
console.log(sum);
