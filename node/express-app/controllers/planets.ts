import { Request, Response } from "express";
import Joi from "joi";
import pgPromise from "pg-promise";

const db = pgPromise()(
  "postgres://postgres:Vinile@1996@localhost:5432/planetsDB"
);

const setupDb = async () => {
  await db.none(`
  DROP TABLE IF EXISTS planets;

  CREATE TABLE planets (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
  )`);

  await db.none(`
  INSERT INTO planets (name)
  VALUES ('Earth')
  `);
  await db.none(`
  INSERT INTO planets (name)
  VALUES ('Mars')
  `);
};
setupDb();

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

export { getAll, getOneById, create, updateById, deleteById };