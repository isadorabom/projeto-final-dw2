const { Router } = require("express");

const UserController = require("./controllers/User");
const SessionController = require("./controllers/Session");

const authMiddleware = require("./middlewares/auth");
const authorizationMiddleware = require("./middlewares/authorization");

const routes = Router();

routes.get("/user/:email", UserController.index);
routes.post("/session", SessionController.store);
routes.get("/teste", (req, res) => res.json({ ok: true }));

routes.use(authMiddleware);
routes.post("/user", authorizationMiddleware, UserController.store);
routes.delete("/user/:id", authorizationMiddleware, UserController.destroy);

module.exports = routes;
