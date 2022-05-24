import agendaRepostory from "../models/agenda.js";

const controller = {
  get(req, res) {
    agendaRepostory
      .findAll()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(400).json({ error: err.message }));
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
};

export default controller;
