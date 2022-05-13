import express from "express";
import cors from "cors";
import routeProfissional from "./routes/profissional.js";
import routeServico from "./routes/servico.js";


const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

routeProfissional(app);
routeServico(app);


app.listen("4000", () =>{
    console.log("Servidor aberto");
});