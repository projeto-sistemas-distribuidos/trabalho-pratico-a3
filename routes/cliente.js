import controller from "../controllers/cliente.js";

const routeName = "/cliente"

const  routes= (app) => {
    app.route(`/v1${routeName}`).get(controller.get);

    app.route(`/v1${routeName}/:id`).get(controller.getId);
    
    app.route(`/v1${routeName}`).post(controller.postCliente);
}


export default routes;