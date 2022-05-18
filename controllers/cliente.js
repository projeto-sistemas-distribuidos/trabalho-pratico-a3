import clienteRepository from "../models/cliente.js";
import { v4 as uuidv4 } from "uuid";

const controller = {

  get(req, res) {
    clienteRepository
      .findAll()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  getId(req, res) {
    clienteRepository
      .findByPk(req.params.id)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  post(req, res) {
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

  async put(req, res) {
    const alteracao = {
      nome: req.body.nome,
      endereco: req.body.endereco,
      sexo: req.body.sexo,
      telefone: req.body.telefone,
      idade: req.body.idade,
      email: req.body.email,
      senha: req.body.senha,
    }
    await clienteRepository.update(alteracao, {
      where: {
        cliente_id: req.params.id,
      }
    }).then((result) => res.status(200).json(alteracao))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  async delete(req, res) {
    await clienteRepository.destroy({
      where: {
        cliente_id: req.params.id,
      },
    }).then((result) => res.status(200).json(result))
      .catch((result) => res.status(400).json({ error: err.message }));
  },
};

export default controller;
