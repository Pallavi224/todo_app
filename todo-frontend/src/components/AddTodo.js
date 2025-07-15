import react, {useState} from 'react'


const AddTodo = () => {
  const [todo , setTodo] = useState('this is a todo')
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(todo)
  try {
     const responnse = await fetch('http://localhost:3001/add-todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: todo })
    })
    console.log("Response from server:", responnse)

  }catch (error) {
    console.error("Error adding todo:", error);
  }
}
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              />
      <button type="submit">Add Todo</button>
    </form>
  );
}


export default AddTodo;

