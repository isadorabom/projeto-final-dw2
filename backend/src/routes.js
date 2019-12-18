const { Router } = require("express");

const UserController = require("./controllers/User");
const SessionController = require("./controllers/Session");
const MenuItemController = require("./controllers/MenuItem");
const ControlCardController = require("./controllers/ControlCard");
const OldControlCardController = require("./controllers/OldControlCard");

const authMiddleware = require("./middlewares/auth");
const authorizationMiddleware = require("./middlewares/authorization");

const routes = Router();

routes.post("/session", SessionController.store);

routes.get("/user", UserController.index);
routes.get("/menuitem", MenuItemController.index);
routes.post("/menuitem", MenuItemController.store);
routes.get("/menuitem/:value", MenuItemController.show);
routes.delete("/menuitem/:id", MenuItemController.destroy);

routes.post("/controlcard", ControlCardController.store);
routes.get("/controlcard/:table", ControlCardController.show);
routes.delete("/controlcard/:table", ControlCardController.destroy);
routes.put("/controlcard/", ControlCardController.update);

routes.post("/oldcontrolcard/", OldControlCardController.store);
routes.use(authMiddleware);
routes.post("/user", authorizationMiddleware, UserController.store);
routes.delete("/user/:id", authorizationMiddleware, UserController.destroy);

module.exports = routes;
