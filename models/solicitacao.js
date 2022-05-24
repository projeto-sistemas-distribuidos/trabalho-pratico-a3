import db from "../sql/sequelize.js";
import { DataTypes } from "sequelize";
import Agenda from "./agenda.js";

const Solicitacao = db.define(
  "solicitacoes",
  {
    solicitacao_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    }
  },
  {
    timestamps: false,

    createdAt: false,

    updatedAt: false,
  }
);

Agenda.belongsTo(Solicitacao, {foreignKey: "solicitacao_id"});

export default Solicitacao;
