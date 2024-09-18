import { Router } from "express";
import { indexController } from "../controllers/IndexController";

const router = Router();

router.get('/', indexController);

export default router;