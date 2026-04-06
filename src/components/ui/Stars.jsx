// src/components/ui/Stars.jsx
import React from 'react';

const Stars = ({ rating = 5, size = "text-sm" }) => {
  return (
    <span className={size}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= rating ? "text-amber-500" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </span>
  );
};

export default Stars;