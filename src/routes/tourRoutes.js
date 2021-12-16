import express from "express"; // package has role on routing and data management
import TourController from "../controllers/tourController";
import Validator from "../middlewares/validator";

const tourRouter = express.Router();

tourRouter.post(
    "/register",
    Validator.newTourRules(),
    Validator.validateInput,
    TourController.createTour
      );

tourRouter.post("/register", TourController.createTour);
tourRouter.get("/all", TourController.getAllTours);
tourRouter.get("/:id", TourController.getOneTour);
tourRouter.delete("/:id",TourController.deleteOneTour);
export default tourRouter;