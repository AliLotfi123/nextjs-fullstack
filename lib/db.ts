import mysql from "serverless-mysql";

const db = mysql({
  config: {
    host: "localhost",
    database: "blog",
    user: "development",
    password: "developer",
  },
});

// host: process.env.MYSQL_HOST,
// database: process.env.MYSQL_DATABASE,
// user: process.env.MYSQL_USER,
// password: process.env.MYSQL_PASSWORD,

// MYSQL_HOST: localhost;
// MYSQL_ROOT_PASSWORD: myrootpassword;
// MYSQL_USER: development;
// MYSQL_PASSWORD: developer;
// MYSQL_DATABASE: blog;

export default db;
