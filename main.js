// import mongoose from "mongoose";
// import express from "express";
// import { Todo }  from "./models/Todo.js";  // Updated for named import

// let conn = await mongoose.connect("mongodb+srv://Zunoon:pirzada786@cluster0.eoign.mongodb.net/");

// const app = express();
// const port = 3000;

// app.get('/', async (req, res) => {
//     const todo = new Todo({ title: "Todo", desc: "This is todo description", isDone: false, days: 1 });
//     todo.save();
//     res.send('Hello World!');
// });
// app.get('/a', async (req, res) => {
//     let todo = await Todo.findOne({})
//     todo.deleteMany()
//     console.log(todo);

    
//     res.json({title:todo.title,desc:todo.desc});
// });
// app.get('/delete', async (req, res) => {
//     let todo = await Todo.deleteMany({})
    
//     res.send("Remove all documents in todo database");
//     res.json({message:"all todos deleted"});
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port http://localhost:${port}`);
// });
