import React from 'react';

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <style jsx>{`
        .card {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 16px;
          margin: 8px 0;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h3 {
          margin: 0 0 8px;
          font-size: 1.2rem;
        }
        p {
          margin: 0;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default Card;
