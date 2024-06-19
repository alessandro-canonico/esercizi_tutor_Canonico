import { Request, Response } from "express";
import Joi from "joi";

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

const getAll = (req: Request, res: Response) => {
    res.status(200).json(planets)
  }

const getOneById = (req: Request, res: Response) => {
    const {id} = req.params
    const planet = planets.find((planet) => planet.id === Number(id))
    res.status(200).json(planet)
  }

const create = (req: Request, res: Response) => {
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
  }

const updateById = (req: Request, res: Response) => {
    const {id} = req.params
    const {name} = req.body
    planets = planets.map(p => p.id === Number(id) ? ({...p, name}) : p )
    res.status(200).json({msg: "pianeta aggiornato"})
  }

const deleteById = (req: Request, res: Response) => {
    const {id} = req.params
    planets = planets.filter(p => p.id !== Number(id))
    res.status(200).json({ msg: 'eliminato' });
  }

  export { getAll, getOneById, create, updateById, deleteById}