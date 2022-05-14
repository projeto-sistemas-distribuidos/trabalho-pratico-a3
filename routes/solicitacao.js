import controller from "../controllers/solicitacao.js";

const routeName = "/solicitacao";

const routes = (app) => {
    app.route(`/v1${routeName}`).get(controller.get);
    app.route(`/v1${routeName}`).post(controller.postSolicitacao);
}

export default routes;