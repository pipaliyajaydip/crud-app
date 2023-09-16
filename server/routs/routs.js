import expres from "express";
import { serverTest, addUser } from "../controller/user-controller.js";

const router = expres.Router();

router.post('/',serverTest);
router.post('/add',addUser);

export default router;