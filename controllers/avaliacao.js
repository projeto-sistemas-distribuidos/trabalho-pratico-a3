import avaliacaoRepository from "../models/avaliacao.js";

const controller = {
  getAvaliacao(req, res) {
    avaliacaoRepository
      .findAll({
        where: {
          profissional_id: req.body.profissional_id,
          servico_id: req.body.servico_id,
        },
      })
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },
  postAvaliacao(req, res) {
    avaliacaoRepository
      .create({
        servico_id: req.body.servico_id,
        cliente_id: req.body.cliente_id,
        profissional_id: req.body.profissional_id,
        avaliacao_servico: req.body.avaliacao_servico,
      })
      .then((result) => res.status(201).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },
  putAvaliacao(req, res) {
    avaliacaoRepository
      .update(
        {
          avaliacao_servico: req.body.avaliacao_servico,
        },
        {
          where: {
            servico_id: req.body.servico_id,
            cliente_id: req.body.cliente_id,
            profissional_id: req.body.profissional_id,
          },
        }
      )
      .then(() => res.status(204).send())
      .catch((err) => res.status(400).json({ error: err.message }));
  },
};

export default controller;
