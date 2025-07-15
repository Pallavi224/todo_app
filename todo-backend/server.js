const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Todo = require('./models/todoModel') // Ensure this path is correct


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://devops:devops@todo-bd.js4zafd.mongodb.net/?retryWrites=true&w=majority&appName=Todo-BD")
    console.log("MongoDB connected successfully")
  } catch (error) {
    console.error("MongoDB connection failed:", error)
    process.exit(1)
  }
}
app.get('/get-todo', async (req, res) => {
    console.log("Fetching todos")
    try {
        const todos = await Todo.find()
        console.log("Todos fetched successfully:", todos)
        res.status(200).json(todos)
    }
    catch (error) {
      console.error("Error fetching todos:", error)
      res.status(500).json({ error: 'Failed to fetch todos please try latter' })
    }
})
app.post('/add-todo', async (req, res) => {
    try {
      const title = req.body.title
      console.log("Received todo title:", title.todo)
      const newTodo = new Todo({ 
          title: title.todo
      })
      console.log("New Todo object:", newTodo)
      const saveTodo = await newTodo.save()
      console.log("Saving new todo:", saveTodo)
      res.status(200).json(saveTodo)
    } catch (error) {
      console.error("Error adding todo:", error)
     // res.status(500).json({ error: 'Failed to add todo' })
    }
})


connectDB()
const PORT= 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`)
})