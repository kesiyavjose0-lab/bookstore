import { useState } from "react";
import { Link } from "react-router-dom";
import books from "../Data/Books";

export default function Home() {
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  const likeBook = (id) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const commentBook = (id) => {
    const text = prompt("Enter your comment");
    if (text) {
      setComments((prev) => ({
        ...prev,
        [id]: [...(prev[id] || []), text],
      }));
    }
  };

  // Filter books based on search query
  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const leftBooks = filteredBooks.slice(0, Math.ceil(filteredBooks.length / 2));
  const rightBooks = filteredBooks.slice(Math.ceil(filteredBooks.length / 2));

  const BookCard = ({ book }) => (
    <Link to={`/book/${book.id}`} className="block">
      <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-lg transition mb-8 overflow-hidden border border-amber-200">
        <div className="h-48 bg-amber-100 flex items-center justify-center p-3">
          <img
            src={book.image}
            alt={book.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 font-serif">
            {book.title}
          </h2>
          <p className="text-sm text-gray-600 italic mb-2">{book.author}</p>

          <span
            className={`inline-block text-xs px-3 py-1 rounded-full mb-3 ${
              book.status === "Available"
                ? "bg-green-200 text-green-800"
                : "bg-red-200 text-red-800"
            }`}
          >
            {book.status}
          </span>

          <div className="flex justify-between">
            <button
              onClick={(e) => {
                e.preventDefault();
                likeBook(book.id);
              }}
              className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
            >
              👍 {likes[book.id] || 0}
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                commentBook(book.id);
              }}
              className="text-sm bg-gray-700 text-white px-3 py-1 rounded hover:bg-gray-800"
            >
              💬 {comments[book.id]?.length || 0}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );

  return (
    <div
      className="min-h-screen px-10 py-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <h1 className="text-6xl font-extrabold text-center mb-6 text-yellow-400 font-serif drop-shadow-lg">
        📚 Online Bookstore
      </h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search books by title or author..."
          className="px-4 py-2 w-1/2 rounded border border-gray-400 text-black"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Books */}
      <div className="max-w-6xl mx-auto flex gap-12">
        <div className="w-1/2">
          {leftBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        <div className="w-1/2">
          {rightBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
