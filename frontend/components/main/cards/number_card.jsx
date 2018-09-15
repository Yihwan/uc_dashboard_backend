import React from 'react';

const NumberCard = ({ title, value, lastUpdated }) => (
  <div className="card number-card">
    <div className="title">{title}</div>
    <div className="value">{value}</div>
    <div className="last-updated">{lastUpdated}</div>
  </div>
);

export default NumberCard;
