import { useState } from "react";
import "./Todo.css";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  let [todos, setTodos] = useState([
    { task: "Sample Tasks", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4() }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    // FILTER -> to delete from array
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };

  let mark = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  let editTodo = (id, newTask) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id == id ? { ...todo, task: newTask } : todo
      )
    );
  };

  let [editingId, setEditingId] = useState(null);

  return (
    <div className="container">
      <div className="title">
        <button onClick={addNewTask} className="createTask">
          Create task
        </button>
        <input
          type="text"
          placeholder="Add a task"
          value={newTodo}
          onChange={updateTodoValue}
          className="addTask"
        />
      </div>

      <h4 className="TasksList">To Do Tasks</h4>

      <div className="body">
        <ul>
          {/* MAP ->  to render */}
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                className="form-check-input check"
                type="checkbox"
                checked={todo.isDone}
                onChange={() => mark(todo.id)}
              />
              <label
                className="form-check-label"
                for="flexCheckDefault"
              ></label>
              {/* Make task editable */}
              {editingId == todo.id ? (
                <input
                  type="text"
                  className="editTask"
                  autoFocus
                  onBlur={(e) => {
                    editTodo(todo.id, e.target.value);
                    setEditingId(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      editTodo(todo.id, e.target.value);
                      setEditingId(null);
                    }
                  }}
                />
              ) : (
                <h3 className="task">{todo.task}</h3>
              )}

              {/* Pencil icon triggers editing */}
              <i
                class="fa-solid fa-pencil"
                onClick={() => setEditingId(todo.id)}
              ></i>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="cross insideLi"
              >
                X
              </button>
              <button onClick={() => mark(todo.id)} className="mark insideLi">
                {todo.isDone ? "Undo" : "Mark as Done"}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <br />
      {/* <button onClick={upperCaseAll}>UpperCase All</button> */}
    </div>
  );
}
