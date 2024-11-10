const express = require('express');
const todoRouter = require('./router/todo.router');
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Todo app");
})

app.use('/todo', todoRouter);

app.listen(3002, () => {
    console.log("Server is running on http://localhost:3002");
    
})