import express from "express";
import * as dotenv from "dotenv";
import connectToDB from "./config/db.config";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
connectToDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err: any) => {
    console.error(err.message);
  });
