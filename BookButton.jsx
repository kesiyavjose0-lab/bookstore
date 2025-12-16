import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookButton = ({ book }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/books/${book._id}`)}
      style={{
        display: 'block',
        margin: '10px',
        padding: '10px',
        width: '200px',
        cursor: 'pointer',
      }}
    >
      {book.title} - {book.status}
    </button>
  );
};

export default BookButton;
