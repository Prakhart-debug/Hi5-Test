// src/pages/HomePage.js
import React, { useState } from 'react';
import Tile from '../components/Tile';
import TileModal from '../components/TileModal';
import Sidebar from '../components/Sidebar';
import './Homepage.css';

function HomePage() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSave = (formData) => {
    setData([...data, formData]);
  };

  return (
    <div className="home-page">
      <Sidebar onAddClick={() => setShowModal(true)} />
      <div className="content">
        <header className="header">
          <h1>React Tile App</h1>
        </header>
        <main className="main">
          <div className="tiles">
            {data.map((item, index) => (
              <Tile key={index} data={item} index={index} />
            ))}
          </div>
          <TileModal showModal={showModal} handleClose={() => setShowModal(false)} handleSave={handleSave} />
        </main>
      </div>
    </div>
  );
}

export default HomePage;
