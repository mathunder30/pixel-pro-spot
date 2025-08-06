import { Router } from "express";
import { RegisterUserController } from "../controllers/User.controllers.js";

const router = Router();

router.post('/user/register', RegisterUserController);
export default router;