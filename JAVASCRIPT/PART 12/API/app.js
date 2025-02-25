// let jsonRes = '{"message":"https:\/\/images.dog.ceo\/breeds\/lhasa\/n02098413_17364.jpg","status":"success"}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes);

// console.log(validRes.message);

// let student = {
//     name : "Anjali",
//     marks: 95 
// };

let url = "https://catfact.ninja/fact";
fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log("data1 = " ,data.fact);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log("data2 = ", data2.fact);
    })
    .catch((err) => {
        console.log("ERROR - ",err);
    });