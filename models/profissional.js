import db from "../sql/sequelize.js";
import { DataTypes } from "sequelize";

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

export default Profissional;
