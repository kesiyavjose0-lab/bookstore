import { useParams, Link } from "react-router-dom";
import books from "../Data/Books";

export default function BookDetails() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Book not found</h2>
        <Link
          to="/home"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen p-10 bg-gray-100 flex flex-col items-center"
    >
      <img
        src={book.image}
        alt={book.title}
        className="w-72 h-96 object-contain mb-6 rounded shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
      <p className="text-xl italic text-gray-700 mb-2">{book.author}</p>
      <p className="mb-2">
        <strong>Genre:</strong> {book.genre}
      </p>
      <p className="mb-2">
        <strong>Published:</strong> {book.year}
      </p>
      <p className="mb-2">
        <strong>Pages:</strong> {book.pages}
      </p>
      <p className="mb-2">
        <strong>Language:</strong> {book.language}
      </p>
      <p className="mb-2">
        <strong>ISBN:</strong> {book.isbn}
      </p>
      <p className="mb-2">
        <strong>Rating:</strong> {book.rating}
      </p>
      <p className="mb-2">
        <strong>Status:</strong>{" "}
        <span
          className={`px-2 py-1 rounded ${
            book.status === "Available"
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {book.status}
        </span>
      </p>
      <p className="mt-4 mb-6 text-gray-800">{book.description}</p>
      <Link
        to="/home"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
}
