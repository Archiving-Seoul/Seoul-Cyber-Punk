import {Router} from "express";
import {tourController} from "../controllers/tourController";
import {upload} from "../middlewares/multer";

const tourRouter = Router();
// api/spot

tourRouter.get("/", tourController.readByCateogry);
// tourRouter.get("/", tourController.output);
tourRouter.post("/", upload.single("src"), tourController.upload);
tourRouter.post("/img", upload.single("src"), tourController.uploadSub);
tourRouter.post("/create", tourController.create);

export {tourRouter};
