import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import '../assets/styles/Dashboard.css';

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({});
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/admin/dashboard', {
        headers: { Authorization: token }
      });
      setDashboardData(res.data);
    };
    fetchData();
  }, [token]);

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <p>Total Users: {dashboardData.totalUsers}</p>
      <p>Total Stores: {dashboardData.totalStores}</p>
      <p>Total Ratings: {dashboardData.totalRatings}</p>
    </div>
  );
};

export default AdminDashboard;
