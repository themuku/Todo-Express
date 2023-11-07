import { Router } from "express";
import * as todoController from "../controllers/todoController";

const router: Router = Router();

router.route("/").get(todoController.getAllTodos).post(todoController.addTodo);

router
  .route("/:id")
  .get(todoController.getTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

export default router;
