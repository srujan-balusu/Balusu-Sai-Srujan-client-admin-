import { useState } from 'react';
;import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const CreateTodo = () => {
  const [formData, setFormData] = useState({ title: '', description: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/todo', formData);
      navigate('/view-todos');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Create TODO</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Title" className="w-full p-2 border rounded"
          value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
        <textarea placeholder="Description" className="w-full p-2 border rounded"
          value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Create</button>
      </form>
    </div>
  );
};

export default CreateTodo;