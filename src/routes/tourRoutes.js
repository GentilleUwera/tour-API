import express from "express"; // package has role on routing and data management
import TourController from "../controllers/tourController";
import Validator from "../middlewares/validator";
import verifyToken from "../middlewares/verifyToken";
import verifyAccess from "../middlewares/verifyAccess"

const tourRouter = express.Router();

tourRouter.post(
    "/createTour", 
    verifyToken,
    verifyAccess("admin"),
    Validator.newTourRules(),
    Validator.validateInput,
    TourController.createTour
      )
tourRouter.get("/all", TourController.getAllTours);
tourRouter.get("/:id", TourController.getOneTour);
tourRouter.delete("/:id",TourController.deleteOneTour);

export default tourRouter;