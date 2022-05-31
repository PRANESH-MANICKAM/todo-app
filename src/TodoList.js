import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
//   const handleComplete = (todo) => {
//     setTodos(
//       todos.map((item) => {
//         if (item.id === todo.id) {
//           return { ...item, completed: !item.completed };
//         }
//         return item;
//       })
//     );
//   };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      {todos.map((todo) => (
        <span className="todoList" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "completed" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            {/* <button
              className="button-complete"
              onClick={() => handleComplete(todo)}
            >
              Done
            </button> */}
            <button className="button-edit" onClick={() => handleEdit(todo)}>
              Edit
            </button>
            <button
              className="button-delete"
              onClick={() => handleDelete(todo)}
            >
              Delete
            </button>
          </div>
        </span>
      ))}
    </div>
  );
};

export default TodoList;
