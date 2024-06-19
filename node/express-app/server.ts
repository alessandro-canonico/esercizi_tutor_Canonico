import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import morgan from "morgan"
import Joi from "joi"
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

  const schema = Joi.object({
    id: Joi.number().integer(),
    name : Joi.string().required()
  })
  app.get("/api/planets", (req, res) => {
    res.status(200).json(planets)
    console.log(planets);
  })

  app.get("/api/planets/:id", (req, res) => {
    const {id} = req.params
    const planet = planets.find((planet) => planet.id === Number(id))
    res.status(200).json(planet)
    console.log(planet);
  })

  app.post("/api/planets", (req,res) => {
    const {id, name} = req.body
    const newPlanet = {id, name}
    const validateNew = schema.validate(newPlanet)

    if (validateNew.error) {
      return res.status(400).json({message: validateNew.error})
    } else {
      planets = [...planets, newPlanet]
      console.log(newPlanet);
      res.status(201).json({ msg: 'Pianeta creato con successo' });
    }
  })

  app.put("/api/planets/:id", (req, res) => {
    const {id} = req.params
    const {name} = req.body
    planets = planets.map(p => p.id === Number(id) ? ({...p, name}) : p )
    res.status(200).json({msg: "pianeta aggiornato"})
  })

  app.delete("/api/planets/:id", (req, res) => {
    const {id} = req.params
    planets = planets.filter(p => p.id !== Number(id))
    res.status(200).json({ msg: 'eliminato' });
  })



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})