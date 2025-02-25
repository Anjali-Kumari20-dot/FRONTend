// let jsonRes = '{"message":"https:\/\/images.dog.ceo\/breeds\/lhasa\/n02098413_17364.jpg","status":"success"}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);

// console.log(validRes.message);

// let student = {
//     name : "Anjali",
//     marks: 95 
// };


//---------------- OUR FIRST API REQUEST --------------- 

// let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log("data1 = " ,data.fact);
//         return fetch(url);
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data2) => {
//         console.log("data2 = ", data2.fact);
//     })
//     .catch((err) => {
//         console.log("ERROR - ",err);
//     });

//     console.log("I am happy :)");

//------------ USING FETCH WITH ASYNC-AWAIT ------------

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);

        let res2 = await fetch(url);
        let data2 = await res.json();
        console.log(data2.fact);
    }catch(e){
        console.log("Error - ", e);
    }

    console.log("bye");
}
