import { Request, Response } from "express";
import { db } from "../db";
import Joi from "joi";

const schema = Joi.object({
  id: Joi.number().integer(),
  name: Joi.string().required(),
});

const getAll = async (req: Request, res: Response) => {
  const planets = await db.many(`SELECT * FROM planets`);
  res.status(200).json({ planets });
};

const getOneById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = await db.one(`SELECT * FROM planets WHERE id=$1`, Number(id));
  res.status(200).json(planet);
};

const create = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newPlanet = await db.manyOrNone(
    `INSERT INTO planets (name) VALUES ($1)`,
    name
  );
  const validateNew = schema.validate(newPlanet);

  if (validateNew.error) {
    return res.status(400).json({ message: validateNew.error });
  } else {
    res.status(201).json({ msg: "Pianeta creato con successo" });
  }
};

const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  await db.any(`UPDATE planets SET name=$2 WHERE id=$1`, [Number(id), name]);
  res.status(200).json({ msg: "pianeta aggiornato" });
};

const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.any(`DELETE FROM planets WHERE id=$1`, Number(id));
  res.status(200).json({ msg: "eliminato" });
};

const createImg = async (req: Request, res: Response) => {
  const { id } = req.params
  const fileName = req.file?.path
  if (fileName) {
    await db.none(`UPDATE planets SET image=$2 Where id=$1`, [id, fileName])
    res.status(201).json({msg: "Planet image uploaded"})
  } else {
    res.status(400).json({msg: "failed to upload"})
  }
}

export { getAll, getOneById, create, updateById, deleteById, createImg};
