const express = require('express');
const toDoRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

const todos = [
    {
        name: "Learn Express",
        description: "finish Level 5",
        imageUrl: ".https://unsplash.com/photos/monitor-showing-java-programming-OqtafYT5kTw?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash",
        completed: false,
        _id: uuidv4()
    },

    {
        name: "Dishes",
        description: "Wash Dishes",
        imageUrl: "https://findingfarina.com/wp-content/uploads/2021/06/b4cea0be5f15511139d94e4d0b197f6b.jpeg",
        completed: false,
        _id: uuidv4()
    },

]

toDoRouter.get("/",(req,res,) => {
    res.send(todos)
});


toDoRouter.get("/:id", (req, res) => {
    const id = req.params.id;
    const todo = todos.find((todo) => todo._id === id);

    if (!todo) {
        return res.status(404).send("Todo not found");
    }

    res.send(todo);
});

toDoRouter.post("/", (req, res) => {
    const newTodo = req.body;
    newTodo._id = uuidv4();
    todos.push(newTodo);
    res.send("Todo added successfully");
})

toDoRouter.put("/:id", (req, res) => {
    const updatedTodo = req.body;
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo._id === id);

    if (index === -1) {
        return res.status(404).send("Todo not found");
    }

    todos[index] = {...todos[index],...updatedTodo };
    res.send("Todo updated successfully");
});

toDoRouter.delete("/:id", (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo._id === id);

    if (index === -1) {
        return res.status(404).send("Todo not found");
    }

    todos.splice(index, 1);
    res.send("Todo deleted successfully");
});

module.exports = toDoRouter;
