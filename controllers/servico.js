import servicoRepository from "../models/servico.js";
import { v4 as uuidv4 } from "uuid";

const controller = {
  get(req, res) {
    servicoRepository
      .findAll()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },
  postServico(req, res) {
    const id = uuidv4();
    servicoRepository
      .create({
        servico_id: id,
        descricao: req.body.descricao,
        preco: req.body.preco,
        materiais: req.body.materiais,
      })
      .then((result) => res.status(201).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },
};

export default controller;
