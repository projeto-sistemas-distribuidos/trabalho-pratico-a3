import db from "../sql/sequelize.js";
import { DataTypes } from "sequelize";
import Solicitacao from "./solicitacao.js";
import Agenda from "./agenda.js";
import Avaliacao from "./avaliacao.js";

const Profissional = db.define(
  "profissionais",
  {
    profissional_id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    cpf_cnpj: {
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
    area_atuacao: {
      type: DataTypes.STRING,
    },
    descricao: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    
    createdAt: false,
    
    updatedAt: false,
  }
);

Solicitacao.belongsTo(Profissional, {foreignKey: "profissional_id"});
Agenda.belongsTo(Profissional, {foreignKey: "profissional_id"});
Avaliacao.belongsTo(Profissional, {foreignKey: "profissional_id"});

export default Profissional;
