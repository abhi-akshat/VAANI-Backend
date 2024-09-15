import * as dotenv from "dotenv";
dotenv.config();

import app from "./server";

app.get("/", (req, res) => {
  res.send("VAANI Backend!");
});
