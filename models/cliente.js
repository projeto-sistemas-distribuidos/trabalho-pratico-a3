import db from "../sql/sequelize.js";
import { DataTypes } from "sequelize";
import Solicitacao from "./solicitacao.js";

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
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endereco: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    senha: {
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

Cliente.hasMany(Solicitacao, {as: "solicitacoes"});

export default Cliente;
