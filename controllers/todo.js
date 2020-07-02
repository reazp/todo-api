const { Todo } = require("../models");

console.log(Todo);

const listTodos = async function (req, res) {
  const todos = await Todo.findAll();
  return res.send(todos);
};

const createTodo = async function (req, res) {
  const body = req.body;

  try {
    const todo = await Todo.create({
      title: body.title,
      details: body.details,
      isCompleted: body.isCompleted,
    });
    res.status(201).send("Added Successfully");
  } catch (err) {
    console.log("error", err);
    return res.status(504).send({ error: err.errors[0].message });
  }
};

const showTodo = async function (req, res) {
  const results = await Todo.findAll({
    where: {
      id: req.params.id,
    },
  });

  res.send(results);
};

const deleteTodo = async function (req, res) {
  const todoId = req.params.id;
  const todoDeleted = await Todo.destroy({ where: { id: todoId } });

  if (todoDeleted) {
    res.status(204).send({ status: "deleted" });
  } else {
    res.status(404).send({ status: "Contact not found" });
  }
};

const editTodo = async function (req, res) {
  const body = req.body;
  try {
    await Todo.update(
      {
        title: body.title,
        details: body.details,
        isCompleted: body.isCompleted,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(`${body.title} ${body.description}'s info has been updated.`);
  } catch (err) {
    console.log("error", err);
    return res.status(504).send({
      error: err.errors[0].message,
    });
  }
};

module.exports = {
  listTodos,
  createTodo,
  showTodo,
  deleteTodo,
  editTodo,
};
