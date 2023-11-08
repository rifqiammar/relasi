const express = require("express");
const { item, customer } = require("./models");

const app = express();

app.get("/", async (req, res) => {
  try {
    // const data = await user.findAll();
    const data = await customer.schema("purchasing").findAll({
      include: item.schema("purchasing"),
    });

    res.status(200).json({
      message: "Success",
      data: data,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error.message,
    });
  }
});

app.listen(3003, () => {
  console.log("listening on port 3003");
});

// npx sequelize-cli model:generate --name customer --attributes firstName:string,lastName:string,email:string
// npx sequelize-cli model:generate --name item --attributes name:string,qty:integer,customer_id:integer
// npx sequelize-cli db:migrate
