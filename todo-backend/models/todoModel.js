const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false
  },
    createdAt: {
        type: Date,
        default: Date.now
    },
    completedAt: {
        type: Date,
        default: null
    }
});

//const Todo = mongoose.model('Todo', todoSchema);

module.exports = mongoose.model('Todo', todoSchema);
//module.exports = Todo;    
