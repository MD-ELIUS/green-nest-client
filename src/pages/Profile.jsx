import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import { toast } from 'react-toastify';
import userImg from '../assets/user.png';
import { auth } from '../firebase/firebase.init';

const Profile = () => {
    const { user, setUser, updateUser } = useContext(AuthContext);
    const [updating, setUpdating] = useState(false);

    const handleUpdateProfile = (event) => {
        event.preventDefault();

        let displayName = event.target.name.value;
        let photoURL = event.target.photoUrl.value;

        if (!displayName.trim() && !photoURL.trim()) {
            toast.error("Please update at least one field before submitting.");
            return;
        }


        if (!event.target.name.value.trim()) {
            displayName = user.displayName
        }

        if (!event.target.photoUrl.value.trim()) {
            photoURL = user.photoURL
        }

        setUpdating(true);

        updateUser({ displayName, photoURL })
            .then(() => {
                setUser({
                    ...auth.currentUser,
                    displayName,
                    photoURL,
                });
                toast.success("Profile updated successfully!");
                event.target.reset();
            })
            .catch((error) => {
                toast.error("Failed to update profile: " + error.message);
            })
            .finally(() => setUpdating(false));
    };

    return (
        <div className="w-11/12 max-w-md mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-8 mt-10 mb-20">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">
                Profile
            </h2>

            <div className="flex flex-col items-center gap-4 mb-8">
                <img
                    src={user?.photoURL || userImg}
                    alt="User Avatar"
                    className="w-32 h-32 rounded-full object-cover shadow-md"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = userImg;
                    }}
                />
                <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-800">
                        {user?.displayName || "Anonymous User"}
                    </h3>
                    <p className="text-gray-600">{user?.email || "No email found"}</p>
                </div>
            </div>

            <form onSubmit={handleUpdateProfile} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Update Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="Enter new display name"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-medium mb-1">
                        Update Photo URL
                    </label>
                    <input
                        type="text"
                        name="photoUrl"
                        className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:outline-none"
                        placeholder="Enter new photo URL"
                    />
                </div>

                <button
                    type="submit"
                    disabled={updating}
                    className={`w-full mt-4 btn btn-primary font-semibold text-white py-3 rounded-lg ${updating ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                    {updating ? "Updating..." : "Update Profile"}
                </button>
            </form>
        </div>
    );
};

export default Profile;












