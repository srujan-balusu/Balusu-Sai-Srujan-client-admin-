import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import api from '../utils/api';
import axios from 'axios'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login")
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', data.token);
      navigate(data.role === 0 ? '/admin' : '/client');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 >Login</h2>
      <form onSubmit={handleSubmit} >
        <input type="email" placeholder="Email"
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="password" placeholder="Password"
          value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;