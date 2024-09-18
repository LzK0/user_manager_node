import { Router } from "express";
import { indexController } from "../controllers/IndexController";
import routerUsers from "./user";

const router = Router();

router.use('/users', routerUsers);
router.get('/', indexController);

export default router;