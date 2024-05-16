// src/components/Tile.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Tile({ data, index }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${index}`, { state: { data } });
  };

  return (
    <div className="tile" onClick={handleClick}>
      <p><strong>Field 1:</strong> {data.field1}</p>
      <p><strong>Field 2:</strong> {data.field2}</p>
      <p><strong>Field 3:</strong> {data.field3}</p>
      <p><strong>Field 4:</strong> {data.field4}</p>
    </div>
  );
}

export default Tile;
