import controllerAgenda from "../controllers/agenda.js";

const routeName = "/agenda";

const routes = (app) => {

    app.route(`/v1${routeName}`).get(controllerAgenda.get);

    app.route(`/v1${routeName}`).post(controllerAgenda.post);

    app.route(`/v1${routeName}/profissional/:profissional_id`).get(controllerAgenda.getProfissional)

    app.route(`/v1${routeName}/:solicitacao_id`).patch(controllerAgenda.patch);

    app.route(`/v1${routeName}/:solicitacao_id`).delete(controllerAgenda.delete);
    

}


export default routes;