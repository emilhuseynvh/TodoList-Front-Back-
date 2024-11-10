const { Router } = require('express');
const { getAllTodo, createTodo, deleteTodo, updateTodo, updateTodoPart } = require('../controllers/todo.controller');

const todoRouter = Router();

todoRouter.get('/', getAllTodo);
todoRouter.post('/', createTodo);
todoRouter.delete('/:id', deleteTodo);
todoRouter.put('/:id', updateTodo);
todoRouter.patch('/:id', updateTodoPart)

module.exports = todoRouter;