import express from "express"; // package has role on routing and data management
import UserController from "../controllers/userController";
import Validator from "../middlewares/validator";
import DataChecker from "../middlewares/datachecker";

const userRouter = express.Router();

userRouter.post(
    "/register",
    Validator.newAccountRules(),
    Validator.validateInput,
    DataChecker.isEmailExist,
    UserController.createUser

);
userRouter.post("/login",UserController.userLogin);
userRouter.post("/register", UserController.createUser);
userRouter.get("/all", UserController.getAllUsers);
userRouter.get("/:id", UserController.getOneUser);
userRouter.delete("/:id",UserController.deleteOneUser);
export default userRouter;