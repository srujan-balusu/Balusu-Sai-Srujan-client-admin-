import { Link } from 'react-router-dom';

const ClientDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Client Dashboard</h1>
      <div className="space-y-2">
        <Link to="/create-todo" className="block p-2 bg-blue-500 text-white rounded">Create TODO</Link>
        <Link to="/view-todos" className="block p-2 bg-green-500 text-white rounded">View TODOs</Link>
        <Link to="/profile" className="block p-2 bg-purple-500 text-white rounded">Profile Settings</Link>
      </div>
    </div>
  );
};

export default ClientDashboard;