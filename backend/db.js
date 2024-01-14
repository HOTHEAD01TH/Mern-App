const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://dbUser:qwertyuiop@cluster0.m7ulx8q.mongodb.net/todoapp")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}