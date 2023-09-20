import express from "express";
import mainRoutes from "./routes/index.routes";

const app = express();
app.use(express.json());
app.use(mainRoutes);

export default app;
