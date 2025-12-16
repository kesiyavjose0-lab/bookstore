
import { Link } from "react-router-dom";
import books from "../Data/Books";

export default function Books() {
  return (
    <div
      className="min-h-screen px-10 py-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8">
        {books.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`} className="block">
            <div className="bg-amber-50 rounded-xl shadow-md hover:shadow-lg overflow-hidden border border-amber-200">
              <div className="h-48 bg-amber-100 flex items-center justify-center p-3">
                <img
                  src={book.image}
                  alt={book.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

