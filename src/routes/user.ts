import { Router } from "express";
import { createUserController, listUsersController } from "../controllers/UserController";

const router = Router();

router.get('/list', listUsersController);
router.post('/create', createUserController);

export default router;