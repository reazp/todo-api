const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todo");

router.get("/", todoController.listTodos);
router.post("/new", todoController.createTodo);
router.get("/:id", todoController.showTodo);
router.put("/:id", todoController.editTodo);
router.delete("/:id", todoController.deleteTodo);

module.exports = router;
