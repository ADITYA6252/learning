import React, { useState } from "react";
import Nav from "./nav";
import { v4 as uuidv4 } from "uuid";
import Footer from "./Footer";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (todo.trim() === "") return;
    setTodos([...todos, { id: uuidv4(), todo, iscompleted: false }]);
    setTodo("");
  };

  const handleEdit = (id) => {
    const newTodo = prompt("Edit your todo:");
    if (newTodo) {
      setTodos(
        todos.map((item) =>
          item.id === id ? { ...item, todo: newTodo } : item
        )
      );
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    let newTodos = [...todos];
    let index = newTodos.findIndex((item) => item.id === id);
    newTodos[index].iscompleted = !newTodos[index].iscompleted;
    setTodos(newTodos);
  };

  return (
    <>

      <Nav />
  
      <div className="container mx-auto my-8 rounded-2xl p-6 bg-violet-100 min-h-[70vh] shadow-lg max-w-3xl transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-101 ">
        <div className="addtodo my-6 text-center">
          <h2 className="text-3xl font-extrabold text-violet-900">Add a Todo</h2>
          <div className="flex justify-center items-center gap-4 mt-6">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              placeholder="Write your todo..."
              className="w-80 bg-white border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              onClick={handleAdd}
              className="bg-violet-700 hover:bg-violet-900 px-4 py-2 text-sm font-bold text-white rounded-lg shadow-md transition"
            >
              Add
            </button>
          </div> 
        </div>

        <h1 className="text-2xl font-bold text-violet-900 mt-8 mb-4">
          Your Todos
        </h1>
        <div className="todos space-y-4">
          {todos.length === 0 && (
            <p className="text-gray-500 italic">No todos yet. Add one above!</p>
          )}
          {todos.map((item) => (
            <div
              key={item.id}
              className="todo flex justify-between items-center bg-white p-4 rounded-xl shadow-md border hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3">
                <input
                  name={item.id}
                  onChange={handleCheckbox}
                  type="checkbox"
                  checked={item.iscompleted}
                  className="w-5 h-5 accent-violet-700 cursor-pointer"
                />
                <span
                  className={`text-lg ${
                    item.iscompleted ? "line-through text-gray-400" : "text-gray-800"
                  }`}
                >
                  {item.todo}
                </span>
              </div>
              <div className="buttons flex gap-2">
                <button
                  onClick={() => handleEdit(item.id)}
                  className="bg-blue-600 hover:bg-blue-800 px-3 py-1 text-sm font-semibold text-white rounded-md shadow-sm transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-600 hover:bg-red-800 px-3 py-1 text-sm font-semibold text-white rounded-md shadow-sm transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
          
    <Footer/>
    </>
  );
}

export default App;
