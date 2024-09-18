import { Router } from "express";
import { listUsersController } from "../controllers/UserController";

const router = Router();

router.get('/list', listUsersController);

export default router;