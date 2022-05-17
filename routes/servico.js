import controller from "../controllers/servico.js";


const routeName = "/servico";

const  routes = (app) => {

    app.route(`/v1${routeName}`).get(controller.get);

    app.route(`/v1${routeName}/:id`).get(controller.getId);

    app.route(`/v1${routeName}`).post(controller.postServico);   
     
    app.route(`/v1${routeName}/:servico_id`).delete(controller.deleteServico);

}

export default routes;