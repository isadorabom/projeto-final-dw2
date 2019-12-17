const { Router } = require("express");

const UserController = require("./controllers/User");
const SessionController = require("./controllers/Session");
const MenuItemController = require("./controllers/MenuItem");
const ControlCardController = require("./controllers/ControlCard");

const authMiddleware = require("./middlewares/auth");
const authorizationMiddleware = require("./middlewares/authorization");

const routes = Router();

routes.get("/user", UserController.index);
routes.get("/menuitem", MenuItemController.index);
routes.post("/session", SessionController.store);
routes.post("/menuitem", MenuItemController.store);
routes.get("/menuitem/:description", MenuItemController.getByDescription);
routes.post("/controlcard", ControlCardController.store);
routes.delete("/menuitem/:id", MenuItemController.destroy);

routes.use(authMiddleware);
routes.post("/user", authorizationMiddleware, UserController.store);
routes.delete("/user/:id", authorizationMiddleware, UserController.destroy);

module.exports = routes;
