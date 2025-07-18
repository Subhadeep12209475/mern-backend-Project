const express = require("express");
const { authRouter } = require("./auth/routes");
const { usersRouter } = require("./users/routes");
const { userAuthenticationMiddleware } = require("./middleware");

const apiRouter = express.Router();

apiRouter.use("/auth", authRouter);

apiRouter.use(userAuthenticationMiddleware); // authentication

// all the routes below this middleware are now (protected APIs)

apiRouter.use("/users", usersRouter);

module.exports = { apiRouter };
