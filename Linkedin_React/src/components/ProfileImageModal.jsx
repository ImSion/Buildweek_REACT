import React, { useState } from "react";
import axios from "../modules/axios";

const ProfileImageModal = ({ profile, setProfile, onClose }) => {
  const [newProfileImage, setNewProfileImage] = useState(null);

  const handleProfileImageChange = (e) => {
    setNewProfileImage(e.target.files[0]);
  };

  const updateProfileImage = async () => {
    if (!newProfileImage) return;

    const formData = new FormData();
    formData.append("profile", newProfileImage);

    try {
      const response = await axios.post(`/profile/${profile._id}/picture`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProfile((prevProfile) => ({
        ...prevProfile,
        image: response.data.imageUrl, 
      }));
      onClose();
    } catch (error) {
      if (error.response) {
        console.error(`HTTP error: ${error.response.status}`);
      } else if (error.request) {
        console.error("Request error: No response received");
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Cambia immagine del profilo</h2>
        <input 
          type="file" 
          onChange={handleProfileImageChange} 
          className="w-full border p-2 rounded mb-4"
        />
        <div className="flex justify-end">
          <button onClick={onClose} className="mr-2 bg-gray-500 text-white px-4 py-2 rounded">Annulla</button>
          <button onClick={updateProfileImage} className="bg-blue-500 text-white px-4 py-2 rounded">Aggiorna</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileImageModal;
