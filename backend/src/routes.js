const { Router } = require("express");

const UserController = require("./controllers/User");
const SessionController = require("./controllers/Session");

const authMiddleware = require("./middlewares/auth");
const authorizationMiddleware = require("./middlewares/authorization");

const routes = Router();

routes.get("/users/:email", UserController.index);
routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);
routes.post("/users", authorizationMiddleware, UserController.store);
routes.delete("/users/:id", authorizationMiddleware, UserController.destroy);
routes.get("/teste", (req, res) => res.json({ ok: true }));

module.exports = routes;
