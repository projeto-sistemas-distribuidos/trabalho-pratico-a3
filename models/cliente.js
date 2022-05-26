import db from "../sql/sequelize.js";
import { DataTypes } from "sequelize";
import Solicitacao from "./solicitacao.js";
import Avaliacao from "./avaliacao.js";

const Cliente = db.define(
  "clientes",
  {
    cliente_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    cpf: {
      type: DataTypes.STRING,
    },
    endereco: {
      type: DataTypes.STRING,
    },
    sexo: {
      type: DataTypes.STRING,
    },
    telefone: {
      type: DataTypes.STRING,
    },
    idade: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,

    createdAt: false,

    updatedAt: false,
  }
);

Solicitacao.belongsTo(Cliente, {foreignKey: "cliente_id"});
Avaliacao.belongsTo(Cliente, { foreignKey : "cliente_id"});

export default Cliente;
