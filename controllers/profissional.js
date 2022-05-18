import profissionalRepository from "../models/profissional.js";
import { v4 as uuidv4 } from "uuid";

const controller = {
  get(req, res) {
    profissionalRepository
      .findAll()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  getId(req, res) {
    profissionalRepository
      .findByPk(req.params.id)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  post(req, res) {
    const id = uuidv4();
    profissionalRepository
      .create({
        profissional_id: `pro:${id}`,
        nome: req.body.nome,
        cpf_cnpj: req.body.cpf_cnpj,
        endereco: req.body.endereco,
        sexo: req.body.sexo,
        telefone: req.body.telefone,
        idade: req.body.idade,
        email: req.body.email,
        senha: req.body.senha,
        area_atuacao: req.body.area_atuacao,
        descricao: req.body.descricao,
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
      email: req.body.email,
      senha: req.body.senha,
      area_atuacao: req.body.area_atuacao,
      descricao: req.body.descricao
    }
    await profissionalRepository.update(alteracao, {
      where: {
        profissional_id: req.params.id
      }
    }).then((result) => res.status(200).json(alteracao))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  async delete(req, res) {
    await profissionalRepository.destroy({
      where: {
        profissional_id: req.params.id,
      },
    }).then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

};

export default controller;
