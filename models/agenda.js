import db from "../sql/sequelize.js";
import { DataTypes } from "sequelize";

const Agenda = db.define(
  "agendas",
  {
    data: {
      type: DataTypes.DATEONLY,
    },
    hora: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,

    createdAt: false,

    updatedAt: false,
  }
);

Agenda.removeAttribute('id');

export default Agenda;