import { useEffect, useState } from 'react';
import axios from 'axios'
import Pagination from './Pagination';
import TodoList from './TodoList';

const AdminDashboard = () => {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const { data } = await axios.get(`/todo/admin?page=${currentPage}`);
        setTodos(data.todos);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTodos();
  }, [currentPage]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <TodoList todos={todos} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default AdminDashboard;