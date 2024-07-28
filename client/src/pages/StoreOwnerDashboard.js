import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import Rating from '../components/Rating';
import '../assets/styles/Dashboard.css';

const StoreOwnerDashboard = () => {
  const [storeRatings, setStoreRatings] = useState({});
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/api/store/ratings', {
        headers: { Authorization: token }
      });
      setStoreRatings(res.data);
    };
    fetchData();
  }, [token]);

  return (
    <div className="dashboard">
      <h1>Store Owner Dashboard</h1>
      <p>Store: {storeRatings.store?.name}</p>
      {storeRatings.ratings?.map(rating => (
        <Rating key={rating._id} rating={rating} />
      ))}
    </div>
  );
};

export default StoreOwnerDashboard;
