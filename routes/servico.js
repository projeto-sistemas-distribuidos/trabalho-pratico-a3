import controller from "../controllers/servico.js";


const routeName = "/servico";

const  routes = (app) => {

    app.route(`/v1${routeName}`).get(controller.get);

    app.route(`/v1${routeName}/:id`).get(controller.getId);

    app.route(`/v1${routeName}`).post(controller.postServico);    

}

export default routes;