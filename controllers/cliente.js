import clienteRepository from "../models/cliente.js";
import { v4 as uuidv4 } from "uuid";

const controller = {
  get(req, res) {
    clienteRepository
      .findAll()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },
  postCliente(req, res) {
    const id = uuidv4();
    clienteRepository
      .create({
        cliente_id: `cli:${id}`,
        nome: req.body.nome,
        cpf: req.body.cpf,
        endereco: req.body.endereco,
        sexo: req.body.sexo,
        telefone: req.body.telefone,
        idade: req.body.idade,
        email: req.body.email,
        senha: req.body.senha,
      })
      .then((result) => res.status(201).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },
};

export default controller;
