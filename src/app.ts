import express from "express";
import { errorHandler } from "./middleware/errorHandler.js";
import { notFoundHandler } from "./middleware/notFound.js";
import { requestLogger } from "./middleware/requestLogger.js";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(requestLogger);
app.use(routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
