import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import StoreList from '../components/StoreList';
import '../assets/styles/Dashboard.css';

const UserDashboard = () => {
  const [stores, setStores] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/api/user/stores', {
        headers: { Authorization: token }
      });
      setStores(res.data);
    };
    fetchData();
  }, [token]);

  return (
    <div className="dashboard">
      <h1>User Dashboard</h1>
      <StoreList stores={stores} />
    </div>
  );
};

export default UserDashboard;
