import { useState } from "react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Kesiya V Jose",
    place: "Kerala",
    age: 21,
    email: "kesiya@gmail.com",
    education: "BCA",
    phone: "9876543210",
    rentedBooks: 3
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="min-h-screen bg-[#f5f3ff] flex justify-center p-8">
      <div className="bg-white shadow-xl p-8 rounded-2xl w-full max-w-xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-700">
          My Profile
        </h2>

        <div className="flex flex-col space-y-4">

          <div className="flex justify-center">
            <div className="w-32 h-32 bg-purple-300 rounded-full"></div>
          </div>

          <label className="font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!isEditing}
            className="p-2 border rounded-lg"
          />

          <label className="font-semibold">Place</label>
          <input
            type="text"
            name="place"
            value={user.place}
            onChange={handleChange}
            disabled={!isEditing}
            className="p-2 border rounded-lg"
          />

          <label className="font-semibold">Age</label>
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
            disabled={!isEditing}
            className="p-2 border rounded-lg"
          />

          <label className="font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            disabled
            className="p-2 border rounded-lg bg-gray-100"
          />

          <label className="font-semibold">Education</label>
          <input
            type="text"
            name="education"
            value={user.education}
            onChange={handleChange}
            disabled={!isEditing}
            className="p-2 border rounded-lg"
          />

          <label className="font-semibold">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            disabled={!isEditing}
            className="p-2 border rounded-lg"
          />

          <p className="text-lg font-bold mt-4 text-green-700">
            Books Rented: {user.rentedBooks}
          </p>

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-purple-600 text-white p-2 rounded-lg mt-3"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleSave}
              className="bg-green-600 text-white p-2 rounded-lg mt-3"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
