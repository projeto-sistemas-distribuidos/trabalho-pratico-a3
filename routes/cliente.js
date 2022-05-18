import controllerCliente from "../controllers/cliente.js";

const routeName = "/cliente"

const  routes= (app) => {

    app.route(`/v1${routeName}`).get(controllerCliente.get);

    app.route(`/v1${routeName}/:id`).get(controllerCliente.getId);
    
    app.route(`/v1${routeName}`).post(controllerCliente.post);
    
    app.route(`/v1${routeName}/:id`).put(controllerCliente.put);

}


export default routes;