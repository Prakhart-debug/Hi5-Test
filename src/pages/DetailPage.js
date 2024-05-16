// src/pages/DetailPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function DetailPage() {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) return <p>No data available</p>;

  return (
    <div className="detail-page">
      <h2>Detail Page</h2>
      <p><strong>Field 1:</strong> {data.field1}</p>
      <p><strong>Field 2:</strong> {data.field2}</p>
      <p><strong>Field 3:</strong> {data.field3}</p>
      <p><strong>Field 4:</strong> {data.field4}</p>
    </div>
  );
}

export default DetailPage;
