import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import "express-async-errors";
import multer from "multer";

import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
  createImg
} from "./controllers/planets";

import {
  login,
  signup,
  logout
} from "./controllers/users"

const app = express();
dotenv.config();
const port = process.env.port;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({storage})

app.use(express.json());
app.use(cors());
app.use(morgan("combined"));
app.use('/uploads', express.static('uploads'));

app.get("/api/planets", getAll);

app.get("/api/planets/:id", getOneById);

app.post("/api/planets", create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets/:id", deleteById);

app.post("/api/planets/:id/image", upload.single("image"), createImg);

app.post("/api/users/login", login)
app.post("/api/users/signup", signup )
app.get("/api/users/logout", logout )



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
