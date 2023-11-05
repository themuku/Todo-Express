import { Router } from "express";
import * as todoController from "../controllers/todoController";

const router: Router = Router();

router.route("/").get(todoController.getAllTodos).post(todoController.addTodo);

export default router;
