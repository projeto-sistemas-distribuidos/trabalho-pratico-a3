import solicitacaoRepository from "../models/solicitacao.js";
import { v4 as uuidv4 } from "uuid";

const controller = {
  get(req, res) {
    solicitacaoRepository
      .findAll()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  getId(req, res) {
    solicitacaoRepository
      .findByPk(req.params.id)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  getCliente(req, res) {
    solicitacaoRepository
      .findAll({ where: { cliente_id: req.params.cliente_id } })
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  getDisponivel(req, res) {
    solicitacaoRepository
      .findAll({ where: { profissional_id: null } })
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  postSolicitacao(req, res) {
    const id = uuidv4();
    solicitacaoRepository
      .create({
        solicitacao_id: `sol:${id}`,
        cliente_id: req.body.cliente_id,
        servico_id: req.body.servico_id,
      })
      .then((result) => res.status(201).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  deleteSolicitacao(req, res) {
    solicitacaoRepository
      .destroy({
        where: {
          solicitacao_id: req.params.solicitacao_id,
        },
      })
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },
};

export default controller;
