let { data } = require("../store")

const addNewTodo = (title, content) => {
   const id =  data.length ?  +data[data.length -1].id + 1 : 1;
   const todo = {
        id : id,
        title: title,
        content: content
   }
   data.push(todo);
}

const removeTodo = (id) => {
     data = data.filter(item => item.id !== id)
     return data
     
}

const editTodo = (id, title, content, index) => {
    const item = { id, title, content }
    data[index] = item
    return data
}

const editTodoPart = (id, title, content, index) => {
    const item = {
        id,
        title: title ? title : data[index].title,
        content: content ? content : data[index].content
    }
    data[index] = item
    return data
}
module.exports = {
    addNewTodo,
    removeTodo,
    editTodo,
    editTodoPart
}