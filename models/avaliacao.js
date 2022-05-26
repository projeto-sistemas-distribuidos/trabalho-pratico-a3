import db from "../sql/sequelize.js";
import { DataTypes } from "sequelize";

const Avaliacao = db.define(
  "avaliacoes",
  {
    avaliacao_servico: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,

    createdAt: false,

    updatedAt: false,
  }
);

Avaliacao.removeAttribute('id');

export default Avaliacao;