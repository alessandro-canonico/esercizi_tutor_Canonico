import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import "express-async-errors"

const app = express()
dotenv.config()
const port = process.env.port

app.use(express.json())
app.use(cors())
app.use(morgan("combined"))

type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];

  app.get("/planets", (req, res) => {
    res.status(200).json(planets)
    console.log(planets);
  } )


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})