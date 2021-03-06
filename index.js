import express from "express";
import cors from "cors";
import routeProfissional from "./routes/profissional.js";
import routeServico from "./routes/servico.js";
import routeCliente from "./routes/cliente.js";
import routeSolicitacao from "./routes/solicitacao.js"
import routeAgenda from "./routes/agenda.js";
import routeAvaliacao from "./routes/avaliacao.js";


const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

try{
    
    routeProfissional(app);
    routeServico(app);
    routeCliente(app);
    routeSolicitacao(app);
    routeAgenda(app);
    routeAvaliacao(app);

    app.listen("4000", () =>{
        console.log("Servidor aberto");
    });
}
catch (err) {
    console.error(err);
}


