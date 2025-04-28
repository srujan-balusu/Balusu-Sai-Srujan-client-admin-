import { useEffect, useState } from 'react';
import TodoList from '../components/TodoList';
import axios from 'axios'

const ViewTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/todo/admin');
        setTodos(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your TODOs</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default ViewTodos;