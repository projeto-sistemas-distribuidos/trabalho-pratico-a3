import controller from "../controllers/avaliacao.js";

const routeName = "/avaliacao";

const routes = (app) => {
    
    app.route(`/v1${routeName}`).get(controller.getAvaliacao);

    app.route(`/v1${routeName}`).post(controller.postAvaliacao);

    app.route(`/v1${routeName}`).put(controller.putAvaliacao);
}

export default routes;