import controller from "../controllers/solicitacao.js";

const routeName = "/solicitacao";

const routes = (app) => {
    app.route(`/v1${routeName}`).get(controller.get);
}

export default routes;