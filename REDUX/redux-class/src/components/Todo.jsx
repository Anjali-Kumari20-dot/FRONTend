import { useSelector } from "react-redux";
import AddForm from "./AddForm";

export default function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  console.log(todos);
  return (
    <>
      <AddForm />
      <h3>Todo List App</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}
          <button>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
