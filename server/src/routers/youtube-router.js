import { Router } from "express";
import { youtubeController } from "../controllers/youtubeController";

const youtubeRouter = Router();
youtubeRouter.get("/", youtubeController.getInfo);

export { youtubeRouter };
