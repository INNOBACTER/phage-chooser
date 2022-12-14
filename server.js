import express from "express";
import cors from "cors";
import router from "./src/router.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/hello", router);

export default app;
