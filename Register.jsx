import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '', role: 1 });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(1)
    try {
      const payload = {
        ...formData,
        role: formData.role === 0 ? 0 : 1 
      };
      const { data } = await axios.post('http://localhost:5000/api/auth/register', payload);
      console.log(2)
      localStorage.setItem('token', data.token);
      navigate(formData.role === 0 ? '/admin' : '/client');
    } catch (error) {
      console.error(error.response?.data || error.message);
      console.error(error);
    }
  };
  return (
    <div >
      <h2 >Register</h2>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder="Name" className="w-full p-2 border rounded"
          value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded"
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded"
          value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <input type="number" placeholder="Phone" className="w-full p-2 border rounded"
          value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <select className="w-full p-2 border rounded" value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: parseInt(e.target.value) })}>
          <option value={1}>Client</option>
          <option value={0}>Admin</option>
        </select>
        <button type="submit" className="w-full p-2 bg-green-500 text-white rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;