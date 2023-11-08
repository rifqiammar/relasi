const express = require("express");
const { users, customer } = require("./models");

const app = express();

app.get("/", async (req, res) => {
  try {
    const result = await users.findAll();
    res.send(result);
  } catch (error) {}
});

app.listen(3003, () => {
  console.log("listening on port 3003");
});

// npx sequelize-cli model:generate --name customer --attributes firstName:string,lastName:string,email:string
// npx sequelize-cli model:generate --name item --attributes name:string,qty:integer,customer_id:integer
// npx sequelize-cli db:migrate
