import { Router } from "express";
import { listUsers } from "../../controllers/userController.js";
import { dummyAuth } from "../../middleware/dummyAuth.js";

const userRouter = Router();

userRouter.get("/", dummyAuth, listUsers);

export default userRouter;
