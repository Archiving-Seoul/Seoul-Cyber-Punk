import {Router} from "express";
import {tourController} from "../controllers/tourController";
import {upload} from "../middlewares";

const tourRouter = Router();

tourRouter.get("/", tourController.output);
tourRouter.post("/", upload.single("src"), tourController.create);

export {tourRouter};
