import controllerAgenda from "../controllers/agenda.js";

const routeName = "/agenda";

const routes = (app) => {

    app.route(`/v1${routeName}`).get(controllerAgenda.get);
    app.route(`/v1${routeName}`).post(controllerAgenda.post);

}


export default routes;