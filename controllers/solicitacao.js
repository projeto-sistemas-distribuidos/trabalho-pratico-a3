import solicitacaoRepository from "../models/solicitacao.js";
import { v4 as uuidv4 } from "uuid";

const controller = {
  get(req, res) {
    solicitacaoRepository
      .findAll()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },
  
};

export default controller;
