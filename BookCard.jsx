import React from "react";

const BookCard = ({ book }) => {
  return (
    <div style={styles.card}>
      {/* Book Image */}
      <img
        src={book.image}
        alt={book.title}
        style={styles.image}
      />

      {/* Book Title */}
      <h3 style={styles.title}>{book.title}</h3>

      {/* Author */}
      <p style={styles.author}>{book.author}</p>

      {/* Status */}
      <span
        style={{
          ...styles.status,
          backgroundColor: book.status === "Available" ? "#c6f6d5" : "#fed7d7",
          color: book.status === "Available" ? "#22543d" : "#742a2a",
        }}
      >
        {book.status}
      </span>

      {/* Buttons */}
      <div style={styles.actions}>
        <button style={styles.likeBtn}>👍 Like {book.likes}</button>
        <button style={styles.commentBtn}>💬 Comment {book.comments}</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #d6bcfa",
    borderRadius: "12px",
    padding: "16px",
    width: "100%",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "12px",
  },
  title: {
    color: "#7c3aed",
    fontWeight: "600",
  },
  author: {
    color: "#4a5568",
    fontSize: "14px",
  },
  status: {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    margin: "10px 0",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "12px",
  },
  likeBtn: {
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  commentBtn: {
    backgroundColor: "#22c55e",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default BookCard;
