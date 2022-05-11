import express from "express";
import cors from "cors";
import routeClient from "./routes/profissional.js";

import db from "./sql/sequelize.js";

db.authenticate()
.then(() => {
 console.info('INFO - Database connected.')
})

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

routeClient(app);

app.use(express.json());

app.listen("3000", () =>{
    console.log("Servidor aberto");
});