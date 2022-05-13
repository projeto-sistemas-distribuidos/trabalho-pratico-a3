import profissionalRepository from "../models/profissional.js";
import { v4 as uuidv4 } from "uuid";

const controller = {
  get(req, res) {
    profissionalRepository.findAll()
      .then( (result) => res.json(result))
      .catch((err) => res.status(400).json(err.message));
  },

  postProfissional(req, res) {

    const id = uuidv4();
    profissionalRepository
      .create({
        profissional_id: id,
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
      .catch((err) => res.status(404).json(err))
  },
};

export default controller;
