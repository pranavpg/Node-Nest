import express from "express";
import { notFoundHandler } from "./middleware/notFound.js";
import { requestLogger } from "./middleware/requestLogger.js";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use(routes);

app.use(notFoundHandler);

export default app;
