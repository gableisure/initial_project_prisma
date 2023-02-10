import { Router } from "express";
import { entitiesRoutes } from "./entities.routes";

const routes = Router();

routes.use("/api/entities", entitiesRoutes);

export { routes };