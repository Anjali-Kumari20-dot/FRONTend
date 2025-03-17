// import * as z from "zod";
// import { generateMock } from "@anatine/zod-mock";

// const mysql = require("mysql2");
import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "123anjali..",
});

try {
    connection.query("SHOW TABLES", (err, result) => {
        if(err) throw err;
        console.log(result);
    });
}catch(err) {
    console.log(err);
};
    

// let getRandomUser = () => {
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
