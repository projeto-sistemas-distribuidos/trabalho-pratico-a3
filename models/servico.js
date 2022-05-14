import db from "../sql/sequelize.js";
import { DataTypes } from "sequelize";
import Solicitacao from "./solicitacao.js";

const Servico = db.define(
  "servicos",
  {
    servico_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    materiais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,

    createdAt: false,

    updatedAt: false,
  }
);

Servico.hasMany(Solicitacao);
Solicitacao.hasOne(Servico);

export default Servico;
