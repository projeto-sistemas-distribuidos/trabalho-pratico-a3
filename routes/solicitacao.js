import controller from "../controllers/solicitacao.js";

const routeName = "/solicitacao";

const routes = (app) => {
    app.route(`/v1${routeName}`).get(controller.get);
    app.route(`/v1${routeName}/:id`).get(controller.getId);
    app.route(`/v1${routeName}/profissional/disponivel`).get(controller.getDisponivel);
    app.route(`/v1${routeName}/cliente/:cliente_id`).get(controller.getCliente);
    app.route(`/v1${routeName}`).post(controller.postSolicitacao);
}

export default routes;