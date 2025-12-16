import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import booksData from "../Data/Books";

const AdminDashboard = () => {
  const [books, setBooks] = useState(booksData);
  const [showModal, setShowModal] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    status: "Available",
    genre: "",
    year: "",
    rating: "",
    price: "",
    pages: "",
    language: "",
    isbn: "",
    description: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const addBook = () => {
    const nextId = books.length ? Math.max(...books.map(b => b.id || 0)) + 1 : 1;
    setBooks((prev) => [...prev, { id: nextId, ...newBook }]);
    setShowModal(false);
    setNewBook({
      title: "",
      author: "",
      status: "Available",
      genre: "",
      year: "",
      rating: "",
      price: "",
      pages: "",
      language: "",
      isbn: "",
      description: ""
    });
  };

  const toggleStatus = (id) => {
    setBooks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: b.status === "Available" ? "Rented" : "Available" } : b))
    );
  };

  const deleteBook = (id) => {
    setBooks((prev) => prev.filter((b) => b.id !== id));
  };

  const totalBooks = books.length;
  const availableBooks = books.filter((b) => b.status === "Available").length;
  const rentedBooks = books.filter((b) => b.status === "Rented").length;

  return (
    <div className="min-h-screen bg-[#fdebf3] p-6 md:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-pink-700 flex items-center gap-2">
          📚 Admin Dashboard
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <div className="text-sm text-gray-600">
            Total: <span className="font-semibold text-pink-600">{totalBooks}</span> • 
            Available: <span className="font-semibold text-green-600">{availableBooks}</span> • 
            Rented: <span className="font-semibold text-red-600">{rentedBooks}</span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-pink-600 text-white px-4 py-2 rounded-lg shadow hover:bg-pink-700 transition flex items-center gap-2"
          >
            📚 Add Book
          </button>
        </div>
      </div>

      {/* Books Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-lg font-bold text-pink-700 mb-1">{book.title}</h2>
              <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
              <p className="text-gray-500 text-xs mb-1"><span className="font-semibold">Genre:</span> {book.genre}</p>
              <p className="text-gray-500 text-xs mb-1"><span className="font-semibold">Year:</span> {book.year}</p>
              <p className="text-gray-500 text-xs mb-1"><span className="font-semibold">Rating:</span> {book.rating} ⭐</p>
              <p className={`text-xs font-semibold mb-2 ${book.status === "Available" ? "text-green-600" : "text-red-600"}`}>
                {book.status}
              </p>
              <p className="text-gray-700 text-sm mb-2"><span className="font-semibold">Price:</span> ₹{book.price ?? "-"}</p>
              <p className="text-gray-500 text-sm line-clamp-3">{book.description}</p>
            </div>
            <div className="flex gap-1 p-2 border-t">
  <button
    onClick={() => toggleStatus(book.id)}
    className="bg-blue-600 text-white text-[10px] px-1 py-1 rounded hover:bg-blue-700"
  >
    Toggle
  </button>
  <button
    onClick={() => navigate(`/books/${book.id}`)}
    className="bg-pink-500 text-white text-[10px] px-1 py-1 rounded hover:bg-pink-600"
  >
    View
  </button>
  <button
    onClick={() => deleteBook(book.id)}
    className="bg-red-600 text-white text-[10px] px-1 py-1 rounded hover:bg-red-700"
  >
    Delete
  </button>
</div>
          </div>
        ))}
      </div>

      {/* Add Book Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40 px-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
            <h2 className="text-xl font-bold text-pink-700 text-center mb-4">📚 Add New Book</h2>

            <div className="space-y-2">
              {[
                { name: "title", type: "text" }, { name: "author", type: "text" },
                { name: "status", type: "text" }, { name: "genre", type: "text" },
                { name: "year", type: "number" }, { name: "rating", type: "number" },
                { name: "price", type: "number" }, { name: "pages", type: "number" },
                { name: "language", type: "text" }, { name: "isbn", type: "text" },
                { name: "description", type: "text" }
              ].map((f) => (
                <input
                  key={f.name}
                  name={f.name}
                  type={f.type}
                  placeholder={f.name.charAt(0).toUpperCase() + f.name.slice(1)}
                  value={newBook[f.name]}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              ))}
            </div>

            <div className="mt-4 flex justify-between">
              <button onClick={addBook} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Save
              </button>
              <button onClick={() => setShowModal(false)} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
