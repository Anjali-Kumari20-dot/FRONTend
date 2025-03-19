// import * as z from "zod";
// import { generateMock } from "@anatine/zod-mock";

// const mysql = require("mysql2");
import {faker} from '@faker-js/faker';
import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "123anjali..",
});
let getRandomUser = () => {
    return [
        faker.datatype.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};

// let c = "CREATE TABLE user(id INT PRIMARY KEY, username VARCHAR(50), email VARCHAR(50), password VARCHAR(15))";
// INSERTING NEW DATA
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];
for (let i = 0; i <= 100; i++){
    console.log(getRandomUser());
}
// try {
//     connection.query(q, users, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err) {
//     console.log(err);
// };
 
// connection.end();


// let getRandomUser = (

// ) => {
//   const schema = z.object({
//     id: z.string().nonempty(),
//     name: z.string(),
//     email: z.string().email().optional(),
//     password: z.string().min(10).optional(),
//   });
//   return generateMock(schema);
// };

// console.log(getRandomUser());

// const schema = z.object({
//       uid: z.string().nonempty(),
//       name: z.string(),
//       theme: z.enum([`light`, `dark`]),
//       email: z.string().email().optional(),
//       phoneNumber: z.string().min(10).optional(),
//       avatar: z.string().url().optional(),
//       jobTitle: z.string().optional(),
//       otherUserEmails: z.array(z.string().email()),
//       stringArrays: z.array(z.string()),
//       stringLength: z.string().transform((val) => val.length),
//       numberCount: z.number().transform((item) => `total value = ${item}`),
//       age: z.number().min(18).max(120),
//     });
// const mockData = generateMock(schema);

// console.log(mockData);
