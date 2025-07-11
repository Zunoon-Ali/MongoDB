import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    days: Number,
    isDone: Boolean
});

// Named export
export const Todo = mongoose.model('Todo', TodoSchema);
