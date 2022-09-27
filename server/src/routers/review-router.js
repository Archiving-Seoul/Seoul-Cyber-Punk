import { Router } from "express";

import { reviewController } from "../controllers/reviewController";

const reviewRouter = Router();
// reviewRouter.get("/youtube", reviewController.addDB);
// reviewRouter.post("/blog", reviewController.addBlog);
reviewRouter.get("/youtube", reviewController.getYoutube);
reviewRouter.get("/blog", reviewController.getBlog);

export { reviewRouter };
