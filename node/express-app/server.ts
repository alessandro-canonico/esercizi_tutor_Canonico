import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} from "./controllers/planets";
import "express-async-errors";

const app = express();
dotenv.config();
const port = process.env.port;

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);

app.post("/api/planets", create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets/:id", deleteById);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
