import express, { Express } from "express";
import dotenv from "dotenv";
import userRouter from "./user/user.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});