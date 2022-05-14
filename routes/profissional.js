import controller from "../controllers/profissional.js";


const routeName = "/profissional";

const  routes= (app) => {

    app.route(`/v1${routeName}`).get(controller.get);

    app.route(`/v1${routeName}/:id`).get(controller.getId);

    app.route(`/v1${routeName}`).post(controller.postProfissional);

}

export default routes;
