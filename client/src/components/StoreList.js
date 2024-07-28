import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/StoreList.css';

const StoreList = ({ stores }) => {
  return (
    <div className="store-list">
      <h2>Stores</h2>
      <ul>
        {stores.map(store => (
          <li key={store._id}>
            <Link to={`/store/${store._id}`}>{store.name}</Link>
            <p>Rating: {store.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoreList;
