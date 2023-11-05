import dotenv from "dotenv";
import express, { Express } from "express";
import todoRoutes from "./routes/todoRoutes";
import { PrismaClient } from "@prisma/client";
dotenv.config();

const app: Express = express();

const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todo", todoRoutes);

const main = async () => {
  await prisma.$connect();

  console.log("Database connection established");

  app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
  });
};

main();
