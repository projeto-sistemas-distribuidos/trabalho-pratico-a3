import controllerProfissional from "../controllers/profissional.js";


const routeName = "/profissional";

const  routes= (app) => {

    app.route(`/v1${routeName}`).get(controllerProfissional.get);

    app.route(`/v1${routeName}/:id`).get(controllerProfissional.getId);

    app.route(`/v1${routeName}`).post(controllerProfissional.post);

    app.route(`/v1${routeName}/:id`).put(controllerProfissional.put);
    
    app.route(`/v1${routeName}/:id`).delete(controllerProfissional.delete);

}

export default routes;
