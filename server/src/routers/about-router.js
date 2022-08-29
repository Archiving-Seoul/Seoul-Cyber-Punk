import { Router } from "express";
import { aboutController } from "../controllers/aboutController";

const aboutRouter = Router();

aboutRouter.get("/", aboutController.getInfo);

export { aboutRouter };
