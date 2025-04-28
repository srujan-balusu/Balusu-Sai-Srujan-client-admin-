import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
// import ClientDashboard from './components/ClientDashboard';
// import AdminDashboard from './components/AdminDashboard';
// import Profile from './pages/Profile';
// import CreateTodo from './pages/CreateTodo';
// import ViewTodos from './pages/ViewTodos';
// import { useEffect, useState } from 'react';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/client" element={role === 1 ? <ClientDashboard /> : <Navigate to="/login" />} />
        <Route path="/admin" element={role === 0 ? <AdminDashboard /> : <Navigate to="/ViewTodos" />} />
        <Route path="/profile" element={role === 1 ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/create-todo" element={role === 1 ? <CreateTodo /> : <Navigate to="/login" />} /> */}
        {/* <Route path="/view-todos" element={role === 1 ? <ViewTodos /> : <Navigate to="/login" />} /> */}
      </Routes>
    </Router>
  );
};

export default App;