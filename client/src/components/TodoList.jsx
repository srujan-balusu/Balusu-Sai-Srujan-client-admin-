const TodoList = ({ todos }) => {
    return (
      <div className="space-y-2">
        {todos.map(todo => (
          <div key={todo._id} className="p-4 border rounded">
            <h3 className="font-bold">{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.status}</p>
            <p>Created by: {todo.userId?.name}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default TodoList;