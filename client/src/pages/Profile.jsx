import { useState, useEffect } from 'react';
import axios from 'axios'

const Profile = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get('/user/me');
        setFormData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put('/user', formData);
      alert('Profile updated successfully');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 border rounded"
          value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="email" placeholder="Email" className="w-full p-2 border rounded"
          value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <input type="number" placeholder="Phone" className="w-full p-2 border rounded"
          value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
        <button type="submit" className="w-full p-2 bg-purple-500 text-white rounded">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;