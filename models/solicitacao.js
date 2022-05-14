import db from "../sql/sequelize.js";
import { DataTypes } from "sequelize";

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

export default Solicitacao;
