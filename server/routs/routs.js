import expres from "express";
import { serverTest, addUser, getUsers, getUser, deleteUserAc } from "../controller/user-controller.js";

const router = expres.Router();

router.post('/', serverTest);
router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:user', getUser);
router.delete('/:user',deleteUserAc);

export default router;