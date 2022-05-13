import db from "../sql/sequelize.js";
import { DataTypes } from "sequelize";

const Solicitacao = db.define(
  "solicitacoes",
  {
    solicitacao_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    cliente_id: {
      type: DataTypes.STRING,
      allowNull: false,
      foreignKey: "cliente_id",
    },
    profissional_id: {
      type: DataTypes.STRING,
      foreignKey: "profissional_id",
    },
    servico_id: {
      type: DataTypes.STRING,
      foreignKey: "servico_id",
    },
  },
  {
    timestamps: false,

    createdAt: false,

    updatedAt: false,
  }
);

export default Solicitacao;
