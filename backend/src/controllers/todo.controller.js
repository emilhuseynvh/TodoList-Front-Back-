const { addNewTodo, removeTodo, editTodo, editTodoPart } = require("../services/todo.service");
let { data } = require("../store")

const getAllTodo = (req, res) => {
    return res.send(data)
}

const createTodo = async (req, res) => {
    const body = req.body;
    if(body.title && body.content) {
       await addNewTodo(body.title, body.content);
       return res.status(201).json({ "message": "Todo created succesfully", data });
    } else {
        return res.status(400).json({ "message" : "Fill all the sections" });
    }
}

const deleteTodo = async (req, res) => {
    const id = +req.params.id;
    const index = data.findIndex(item => item.id === id)    
    if(index !== -1) {
       data = await removeTodo(id)
       return res.status(204).json({ "message" : "Todo deleted succesfuly", data })
    } else {
        return res.status(404).json({ "message" : "Todo not found" });
    }
}

const updateTodo = async (req, res) => {
    const id = +req.params.id
    const body = req.body
    const index = data.findIndex(item => item.id === id);
    console.log(body);
    
    if (index !== -1) {
        if (!body.title && !body.content) {
            return res.status(400).json({ "message" : "Fill all the sections" });
        } else {
            data = await editTodo(id, body.title, body.content, index)
            return res.status(200).json({ "message" : "Todo updated succesfully" });
        }
    } else {
       return res.status(404).json({ "message" : "Todo not found" });
    }
}

const updateTodoPart = async (req, res) => {
    const id = +req.params.id
    const body = req.body
    const index = data.findIndex(item => item.id === id);
    if(index !== -1) {
        if(!body.title && !body.content) {
           return res.status(400).json({ "message" : "Fill at least 1 section" });
        } else {
            data = await editTodoPart(id, body.title, body.content, index)
            return res.status(200).json({ "message" : "Todo updated succesfully" });
        }
    } else {
        return res.status(404).json({ "message" : "Todo not found" });
    }
}

module.exports = {
    getAllTodo,
    createTodo,
    deleteTodo,
    updateTodo,
    updateTodoPart
}