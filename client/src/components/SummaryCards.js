import React from 'react';
import "../styles.css"; 

const SummaryCards = () => {
  // Example data, replace with actual data fetching logic
  const cards = [
    { title: "Total Revenue", value: "$353,000" },
    { title: "Total Expenses", value: "$278,700" },
    { title: "Net Profit", value: "$74,300" }
  ];

  return (
    <div className="summary-cards">
      {cards.map(card => (
        <div key={card.title} className="card">
          <h3>{card.title}</h3>
          <p>{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;
