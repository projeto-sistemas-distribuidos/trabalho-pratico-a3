import agendaRepostory from "../models/agenda.js";

const controller = {
  get(req, res) {
    agendaRepostory
      .findAll()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },

  getProfissional(req, res) {
    if (req.body.data == undefined) {
      agendaRepostory
        .findAll({
          where: {
            profissional_id: req.params.profissional_id,
          },
        })
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).json({ error: err.message }));
    } else {
      agendaRepostory
        .findAll({
          where: {
            profissional_id: req.params.profissional_id,
            data: req.body.data,
          },
        })
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).json({ error: err.message }));
    }
  },

  post(req, res) {
    agendaRepostory
      .create({
        profissional_id: req.body.profissional_id,
        data: req.body.data,
        hora: req.body.hora,
        solicitacao_id: req.body.solicitacao_id,
      })
      .then((result) => res.status(201).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },
  patch(req, res) {
    agendaRepostory
      .update(
        {
          data: req.body.data,
          hora: req.body.hora,
        },
        { where: { solicitacao_id: req.params.solicitacao_id } }
      )
      .then(() => res.status(204).send())
      .catch((err) => res.status(400).json({ error: err.message }));
  },
  delete(req, res) {
    agendaRepostory
      .destroy({ where: { solicitacao_id: req.params.solicitacao_id } })
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
  },
};

export default controller;
